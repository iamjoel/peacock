"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2213],{6291:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(8404);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=c(n),s=o,m=k["".concat(p,".").concat(s)]||k[s]||d[s]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[k]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(1231),o=(n(8404),n(6291));const a={},l="Docker",i={unversionedId:"tools/docker/overview",id:"tools/docker/overview",title:"Docker",description:"\u4f7f\u7528 Docker\uff0c\u53ef\u4ee5\u8ba9\u5e94\u7528\u7684\u90e8\u7f72\u3001\u6d4b\u8bd5\u548c\u5206\u53d1\u90fd\u53d8\u5f97\u524d\u6240\u672a\u6709\u7684\u9ad8\u6548\u548c\u8f7b\u677e\uff01",source:"@site/docs/tools/docker/overview.mdx",sourceDirName:"tools/docker",slug:"/tools/docker/overview",permalink:"/four-dimensional-space-bag/site/build/docs/tools/docker/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tools",previous:{title:"Conda",permalink:"/four-dimensional-space-bag/site/build/docs/tools/conda"}},p={},c=[{value:"\u57fa\u7840\u6982\u5ff5",id:"\u57fa\u7840\u6982\u5ff5",level:2},{value:"\u955c\u50cf(Image)",id:"\u955c\u50cfimage",level:3},{value:"\u5bb9\u5668(Container)",id:"\u5bb9\u5668container",level:3},{value:"\u4ed3\u5e93",id:"\u4ed3\u5e93",level:3},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u83b7\u53d6\u955c\u50cf",id:"\u83b7\u53d6\u955c\u50cf",level:3},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:3},{value:"\u5217\u51fa\u955c\u50cf",id:"\u5217\u51fa\u955c\u50cf",level:2},{value:"\u5b9a\u5236\u955c\u50cf",id:"\u5b9a\u5236\u955c\u50cf",level:2},{value:"\u6784\u5efa\u591a\u79cd\u7cfb\u7edf\u67b6\u6784\u652f\u6301\u7684 Docker \u955c\u50cf",id:"\u6784\u5efa\u591a\u79cd\u7cfb\u7edf\u67b6\u6784\u652f\u6301\u7684-docker-\u955c\u50cf",level:2},{value:"\u6570\u636e\u5377",id:"\u6570\u636e\u5377",level:2},{value:"\u7f16\u6392(Docker Compose)",id:"\u7f16\u6392docker-compose",level:2},{value:"\u7f16\u6392",id:"\u7f16\u6392",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:3},{value:"\u5c06 Docker \u5bb9\u5668\u4f5c\u4e3a\u8fdc\u7a0b\u5f00\u53d1\u73af\u5883",id:"\u5c06-docker-\u5bb9\u5668\u4f5c\u4e3a\u8fdc\u7a0b\u5f00\u53d1\u73af\u5883",level:3},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2}],u={toc:c},k="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(k,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker"},"Docker"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528 Docker\uff0c\u53ef\u4ee5\u8ba9\u5e94\u7528\u7684\u90e8\u7f72\u3001\u6d4b\u8bd5\u548c\u5206\u53d1\u90fd\u53d8\u5f97\u524d\u6240\u672a\u6709\u7684\u9ad8\u6548\u548c\u8f7b\u677e\uff01")),(0,o.kt)("h2",{id:"\u57fa\u7840\u6982\u5ff5"},"\u57fa\u7840\u6982\u5ff5"),(0,o.kt)("h3",{id:"\u955c\u50cfimage"},"\u955c\u50cf(Image)"),(0,o.kt)("p",null,"Docker \u955c\u50cf \u662f\u4e00\u4e2a\u5305\u542b\u64cd\u4f5c\u7cfb\u7edf\u7684\u6587\u4ef6\u7cfb\u7edf\uff0c\u9664\u4e86\u63d0\u4f9b\u5bb9\u5668\u8fd0\u884c\u65f6\u6240\u9700\u7684\u7a0b\u5e8f\u3001\u5e93\u3001\u8d44\u6e90\u3001\u914d\u7f6e\u7b49\u6587\u4ef6\u5916\uff0c\u8fd8\u5305\u542b\u4e86\u4e00\u4e9b\u4e3a\u8fd0\u884c\u65f6\u51c6\u5907\u7684\u4e00\u4e9b\u914d\u7f6e\u53c2\u6570\uff08\u5982\u533f\u540d\u5377\u3001\u73af\u5883\u53d8\u91cf\u3001\u7528\u6237\u7b49\uff09\u3002\u955c\u50cf \u4e0d\u5305\u542b \u4efb\u4f55\u52a8\u6001\u6570\u636e\uff0c\u5176\u5185\u5bb9\u5728\u6784\u5efa\u4e4b\u540e\u4e5f\u4e0d\u4f1a\u88ab\u6539\u53d8\u3002\u6bd4\u5982\uff1a\u5b98\u65b9\u955c\u50cf ubuntu:18.04 \u5c31\u5305\u542b\u4e86\u5b8c\u6574\u7684\u4e00\u5957 Ubuntu 18.04 \u6700\u5c0f\u7cfb\u7edf\u7684 root \u6587\u4ef6\u7cfb\u7edf\u3002"),(0,o.kt)("p",null,"\u955c\u50cf\u6784\u5efa\u65f6\uff0c\u662f\u5206\u5c42\u6784\u5efa\u548c\u5b58\u50a8\u7684\u3002\u6bcf\u4e00\u5c42\u6784\u5efa\u5b8c\u5c31\u4e0d\u4f1a\u518d\u53d1\u751f\u6539\u53d8\uff0c\u540e\u4e00\u5c42\u4e0a\u7684\u4efb\u4f55\u6539\u53d8\u53ea\u53d1\u751f\u5728\u81ea\u5df1\u8fd9\u4e00\u5c42\u3002\u6bd4\u5982\uff0c\u5220\u9664\u524d\u4e00\u5c42\u6587\u4ef6\u7684\u64cd\u4f5c\uff0c\u5b9e\u9645\u4e0d\u662f\u771f\u7684\u5220\u9664\u524d\u4e00\u5c42\u7684\u6587\u4ef6\uff0c\u800c\u662f\u4ec5\u5728\u5f53\u524d\u5c42\u6807\u8bb0\u4e3a\u8be5\u6587\u4ef6\u5df2\u5220\u9664\u3002"),(0,o.kt)("h3",{id:"\u5bb9\u5668container"},"\u5bb9\u5668(Container)"),(0,o.kt)("p",null,"\u5bb9\u5668\u662f\u955c\u50cf\u7684\u5b9e\u4f8b\u5316\u3002\u955c\u50cf\u662f\u9759\u6001\u7684\u5b9a\u4e49\uff0c\u5bb9\u5668\u662f\u955c\u50cf\u8fd0\u884c\u65f6\u7684\u5b9e\u4f53\u3002\u5bb9\u5668\u53ef\u4ee5\u88ab\u521b\u5efa\u3001\u542f\u52a8\u3001\u505c\u6b62\u3001\u5220\u9664\u3001\u6682\u505c\u7b49\u3002"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"\u5bb9\u5668\u5b58\u50a8\u5c42\u7684\u751f\u5b58\u5468\u671f\u548c\u5bb9\u5668\u4e00\u6837\uff0c\u5bb9\u5668\u6d88\u4ea1\u65f6\uff0c\u5bb9\u5668\u5b58\u50a8\u5c42\u4e5f\u968f\u4e4b\u6d88\u4ea1\u3002\u56e0\u6b64\uff0c\u4efb\u4f55\u4fdd\u5b58\u4e8e\u5bb9\u5668\u5b58\u50a8\u5c42\u7684\u4fe1\u606f\u90fd\u4f1a\u968f\u5bb9\u5668\u5220\u9664\u800c\u4e22\u5931\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u6309\u7167 Docker \u6700\u4f73\u5b9e\u8df5\u7684\u8981\u6c42\uff0c\u5bb9\u5668\u4e0d\u5e94\u8be5\u5411\u5176\u5b58\u50a8\u5c42\u5185\u5199\u5165\u4efb\u4f55\u6570\u636e\uff0c\u5bb9\u5668\u5b58\u50a8\u5c42\u8981\u4fdd\u6301\u65e0\u72b6\u6001\u5316\u3002\u6240\u6709\u7684\u6587\u4ef6\u5199\u5165\u64cd\u4f5c\uff0c\u90fd\u5e94\u8be5\u4f7f\u7528 \u6570\u636e\u5377\uff08Volume\uff09\u3001\u6216\u8005 \u7ed1\u5b9a\u5bbf\u4e3b\u76ee\u5f55\uff0c\u5728\u8fd9\u4e9b\u4f4d\u7f6e\u7684\u8bfb\u5199\u4f1a\u8df3\u8fc7\u5bb9\u5668\u5b58\u50a8\u5c42\uff0c\u76f4\u63a5\u5bf9\u5bbf\u4e3b\uff08\u6216\u7f51\u7edc\u5b58\u50a8\uff09\u53d1\u751f\u8bfb\u5199\uff0c\u5176\u6027\u80fd\u548c\u7a33\u5b9a\u6027\u66f4\u9ad8\u3002")),(0,o.kt)("h3",{id:"\u4ed3\u5e93"},"\u4ed3\u5e93"),(0,o.kt)("p",null,"\u5b58\u50a8\u955c\u50cf\u7684\u4ed3\u5e93\u3002\u7c7b\u4f3c npm \u4ed3\u5e93 \u4e4b\u4e8e node \u5305\u3002"),(0,o.kt)("p",null,"\u4e00\u4e2a Docker Registry \u4e2d\u53ef\u4ee5\u5305\u542b\u591a\u4e2a \u4ed3\u5e93\uff08Repository\uff09\uff1b\u6bcf\u4e2a\u4ed3\u5e93\u53ef\u4ee5\u5305\u542b\u591a\u4e2a \u6807\u7b7e\uff08Tag\uff09\uff1b\u6bcf\u4e2a\u6807\u7b7e\u5bf9\u5e94\u4e00\u4e2a\u955c\u50cf\u3002"),(0,o.kt)("p",null,"\u5b98\u65b9\u4ed3\u5e93\uff1a ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub"),"\u3002\u8fd8\u6709\u5176\u4ed6\u516c\u5f00\u7684\u4ed3\u5e93\uff0c\u5982 Red Hat \u7684 Quay.io\uff1bGoogle \u7684 Google Container Registry\uff08Kubernetes \u7684\u955c\u50cf\u4f7f\u7528\u7684\u5c31\u662f\u8fd9\u4e2a\u670d\u52a1\uff09\uff1b\u4ee3\u7801\u6258\u7ba1\u5e73\u53f0 GitHub \u63a8\u51fa\u7684 ghcr.io\u3002"),(0,o.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,o.kt)("h3",{id:"\u83b7\u53d6\u955c\u50cf"},"\u83b7\u53d6\u955c\u50cf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker pull \u4ed3\u5e93\u540d[:\u6807\u7b7e]\n")),(0,o.kt)("p",null,"\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker pull ubuntu:18.04\n")),(0,o.kt)("h3",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -it --rm ubuntu:18.04 bash\n")),(0,o.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"-it\uff1a\u8fd9\u662f\u4e24\u4e2a\u53c2\u6570\uff0c\u4e00\u4e2a\u662f -i\uff1a\u4ea4\u4e92\u5f0f\u64cd\u4f5c\uff0c\u4e00\u4e2a\u662f -t \u7ec8\u7aef\u3002\u6211\u4eec\u8fd9\u91cc\u6253\u7b97\u8fdb\u5165 bash \u6267\u884c\u4e00\u4e9b\u547d\u4ee4\u5e76\u67e5\u770b\u8fd4\u56de\u7ed3\u679c\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u4ea4\u4e92\u5f0f\u7ec8\u7aef\u3002"),(0,o.kt)("li",{parentName:"ul"},"--rm\uff1a\u8fd9\u4e2a\u53c2\u6570\u662f\u8bf4\u5bb9\u5668\u9000\u51fa\u540e\u968f\u4e4b\u5c06\u5176\u5220\u9664\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e3a\u4e86\u6392\u969c\u9700\u6c42\uff0c\u9000\u51fa\u7684\u5bb9\u5668\u5e76\u4e0d\u4f1a\u5220\u9664\uff0c\u9664\u975e\u624b\u52a8 ",(0,o.kt)("inlineCode",{parentName:"li"},"docker rm"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"ubuntu:18.04\uff1a\u8fd9\u662f\u6307\u7528 ubuntu:18.04 \u955c\u50cf\u4e3a\u57fa\u7840\u6765\u542f\u52a8\u5bb9\u5668\u3002"),(0,o.kt)("li",{parentName:"ul"},"bash\uff1a\u653e\u5728\u955c\u50cf\u540d\u540e\u7684\u662f \u547d\u4ee4\uff0c\u8fd9\u91cc\u6211\u4eec\u5e0c\u671b\u6709\u4e2a\u4ea4\u4e92\u5f0f Shell\uff0c\u56e0\u6b64\u7528\u7684\u662f bash\u3002")),(0,o.kt)("h2",{id:"\u5217\u51fa\u955c\u50cf"},"\u5217\u51fa\u955c\u50cf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker image ls\n")),(0,o.kt)("p",null,"\u5728 Docker \u5ba2\u6237\u7aef\u53ef\u4ee5\u770b\u5230\u66f4\u8be6\u7ec6\u5bf9\u4fe1\u606f\u3002"),(0,o.kt)("h2",{id:"\u5b9a\u5236\u955c\u50cf"},"\u5b9a\u5236\u955c\u50cf"),(0,o.kt)("p",null,"\u7528 Dockerfile \u6765\u5b9a\u5236\u955c\u50cf\u3002 Dockerfile \u91cc\u5305\u542b\u4e86\u4e00\u7cfb\u5217\u4fee\u6539\u7684\u6307\u4ee4\u3002\u6bcf\u4e2a\u6307\u4ee4\u90fd\u4f1a\u7ed9\u6539 image \u589e\u52a0\u4e00\u5c42\u3002"),(0,o.kt)("p",null,"\u5e38\u89c1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'FROM \u955c\u50cf\u540d\u79f0: \u6807\u7b7e\n\n# \u6e90\u6570\u636e\nLABEL org.opencontainers.image.authors="Joel"\nLABEL org.opencontainers.image.documentation="https://yeasy.gitbooks.io"\n\n# \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\nENV DEPLOY_ENV PRODUCTION\n\n# \u66b4\u9732\u7aef\u53e3\u7684\u58f0\u660e\nEXPOSE 3000\n\nWORKDIR /app/web\n\nCOPY package.json /app/web/package.json\n\nRUN npm install --only=prod\n\n# \u5c06\u5916\u9762\u7684\u6587\u4ef6\u62f7\u8d1d\u5230\u5de5\u4f5c\u8def\u5f84\u4e0b\u53bb\nCOPY . /app/web/\n\nRUN npm run build \n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u51cf\u5c11\u6784\u5efa\u51fa\u7684\u955c\u50cf\u4f53\u79ef\u5c0f\u6280\u5de7"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"\u505a\u4e00\u4ef6\u4e8b\u7684\u591a\u4e2a RUN \u6539\u6210\u4e00\u4e2a RUN\uff0c\u7528 & \u6765\u8fde\u63a5\uff0c\u4ee5\u6b64\u6765\u51cf\u5c11\u5c42\u6570\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u547d\u4ee4\u7ed3\u675f\u540e\uff0c\u6e05\u9664\u4e34\u65f6\u6587\u4ef6\u548c\u7f13\u5b58\u6587\u4ef6\u3002"))),(0,o.kt)("p",null,"\u6784\u5efa\u8be5\u955c\u50cf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd Dockerfile\u6240\u5728\u6587\u4ef6\u5939\ndocker build . -t \u6784\u5efa\u51fa\u7684\u955c\u50cf\u540d\u79f0\n")),(0,o.kt)("p",null,"docker \u8fd8\u652f\u6301\u5bf9 GitHub \u7684 repo \u6216\u8005\u538b\u7f29\u5305\u6765\u6784\u5efa\u3002"),(0,o.kt)("p",null,"\u4f20\u6784\u65f6\u4f20\u53c2\uff0c\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"--build-arg key=value"),"\u3002\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker build --build-arg SENTRY_DSN=abc --build-arg SENTRY_ORG=abc . -t xxx ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'ARG SENTRY_DSN # \u83b7\u53d6\u5230\u7684\u53c2\u6570\nENV NEXT_PUBLIC_SENTRY_DSN $SENTRY_DSN\nRUN echo "NEXT_PUBLIC_SENTRY_DSN is: $NEXT_PUBLIC_SENTRY_DSN"\n\n# ...\nRUN NEXT_PUBLIC_SENTRY_DSN=$SENTRY_DSN \\\n    NEXT_PUBLIC_SENTRY_ORG=$SENTRY_ORG \\\n    NEXT_PUBLIC_SENTRY_PROJECT=$SENTRY_PROJECT \\\n    npm run build\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/build/"},"\u66f4\u591a\u4fe1\u606f"),"\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u4e0d\u63a8\u8350\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker commit")," \u6765\u5b9a\u5236\u955c\u50cf\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"docker commit")," \u610f\u5473\u7740\u6240\u6709\u5bf9\u955c\u50cf\u7684\u64cd\u4f5c\u90fd\u662f\u9ed1\u7bb1\u64cd\u4f5c\uff0c\u751f\u6210\u7684\u955c\u50cf\u4e5f\u88ab\u79f0\u4e3a \u9ed1\u7bb1\u955c\u50cf\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c\u5c31\u662f\u9664\u4e86\u5236\u4f5c\u955c\u50cf\u7684\u4eba\u77e5\u9053\u6267\u884c\u8fc7\u4ec0\u4e48\u547d\u4ee4\u3001\u600e\u4e48\u751f\u6210\u7684\u955c\u50cf\uff0c\u522b\u4eba\u6839\u672c\u65e0\u4ece\u5f97\u77e5\u3002\u800c\u4e14\uff0c\u5373\u4f7f\u662f\u8fd9\u4e2a\u5236\u4f5c\u955c\u50cf\u7684\u4eba\uff0c\u8fc7\u4e00\u6bb5\u65f6\u95f4\u540e\u4e5f\u65e0\u6cd5\u8bb0\u6e05\u5177\u4f53\u7684\u64cd\u4f5c\u3002\u8fd9\u79cd\u9ed1\u7bb1\u955c\u50cf\u7684\u7ef4\u62a4\u5de5\u4f5c\u662f\u975e\u5e38\u75db\u82e6\u7684\u3002")),(0,o.kt)("h2",{id:"\u6784\u5efa\u591a\u79cd\u7cfb\u7edf\u67b6\u6784\u652f\u6301\u7684-docker-\u955c\u50cf"},"\u6784\u5efa\u591a\u79cd\u7cfb\u7edf\u67b6\u6784\u652f\u6301\u7684 Docker \u955c\u50cf"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest")," \u6765\u5b9e\u73b0\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://yeasy.gitbook.io/docker_practice/image/manifest"},"\u8be6\u60c5"),"\u3002"),(0,o.kt)("h2",{id:"\u6570\u636e\u5377"},"\u6570\u636e\u5377"),(0,o.kt)("p",null,"\u6570\u636e\u5377 \u662f\u4e00\u4e2a\u53ef\u4f9b\u4e00\u4e2a\u6216\u591a\u4e2a\u5bb9\u5668\u4f7f\u7528\u7684\u7279\u6b8a\u76ee\u5f55\u3002"),(0,o.kt)("h2",{id:"\u7f16\u6392docker-compose"},"\u7f16\u6392(Docker Compose)"),(0,o.kt)("p",null,"\u542f\u52a8\u4e00\u4e2a\u9879\u76ee\u65f6\uff0c\u5982\u679c\u9700\u8981\u591a\u4e2a\u5bb9\u5668\uff0c\u5219\u9700\u8981\u7f16\u6392\u3002\u6bd4\u5982\uff0c\u540e\u7aef\u4e00\u4e2a\u5bb9\u5668\uff0c\u524d\u7aef\u4e00\u4e2a\u5bb9\u5668\uff0c\u6570\u636e\u5e93\u4e00\u4e2a\u5bb9\u5668\u3002"),(0,o.kt)("h3",{id:"\u7f16\u6392"},"\u7f16\u6392"),(0,o.kt)("p",null,"\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," \u6765\u7f16\u6392\u3002\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'version: \'3\'\nservices:\n  web:\n    build: . # Dockerfile \u6240\u5728\u6587\u4ef6\u5939\u3002\n    ports:\n     - "5000:5000"\n\n  redis:\n    image: "redis:alpine"\n\n db:\n    image: postgres:15-alpine\n    restart: always\n    environment:\n      POSTGRES_PASSWORD: xxx\n      POSTGRES_DB: xxx\n      PGDATA: /var/lib/postgresql/data/pgdata\n    volumes:\n      - ./volumes/db/data:/var/lib/postgresql/data\n    ports:\n      - "5432:5432"\n')),(0,o.kt)("h3",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker-compose up -d\n")),(0,o.kt)("h3",{id:"\u5c06-docker-\u5bb9\u5668\u4f5c\u4e3a\u8fdc\u7a0b\u5f00\u53d1\u73af\u5883"},"\u5c06 Docker \u5bb9\u5668\u4f5c\u4e3a\u8fdc\u7a0b\u5f00\u53d1\u73af\u5883"),(0,o.kt)("p",null,"\u65e0\u9700\u672c\u5730\u5b89\u88c5\u5f00\u53d1\u5de5\u5177\uff0c\u76f4\u63a5\u5c06 Docker \u5bb9\u5668\u4f5c\u4e3a\u5f00\u53d1\u73af\u5883\uff0c\u5177\u4f53\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/devcontainers/containers"},"\u6587\u6863"),"\u3002"),(0,o.kt)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://yeasy.gitbook.io/docker_practice/"},"Docker \u4ece\u5165\u95e8\u5230\u5b9e\u8df5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://yeasy.gitbook.io/docker_practice/appendix/best_practices"},"Dockerfile \u6700\u4f73\u5b9e\u8df5"))))}d.isMDXComponent=!0}}]);