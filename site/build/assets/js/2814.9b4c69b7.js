"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2814],{638:(r,n,t)=>{t.d(n,{c:()=>o});var e=t(6088),u=t(6844);const c=function(r,n){void 0===r&&(r=!1);var t=(0,e.o5)((0,u.useState)(r),2),c=t[0],o=t[1];return[c,(0,u.useMemo)((function(){var t=void 0===n?!r:n;return{toggle:function(){return o((function(n){return n===r?t:r}))},set:function(r){return o(r)},setLeft:function(){return o(r)},setRight:function(){return o(t)}}}),[])]};function o(r){void 0===r&&(r=!1);var n=(0,e.o5)(c(!!r),2),t=n[0],o=n[1],f=o.toggle,i=o.set;return[t,(0,u.useMemo)((function(){return{toggle:f,set:function(r){return i(!!r)},setTrue:function(){return i(!0)},setFalse:function(){return i(!1)}}}),[])]}},1664:(r,n,t)=>{t.d(n,{c:()=>u});var e=t(6844);const u=function(r){var n=(0,e.useRef)(r);return n.current=r,n}},8312:(r,n,t)=>{t.d(n,{O:()=>c});var e=t(9796);const u=!("undefined"==typeof window||!window.document||!window.document.createElement);function c(r,n){if(u)return r?(0,e.mg)(r)?r():"current"in r?r.current:r:n}},9796:(r,n,t)=>{t.d(n,{mg:()=>e});var e=function(r){return"function"==typeof r}},2536:(r,n,t)=>{t.d(n,{c:()=>i});var e=t(6844),u=t(1664);t(9796);const c=function(r){var n=(0,u.c)(r);(0,e.useEffect)((function(){return function(){n.current()}}),[])};function o(r,n){if(r===n)return!0;for(var t=0;t<r.length;t++)if(!Object.is(r[t],n[t]))return!1;return!0}var f=t(8312);const i=function(r){return function(n,t,u){var i=(0,e.useRef)(!1),s=(0,e.useRef)([]),a=(0,e.useRef)([]),l=(0,e.useRef)();r((function(){var r,e=(Array.isArray(u)?u:[u]).map((function(r){return(0,f.O)(r)}));if(!i.current)return i.current=!0,s.current=e,a.current=t,void(l.current=n());e.length===s.current.length&&o(e,s.current)&&o(t,a.current)||(null===(r=l.current)||void 0===r||r.call(l),s.current=e,a.current=t,l.current=n())})),c((function(){var r;null===(r=l.current)||void 0===r||r.call(l),i.current=!1}))}}(e.useEffect)},6088:(r,n,t)=>{t.d(n,{o5:()=>e});Object.create;function e(r,n){var t="function"==typeof Symbol&&r[Symbol.iterator];if(!t)return r;var e,u,c=t.call(r),o=[];try{for(;(void 0===n||n-- >0)&&!(e=c.next()).done;)o.push(e.value)}catch(f){u={error:f}}finally{try{e&&!e.done&&(t=c.return)&&t.call(c)}finally{if(u)throw u.error}}return o}Object.create;"function"==typeof SuppressedError&&SuppressedError}}]);