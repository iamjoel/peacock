"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4612],{8656:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>g});var r=n(6844);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=r.createContext({}),y=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=y(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=y(n),d=p,g=u["".concat(l,".").concat(d)]||u[d]||s[d]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:p,o[1]=i;for(var y=2;y<a;y++)o[y]=n[y];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>y});var r=n(1516),p=(n(6844),n(8656));const a={},o="python",i={unversionedId:"backend/python/overview",id:"backend/python/overview",title:"python",description:"\u5c06\u5b89\u88c5\u5305\u4fdd\u5b58\u5230 requirements.txt",source:"@site/docs/backend/python/overview.mdx",sourceDirName:"backend/python",slug:"/backend/python/overview",permalink:"/four-dimensional-space-bag/site/build/docs/backend/python/overview",draft:!1,tags:[],version:"current",frontMatter:{}},l={},y=[{value:"\u5c06\u5b89\u88c5\u5305\u4fdd\u5b58\u5230 requirements.txt",id:"\u5c06\u5b89\u88c5\u5305\u4fdd\u5b58\u5230-requirementstxt",level:2},{value:"\u73af\u5883",id:"\u73af\u5883",level:2},{value:"Mac \u4e0a\u628a python3 \u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u7684 python \u7248\u672c",id:"mac-\u4e0a\u628a-python3-\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u7684-python-\u7248\u672c",level:3},{value:"Web \u6846\u67b6",id:"web-\u6846\u67b6",level:2},{value:"FastAPI",id:"fastapi",level:3},{value:"\u5de5\u5177",id:"\u5de5\u5177",level:2},{value:"Poetry",id:"poetry",level:3},{value:"pipx",id:"pipx",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2}],c={toc:y},u="wrapper";function s(e){let{components:t,...n}=e;return(0,p.yg)(u,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.yg)("h1",{id:"python"},"python"),(0,p.yg)("h2",{id:"\u5c06\u5b89\u88c5\u5305\u4fdd\u5b58\u5230-requirementstxt"},"\u5c06\u5b89\u88c5\u5305\u4fdd\u5b58\u5230 requirements.txt"),(0,p.yg)("pre",null,(0,p.yg)("code",{parentName:"pre"},"pip install package && pip freeze > requirements.txt\n")),(0,p.yg)("p",null,"\u5176\u4e2d\uff1a",(0,p.yg)("inlineCode",{parentName:"p"},"pip freeze")," \u547d\u4ee4\u5c06\u5f53\u524dpython \u73af\u5883\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305\u5217\u8868\u8f93\u51fa\u5230\u7ec8\u7aef\u3002\u66f4\u597d\u7684\u65b9\u5f0f\uff0c\u7528 pipreqs \u8fd9\u4e2a\u5de5\u5177\u3002\n\u5b89\u88c5"),(0,p.yg)("pre",null,(0,p.yg)("code",{parentName:"pre"},"pip install pipreqs\n")),(0,p.yg)("pre",null,(0,p.yg)("code",{parentName:"pre"},"pipreqs ./ --encoding=utf8 --force\n")),(0,p.yg)("h2",{id:"\u73af\u5883"},"\u73af\u5883"),(0,p.yg)("h3",{id:"mac-\u4e0a\u628a-python3-\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u7684-python-\u7248\u672c"},"Mac \u4e0a\u628a python3 \u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u7684 python \u7248\u672c"),(0,p.yg)("p",null,"\u5728 ",(0,p.yg)("inlineCode",{parentName:"p"},"~/.zsh_profile")," \u4e2d\u6dfb\u52a0"),(0,p.yg)("pre",null,(0,p.yg)("code",{parentName:"pre",className:"language-bash"},"alias python=python3\nalias pip=pip3\n")),(0,p.yg)("h2",{id:"web-\u6846\u67b6"},"Web \u6846\u67b6"),(0,p.yg)("h3",{id:"fastapi"},(0,p.yg)("a",{parentName:"h3",href:"https://fastapi.tiangolo.com/"},"FastAPI")),(0,p.yg)("h2",{id:"\u5de5\u5177"},"\u5de5\u5177"),(0,p.yg)("h3",{id:"poetry"},(0,p.yg)("a",{parentName:"h3",href:"https://python-poetry.org/"},"Poetry")),(0,p.yg)("blockquote",null,(0,p.yg)("p",{parentName:"blockquote"},"PYTHON PACKAGING AND DEPENDENCY MANAGEMENT MADE EASY")),(0,p.yg)("h3",{id:"pipx"},(0,p.yg)("a",{parentName:"h3",href:"https://github.com/pypa/pipx"},"pipx")),(0,p.yg)("blockquote",null,(0,p.yg)("p",{parentName:"blockquote"},"Install and Run Python Applications in Isolated Environments")),(0,p.yg)("p",null,"\u7279\u522b\u662f\u4e00\u4e9b python \u547d\u4ee4\u884c\u5de5\u5177\u3002"),(0,p.yg)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},(0,p.yg)("a",{parentName:"li",href:"https://pypi.org/"},"Pypi")," python \u7b2c\u4e09\u65b9\u5305\u7684\u5e02\u573a\u3002")))}s.isMDXComponent=!0}}]);