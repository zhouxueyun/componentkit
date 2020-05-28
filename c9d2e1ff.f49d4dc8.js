(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{198:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(11),i=(n(0),n(209)),a={title:"Uses"},c={id:"uses",title:"Uses",description:"ComponentKit excels at powering list views with complex content. It was built to power Facebook's News Feed on iOS.",source:"@site/docs/uses.md",permalink:"/docs/uses",sidebar:"docs",previous:{title:"Philosophy",permalink:"/docs/philosophy"},next:{title:"Component API",permalink:"/docs/component-api"}},l=[{value:"Strengths",id:"strengths",children:[]},{value:"Considerations",id:"considerations",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ComponentKit excels at powering list views with complex content. It was built to power Facebook's News Feed on iOS."),Object(i.b)("h3",{id:"strengths"},"Strengths"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Simple and Declarative: Just like React itself. ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://facebook.github.io/react/docs/why-react.html"}),"Why React?")," sums up these benefits."),Object(i.b)("li",{parentName:"ul"},"Scroll Performance: All layout is performed on a background thread, ensuring the main thread isn't tied up measuring text. 60FPS is a breeze even for deep, complex layouts like Facebook's News Feed."),Object(i.b)("li",{parentName:"ul"},"View Recycling: By requiring all view configurations to be expressed declaratively, ComponentKit makes error-free view recycling automatic."),Object(i.b)("li",{parentName:"ul"},"Composability: By encouraging heavy use of composition, it's possible to build UIs as complex as News Feed without any single component exceeding ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/under-300-lines"}),"300 lines of code"),".")),Object(i.b)("h3",{id:"considerations"},"Considerations"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Interfaces that aren't lists or tables aren't ideally suited to ComponentKit since it is optimized to work well with a  ",Object(i.b)("inlineCode",{parentName:"li"},"UICollectionView"),"."),Object(i.b)("li",{parentName:"ul"},"ComponentKit is fully native and compiled. ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://code.facebook.com/videos/786462671439502/react-js-conf-2015-keynote-introducing-react-native-/"}),"React Native")," offers an alternative based on JavaScriptCore and React, including features like instant reload with no recompilation."),Object(i.b)("li",{parentName:"ul"},"ComponentKit is built on Objective-C++. There is no easy way to interoperate with ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.apple.com/swift/"}),"Swift")," since Swift cannot bridge to C++. Experimental projects like ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/joshaber/Few.swift"}),"Few.swift")," or ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/BendingSpoons/katana-swift/"}),"Katana")," are exploring how React's concepts could be applied in Swift.")))}p.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return n?o.a.createElement(m,c({ref:t},s,{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);