"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4795],{5525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>b,default:()=>g,frontMatter:()=>f,metadata:()=>h,toc:()=>v});var s=n(9772),a=n(8404),i=n(6291),r=n(2364),c=n(9458),l=n(8936);function o(e){void 0===e&&(e=10);const t=Math.round(Math.random()*e);return 0===t?1:t>e?e:t}function u(){return Math.random()>.5?function(){const e=o(),t=o();return{left:e,right:t,op:"+",res:e+t}}():function(){const e=o(20),t=o(e);return{left:e,right:t,op:"-",res:e-t}}()}function m(e){let{value:t,onChange:n,onEnter:s}=e;const i=e=>{let{text:i}=e;return a.createElement(r.Z,{className:"w-[60px] h-[60px]",size:"large",onClick:()=>(e=>{switch(e){case"<-":n(t.slice(0,-1));break;case"E":s();break;default:n(`${t}${e}`)}})(i)},i)};return a.createElement("div",{className:"space-y-2"},[[1,2,3],[4,5,6],[7,8,9],["<-",0,"E"]].map(((e,t)=>((e,t)=>a.createElement("div",{className:"flex space-x-2",key:t},e.map((e=>a.createElement(i,{text:e,key:e})))))(e,t))))}const d=()=>{const[e,t]=(0,a.useState)(0),[n,s,i]=(0,l.Z)(5),[r,o]=(0,a.useState)({}),d=()=>{t(e+1),o(u()),s(5)},[p,f]=(0,a.useState)("");return(0,a.useEffect)((()=>{d();const e=setInterval((()=>{const e=i()-1;e>=0&&s(e)}),1e3);return()=>{clearInterval(e)}}),[]),a.createElement("div",{className:"mx-auto"},a.createElement(c.Z,{percent:n/5*100,showText:!1}),a.createElement("div",{className:"flex text-[80px]"},r.left," ",r.op," ",r.right," = ",p),a.createElement(m,{value:p,onChange:f,onEnter:()=>{f(""),d()}}),a.createElement("div",{className:"mt-3 pb-10 flex justify-between"},a.createElement("div",null,a.createElement("span",{className:"text-[#0f0]"},e)," / ",100)))},p=a.memo(d),f={hide_table_of_contents:!0},b="20 \u4ee5\u5185\u52a0\u51cf\u6cd5",h={unversionedId:"basic/math/plus-minus/index",id:"basic/math/plus-minus/index",title:"20 \u4ee5\u5185\u52a0\u51cf\u6cd5",description:"\u8981\u6c42\uff1a50\u9053\uff0c\u4e00\u9053\u4e0d\u8d85\u8fc7 3 \u79d2\u3002",source:"@site/docs/basic/math/plus-minus/index.mdx",sourceDirName:"basic/math/plus-minus",slug:"/basic/math/plus-minus/",permalink:"/four-dimensional-space-bag/site/build/docs/basic/math/plus-minus/",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"basic",previous:{title:"\u4e00\u4e9b\u57fa\u7840\u7684\u4e1c\u4e1c",permalink:"/four-dimensional-space-bag/site/build/docs/basic/overview"},next:{title:"\u8bbe\u8ba1\u539f\u5219",permalink:"/four-dimensional-space-bag/site/build/docs/basic/design/rule/"}},x={},v=[],k={toc:v},E="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(E,(0,s.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"20-\u4ee5\u5185\u52a0\u51cf\u6cd5"},"20 \u4ee5\u5185\u52a0\u51cf\u6cd5"),(0,i.kt)("p",null,"\u8981\u6c42\uff1a50\u9053\uff0c\u4e00\u9053\u4e0d\u8d85\u8fc7 3 \u79d2\u3002"),(0,i.kt)(p,{mdxType:"Code"}))}g.isMDXComponent=!0}}]);