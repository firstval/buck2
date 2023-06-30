"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9812],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>c,withMDXComponents:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),d=function(e){return function(t){var n=c(t.components);return a.createElement(e,r({},t,{components:n}))}},c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[h]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const r={id:"buck1_vs_buck2",title:"Buck1 vs Buck2"},l=void 0,o={unversionedId:"developers/architecture/buck1_vs_buck2",id:"developers/architecture/buck1_vs_buck2",title:"Buck1 vs Buck2",description:"At a glance",source:"@site/../docs/developers/architecture/buck1_vs_buck2.md",sourceDirName:"developers/architecture",slug:"/developers/architecture/buck1_vs_buck2",permalink:"/docs/developers/architecture/buck1_vs_buck2",draft:!1,tags:[],version:"current",frontMatter:{id:"buck1_vs_buck2",title:"Buck1 vs Buck2"},sidebar:"manualSidebar",previous:{title:"Architectural Model",permalink:"/docs/developers/architecture/buck2"},next:{title:"Parity Testing",permalink:"/docs/developers/parity_script"}},s={},u=[{value:"At a glance",id:"at-a-glance",level:2},{value:"Top-down vs Bottom-up - understanding the implications of the difference in execution models between Buck1 and Buck2",id:"top-down-vs-bottom-up---understanding-the-implications-of-the-difference-in-execution-models-between-buck1-and-buck2",level:2},{value:"What are the differences?",id:"what-are-the-differences",level:3},{value:"Building A with Buck1",id:"building-a-with-buck1",level:4},{value:"Building A with Buck2",id:"building-a-with-buck2",level:4},{value:"Some implications",id:"some-implications",level:3},{value:"Rulekeys vs Action digests",id:"rulekeys-vs-action-digests",level:4},{value:"Buck2 queries many more caches",id:"buck2-queries-many-more-caches",level:4},{value:"Materialization",id:"materialization",level:4},{value:"Second-order implications",id:"second-order-implications",level:3},{value:"Non-determinism",id:"non-determinism",level:4},{value:"Cache misses don\u2019t necessarily propagate",id:"cache-misses-dont-necessarily-propagate",level:4},{value:"Hybrid execution",id:"hybrid-execution",level:4}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,i.mdx)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"at-a-glance"},"At a glance"),(0,i.mdx)("p",null,"The following table provides an at-a-glance comparison of Buck1 and Buck2."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:"left"},"Buck1"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Buck2"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Build files in Starlark"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Build files in Starlark")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Macros in Starlark"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Macros in Starlark")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Rules in Java"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Rules in Starlark")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Rules and Macros are logically similar"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Rules and Macros are logically similar")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Rules and Core are not well abstracted"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Rules and Core are strongly separated")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Core in Java"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Core in Rust")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Remote Execution (RE) not well supported"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"All rules support remote execution by default")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Varying degrees of incrementality / parallelism"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Unified incrementality / parallelism")))),(0,i.mdx)("h2",{id:"top-down-vs-bottom-up---understanding-the-implications-of-the-difference-in-execution-models-between-buck1-and-buck2"},"Top-down vs Bottom-up - understanding the implications of the difference in execution models between Buck1 and Buck2"),(0,i.mdx)("p",null,"It is often said that Buck1 does 'top down' and Buck2 does 'bottom up' building. This results in cases where some topics that seem conceptually trivial in Buck1 are hard problems in Buck2, or vice versa."),(0,i.mdx)("h3",{id:"what-are-the-differences"},"What are the differences?"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Scenario"),": Imagine you are building A, which depends on both B and C, but where neither B nor C have any dependencies."),(0,i.mdx)("p",null,"For the sake of simplicity, imagine B and C are C++ compilations (that produce object files), and A is a link (that consumes them and produces a shared library)."),(0,i.mdx)("h4",{id:"building-a-with-buck1"},"Building A with Buck1"),(0,i.mdx)("p",null,"Following is an oversimplified view of what happens:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Buck1 computes the 'rulekey' for B.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"This consists of mixing together the hashes of the C++ file being compiled, as well as all C++ compiler flags, and so on."))),(0,i.mdx)("li",{parentName:"ul"},"Buck1 then does the same for C."),(0,i.mdx)("li",{parentName:"ul"},"Buck1 then computes the rulekey for A.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"This consist of mixing together the rulekeys of B and C, as well as linker flags used by A. for example."))),(0,i.mdx)("li",{parentName:"ul"},"Buck1 then looks up the rulekey for A in the cache.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"If there's a hit, then Buck1 downloads the output and its job done."),(0,i.mdx)("li",{parentName:"ul"},"If there's a cache miss, continue."))),(0,i.mdx)("li",{parentName:"ul"},"Buck1 then queries the cache for the rulekeys of B and C:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"If there's a hit, then the output is downloaded."),(0,i.mdx)("li",{parentName:"ul"},"If there's a miss, then Buck1 runs the commands needed to produce the object file that was missed. Regardless of whether those commands run locally or on RE, Buck1  downloads the output of B and C."))),(0,i.mdx)("li",{parentName:"ul"},"Buck1 then runs the command for A to produce the shared library.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"At this point, Buck1 may actually do another cache lookup with a different rulekey, which is called an ",(0,i.mdx)("em",{parentName:"li"},"input based rulekey"),". This rulekey is derived from the inputs of the action that needs executing, which at this point of the build are known (since they were just built)!")))),(0,i.mdx)("h4",{id:"building-a-with-buck2"},"Building A with Buck2"),(0,i.mdx)("p",null,"In contrast, if you ask Buck2 to build A, here is what happens:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Buck2 produce the action to compile B and computes the hash of the action.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"This is the 'action digest', which consists of mixing the hashes of all the inputs (such as the C++ file), as well as the command line (so, implicitly, the compiler flags)."))),(0,i.mdx)("li",{parentName:"ul"},"Buck2 queries the action cache for the action digest hash.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"If there's a hit, Buck2 obtains the hash of the resulting object file (that is, the output of B)."),(0,i.mdx)("li",{parentName:"ul"},"If there's a miss, Buck2 runs the action on RE (or potentially locally) and obtains the hash of the object file. If the action runs remotely, Buck2 will not download the output."))),(0,i.mdx)("li",{parentName:"ul"},"Buck2 does the same thing for C."),(0,i.mdx)("li",{parentName:"ul"},"Buck2 produces the action to link A.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"This consists of mixing together all the hashes of the input files (which were retrieved earlier) and the command line to produce an action digest, then querying the cache and potentially running the action."))),(0,i.mdx)("li",{parentName:"ul"},"Once Buck2 produces A (again, on RE), then, since this output was requested by the user (unlike the intermediary outputs B and C), Buck2 downloads A.")),(0,i.mdx)("h3",{id:"some-implications"},"Some implications"),(0,i.mdx)("h4",{id:"rulekeys-vs-action-digests"},"Rulekeys vs Action digests"),(0,i.mdx)("p",null,"The closest thing to Buck1\u2019s rulekey in Buck2 is the action digest, but they are very different!"),(0,i.mdx)("p",null,"Since it\u2019s a product of the (transitive) inputs of an action, the (default) rulekey can be computed without running anything or querying any caches. However, the action digest cannot: it requires the actual inputs of an action, which means you need to build all the dependencies first."),(0,i.mdx)("p",null,"This means that:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"In Buck1, you can ask for rulekeys for a target."),(0,i.mdx)("li",{parentName:"ul"},"In Buck2, you\u2019d have to run the build first then ask for the action digests (this is what the ",(0,i.mdx)("inlineCode",{parentName:"li"},"buck2 log what-ran")," would show you).")),(0,i.mdx)("h4",{id:"buck2-queries-many-more-caches"},"Buck2 queries many more caches"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Buck1 will not descend further down a tree of dependency when it gets a cache hit."),(0,i.mdx)("li",{parentName:"ul"},"Buck2 will always walk up all your dependencies, regardless of whether you get cache hits or not.")),(0,i.mdx)("h4",{id:"materialization"},"Materialization"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"When Buck1 gets a cache miss, it downloads the outputs."),(0,i.mdx)("li",{parentName:"ul"},"Buck2, by contract, does not download outputs as part of a build (this is called 'deferred materialization').",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Note that Buck2 does download the outputs if the user asked for them (that is, they were the targets the user put on the command line).")))),(0,i.mdx)("h3",{id:"second-order-implications"},"Second-order implications"),(0,i.mdx)("h4",{id:"non-determinism"},"Non-determinism"),(0,i.mdx)("p",null,"Non-determinism in a build affects Buck2 and Buck1 differently. One scenario that often works fine in Buck1 but can work catastrophically bad in Buck2 is a codegen step, driven by a Python binary."),(0,i.mdx)("p",null,"In certain configurations/modes, Python binaries are non-deterministic, because they are XARs and that is always non-deterministic, which is bad!"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"In Buck1, that doesn\u2019t really matter, because you can get a cache hit on the codegen output without ever visiting the XAR (as long as the input files haven\u2019t changed)."),(0,i.mdx)("li",{parentName:"ul"},"In Buck2, you need the XAR to check the action cache for the codegen step.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"However, binaries are often not cached in certain configurations/modes, so your XAR isn\u2019t cached."),(0,i.mdx)("li",{parentName:"ul"},"Therefore, since your XAR build is non-deterministic, you\u2019ll always miss in the action cache and the codegen step will always have to run in every build.")))),(0,i.mdx)("p",null,"It can get worse! If the Python binary produces non-deterministic codegen, then the entire build might become uncacheable."),(0,i.mdx)("h4",{id:"cache-misses-dont-necessarily-propagate"},"Cache misses don\u2019t necessarily propagate"),(0,i.mdx)("p",null,"Say that, in Buck2, you\u2019re trying to build a chain of actions like codegen -> compile -> link."),(0,i.mdx)("p",null,"Even if your codegen step isn\u2019t cached (say, because its action inputs are non-deterministic as mentioned above), as long as the codegen output is deterministic, you can still get cache hits from compile and link steps."),(0,i.mdx)("h4",{id:"hybrid-execution"},"Hybrid execution"),(0,i.mdx)("p",null,"If you squint, you\u2019ll note that Buck1\u2019s build could be viewed as 'local first', whereas Buck2\u2019s would be better viewed as 'remote first':"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"When Buck1 builds something remotely or gets a cache hit, the outputs are always downloaded."),(0,i.mdx)("li",{parentName:"ul"},"When Buck2 builds something remotely or gets a cache hit, the outputs are never downloaded.")),(0,i.mdx)("p",null,"In turn, this has some important implications:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"When Buck1 builds something locally, the inputs are always already present."),(0,i.mdx)("li",{parentName:"ul"},"When Buck2 builds something locally, the inputs have to be downloaded, unless they were built locally (which if you\u2019re doing any RE, is usually not the case), or if another command caused them to be downloaded.")),(0,i.mdx)("p",null,"This means that, in Buck1, running something locally when you have spare resources is usually  a no-brainer, because it\u2019s always ready to go, and you\u2019ll save on not having to download the output from RE (though you might have to upload the output if you need to run actions depending on it later)."),(0,i.mdx)("p",null,"On the flip side, with Buck2, that\u2019s not necessarily the case. To run an action locally, you need to download inputs that you might otherwise not have needed, which will tax your network connection."))}c.isMDXComponent=!0}}]);