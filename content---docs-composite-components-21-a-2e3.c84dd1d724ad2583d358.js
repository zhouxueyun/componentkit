(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{125:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return a}),t.d(n,"rightToc",function(){return i}),t.d(n,"default",function(){return l});t(0);var o=t(133);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},p=Object.keys(e);for(o=0;o<p.length;o++)t=p[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)t=p[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a={id:"composite-components",title:"Composite Components"},i=[],c={rightToc:i},s="wrapper";function l(e){var n=e.components,t=p(e,["components"]);return Object(o.b)(s,r({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Avoid subclassing ",Object(o.b)("inlineCode",{parentName:"p"},"CKComponent")," directly. Instead, subclass ",Object(o.b)("inlineCode",{parentName:"p"},"CKCompositeComponent"),"."),Object(o.b)("p",null,'A "composite component" simply wraps another component, hiding its implementation details from the outside world.'),Object(o.b)("p",null,"For example, imagine you're implementing a button to share an article in a newsreader app. You could implement ",Object(o.b)("inlineCode",{parentName:"p"},"ShareButtonComponent")," as a composite component that wraps a ",Object(o.b)("inlineCode",{parentName:"p"},"CKButtonComponent"),":"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-objectivec"}),"@implementation ShareButtonComponent\n\n+ (instancetype)newWithArticle:(ArticleModel *)article\n{\n  return [super newWithComponent:\n          [CKButtonComponent\n           newWithAction:@selector(shareTapped)\n           options:{...}]];\n}\n\n- (void)shareTapped\n{\n  // Share the article\n}\n\n@end\n")),Object(o.b)("p",null,Object(o.b)("a",r({parentName:"p"},{href:"/docs/never-subclass-components"}),"Never Subclass Components")," contains more information about why you should favor subclassing ",Object(o.b)("inlineCode",{parentName:"p"},"CKCompositeComponent")," whenever possible."))}l.isMDXComponent=!0}}]);