/*! For license information please see 2795.d06d7b7f.js.LICENSE.txt */
(self.webpackChunksite=self.webpackChunksite||[]).push([[2795],{6291:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>l,kt:()=>p});var n=r(8404);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=c(r),h=i,p=f["".concat(u,".").concat(h)]||f[h]||d[h]||o;return r?n.createElement(p,s(s({ref:t},l),{},{components:r})):n.createElement(p,s({ref:t},l))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=h;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[f]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6498:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(5141),i=r(8404);const o=function(e,t){void 0===e&&(e=!1);var r=(0,n.CR)((0,i.useState)(e),2),o=r[0],s=r[1];return[o,(0,i.useMemo)((function(){var r=void 0===t?!e:t;return{toggle:function(){return s((function(t){return t===e?r:e}))},set:function(e){return s(e)},setLeft:function(){return s(e)},setRight:function(){return s(r)}}}),[])]};function s(e){void 0===e&&(e=!1);var t=(0,n.CR)(o(!!e),2),r=t[0],s=t[1],a=s.toggle,u=s.set;return[r,(0,i.useMemo)((function(){return{toggle:a,set:function(e){return u(!!e)},setTrue:function(){return u(!0)},setFalse:function(){return u(!1)}}}),[])]}},4419:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(8404),i=r(695);function o(e){let{children:t,fallback:r}=e;return(0,i.Z)()?n.createElement(n.Fragment,null,t?.()):r??null}},7421:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var s=i.apply(null,r);s&&e.push(s)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},2847:function(e,t){var r,n,i;n=[],r=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=!t.document&&!!t.postMessage,n=t.IS_PAPA_WORKER||!1,i={},o=0,s={parse:function(r,n){var a=(n=n||{}).dynamicTyping||!1;if(k(a)&&(n.dynamicTypingFunction=a,a={}),n.dynamicTyping=a,n.transform=!!k(n.transform)&&n.transform,n.worker&&s.WORKERS_SUPPORTED){var u=function(){if(!s.WORKERS_SUPPORTED)return!1;var r,n,a=(r=t.URL||t.webkitURL||null,n=e.toString(),s.BLOB_URL||(s.BLOB_URL=r.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",n,")();"],{type:"text/javascript"})))),u=new t.Worker(a);return u.onmessage=v,u.id=o++,i[u.id]=u}();return u.userStep=n.step,u.userChunk=n.chunk,u.userComplete=n.complete,u.userError=n.error,n.step=k(n.step),n.chunk=k(n.chunk),n.complete=k(n.complete),n.error=k(n.error),delete n.worker,void u.postMessage({input:r,config:n,workerId:u.id})}var h=null;return s.NODE_STREAM_INPUT,"string"==typeof r?(r=function(e){return 65279===e.charCodeAt(0)?e.slice(1):e}(r),h=n.download?new c(n):new f(n)):!0===r.readable&&k(r.read)&&k(r.on)?h=new d(n):(t.File&&r instanceof File||r instanceof Object)&&(h=new l(n)),h.stream(r)},unparse:function(e,t){var r=!1,n=!0,i=",",o="\r\n",a='"',u=a+a,c=!1,l=null,f=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||s.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(i=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(c=t.skipEmptyLines),"string"==typeof t.newline&&(o=t.newline),"string"==typeof t.quoteChar&&(a=t.quoteChar),"boolean"==typeof t.header&&(n=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");l=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+a),("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(f=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}}();var d=new RegExp(p(a),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return h(null,e,c);if("object"==typeof e[0])return h(l||Object.keys(e[0]),e,c)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||l),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),h(e.fields||[],e.data||[],c);throw new Error("Unable to serialize unrecognized input");function h(e,t,r){var s="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var a=Array.isArray(e)&&0<e.length,u=!Array.isArray(t[0]);if(a&&n){for(var c=0;c<e.length;c++)0<c&&(s+=i),s+=g(e[c],c);0<t.length&&(s+=o)}for(var l=0;l<t.length;l++){var f=a?e.length:t[l].length,d=!1,h=a?0===Object.keys(t[l]).length:0===t[l].length;if(r&&!a&&(d="greedy"===r?""===t[l].join("").trim():1===t[l].length&&0===t[l][0].length),"greedy"===r&&a){for(var p=[],v=0;v<f;v++){var m=u?e[v]:v;p.push(t[l][m])}d=""===p.join("").trim()}if(!d){for(var y=0;y<f;y++){0<y&&!h&&(s+=i);var _=a&&u?e[y]:y;s+=g(t[l][_],y)}l<t.length-1&&(!r||0<f&&!h)&&(s+=o)}}return s}function g(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var n=!1;f&&"string"==typeof e&&f.test(e)&&(e="'"+e,n=!0);var o=e.toString().replace(d,u);return(n=n||!0===r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(o,s.BAD_DELIMITERS)||-1<o.indexOf(i)||" "===o.charAt(0)||" "===o.charAt(o.length-1))?a+o+a:o}}};if(s.RECORD_SEP=String.fromCharCode(30),s.UNIT_SEP=String.fromCharCode(31),s.BYTE_ORDER_MARK="\ufeff",s.BAD_DELIMITERS=["\r","\n",'"',s.BYTE_ORDER_MARK],s.WORKERS_SUPPORTED=!r&&!!t.Worker,s.NODE_STREAM_INPUT=1,s.LocalChunkSize=10485760,s.RemoteChunkSize=5242880,s.DefaultDelimiter=",",s.Parser=g,s.ParserHandle=h,s.NetworkStreamer=c,s.FileStreamer=l,s.StringStreamer=f,s.ReadableStreamStreamer=d,t.jQuery){var a=t.jQuery;a.fn.parse=function(e){var r=e.config||{},n=[];return this.each((function(e){if("INPUT"!==a(this).prop("tagName").toUpperCase()||"file"!==a(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)n.push({file:this.files[i],inputElem:this,instanceConfig:a.extend({},r)})})),i(),this;function i(){if(0!==n.length){var t,r,i,u,c=n[0];if(k(e.before)){var l=e.before(c.file,c.inputElem);if("object"==typeof l){if("abort"===l.action)return t="AbortError",r=c.file,i=c.inputElem,u=l.reason,void(k(e.error)&&e.error({name:t},r,i,u));if("skip"===l.action)return void o();"object"==typeof l.config&&(c.instanceConfig=a.extend(c.instanceConfig,l.config))}else if("skip"===l)return void o()}var f=c.instanceConfig.complete;c.instanceConfig.complete=function(e){k(f)&&f(e,c.file,c.inputElem),o()},s.parse(c.file,c.instanceConfig)}else k(e.complete)&&e.complete()}function o(){n.splice(0,1),i()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=_(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new h(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,r){if(this.isFirstChunk&&k(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var o=this._partialLine+e;this._partialLine="";var a=this._handle.parse(o,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=a.meta.cursor;this._finished||(this._partialLine=o.substring(u-this._baseIndex),this._baseIndex=u),a&&a.data&&(this._rowCount+=a.data.length);var c=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(n)t.postMessage({results:a,workerId:s.WORKER_ID,finished:c});else if(k(this._config.chunk)&&!r){if(this._config.chunk(a,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);a=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(a.data),this._completeResults.errors=this._completeResults.errors.concat(a.errors),this._completeResults.meta=a.meta),this._completed||!c||!k(this._config.complete)||a&&a.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),c||a&&a.meta.paused||this._nextChunk(),a}this._halted=!0},this._sendError=function(e){k(this._config.error)?this._config.error(e):n&&this._config.error&&t.postMessage({workerId:s.WORKER_ID,error:e,finished:!1})}}function c(e){var t;(e=e||{}).chunkSize||(e.chunkSize=s.RemoteChunkSize),u.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var n in e)t.setRequestHeader(n,e[n])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var r=t.statusText||e;this._sendError(new Error(r))}}function l(e){var t,r;(e=e||{}).chunkSize||(e.chunkSize=s.LocalChunkSize),u.call(this,e);var n="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,n?((t=new FileReader).onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,i)}var o=t.readAsText(e,this._config.encoding);n||this._chunkLoaded({target:{result:o}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function f(e){var t;u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,r=this._config.chunkSize;return r?(e=t.substring(0,r),t=t.substring(r)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function d(e){u.call(this,e=e||{});var t=[],r=!0,n=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=b((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=b((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=b((function(){this._streamCleanUp(),n=!0,this._streamData("")}),this),this._streamCleanUp=b((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function h(e){var t,r,n,i=Math.pow(2,53),o=-i,a=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,u=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,c=this,l=0,f=0,d=!1,h=!1,v=[],m={data:[],errors:[],meta:{}};if(k(e.step)){var y=e.step;e.step=function(t){if(m=t,E())w();else{if(w(),0===m.data.length)return;l+=t.data.length,e.preview&&l>e.preview?r.abort():(m.data=m.data[0],y(m,c))}}}function b(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function w(){return m&&n&&(O("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+s.DefaultDelimiter+"'"),n=!1),e.skipEmptyLines&&(m.data=m.data.filter((function(e){return!b(e)}))),E()&&function(){if(m)if(Array.isArray(m.data[0])){for(var t=0;E()&&t<m.data.length;t++)m.data[t].forEach(r);m.data.splice(0,1)}else m.data.forEach(r);function r(t,r){k(e.transformHeader)&&(t=e.transformHeader(t,r)),v.push(t)}}(),function(){if(!m||!e.header&&!e.dynamicTyping&&!e.transform)return m;function t(t,r){var n,i=e.header?{}:[];for(n=0;n<t.length;n++){var o=n,s=t[n];e.header&&(o=n>=v.length?"__parsed_extra":v[n]),e.transform&&(s=e.transform(s,o)),s=C(o,s),"__parsed_extra"===o?(i[o]=i[o]||[],i[o].push(s)):i[o]=s}return e.header&&(n>v.length?O("FieldMismatch","TooManyFields","Too many fields: expected "+v.length+" fields but parsed "+n,f+r):n<v.length&&O("FieldMismatch","TooFewFields","Too few fields: expected "+v.length+" fields but parsed "+n,f+r)),i}var r=1;return!m.data.length||Array.isArray(m.data[0])?(m.data=m.data.map(t),r=m.data.length):m.data=t(m.data,0),e.header&&m.meta&&(m.meta.fields=v),f+=r,m}()}function E(){return e.header&&0===v.length}function C(t,r){return n=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[n]&&(e.dynamicTyping[n]=e.dynamicTypingFunction(n)),!0===(e.dynamicTyping[n]||e.dynamicTyping)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(function(e){if(a.test(e)){var t=parseFloat(e);if(o<t&&t<i)return!0}return!1}(r)?parseFloat(r):u.test(r)?new Date(r):""===r?null:r):r;var n}function O(e,t,r,n){var i={type:e,code:t,message:r};void 0!==n&&(i.row=n),m.errors.push(i)}this.parse=function(i,o,a){var u=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var r=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),n=(e=e.replace(r,"")).split("\r"),i=e.split("\n"),o=1<i.length&&i[0].length<n[0].length;if(1===n.length||o)return"\n";for(var s=0,a=0;a<n.length;a++)"\n"===n[a][0]&&s++;return s>=n.length/2?"\r\n":"\r"}(i,u)),n=!1,e.delimiter)k(e.delimiter)&&(e.delimiter=e.delimiter(i),m.meta.delimiter=e.delimiter);else{var c=function(t,r,n,i,o){var a,u,c,l;o=o||[",","\t","|",";",s.RECORD_SEP,s.UNIT_SEP];for(var f=0;f<o.length;f++){var d=o[f],h=0,p=0,v=0;c=void 0;for(var m=new g({comments:i,delimiter:d,newline:r,preview:10}).parse(t),y=0;y<m.data.length;y++)if(n&&b(m.data[y]))v++;else{var _=m.data[y].length;p+=_,void 0!==c?0<_&&(h+=Math.abs(_-c),c=_):c=_}0<m.data.length&&(p/=m.data.length-v),(void 0===u||h<=u)&&(void 0===l||l<p)&&1.99<p&&(u=h,a=d,l=p)}return{successful:!!(e.delimiter=a),bestDelimiter:a}}(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);c.successful?e.delimiter=c.bestDelimiter:(n=!0,e.delimiter=s.DefaultDelimiter),m.meta.delimiter=e.delimiter}var l=_(e);return e.preview&&e.header&&l.preview++,t=i,r=new g(l),m=r.parse(t,o,a),w(),d?{meta:{paused:!0}}:m||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,r.abort(),t=k(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){c.streamer._halted?(d=!1,c.streamer.parseChunk(t,!0)):setTimeout(c.resume,3)},this.aborted=function(){return h},this.abort=function(){h=!0,r.abort(),m.meta.aborted=!0,k(e.complete)&&e.complete(m),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(e){var t,r=(e=e||{}).delimiter,n=e.newline,i=e.comments,o=e.step,a=e.preview,u=e.fastMode,c=t=void 0===e.quoteChar||null===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(c=e.escapeChar),("string"!=typeof r||-1<s.BAD_DELIMITERS.indexOf(r))&&(r=","),i===r)throw new Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<s.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==n&&"\r"!==n&&"\r\n"!==n&&(n="\n");var l=0,f=!1;this.parse=function(s,d,h){if("string"!=typeof s)throw new Error("Input must be a string");var g=s.length,v=r.length,m=n.length,y=i.length,_=k(o),b=[],w=[],E=[],C=l=0;if(!s)return Q();if(e.header&&!d){var O=s.split(n)[0].split(r),R=[],S={},D=!1;for(var x in O){var F=O[x];k(e.transformHeader)&&(F=e.transformHeader(F,x));var A=F,T=S[F]||0;for(0<T&&(D=!0,A=F+"_"+T),S[F]=T+1;R.includes(A);)A=A+"_"+T;R.push(A)}if(D){var P=s.split(n);P[0]=R.join(r),s=P.join(n)}}if(u||!1!==u&&-1===s.indexOf(t)){for(var j=s.split(n),L=0;L<j.length;L++){if(E=j[L],l+=E.length,L!==j.length-1)l+=n.length;else if(h)return Q();if(!i||E.substring(0,y)!==i){if(_){if(b=[],q(E.split(r)),Z(),f)return Q()}else q(E.split(r));if(a&&a<=L)return b=b.slice(0,a),Q(!0)}}return Q()}for(var I=s.indexOf(r,l),B=s.indexOf(n,l),z=new RegExp(p(c)+p(t),"g"),M=s.indexOf(t,l);;)if(s[l]!==t)if(i&&0===E.length&&s.substring(l,l+y)===i){if(-1===B)return Q();l=B+m,B=s.indexOf(n,l),I=s.indexOf(r,l)}else if(-1!==I&&(I<B||-1===B))E.push(s.substring(l,I)),l=I+v,I=s.indexOf(r,l);else{if(-1===B)break;if(E.push(s.substring(l,B)),H(B+m),_&&(Z(),f))return Q();if(a&&b.length>=a)return Q(!0)}else for(M=l,l++;;){if(-1===(M=s.indexOf(t,M+1)))return h||w.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:b.length,index:l}),W();if(M===g-1)return W(s.substring(l,M).replace(z,t));if(t!==c||s[M+1]!==c){if(t===c||0===M||s[M-1]!==c){-1!==I&&I<M+1&&(I=s.indexOf(r,M+1)),-1!==B&&B<M+1&&(B=s.indexOf(n,M+1));var U=K(-1===B?I:Math.min(I,B));if(s.substr(M+1+U,v)===r){E.push(s.substring(l,M).replace(z,t)),s[l=M+1+U+v]!==t&&(M=s.indexOf(t,l)),I=s.indexOf(r,l),B=s.indexOf(n,l);break}var N=K(B);if(s.substring(M+1+N,M+1+N+m)===n){if(E.push(s.substring(l,M).replace(z,t)),H(M+1+N+m),I=s.indexOf(r,l),M=s.indexOf(t,l),_&&(Z(),f))return Q();if(a&&b.length>=a)return Q(!0);break}w.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:b.length,index:l}),M++}}else M++}return W();function q(e){b.push(e),C=l}function K(e){var t=0;if(-1!==e){var r=s.substring(M+1,e);r&&""===r.trim()&&(t=r.length)}return t}function W(e){return h||(void 0===e&&(e=s.substring(l)),E.push(e),l=g,q(E),_&&Z()),Q()}function H(e){l=e,q(E),E=[],B=s.indexOf(n,l)}function Q(e){return{data:b,errors:w,meta:{delimiter:r,linebreak:n,aborted:f,truncated:!!e,cursor:C+(d||0)}}}function Z(){o(Q()),b=[],w=[]}},this.abort=function(){f=!0},this.getCharIndex=function(){return l}}function v(e){var t=e.data,r=i[t.workerId],n=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var o={abort:function(){n=!0,m(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(k(r.userStep)){for(var s=0;s<t.results.data.length&&(r.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},o),!n);s++);delete t.results}else k(r.userChunk)&&(r.userChunk(t.results,o,t.file),delete t.results)}t.finished&&!n&&m(t.workerId,t.results)}function m(e,t){var r=i[e];k(r.userComplete)&&r.userComplete(t),r.terminate(),delete i[e]}function y(){throw new Error("Not implemented.")}function _(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=_(e[r]);return t}function b(e,t){return function(){e.apply(t,arguments)}}function k(e){return"function"==typeof e}return n&&(t.onmessage=function(e){var r=e.data;if(void 0===s.WORKER_ID&&r&&(s.WORKER_ID=r.workerId),"string"==typeof r.input)t.postMessage({workerId:s.WORKER_ID,results:s.parse(r.input,r.config),finished:!0});else if(t.File&&r.input instanceof File||r.input instanceof Object){var n=s.parse(r.input,r.config);n&&t.postMessage({workerId:s.WORKER_ID,results:n,finished:!0})}}),(c.prototype=Object.create(u.prototype)).constructor=c,(l.prototype=Object.create(u.prototype)).constructor=l,(f.prototype=Object.create(f.prototype)).constructor=f,(d.prototype=Object.create(u.prototype)).constructor=d,s},void 0===(i="function"==typeof r?r.apply(t,n):r)||(e.exports=i)},1419:(e,t,r)=>{"use strict";r.d(t,{W6:()=>b,ds:()=>C});var n=r(2847),i=r.n(n),o=r(8404),s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function u(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e}function c(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function l(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];return e.some((function(e){return!c(t)&&e&&e.apply(void 0,u([t],r)),c(t)}))}}function f(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}var d=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}};function h(e,t){var r="application/x-moz-file"===e.type||function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?o===t.replace(/\/.*$/,""):i===t}))}return!0}(e,t);return[r,r?null:d(t)]}function p(e){return null!=e}var g=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," bytes")}},v=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," bytes")}},m={code:"too-many-files",message:"Too many files"};function y(e){e.preventDefault()}var _={Link:"link",Button:"button"};function b(){var e;return{CSVDownloader:(e=function(e){var t=e.children,r=e.data,n=void 0===r?{}:r,s=e.filename,a=e.type,u=void 0===a?_.Link:a,c=e.style,l=void 0===c?{}:c,f=e.className,d=void 0===f?"":f,h=e.bom,p=void 0!==h&&h,g=e.config,v=void 0===g?{}:g,m=function(){var e,t,r=p?"\ufeff":"";"function"==typeof n&&(n=n()),e="object"==typeof n?i().unparse(n,v):n;var o=new Blob(["".concat(r).concat(e)],{type:"text/csv;charset=utf-8;"}),a=window.navigator;t=a.msSaveBlob?a.msSaveBlob(o,"".concat(s,".csv")):window.URL.createObjectURL(o);var u=document.createElement("a");u.href=t,u.setAttribute("download","".concat(s,".csv")),u.click(),u.remove()};return o.createElement(o.Fragment,null,u===_.Button?o.createElement("button",{onClick:function(){return m()},style:l,className:d},t):o.createElement("a",{onClick:function(){return m()},style:l,className:d},t))},o.useMemo((function(){return e}),[])),Type:_}}var k={progressBar:{borderRadius:3,boxShadow:"inset 0 1px 3px rgba(0, 0, 0, .2)",bottom:14,width:"100%"},button:{position:"inherit",width:"100%"},fill:{backgroundColor:"#659cef",borderRadius:3,height:10,transition:"width 500ms ease-in-out"}};function w(e){var t=e.style,r=e.className,n=e.display,i=(0,o.useState)(0),s=i[0],a=i[1];return(0,o.useEffect)((function(){a(e.percentage)}),[e.percentage]),o.createElement("span",{style:Object.assign({},k.progressBar,k.fill,t,{width:"".concat(s,"%"),display:n}),className:r})}function E(e){var t=e.color,r=e.width,n=void 0===r?23:r,i=e.height,s=void 0===i?23:i;return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:s,viewBox:"0 0 512 512"},o.createElement("path",{fill:t,d:"M504.1 256C504.1 119 393 7.9 256 7.9S7.9 119 7.9 256 119 504.1 256 504.1 504.1 393 504.1 256z"}),o.createElement("path",{fill:"#FFF",d:"M285 256l72.5-84.2c7.9-9.2 6.9-23-2.3-31-9.2-7.9-23-6.9-30.9 2.3L256 222.4l-68.2-79.2c-7.9-9.2-21.8-10.2-31-2.3-9.2 7.9-10.2 21.8-2.3 31L227 256l-72.5 84.2c-7.9 9.2-6.9 23 2.3 31 4.1 3.6 9.2 5.3 14.3 5.3 6.2 0 12.3-2.6 16.6-7.6l68.2-79.2 68.2 79.2c4.3 5 10.5 7.6 16.6 7.6 5.1 0 10.2-1.7 14.3-5.3 9.2-7.9 10.2-21.8 2.3-31L285 256z"}))}function C(){return{CSVReader:(e=function(e){var t=e.children,r=e.accept,n=void 0===r?"text/csv, .csv, application/vnd.ms-excel":r,d=e.config,_=void 0===d?{}:d,b=e.minSize,k=void 0===b?0:b,C=e.maxSize,S=void 0===C?1/0:C,D=e.maxFiles,x=void 0===D?1:D,F=e.disabled,A=void 0!==F&&F,T=e.noClick,P=void 0!==T&&T,j=e.noDrag,L=void 0!==j&&j,I=e.noDragEventsBubbling,B=void 0!==I&&I,z=e.noKeyboard,M=void 0!==z&&z,U=e.multiple,N=void 0!==U&&U,q=e.required,K=void 0!==q&&q,W=e.preventDropOnDocument,H=void 0===W||W,Q=e.onUploadAccepted,Z=e.validator,$=e.onUploadRejected,J=e.onDragEnter,G=e.onDragOver,V=e.onDragLeave,X=(0,o.useRef)(null),Y=(0,o.useRef)(null),ee=(0,o.useRef)([]),te=(0,o.useReducer)(R,O),re=te[0],ne=te[1],ie=re.acceptedFile,oe=re.displayProgressBar,se=re.progressBarPercentage,ae=re.draggedFiles,ue=re.isFileDialogActive,ce=function(e){Y.current&&Y.current.contains(e.target)||(e.preventDefault(),ee.current=[])};(0,o.useEffect)((function(){return H&&(document.addEventListener("dragover",y,!1),document.addEventListener("drop",ce,!1)),function(){H&&(document.removeEventListener("dragover",y),document.removeEventListener("drop",ce))}}),[Y,H]);var le=function(e){return A?null:e},fe=function(e){return L?null:le(e)},de=function(e){B&&e.stopPropagation()},he=function(e){e.preventDefault(e),e.persist(),de(e)},pe=function(e){ne({displayProgressBar:e,type:"setDisplayProgressBar"})},ge=function(e){ne({progressBarPercentage:e,type:"setProgressBarPercentage"})},ve=(0,o.useCallback)((function(){X.current&&re.displayProgressBar&&(ne({type:"openDialog"}),X.current.value=null,X.current.click())}),[ne]),me=function(){ue&&setTimeout((function(){X.current&&(X.current.files.length||ne({type:"closeDialog"}))}),300)};(0,o.useEffect)((function(){return window.addEventListener("focus",me,!1),function(){window.removeEventListener("focus",me,!1)}}),[X,ue]);var ye=(0,o.useCallback)((function(){var e;P||(void 0===e&&(e=window.navigator.userAgent),function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)?setTimeout(ve,0):ve())}),[X,P]),_e=(0,o.useCallback)((function(e){if(he(e),ge(0),ee.current=[],f(e)){if(c(e)&&!B)return;var t=[],r=[],o=e.target.files||e.dataTransfer&&e.dataTransfer.files;if(Array.from(o).forEach((function(e){var i=h(e,n),o=i[0],s=i[1],a=function(e,t,r){if(p(e.size))if(p(t)&&p(r)){if(e.size>r)return[!1,g(r)];if(e.size<t)return[!1,v(t)]}else{if(p(t)&&e.size<t)return[!1,v(t)];if(p(r)&&e.size>r)return[!1,g(r)]}return[!0,null]}(e,k,S),u=a[0],c=a[1],l=Z?Z(e):null;if(o&&u&&!l)t.push(e);else{var f=[s,c];l&&(f=f.concat(l)),r.push({file:e,errors:f.filter((function(e){return e}))})}})),(!N&&t.length>1||N&&x>=1&&t.length>x)&&(t.forEach((function(e){r.push({file:e,errors:[m]})})),t.splice(0)),ne({acceptedFiles:t,fileRejections:r,type:"setFiles"}),pe("block"),r.length>0&&$&&$(r,e),t.length>0&&Q){var s={},a=[],u=[],l=[],d=new window.FileReader,y=0;t.forEach((function(e){ne({acceptedFile:e,type:"setFile"}),s={complete:(null==_?void 0:_.complete)||(null==_?void 0:_.step)?_.complete:function(){Q({data:a,errors:u,meta:l},e)},step:(null==_?void 0:_.step)?_.step:function(t){if(a.push(t.data),t.errors.length>0&&u.push(t.errors),t.length>0&&l.push(t[0].meta),_&&_.preview)y=Math.round(a.length/_.preview*100),a.length===_.preview&&Q({data:a,errors:u,meta:l},e);else{var r=t.meta.cursor,n=Math.round(r/e.size*100);if(n===y)return;y=n}ge(y)}},s=Object.assign({},_,s),d.onload=function(e){i().parse(e.target.result,s)},d.onloadend=function(){setTimeout((function(){pe("none")}),2e3)},d.readAsText(e,_.encoding||"utf-8")}))}}}),[N,n,k,S,x,Z,Q]),be=(0,o.useCallback)((function(e){de(e)}),[]),ke=function(e){return M?null:le(e)},we=(0,o.useCallback)((function(e){if(he(e),ee.current=u(u([],ee.current),[e.target]),f(e)){if(c(e)&&!B)return;ne({draggedFiles:ae,isDragActive:!0,type:"setDraggedFiles"}),J&&J(e)}}),[J,B]),Ee=(0,o.useCallback)((function(e){he(e);var t=f(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&G&&G(e),!1}),[G,B]),Ce=(0,o.useCallback)((function(e){he(e);var t=ee.current.filter((function(e){return Y.current&&Y.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),ee.current=t,t.length>0||(ne({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),f(e)&&V&&V(e))}),[Y,V,B]),Oe=(0,o.useCallback)((function(e){Y.current&&Y.current.isEqualNode(e.target)&&("Space"!==e.key&&"Enter"!==e.key||(e.preventDefault(),ve()))}),[Y,X]),Re=(0,o.useCallback)((function(){ne({type:"focus"})}),[]),Se=(0,o.useCallback)((function(){ne({type:"blur"})}),[]),De=(0,o.useMemo)((function(){return function(e){void 0===e&&(e={});var t=e.onClick,r=void 0===t?function(){}:t,n=e.onDrop,i=void 0===n?function(){}:n,o=e.onDragOver,u=void 0===o?function(){}:o,c=e.onDragLeave,f=void 0===c?function(){}:c,d=e.onKeyDown,h=void 0===d?function(){}:d,p=e.onFocus,g=void 0===p?function(){}:p,v=e.onBlur,m=void 0===v?function(){}:v,y=e.onDragEnter,_=void 0===y?function(){}:y,b=a(e,["onClick","onDrop","onDragOver","onDragLeave","onKeyDown","onFocus","onBlur","onDragEnter"]);return s({onClick:le(l(r,ye)),onDrop:fe(l(i,_e)),onDragEnter:fe(l(_,we)),onDragOver:fe(l(u,Ee)),onDragLeave:fe(l(f,Ce)),onKeyDown:ke(l(h,Oe)),onFocus:ke(l(g,Re)),onBlur:ke(l(m,Se))},b)}}),[Y,Oe,Re,Se,ye,we,Ee,Ce,_e,M,L,A]),xe=(0,o.useMemo)((function(){return function(e){var t;void 0===e&&(e={});var r=e.refKey,i=void 0===r?"ref":r,o=e.onChange,u=void 0===o?function(){}:o,c=e.onClick,f=void 0===c?function(){}:c,d=a(e,["refKey","onChange","onClick"]),h=((t={accept:n,multiple:N,required:K,type:"file",style:{display:"none"},onChange:le(l(u,_e)),onClick:le(l(f,be)),autoComplete:"off",tabIndex:-1})[i]=X,t);return s(s({},h),d)}}),[X,n,_e,A]),Fe=(0,o.useCallback)((function(e){X.current.value="",ne({type:"reset"}),e.stopPropagation()}),[]),Ae=(0,o.useMemo)((function(){return function(e){void 0===e&&(e={});var t=e.onClick,r=void 0===t?function(){}:t,n=a(e,["onClick"]);return s({onClick:le(l(r,Fe))},n)}}),[Fe]);return o.createElement(o.Fragment,null,o.createElement("input",s({},xe())),t({getRootProps:De,acceptedFile:ie,ProgressBar:function(e){return o.createElement(w,s({display:oe,percentage:se},e))},getRemoveFileProps:Ae,Remove:function(e){return o.createElement(E,s({},e))}}))},(0,o.useMemo)((function(){return e}),[]))};var e}var O={displayProgressBar:"none",progressBarPercentage:0,isDragActive:!1,isFileDialogActive:!1,isFocused:!1,draggedFiles:[],acceptedFiles:[],acceptedFile:null};function R(e,t){switch(t.type){case"openDialog":return s(s({},e),{isFileDialogActive:!0});case"closeDialog":return s(s({},e),{isFileDialogActive:!1});case"setFiles":return s(s({},e),{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"setFile":return s(s({},e),{acceptedFile:t.acceptedFile});case"setDisplayProgressBar":return s(s({},e),{displayProgressBar:t.displayProgressBar});case"setProgressBarPercentage":return s(s({},e),{progressBarPercentage:t.progressBarPercentage});case"setDraggedFiles":var r=t.isDragActive,n=t.draggedFiles;return s(s({},e),{draggedFiles:n,isDragActive:r});case"focus":return s(s({},e),{isFocused:!0});case"blur":return s(s({},e),{isFocused:!1});case"reset":return s({},O);default:return e}}i().BAD_DELIMITERS,i().RECORD_SEP,i().UNIT_SEP,i().WORKERS_SUPPORTED,i().LocalChunkSize,i().DefaultDelimiter},5141:(e,t,r)=>{"use strict";r.d(t,{CR:()=>n});Object.create;function n(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)s.push(n.value)}catch(a){i={error:a}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return s}Object.create}}]);