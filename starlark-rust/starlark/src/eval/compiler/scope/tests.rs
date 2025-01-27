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

#![cfg(test)]

use std::collections::HashMap;
use std::fmt::Write;

use dupe::Dupe;

use crate::environment::names::MutableNames;
use crate::environment::Globals;
use crate::eval::compiler::scope::payload::CstAssign;
use crate::eval::compiler::scope::payload::CstAssignIdent;
use crate::eval::compiler::scope::payload::CstExpr;
use crate::eval::compiler::scope::payload::CstStmt;
use crate::eval::compiler::scope::AssignCount;
use crate::eval::compiler::scope::Captured;
use crate::eval::compiler::scope::ModuleScopes;
use crate::eval::compiler::scope::ResolvedIdent;
use crate::eval::compiler::scope::Slot;
use crate::syntax::ast::DefP;
use crate::syntax::ast::ExprP;
use crate::syntax::ast::StmtP;
use crate::syntax::uniplate::Visit;
use crate::syntax::AstModule;
use crate::syntax::Dialect;
use crate::values::FrozenHeap;
use crate::values::FrozenRef;

fn test_with_module(program: &str, expected: &str, module: &MutableNames) {
    let ast = AstModule::parse("t.star", program.to_owned(), &Dialect::Extended).unwrap();
    let frozen_heap = FrozenHeap::new();
    let codemap = frozen_heap.alloc_any_display_from_debug(ast.codemap.dupe());
    let ModuleScopes {
        cst, scope_data, ..
    } = ModuleScopes::check_module_err(
        module,
        &frozen_heap,
        &HashMap::new(),
        ast.statement,
        FrozenRef::new(Globals::empty()),
        codemap,
        &Dialect::Extended,
    )
    .unwrap();
    let mut r = String::new();
    for (i, binding) in scope_data.bindings.iter().enumerate() {
        if i != 0 {
            r.push(' ');
        }
        let slot = match binding.slot.unwrap() {
            Slot::Module(slot) => format!("m={}", slot.0),
            Slot::Local(slot) => format!("l={}", slot.0),
        };
        let assign_count = match binding.assign_count {
            AssignCount::AtMostOnce => "",
            AssignCount::Any => "+",
        };
        let captured = match binding.captured {
            Captured::Yes => "&",
            Captured::No => "",
        };
        write!(r, "{}:{}{}{}", i, slot, assign_count, captured).unwrap();
    }

    write!(r, " |").unwrap();

    struct Visitor<'a> {
        r: &'a mut String,
    }

    impl Visitor<'_> {
        fn visit_expr(&mut self, expr: &CstExpr) {
            if let ExprP::Identifier(ident) = &expr.node {
                let resolved = match ident.node.1.as_ref().unwrap() {
                    ResolvedIdent::Slot(_slot, binding_id) => binding_id.0.to_string(),
                    ResolvedIdent::Global(_) => "G".to_owned(),
                };
                write!(&mut self.r, " {}:{}", ident.node.0, resolved).unwrap();
            }

            expr.visit_expr(|expr| self.visit_expr(expr));
        }

        fn visit_exprs<'a>(&mut self, exprs: impl IntoIterator<Item = &'a CstExpr>) {
            for expr in exprs {
                self.visit_expr(expr);
            }
        }

        fn visit_lvalue(&mut self, ident: &CstAssignIdent) {
            write!(&mut self.r, " {}:{}", ident.0, ident.1.unwrap().0).unwrap();
        }

        fn visit_stmt_children(&mut self, stmt: &CstStmt) {
            stmt.visit_children(|visit| match visit {
                Visit::Stmt(stmt) => self.visit_stmt(stmt),
                Visit::Expr(expr) => self.visit_expr(expr),
            });
        }

        fn visit_assign(&mut self, assign: &CstAssign) {
            assign.visit_lvalue(|ident| self.visit_lvalue(ident));
        }

        fn visit_stmt(&mut self, stmt: &CstStmt) {
            match &stmt.node {
                StmtP::Assign(lhs, _rhs) => self.visit_assign(lhs),
                StmtP::Def(DefP { name, params, .. }) => {
                    self.visit_lvalue(name);
                    for param in params {
                        let (name, def, typ) = param.split();
                        if let Some(name) = name {
                            self.visit_lvalue(name);
                        }
                        self.visit_exprs(def.map(|def| &def.node.expr));
                        self.visit_exprs(typ);
                    }
                }
                StmtP::For(assign, ..) => self.visit_assign(assign),
                _ => {}
            }

            self.visit_stmt_children(stmt);
        }
    }

    Visitor { r: &mut r }.visit_stmt(&cst);

    assert_eq!(expected, &r);
}

fn t(program: &str, expected: &str) {
    let module = MutableNames::new();
    test_with_module(program, expected, &module);
}

// Expected test output (second parameter to `t` function) is:
// * list of bindings in format like `1:l=2` means binding id = 1, local slot 2
// * list of variables with references to binding ids

#[test]
fn basic() {
    t("x = 1; y = 2", "0:m=0 1:m=1 | x:0 y:1");
}

#[test]
fn module_reassignment() {
    t("x = 1; x = 2", "0:m=0+ | x:0 x:0");
}

#[test]
fn reassignment_in_loop() {
    t("for x in []: y = x", "0:m=0+ 1:m=1+ | x:0 y:1 x:0");
}

#[test]
fn def_capture() {
    t("x = 1\ndef f(): x", "0:m=0& 1:m=1 | x:0 f:1 x:0");
}

#[test]
fn def_shadow() {
    t("x = 1\ndef f(): x = 2", "0:m=0 1:m=1 2:l=0 | x:0 f:1 x:2");
}

#[test]
fn def_param_bindings() {
    t("def f(x): return x", "0:m=0 1:l=0 | f:0 x:1 x:1");
}

#[test]
fn nested_def_capture() {
    t(
        "\
def f():
    x = 1
    def g(): return x",
        "0:m=0 1:l=0& 2:l=1 | f:0 x:1 g:2 x:1",
    )
}

#[test]
fn existing_module_with_names() {
    let frozen_heap = FrozenHeap::new();
    let module = MutableNames::new();
    module.add_name(frozen_heap.alloc_str_intern("x"));
    module.add_name(frozen_heap.alloc_str_intern("y"));
    test_with_module("x = y", "0:m=0+ 1:m=1 | x:0 y:1", &module);
}
