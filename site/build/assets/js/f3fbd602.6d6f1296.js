"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[83],{7341:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(5094),o=t(9090);const a=function(e){if(!e||!document.getRootNode)return document;var n,t=Array.isArray(e)?e:[e];return function(e){return e.every((function(e){var n=(0,o.n)(e);return!!n&&(n.getRootNode()instanceof ShadowRoot||void 0)}))}(t)&&(n=(0,o.n)(t[0]))?n.getRootNode():document};var s=t(7159);function l(e,n,t){void 0===t&&(t="click");var l=(0,r.Z)(e);(0,s.Z)((function(){var e=function(e){(Array.isArray(n)?n:[n]).some((function(n){var t=(0,o.n)(n);return!t||t.contains(e.target)}))||l.current(e)},r=a(n),s=Array.isArray(t)?t:[t];return s.forEach((function(n){return r.addEventListener(n,e)})),function(){s.forEach((function(n){return r.removeEventListener(n,e)}))}}),Array.isArray(t)?t:[t],n)}},9339:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>w,contentTitle:()=>x,default:()=>Z,frontMatter:()=>k,metadata:()=>E,toc:()=>h});var r=t(6229),o=t(8404),a=t(6291),s=t(3282),l=t(2682),c=t(6970),i=t(2848),u=t(7341),m=t(9880);const d="wrap_T3NI",p="menuWrap_KoJu",f="menuItem_JfGj",b=e=>{let{menus:n,onAction:t,children:r,className:a=""}=e;const[s,{setTrue:l,setFalse:c}]=(0,i.Z)(!1),[b,v]=(0,o.useState)({left:0,top:0}),y=(0,o.useRef)(null);(0,o.useLayoutEffect)((()=>{if(!s||!y.current)return;const e=window.innerHeight,{height:n}=y.current.getBoundingClientRect();b.top+n>e&&v({...b,top:b.top-n})}),[b.left]),(0,u.Z)((()=>{c()}),y);const g=function(e){const[n,t]=o.useState({render:()=>null,remove:()=>null}),r=o.useCallback((e=>{const n=n=>{let{children:t}=n;return m.createPortal(t,e)};return{render:n,remove:()=>m.unmountComponentAtNode(e)}}),[]);return(0,o.useEffect)((()=>{e&&n.remove();const o=r(e);return t(o),()=>{o.remove()}}),[e]),n.render}(document.body);return o.createElement("div",{className:`${d} ${a}`,onContextMenu:e=>{e.preventDefault(),l(),v({left:e.pageX,top:e.pageY})}},r,o.createElement(g,null,o.createElement("div",{className:p,style:{left:b.left,top:b.top,display:s?"block":"none"},ref:y},n.map((e=>{return o.createElement("div",{key:e.key,className:f,onClick:(n=e.key,()=>{c(),t(n)})},e.node);var n})))))},v=o.memo(b);const y=e=>{let{}=e;const[n,t]=(0,o.useState)();return o.createElement("div",null,o.createElement(v,{menus:[{key:"create",node:"\u521b\u5efa"},{key:"copy",node:o.createElement("div",{className:"flex justify-between"},o.createElement("span",null,"\u590d\u5236"),o.createElement("span",{style:{color:"#77778C"}},"\u2318C"))}],onAction:t},o.createElement(c.Z,{type:"primary"},"\u53f3\u51fb\u70b9\u6211")),n&&`\u521a\u521a\u70b9\u4e86\uff1a${n}`)},g=o.memo(y),k={},x="\u4e0a\u4e0b\u6587\u83dc\u5355",E={unversionedId:"libs/components/base/context-menu/readme",id:"libs/components/base/context-menu/readme",title:"\u4e0a\u4e0b\u6587\u83dc\u5355",description:"<Code content={",source:"@site/docs/libs/components/base/context-menu/readme.mdx",sourceDirName:"libs/components/base/context-menu",slug:"/libs/components/base/context-menu/",permalink:"/four-dimensional-space-bag/site/build/docs/libs/components/base/context-menu/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"libs",previous:{title:"\u6eda\u52a8\u8f93\u5165\u6761",permalink:"/four-dimensional-space-bag/site/build/docs/libs/components/base/slider/"},next:{title:"\u5361\u7247",permalink:"/four-dimensional-space-bag/site/build/docs/libs/components/base/card/"}},w={},h=[],N={toc:h},C="wrapper";function Z(e){let{components:n,...t}=e;return(0,a.kt)(C,(0,r.Z)({},N,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e0a\u4e0b\u6587\u83dc\u5355"},"\u4e0a\u4e0b\u6587\u83dc\u5355"),(0,a.kt)(s.Z,{browserOnly:!0,mdxType:"Demo"},(0,a.kt)(g,{mdxType:"ContextMenuDemo"})),(0,a.kt)(l.Z,{content:"<ContextMenu\n  menus={[\n    {\n      key: 'create',\n      node: '\u521b\u5efa'\n    },\n    {\n      key: 'copy',\n      node: (\n        <div className=\"flex justify-between\">\n            <span>\u590d\u5236</span>\n            <span style={{color: '#77778C'}}>\u2318C</span>\n          </div>\n      )\n    }\n  ]}\n  onAction={\u83dc\u5355\u9009\u9879\u70b9\u51fb\u56de\u8c03} // (action: string) => void\n>\n  <Button type=\"primary\">\n    \u89e6\u53d1\u5143\u7d20\n  </Button>\n</ContextMenu>",mdxType:"Code"}),(0,a.kt)("p",null,"\u652f\u6301\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u70b9\u83dc\u5355\u5916\u7684\u5176\u4ed6\u5730\u65b9\u6d88\u5931\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49\u83dc\u5355\u9009\u9879\u3002")))}Z.isMDXComponent=!0},2682:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(8404),o=t(7549),a=t(6776);const s=e=>{let{language:n="jsx",title:t,content:s}=e;const[l,c]=(0,r.useState)(!1);return r.createElement(a.Z,null,(()=>r.createElement("div",{className:"code mt-5"},r.createElement("div",{className:"mb-3 flex justify-end space-x-3"},r.createElement("div",{className:"box-border flex justify-center items-center rounded-full border border-solid w-[28px] h-[28px] p-[5px] cursor-pointer",style:{borderColor:l?"rgb(29, 33, 41)":"rgb(229, 230, 225)",backgroundColor:l?"rgb(29, 33, 41)":"transparent",color:l?"#fff":"inherit"},onClick:()=>c(!l)},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-full h-full"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"})))),l&&r.createElement(o.Z,{language:n,title:t,showLineNumbers:!0,children:s}))))},l=r.memo(s)},3282:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(8404),o=t(6776),a=t(4640);const s=e=>{let{children:n,contentSize:t="full",padding:s="p-12",className:l,browserOnly:c=!0}=e;const i="full"===t?"":{sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg"}[t],u=r.createElement("div",{className:`\n      mb-2\n      rounded-sm\n      border border-solid border-gray-100 \n      shadow-md\n      ${s}\n    `},r.createElement("div",{className:(0,a.Z)(i,"mx-auto",l)},n));return r.createElement(r.Fragment,null,c?r.createElement(o.Z,null,(()=>r.createElement(r.Fragment,null,u))):u)}}}]);