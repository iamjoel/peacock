"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3540],{3540:(e,t,o)=>{o.d(t,{C:()=>E,Z:()=>D});var n=o(8404),i=o(9880),r=o(7724),s=o(6664),l=o(4505),u=o(8017),p=o(4224),a=o(670);const c=function(e){var t,o=e.getContainer,r=e.children,s=(0,n.useRef)();return!(t=(0,n.useRef)(!0),(0,n.useEffect)((function(){t.current=!1}),[]),t.current)&&null!==s.current||l.ET||(s.current=o()),(0,n.useEffect)((function(){return function(){var e=s.current;e&&e.parentNode&&(e.parentNode.removeChild(e),s.current=null)}}),[]),s.current?i.createPortal(r,s.current):null};var f=o(199),d=o(9531),h=o(4676),g=function(){return g=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},g.apply(this,arguments)};var m=function(e,t,o){return o<e?e:o>t?t:o};const v=function(e,t,o,n,i){var r=e.autoAlignPopupWidth,s=e.autoAlignPopupMinWidth,p=e.alignPoint,a=e.style;if(!o||!t||!n)return{};var c={},f=function(e,t){return t?{left:t.clientX,top:t.clientY,width:0,height:0,right:t.clientX,bottom:t.clientY}:e.getBoundingClientRect()}(o,p&&i),d=function(e,t,o){if(!o||!e||l.ET)return{left:0,width:0,height:0,top:0};var n=function(e){return document.documentElement[e]||document.body[e]},i=o===document.body?n("scrollTop"):o.scrollTop,r=o===document.body?n("scrollLeft"):o.scrollLeft,s=t.left,u=t.top,p=t.width,a=t.height;return{left:s+r-(o===document.body?0:o.getBoundingClientRect().left),top:u+i-(o===document.body?0:o.getBoundingClientRect().top),width:p,height:a}}(o,f,n),h=d.left,v=d.top,b=d.width,y=d.height,P=function(e,t){var o=0,n=0,i={};for(var r in i=g(t?{left:12,right:12,top:12,bottom:12}:{},e))if((0,u.kJ)(i[r])){var s=0;["top","bottom"].indexOf(r)>-1?(s=1,o=i[r][0]):n=i[r][1],i[r]=i[r][s]}return g(g({},i),{horizontalOffset:o,verticalOffset:n})}(e.popupAlign,e.showArrow),w=P.left||0,M=P.right||0,T=P.top||0,C=P.bottom||0;r&&void 0===(null==a?void 0:a.width)&&(t.style.width=o.offsetWidth+"px"),s&&(t.style.minWidth=o.offsetWidth+"px");var E=function(e){return{width:e.offsetWidth,height:e.offsetHeight}}(t),O=e.position,x={},D=function(t){var o,i;if(e.autoFitPosition){var r=(null===(o=document.documentElement)||void 0===o?void 0:o.clientHeight)||window.innerHeight,s=(null===(i=document.documentElement)||void 0===i?void 0:i.clientWidth)||window.innerWidth,l=!1,u={left:h-f.left,top:v-f.top},p=c.top,a=void 0===p?0:p,d=c.left,g=void 0===d?0:d;if("top"!==t&&"bottom"!==t||(u.left>g&&f.right>12?(c.left=Math.max(u.left,h-E.width),c.left=Math.max(c.left,h-E.width+24)):g-u.left+E.width>s&&s-f.left>12&&(c.left=Math.max(u.left,u.left+s-E.width),c.left=Math.max(c.left,h-E.width+24))),"left"!==t&&"right"!==t||(u.top>a&&f.bottom>12?(c.top=u.top,c.top=Math.max(c.top,v-E.height+f.height/2)):a-u.top+E.height>r&&r-f.top>12&&(c.top=Math.max(u.top,u.top+r-E.height),c.top=Math.max(c.top,v-E.height+f.height/2))),"top"===t&&u.top>a&&(f.top<r-f.bottom?(c.top=Math.min(v+y+(T||0),u.top+r-E.height),l=!0):c.top=u.top),"bottom"===t&&a-u.top+E.height>r&&(r-f.bottom<f.top?(c.top=Math.max(v-E.height-(C||0),u.top),l=!0):c.top=u.top+r-E.height),"left"===t&&u.left>g&&(f.left<s-f.right?(c.left=Math.min(b+h+M,u.left+s-E.width),l=!0):c.left=u.left),"right"===t&&g-u.left+E.width>s&&(s-f.right<f.left?(c.left=Math.max(h-E.width-w,u.left),l=!0):c.left=u.left+s-E.width),c.left<0)c.left=0;else{var m=n.scrollWidth-E.width;c.left=Math.min(m,c.left)}return l}},k=P.horizontalOffset||0,S=P.verticalOffset||0;switch(e.position){case"top":c.top=v-E.height-T,c.left=h+b/2-E.width/2,D("top")&&(O="bottom"),c.left+=k;var N=h-Number(c.left)+b/2;x.left=m(12,E.width-12,N);break;case"tl":c.top=v-E.height-T,c.left=h,D("top")&&(O="bl"),c.left+=k;var V=h-Number(c.left)+Math.min(b/2,50);x.left=m(12,E.width-12,V);break;case"tr":c.top=-t.clientHeight+v-T,c.left=h+b-E.width,D("top")&&(O="br"),c.left+=k,V=h-Number(c.left)+Math.max(b/2,b-50),x.left=m(12,E.width-12,V);break;case"bottom":c.top=y+v+C,c.left=h+b/2-E.width/2,D("bottom")&&(O="top"),c.left+=k;var R=h-Number(c.left)+b/2;x.left=m(12,E.width-12,R);break;case"bl":c.top=y+v+C,c.left=h,D("bottom")&&(O="tl"),c.left+=k,V=h-Number(c.left)+Math.min(b/2,50),x.left=m(12,E.width-12,V);break;case"br":c.top=y+v+C,c.left=h+b-E.width,D("bottom")&&(O="tr"),c.left+=k,V=h-Number(c.left)+Math.max(b/2,b-50),x.left=m(12,E.width-12,V);break;case"left":c.top=v+y/2-E.height/2,c.left=h-E.width-w,D("left")&&(O="right"),c.top+=S;var H=v-Number(c.top)+y/2;x.top=m(12,E.height-12,H);break;case"lt":c.top=v,c.left=h-E.width-w,D("left")&&(O="rt"),c.top+=S;var z=v-Number(c.top)+Math.min(y/2,50);x.top=m(12,E.height-12,z);break;case"lb":c.top=v+y-E.height,c.left=h-E.width-w,D("left")&&(O="rb"),c.top+=S,z=v-Number(c.top)+Math.max(y/2,y-50),x.top=m(12,E.height-12,z);break;case"right":c.top=v+y/2-E.height/2,c.left=b+h+M,D("right")&&(O="left"),c.top+=S;var L=v-Number(c.top)+y/2;x.top=m(12,E.height-12,L);break;case"rt":c.top=v,c.left=b+h+M,D("right")&&(O="lt"),c.top+=S,z=v-Number(c.top)+Math.min(y/2,50),x.top=m(12,E.height-12,z);break;case"rb":c.top=v+y-E.height,c.left=b+h+M,D("right")&&(O="lb"),c.top+=S,z=v-Number(c.top)+Math.max(y/2,y-50),x.top=m(12,E.height-12,z)}return{style:c,arrowStyle:x,realPosition:O}};var b=o(4137),y=o(7782),P=function(){return P=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},P.apply(this,arguments)};var w,M=(w=function(e,t){return w=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},w(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}w(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),T=function(){return T=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},T.apply(this,arguments)};function C(e){if(!e)return{};var t=e.getBoundingClientRect();return{width:t.width,height:t.height,left:t.left,right:t.right}}var E=["onClick","onMouseEnter","onMouseLeave","onMouseMove","onFocus","onBlur","onContextMenu","onKeyDown"];var O={blurToHide:!0,classNames:"fadeIn",trigger:"hover",position:"bottom",duration:200,unmountOnExit:!0,popupAlign:{},popupHoverStay:!0,clickOutsideToClose:!0,escToClose:!1,mouseLeaveToClose:!0,containerScrollToClose:!1,getDocument:function(){return window.document},autoFixPosition:!0,mouseEnterDelay:100,mouseLeaveDelay:100,autoFitPosition:!0},x=function(e){function t(t,o){var r=e.call(this,t,o)||this;r.delayTimer=null,r.updatePositionTimer=null,r.popupOpen=!1,r.mousedownToHide=!1,r.hasPopupMouseDown=!1,r.unmount=!1,r.isDidMount=!1,r.mouseLocation={clientX:0,clientY:0},r.observerContainer=null,r.scrollElements=null,r.resizeObserver=new s.Z((function(){r.handleUpdatePosition()})),r.childrenDom=null,r.childrenDomSize={},r.getMergedProps=function(e){var t=r.context.componentConfig,o=function(e,t,o){var n=P(P({},t),o),i=P({},e);for(var r in n)void 0===i[r]&&(i[r]=n[r]);return i}(e||r.props,O,null==t?void 0:t.Trigger);return o},r.getRootElement=function(){return r.childrenDom=(0,i.findDOMNode)(r),r.childrenDom},r.offScrollListeners=function(){(r.scrollElements||[]).forEach((function(e){(0,l.S1)(e,"scroll",r.handleScroll)})),r.scrollElements=null},r.offWindowResize=function(){r.handleWindowResize=!1,(0,l.S1)(window,"resize",r.handleUpdatePosition)},r.offContainerResize=function(){r.resizeObserver&&r.observerContainer&&(r.resizeObserver.unobserve(r.observerContainer),r.observerContainer=null)},r.handleScroll=function(){var e=r.getMergedProps();e.containerScrollToClose?r.setPopupVisible(!1):e.updateOnScroll&&r.handleUpdatePosition()},r.onContainersScroll=function(e){var t,o;r.scrollElements||(r.scrollElements=(0,l.IF)(r.childrenDom,null===(t=r.popupContainer)||void 0===t?void 0:t.parentNode),e.containerScrollToClose&&(null===(o=r.popupContainer)||void 0===o?void 0:o.parentNode)===document.body&&-1===r.scrollElements.indexOf(document.body)&&(0,l.Ib)(document.documentElement)&&r.scrollElements.push(window),r.scrollElements.forEach((function(e){(0,l.on)(e,"scroll",r.handleScroll)})))},r.onContainerResize=function(){var e,t=null===(e=r.popupContainer)||void 0===e?void 0:e.parentNode;r.resizeObserver&&r.observerContainer!==t&&(r.offContainerResize(),t&&r.resizeObserver.observe(t),r.observerContainer=t)},r.handleUpdatePosition=(0,b.Z)((function(){r.updatePopupPosition()})),r.isClickTrigger=function(){var e=r.getMergedProps().trigger;return[].concat(e).indexOf("click")>-1},r.isFocusTrigger=function(){var e=r.getMergedProps().trigger;return[].concat(e).indexOf("focus")>-1},r.isHoverTrigger=function(){var e=r.getMergedProps().trigger;return[].concat(e).indexOf("hover")>-1},r.isContextMenuTrigger=function(){var e=r.getMergedProps().trigger;return[].concat(e).indexOf("contextMenu")>-1},r.isMouseLeaveToClose=function(){return r.isHoverTrigger()&&r.getMergedProps().mouseLeaveToClose},r.isPopupHoverHide=function(){return r.isHoverTrigger()&&!r.getMergedProps().popupHoverStay},r.isClickToHide=function(){if(r.isClickTrigger()||r.isContextMenuTrigger()){var e=r.getMergedProps().clickToClose;return void 0===e||e}return r.isHoverTrigger()&&r.props.clickToClose},r.isBlurToHide=function(){return r.isFocusTrigger()&&r.getMergedProps().blurToHide},r.clearTimer=function(){r.updatePositionTimer&&(r.updatePositionTimer.cancel?r.updatePositionTimer.cancel():(clearTimeout(r.updatePositionTimer),r.updatePositionTimer=null)),r.delayTimer&&(clearTimeout(r.delayTimer),r.delayTimer=null),r.mouseDownTimeout&&(clearTimeout(r.mouseDownTimeout),r.mouseDownTimeout=null)},r.offClickOutside=function(){if(r.handleClickOutside){var e=r.getMergedProps().getDocument,t=(0,u.mf)(e)&&e();(0,l.S1)(t,"mousedown",r.onClickOutside),r.handleClickOutside=!1}},r.getTransformOrigin=function(e){var t,o,n=r.triggerRef;if(!n)return{};var i=r.getMergedProps(),s=i.showArrow,l=i.classNames,u=s&&(null===(t=r.arrowStyle)||void 0===t?void 0:t.top)||0,p=s&&(null===(o=r.arrowStyle)||void 0===o?void 0:o.left)||0;u=u?u+"px":"";var a={top:((p=p?p+"px":"")||"50%")+" 100% 0",tl:(p||"15px")+" 100% 0",tr:(p||n.clientWidth-15+"px")+" 100% 0",bottom:(p||"50%")+" 0 0",bl:(p||"15px")+" 0 0",br:(p||n.clientWidth-15+"px")+" 0 0",left:"100% "+(u||"50%")+" 0",lt:"100% "+(u||"15px")+" 0",lb:"100% "+(u||n.clientHeight-15+"px")+" 0",right:"0 "+(u||"50%")+" 0",rt:"0 "+(u||"15px")+" 0",rb:"0 "+(u||n.clientHeight-15+"px")+" 0"};if(l&&l.indexOf("zoom")>-1)return{transformOrigin:a[e]};if("slideDynamicOrigin"===l){var c="0% 0%";return["top","tl","tr"].indexOf(e)>-1&&(c="100% 100%"),{transformOrigin:c}}return{}},r.getTransformTranslate=function(){if("slideDynamicOrigin"!==r.getMergedProps().classNames)return"";switch(r.realPosition){case"bottom":case"bl":case"br":return"scaleY(0.9) translateY(-4px)";case"top":case"tl":case"tr":return"scaleY(0.9) translateY(4px)";default:return""}},r.getPopupStyle=function(){if(!r.unmount&&r.popupContainer){var e=r.popupContainer,t=r.triggerRef,o=r.getRootElement();if(!o.offsetParent&&!o.getClientRects().length)return r.state.popupStyle;var n=v(r.getMergedProps(),t,o,e,r.mouseLocation),i=n.style,s=n.arrowStyle,l=n.realPosition;return r.realPosition=l||r.getMergedProps().position,r.arrowStyle=s||{},T(T({},i),r.getTransformOrigin(r.realPosition))}},r.showPopup=function(e){void 0===e&&(e=function(){});var t=r.getPopupStyle();r.setState({popupStyle:t},e)},r.update=(0,b.Z)((function(e){if(!r.unmount&&r.state.popupVisible){var t=r.getPopupStyle();r.setState({popupStyle:t},(function(){e&&e()}))}})),r.updatePopupPosition=function(e,t){void 0===e&&(e=0),r.state.popupVisible&&(r.updatePositionTimer=e<4?r.update(t):setTimeout((function(){var e=r.getPopupStyle();r.setState({popupStyle:e},(function(){t&&t()}))}),e))},r.setPopupVisible=function(e,t,o){void 0===t&&(t=0);var n=r.getMergedProps(),i=n.onVisibleChange,s=r.state.popupVisible;e!==s?r.delayToDo(t,(function(){i&&i(e),"popupVisible"in n?o&&o():e?r.setState({popupVisible:!0},(function(){r.showPopup(o)})):r.setState({popupVisible:!1},(function(){o&&o()}))})):o&&o()},r.delayToDo=function(e,t){e?(r.clearDelayTimer(),r.delayTimer=setTimeout((function(){t(),r.clearDelayTimer()}),e)):t()},r.onClickOutside=function(e){var t=r.getMergedProps(),o=t.onClickOutside,n=t.clickOutsideToClose,i=r.triggerRef,s=r.getRootElement();(0,l.r3)(i,e.target)||(0,l.r3)(s,e.target)||r.hasPopupMouseDown||(o&&o(),n&&(r.isBlurToHide()||r.isHoverTrigger()||r.setPopupVisible(!1)))},r.onKeyDown=function(e){var t=e.keyCode||e.which;r.triggerPropsEvent("onKeyDown",e),t===a.AV.code&&r.onPressEsc(e)},r.onPressEsc=function(e){r.getMergedProps().escToClose&&e&&e.key===a.AV.key&&r.state.popupVisible&&r.setPopupVisible(!1)},r.onMouseEnter=function(e){var t=r.getMergedProps().mouseEnterDelay;r.triggerPropsEvent("onMouseEnter",e),r.clearDelayTimer(),r.setPopupVisible(!0,t||0)},r.onMouseMove=function(e){r.triggerPropsEvent("onMouseMove",e),r.setMouseLocation(e),r.state.popupVisible&&r.update()},r.onMouseLeave=function(e){var t=r.getMergedProps().mouseLeaveDelay;r.clearDelayTimer(),r.triggerPropsEvent("onMouseLeave",e),r.isMouseLeaveToClose()&&r.state.popupVisible&&r.setPopupVisible(!1,t||0)},r.onPopupMouseEnter=function(){r.clearDelayTimer()},r.onPopupMouseLeave=function(e){r.onMouseLeave(e)},r.setMouseLocation=function(e){r.getMergedProps().alignPoint&&(r.mouseLocation={clientX:e.clientX,clientY:e.clientY})},r.onContextMenu=function(e){e.preventDefault(),r.triggerPropsEvent("onContextMenu",e),r.setMouseLocation(e),r.state.popupVisible?r.getMergedProps().alignPoint&&r.update():r.setPopupVisible(!0,0)},r.clickToHidePopup=function(e){var t=r.state.popupVisible;t&&(r.mousedownToHide=!0),r.triggerPropsEvent("onClick",e),r.isClickToHide()&&t&&r.setPopupVisible(!t,0)},r.onClick=function(e){var t=r.state.popupVisible;t&&(r.mousedownToHide=!0),r.triggerPropsEvent("onClick",e),r.setMouseLocation(e),!r.isClickToHide()&&t||r.setPopupVisible(!t,0)},r.onFocus=function(e){var t=r.getMergedProps().focusDelay,o=function(){r.triggerPropsEvent("onFocus",e)};r.clearDelayTimer(),r.mousedownToHide||(r.state.popupVisible?o&&o():r.setPopupVisible(!0,t||0,o)),r.mousedownToHide=!1},r.onBlur=function(e){r.setPopupVisible(!1,200,(function(){return r.triggerPropsEvent("onBlur",e)}))},r.onResize=function(){r.getMergedProps().autoFixPosition&&r.state.popupVisible&&r.updatePopupPosition()},r.onPopupMouseDown=function(){r.hasPopupMouseDown=!0,clearTimeout(r.mouseDownTimeout),r.mouseDownTimeout=setTimeout((function(){r.hasPopupMouseDown=!1}),0)},r.getChild=function(){var e,t=r.props.children,o=t,i=o&&"string"!=typeof o&&o.type,s=t;if(["string","number"].indexOf(typeof t)>-1||n.Children.count(t)>1)s=n.createElement("span",null,t);else if(o&&i&&(!0===i.__BYTE_BUTTON||!0===i.__BYTE_CHECKBOX||!0===i.__BYTE_SWITCH||!0===i.__BYTE_RADIO||"button"===i)&&o.props.disabled){var l=function(e,t){var o={},n=T({},e);return t.forEach((function(t){e&&t in e&&(o[t]=e[t],delete n[t])})),{picked:o,omitted:n}}(o.props.style,["position","left","right","top","bottom","float","display","zIndex"]),u=l.picked,p=l.omitted;s=n.createElement("span",{className:null===(e=o.props)||void 0===e?void 0:e.className,style:T(T({display:"inline-block"},u),{cursor:"not-allowed"})},n.cloneElement(o,{style:T(T({},p),{pointerEvents:"none"}),className:void 0}))}return s||n.createElement("span",null)},r.appendToContainer=function(e){if((0,y.N)(r.rafId),r.isDidMount){var t=r.context.getPopupContainer,o=(r.getMergedProps().getPopupContainer||t)(r.getRootElement());if(o)return void o.appendChild(e)}r.rafId=(0,y.W)((function(){r.appendToContainer(e)}))},r.getContainer=function(){var e=document.createElement("div");return e.style.width="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",r.popupContainer=e,r.appendToContainer(e),e},r.triggerPropsEvent=function(e,t){var o=r.getChild(),n=o&&o.props&&o.props[e],i=r.getMergedProps();(0,u.mf)(n)&&n(t),(0,u.mf)(i[e])&&i[e](t)},r.triggerOriginEvent=function(e){var t=r.getChild(),o=t&&t.props&&t.props[e],n=r.getMergedProps()[e];return(0,u.mf)(n)&&(0,u.mf)(o)?function(e){o(e),n(e)}:o||n};var p=r.getMergedProps(t),c="popupVisible"in p?p.popupVisible:p.defaultPopupVisible;return r.popupOpen=!!c,r.state={popupVisible:!!c,popupStyle:{}},r}return M(t,e),t.getDerivedStateFromProps=function(e,t){return"popupVisible"in e&&e.popupVisible!==t.popupVisible?{popupVisible:e.popupVisible}:null},t.prototype.componentDidMount=function(){this.componentDidUpdate(this.getMergedProps()),this.isDidMount=!0,this.unmount=!1,this.childrenDom=this.getRootElement(),this.state.popupVisible&&(this.childrenDomSize=C(this.childrenDom))},t.prototype.componentDidUpdate=function(e){var t=this.getMergedProps(e),o=this.getMergedProps();!t.popupVisible&&o.popupVisible&&this.update();var n=this.state.popupVisible;this.popupOpen=n;var i=o.getDocument;if(!n)return this.offClickOutside(),this.offContainerResize(),this.offWindowResize(),void this.offScrollListeners();var r=C(this.childrenDom);if(JSON.stringify(r)!==JSON.stringify(this.childrenDomSize)&&(this.updatePopupPosition(),this.childrenDomSize=r),this.onContainerResize(),(o.updateOnScroll||o.containerScrollToClose)&&this.onContainersScroll(o),this.handleWindowResize||((0,l.on)(window,"resize",this.handleUpdatePosition),this.handleWindowResize=!0),!this.handleClickOutside){var s=(0,u.mf)(i)&&i();s&&((0,l.on)(s,"mousedown",this.onClickOutside),this.handleClickOutside=!0)}},t.prototype.componentWillUnmount=function(){this.unmount=!0,this.offClickOutside(),this.clearTimer(),this.offWindowResize(),this.offScrollListeners(),this.offContainerResize(),(0,y.N)(this.rafId)},t.prototype.clearDelayTimer=function(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)},t.prototype.render=function(){var e,t,o,i,s=this,l=this.getMergedProps(),u=l.children,a=l.style,h=l.className,g=l.arrowProps,m=l.disabled,v=l.popup,b=l.classNames,y=l.duration,P=l.unmountOnExit,w=l.alignPoint,M=l.autoAlignPopupWidth,C=l.position,E=l.childrenPrefix,O=l.showArrow,x=l.popupStyle,D=l.__onExit,k=l.__onExited,S=u||0===u,N=this.context,V=N.getPrefixCls,R=N.zIndex,H=N.rtl,z=this.state,L=z.popupVisible,_=z.popupStyle;if(!v)return null;var F={},W={onMouseDown:this.onPopupMouseDown};this.isHoverTrigger()&&!m?(F.onMouseEnter=this.onMouseEnter,F.onMouseLeave=this.onMouseLeave,this.isClickToHide()&&(F.onClick=this.clickToHidePopup),w&&(F.onMouseMove=this.onMouseMove),this.isPopupHoverHide()||(W.onMouseEnter=this.onPopupMouseEnter,W.onMouseLeave=this.onPopupMouseLeave)):(F.onMouseEnter=this.triggerOriginEvent("onMouseEnter"),F.onMouseLeave=this.triggerOriginEvent("onMouseLeave")),this.isContextMenuTrigger()&&!m?(F.onContextMenu=this.onContextMenu,F.onClick=this.clickToHidePopup):F.onContextMenu=this.triggerOriginEvent("onContextMenu"),this.isClickTrigger()&&!m?F.onClick=this.onClick:F.onClick=F.onClick||this.triggerOriginEvent("onClick"),this.isFocusTrigger()&&!m?(F.onFocus=this.onFocus,this.isBlurToHide()&&(F.onBlur=this.onBlur)):(F.onFocus=this.triggerOriginEvent("onFocus"),F.onBlur=this.triggerOriginEvent("onBlur")),F.onKeyDown=m?this.triggerOriginEvent("onKeyDown"):this.onKeyDown;var B=this.getChild(),A=n.Children.only(v());B.props.className&&(F.className=B.props.className),E&&L&&(F.className=F.className?F.className+" "+E+"-open":E+"-open"),this.isFocusTrigger()&&(F.tabIndex=m?-1:0);var Y=V("trigger"),I=(0,d.Z)(Y,E,Y+"-position-"+C,((e={})[Y+"-rtl"]=H,e),h),Z=S&&n.createElement(f.Z,{onResize:this.onResize},n.cloneElement(B,T({},F))),j=n.createElement(r.Z,{in:!!L,timeout:y,classNames:b,unmountOnExit:P,appear:!0,mountOnEnter:!0,onEnter:function(e){e.style.display="initial",e.style.pointerEvents="none","slideDynamicOrigin"===b&&(e.style.transform=s.getTransformTranslate())},onEntering:function(e){"slideDynamicOrigin"===b&&(e.style.transform="")},onEntered:function(e){e.style.pointerEvents="auto",s.forceUpdate()},onExit:function(e){e.style.pointerEvents="none",null==D||D(e)},onExited:function(e){e.style.display="none",P&&(s.triggerRef=null),s.setState({popupStyle:{}}),null==k||k(e)}},n.createElement(f.Z,{onResize:function(){var e=s.triggerRef;if(e){var t=s.getPopupStyle(),o=s.props.style||{};e.style.top=String(o.top||t.top+"px"),e.style.left=String(o.left||t.left+"px")}s.onResize()}},n.createElement("span",T({ref:function(e){return s.triggerRef=e},"trigger-placement":this.realPosition,style:T(T(T({width:M&&void 0===(null==a?void 0:a.width)?null===(i=this.childrenDomSize)||void 0===i?void 0:i.width:""},_),{position:"absolute",zIndex:R||""}),a)},W,{className:I},(0,p.m)(this.props)),n.createElement(A.type,T({ref:A.ref},A.props,{style:T(T({},A.props.style),x)})),(O||g)&&n.createElement("div",{className:(0,d.Z)(Y+"-arrow-container",(t={},t[E+"-arrow-container"]=E,t))},n.createElement("div",T({},g,{className:(0,d.Z)(Y+"-arrow",(o={},o[E+"-arrow"]=E,o),null==g?void 0:g.className),style:T(T({},this.arrowStyle),null==g?void 0:g.style)})))))),U=L||this.triggerRef?n.createElement(c,{getContainer:this.getContainer},j):null;return S?n.createElement(n.Fragment,null,Z,U):U},t.displayName="Trigger",t.contextType=h.E_,t}(n.PureComponent);const D=x},4224:(e,t,o)=>{function n(e,t){var o={};return t.forEach((function(t){var n=t;t in e&&(o[n]=e[n])})),o}function i(e){var t={};return e&&Object.keys(e).forEach((function(o){var n=String(o);0===n.indexOf("data-")&&(t[n]=e[n]),0===n.indexOf("aria-")&&(t[n]=e[n])})),t}o.d(t,{Z:()=>n,m:()=>i})},7782:(e,t,o)=>{o.d(t,{N:()=>r,W:()=>i});var n="undefined"==typeof window?o.g:window,i=n.requestAnimationFrame,r=n.cancelAnimationFrame;if(!(i&&r||(["webkit","ms","moz","o"].some((function(e){return i=n[e+"RequestAnimationFrame"],r=n[e+"CancelAnimationFrame"]||n[e+"CancelRequestAnimationFrame"],i&&r})),i&&r))){var s=0;i=function(e){var t=Date.now(),o=Math.max(0,16-(t-s));return setTimeout((function(){e(),s=t+o}),o)},r=function(e){clearTimeout(e)}}i=i.bind(n),r=r.bind(n)},4137:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(7782),i=function(e,t){var o="function"==typeof Symbol&&e[Symbol.iterator];if(!o)return e;var n,i,r=o.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=r.next()).done;)s.push(n.value)}catch(l){i={error:l}}finally{try{n&&!n.done&&(o=r.return)&&o.call(r)}finally{if(i)throw i.error}}return s},r=function(e,t,o){if(o||2===arguments.length)for(var n,i=0,r=t.length;i<r;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))};function s(e){var t=null,o=function(){for(var o=[],s=0;s<arguments.length;s++)o[s]=arguments[s];t&&(0,n.N)(t),t=(0,n.W)((function(){e.apply(void 0,r([],i(o),!1)),t=null}))};return o.cancel=function(){(0,n.N)(t),t=null},o}}}]);