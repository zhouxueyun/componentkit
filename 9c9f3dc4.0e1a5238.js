(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{189:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(11),i=(t(0),t(209)),a={title:"Avoid Local Variables, Use Const"},s={id:"avoid-local-variables",title:"Avoid Local Variables, Use Const",description:"In your +new method:",source:"@site/docs/avoid-local-variables.md",permalink:"/docs/avoid-local-variables",sidebar:"docs",previous:{title:"Indentation",permalink:"/docs/indentation"},next:{title:"Avoid Single Use Constants",permalink:"/docs/avoid-single-use-constants"}},l=[],c={rightToc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In your ",Object(i.b)("inlineCode",{parentName:"p"},"+new")," method:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Prefer inlining")," what would otherwise be a single-use temporary local variable."),Object(i.b)("li",{parentName:"ul"},"If inlining isn't possible due to necessary references or code duplication concerns, ",Object(i.b)("strong",{parentName:"li"},"add ",Object(i.b)("inlineCode",{parentName:"strong"},"const"))," to the\nright place to make sure the temporary local variable isn't assignable by  (E.g. ",Object(i.b)("inlineCode",{parentName:"li"},"NSString *const foo"),"\ninstead of ",Object(i.b)("inlineCode",{parentName:"li"},"NSString *foo"),").")),Object(i.b)("p",null,"We avoid reassigning variables because:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"It makes code harder to read and modify")," since dependencies between local variables are hard to visualize."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"It encourages mutating local variables after assignment")," which hides surprising side-effects and changes.")),Object(i.b)("p",null,"Here is a really tangled-up ",Object(i.b)("inlineCode",{parentName:"p"},"+new")," method that is hard to read, understand, or modify:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-objectivec-redhighlight"})," + (instancetype)newWithArticle:(ArticleModel *)article options:(ArticleOptions)options\n  {\n    NSAttributedString *timestamp = [CKDateFormatter stringFromDate:article.creationTime];\n    HeaderComponent *header =\n    [HeaderComponent\n     newWithTitle:article.title\n     subtitle:timestamp];\n\n    // LOGIC ERROR! timestamp has already been used by header, but no one warns us.\n    if (options & ArticleOptionHideTimestamp) {\n      timestamp = nil;\n    }\n\n    MessageOptions messageOptions = 0;\n    if (options & ArticleOptionShortMessage) {\n      messageOptions |= MessageOptionShort;\n    }\n    MessageComponent *message =\n    [MessageComponent\n     newWithArticle:article\n     options:messageOptions];\n\n    FooterComponent *footer = [FooterComponent newWithArticle:article];\n\n    // SUBOPTIMAL: why did we create the header only to throw it away?\n    // Also, notice how far this is from where we created the header.\n    if (options & ArticleOptionOmitHeader) {\n      header = nil;\n    }\n\n    return [self newWithComponent:\n            [CKFlexboxComponent\n             newWithView:{}\n             size:{}\n             style:{}\n             children{\n               header,\n               message,\n               footer\n             }]];\n  }\n")),Object(i.b)("p",null,"Instead, split out logic into separate components:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-objectivec"}),"+ (instancetype)newWithArticle:(ArticleModel *)article options:(ArticleOptions)options\n{\n  // Note how there are NO local variables here at all.\n  return [self newWithComponent:\n          [CKFlexboxComponent\n           newWithView:{}\n           size:{}\n           style:{}\n           children:{\n             [ArticleHeaderComponent\n              newWithArticle:article\n              options:headerOptions(options)],\n             [ArticleMessageComponent\n              newWithArticle:article\n              options:messageOptions(options)],\n             [FooterComponent newWithArticle:article]\n           }]];\n}\n\n// Note how this is a pure function mapping from one options bitmask to another.\nstatic ArticleHeaderComponentOptions headerOptions(ArticleOptions options)\n{\n  ArticleHeaderComponentOptions options;\n  if (options & ArticleOptionOmitHeader) {\n    options |= ArticleHeaderComponentOptionOmit;\n  }\n  if (options & ArticleOptionHideTimestamp) {\n    options |= ArticleHeaderComponentOptionHideTimestamp;\n  }\n  return options;\n}\n")))}p.isMDXComponent=!0},209:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),p=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s({},n,{},e)),t},d=function(e){var n=p(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),b=r,u=d["".concat(a,".").concat(b)]||d[b]||m[b]||i;return t?o.a.createElement(u,s({ref:n},c,{components:t})):o.a.createElement(u,s({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);