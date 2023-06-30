"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7728],{3905:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>o});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function d(){return d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},d.apply(this,arguments)}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)t=d[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)t=d[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),o=function(e){return function(a){var t=m(a.components);return n.createElement(e,d({},a,{components:t}))}},m=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=m(e.components);return n.createElement(c.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,d=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),o=m(t),p=r,u=o["".concat(l,".").concat(p)]||o[p]||g[p]||d;return t?n.createElement(u,i(i({ref:a},c),{},{components:t})):n.createElement(u,i({ref:a},c))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var d=t.length,l=new Array(d);l[0]=h;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<d;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8865:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const d={id:"cmd_args"},l="cmd_args type",i={unversionedId:"api/build/cmd_args",id:"api/build/cmd_args",title:"cmd_args type",description:"The cmdargs type is created by cmdargs() and is consumed by ctx.actions.run. The type is a mutable collection of strings and artifact values. In general, command lines, artifacts, strings, RunInfo and lists thereof can be added to or used to construct a cmd_args value. All these methods operate mutably on cmd and return that value too.",source:"@site/../docs/api/build/cmd_args.generated.md",sourceDirName:"api/build",slug:"/api/build/cmd_args",permalink:"/docs/api/build/cmd_args",draft:!1,tags:[],version:"current",frontMatter:{id:"cmd_args"},sidebar:"manualSidebar",previous:{title:"attrs type",permalink:"/docs/api/build/attrs"},next:{title:"context type",permalink:"/docs/api/build/context"}},s={},c=[{value:"cmd_args.absolute_prefix",id:"cmd_argsabsolute_prefix",level:2},{value:"cmd_args.absolute_suffix",id:"cmd_argsabsolute_suffix",level:2},{value:"cmd_args.add",id:"cmd_argsadd",level:2},{value:"cmd_args.copy",id:"cmd_argscopy",level:2},{value:"cmd_args.hidden",id:"cmd_argshidden",level:2},{value:"cmd_args.ignore_artifacts",id:"cmd_argsignore_artifacts",level:2},{value:"cmd_args.inputs",id:"cmd_argsinputs",level:2},{value:"cmd_args.outputs",id:"cmd_argsoutputs",level:2},{value:"cmd_args.parent",id:"cmd_argsparent",level:2},{value:"cmd_args.relative_to",id:"cmd_argsrelative_to",level:2},{value:"cmd_args.replace_regex",id:"cmd_argsreplace_regex",level:2}],o={toc:c};function m(e){let{components:a,...t}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"cmd_args-type"},(0,r.mdx)("inlineCode",{parentName:"h1"},"cmd_args")," type"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd_args")," type is created by ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd_args()")," and is consumed by ",(0,r.mdx)("inlineCode",{parentName:"p"},"ctx.actions.run"),". The type is a mutable collection of strings and ",(0,r.mdx)("inlineCode",{parentName:"p"},"artifact")," values. In general, command lines, artifacts, strings, ",(0,r.mdx)("inlineCode",{parentName:"p"},"RunInfo")," and lists thereof can be added to or used to construct a ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd_args")," value. All these methods operate mutably on ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd")," and return that value too."),(0,r.mdx)("h2",{id:"cmd_argsabsolute_prefix"},"cmd","_","args.absolute","_","prefix"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def cmd_args.absolute_prefix(prefix: str.type) -> "cmd_args"\n')),(0,r.mdx)("p",null,"Adds a prefix to the end of start artifact. Often used if you have a ",(0,r.mdx)("inlineCode",{parentName:"p"},"$ROOT")," variable in a shell script and want to use it to make files absolute."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'cmd_args(script).absolute_prefix("$ROOT/")\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"cmd_argsabsolute_suffix"},"cmd","_","args.absolute","_","suffix"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def cmd_args.absolute_suffix(suffix: str.type) -> "cmd_args"\n')),(0,r.mdx)("p",null,"Adds a suffix to the end of every artifact. Useful in conjunction with ",(0,r.mdx)("inlineCode",{parentName:"p"},"absolute_prefix")," to wrap artifacts in function calls."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'cmd_args(script).absolute_prefix("call(").absolute_suffix(")")\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"cmd_argsadd"},"cmd","_","args.add"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def cmd_args.add(*args) -> "cmd_args"\n')),(0,r.mdx)("p",null,"A list of arguments to be added to the command line, which may including ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd_args"),", artifacts, strings, ",(0,r.mdx)("inlineCode",{parentName:"p"},"RunInfo")," or lists thereof. Note that this operation mutates the input ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd_args"),"."),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"cmd_argscopy"},"cmd","_","args.copy"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def cmd_args.copy() -> "cmd_args"\n')),(0,r.mdx)("p",null,"Returns a copy of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd_args")," such that any modifications to the original or the returned value will not impact each other. Note that this is a shallow copy, so any inner ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd_args")," can still be modified."),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"cmd_argshidden"},"cmd","_","args.hidden"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def cmd_args.hidden(*args) -> "cmd_args"\n')),(0,r.mdx)("p",null,"Things to add to the command line which do not show up but are added as dependencies. The values can be anything normally permissible to pass to ",(0,r.mdx)("inlineCode",{parentName:"p"},"add"),"."),(0,r.mdx)("p",null,"Typically used if the command you are running implicitly depends on files that are not\npassed on the command line, e.g. headers in the case of a C compilation."),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"cmd_argsignore_artifacts"},"cmd","_","args.ignore","_","artifacts"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def cmd_args.ignore_artifacts() -> "cmd_args"\n')),(0,r.mdx)("p",null,"Causes this ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd_args")," to have no declared dependencies. Allows you to reference the path of an artifact ",(0,r.mdx)("em",{parentName:"p"},"without")," introducing dependencies on it."),(0,r.mdx)("p",null,"As an example where this can be useful, consider passing a dependency that is only accessed at runtime, but whose path\nmust be baked into the binary. As an example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'resources = cmd_args(resource_file, format = "-DFOO={}").ignore_artifacts()\nctx.actions.run(cmd_args("gcc", "-c", source_file, resources))\n')),(0,r.mdx)("p",null,"Note that ",(0,r.mdx)("inlineCode",{parentName:"p"},"ignore_artifacts")," sets all artifacts referenced by this ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd_args")," to be ignored, including those added afterwards,\nso generally create a special ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd_args")," and scope it quite tightly."),(0,r.mdx)("p",null,"If you actually do use the inputs referenced by this command, you will either error out due to missing dependencies (if running actions remotely)\nor have untracked dependencies that will fail to rebuild when it should."),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"cmd_argsinputs"},"cmd","_","args.inputs"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'cmd_args.inputs: "command_line_inputs"\n')),(0,r.mdx)("p",null,"Collect all the inputs (including hidden) referenced by this command line. The output can be compared for equality and have its ",(0,r.mdx)("inlineCode",{parentName:"p"},"len")," requested to see whether there are any inputs, but is otherwise mostly opaque."),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"cmd_argsoutputs"},"cmd","_","args.outputs"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'cmd_args.outputs: ["output_artifact"]\n')),(0,r.mdx)("p",null,"Collect all the outputs (including hidden) referenced by this command line."),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"cmd_argsparent"},"cmd","_","args.parent"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def cmd_args.parent(count: int.type = _, /) -> "cmd_args"\n')),(0,r.mdx)("p",null,"For all the artifacts listed in this ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd_args"),", use their parent directory."),(0,r.mdx)("p",null,"Typically used when the file name is passed one way, and the directory another,\ne.g. ",(0,r.mdx)("inlineCode",{parentName:"p"},'cmd_args(artifact, format="-L{}").parent()'),"."),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"cmd_argsrelative_to"},"cmd","_","args.relative","_","to"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def cmd_args.relative_to(\n    directory: ["artifact", "cell_root", "promise_artifact"],\n    /,\n    *,\n    parent: int.type = 0\n) -> "cmd_args"\n')),(0,r.mdx)("p",null,"Make all artifact paths relative to a given location. Typically used when the command you are running changes directory."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'dir = symlinked_dir(...)\nscript = [\n    cmd_args(cmd_args(dir, format = "cd {}"),\n    original_script.relative_to(dir)\n]\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"cmd_argsreplace_regex"},"cmd","_","args.replace","_","regex"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def cmd_args.replace_regex(\n    pattern: str.type,\n    replacement: str.type\n) -> "cmd_args"\n')),(0,r.mdx)("p",null,"Replaces all parts matching pattern regular expression in each argument with replacement string. Several replacements can be added by multiple replace_regex calls."))}m.isMDXComponent=!0}}]);