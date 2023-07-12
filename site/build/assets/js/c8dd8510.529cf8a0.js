"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4795],{6291:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(8404);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=i,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5525:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>f,toc:()=>b});var n=r(9772),i=r(8404),o=r(6291),a=r(2364);function c(e){void 0===e&&(e=10);const t=Math.round(Math.random()*e);return 0===t?1:t>e?e:t}function s(){return Math.random()>.5?function(){const e=c(),t=c();return{left:e,right:t,op:"+",res:e+t}}():function(){const e=c(20),t=c(e);return{left:e,right:t,op:"-",res:e-t}}()}const u=()=>{const[e,t]=(0,i.useState)(s());return i.createElement("div",{className:"w-[300px] mx-auto"},i.createElement("div",{className:"flex justify-end"},i.createElement(a.Z,{type:"primary",onClick:()=>t(s())},"\u4e0b\u4e00\u9898")),i.createElement("div",{className:"mt-3 flex items-center justify-center text-[80px]"},e.left," ",e.op," ",e.right," ="))},l=i.memo(u),p={},m="20 \u4ee5\u5185\u52a0\u51cf\u6cd5",f={unversionedId:"basic/math/plus-minus/index",id:"basic/math/plus-minus/index",title:"20 \u4ee5\u5185\u52a0\u51cf\u6cd5",description:"",source:"@site/docs/basic/math/plus-minus/index.mdx",sourceDirName:"basic/math/plus-minus",slug:"/basic/math/plus-minus/",permalink:"/four-dimensional-space-bag/site/build/docs/basic/math/plus-minus/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"basic",previous:{title:"\u4e00\u4e9b\u57fa\u7840\u7684\u4e1c\u4e1c",permalink:"/four-dimensional-space-bag/site/build/docs/basic/overview"},next:{title:"\u8bbe\u8ba1\u539f\u5219",permalink:"/four-dimensional-space-bag/site/build/docs/basic/design/rule/"}},d={},b=[],y={toc:b},v="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(v,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"20-\u4ee5\u5185\u52a0\u51cf\u6cd5"},"20 \u4ee5\u5185\u52a0\u51cf\u6cd5"),(0,o.kt)(l,{mdxType:"Code"}))}g.isMDXComponent=!0}}]);