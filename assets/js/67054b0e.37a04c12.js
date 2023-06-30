"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6849],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>s,mdx:()=>y,useMDXComponents:()=>d,withMDXComponents:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){return function(t){var n=d(t.components);return r.createElement(e,o({},t,{components:n}))}},d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},x=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(n),s=a,m=u["".concat(i,".").concat(s)]||u[s]||f[s]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=x;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}x.displayName="MDXCreateElement"},62203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"context"},i="context type",l={unversionedId:"api/build/context",id:"api/build/context",title:"context type",description:"The type used for defining rules, usually bound as ctx. Usually the sole argument to the impl argument of the rule function.",source:"@site/../docs/api/build/context.generated.md",sourceDirName:"api/build",slug:"/api/build/context",permalink:"/docs/api/build/context",draft:!1,tags:[],version:"current",frontMatter:{id:"context"},sidebar:"manualSidebar",previous:{title:"cmd_args type",permalink:"/docs/api/build/cmd_args"},next:{title:"dependency type",permalink:"/docs/api/build/dependency"}},c={},p=[{value:"context.actions",id:"contextactions",level:2},{value:"context.attrs",id:"contextattrs",level:2},{value:"context.label",id:"contextlabel",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"context-type"},(0,a.mdx)("inlineCode",{parentName:"h1"},"context")," type"),(0,a.mdx)("p",null,"The type used for defining rules, usually bound as ",(0,a.mdx)("inlineCode",{parentName:"p"},"ctx"),". Usually the sole argument to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"impl")," argument of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"rule")," function."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'def _impl_my_rule(ctx: "context") -> ["provider"]:\n    return [DefaultInfo()]\nmy_rule = rule(impl = _impl_my_rule, attrs = {})\n')),(0,a.mdx)("h2",{id:"contextactions"},"context.actions"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'context.actions: "actions"\n')),(0,a.mdx)("p",null,"Returns an ",(0,a.mdx)("inlineCode",{parentName:"p"},"actions")," value containing functions to define actual actions that are run. See the ",(0,a.mdx)("inlineCode",{parentName:"p"},"actions")," type for the operations that are available."),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"contextattrs"},"context.attrs"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"context.attrs: struct(..)\n")),(0,a.mdx)("p",null,"Returns the attributes of the target as a Starlark struct with a field for each attribute, which varies per rule. As an example, given a rule with the ",(0,a.mdx)("inlineCode",{parentName:"p"},"attrs")," argument of ",(0,a.mdx)("inlineCode",{parentName:"p"},'{"foo": attrs.string()}'),", this field will be a ",(0,a.mdx)("inlineCode",{parentName:"p"},"struct")," containing a field ",(0,a.mdx)("inlineCode",{parentName:"p"},"foo")," of type string."),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"contextlabel"},"context.label"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'context.label: [None, "label"]\n')),(0,a.mdx)("p",null,"Returns a ",(0,a.mdx)("inlineCode",{parentName:"p"},"label")," representing the target, or ",(0,a.mdx)("inlineCode",{parentName:"p"},"None")," if being invoked from a ",(0,a.mdx)("inlineCode",{parentName:"p"},"dynamic_output")," in Bxl."))}d.isMDXComponent=!0}}]);