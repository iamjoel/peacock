"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5164],{638:(e,t,n)=>{n.d(t,{c:()=>c});var l=n(6088),a=n(6844);const r=function(e,t){void 0===e&&(e=!1);var n=(0,l.o5)((0,a.useState)(e),2),r=n[0],c=n[1];return[r,(0,a.useMemo)((function(){var n=void 0===t?!e:t;return{toggle:function(){return c((function(t){return t===e?n:e}))},set:function(e){return c(e)},setLeft:function(){return c(e)},setRight:function(){return c(n)}}}),[])]};function c(e){void 0===e&&(e=!1);var t=(0,l.o5)(r(!!e),2),n=t[0],c=t[1],o=c.toggle,s=c.set;return[n,(0,a.useMemo)((function(){return{toggle:o,set:function(e){return s(!!e)},setTrue:function(){return s(!0)},setFalse:function(){return s(!1)}}}),[])]}},4448:(e,t,n)=>{n.d(t,{c:()=>r});var l=n(6088),a=n(6844);const r=function(e){var t=(0,l.o5)((0,a.useState)(e),2),n=t[0],r=t[1],c=(0,a.useRef)(n);return c.current=n,[n,r,(0,a.useCallback)((function(){return c.current}),[])]}},6589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>p,default:()=>b,frontMatter:()=>d,metadata:()=>f,toc:()=>g});var l=n(1516),a=n(6844),r=n(8656),c=n(9048);const o=function(e){let{value:t,setValue:n,maxValue:l}=e;return{minus:(0,a.useCallback)((()=>{n(t-1)}),[t]),plus:(0,a.useCallback)((()=>{n(t+1)}),[t]),isValid:e=>!!/^[0-9]+$/.test(e),isMax:t>=l}},s=e=>{let{value:t,maxValue:n,onChange:l}=e;const{minus:r,plus:c,isValid:s,isMax:i}=o({value:t,maxValue:n,setValue:l}),u=(0,a.useCallback)((e=>{const t=e.target.value;s(t)&&l(Number.parseInt(t))}),[]);return a.createElement("div",{className:"flex space-x-1"},a.createElement("div",{className:" w-6 h-6 leading-6 rounded-full bg-indigo-500 text-center text-white cursor-pointer ",onClick:r},"-"),a.createElement("input",{type:"text",className:"w-24",value:t,onChange:u}),!i&&a.createElement("div",{className:" w-6 h-6 leading-6 rounded-full bg-indigo-500 text-center text-white cursor-pointer ",onClick:c},"+"))};function i(){const[e,t]=(0,a.useState)(10);return a.createElement("div",null,a.createElement(s,{value:e,maxValue:12,onChange:t}),a.createElement("div",null,"\u5f53\u524d\u503c: ",e))}var u=n(2292),m=n(6043);const d={},p="Demo",f={unversionedId:"frontend/framework/react/demo/index",id:"frontend/framework/react/demo/index",title:"Demo",description:"\u8ba1\u6570\u5668",source:"@site/docs/frontend/framework/react/demo/index.mdx",sourceDirName:"frontend/framework/react/demo",slug:"/frontend/framework/react/demo/",permalink:"/four-dimensional-space-bag/site/build/docs/frontend/framework/react/demo/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"frontend",previous:{title:"\u51fd\u6570\u7ec4\u4ef6(Hooks)",permalink:"/four-dimensional-space-bag/site/build/docs/frontend/framework/react/api/hooks"},next:{title:"Vue3 Demo",permalink:"/four-dimensional-space-bag/site/build/docs/frontend/framework/vue/demo/"}},v={},g=[{value:"\u8ba1\u6570\u5668",id:"\u8ba1\u6570\u5668",level:2},{value:"\u81ea\u5b9a\u4e49hooks \u7684\u8ba1\u6570\u5668",id:"\u81ea\u5b9a\u4e49hooks-\u7684\u8ba1\u6570\u5668",level:2},{value:"\u7b80\u5355\u4e0b\u62c9\u6846",id:"\u7b80\u5355\u4e0b\u62c9\u6846",level:2},{value:"\u6e38\u620f\uff1a\u8fd0\u52a8\u7684\u7403",id:"\u6e38\u620f\u8fd0\u52a8\u7684\u7403",level:2}],E={toc:g},y="wrapper";function b(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,l.c)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"demo"},"Demo"),(0,r.yg)("h2",{id:"\u8ba1\u6570\u5668"},"\u8ba1\u6570\u5668"),(0,r.yg)("p",null,"\u4e3b\u8981\u77e5\u8bc6\u70b9\uff1a ",(0,r.yg)("strong",{parentName:"p"},"\u4e8b\u4ef6\u7ed1\u5b9a"),"\uff0c ",(0,r.yg)("strong",{parentName:"p"},"useState"),"\u3002"),(0,r.yg)(c.N,{mdxType:"CountDemo"}),(0,r.yg)("h2",{id:"\u81ea\u5b9a\u4e49hooks-\u7684\u8ba1\u6570\u5668"},"\u81ea\u5b9a\u4e49hooks \u7684\u8ba1\u6570\u5668"),(0,r.yg)(i,{mdxType:"CountSplitLogicDemo"}),(0,r.yg)("h2",{id:"\u7b80\u5355\u4e0b\u62c9\u6846"},"\u7b80\u5355\u4e0b\u62c9\u6846"),(0,r.yg)("p",null,"\u4e3b\u8981\u77e5\u8bc6\u70b9\uff1a ",(0,r.yg)("strong",{parentName:"p"},"useEffect"),"\u3002"),(0,r.yg)(u.o,{mdxType:"SimpleSelectDemo"}),(0,r.yg)("h2",{id:"\u6e38\u620f\u8fd0\u52a8\u7684\u7403"},"\u6e38\u620f\uff1a\u8fd0\u52a8\u7684\u7403"),(0,r.yg)(m.c,{mdxType:"BallGame"}),(0,r.yg)("details",null,(0,r.yg)("summary",null,"\u9700\u6c42"),(0,r.yg)("ol",null,(0,r.yg)("li",null,"\u80fd\u63a7\u5236\u7403\u7684\u8fd0\u52a8\u548c\u6682\u505c\u3002"),(0,r.yg)("li",null,"\u6682\u505c\u65f6\uff0c\u53ef\u4ee5\u4fee\u6539\u7403\u7684\u4f4d\u7f6e\uff0c\u8fd0\u52a8\u65b9\u5411\u548c\u901f\u5ea6\u3002"),(0,r.yg)("li",null,"\u7403\u78b0\u5230\u8fb9\u754c\u540e\uff0c\u4f1a\u5f39\u56de\u6765\u3002\u901f\u5ea6\u4e0d\u53d8\uff0c\u65b9\u5411\u53d8\u53cd\u3002"),(0,r.yg)("li",null,"\u4e00\u5171\u6709\u4e09\u6761\u547d\u3002\u78b0\u5230\u56db\u9762\u7684\u8fb9\u754c\uff0c\u547d\u51cf1\u3002\u547d\u7684\u503c\u4e3a0\u65f6\uff0c\u6e38\u620f\u7ed3\u675f\u3002"),(0,r.yg)("li",null,"\u6e38\u620f\u7ed3\u675f\u540e\uff0c\u53ef\u4ee5\u91cd\u65b0\u5f00\u59cb\u6e38\u620f\u3002"),(0,r.yg)("li",null,"\u4e0d\u540c\u7684\u547d\u7684\u7403\u7684\u989c\u8272\u4e0d\u540c\u3002\u4e09\u6761\u547d\u65f6\uff0c\u4e3a\u7eff\u8272\uff0c\u4e24\u6761\u547d\u65f6\uff0c\u4e3a\u9ec4\u8272\uff0c\u4e00\u6761\u547d\u65f6\uff0c\u4e3a\u7ea2\u8272\u3002"))))}b.isMDXComponent=!0},6043:(e,t,n)=>{n.d(t,{c:()=>d});var l=n(6844),a=n(764),r=n(3852),c=n(638),o=n(4448);const s=10;var i=function(e){return e[e.slow=10]="slow",e[e.middle=20]="middle",e[e.fast=40]="fast",e}(i||{}),u=function(e){return e.left="left",e.right="right",e.top="top",e.bottom="bottom",e}(u||{});const m=e=>{let{}=e;const[t,{toggle:n}]=(0,c.c)(!1),[m,d,p]=(0,o.c)(100),[f,v,g]=(0,o.c)(100),[E,y,b]=(0,o.c)(i.fast),[x,h,k]=(0,o.c)(u.right);let C;const N=(0,l.useCallback)((()=>{let e=p(),t=g();const n=25*b()/1e3;let l;switch(k()){case u.top:t-=n,l=-t+s,l>0&&(t=l+20,h(u.bottom));break;case u.bottom:t+=n,l=t-200+s,l>0&&(t=200-l-s,h(u.top));break;case u.left:e-=n,l=-e+s,l>0&&(e=l+20,h(u.right));break;case u.right:e+=n,l=e-200+s,l>0&&(e=200-l-s,h(u.left))}d(e),v(t)}),[]);return(0,l.useEffect)((()=>(t?(N(),C=setInterval(N,25)):clearInterval(C),()=>{clearInterval(C)})),[t]),l.createElement("div",{className:"mb-4"},l.createElement("div",{className:"relative w-[200px] h-[200px] shadow"},l.createElement("div",{className:"\n          absolute\n          w-5 h-5\n          rounded-full bg-green-500\n        ",style:{left:m-s,top:f-s}})),l.createElement("div",{className:"mt-5"},l.createElement("div",{className:"flex items-center"},l.createElement("div",{className:"flex items-center space-x-3"},l.createElement("div",{className:"flex items-center space-x-2"},l.createElement("div",null,"x: "),l.createElement("div",{className:"w-32"},l.createElement(a.c,{mode:"button",className:"",value:m,onChange:d,step:5,disabled:t}))),l.createElement("div",{className:"flex items-center space-x-2"},l.createElement("div",null,"y: "),l.createElement("div",{className:"w-32"},l.createElement(a.c,{mode:"button",className:"",value:f,onChange:v,step:5,disabled:t}))))),l.createElement("div",{className:"flex items-center mt-3"},l.createElement("div",{className:"flex items-center space-x-2"},l.createElement("div",null,"\u65b9\u5411: "),l.createElement(r.c.Group,null,l.createElement(r.c,{type:x===u.top?"primary":"outline",onClick:()=>!t&&h(u.top),disabled:t,shape:"round"},"\u4e0a"),l.createElement(r.c,{type:x===u.bottom?"primary":"outline",onClick:()=>!t&&h(u.bottom),disabled:t},"\u4e0b"),l.createElement(r.c,{type:x===u.left?"primary":"outline",onClick:()=>!t&&h(u.left),disabled:t},"\u5de6"),l.createElement(r.c,{type:x===u.right?"primary":"outline",onClick:()=>!t&&h(u.right),disabled:t,shape:"round"},"\u53f3")))),l.createElement("div",{className:"flex items-center mt-3"},l.createElement("div",{className:"flex items-center space-x-3"},l.createElement("div",{className:"flex items-center space-x-2"},l.createElement("div",null,"\u901f\u5ea6: "),l.createElement(r.c.Group,null,l.createElement(r.c,{type:E===i.slow?"primary":"outline",onClick:()=>!t&&y(i.slow),disabled:t,shape:"round"},"\u6162"),l.createElement(r.c,{type:E===i.middle?"primary":"outline",onClick:()=>!t&&y(i.middle),disabled:t},"\u4e2d"),l.createElement(r.c,{type:E===i.fast?"primary":"outline",onClick:()=>!t&&y(i.fast),disabled:t,shape:"round"},"\u5feb")),l.createElement("div",{className:"text-xs"},E,"px/\u79d2")))),l.createElement("div",{className:"flex items-center mt-3"},l.createElement(r.c,{type:"primary",onClick:n},t?"\u6682\u505c":"\u5f00\u59cb"))))},d=l.memo(m)},9048:(e,t,n)=>{n.d(t,{N:()=>r});var l=n(6844);const a=e=>{let{value:t,onChange:n}=e;const a=(0,l.useCallback)((()=>{n(t-1)}),[t]),r=(0,l.useCallback)((()=>{n(t+1)}),[t]),c=(0,l.useCallback)((e=>{const t=e.target.value;/^[0-9]+$/.test(t)&&n(Number.parseInt(t))}),[]);return l.createElement("div",{className:"flex space-x-1"},l.createElement("div",{className:" w-6 h-6 leading-6 rounded-full bg-indigo-500 text-center text-white cursor-pointer ",onClick:a},"-"),l.createElement("input",{type:"text",className:"w-24",value:t,onChange:c}),l.createElement("div",{className:" w-6 h-6 leading-6 rounded-full bg-indigo-500 text-center text-white cursor-pointer ",onClick:r},"+"))};function r(){const[e,t]=(0,l.useState)(10);return l.createElement("div",null,l.createElement(a,{value:e,onChange:t}),l.createElement("div",null,"\u5f53\u524d\u503c: ",e))}},2292:(e,t,n)=>{n.d(t,{o:()=>r});var l=n(6844);const a=e=>{let{list:t,controlShow:n,onChange:a}=e;const[r,c]=(0,l.useState)(!1),[o,s]=(0,l.useState)(0),i=(0,l.useRef)(0);return(0,l.useEffect)((()=>{const e=()=>{var e;c(!1),e=i.current+1,s(e),i.current=e};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[]),(0,l.useEffect)((()=>{const e=setInterval((()=>{}),3e3);return()=>{clearInterval(e)}}),[]),(0,l.useEffect)((()=>{n&&c(!0)}),[n]),l.createElement("div",{className:"relative w-24 text-white cursor-pointer",onClick:e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()}},l.createElement("div",{className:"px-2 h-8 leading-8 border bg-green-500",onClick:()=>{c(!0)}},"\u8bf7\u9009\u62e9"),l.createElement("div",{className:"absolute top-8 w-full",style:{display:r?"block":"none"}},t.map((e=>l.createElement("div",{key:e.id,className:"px-2 h-8 leading-8 border border-b bg-green-600",onClick:()=>{a(e.id),c(!1)}},e.title)))))};function r(){const[e,t]=(0,l.useState)(""),[n,r]=(0,l.useState)(0);return l.createElement("div",null,"\u9009\u4e2d\u503c: ",""===e?"\u672a\u9009\u62e9":e,"\u3002",l.createElement("button",{onClick:()=>r(Date.now())},"\u70b9\u6211\u5f39\u51fa\u9009\u9879"),l.createElement(a,{list:[{id:1,title:"\u9009\u98791"},{id:2,title:"\u9009\u98792"},{id:3,title:"\u9009\u98793"}],onChange:t,controlShow:n}))}},6088:(e,t,n)=>{n.d(t,{o5:()=>l});Object.create;function l(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var l,a,r=n.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(l=r.next()).done;)c.push(l.value)}catch(o){a={error:o}}finally{try{l&&!l.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return c}Object.create;"function"==typeof SuppressedError&&SuppressedError}}]);