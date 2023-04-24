"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[83],{5950:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(6687);const o=function(e=!1,t){const[n,o]=(0,r.useState)(e);return[n,(0,r.useMemo)((()=>{const n=void 0===t?!e:t;return{toggle:()=>o((t=>t===e?n:e)),set:e=>o(e),setLeft:()=>o(e),setRight:()=>o(n)}}),[])]};function s(e=!1){const[t,{toggle:n,set:s}]=o(e);return[t,(0,r.useMemo)((()=>({toggle:n,set:e=>s(!!e),setTrue:()=>s(!0),setFalse:()=>s(!1)})),[])]}},4859:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(6687);const o=function(e){const t=(0,r.useRef)(e);return t.current=e,t},s=e=>"function"==typeof e,c=!("undefined"==typeof window||!window.document||!window.document.createElement);function l(e,t){if(!c)return;if(!e)return t;let n;return n=s(e)?e():"current"in e?e.current:e,n}const a=e=>{if(!e||!document.getRootNode)return document;const t=Array.isArray(e)?e:[e];return(e=>e.every((e=>{const t=l(e);return!!t&&(t.getRootNode()instanceof ShadowRoot||void 0)})))(t)&&(n=l(t[0]))?n.getRootNode():document;var n},u=e=>{const t=o(e);(0,r.useEffect)((()=>()=>{t.current()}),[])};function i(e,t){if(e===t)return!0;for(let n=0;n<e.length;n++)if(!Object.is(e[n],t[n]))return!1;return!0}const m=(e=>(t,n,o)=>{const s=(0,r.useRef)(!1),c=(0,r.useRef)([]),a=(0,r.useRef)([]),m=(0,r.useRef)();e((()=>{var e;const r=(Array.isArray(o)?o:[o]).map((e=>l(e)));if(!s.current)return s.current=!0,c.current=r,a.current=n,void(m.current=t());r.length===c.current.length&&i(r,c.current)&&i(n,a.current)||(null===(e=m.current)||void 0===e||e.call(m),c.current=r,a.current=n,m.current=t())})),u((()=>{var e;null===(e=m.current)||void 0===e||e.call(m),s.current=!1}))})(r.useEffect);function d(e,t,n="click"){const r=o(e);m((()=>{const e=e=>{(Array.isArray(t)?t:[t]).some((t=>{const n=l(t);return!n||n.contains(e.target)}))||r.current(e)},o=a(t),s=Array.isArray(n)?n:[n];return s.forEach((t=>o.addEventListener(t,e))),()=>{s.forEach((t=>o.removeEventListener(t,e)))}}),Array.isArray(n)?n:[n],t)}},7050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>E,default:()=>A,frontMatter:()=>x,metadata:()=>w,toc:()=>N});var r=n(557),o=n(6687),s=n(3155),c=n(4687),l=n(6594),a=n(9997),u=n(5950),i=n(4859),m=n(867);const d="wrap_T3NI",f="menuWrap_KoJu",p="menuItem_JfGj",b=e=>{let{menus:t,onAction:n,children:r,className:s=""}=e;const[c,{setTrue:l,setFalse:a}]=(0,u.Z)(!1),[m,b]=(0,o.useState)({left:0,top:0}),y=(0,o.useRef)(null);(0,o.useLayoutEffect)((()=>{if(!c||!y.current)return;const e=window.innerHeight,{height:t}=y.current.getBoundingClientRect();m.top+t>e&&b({...m,top:m.top-t})}),[m.left]),(0,i.Z)((()=>{a()}),y);const v=g(document.body);return o.createElement("div",{className:`${d} ${s}`,onContextMenu:e=>{e.preventDefault(),l(),b({left:e.pageX,top:e.pageY})}},r,o.createElement(v,null,o.createElement("div",{className:f,style:{left:m.left,top:m.top,display:c?"block":"none"},ref:y},t.map((e=>{return o.createElement("div",{key:e.key,className:p,onClick:(t=e.key,()=>{a(),n(t)})},e.node);var t})))))},y=o.memo(b),g=e=>{const[t,n]=o.useState({render:()=>null,remove:()=>null}),r=o.useCallback((e=>({render:t=>{let{children:n}=t;return m.createPortal(n,e)},remove:()=>m.unmountComponentAtNode(e)})),[]);return(0,o.useEffect)((()=>{e&&t.remove();const o=r(e);return n(o),()=>{o.remove()}}),[e]),t.render},v=e=>{let{}=e;const[t,n]=(0,o.useState)();return o.createElement("div",null,o.createElement(y,{menus:[{key:"create",node:"\u521b\u5efa"},{key:"copy",node:o.createElement("div",{className:"flex justify-between"},o.createElement("span",null,"\u590d\u5236"),o.createElement("span",{style:{color:"#77778C"}},"\u2318C"))}],onAction:n},o.createElement(a.Z,{type:"primary"},"\u53f3\u51fb\u70b9\u6211")),t&&`\u521a\u521a\u70b9\u4e86\uff1a${t}`)},k=o.memo(v),x={},E="\u4e0a\u4e0b\u6587\u83dc\u5355",w={unversionedId:"libs/components/base/context-menu/readme",id:"libs/components/base/context-menu/readme",title:"\u4e0a\u4e0b\u6587\u83dc\u5355",description:"<Code content={",source:"@site/docs/libs/components/base/context-menu/readme.mdx",sourceDirName:"libs/components/base/context-menu",slug:"/libs/components/base/context-menu/",permalink:"/four-dimensional-space-bag/site/build/docs/libs/components/base/context-menu/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"libs",previous:{title:"\u6eda\u52a8\u8f93\u5165\u6761",permalink:"/four-dimensional-space-bag/site/build/docs/libs/components/base/slider/"},next:{title:"\u5361\u7247",permalink:"/four-dimensional-space-bag/site/build/docs/libs/components/base/card/"}},h={},N=[],C={toc:N},Z="wrapper";function A(e){let{components:t,...n}=e;return(0,s.kt)(Z,(0,r.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u4e0a\u4e0b\u6587\u83dc\u5355"},"\u4e0a\u4e0b\u6587\u83dc\u5355"),(0,s.kt)(c.Z,{browserOnly:!0,mdxType:"Demo"},(0,s.kt)(k,{mdxType:"ContextMenuDemo"})),(0,s.kt)(l.Z,{content:"<ContextMenu\n  menus={[\n    {\n      key: 'create',\n      node: '\u521b\u5efa'\n    },\n    {\n      key: 'copy',\n      node: (\n        <div className=\"flex justify-between\">\n            <span>\u590d\u5236</span>\n            <span style={{color: '#77778C'}}>\u2318C</span>\n          </div>\n      )\n    }\n  ]}\n  onAction={\u83dc\u5355\u9009\u9879\u70b9\u51fb\u56de\u8c03} // (action: string) => void\n>\n  <Button type=\"primary\">\n    \u89e6\u53d1\u5143\u7d20\n  </Button>\n</ContextMenu>",mdxType:"Code"}),(0,s.kt)("p",null,"\u652f\u6301\uff1a"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u70b9\u83dc\u5355\u5916\u7684\u5176\u4ed6\u5730\u65b9\u6d88\u5931\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49\u83dc\u5355\u9009\u9879\u3002")))}A.isMDXComponent=!0},869:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(6687),o=n(3659);function s(e){let{children:t,fallback:n}=e;return(0,o.Z)()?r.createElement(r.Fragment,null,t?.()):n??null}},6594:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(6687),o=n(5332);const s=e=>{let{language:t="jsx",title:n,content:s}=e;const[c,l]=(0,r.useState)(!1);return r.createElement("div",{className:"code mt-5"},r.createElement("div",{className:"mb-3 flex justify-end space-x-3"},r.createElement("div",{className:"box-border flex justify-center items-center rounded-full border border-solid w-[28px] h-[28px] p-[5px] cursor-pointer",style:{borderColor:c?"rgb(29, 33, 41)":"rgb(229, 230, 225)",backgroundColor:c?"rgb(29, 33, 41)":"transparent",color:c?"#fff":"inherit"},onClick:()=>l(!c)},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-full h-full"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"})))),c&&r.createElement(o.Z,{language:t,title:n,showLineNumbers:!0,children:s}))},c=r.memo(s)},4687:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(6687),o=n(869),s=n(4923);const c=e=>{let{children:t,contentSize:n="full",padding:c="p-12",className:l,browserOnly:a}=e;const u="full"===n?"":{sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg"}[n],i=r.createElement("div",{className:`\n      mb-2\n      rounded-sm\n      border border-solid border-gray-100 \n      shadow-md\n      ${c}\n    `},r.createElement("div",{className:(0,s.Z)(u,"mx-auto",l)},t));return r.createElement(r.Fragment,null,a?r.createElement(o.Z,null,(()=>r.createElement(r.Fragment,null,i))):i)}}}]);