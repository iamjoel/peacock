"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8060],{6291:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(8404);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(r),h=a,d=c["".concat(p,".").concat(h)]||c[h]||s[h]||i;return r?n.createElement(d,o(o({ref:t},m),{},{components:r})):n.createElement(d,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},25:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(9772),a=(r(8404),r(6291));const i={},o="Prompt",l={unversionedId:"ai/prompt/overview",id:"ai/prompt/overview",title:"Prompt",description:"Prompt \u5219\u662f\u8c03\u6574\u4e0b\u6e38\u4efb\u52a1\u6765\u9002\u5e94\u9884\u8bad\u7ec3\u6a21\u578b\u3002\u9884\u8bad\u7ec3+\u5fae\u8c03\u662f\u8ba9\u9884\u8bad\u7ec3\u6a21\u578b\u53bb\u9002\u5e94\u4e0b\u6e38\u4efb\u52a1\u3002",source:"@site/docs/ai/prompt/overview.mdx",sourceDirName:"ai/prompt",slug:"/ai/prompt/overview",permalink:"/four-dimensional-space-bag/site/build/docs/ai/prompt/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"ai",previous:{title:"LLM \u6982\u89c8",permalink:"/four-dimensional-space-bag/site/build/docs/ai/overview"},next:{title:"\u5e94\u7528",permalink:"/four-dimensional-space-bag/site/build/docs/ai/app/"}},p={},u=[{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:3},{value:"ChatGPT3 Prompt Engineering",id:"chatgpt3-prompt-engineering",level:4},{value:"\u4f18\u79c0\u793a\u4f8b &amp; \u6559\u7a0b",id:"\u4f18\u79c0\u793a\u4f8b--\u6559\u7a0b",level:2},{value:"\u8bc4\u4f30\u6548\u679c",id:"\u8bc4\u4f30\u6548\u679c",level:2},{value:"\u5de5\u5177",id:"\u5de5\u5177",level:2}],m={toc:u},c="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prompt"},"Prompt"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Prompt \u5219\u662f\u8c03\u6574\u4e0b\u6e38\u4efb\u52a1\u6765\u9002\u5e94\u9884\u8bad\u7ec3\u6a21\u578b\u3002\u9884\u8bad\u7ec3+\u5fae\u8c03\u662f\u8ba9\u9884\u8bad\u7ec3\u6a21\u578b\u53bb\u9002\u5e94\u4e0b\u6e38\u4efb\u52a1\u3002"),(0,a.kt)("h2",{parentName:"blockquote",id:"\u6280\u5de7"},"\u6280\u5de7"),(0,a.kt)("h3",{parentName:"blockquote",id:"1-\u628a\u76ee\u7684\u8bf4\u6e05\u695a"},"1 \u628a\u76ee\u7684\u8bf4\u6e05\u695a"),(0,a.kt)("p",{parentName:"blockquote"},"\u7528\u4e0b\u9762\u8d44\u6e90\u4e2d\u7684 CRISPE \u539f\u5219\u3002")),(0,a.kt)("h3",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,a.kt)("h4",{id:"chatgpt3-prompt-engineering"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/mattnigh/ChatGPT3-Free-Prompt-List"},"ChatGPT3 Prompt Engineering")),(0,a.kt)("p",null,"CRISPE Prompt Framework:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Capacity and Role: What role (or roles) should ChatGPT act as? "),(0,a.kt)("li",{parentName:"ul"},"Insight: Provides the behind the scenes insight, background, and context to your request."),(0,a.kt)("li",{parentName:"ul"},"Statement: What you are asking ChatGPT to do."),(0,a.kt)("li",{parentName:"ul"},"Personality: The style, personality, or manner you want ChatGPT to respond in."),(0,a.kt)("li",{parentName:"ul"},"Experiment: Asking ChatGPT to provide multiple examples to you.")),(0,a.kt)("p",null,"\u7cbe\u7b80\u4e00\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5e0c\u671b AI \u626e\u6f14\u662f\u8c01\u3002 \u4e00\u822c\u662f\u67d0\u67d0\u4e13\u5bb6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5e0c\u671b AI \u505a\u4ec0\u4e48"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b AI \u505a\u4ec0\u4e48\u7684\u80cc\u666f\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u5e0c\u671b AI \u4ee5\u600e\u6837\u7684\u65b9\u5f0f\u8f93\u51fa"),(0,a.kt)("li",{parentName:"ul"},"\u5e0c\u671b AI \u63d0\u4f9b\u66f4\u591a\u7684\u4f8b\u5b50")),(0,a.kt)("p",null,"examles\uff1a\u5982\u6709\u5fc5\u8981\uff0c\u4e3e\u4f8b\u5b50"),(0,a.kt)("p",null,"requirements\uff1a\u8f93\u51fa\u7684\u53d7\u4f17\u3001\u683c\u5f0f\u7b49"),(0,a.kt)("h2",{id:"\u4f18\u79c0\u793a\u4f8b--\u6559\u7a0b"},"\u4f18\u79c0\u793a\u4f8b & \u6559\u7a0b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/JushBJJ/Mr.-Ranedeer-AI-Tutor"},"Mr. Ranedeer: Your personalized AI Tutor!"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u8ba1\u601d\u8def\uff1a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/JushBJJ/Mr.-Ranedeer-AI-Tutor/tree/testing"},"https://github.com/JushBJJ/Mr.-Ranedeer-AI-Tutor/tree/testing")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://flowgpt.com/"},"FlowGPT")," Prompt\u7684\u5206\u4eab\u793e\u533a"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/dair-ai/Prompt-Engineering-Guide/blob/main/guides/prompts-chatgpt.md"},"ChatGPT Prompt Engineering")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.promptingguide.ai/zh"},"\u63d0\u793a\u5de5\u7a0b\u6307\u5357")),(0,a.kt)("li",{parentName:"ul"},"\u5fae\u4fe1\u516c\u4f17\u53f7\uff1a \u65e0\u4eba\u4e4b\u8def\u3002")),(0,a.kt)("h2",{id:"\u8bc4\u4f30\u6548\u679c"},"\u8bc4\u4f30\u6548\u679c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://towardsdatascience.com/chatgpt-automated-prompt-scoring-c972f9ee2c4f"},"ChatGPT: Automated Prompt Scoring"))),(0,a.kt)("h2",{id:"\u5de5\u5177"},"\u5de5\u5177"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/microsoft/guidance/tree/main"},"Guidance")," \u8f85\u52a9\u751f\u6210 Prompt\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://alel.gitbook.io/alel-v.1.4/introduction-to-alel/what-is-alel"},"ALEL")," ALEL is one of the first ever \u201cPrompt Frameworks\u201d, which in the most simplest of terms is a standard method of communicating efficiently with ChatGPT.")))}s.isMDXComponent=!0}}]);