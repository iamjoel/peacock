"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4795],{5525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>N,frontMatter:()=>b,metadata:()=>x,toc:()=>k});var s=n(9772),a=n(8404),r=n(6291),i=n(2364),c=n(1885),l=n(9458),o=n(8936);function u(e){void 0===e&&(e=10);const t=Math.round(Math.random()*e);return 0===t?1:t>e?e:t}function m(){return Math.random()>.5?function(){const e=u(),t=u();return{left:e,right:t,op:"+",res:e+t}}():function(){const e=u(20),t=u(e);return{left:e,right:t,op:"-",res:e-t}}()}function d(e){let{value:t,onChange:n,onEnter:s}=e;const r=e=>{let{text:r}=e;return a.createElement(i.Z,{className:"!w-[60px] !h-[60px]",onClick:()=>(e=>{switch(e){case"<-":n(t.slice(0,-1));break;case"E":s();break;default:n(`${t}${e}`)}})(r)},r)};return a.createElement("div",{className:"space-y-3"},[[1,2,3],[4,5,6],[7,8,9],["<-",0,"E"]].map(((e,t)=>((e,t)=>a.createElement("div",{className:"flex items-center space-x-3",key:t},e.map((e=>a.createElement(r,{text:e,key:e})))))(e,t))))}const p=()=>{const[e,t]=(0,a.useState)(0),[n,s,r]=(0,o.Z)(5),[i,u]=(0,a.useState)({}),p=()=>{t(e+1),u(m()),s(5)},[f,b]=(0,a.useState)("");return(0,a.useEffect)((()=>{p();const e=setInterval((()=>{const e=r()-1;e>=0&&s(e)}),1e3);return()=>{clearInterval(e)}}),[]),a.createElement("div",{className:"mx-auto"},a.createElement(l.Z,{percent:n/5*100,showText:!1}),a.createElement("div",{className:"flex text-[80px]"},i.left," ",i.op," ",i.right," = ",f),a.createElement(d,{value:f,onChange:b,onEnter:()=>{if(Number.parseInt(f)!==i.res)return c.Z.error("\u9519\u4e86"),void b("");b(""),p()}}),a.createElement("div",{className:"mt-3 pb-10 flex justify-between"},a.createElement("div",null,a.createElement("span",{className:"text-[#0f0]"},e)," / ",100)))},f=a.memo(p),b={hide_table_of_contents:!0},h="20 \u4ee5\u5185\u52a0\u51cf\u6cd5",x={unversionedId:"basic/math/plus-minus/index",id:"basic/math/plus-minus/index",title:"20 \u4ee5\u5185\u52a0\u51cf\u6cd5",description:"\u8981\u6c42\uff1a50\u9053\uff0c\u4e00\u9053\u4e0d\u8d85\u8fc7 3 \u79d2\u3002",source:"@site/docs/basic/math/plus-minus/index.mdx",sourceDirName:"basic/math/plus-minus",slug:"/basic/math/plus-minus/",permalink:"/four-dimensional-space-bag/site/build/docs/basic/math/plus-minus/",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"basic",previous:{title:"\u4e00\u4e9b\u57fa\u7840\u7684\u4e1c\u4e1c",permalink:"/four-dimensional-space-bag/site/build/docs/basic/overview"},next:{title:"\u8bbe\u8ba1\u539f\u5219",permalink:"/four-dimensional-space-bag/site/build/docs/basic/design/rule/"}},v={},k=[],E={toc:k},g="wrapper";function N(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,s.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"20-\u4ee5\u5185\u52a0\u51cf\u6cd5"},"20 \u4ee5\u5185\u52a0\u51cf\u6cd5"),(0,r.kt)("p",null,"\u8981\u6c42\uff1a50\u9053\uff0c\u4e00\u9053\u4e0d\u8d85\u8fc7 3 \u79d2\u3002"),(0,r.kt)(f,{mdxType:"Code"}))}N.isMDXComponent=!0}}]);