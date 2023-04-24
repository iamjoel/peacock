"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4937],{9522:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>v,contentTitle:()=>h,default:()=>N,frontMatter:()=>g,metadata:()=>f,toc:()=>b});var n=t(557),a=t(6687),r=t(3155),o=t(4687),s=t(6594),c=t(9997);const m=(e,l,t)=>{if(e&&l)if(t){const{top:t}=e.getBoundingClientRect(),n=e.scrollTop,{top:a}=l.getBoundingClientRect(),r=a-t+n;e.scrollTo({top:r,behavior:"smooth"})}else{const{left:t}=e.getBoundingClientRect(),n=e.scrollLeft,{left:a}=l.getBoundingClientRect(),r=a-t+n;e.scrollTo({left:r,behavior:"smooth"})}},i=c.Z.Group;var u,d;!function(e){e[e.red=0]="red",e[e.green=1]="green",e[e.blue=2]="blue"}(u||(u={})),function(e){e.HOR="hor",e.VER="ver"}(d||(d={}));const p=e=>{let{}=e;const[l,t]=(0,a.useState)(u.red),[n,r]=(0,a.useState)(d.VER),o=n===d.VER,s=(0,a.useRef)(null),p=(0,a.useRef)(null),k=(0,a.useRef)(null),g=(0,a.useRef)(null),h={[u.red]:p,[u.green]:k,[u.blue]:g};return(0,a.useEffect)((()=>{const e=h[l];m(s.current,e.current,o)}),[l]),a.createElement("div",null,a.createElement("div",{className:"flex items-center mb-3"},"\u6eda\u52a8\u65b9\u5411:",a.createElement(i,{className:"ml-3"},a.createElement(c.Z,{type:n===d.HOR?"primary":"outline",shape:"round",onClick:()=>r(d.HOR)},"\u6c34\u5e73"),a.createElement(c.Z,{type:n===d.VER?"primary":"outline",shape:"round",onClick:()=>r(d.VER)},"\u7ad6\u76f4"))),a.createElement("div",{className:"flex items-center mb-3"},"\u6eda\u52a8\u5230:",a.createElement(i,{className:"ml-3"},a.createElement(c.Z,{type:l===u.red?"primary":"outline",shape:"round",onClick:()=>t(u.red)},"\u7ea2"),a.createElement(c.Z,{type:l===u.green?"primary":"outline",shape:"round",onClick:()=>t(u.green)},"\u7eff"),a.createElement(c.Z,{type:l===u.blue?"primary":"outline",shape:"round",onClick:()=>t(u.blue)},"\u84dd"))),a.createElement("div",{ref:s,className:(o?"overflow-y-scroll":"flex overflow-x-scroll")+"\n        w-52 h-52"},a.createElement("div",{ref:p,className:(o?"h-52":"w-52 shrink-0")+" bg-red-500"}),a.createElement("div",{ref:k,className:(o?"h-52":"w-52 shrink-0")+" bg-green-500"}),a.createElement("div",{ref:g,className:(o?"h-52":"w-52 shrink-0")+" bg-blue-500"})))},k=a.memo(p),g={},h="DOM & BOM",f={unversionedId:"frontend/base/js/dom-bom/overview",id:"frontend/base/js/dom-bom/overview",title:"DOM & BOM",description:"\u4ee3\u7801\u53c2\u8003",source:"@site/docs/frontend/base/js/dom-bom/overview.mdx",sourceDirName:"frontend/base/js/dom-bom",slug:"/frontend/base/js/dom-bom/overview",permalink:"/four-dimensional-space-bag/site/build/docs/frontend/base/js/dom-bom/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"frontend",previous:{title:"\u56fe\u7247",permalink:"/four-dimensional-space-bag/site/build/docs/frontend/base/css/rules/image/overview"},next:{title:"\u64cd\u4f5c\u5a92\u4f53",permalink:"/four-dimensional-space-bag/site/build/docs/frontend/base/js/media/overview"}},v={},b=[{value:"\u4ee3\u7801\u53c2\u8003",id:"\u4ee3\u7801\u53c2\u8003",level:2},{value:"\u9009\u62e9\u5143\u7d20",id:"\u9009\u62e9\u5143\u7d20",level:2},{value:"\u4e00\u4e2a\u5143\u7d20",id:"\u4e00\u4e2a\u5143\u7d20",level:3},{value:"\u591a\u4e2a\u5143\u7d20",id:"\u591a\u4e2a\u5143\u7d20",level:3},{value:"\u5143\u7d20\u7684\u4f4d\u7f6e\u4fe1\u606f",id:"\u5143\u7d20\u7684\u4f4d\u7f6e\u4fe1\u606f",level:2},{value:"\u5143\u7d20\u7684\u6837\u5f0f\u4fe1\u606f",id:"\u5143\u7d20\u7684\u6837\u5f0f\u4fe1\u606f",level:2},{value:"\u6eda\u52a8",id:"\u6eda\u52a8",level:2},{value:"\u6eda\u52a8\u5230\u6307\u5b9a\u5143\u7d20",id:"\u6eda\u52a8\u5230\u6307\u5b9a\u5143\u7d20",level:3},{value:"\u5224\u65ad\u662f\u5426\u6709\u6eda\u52a8\u6761",id:"\u5224\u65ad\u662f\u5426\u6709\u6eda\u52a8\u6761",level:3},{value:"URL",id:"url",level:2},{value:"URL \u4fe1\u606f",id:"url-\u4fe1\u606f",level:3},{value:"\u89e3\u6790 URL \u7684\u641c\u7d22\u6761\u4ef6",id:"\u89e3\u6790-url-\u7684\u641c\u7d22\u6761\u4ef6",level:3},{value:"\u590d\u6742\u7684\u751f\u6210\u6216\u89e3\u6790 URL \u53c2\u6570",id:"\u590d\u6742\u7684\u751f\u6210\u6216\u89e3\u6790-url-\u53c2\u6570",level:2}],w={toc:b},E="wrapper";function N(e){let{components:l,...t}=e;return(0,r.kt)(E,(0,n.Z)({},w,t,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dom--bom"},"DOM & BOM"),(0,r.kt)("h2",{id:"\u4ee3\u7801\u53c2\u8003"},"\u4ee3\u7801\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://htmldom.dev/"},"Manage HTML DOM with vanilla JavaScript")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://youmightnotneedjquery.com/"},"You might not need jQuery"))),(0,r.kt)("h2",{id:"\u9009\u62e9\u5143\u7d20"},"\u9009\u62e9\u5143\u7d20"),(0,r.kt)("h3",{id:"\u4e00\u4e2a\u5143\u7d20"},"\u4e00\u4e2a\u5143\u7d20"),(0,r.kt)("p",null,"\u901a\u7528\u5199\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"documenut.querySelector(\u9009\u62e9\u5668)\n")),(0,r.kt)("p",null,"\u67d0\u4e2a\u5143\u7d20\u4e0b\u7684\u5143\u7d20\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"elem.querySelector(\u9009\u62e9\u5668)\n")),(0,r.kt)("p",null,"\u901a\u8fc7 ID\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"document.getElementById(ID)\n")),(0,r.kt)("h3",{id:"\u591a\u4e2a\u5143\u7d20"},"\u591a\u4e2a\u5143\u7d20"),(0,r.kt)("p",null,"\u901a\u7528\u5199\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"documenut.querySelectorAll(\u9009\u62e9\u5668)\n")),(0,r.kt)("p",null,"\u5176\u4ed6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"elem.getElementsByClassName('hello')\nelem.getElementsByTagName('hello')\n")),(0,r.kt)("h2",{id:"\u5143\u7d20\u7684\u4f4d\u7f6e\u4fe1\u606f"},"\u5143\u7d20\u7684\u4f4d\u7f6e\u4fe1\u606f"),(0,r.kt)("h2",{id:"\u5143\u7d20\u7684\u6837\u5f0f\u4fe1\u606f"},"\u5143\u7d20\u7684\u6837\u5f0f\u4fe1\u606f"),(0,r.kt)("h2",{id:"\u6eda\u52a8"},"\u6eda\u52a8"),(0,r.kt)("h3",{id:"\u6eda\u52a8\u5230\u6307\u5b9a\u5143\u7d20"},"\u6eda\u52a8\u5230\u6307\u5b9a\u5143\u7d20"),(0,r.kt)(o.Z,{mdxType:"Demo"},(0,r.kt)(k,{mdxType:"ScrollToElem"})),(0,r.kt)(s.Z,{title:"site/src/utils/dom/scroll-to-elem.ts",content:"const scrollToElem = (wrapElem: HTMLElement, targetElem: HTMLElement, isVer?: boolean) => {\n  if(wrapElem && targetElem) {\n    if(isVer) { // \u5782\u76f4\u65b9\u5411\n      const { top: wrapTop } = wrapElem.getBoundingClientRect()\n      const wrapScrollTop = wrapElem.scrollTop\n      const { top: childTop } = targetElem.getBoundingClientRect()\n      const scrollTop = childTop - wrapTop + wrapScrollTop // \u6d4f\u89c8\u5668\u7f51\u4e0a\u6eda\u52a8\u4e86\uff0c\u5b50\u5143\u7d20\u7684top\u5c31\u5c0f\u4e86\u6eda\u52a8\u503c\n      wrapElem.scrollTo({\n        top: scrollTop,\n        behavior: 'smooth',\n      })\n    } else { // \u6c34\u5e73\u65b9\u5411\n      const { left: wrapLeft} = wrapElem.getBoundingClientRect()\n      const wrapScrollLeft = wrapElem.scrollLeft\n      const { left: childLeft } = targetElem.getBoundingClientRect()\n      const scrollLeft = childLeft - wrapLeft + wrapScrollLeft // \u6d4f\u89c8\u5668\u7f51\u4e0a\u6eda\u52a8\u4e86\uff0c\u5b50\u5143\u7d20\u7684top\u5c31\u5c0f\u4e86\u6eda\u52a8\u503c\n      wrapElem.scrollTo({\n        left: scrollLeft,\n        behavior: 'smooth',\n      })\n    }\n  }\n}",mdxType:"Code"}),(0,r.kt)("h3",{id:"\u5224\u65ad\u662f\u5426\u6709\u6eda\u52a8\u6761"},"\u5224\u65ad\u662f\u5426\u6709\u6eda\u52a8\u6761"),(0,r.kt)("h2",{id:"url"},"URL"),(0,r.kt)("h3",{id:"url-\u4fe1\u606f"},"URL \u4fe1\u606f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"locaion.href"),(0,r.kt)("li",{parentName:"ul"},"location.path"),(0,r.kt)("li",{parentName:"ul"},"location.search"),(0,r.kt)("li",{parentName:"ul"},"location.hash")),(0,r.kt)("h3",{id:"\u89e3\u6790-url-\u7684\u641c\u7d22\u6761\u4ef6"},"\u89e3\u6790 URL \u7684\u641c\u7d22\u6761\u4ef6"),(0,r.kt)("p",null,"API: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams"},"URLSearchParams"),"\u3002"),(0,r.kt)("p",null,"\u83b7\u53d6\u4e00\u4e2a\u641c\u7d22\u6761\u4ef6:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const search = 'name=joel&age=18'// location.search\nconst searchParams = new URLSearchParams(search)\nsearchParams.get('name') // 'joel'\nsearchParams.get('age') // '18'\nsearchParams.get('other') // null\n")),(0,r.kt)("p",null,"\u83b7\u53d6\u6240\u6709\u7684\u641c\u7d22\u6761\u4ef6:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const searchParams = new URLSearchParams("key1=value1&key2=value2")\nfor (const key of searchParams.keys()) {\n  console.log(key);\n}\n')),(0,r.kt)("p",null,"\u6539\u641c\u7d22\u6761\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const search = 'name=joel&age=18'\nconst searchParams = new URLSearchParams(search)\nsearchParams.set('name', 'jack')\nsearchParams.toString() // name=jack&age=18\n")),(0,r.kt)("h2",{id:"\u590d\u6742\u7684\u751f\u6210\u6216\u89e3\u6790-url-\u53c2\u6570"},"\u590d\u6742\u7684\u751f\u6210\u6216\u89e3\u6790 URL \u53c2\u6570"),(0,r.kt)("p",null,"\u4f7f\u7528\u5e93\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/qs"},"qs"),"\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"ids = [1, 2, 3]")," \u8981\u751f\u6210\u7684\u53c2\u6570\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"ids=1&ids=2&ids=3"),"\u3002\u5b9e\u73b0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"qs.stringify(ids, { indices: false })\n")),(0,r.kt)("p",null,"\u5728 axios \u7684\u5199\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  params: ids,\n  paramsSerializer: params => {\n    return qs.stringify(params, { indices: false })\n  }\n}\n")))}N.isMDXComponent=!0},869:(e,l,t)=>{t.d(l,{Z:()=>r});var n=t(6687),a=t(3659);function r(e){let{children:l,fallback:t}=e;return(0,a.Z)()?n.createElement(n.Fragment,null,l?.()):t??null}},6594:(e,l,t)=>{t.d(l,{Z:()=>o});var n=t(6687),a=t(5332);const r=e=>{let{language:l="jsx",title:t,content:r}=e;const[o,s]=(0,n.useState)(!1);return n.createElement("div",{className:"code mt-5"},n.createElement("div",{className:"mb-3 flex justify-end space-x-3"},n.createElement("div",{className:"box-border flex justify-center items-center rounded-full border border-solid w-[28px] h-[28px] p-[5px] cursor-pointer",style:{borderColor:o?"rgb(29, 33, 41)":"rgb(229, 230, 225)",backgroundColor:o?"rgb(29, 33, 41)":"transparent",color:o?"#fff":"inherit"},onClick:()=>s(!o)},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-full h-full"},n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"})))),o&&n.createElement(a.Z,{language:l,title:t,showLineNumbers:!0,children:r}))},o=n.memo(r)},4687:(e,l,t)=>{t.d(l,{Z:()=>o});var n=t(6687),a=t(869),r=t(4923);const o=e=>{let{children:l,contentSize:t="full",padding:o="p-12",className:s,browserOnly:c}=e;const m="full"===t?"":{sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg"}[t],i=n.createElement("div",{className:`\n      mb-2\n      rounded-sm\n      border border-solid border-gray-100 \n      shadow-md\n      ${o}\n    `},n.createElement("div",{className:(0,r.Z)(m,"mx-auto",s)},l));return n.createElement(n.Fragment,null,c?n.createElement(a.Z,null,(()=>n.createElement(n.Fragment,null,i))):i)}}}]);