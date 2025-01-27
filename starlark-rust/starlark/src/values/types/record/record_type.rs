/*
 * Copyright 2019 The Starlark in Rust Authors.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

use std::fmt;
use std::fmt::Display;
use std::hash::Hash;

use allocative::Allocative;
use display_container::fmt_keyed_container;
use either::Either;
use starlark_derive::starlark_value;
use starlark_derive::NoSerialize;
use starlark_derive::StarlarkDocs;
use starlark_derive::Trace;
use starlark_map::small_map::SmallMap;
use starlark_map::StarlarkHasher;

use crate as starlark;
use crate::any::ProvidesStaticType;
use crate::coerce::coerce;
use crate::eval::Arguments;
use crate::eval::Evaluator;
use crate::eval::ParametersSpec;
use crate::starlark_complex_values;
use crate::values::exported_name::ExportedName;
use crate::values::exported_name::FrozenExportedName;
use crate::values::exported_name::MutableExportedName;
use crate::values::function::FUNCTION_TYPE;
use crate::values::record::field::FieldGen;
use crate::values::record::Record;
use crate::values::Freeze;
use crate::values::Freezer;
use crate::values::FrozenValue;
use crate::values::Heap;
use crate::values::StarlarkValue;
use crate::values::Value;
use crate::values::ValueLike;

/// The result of `record()`, being the type of records.
#[derive(
    Debug,
    Trace,
    NoSerialize,
    ProvidesStaticType,
    StarlarkDocs,
    Allocative
)]
#[starlark_docs(builtin = "extension")]
pub struct RecordTypeGen<V, Typ: ExportedName> {
    pub(crate) typ: Typ,
    /// The V is the type the field must satisfy (e.g. `"string"`)
    fields: SmallMap<String, FieldGen<V>>,
    /// Creating these on every invoke is pretty expensive (profiling shows)
    /// so compute them in advance and cache.
    parameter_spec: ParametersSpec<FrozenValue>,
}

impl<'v, V: ValueLike<'v>, Typ: ExportedName> Display for RecordTypeGen<V, Typ> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        fmt_keyed_container(f, "record(", ")", "=", &self.fields)
    }
}

/// Type of a record in a heap.
pub type RecordType<'v> = RecordTypeGen<Value<'v>, MutableExportedName>;
/// Type of a record in a frozen heap.
pub type FrozenRecordType = RecordTypeGen<FrozenValue, FrozenExportedName>;

starlark_complex_values!(RecordType);

pub(crate) fn record_fields<'v>(
    x: Either<&'v RecordType<'v>, &'v FrozenRecordType>,
) -> &'v SmallMap<String, FieldGen<Value<'v>>> {
    x.either(|x| &x.fields, |x| coerce(&x.fields))
}

impl<'v> RecordType<'v> {
    pub(crate) fn new(fields: SmallMap<String, FieldGen<Value<'v>>>) -> Self {
        let parameter_spec = Self::make_parameter_spec(&fields);
        Self {
            typ: MutableExportedName::default(),
            fields,
            parameter_spec,
        }
    }

    fn make_parameter_spec(
        fields: &SmallMap<String, FieldGen<Value<'v>>>,
    ) -> ParametersSpec<FrozenValue> {
        let mut parameters = ParametersSpec::with_capacity("record".to_owned(), fields.len());
        parameters.no_more_positional_args();
        for (name, field) in fields {
            if field.default.is_some() {
                parameters.optional(name);
            } else {
                parameters.required(name);
            }
        }
        parameters.finish()
    }
}

impl<'v> Freeze for RecordType<'v> {
    type Frozen = FrozenRecordType;
    fn freeze(self, freezer: &Freezer) -> anyhow::Result<Self::Frozen> {
        Ok(FrozenRecordType {
            typ: self.typ.freeze(freezer)?,
            fields: self.fields.freeze(freezer)?,
            parameter_spec: self.parameter_spec,
        })
    }
}

#[starlark_value(type = FUNCTION_TYPE)]
impl<'v, Typ: Allocative + 'v, V: ValueLike<'v> + 'v> StarlarkValue<'v> for RecordTypeGen<V, Typ>
where
    Self: ProvidesStaticType<'v>,
    FieldGen<V>: ProvidesStaticType<'v>,
    Typ: ExportedName,
{
    fn write_hash(&self, hasher: &mut StarlarkHasher) -> anyhow::Result<()> {
        for (name, typ) in &self.fields {
            name.hash(hasher);
            // No need to hash typ.1, since it was computed from typ.0
            typ.write_hash(hasher)?;
        }
        Ok(())
    }

    fn invoke(
        &self,
        me: Value<'v>,
        args: &Arguments<'v, '_>,
        eval: &mut Evaluator<'v, '_>,
    ) -> anyhow::Result<Value<'v>> {
        let this = me;

        self.parameter_spec
            .parser(args, eval, |mut param_parser, eval| {
                let fields = record_fields(RecordType::from_value(this).unwrap());
                let mut values = Vec::with_capacity(fields.len());
                for (name, field) in fields.iter() {
                    let value = match field.default {
                        None => {
                            let v: Value = param_parser.next(name)?;
                            field.typ.check_type(v, Some(name))?;
                            v
                        }
                        Some(default) => {
                            let v: Option<Value> = param_parser.next_opt(name)?;
                            match v {
                                None => default,
                                Some(v) => {
                                    field.typ.check_type(v, Some(name))?;
                                    v
                                }
                            }
                        }
                    };
                    values.push(value);
                }
                Ok(eval.heap().alloc_complex(Record {
                    typ: this,
                    values: values.into_boxed_slice(),
                }))
            })
    }

    fn dir_attr(&self) -> Vec<String> {
        vec!["type".to_owned()]
    }

    fn has_attr(&self, attribute: &str, _heap: &'v Heap) -> bool {
        attribute == "type"
    }

    fn get_attr(&self, attribute: &str, heap: &'v Heap) -> Option<Value<'v>> {
        if attribute == "type" {
            Some(
                heap.alloc(
                    self.typ
                        .borrow()
                        .as_ref()
                        .map_or(Record::TYPE, |s| s.as_str()),
                ),
            )
        } else {
            None
        }
    }

    fn equals(&self, other: Value<'v>) -> anyhow::Result<bool> {
        fn eq<'v>(
            a: &RecordTypeGen<impl ValueLike<'v>, impl ExportedName>,
            b: &RecordTypeGen<impl ValueLike<'v>, impl ExportedName>,
        ) -> anyhow::Result<bool> {
            if a.typ.borrow() != b.typ.borrow() {
                return Ok(false);
            };
            if a.fields.len() != b.fields.len() {
                return Ok(false);
            };
            for ((k1, t1), (k2, t2)) in a.fields.iter().zip(b.fields.iter()) {
                // We require that the types and defaults are both equal.
                if k1 != k2
                    || !t1.typ.to_value().equals(t2.typ.to_value())?
                    || t1.default.map(ValueLike::to_value) != t2.default.map(ValueLike::to_value)
                {
                    return Ok(false);
                }
            }
            Ok(true)
        }

        match RecordType::from_value(other) {
            Some(Either::Left(other)) => eq(self, other),
            Some(Either::Right(other)) => eq(self, other),
            _ => Ok(false),
        }
    }

    fn export_as(&self, variable_name: &str, _eval: &mut Evaluator<'v, '_>) {
        self.typ.try_export_as(variable_name);
    }
}
