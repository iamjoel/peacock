"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[272],{638:(r,n,t)=>{t.d(n,{c:()=>o});var e=t(6088),u=t(6844);const c=function(r,n){void 0===r&&(r=!1);var t=(0,e.o5)((0,u.useState)(r),2),c=t[0],o=t[1];return[c,(0,u.useMemo)((function(){var t=void 0===n?!r:n;return{toggle:function(){return o((function(n){return n===r?t:r}))},set:function(r){return o(r)},setLeft:function(){return o(r)},setRight:function(){return o(t)}}}),[])]};function o(r){void 0===r&&(r=!1);var n=(0,e.o5)(c(!!r),2),t=n[0],o=n[1],i=o.toggle,f=o.set;return[t,(0,u.useMemo)((function(){return{toggle:i,set:function(r){return f(!!r)},setTrue:function(){return f(!0)},setFalse:function(){return f(!1)}}}),[])]}},1664:(r,n,t)=>{t.d(n,{c:()=>u});var e=t(6844);const u=function(r){var n=(0,e.useRef)(r);return n.current=r,n}},7600:(r,n,t)=>{t.d(n,{O:()=>c});var e=t(9796),u=t(4876);function c(r,n){if(u.c)return r?(0,e.mg)(r)?r():"current"in r?r.current:r:n}},9796:(r,n,t)=>{t.d(n,{UM:()=>u,mg:()=>e});var e=function(r){return"function"==typeof r},u=function(r){return void 0===r}},4876:(r,n,t)=>{t.d(n,{c:()=>e});const e=!("undefined"==typeof window||!window.document||!window.document.createElement)},7848:(r,n,t)=>{t.d(n,{c:()=>e});const e=!1},6136:(r,n,t)=>{t.d(n,{c:()=>s});var e=t(6844),u=t(1664),c=t(9796),o=t(7848);const i=function(r){o.c&&((0,c.mg)(r)||console.error("useUnmount expected parameter is a function, got ".concat(typeof r)));var n=(0,u.c)(r);(0,e.useEffect)((function(){return function(){n.current()}}),[])};function f(r,n){if(r===n)return!0;for(var t=0;t<r.length;t++)if(!Object.is(r[t],n[t]))return!1;return!0}var a=t(7600);const s=function(r){return function(n,t,u){var c=(0,e.useRef)(!1),o=(0,e.useRef)([]),s=(0,e.useRef)([]),l=(0,e.useRef)();r((function(){var r,e=(Array.isArray(u)?u:[u]).map((function(r){return(0,a.O)(r)}));if(!c.current)return c.current=!0,o.current=e,s.current=t,void(l.current=n());e.length===o.current.length&&f(e,o.current)&&f(t,s.current)||(null===(r=l.current)||void 0===r||r.call(l),o.current=e,s.current=t,l.current=n())})),i((function(){var r;null===(r=l.current)||void 0===r||r.call(l),c.current=!1}))}}(e.useEffect)},3656:(r,n,t)=>{t.d(n,{c:()=>c});var e=t(6844),u=t(9176);function c(r){let{children:n,fallback:t}=r;return(0,u.c)()?e.createElement(e.Fragment,null,n?.()):t??null}},6088:(r,n,t)=>{t.d(n,{o5:()=>e});Object.create;function e(r,n){var t="function"==typeof Symbol&&r[Symbol.iterator];if(!t)return r;var e,u,c=t.call(r),o=[];try{for(;(void 0===n||n-- >0)&&!(e=c.next()).done;)o.push(e.value)}catch(i){u={error:i}}finally{try{e&&!e.done&&(t=c.return)&&t.call(c)}finally{if(u)throw u.error}}return o}Object.create;"function"==typeof SuppressedError&&SuppressedError}}]);