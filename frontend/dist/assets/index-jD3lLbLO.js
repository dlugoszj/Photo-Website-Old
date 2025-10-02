function DT(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const a=Object.getOwnPropertyDescriptor(i,o);a&&Object.defineProperty(n,o,a.get?a:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function Qf(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Wd={exports:{}},qa={},qd={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hy;function bT(){if(hy)return Ce;hy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function I(P){return P===null||typeof P!="object"?null:(P=w&&P[w]||P["@@iterator"],typeof P=="function"?P:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,z={};function L(P,q,le){this.props=P,this.context=q,this.refs=z,this.updater=le||D}L.prototype.isReactComponent={},L.prototype.setState=function(P,q){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,q,"setState")},L.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function Z(){}Z.prototype=L.prototype;function ee(P,q,le){this.props=P,this.context=q,this.refs=z,this.updater=le||D}var K=ee.prototype=new Z;K.constructor=ee,B(K,L.prototype),K.isPureReactComponent=!0;var ne=Array.isArray,_e=Object.prototype.hasOwnProperty,de={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function S(P,q,le){var ve,Re={},Le=null,De=null;if(q!=null)for(ve in q.ref!==void 0&&(De=q.ref),q.key!==void 0&&(Le=""+q.key),q)_e.call(q,ve)&&!N.hasOwnProperty(ve)&&(Re[ve]=q[ve]);var Ve=arguments.length-2;if(Ve===1)Re.children=le;else if(1<Ve){for(var Me=Array(Ve),bt=0;bt<Ve;bt++)Me[bt]=arguments[bt+2];Re.children=Me}if(P&&P.defaultProps)for(ve in Ve=P.defaultProps,Ve)Re[ve]===void 0&&(Re[ve]=Ve[ve]);return{$$typeof:n,type:P,key:Le,ref:De,props:Re,_owner:de.current}}function C(P,q){return{$$typeof:n,type:P.type,key:q,ref:P.ref,props:P.props,_owner:P._owner}}function x(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function b(P){var q={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(le){return q[le]})}var V=/\/+/g;function A(P,q){return typeof P=="object"&&P!==null&&P.key!=null?b(""+P.key):q.toString(36)}function it(P,q,le,ve,Re){var Le=typeof P;(Le==="undefined"||Le==="boolean")&&(P=null);var De=!1;if(P===null)De=!0;else switch(Le){case"string":case"number":De=!0;break;case"object":switch(P.$$typeof){case n:case e:De=!0}}if(De)return De=P,Re=Re(De),P=ve===""?"."+A(De,0):ve,ne(Re)?(le="",P!=null&&(le=P.replace(V,"$&/")+"/"),it(Re,q,le,"",function(bt){return bt})):Re!=null&&(x(Re)&&(Re=C(Re,le+(!Re.key||De&&De.key===Re.key?"":(""+Re.key).replace(V,"$&/")+"/")+P)),q.push(Re)),1;if(De=0,ve=ve===""?".":ve+":",ne(P))for(var Ve=0;Ve<P.length;Ve++){Le=P[Ve];var Me=ve+A(Le,Ve);De+=it(Le,q,le,Me,Re)}else if(Me=I(P),typeof Me=="function")for(P=Me.call(P),Ve=0;!(Le=P.next()).done;)Le=Le.value,Me=ve+A(Le,Ve++),De+=it(Le,q,le,Me,Re);else if(Le==="object")throw q=String(P),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return De}function Ot(P,q,le){if(P==null)return P;var ve=[],Re=0;return it(P,ve,"","",function(Le){return q.call(le,Le,Re++)}),ve}function Dt(P){if(P._status===-1){var q=P._result;q=q(),q.then(function(le){(P._status===0||P._status===-1)&&(P._status=1,P._result=le)},function(le){(P._status===0||P._status===-1)&&(P._status=2,P._result=le)}),P._status===-1&&(P._status=0,P._result=q)}if(P._status===1)return P._result.default;throw P._result}var ze={current:null},ie={transition:null},pe={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:ie,ReactCurrentOwner:de};return Ce.Children={map:Ot,forEach:function(P,q,le){Ot(P,function(){q.apply(this,arguments)},le)},count:function(P){var q=0;return Ot(P,function(){q++}),q},toArray:function(P){return Ot(P,function(q){return q})||[]},only:function(P){if(!x(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Ce.Component=L,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=ee,Ce.StrictMode=i,Ce.Suspense=p,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Ce.cloneElement=function(P,q,le){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var ve=B({},P.props),Re=P.key,Le=P.ref,De=P._owner;if(q!=null){if(q.ref!==void 0&&(Le=q.ref,De=de.current),q.key!==void 0&&(Re=""+q.key),P.type&&P.type.defaultProps)var Ve=P.type.defaultProps;for(Me in q)_e.call(q,Me)&&!N.hasOwnProperty(Me)&&(ve[Me]=q[Me]===void 0&&Ve!==void 0?Ve[Me]:q[Me])}var Me=arguments.length-2;if(Me===1)ve.children=le;else if(1<Me){Ve=Array(Me);for(var bt=0;bt<Me;bt++)Ve[bt]=arguments[bt+2];ve.children=Ve}return{$$typeof:n,type:P.type,key:Re,ref:Le,props:ve,_owner:De}},Ce.createContext=function(P){return P={$$typeof:c,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:a,_context:P},P.Consumer=P},Ce.createElement=S,Ce.createFactory=function(P){var q=S.bind(null,P);return q.type=P,q},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(P){return{$$typeof:d,render:P}},Ce.isValidElement=x,Ce.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:Dt}},Ce.memo=function(P,q){return{$$typeof:y,type:P,compare:q===void 0?null:q}},Ce.startTransition=function(P){var q=ie.transition;ie.transition={};try{P()}finally{ie.transition=q}},Ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},Ce.useCallback=function(P,q){return ze.current.useCallback(P,q)},Ce.useContext=function(P){return ze.current.useContext(P)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(P){return ze.current.useDeferredValue(P)},Ce.useEffect=function(P,q){return ze.current.useEffect(P,q)},Ce.useId=function(){return ze.current.useId()},Ce.useImperativeHandle=function(P,q,le){return ze.current.useImperativeHandle(P,q,le)},Ce.useInsertionEffect=function(P,q){return ze.current.useInsertionEffect(P,q)},Ce.useLayoutEffect=function(P,q){return ze.current.useLayoutEffect(P,q)},Ce.useMemo=function(P,q){return ze.current.useMemo(P,q)},Ce.useReducer=function(P,q,le){return ze.current.useReducer(P,q,le)},Ce.useRef=function(P){return ze.current.useRef(P)},Ce.useState=function(P){return ze.current.useState(P)},Ce.useSyncExternalStore=function(P,q,le){return ze.current.useSyncExternalStore(P,q,le)},Ce.useTransition=function(){return ze.current.useTransition()},Ce.version="18.2.0",Ce}var dy;function Xf(){return dy||(dy=1,qd.exports=bT()),qd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy;function LT(){if(fy)return qa;fy=1;var n=Xf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,y){var v,w={},I=null,D=null;y!==void 0&&(I=""+y),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(D=p.ref);for(v in p)i.call(p,v)&&!a.hasOwnProperty(v)&&(w[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)w[v]===void 0&&(w[v]=p[v]);return{$$typeof:e,type:d,key:I,ref:D,props:w,_owner:o.current}}return qa.Fragment=t,qa.jsx=c,qa.jsxs=c,qa}var py;function VT(){return py||(py=1,Wd.exports=LT()),Wd.exports}var H=VT(),Y=Xf();const ms=Qf(Y),MT=DT({__proto__:null,default:ms},[Y]);var Ku={},Kd={exports:{}},rn={},Gd={exports:{}},Qd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my;function UT(){return my||(my=1,function(n){function e(ie,pe){var P=ie.length;ie.push(pe);e:for(;0<P;){var q=P-1>>>1,le=ie[q];if(0<o(le,pe))ie[q]=pe,ie[P]=le,P=q;else break e}}function t(ie){return ie.length===0?null:ie[0]}function i(ie){if(ie.length===0)return null;var pe=ie[0],P=ie.pop();if(P!==pe){ie[0]=P;e:for(var q=0,le=ie.length,ve=le>>>1;q<ve;){var Re=2*(q+1)-1,Le=ie[Re],De=Re+1,Ve=ie[De];if(0>o(Le,P))De<le&&0>o(Ve,Le)?(ie[q]=Ve,ie[De]=P,q=De):(ie[q]=Le,ie[Re]=P,q=Re);else if(De<le&&0>o(Ve,P))ie[q]=Ve,ie[De]=P,q=De;else break e}}return pe}function o(ie,pe){var P=ie.sortIndex-pe.sortIndex;return P!==0?P:ie.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],y=[],v=1,w=null,I=3,D=!1,B=!1,z=!1,L=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K(ie){for(var pe=t(y);pe!==null;){if(pe.callback===null)i(y);else if(pe.startTime<=ie)i(y),pe.sortIndex=pe.expirationTime,e(p,pe);else break;pe=t(y)}}function ne(ie){if(z=!1,K(ie),!B)if(t(p)!==null)B=!0,Dt(_e);else{var pe=t(y);pe!==null&&ze(ne,pe.startTime-ie)}}function _e(ie,pe){B=!1,z&&(z=!1,Z(S),S=-1),D=!0;var P=I;try{for(K(pe),w=t(p);w!==null&&(!(w.expirationTime>pe)||ie&&!b());){var q=w.callback;if(typeof q=="function"){w.callback=null,I=w.priorityLevel;var le=q(w.expirationTime<=pe);pe=n.unstable_now(),typeof le=="function"?w.callback=le:w===t(p)&&i(p),K(pe)}else i(p);w=t(p)}if(w!==null)var ve=!0;else{var Re=t(y);Re!==null&&ze(ne,Re.startTime-pe),ve=!1}return ve}finally{w=null,I=P,D=!1}}var de=!1,N=null,S=-1,C=5,x=-1;function b(){return!(n.unstable_now()-x<C)}function V(){if(N!==null){var ie=n.unstable_now();x=ie;var pe=!0;try{pe=N(!0,ie)}finally{pe?A():(de=!1,N=null)}}else de=!1}var A;if(typeof ee=="function")A=function(){ee(V)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,Ot=it.port2;it.port1.onmessage=V,A=function(){Ot.postMessage(null)}}else A=function(){L(V,0)};function Dt(ie){N=ie,de||(de=!0,A())}function ze(ie,pe){S=L(function(){ie(n.unstable_now())},pe)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){B||D||(B=!0,Dt(_e))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ie){switch(I){case 1:case 2:case 3:var pe=3;break;default:pe=I}var P=I;I=pe;try{return ie()}finally{I=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,pe){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var P=I;I=ie;try{return pe()}finally{I=P}},n.unstable_scheduleCallback=function(ie,pe,P){var q=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?q+P:q):P=q,ie){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=P+le,ie={id:v++,callback:pe,priorityLevel:ie,startTime:P,expirationTime:le,sortIndex:-1},P>q?(ie.sortIndex=P,e(y,ie),t(p)===null&&ie===t(y)&&(z?(Z(S),S=-1):z=!0,ze(ne,P-q))):(ie.sortIndex=le,e(p,ie),B||D||(B=!0,Dt(_e))),ie},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(ie){var pe=I;return function(){var P=I;I=pe;try{return ie.apply(this,arguments)}finally{I=P}}}}(Qd)),Qd}var gy;function FT(){return gy||(gy=1,Gd.exports=UT()),Gd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yy;function jT(){if(yy)return rn;yy=1;var n=Xf(),e=FT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},w={};function I(r){return p.call(w,r)?!0:p.call(v,r)?!1:y.test(r)?w[r]=!0:(v[r]=!0,!1)}function D(r,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function B(r,s,l,h){if(s===null||typeof s>"u"||D(r,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function z(r,s,l,h,f,g,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=l,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=E}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){L[r]=new z(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];L[s]=new z(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){L[r]=new z(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){L[r]=new z(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){L[r]=new z(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){L[r]=new z(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){L[r]=new z(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){L[r]=new z(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){L[r]=new z(r,5,!1,r.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function ee(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(Z,ee);L[s]=new z(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(Z,ee);L[s]=new z(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(Z,ee);L[s]=new z(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){L[r]=new z(r,1,!1,r.toLowerCase(),null,!1,!1)}),L.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){L[r]=new z(r,1,!1,r.toLowerCase(),null,!0,!0)});function K(r,s,l,h){var f=L.hasOwnProperty(s)?L[s]:null;(f!==null?f.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(B(s,l,f,h)&&(l=null),h||f===null?I(s)&&(l===null?r.removeAttribute(s):r.setAttribute(s,""+l)):f.mustUseProperty?r[f.propertyName]=l===null?f.type===3?!1:"":l:(s=f.attributeName,h=f.attributeNamespace,l===null?r.removeAttribute(s):(f=f.type,l=f===3||f===4&&l===!0?"":""+l,h?r.setAttributeNS(h,s,l):r.setAttribute(s,l))))}var ne=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_e=Symbol.for("react.element"),de=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),b=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),it=Symbol.for("react.suspense_list"),Ot=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),ie=Symbol.iterator;function pe(r){return r===null||typeof r!="object"?null:(r=ie&&r[ie]||r["@@iterator"],typeof r=="function"?r:null)}var P=Object.assign,q;function le(r){if(q===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);q=s&&s[1]||""}return`
`+q+r}var ve=!1;function Re(r,s){if(!r||ve)return"";ve=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(j){var h=j}Reflect.construct(r,[],s)}else{try{s.call()}catch(j){h=j}r.call(s.prototype)}else{try{throw Error()}catch(j){h=j}r()}}catch(j){if(j&&h&&typeof j.stack=="string"){for(var f=j.stack.split(`
`),g=h.stack.split(`
`),E=f.length-1,R=g.length-1;1<=E&&0<=R&&f[E]!==g[R];)R--;for(;1<=E&&0<=R;E--,R--)if(f[E]!==g[R]){if(E!==1||R!==1)do if(E--,R--,0>R||f[E]!==g[R]){var k=`
`+f[E].replace(" at new "," at ");return r.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",r.displayName)),k}while(1<=E&&0<=R);break}}}finally{ve=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?le(r):""}function Le(r){switch(r.tag){case 5:return le(r.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return r=Re(r.type,!1),r;case 11:return r=Re(r.type.render,!1),r;case 1:return r=Re(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case N:return"Fragment";case de:return"Portal";case C:return"Profiler";case S:return"StrictMode";case A:return"Suspense";case it:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case b:return(r.displayName||"Context")+".Consumer";case x:return(r._context.displayName||"Context")+".Provider";case V:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Ot:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case Dt:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Ve(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Me(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function bt(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ks(r){var s=bt(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,g=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(E){h=""+E,g.call(this,E)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(E){h=""+E},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function pr(r){r._valueTracker||(r._valueTracker=ks(r))}function Ns(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return r&&(h=bt(r)?r.checked?"true":"false":r.value),r=h,r!==l?(s.setValue(r),!0):!1}function Br(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function ji(r,s){var l=s.checked;return P({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function xs(r,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=Me(s.value!=null?s.value:l),r._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Jo(r,s){s=s.checked,s!=null&&K(r,"checked",s,!1)}function Zo(r,s){Jo(r,s);var l=Me(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Os(r,s.type,l):s.hasOwnProperty("defaultValue")&&Os(r,s.type,Me(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Ol(r,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,l||s===r.value||(r.value=s),r.defaultValue=s}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function Os(r,s,l){(s!=="number"||Br(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var mr=Array.isArray;function gr(r,s,l,h){if(r=r.options,s){s={};for(var f=0;f<l.length;f++)s["$"+l[f]]=!0;for(l=0;l<r.length;l++)f=s.hasOwnProperty("$"+r[l].value),r[l].selected!==f&&(r[l].selected=f),f&&h&&(r[l].defaultSelected=!0)}else{for(l=""+Me(l),s=null,f=0;f<r.length;f++){if(r[f].value===l){r[f].selected=!0,h&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function ea(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return P({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Ds(r,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(mr(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}r._wrapperState={initialValue:Me(l)}}function bs(r,s){var l=Me(s.value),h=Me(s.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),s.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),h!=null&&(r.defaultValue=""+h)}function ta(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function dt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ft(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?dt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var yr,na=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,f){MSApp.execUnsafeLocalFunction(function(){return r(s,l,h,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=yr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function zr(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var Bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zi=["Webkit","ms","Moz","O"];Object.keys(Bi).forEach(function(r){zi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Bi[s]=Bi[r]})});function ra(r,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Bi.hasOwnProperty(r)&&Bi[r]?(""+s).trim():s+"px"}function ia(r,s){r=r.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,f=ra(l,s[l],h);l==="float"&&(l="cssFloat"),h?r.setProperty(l,f):r[l]=f}}var sa=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oa(r,s){if(s){if(sa[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function aa(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $i=null;function Ls(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Vs=null,yn=null,Qn=null;function Ms(r){if(r=xa(r)){if(typeof Vs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=lu(s),Vs(r.stateNode,r.type,s))}}function Xn(r){yn?Qn?Qn.push(r):Qn=[r]:yn=r}function la(){if(yn){var r=yn,s=Qn;if(Qn=yn=null,Ms(r),s)for(r=0;r<s.length;r++)Ms(s[r])}}function Hi(r,s){return r(s)}function ua(){}var _r=!1;function ca(r,s,l){if(_r)return r(s,l);_r=!0;try{return Hi(r,s,l)}finally{_r=!1,(yn!==null||Qn!==null)&&(ua(),la())}}function st(r,s){var l=r.stateNode;if(l===null)return null;var h=lu(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Us=!1;if(d)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){Us=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{Us=!1}function Wi(r,s,l,h,f,g,E,R,k){var j=Array.prototype.slice.call(arguments,3);try{s.apply(l,j)}catch(Q){this.onError(Q)}}var qi=!1,Fs=null,kn=!1,ha=null,vh={onError:function(r){qi=!0,Fs=r}};function js(r,s,l,h,f,g,E,R,k){qi=!1,Fs=null,Wi.apply(vh,arguments)}function Dl(r,s,l,h,f,g,E,R,k){if(js.apply(this,arguments),qi){if(qi){var j=Fs;qi=!1,Fs=null}else throw Error(t(198));kn||(kn=!0,ha=j)}}function Nn(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function Ki(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function xn(r){if(Nn(r)!==r)throw Error(t(188))}function bl(r){var s=r.alternate;if(!s){if(s=Nn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var l=r,h=s;;){var f=l.return;if(f===null)break;var g=f.alternate;if(g===null){if(h=f.return,h!==null){l=h;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===l)return xn(f),r;if(g===h)return xn(f),s;g=g.sibling}throw Error(t(188))}if(l.return!==h.return)l=f,h=g;else{for(var E=!1,R=f.child;R;){if(R===l){E=!0,l=f,h=g;break}if(R===h){E=!0,h=f,l=g;break}R=R.sibling}if(!E){for(R=g.child;R;){if(R===l){E=!0,l=g,h=f;break}if(R===h){E=!0,h=g,l=f;break}R=R.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:s}function da(r){return r=bl(r),r!==null?Bs(r):null}function Bs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Bs(r);if(s!==null)return s;r=r.sibling}return null}var zs=e.unstable_scheduleCallback,fa=e.unstable_cancelCallback,Ll=e.unstable_shouldYield,Eh=e.unstable_requestPaint,He=e.unstable_now,Vl=e.unstable_getCurrentPriorityLevel,Gi=e.unstable_ImmediatePriority,$r=e.unstable_UserBlockingPriority,_n=e.unstable_NormalPriority,pa=e.unstable_LowPriority,Ml=e.unstable_IdlePriority,Qi=null,ln=null;function Ul(r){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Qi,r,void 0,(r.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:jl,ma=Math.log,Fl=Math.LN2;function jl(r){return r>>>=0,r===0?32:31-(ma(r)/Fl|0)|0}var $s=64,Hs=4194304;function Hr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Xi(r,s){var l=r.pendingLanes;if(l===0)return 0;var h=0,f=r.suspendedLanes,g=r.pingedLanes,E=l&268435455;if(E!==0){var R=E&~f;R!==0?h=Hr(R):(g&=E,g!==0&&(h=Hr(g)))}else E=l&~f,E!==0?h=Hr(E):g!==0&&(h=Hr(g));if(h===0)return 0;if(s!==0&&s!==h&&(s&f)===0&&(f=h&-h,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if((h&4)!==0&&(h|=l&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)l=31-$t(s),f=1<<l,h|=r[l],s&=~f;return h}function wh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vr(r,s){for(var l=r.suspendedLanes,h=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var E=31-$t(g),R=1<<E,k=f[E];k===-1?((R&l)===0||(R&h)!==0)&&(f[E]=wh(R,s)):k<=s&&(r.expiredLanes|=R),g&=~R}}function un(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Yi(){var r=$s;return $s<<=1,($s&4194240)===0&&($s=64),r}function Wr(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function qr(r,s,l){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-$t(s),r[s]=l}function $e(r,s){var l=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<l;){var f=31-$t(l),g=1<<f;s[f]=0,h[f]=-1,r[f]=-1,l&=~g}}function Kr(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var h=31-$t(l),f=1<<h;f&s|r[h]&s&&(r[h]|=s),l&=~f}}var Ne=0;function Gr(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Bl,Ws,zl,$l,Hl,ga=!1,Yn=[],Rt=null,On=null,Dn=null,Qr=new Map,vn=new Map,Jn=[],Th="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wl(r,s){switch(r){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Qr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":vn.delete(s.pointerId)}}function Xt(r,s,l,h,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:g,targetContainers:[f]},s!==null&&(s=xa(s),s!==null&&Ws(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function Ih(r,s,l,h,f){switch(s){case"focusin":return Rt=Xt(Rt,r,s,l,h,f),!0;case"dragenter":return On=Xt(On,r,s,l,h,f),!0;case"mouseover":return Dn=Xt(Dn,r,s,l,h,f),!0;case"pointerover":var g=f.pointerId;return Qr.set(g,Xt(Qr.get(g)||null,r,s,l,h,f)),!0;case"gotpointercapture":return g=f.pointerId,vn.set(g,Xt(vn.get(g)||null,r,s,l,h,f)),!0}return!1}function ql(r){var s=ns(r.target);if(s!==null){var l=Nn(s);if(l!==null){if(s=l.tag,s===13){if(s=Ki(l),s!==null){r.blockedOn=s,Hl(r.priority,function(){zl(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Er(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=qs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var h=new l.constructor(l.type,l);$i=h,l.target.dispatchEvent(h),$i=null}else return s=xa(l),s!==null&&Ws(s),r.blockedOn=l,!1;s.shift()}return!0}function Ji(r,s,l){Er(r)&&l.delete(s)}function Kl(){ga=!1,Rt!==null&&Er(Rt)&&(Rt=null),On!==null&&Er(On)&&(On=null),Dn!==null&&Er(Dn)&&(Dn=null),Qr.forEach(Ji),vn.forEach(Ji)}function bn(r,s){r.blockedOn===s&&(r.blockedOn=null,ga||(ga=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Kl)))}function Ln(r){function s(f){return bn(f,r)}if(0<Yn.length){bn(Yn[0],r);for(var l=1;l<Yn.length;l++){var h=Yn[l];h.blockedOn===r&&(h.blockedOn=null)}}for(Rt!==null&&bn(Rt,r),On!==null&&bn(On,r),Dn!==null&&bn(Dn,r),Qr.forEach(s),vn.forEach(s),l=0;l<Jn.length;l++)h=Jn[l],h.blockedOn===r&&(h.blockedOn=null);for(;0<Jn.length&&(l=Jn[0],l.blockedOn===null);)ql(l),l.blockedOn===null&&Jn.shift()}var wr=ne.ReactCurrentBatchConfig,Xr=!0;function Qe(r,s,l,h){var f=Ne,g=wr.transition;wr.transition=null;try{Ne=1,ya(r,s,l,h)}finally{Ne=f,wr.transition=g}}function Sh(r,s,l,h){var f=Ne,g=wr.transition;wr.transition=null;try{Ne=4,ya(r,s,l,h)}finally{Ne=f,wr.transition=g}}function ya(r,s,l,h){if(Xr){var f=qs(r,s,l,h);if(f===null)Lh(r,s,h,Zi,l),Wl(r,h);else if(Ih(f,r,s,l,h))h.stopPropagation();else if(Wl(r,h),s&4&&-1<Th.indexOf(r)){for(;f!==null;){var g=xa(f);if(g!==null&&Bl(g),g=qs(r,s,l,h),g===null&&Lh(r,s,h,Zi,l),g===f)break;f=g}f!==null&&h.stopPropagation()}else Lh(r,s,h,null,l)}}var Zi=null;function qs(r,s,l,h){if(Zi=null,r=Ls(h),r=ns(r),r!==null)if(s=Nn(r),s===null)r=null;else if(l=s.tag,l===13){if(r=Ki(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Zi=r,null}function _a(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vl()){case Gi:return 1;case $r:return 4;case _n:case pa:return 16;case Ml:return 536870912;default:return 16}default:return 16}}var cn=null,Ks=null,Yt=null;function va(){if(Yt)return Yt;var r,s=Ks,l=s.length,h,f="value"in cn?cn.value:cn.textContent,g=f.length;for(r=0;r<l&&s[r]===f[r];r++);var E=l-r;for(h=1;h<=E&&s[l-h]===f[g-h];h++);return Yt=f.slice(r,1<h?1-h:void 0)}function Gs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Zn(){return!0}function Ea(){return!1}function At(r){function s(l,h,f,g,E){this._reactName=l,this._targetInst=f,this.type=h,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var R in r)r.hasOwnProperty(R)&&(l=r[R],this[R]=l?l(g):g[R]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Zn:Ea,this.isPropagationStopped=Ea,this}return P(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),s}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qs=At(Vn),er=P({},Vn,{view:0,detail:0}),Rh=At(er),Xs,Tr,Yr,es=P({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Yr&&(Yr&&r.type==="mousemove"?(Xs=r.screenX-Yr.screenX,Tr=r.screenY-Yr.screenY):Tr=Xs=0,Yr=r),Xs)},movementY:function(r){return"movementY"in r?r.movementY:Tr}}),Ys=At(es),wa=P({},es,{dataTransfer:0}),Gl=At(wa),Js=P({},er,{relatedTarget:0}),Zs=At(Js),Ql=P({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ir=At(Ql),Xl=P({},Vn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Yl=At(Xl),Jl=P({},Vn,{data:0}),Ta=At(Jl),eo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ht={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Zl[r])?!!s[r]:!1}function tr(){return eu}var u=P({},er,{key:function(r){if(r.key){var s=eo[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Gs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Ht[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tr,charCode:function(r){return r.type==="keypress"?Gs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Gs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=At(u),_=P({},es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=At(_),M=P({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tr}),$=At(M),re=P({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Be=At(re),pt=P({},es,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),xe=At(pt),Et=[9,13,27,32],ut=d&&"CompositionEvent"in window,En=null;d&&"documentMode"in document&&(En=document.documentMode);var hn=d&&"TextEvent"in window&&!En,ts=d&&(!ut||En&&8<En&&11>=En),to=" ",im=!1;function sm(r,s){switch(r){case"keyup":return Et.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function om(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var no=!1;function N0(r,s){switch(r){case"compositionend":return om(s);case"keypress":return s.which!==32?null:(im=!0,to);case"textInput":return r=s.data,r===to&&im?null:r;default:return null}}function x0(r,s){if(no)return r==="compositionend"||!ut&&sm(r,s)?(r=va(),Yt=Ks=cn=null,no=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ts&&s.locale!=="ko"?null:s.data;default:return null}}var O0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!O0[r.type]:s==="textarea"}function lm(r,s,l,h){Xn(h),s=su(s,"onChange"),0<s.length&&(l=new Qs("onChange","change",null,l,h),r.push({event:l,listeners:s}))}var Ia=null,Sa=null;function D0(r){Am(r,0)}function tu(r){var s=ao(r);if(Ns(s))return r}function b0(r,s){if(r==="change")return s}var um=!1;if(d){var Ah;if(d){var Ch="oninput"in document;if(!Ch){var cm=document.createElement("div");cm.setAttribute("oninput","return;"),Ch=typeof cm.oninput=="function"}Ah=Ch}else Ah=!1;um=Ah&&(!document.documentMode||9<document.documentMode)}function hm(){Ia&&(Ia.detachEvent("onpropertychange",dm),Sa=Ia=null)}function dm(r){if(r.propertyName==="value"&&tu(Sa)){var s=[];lm(s,Sa,r,Ls(r)),ca(D0,s)}}function L0(r,s,l){r==="focusin"?(hm(),Ia=s,Sa=l,Ia.attachEvent("onpropertychange",dm)):r==="focusout"&&hm()}function V0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return tu(Sa)}function M0(r,s){if(r==="click")return tu(s)}function U0(r,s){if(r==="input"||r==="change")return tu(s)}function F0(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Mn=typeof Object.is=="function"?Object.is:F0;function Ra(r,s){if(Mn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var f=l[h];if(!p.call(s,f)||!Mn(r[f],s[f]))return!1}return!0}function fm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function pm(r,s){var l=fm(r);r=0;for(var h;l;){if(l.nodeType===3){if(h=r+l.textContent.length,r<=s&&h>=s)return{node:l,offset:s-r};r=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=fm(l)}}function mm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?mm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function gm(){for(var r=window,s=Br();s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=Br(r.document)}return s}function Ph(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function j0(r){var s=gm(),l=r.focusedElem,h=r.selectionRange;if(s!==l&&l&&l.ownerDocument&&mm(l.ownerDocument.documentElement,l)){if(h!==null&&Ph(l)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(r,l.value.length);else if(r=(s=l.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=l.textContent.length,g=Math.min(h.start,f);h=h.end===void 0?g:Math.min(h.end,f),!r.extend&&g>h&&(f=h,h=g,g=f),f=pm(l,g);var E=pm(l,h);f&&E&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==E.node||r.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>h?(r.addRange(s),r.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),r.addRange(s)))}}for(s=[],r=l;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)r=s[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var B0=d&&"documentMode"in document&&11>=document.documentMode,ro=null,kh=null,Aa=null,Nh=!1;function ym(r,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Nh||ro==null||ro!==Br(h)||(h=ro,"selectionStart"in h&&Ph(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Aa&&Ra(Aa,h)||(Aa=h,h=su(kh,"onSelect"),0<h.length&&(s=new Qs("onSelect","select",null,s,l),r.push({event:s,listeners:h}),s.target=ro)))}function nu(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var io={animationend:nu("Animation","AnimationEnd"),animationiteration:nu("Animation","AnimationIteration"),animationstart:nu("Animation","AnimationStart"),transitionend:nu("Transition","TransitionEnd")},xh={},_m={};d&&(_m=document.createElement("div").style,"AnimationEvent"in window||(delete io.animationend.animation,delete io.animationiteration.animation,delete io.animationstart.animation),"TransitionEvent"in window||delete io.transitionend.transition);function ru(r){if(xh[r])return xh[r];if(!io[r])return r;var s=io[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in _m)return xh[r]=s[l];return r}var vm=ru("animationend"),Em=ru("animationiteration"),wm=ru("animationstart"),Tm=ru("transitionend"),Im=new Map,Sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(r,s){Im.set(r,s),a(s,[r])}for(var Oh=0;Oh<Sm.length;Oh++){var Dh=Sm[Oh],z0=Dh.toLowerCase(),$0=Dh[0].toUpperCase()+Dh.slice(1);Jr(z0,"on"+$0)}Jr(vm,"onAnimationEnd"),Jr(Em,"onAnimationIteration"),Jr(wm,"onAnimationStart"),Jr("dblclick","onDoubleClick"),Jr("focusin","onFocus"),Jr("focusout","onBlur"),Jr(Tm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ca));function Rm(r,s,l){var h=r.type||"unknown-event";r.currentTarget=l,Dl(h,s,void 0,r),r.currentTarget=null}function Am(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var h=r[l],f=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var E=h.length-1;0<=E;E--){var R=h[E],k=R.instance,j=R.currentTarget;if(R=R.listener,k!==g&&f.isPropagationStopped())break e;Rm(f,R,j),g=k}else for(E=0;E<h.length;E++){if(R=h[E],k=R.instance,j=R.currentTarget,R=R.listener,k!==g&&f.isPropagationStopped())break e;Rm(f,R,j),g=k}}}if(kn)throw r=ha,kn=!1,ha=null,r}function Ke(r,s){var l=s[Bh];l===void 0&&(l=s[Bh]=new Set);var h=r+"__bubble";l.has(h)||(Cm(s,r,2,!1),l.add(h))}function bh(r,s,l){var h=0;s&&(h|=4),Cm(l,r,h,s)}var iu="_reactListening"+Math.random().toString(36).slice(2);function Pa(r){if(!r[iu]){r[iu]=!0,i.forEach(function(l){l!=="selectionchange"&&(H0.has(l)||bh(l,!1,r),bh(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[iu]||(s[iu]=!0,bh("selectionchange",!1,s))}}function Cm(r,s,l,h){switch(_a(s)){case 1:var f=Qe;break;case 4:f=Sh;break;default:f=ya}l=f.bind(null,s,l,r),f=void 0,!Us||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),h?f!==void 0?r.addEventListener(s,l,{capture:!0,passive:f}):r.addEventListener(s,l,!0):f!==void 0?r.addEventListener(s,l,{passive:f}):r.addEventListener(s,l,!1)}function Lh(r,s,l,h,f){var g=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var E=h.tag;if(E===3||E===4){var R=h.stateNode.containerInfo;if(R===f||R.nodeType===8&&R.parentNode===f)break;if(E===4)for(E=h.return;E!==null;){var k=E.tag;if((k===3||k===4)&&(k=E.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;E=E.return}for(;R!==null;){if(E=ns(R),E===null)return;if(k=E.tag,k===5||k===6){h=g=E;continue e}R=R.parentNode}}h=h.return}ca(function(){var j=g,Q=Ls(l),J=[];e:{var G=Im.get(r);if(G!==void 0){var se=Qs,ue=r;switch(r){case"keypress":if(Gs(l)===0)break e;case"keydown":case"keyup":se=m;break;case"focusin":ue="focus",se=Zs;break;case"focusout":ue="blur",se=Zs;break;case"beforeblur":case"afterblur":se=Zs;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Ys;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Gl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=$;break;case vm:case Em:case wm:se=Ir;break;case Tm:se=Be;break;case"scroll":se=Rh;break;case"wheel":se=xe;break;case"copy":case"cut":case"paste":se=Yl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=T}var ce=(s&4)!==0,ot=!ce&&r==="scroll",U=ce?G!==null?G+"Capture":null:G;ce=[];for(var O=j,F;O!==null;){F=O;var te=F.stateNode;if(F.tag===5&&te!==null&&(F=te,U!==null&&(te=st(O,U),te!=null&&ce.push(ka(O,te,F)))),ot)break;O=O.return}0<ce.length&&(G=new se(G,ue,null,l,Q),J.push({event:G,listeners:ce}))}}if((s&7)===0){e:{if(G=r==="mouseover"||r==="pointerover",se=r==="mouseout"||r==="pointerout",G&&l!==$i&&(ue=l.relatedTarget||l.fromElement)&&(ns(ue)||ue[Sr]))break e;if((se||G)&&(G=Q.window===Q?Q:(G=Q.ownerDocument)?G.defaultView||G.parentWindow:window,se?(ue=l.relatedTarget||l.toElement,se=j,ue=ue?ns(ue):null,ue!==null&&(ot=Nn(ue),ue!==ot||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(se=null,ue=j),se!==ue)){if(ce=Ys,te="onMouseLeave",U="onMouseEnter",O="mouse",(r==="pointerout"||r==="pointerover")&&(ce=T,te="onPointerLeave",U="onPointerEnter",O="pointer"),ot=se==null?G:ao(se),F=ue==null?G:ao(ue),G=new ce(te,O+"leave",se,l,Q),G.target=ot,G.relatedTarget=F,te=null,ns(Q)===j&&(ce=new ce(U,O+"enter",ue,l,Q),ce.target=F,ce.relatedTarget=ot,te=ce),ot=te,se&&ue)t:{for(ce=se,U=ue,O=0,F=ce;F;F=so(F))O++;for(F=0,te=U;te;te=so(te))F++;for(;0<O-F;)ce=so(ce),O--;for(;0<F-O;)U=so(U),F--;for(;O--;){if(ce===U||U!==null&&ce===U.alternate)break t;ce=so(ce),U=so(U)}ce=null}else ce=null;se!==null&&Pm(J,G,se,ce,!1),ue!==null&&ot!==null&&Pm(J,ot,ue,ce,!0)}}e:{if(G=j?ao(j):window,se=G.nodeName&&G.nodeName.toLowerCase(),se==="select"||se==="input"&&G.type==="file")var he=b0;else if(am(G))if(um)he=U0;else{he=V0;var me=L0}else(se=G.nodeName)&&se.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(he=M0);if(he&&(he=he(r,j))){lm(J,he,l,Q);break e}me&&me(r,G,j),r==="focusout"&&(me=G._wrapperState)&&me.controlled&&G.type==="number"&&Os(G,"number",G.value)}switch(me=j?ao(j):window,r){case"focusin":(am(me)||me.contentEditable==="true")&&(ro=me,kh=j,Aa=null);break;case"focusout":Aa=kh=ro=null;break;case"mousedown":Nh=!0;break;case"contextmenu":case"mouseup":case"dragend":Nh=!1,ym(J,l,Q);break;case"selectionchange":if(B0)break;case"keydown":case"keyup":ym(J,l,Q)}var ge;if(ut)e:{switch(r){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else no?sm(r,l)&&(Te="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(Te="onCompositionStart");Te&&(ts&&l.locale!=="ko"&&(no||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&no&&(ge=va()):(cn=Q,Ks="value"in cn?cn.value:cn.textContent,no=!0)),me=su(j,Te),0<me.length&&(Te=new Ta(Te,r,null,l,Q),J.push({event:Te,listeners:me}),ge?Te.data=ge:(ge=om(l),ge!==null&&(Te.data=ge)))),(ge=hn?N0(r,l):x0(r,l))&&(j=su(j,"onBeforeInput"),0<j.length&&(Q=new Ta("onBeforeInput","beforeinput",null,l,Q),J.push({event:Q,listeners:j}),Q.data=ge))}Am(J,s)})}function ka(r,s,l){return{instance:r,listener:s,currentTarget:l}}function su(r,s){for(var l=s+"Capture",h=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=st(r,l),g!=null&&h.unshift(ka(r,g,f)),g=st(r,s),g!=null&&h.push(ka(r,g,f))),r=r.return}return h}function so(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Pm(r,s,l,h,f){for(var g=s._reactName,E=[];l!==null&&l!==h;){var R=l,k=R.alternate,j=R.stateNode;if(k!==null&&k===h)break;R.tag===5&&j!==null&&(R=j,f?(k=st(l,g),k!=null&&E.unshift(ka(l,k,R))):f||(k=st(l,g),k!=null&&E.push(ka(l,k,R)))),l=l.return}E.length!==0&&r.push({event:s,listeners:E})}var W0=/\r\n?/g,q0=/\u0000|\uFFFD/g;function km(r){return(typeof r=="string"?r:""+r).replace(W0,`
`).replace(q0,"")}function ou(r,s,l){if(s=km(s),km(r)!==s&&l)throw Error(t(425))}function au(){}var Vh=null,Mh=null;function Uh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Fh=typeof setTimeout=="function"?setTimeout:void 0,K0=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,G0=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(r){return Nm.resolve(null).then(r).catch(Q0)}:Fh;function Q0(r){setTimeout(function(){throw r})}function jh(r,s){var l=s,h=0;do{var f=l.nextSibling;if(r.removeChild(l),f&&f.nodeType===8)if(l=f.data,l==="/$"){if(h===0){r.removeChild(f),Ln(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=f}while(l);Ln(s)}function Zr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function xm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}var oo=Math.random().toString(36).slice(2),nr="__reactFiber$"+oo,Na="__reactProps$"+oo,Sr="__reactContainer$"+oo,Bh="__reactEvents$"+oo,X0="__reactListeners$"+oo,Y0="__reactHandles$"+oo;function ns(r){var s=r[nr];if(s)return s;for(var l=r.parentNode;l;){if(s=l[Sr]||l[nr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=xm(r);r!==null;){if(l=r[nr])return l;r=xm(r)}return s}r=l,l=r.parentNode}return null}function xa(r){return r=r[nr]||r[Sr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function ao(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function lu(r){return r[Na]||null}var zh=[],lo=-1;function ei(r){return{current:r}}function Ge(r){0>lo||(r.current=zh[lo],zh[lo]=null,lo--)}function We(r,s){lo++,zh[lo]=r.current,r.current=s}var ti={},Lt=ei(ti),Jt=ei(!1),rs=ti;function uo(r,s){var l=r.type.contextTypes;if(!l)return ti;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in l)f[g]=s[g];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function Zt(r){return r=r.childContextTypes,r!=null}function uu(){Ge(Jt),Ge(Lt)}function Om(r,s,l){if(Lt.current!==ti)throw Error(t(168));We(Lt,s),We(Jt,l)}function Dm(r,s,l){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var f in h)if(!(f in s))throw Error(t(108,Ve(r)||"Unknown",f));return P({},l,h)}function cu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ti,rs=Lt.current,We(Lt,r),We(Jt,Jt.current),!0}function bm(r,s,l){var h=r.stateNode;if(!h)throw Error(t(169));l?(r=Dm(r,s,rs),h.__reactInternalMemoizedMergedChildContext=r,Ge(Jt),Ge(Lt),We(Lt,r)):Ge(Jt),We(Jt,l)}var Rr=null,hu=!1,$h=!1;function Lm(r){Rr===null?Rr=[r]:Rr.push(r)}function J0(r){hu=!0,Lm(r)}function ni(){if(!$h&&Rr!==null){$h=!0;var r=0,s=Ne;try{var l=Rr;for(Ne=1;r<l.length;r++){var h=l[r];do h=h(!0);while(h!==null)}Rr=null,hu=!1}catch(f){throw Rr!==null&&(Rr=Rr.slice(r+1)),zs(Gi,ni),f}finally{Ne=s,$h=!1}}return null}var co=[],ho=0,du=null,fu=0,wn=[],Tn=0,is=null,Ar=1,Cr="";function ss(r,s){co[ho++]=fu,co[ho++]=du,du=r,fu=s}function Vm(r,s,l){wn[Tn++]=Ar,wn[Tn++]=Cr,wn[Tn++]=is,is=r;var h=Ar;r=Cr;var f=32-$t(h)-1;h&=~(1<<f),l+=1;var g=32-$t(s)+f;if(30<g){var E=f-f%5;g=(h&(1<<E)-1).toString(32),h>>=E,f-=E,Ar=1<<32-$t(s)+f|l<<f|h,Cr=g+r}else Ar=1<<g|l<<f|h,Cr=r}function Hh(r){r.return!==null&&(ss(r,1),Vm(r,1,0))}function Wh(r){for(;r===du;)du=co[--ho],co[ho]=null,fu=co[--ho],co[ho]=null;for(;r===is;)is=wn[--Tn],wn[Tn]=null,Cr=wn[--Tn],wn[Tn]=null,Ar=wn[--Tn],wn[Tn]=null}var dn=null,fn=null,Xe=!1,Un=null;function Mm(r,s){var l=An(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=r,s=r.deletions,s===null?(r.deletions=[l],r.flags|=16):s.push(l)}function Um(r,s){switch(r.tag){case 5:var l=r.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,dn=r,fn=Zr(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,dn=r,fn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=is!==null?{id:Ar,overflow:Cr}:null,r.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=An(18,null,null,0),l.stateNode=s,l.return=r,r.child=l,dn=r,fn=null,!0):!1;default:return!1}}function qh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Kh(r){if(Xe){var s=fn;if(s){var l=s;if(!Um(r,s)){if(qh(r))throw Error(t(418));s=Zr(l.nextSibling);var h=dn;s&&Um(r,s)?Mm(h,l):(r.flags=r.flags&-4097|2,Xe=!1,dn=r)}}else{if(qh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Xe=!1,dn=r}}}function Fm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;dn=r}function pu(r){if(r!==dn)return!1;if(!Xe)return Fm(r),Xe=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Uh(r.type,r.memoizedProps)),s&&(s=fn)){if(qh(r))throw jm(),Error(t(418));for(;s;)Mm(r,s),s=Zr(s.nextSibling)}if(Fm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(s===0){fn=Zr(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}r=r.nextSibling}fn=null}}else fn=dn?Zr(r.stateNode.nextSibling):null;return!0}function jm(){for(var r=fn;r;)r=Zr(r.nextSibling)}function fo(){fn=dn=null,Xe=!1}function Gh(r){Un===null?Un=[r]:Un.push(r)}var Z0=ne.ReactCurrentBatchConfig;function Fn(r,s){if(r&&r.defaultProps){s=P({},s),r=r.defaultProps;for(var l in r)s[l]===void 0&&(s[l]=r[l]);return s}return s}var mu=ei(null),gu=null,po=null,Qh=null;function Xh(){Qh=po=gu=null}function Yh(r){var s=mu.current;Ge(mu),r._currentValue=s}function Jh(r,s,l){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===l)break;r=r.return}}function mo(r,s){gu=r,Qh=po=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(en=!0),r.firstContext=null)}function In(r){var s=r._currentValue;if(Qh!==r)if(r={context:r,memoizedValue:s,next:null},po===null){if(gu===null)throw Error(t(308));po=r,gu.dependencies={lanes:0,firstContext:r}}else po=po.next=r;return s}var os=null;function Zh(r){os===null?os=[r]:os.push(r)}function Bm(r,s,l,h){var f=s.interleaved;return f===null?(l.next=l,Zh(s)):(l.next=f.next,f.next=l),s.interleaved=l,Pr(r,h)}function Pr(r,s){r.lanes|=s;var l=r.alternate;for(l!==null&&(l.lanes|=s),l=r,r=r.return;r!==null;)r.childLanes|=s,l=r.alternate,l!==null&&(l.childLanes|=s),l=r,r=r.return;return l.tag===3?l.stateNode:null}var ri=!1;function ed(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function kr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function ii(r,s,l){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,(be&2)!==0){var f=h.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),h.pending=s,Pr(r,l)}return f=h.interleaved,f===null?(s.next=s,Zh(h)):(s.next=f.next,f.next=s),h.interleaved=s,Pr(r,l)}function yu(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,l|=h,s.lanes=l,Kr(r,l)}}function $m(r,s){var l=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var f=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};g===null?f=g=E:g=g.next=E,l=l.next}while(l!==null);g===null?f=g=s:g=g.next=s}else f=g=s;l={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:h.shared,effects:h.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}function _u(r,s,l,h){var f=r.updateQueue;ri=!1;var g=f.firstBaseUpdate,E=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var k=R,j=k.next;k.next=null,E===null?g=j:E.next=j,E=k;var Q=r.alternate;Q!==null&&(Q=Q.updateQueue,R=Q.lastBaseUpdate,R!==E&&(R===null?Q.firstBaseUpdate=j:R.next=j,Q.lastBaseUpdate=k))}if(g!==null){var J=f.baseState;E=0,Q=j=k=null,R=g;do{var G=R.lane,se=R.eventTime;if((h&G)===G){Q!==null&&(Q=Q.next={eventTime:se,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var ue=r,ce=R;switch(G=s,se=l,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){J=ue.call(se,J,G);break e}J=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,G=typeof ue=="function"?ue.call(se,J,G):ue,G==null)break e;J=P({},J,G);break e;case 2:ri=!0}}R.callback!==null&&R.lane!==0&&(r.flags|=64,G=f.effects,G===null?f.effects=[R]:G.push(R))}else se={eventTime:se,lane:G,tag:R.tag,payload:R.payload,callback:R.callback,next:null},Q===null?(j=Q=se,k=J):Q=Q.next=se,E|=G;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;G=R,R=G.next,G.next=null,f.lastBaseUpdate=G,f.shared.pending=null}}while(!0);if(Q===null&&(k=J),f.baseState=k,f.firstBaseUpdate=j,f.lastBaseUpdate=Q,s=f.shared.interleaved,s!==null){f=s;do E|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);us|=E,r.lanes=E,r.memoizedState=J}}function Hm(r,s,l){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],f=h.callback;if(f!==null){if(h.callback=null,h=l,typeof f!="function")throw Error(t(191,f));f.call(h)}}}var Wm=new n.Component().refs;function td(r,s,l,h){s=r.memoizedState,l=l(h,s),l=l==null?s:P({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var vu={isMounted:function(r){return(r=r._reactInternals)?Nn(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var h=qt(),f=li(r),g=kr(h,f);g.payload=s,l!=null&&(g.callback=l),s=ii(r,g,f),s!==null&&(zn(s,r,f,h),yu(s,r,f))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var h=qt(),f=li(r),g=kr(h,f);g.tag=1,g.payload=s,l!=null&&(g.callback=l),s=ii(r,g,f),s!==null&&(zn(s,r,f,h),yu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=qt(),h=li(r),f=kr(l,h);f.tag=2,s!=null&&(f.callback=s),s=ii(r,f,h),s!==null&&(zn(s,r,h,l),yu(s,r,h))}};function qm(r,s,l,h,f,g,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,g,E):s.prototype&&s.prototype.isPureReactComponent?!Ra(l,h)||!Ra(f,g):!0}function Km(r,s,l){var h=!1,f=ti,g=s.contextType;return typeof g=="object"&&g!==null?g=In(g):(f=Zt(s)?rs:Lt.current,h=s.contextTypes,g=(h=h!=null)?uo(r,f):ti),s=new s(l,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=vu,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function Gm(r,s,l,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==r&&vu.enqueueReplaceState(s,s.state,null)}function nd(r,s,l,h){var f=r.stateNode;f.props=l,f.state=r.memoizedState,f.refs=Wm,ed(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=In(g):(g=Zt(s)?rs:Lt.current,f.context=uo(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(td(r,s,g,l),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&vu.enqueueReplaceState(f,f.state,null),_u(r,l,f,h),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function Oa(r,s,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,r));var f=h,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(E){var R=f.refs;R===Wm&&(R=f.refs={}),E===null?delete R[g]:R[g]=E},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function Eu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Qm(r){var s=r._init;return s(r._payload)}function Xm(r){function s(U,O){if(r){var F=U.deletions;F===null?(U.deletions=[O],U.flags|=16):F.push(O)}}function l(U,O){if(!r)return null;for(;O!==null;)s(U,O),O=O.sibling;return null}function h(U,O){for(U=new Map;O!==null;)O.key!==null?U.set(O.key,O):U.set(O.index,O),O=O.sibling;return U}function f(U,O){return U=ci(U,O),U.index=0,U.sibling=null,U}function g(U,O,F){return U.index=F,r?(F=U.alternate,F!==null?(F=F.index,F<O?(U.flags|=2,O):F):(U.flags|=2,O)):(U.flags|=1048576,O)}function E(U){return r&&U.alternate===null&&(U.flags|=2),U}function R(U,O,F,te){return O===null||O.tag!==6?(O=Fd(F,U.mode,te),O.return=U,O):(O=f(O,F),O.return=U,O)}function k(U,O,F,te){var he=F.type;return he===N?Q(U,O,F.props.children,te,F.key):O!==null&&(O.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Dt&&Qm(he)===O.type)?(te=f(O,F.props),te.ref=Oa(U,O,F),te.return=U,te):(te=Fu(F.type,F.key,F.props,null,U.mode,te),te.ref=Oa(U,O,F),te.return=U,te)}function j(U,O,F,te){return O===null||O.tag!==4||O.stateNode.containerInfo!==F.containerInfo||O.stateNode.implementation!==F.implementation?(O=jd(F,U.mode,te),O.return=U,O):(O=f(O,F.children||[]),O.return=U,O)}function Q(U,O,F,te,he){return O===null||O.tag!==7?(O=fs(F,U.mode,te,he),O.return=U,O):(O=f(O,F),O.return=U,O)}function J(U,O,F){if(typeof O=="string"&&O!==""||typeof O=="number")return O=Fd(""+O,U.mode,F),O.return=U,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case _e:return F=Fu(O.type,O.key,O.props,null,U.mode,F),F.ref=Oa(U,null,O),F.return=U,F;case de:return O=jd(O,U.mode,F),O.return=U,O;case Dt:var te=O._init;return J(U,te(O._payload),F)}if(mr(O)||pe(O))return O=fs(O,U.mode,F,null),O.return=U,O;Eu(U,O)}return null}function G(U,O,F,te){var he=O!==null?O.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return he!==null?null:R(U,O,""+F,te);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case _e:return F.key===he?k(U,O,F,te):null;case de:return F.key===he?j(U,O,F,te):null;case Dt:return he=F._init,G(U,O,he(F._payload),te)}if(mr(F)||pe(F))return he!==null?null:Q(U,O,F,te,null);Eu(U,F)}return null}function se(U,O,F,te,he){if(typeof te=="string"&&te!==""||typeof te=="number")return U=U.get(F)||null,R(O,U,""+te,he);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case _e:return U=U.get(te.key===null?F:te.key)||null,k(O,U,te,he);case de:return U=U.get(te.key===null?F:te.key)||null,j(O,U,te,he);case Dt:var me=te._init;return se(U,O,F,me(te._payload),he)}if(mr(te)||pe(te))return U=U.get(F)||null,Q(O,U,te,he,null);Eu(O,te)}return null}function ue(U,O,F,te){for(var he=null,me=null,ge=O,Te=O=0,It=null;ge!==null&&Te<F.length;Te++){ge.index>Te?(It=ge,ge=null):It=ge.sibling;var Ue=G(U,ge,F[Te],te);if(Ue===null){ge===null&&(ge=It);break}r&&ge&&Ue.alternate===null&&s(U,ge),O=g(Ue,O,Te),me===null?he=Ue:me.sibling=Ue,me=Ue,ge=It}if(Te===F.length)return l(U,ge),Xe&&ss(U,Te),he;if(ge===null){for(;Te<F.length;Te++)ge=J(U,F[Te],te),ge!==null&&(O=g(ge,O,Te),me===null?he=ge:me.sibling=ge,me=ge);return Xe&&ss(U,Te),he}for(ge=h(U,ge);Te<F.length;Te++)It=se(ge,U,Te,F[Te],te),It!==null&&(r&&It.alternate!==null&&ge.delete(It.key===null?Te:It.key),O=g(It,O,Te),me===null?he=It:me.sibling=It,me=It);return r&&ge.forEach(function(hi){return s(U,hi)}),Xe&&ss(U,Te),he}function ce(U,O,F,te){var he=pe(F);if(typeof he!="function")throw Error(t(150));if(F=he.call(F),F==null)throw Error(t(151));for(var me=he=null,ge=O,Te=O=0,It=null,Ue=F.next();ge!==null&&!Ue.done;Te++,Ue=F.next()){ge.index>Te?(It=ge,ge=null):It=ge.sibling;var hi=G(U,ge,Ue.value,te);if(hi===null){ge===null&&(ge=It);break}r&&ge&&hi.alternate===null&&s(U,ge),O=g(hi,O,Te),me===null?he=hi:me.sibling=hi,me=hi,ge=It}if(Ue.done)return l(U,ge),Xe&&ss(U,Te),he;if(ge===null){for(;!Ue.done;Te++,Ue=F.next())Ue=J(U,Ue.value,te),Ue!==null&&(O=g(Ue,O,Te),me===null?he=Ue:me.sibling=Ue,me=Ue);return Xe&&ss(U,Te),he}for(ge=h(U,ge);!Ue.done;Te++,Ue=F.next())Ue=se(ge,U,Te,Ue.value,te),Ue!==null&&(r&&Ue.alternate!==null&&ge.delete(Ue.key===null?Te:Ue.key),O=g(Ue,O,Te),me===null?he=Ue:me.sibling=Ue,me=Ue);return r&&ge.forEach(function(OT){return s(U,OT)}),Xe&&ss(U,Te),he}function ot(U,O,F,te){if(typeof F=="object"&&F!==null&&F.type===N&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case _e:e:{for(var he=F.key,me=O;me!==null;){if(me.key===he){if(he=F.type,he===N){if(me.tag===7){l(U,me.sibling),O=f(me,F.props.children),O.return=U,U=O;break e}}else if(me.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Dt&&Qm(he)===me.type){l(U,me.sibling),O=f(me,F.props),O.ref=Oa(U,me,F),O.return=U,U=O;break e}l(U,me);break}else s(U,me);me=me.sibling}F.type===N?(O=fs(F.props.children,U.mode,te,F.key),O.return=U,U=O):(te=Fu(F.type,F.key,F.props,null,U.mode,te),te.ref=Oa(U,O,F),te.return=U,U=te)}return E(U);case de:e:{for(me=F.key;O!==null;){if(O.key===me)if(O.tag===4&&O.stateNode.containerInfo===F.containerInfo&&O.stateNode.implementation===F.implementation){l(U,O.sibling),O=f(O,F.children||[]),O.return=U,U=O;break e}else{l(U,O);break}else s(U,O);O=O.sibling}O=jd(F,U.mode,te),O.return=U,U=O}return E(U);case Dt:return me=F._init,ot(U,O,me(F._payload),te)}if(mr(F))return ue(U,O,F,te);if(pe(F))return ce(U,O,F,te);Eu(U,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,O!==null&&O.tag===6?(l(U,O.sibling),O=f(O,F),O.return=U,U=O):(l(U,O),O=Fd(F,U.mode,te),O.return=U,U=O),E(U)):l(U,O)}return ot}var go=Xm(!0),Ym=Xm(!1),Da={},rr=ei(Da),ba=ei(Da),La=ei(Da);function as(r){if(r===Da)throw Error(t(174));return r}function rd(r,s){switch(We(La,s),We(ba,r),We(rr,Da),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ft(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=ft(s,r)}Ge(rr),We(rr,s)}function yo(){Ge(rr),Ge(ba),Ge(La)}function Jm(r){as(La.current);var s=as(rr.current),l=ft(s,r.type);s!==l&&(We(ba,r),We(rr,l))}function id(r){ba.current===r&&(Ge(rr),Ge(ba))}var Je=ei(0);function wu(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var sd=[];function od(){for(var r=0;r<sd.length;r++)sd[r]._workInProgressVersionPrimary=null;sd.length=0}var Tu=ne.ReactCurrentDispatcher,ad=ne.ReactCurrentBatchConfig,ls=0,Ze=null,mt=null,wt=null,Iu=!1,Va=!1,Ma=0,eT=0;function Vt(){throw Error(t(321))}function ld(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!Mn(r[l],s[l]))return!1;return!0}function ud(r,s,l,h,f,g){if(ls=g,Ze=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Tu.current=r===null||r.memoizedState===null?iT:sT,r=l(h,f),Va){g=0;do{if(Va=!1,Ma=0,25<=g)throw Error(t(301));g+=1,wt=mt=null,s.updateQueue=null,Tu.current=oT,r=l(h,f)}while(Va)}if(Tu.current=Au,s=mt!==null&&mt.next!==null,ls=0,wt=mt=Ze=null,Iu=!1,s)throw Error(t(300));return r}function cd(){var r=Ma!==0;return Ma=0,r}function ir(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ze.memoizedState=wt=r:wt=wt.next=r,wt}function Sn(){if(mt===null){var r=Ze.alternate;r=r!==null?r.memoizedState:null}else r=mt.next;var s=wt===null?Ze.memoizedState:wt.next;if(s!==null)wt=s,mt=r;else{if(r===null)throw Error(t(310));mt=r,r={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},wt===null?Ze.memoizedState=wt=r:wt=wt.next=r}return wt}function Ua(r,s){return typeof s=="function"?s(r):s}function hd(r){var s=Sn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var h=mt,f=h.baseQueue,g=l.pending;if(g!==null){if(f!==null){var E=f.next;f.next=g.next,g.next=E}h.baseQueue=f=g,l.pending=null}if(f!==null){g=f.next,h=h.baseState;var R=E=null,k=null,j=g;do{var Q=j.lane;if((ls&Q)===Q)k!==null&&(k=k.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),h=j.hasEagerState?j.eagerState:r(h,j.action);else{var J={lane:Q,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};k===null?(R=k=J,E=h):k=k.next=J,Ze.lanes|=Q,us|=Q}j=j.next}while(j!==null&&j!==g);k===null?E=h:k.next=R,Mn(h,s.memoizedState)||(en=!0),s.memoizedState=h,s.baseState=E,s.baseQueue=k,l.lastRenderedState=h}if(r=l.interleaved,r!==null){f=r;do g=f.lane,Ze.lanes|=g,us|=g,f=f.next;while(f!==r)}else f===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function dd(r){var s=Sn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var h=l.dispatch,f=l.pending,g=s.memoizedState;if(f!==null){l.pending=null;var E=f=f.next;do g=r(g,E.action),E=E.next;while(E!==f);Mn(g,s.memoizedState)||(en=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,h]}function Zm(){}function eg(r,s){var l=Ze,h=Sn(),f=s(),g=!Mn(h.memoizedState,f);if(g&&(h.memoizedState=f,en=!0),h=h.queue,fd(rg.bind(null,l,h,r),[r]),h.getSnapshot!==s||g||wt!==null&&wt.memoizedState.tag&1){if(l.flags|=2048,Fa(9,ng.bind(null,l,h,f,s),void 0,null),Tt===null)throw Error(t(349));(ls&30)!==0||tg(l,s,f)}return f}function tg(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function ng(r,s,l,h){s.value=l,s.getSnapshot=h,ig(s)&&sg(r)}function rg(r,s,l){return l(function(){ig(s)&&sg(r)})}function ig(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!Mn(r,l)}catch{return!0}}function sg(r){var s=Pr(r,1);s!==null&&zn(s,r,1,-1)}function og(r){var s=ir();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:r},s.queue=r,r=r.dispatch=rT.bind(null,Ze,r),[s.memoizedState,r]}function Fa(r,s,l,h){return r={tag:r,create:s,destroy:l,deps:h,next:null},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.lastEffect=r.next=r):(l=s.lastEffect,l===null?s.lastEffect=r.next=r:(h=l.next,l.next=r,r.next=h,s.lastEffect=r)),r}function ag(){return Sn().memoizedState}function Su(r,s,l,h){var f=ir();Ze.flags|=r,f.memoizedState=Fa(1|s,l,void 0,h===void 0?null:h)}function Ru(r,s,l,h){var f=Sn();h=h===void 0?null:h;var g=void 0;if(mt!==null){var E=mt.memoizedState;if(g=E.destroy,h!==null&&ld(h,E.deps)){f.memoizedState=Fa(s,l,g,h);return}}Ze.flags|=r,f.memoizedState=Fa(1|s,l,g,h)}function lg(r,s){return Su(8390656,8,r,s)}function fd(r,s){return Ru(2048,8,r,s)}function ug(r,s){return Ru(4,2,r,s)}function cg(r,s){return Ru(4,4,r,s)}function hg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function dg(r,s,l){return l=l!=null?l.concat([r]):null,Ru(4,4,hg.bind(null,s,r),l)}function pd(){}function fg(r,s){var l=Sn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&ld(s,h[1])?h[0]:(l.memoizedState=[r,s],r)}function pg(r,s){var l=Sn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&ld(s,h[1])?h[0]:(r=r(),l.memoizedState=[r,s],r)}function mg(r,s,l){return(ls&21)===0?(r.baseState&&(r.baseState=!1,en=!0),r.memoizedState=l):(Mn(l,s)||(l=Yi(),Ze.lanes|=l,us|=l,r.baseState=!0),s)}function tT(r,s){var l=Ne;Ne=l!==0&&4>l?l:4,r(!0);var h=ad.transition;ad.transition={};try{r(!1),s()}finally{Ne=l,ad.transition=h}}function gg(){return Sn().memoizedState}function nT(r,s,l){var h=li(r);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},yg(r))_g(s,l);else if(l=Bm(r,s,l,h),l!==null){var f=qt();zn(l,r,h,f),vg(l,s,h)}}function rT(r,s,l){var h=li(r),f={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(yg(r))_g(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var E=s.lastRenderedState,R=g(E,l);if(f.hasEagerState=!0,f.eagerState=R,Mn(R,E)){var k=s.interleaved;k===null?(f.next=f,Zh(s)):(f.next=k.next,k.next=f),s.interleaved=f;return}}catch{}finally{}l=Bm(r,s,f,h),l!==null&&(f=qt(),zn(l,r,h,f),vg(l,s,h))}}function yg(r){var s=r.alternate;return r===Ze||s!==null&&s===Ze}function _g(r,s){Va=Iu=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function vg(r,s,l){if((l&4194240)!==0){var h=s.lanes;h&=r.pendingLanes,l|=h,s.lanes=l,Kr(r,l)}}var Au={readContext:In,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},iT={readContext:In,useCallback:function(r,s){return ir().memoizedState=[r,s===void 0?null:s],r},useContext:In,useEffect:lg,useImperativeHandle:function(r,s,l){return l=l!=null?l.concat([r]):null,Su(4194308,4,hg.bind(null,s,r),l)},useLayoutEffect:function(r,s){return Su(4194308,4,r,s)},useInsertionEffect:function(r,s){return Su(4,2,r,s)},useMemo:function(r,s){var l=ir();return s=s===void 0?null:s,r=r(),l.memoizedState=[r,s],r},useReducer:function(r,s,l){var h=ir();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=nT.bind(null,Ze,r),[h.memoizedState,r]},useRef:function(r){var s=ir();return r={current:r},s.memoizedState=r},useState:og,useDebugValue:pd,useDeferredValue:function(r){return ir().memoizedState=r},useTransition:function(){var r=og(!1),s=r[0];return r=tT.bind(null,r[1]),ir().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,l){var h=Ze,f=ir();if(Xe){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),Tt===null)throw Error(t(349));(ls&30)!==0||tg(h,s,l)}f.memoizedState=l;var g={value:l,getSnapshot:s};return f.queue=g,lg(rg.bind(null,h,g,r),[r]),h.flags|=2048,Fa(9,ng.bind(null,h,g,l,s),void 0,null),l},useId:function(){var r=ir(),s=Tt.identifierPrefix;if(Xe){var l=Cr,h=Ar;l=(h&~(1<<32-$t(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=Ma++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=eT++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},sT={readContext:In,useCallback:fg,useContext:In,useEffect:fd,useImperativeHandle:dg,useInsertionEffect:ug,useLayoutEffect:cg,useMemo:pg,useReducer:hd,useRef:ag,useState:function(){return hd(Ua)},useDebugValue:pd,useDeferredValue:function(r){var s=Sn();return mg(s,mt.memoizedState,r)},useTransition:function(){var r=hd(Ua)[0],s=Sn().memoizedState;return[r,s]},useMutableSource:Zm,useSyncExternalStore:eg,useId:gg,unstable_isNewReconciler:!1},oT={readContext:In,useCallback:fg,useContext:In,useEffect:fd,useImperativeHandle:dg,useInsertionEffect:ug,useLayoutEffect:cg,useMemo:pg,useReducer:dd,useRef:ag,useState:function(){return dd(Ua)},useDebugValue:pd,useDeferredValue:function(r){var s=Sn();return mt===null?s.memoizedState=r:mg(s,mt.memoizedState,r)},useTransition:function(){var r=dd(Ua)[0],s=Sn().memoizedState;return[r,s]},useMutableSource:Zm,useSyncExternalStore:eg,useId:gg,unstable_isNewReconciler:!1};function _o(r,s){try{var l="",h=s;do l+=Le(h),h=h.return;while(h);var f=l}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function md(r,s,l){return{value:r,source:null,stack:l??null,digest:s??null}}function gd(r,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var aT=typeof WeakMap=="function"?WeakMap:Map;function Eg(r,s,l){l=kr(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){Du||(Du=!0,xd=h),gd(r,s)},l}function wg(r,s,l){l=kr(-1,l),l.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var f=s.value;l.payload=function(){return h(f)},l.callback=function(){gd(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(l.callback=function(){gd(r,s),typeof h!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),l}function Tg(r,s,l){var h=r.pingCache;if(h===null){h=r.pingCache=new aT;var f=new Set;h.set(s,f)}else f=h.get(s),f===void 0&&(f=new Set,h.set(s,f));f.has(l)||(f.add(l),r=wT.bind(null,r,s,l),s.then(r,r))}function Ig(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Sg(r,s,l,h,f){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=kr(-1,1),s.tag=2,ii(l,s,1))),l.lanes|=1),r):(r.flags|=65536,r.lanes=f,r)}var lT=ne.ReactCurrentOwner,en=!1;function Wt(r,s,l,h){s.child=r===null?Ym(s,null,l,h):go(s,r.child,l,h)}function Rg(r,s,l,h,f){l=l.render;var g=s.ref;return mo(s,f),h=ud(r,s,l,h,g,f),l=cd(),r!==null&&!en?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Nr(r,s,f)):(Xe&&l&&Hh(s),s.flags|=1,Wt(r,s,h,f),s.child)}function Ag(r,s,l,h,f){if(r===null){var g=l.type;return typeof g=="function"&&!Ud(g)&&g.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=g,Cg(r,s,g,h,f)):(r=Fu(l.type,null,h,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&f)===0){var E=g.memoizedProps;if(l=l.compare,l=l!==null?l:Ra,l(E,h)&&r.ref===s.ref)return Nr(r,s,f)}return s.flags|=1,r=ci(g,h),r.ref=s.ref,r.return=s,s.child=r}function Cg(r,s,l,h,f){if(r!==null){var g=r.memoizedProps;if(Ra(g,h)&&r.ref===s.ref)if(en=!1,s.pendingProps=h=g,(r.lanes&f)!==0)(r.flags&131072)!==0&&(en=!0);else return s.lanes=r.lanes,Nr(r,s,f)}return yd(r,s,l,h,f)}function Pg(r,s,l){var h=s.pendingProps,f=h.children,g=r!==null?r.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(Eo,pn),pn|=l;else{if((l&1073741824)===0)return r=g!==null?g.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,We(Eo,pn),pn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:l,We(Eo,pn),pn|=h}else g!==null?(h=g.baseLanes|l,s.memoizedState=null):h=l,We(Eo,pn),pn|=h;return Wt(r,s,f,l),s.child}function kg(r,s){var l=s.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function yd(r,s,l,h,f){var g=Zt(l)?rs:Lt.current;return g=uo(s,g),mo(s,f),l=ud(r,s,l,h,g,f),h=cd(),r!==null&&!en?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Nr(r,s,f)):(Xe&&h&&Hh(s),s.flags|=1,Wt(r,s,l,f),s.child)}function Ng(r,s,l,h,f){if(Zt(l)){var g=!0;cu(s)}else g=!1;if(mo(s,f),s.stateNode===null)Pu(r,s),Km(s,l,h),nd(s,l,h,f),h=!0;else if(r===null){var E=s.stateNode,R=s.memoizedProps;E.props=R;var k=E.context,j=l.contextType;typeof j=="object"&&j!==null?j=In(j):(j=Zt(l)?rs:Lt.current,j=uo(s,j));var Q=l.getDerivedStateFromProps,J=typeof Q=="function"||typeof E.getSnapshotBeforeUpdate=="function";J||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(R!==h||k!==j)&&Gm(s,E,h,j),ri=!1;var G=s.memoizedState;E.state=G,_u(s,h,E,f),k=s.memoizedState,R!==h||G!==k||Jt.current||ri?(typeof Q=="function"&&(td(s,l,Q,h),k=s.memoizedState),(R=ri||qm(s,l,R,h,G,k,j))?(J||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=k),E.props=h,E.state=k,E.context=j,h=R):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{E=s.stateNode,zm(r,s),R=s.memoizedProps,j=s.type===s.elementType?R:Fn(s.type,R),E.props=j,J=s.pendingProps,G=E.context,k=l.contextType,typeof k=="object"&&k!==null?k=In(k):(k=Zt(l)?rs:Lt.current,k=uo(s,k));var se=l.getDerivedStateFromProps;(Q=typeof se=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(R!==J||G!==k)&&Gm(s,E,h,k),ri=!1,G=s.memoizedState,E.state=G,_u(s,h,E,f);var ue=s.memoizedState;R!==J||G!==ue||Jt.current||ri?(typeof se=="function"&&(td(s,l,se,h),ue=s.memoizedState),(j=ri||qm(s,l,j,h,G,ue,k)||!1)?(Q||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(h,ue,k),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(h,ue,k)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||R===r.memoizedProps&&G===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&G===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=ue),E.props=h,E.state=ue,E.context=k,h=j):(typeof E.componentDidUpdate!="function"||R===r.memoizedProps&&G===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&G===r.memoizedState||(s.flags|=1024),h=!1)}return _d(r,s,l,h,g,f)}function _d(r,s,l,h,f,g){kg(r,s);var E=(s.flags&128)!==0;if(!h&&!E)return f&&bm(s,l,!1),Nr(r,s,g);h=s.stateNode,lT.current=s;var R=E&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&E?(s.child=go(s,r.child,null,g),s.child=go(s,null,R,g)):Wt(r,s,R,g),s.memoizedState=h.state,f&&bm(s,l,!0),s.child}function xg(r){var s=r.stateNode;s.pendingContext?Om(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Om(r,s.context,!1),rd(r,s.containerInfo)}function Og(r,s,l,h,f){return fo(),Gh(f),s.flags|=256,Wt(r,s,l,h),s.child}var vd={dehydrated:null,treeContext:null,retryLane:0};function Ed(r){return{baseLanes:r,cachePool:null,transitions:null}}function Dg(r,s,l){var h=s.pendingProps,f=Je.current,g=!1,E=(s.flags&128)!==0,R;if((R=E)||(R=r!==null&&r.memoizedState===null?!1:(f&2)!==0),R?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),We(Je,f&1),r===null)return Kh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(E=h.children,r=h.fallback,g?(h=s.mode,g=s.child,E={mode:"hidden",children:E},(h&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=ju(E,h,0,null),r=fs(r,h,l,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=Ed(l),s.memoizedState=vd,r):wd(s,E));if(f=r.memoizedState,f!==null&&(R=f.dehydrated,R!==null))return uT(r,s,E,h,R,f,l);if(g){g=h.fallback,E=s.mode,f=r.child,R=f.sibling;var k={mode:"hidden",children:h.children};return(E&1)===0&&s.child!==f?(h=s.child,h.childLanes=0,h.pendingProps=k,s.deletions=null):(h=ci(f,k),h.subtreeFlags=f.subtreeFlags&14680064),R!==null?g=ci(R,g):(g=fs(g,E,l,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,E=r.child.memoizedState,E=E===null?Ed(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=r.childLanes&~l,s.memoizedState=vd,h}return g=r.child,r=g.sibling,h=ci(g,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=l),h.return=s,h.sibling=null,r!==null&&(l=s.deletions,l===null?(s.deletions=[r],s.flags|=16):l.push(r)),s.child=h,s.memoizedState=null,h}function wd(r,s){return s=ju({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Cu(r,s,l,h){return h!==null&&Gh(h),go(s,r.child,null,l),r=wd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function uT(r,s,l,h,f,g,E){if(l)return s.flags&256?(s.flags&=-257,h=md(Error(t(422))),Cu(r,s,E,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=h.fallback,f=s.mode,h=ju({mode:"visible",children:h.children},f,0,null),g=fs(g,f,E,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,(s.mode&1)!==0&&go(s,r.child,null,E),s.child.memoizedState=Ed(E),s.memoizedState=vd,g);if((s.mode&1)===0)return Cu(r,s,E,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var R=h.dgst;return h=R,g=Error(t(419)),h=md(g,h,void 0),Cu(r,s,E,h)}if(R=(E&r.childLanes)!==0,en||R){if(h=Tt,h!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(h.suspendedLanes|E))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Pr(r,f),zn(h,r,f,-1))}return Md(),h=md(Error(t(421))),Cu(r,s,E,h)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=TT.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,fn=Zr(f.nextSibling),dn=s,Xe=!0,Un=null,r!==null&&(wn[Tn++]=Ar,wn[Tn++]=Cr,wn[Tn++]=is,Ar=r.id,Cr=r.overflow,is=s),s=wd(s,h.children),s.flags|=4096,s)}function bg(r,s,l){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),Jh(r.return,s,l)}function Td(r,s,l,h,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=l,g.tailMode=f)}function Lg(r,s,l){var h=s.pendingProps,f=h.revealOrder,g=h.tail;if(Wt(r,s,h.children,l),h=Je.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&bg(r,l,s);else if(r.tag===19)bg(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(We(Je,h),(s.mode&1)===0)s.memoizedState=null;else switch(f){case"forwards":for(l=s.child,f=null;l!==null;)r=l.alternate,r!==null&&wu(r)===null&&(f=l),l=l.sibling;l=f,l===null?(f=s.child,s.child=null):(f=l.sibling,l.sibling=null),Td(s,!1,f,l,g);break;case"backwards":for(l=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&wu(r)===null){s.child=f;break}r=f.sibling,f.sibling=l,l=f,f=r}Td(s,!0,l,null,g);break;case"together":Td(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Pu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Nr(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),us|=s.lanes,(l&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,l=ci(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=ci(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function cT(r,s,l){switch(s.tag){case 3:xg(s),fo();break;case 5:Jm(s);break;case 1:Zt(s.type)&&cu(s);break;case 4:rd(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,f=s.memoizedProps.value;We(mu,h._currentValue),h._currentValue=f;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(We(Je,Je.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?Dg(r,s,l):(We(Je,Je.current&1),r=Nr(r,s,l),r!==null?r.sibling:null);We(Je,Je.current&1);break;case 19:if(h=(l&s.childLanes)!==0,(r.flags&128)!==0){if(h)return Lg(r,s,l);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),We(Je,Je.current),h)break;return null;case 22:case 23:return s.lanes=0,Pg(r,s,l)}return Nr(r,s,l)}var Vg,Id,Mg,Ug;Vg=function(r,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Id=function(){},Mg=function(r,s,l,h){var f=r.memoizedProps;if(f!==h){r=s.stateNode,as(rr.current);var g=null;switch(l){case"input":f=ji(r,f),h=ji(r,h),g=[];break;case"select":f=P({},f,{value:void 0}),h=P({},h,{value:void 0}),g=[];break;case"textarea":f=ea(r,f),h=ea(r,h),g=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=au)}oa(l,h);var E;l=null;for(j in f)if(!h.hasOwnProperty(j)&&f.hasOwnProperty(j)&&f[j]!=null)if(j==="style"){var R=f[j];for(E in R)R.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?g||(g=[]):(g=g||[]).push(j,null));for(j in h){var k=h[j];if(R=f!=null?f[j]:void 0,h.hasOwnProperty(j)&&k!==R&&(k!=null||R!=null))if(j==="style")if(R){for(E in R)!R.hasOwnProperty(E)||k&&k.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in k)k.hasOwnProperty(E)&&R[E]!==k[E]&&(l||(l={}),l[E]=k[E])}else l||(g||(g=[]),g.push(j,l)),l=k;else j==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,R=R?R.__html:void 0,k!=null&&R!==k&&(g=g||[]).push(j,k)):j==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push(j,""+k):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(k!=null&&j==="onScroll"&&Ke("scroll",r),g||R===k||(g=[])):(g=g||[]).push(j,k))}l&&(g=g||[]).push("style",l);var j=g;(s.updateQueue=j)&&(s.flags|=4)}},Ug=function(r,s,l,h){l!==h&&(s.flags|=4)};function ja(r,s){if(!Xe)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Mt(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,h=0;if(s)for(var f=r.child;f!==null;)l|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)l|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=h,r.childLanes=l,s}function hT(r,s,l){var h=s.pendingProps;switch(Wh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(s),null;case 1:return Zt(s.type)&&uu(),Mt(s),null;case 3:return h=s.stateNode,yo(),Ge(Jt),Ge(Lt),od(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(pu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Un!==null&&(bd(Un),Un=null))),Id(r,s),Mt(s),null;case 5:id(s);var f=as(La.current);if(l=s.type,r!==null&&s.stateNode!=null)Mg(r,s,l,h,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Mt(s),null}if(r=as(rr.current),pu(s)){h=s.stateNode,l=s.type;var g=s.memoizedProps;switch(h[nr]=s,h[Na]=g,r=(s.mode&1)!==0,l){case"dialog":Ke("cancel",h),Ke("close",h);break;case"iframe":case"object":case"embed":Ke("load",h);break;case"video":case"audio":for(f=0;f<Ca.length;f++)Ke(Ca[f],h);break;case"source":Ke("error",h);break;case"img":case"image":case"link":Ke("error",h),Ke("load",h);break;case"details":Ke("toggle",h);break;case"input":xs(h,g),Ke("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},Ke("invalid",h);break;case"textarea":Ds(h,g),Ke("invalid",h)}oa(l,g),f=null;for(var E in g)if(g.hasOwnProperty(E)){var R=g[E];E==="children"?typeof R=="string"?h.textContent!==R&&(g.suppressHydrationWarning!==!0&&ou(h.textContent,R,r),f=["children",R]):typeof R=="number"&&h.textContent!==""+R&&(g.suppressHydrationWarning!==!0&&ou(h.textContent,R,r),f=["children",""+R]):o.hasOwnProperty(E)&&R!=null&&E==="onScroll"&&Ke("scroll",h)}switch(l){case"input":pr(h),Ol(h,g,!0);break;case"textarea":pr(h),ta(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=au)}h=f,s.updateQueue=h,h!==null&&(s.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=dt(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=E.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=E.createElement(l,{is:h.is}):(r=E.createElement(l),l==="select"&&(E=r,h.multiple?E.multiple=!0:h.size&&(E.size=h.size))):r=E.createElementNS(r,l),r[nr]=s,r[Na]=h,Vg(r,s,!1,!1),s.stateNode=r;e:{switch(E=aa(l,h),l){case"dialog":Ke("cancel",r),Ke("close",r),f=h;break;case"iframe":case"object":case"embed":Ke("load",r),f=h;break;case"video":case"audio":for(f=0;f<Ca.length;f++)Ke(Ca[f],r);f=h;break;case"source":Ke("error",r),f=h;break;case"img":case"image":case"link":Ke("error",r),Ke("load",r),f=h;break;case"details":Ke("toggle",r),f=h;break;case"input":xs(r,h),f=ji(r,h),Ke("invalid",r);break;case"option":f=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},f=P({},h,{value:void 0}),Ke("invalid",r);break;case"textarea":Ds(r,h),f=ea(r,h),Ke("invalid",r);break;default:f=h}oa(l,f),R=f;for(g in R)if(R.hasOwnProperty(g)){var k=R[g];g==="style"?ia(r,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&na(r,k)):g==="children"?typeof k=="string"?(l!=="textarea"||k!=="")&&zr(r,k):typeof k=="number"&&zr(r,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?k!=null&&g==="onScroll"&&Ke("scroll",r):k!=null&&K(r,g,k,E))}switch(l){case"input":pr(r),Ol(r,h,!1);break;case"textarea":pr(r),ta(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Me(h.value));break;case"select":r.multiple=!!h.multiple,g=h.value,g!=null?gr(r,!!h.multiple,g,!1):h.defaultValue!=null&&gr(r,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=au)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Mt(s),null;case 6:if(r&&s.stateNode!=null)Ug(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(l=as(La.current),as(rr.current),pu(s)){if(h=s.stateNode,l=s.memoizedProps,h[nr]=s,(g=h.nodeValue!==l)&&(r=dn,r!==null))switch(r.tag){case 3:ou(h.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&ou(h.nodeValue,l,(r.mode&1)!==0)}g&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[nr]=s,s.stateNode=h}return Mt(s),null;case 13:if(Ge(Je),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Xe&&fn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)jm(),fo(),s.flags|=98560,g=!1;else if(g=pu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[nr]=s}else fo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Mt(s),g=!1}else Un!==null&&(bd(Un),Un=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Je.current&1)!==0?gt===0&&(gt=3):Md())),s.updateQueue!==null&&(s.flags|=4),Mt(s),null);case 4:return yo(),Id(r,s),r===null&&Pa(s.stateNode.containerInfo),Mt(s),null;case 10:return Yh(s.type._context),Mt(s),null;case 17:return Zt(s.type)&&uu(),Mt(s),null;case 19:if(Ge(Je),g=s.memoizedState,g===null)return Mt(s),null;if(h=(s.flags&128)!==0,E=g.rendering,E===null)if(h)ja(g,!1);else{if(gt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(E=wu(r),E!==null){for(s.flags|=128,ja(g,!1),h=E.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)g=l,r=h,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,r=E.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return We(Je,Je.current&1|2),s.child}r=r.sibling}g.tail!==null&&He()>wo&&(s.flags|=128,h=!0,ja(g,!1),s.lanes=4194304)}else{if(!h)if(r=wu(E),r!==null){if(s.flags|=128,h=!0,l=r.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),ja(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!Xe)return Mt(s),null}else 2*He()-g.renderingStartTime>wo&&l!==1073741824&&(s.flags|=128,h=!0,ja(g,!1),s.lanes=4194304);g.isBackwards?(E.sibling=s.child,s.child=E):(l=g.last,l!==null?l.sibling=E:s.child=E,g.last=E)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=He(),s.sibling=null,l=Je.current,We(Je,h?l&1|2:l&1),s):(Mt(s),null);case 22:case 23:return Vd(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(pn&1073741824)!==0&&(Mt(s),s.subtreeFlags&6&&(s.flags|=8192)):Mt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function dT(r,s){switch(Wh(s),s.tag){case 1:return Zt(s.type)&&uu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return yo(),Ge(Jt),Ge(Lt),od(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return id(s),null;case 13:if(Ge(Je),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));fo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ge(Je),null;case 4:return yo(),null;case 10:return Yh(s.type._context),null;case 22:case 23:return Vd(),null;case 24:return null;default:return null}}var ku=!1,Ut=!1,fT=typeof WeakSet=="function"?WeakSet:Set,ae=null;function vo(r,s){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){tt(r,s,h)}else l.current=null}function Sd(r,s,l){try{l()}catch(h){tt(r,s,h)}}var Fg=!1;function pT(r,s){if(Vh=Xr,r=gm(),Ph(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var f=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var E=0,R=-1,k=-1,j=0,Q=0,J=r,G=null;t:for(;;){for(var se;J!==l||f!==0&&J.nodeType!==3||(R=E+f),J!==g||h!==0&&J.nodeType!==3||(k=E+h),J.nodeType===3&&(E+=J.nodeValue.length),(se=J.firstChild)!==null;)G=J,J=se;for(;;){if(J===r)break t;if(G===l&&++j===f&&(R=E),G===g&&++Q===h&&(k=E),(se=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=se}l=R===-1||k===-1?null:{start:R,end:k}}else l=null}l=l||{start:0,end:0}}else l=null;for(Mh={focusedElem:r,selectionRange:l},Xr=!1,ae=s;ae!==null;)if(s=ae,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ae=r;else for(;ae!==null;){s=ae;try{var ue=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,ot=ue.memoizedState,U=s.stateNode,O=U.getSnapshotBeforeUpdate(s.elementType===s.type?ce:Fn(s.type,ce),ot);U.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var F=s.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){tt(s,s.return,te)}if(r=s.sibling,r!==null){r.return=s.return,ae=r;break}ae=s.return}return ue=Fg,Fg=!1,ue}function Ba(r,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&Sd(s,l,g)}f=f.next}while(f!==h)}}function Nu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&r)===r){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function Rd(r){var s=r.ref;if(s!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof s=="function"?s(r):s.current=r}}function jg(r){var s=r.alternate;s!==null&&(r.alternate=null,jg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[nr],delete s[Na],delete s[Bh],delete s[X0],delete s[Y0])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Bg(r){return r.tag===5||r.tag===3||r.tag===4}function zg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Bg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Ad(r,s,l){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=au));else if(h!==4&&(r=r.child,r!==null))for(Ad(r,s,l),r=r.sibling;r!==null;)Ad(r,s,l),r=r.sibling}function Cd(r,s,l){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(Cd(r,s,l),r=r.sibling;r!==null;)Cd(r,s,l),r=r.sibling}var Ct=null,jn=!1;function si(r,s,l){for(l=l.child;l!==null;)$g(r,s,l),l=l.sibling}function $g(r,s,l){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Qi,l)}catch{}switch(l.tag){case 5:Ut||vo(l,s);case 6:var h=Ct,f=jn;Ct=null,si(r,s,l),Ct=h,jn=f,Ct!==null&&(jn?(r=Ct,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):Ct.removeChild(l.stateNode));break;case 18:Ct!==null&&(jn?(r=Ct,l=l.stateNode,r.nodeType===8?jh(r.parentNode,l):r.nodeType===1&&jh(r,l),Ln(r)):jh(Ct,l.stateNode));break;case 4:h=Ct,f=jn,Ct=l.stateNode.containerInfo,jn=!0,si(r,s,l),Ct=h,jn=f;break;case 0:case 11:case 14:case 15:if(!Ut&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var g=f,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&Sd(l,s,E),f=f.next}while(f!==h)}si(r,s,l);break;case 1:if(!Ut&&(vo(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(R){tt(l,s,R)}si(r,s,l);break;case 21:si(r,s,l);break;case 22:l.mode&1?(Ut=(h=Ut)||l.memoizedState!==null,si(r,s,l),Ut=h):si(r,s,l);break;default:si(r,s,l)}}function Hg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new fT),s.forEach(function(h){var f=IT.bind(null,r,h);l.has(h)||(l.add(h),h.then(f,f))})}}function Bn(r,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var f=l[h];try{var g=r,E=s,R=E;e:for(;R!==null;){switch(R.tag){case 5:Ct=R.stateNode,jn=!1;break e;case 3:Ct=R.stateNode.containerInfo,jn=!0;break e;case 4:Ct=R.stateNode.containerInfo,jn=!0;break e}R=R.return}if(Ct===null)throw Error(t(160));$g(g,E,f),Ct=null,jn=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(j){tt(f,s,j)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Wg(s,r),s=s.sibling}function Wg(r,s){var l=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Bn(s,r),sr(r),h&4){try{Ba(3,r,r.return),Nu(3,r)}catch(ce){tt(r,r.return,ce)}try{Ba(5,r,r.return)}catch(ce){tt(r,r.return,ce)}}break;case 1:Bn(s,r),sr(r),h&512&&l!==null&&vo(l,l.return);break;case 5:if(Bn(s,r),sr(r),h&512&&l!==null&&vo(l,l.return),r.flags&32){var f=r.stateNode;try{zr(f,"")}catch(ce){tt(r,r.return,ce)}}if(h&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,E=l!==null?l.memoizedProps:g,R=r.type,k=r.updateQueue;if(r.updateQueue=null,k!==null)try{R==="input"&&g.type==="radio"&&g.name!=null&&Jo(f,g),aa(R,E);var j=aa(R,g);for(E=0;E<k.length;E+=2){var Q=k[E],J=k[E+1];Q==="style"?ia(f,J):Q==="dangerouslySetInnerHTML"?na(f,J):Q==="children"?zr(f,J):K(f,Q,J,j)}switch(R){case"input":Zo(f,g);break;case"textarea":bs(f,g);break;case"select":var G=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var se=g.value;se!=null?gr(f,!!g.multiple,se,!1):G!==!!g.multiple&&(g.defaultValue!=null?gr(f,!!g.multiple,g.defaultValue,!0):gr(f,!!g.multiple,g.multiple?[]:"",!1))}f[Na]=g}catch(ce){tt(r,r.return,ce)}}break;case 6:if(Bn(s,r),sr(r),h&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(ce){tt(r,r.return,ce)}}break;case 3:if(Bn(s,r),sr(r),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Ln(s.containerInfo)}catch(ce){tt(r,r.return,ce)}break;case 4:Bn(s,r),sr(r);break;case 13:Bn(s,r),sr(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Nd=He())),h&4&&Hg(r);break;case 22:if(Q=l!==null&&l.memoizedState!==null,r.mode&1?(Ut=(j=Ut)||Q,Bn(s,r),Ut=j):Bn(s,r),sr(r),h&8192){if(j=r.memoizedState!==null,(r.stateNode.isHidden=j)&&!Q&&(r.mode&1)!==0)for(ae=r,Q=r.child;Q!==null;){for(J=ae=Q;ae!==null;){switch(G=ae,se=G.child,G.tag){case 0:case 11:case 14:case 15:Ba(4,G,G.return);break;case 1:vo(G,G.return);var ue=G.stateNode;if(typeof ue.componentWillUnmount=="function"){h=G,l=G.return;try{s=h,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(ce){tt(h,l,ce)}}break;case 5:vo(G,G.return);break;case 22:if(G.memoizedState!==null){Gg(J);continue}}se!==null?(se.return=G,ae=se):Gg(J)}Q=Q.sibling}e:for(Q=null,J=r;;){if(J.tag===5){if(Q===null){Q=J;try{f=J.stateNode,j?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(R=J.stateNode,k=J.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null,R.style.display=ra("display",E))}catch(ce){tt(r,r.return,ce)}}}else if(J.tag===6){if(Q===null)try{J.stateNode.nodeValue=j?"":J.memoizedProps}catch(ce){tt(r,r.return,ce)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===r)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===r)break e;for(;J.sibling===null;){if(J.return===null||J.return===r)break e;Q===J&&(Q=null),J=J.return}Q===J&&(Q=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Bn(s,r),sr(r),h&4&&Hg(r);break;case 21:break;default:Bn(s,r),sr(r)}}function sr(r){var s=r.flags;if(s&2){try{e:{for(var l=r.return;l!==null;){if(Bg(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&(zr(f,""),h.flags&=-33);var g=zg(r);Cd(r,g,f);break;case 3:case 4:var E=h.stateNode.containerInfo,R=zg(r);Ad(r,R,E);break;default:throw Error(t(161))}}catch(k){tt(r,r.return,k)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function mT(r,s,l){ae=r,qg(r)}function qg(r,s,l){for(var h=(r.mode&1)!==0;ae!==null;){var f=ae,g=f.child;if(f.tag===22&&h){var E=f.memoizedState!==null||ku;if(!E){var R=f.alternate,k=R!==null&&R.memoizedState!==null||Ut;R=ku;var j=Ut;if(ku=E,(Ut=k)&&!j)for(ae=f;ae!==null;)E=ae,k=E.child,E.tag===22&&E.memoizedState!==null?Qg(f):k!==null?(k.return=E,ae=k):Qg(f);for(;g!==null;)ae=g,qg(g),g=g.sibling;ae=f,ku=R,Ut=j}Kg(r)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,ae=g):Kg(r)}}function Kg(r){for(;ae!==null;){var s=ae;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ut||Nu(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Ut)if(l===null)h.componentDidMount();else{var f=s.elementType===s.type?l.memoizedProps:Fn(s.type,l.memoizedProps);h.componentDidUpdate(f,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Hm(s,g,h);break;case 3:var E=s.updateQueue;if(E!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Hm(s,E,l)}break;case 5:var R=s.stateNode;if(l===null&&s.flags&4){l=R;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&l.focus();break;case"img":k.src&&(l.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var j=s.alternate;if(j!==null){var Q=j.memoizedState;if(Q!==null){var J=Q.dehydrated;J!==null&&Ln(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||s.flags&512&&Rd(s)}catch(G){tt(s,s.return,G)}}if(s===r){ae=null;break}if(l=s.sibling,l!==null){l.return=s.return,ae=l;break}ae=s.return}}function Gg(r){for(;ae!==null;){var s=ae;if(s===r){ae=null;break}var l=s.sibling;if(l!==null){l.return=s.return,ae=l;break}ae=s.return}}function Qg(r){for(;ae!==null;){var s=ae;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Nu(4,s)}catch(k){tt(s,l,k)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var f=s.return;try{h.componentDidMount()}catch(k){tt(s,f,k)}}var g=s.return;try{Rd(s)}catch(k){tt(s,g,k)}break;case 5:var E=s.return;try{Rd(s)}catch(k){tt(s,E,k)}}}catch(k){tt(s,s.return,k)}if(s===r){ae=null;break}var R=s.sibling;if(R!==null){R.return=s.return,ae=R;break}ae=s.return}}var gT=Math.ceil,xu=ne.ReactCurrentDispatcher,Pd=ne.ReactCurrentOwner,Rn=ne.ReactCurrentBatchConfig,be=0,Tt=null,ct=null,Pt=0,pn=0,Eo=ei(0),gt=0,za=null,us=0,Ou=0,kd=0,$a=null,tn=null,Nd=0,wo=1/0,xr=null,Du=!1,xd=null,oi=null,bu=!1,ai=null,Lu=0,Ha=0,Od=null,Vu=-1,Mu=0;function qt(){return(be&6)!==0?He():Vu!==-1?Vu:Vu=He()}function li(r){return(r.mode&1)===0?1:(be&2)!==0&&Pt!==0?Pt&-Pt:Z0.transition!==null?(Mu===0&&(Mu=Yi()),Mu):(r=Ne,r!==0||(r=window.event,r=r===void 0?16:_a(r.type)),r)}function zn(r,s,l,h){if(50<Ha)throw Ha=0,Od=null,Error(t(185));qr(r,l,h),((be&2)===0||r!==Tt)&&(r===Tt&&((be&2)===0&&(Ou|=l),gt===4&&ui(r,Pt)),nn(r,h),l===1&&be===0&&(s.mode&1)===0&&(wo=He()+500,hu&&ni()))}function nn(r,s){var l=r.callbackNode;vr(r,s);var h=Xi(r,r===Tt?Pt:0);if(h===0)l!==null&&fa(l),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(l!=null&&fa(l),s===1)r.tag===0?J0(Yg.bind(null,r)):Lm(Yg.bind(null,r)),G0(function(){(be&6)===0&&ni()}),l=null;else{switch(Gr(h)){case 1:l=Gi;break;case 4:l=$r;break;case 16:l=_n;break;case 536870912:l=Ml;break;default:l=_n}l=sy(l,Xg.bind(null,r))}r.callbackPriority=s,r.callbackNode=l}}function Xg(r,s){if(Vu=-1,Mu=0,(be&6)!==0)throw Error(t(327));var l=r.callbackNode;if(To()&&r.callbackNode!==l)return null;var h=Xi(r,r===Tt?Pt:0);if(h===0)return null;if((h&30)!==0||(h&r.expiredLanes)!==0||s)s=Uu(r,h);else{s=h;var f=be;be|=2;var g=Zg();(Tt!==r||Pt!==s)&&(xr=null,wo=He()+500,hs(r,s));do try{vT();break}catch(R){Jg(r,R)}while(!0);Xh(),xu.current=g,be=f,ct!==null?s=0:(Tt=null,Pt=0,s=gt)}if(s!==0){if(s===2&&(f=un(r),f!==0&&(h=f,s=Dd(r,f))),s===1)throw l=za,hs(r,0),ui(r,h),nn(r,He()),l;if(s===6)ui(r,h);else{if(f=r.current.alternate,(h&30)===0&&!yT(f)&&(s=Uu(r,h),s===2&&(g=un(r),g!==0&&(h=g,s=Dd(r,g))),s===1))throw l=za,hs(r,0),ui(r,h),nn(r,He()),l;switch(r.finishedWork=f,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:ds(r,tn,xr);break;case 3:if(ui(r,h),(h&130023424)===h&&(s=Nd+500-He(),10<s)){if(Xi(r,0)!==0)break;if(f=r.suspendedLanes,(f&h)!==h){qt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=Fh(ds.bind(null,r,tn,xr),s);break}ds(r,tn,xr);break;case 4:if(ui(r,h),(h&4194240)===h)break;for(s=r.eventTimes,f=-1;0<h;){var E=31-$t(h);g=1<<E,E=s[E],E>f&&(f=E),h&=~g}if(h=f,h=He()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*gT(h/1960))-h,10<h){r.timeoutHandle=Fh(ds.bind(null,r,tn,xr),h);break}ds(r,tn,xr);break;case 5:ds(r,tn,xr);break;default:throw Error(t(329))}}}return nn(r,He()),r.callbackNode===l?Xg.bind(null,r):null}function Dd(r,s){var l=$a;return r.current.memoizedState.isDehydrated&&(hs(r,s).flags|=256),r=Uu(r,s),r!==2&&(s=tn,tn=l,s!==null&&bd(s)),r}function bd(r){tn===null?tn=r:tn.push.apply(tn,r)}function yT(r){for(var s=r;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var f=l[h],g=f.getSnapshot;f=f.value;try{if(!Mn(g(),f))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ui(r,s){for(s&=~kd,s&=~Ou,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var l=31-$t(s),h=1<<l;r[l]=-1,s&=~h}}function Yg(r){if((be&6)!==0)throw Error(t(327));To();var s=Xi(r,0);if((s&1)===0)return nn(r,He()),null;var l=Uu(r,s);if(r.tag!==0&&l===2){var h=un(r);h!==0&&(s=h,l=Dd(r,h))}if(l===1)throw l=za,hs(r,0),ui(r,s),nn(r,He()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ds(r,tn,xr),nn(r,He()),null}function Ld(r,s){var l=be;be|=1;try{return r(s)}finally{be=l,be===0&&(wo=He()+500,hu&&ni())}}function cs(r){ai!==null&&ai.tag===0&&(be&6)===0&&To();var s=be;be|=1;var l=Rn.transition,h=Ne;try{if(Rn.transition=null,Ne=1,r)return r()}finally{Ne=h,Rn.transition=l,be=s,(be&6)===0&&ni()}}function Vd(){pn=Eo.current,Ge(Eo)}function hs(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,K0(l)),ct!==null)for(l=ct.return;l!==null;){var h=l;switch(Wh(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&uu();break;case 3:yo(),Ge(Jt),Ge(Lt),od();break;case 5:id(h);break;case 4:yo();break;case 13:Ge(Je);break;case 19:Ge(Je);break;case 10:Yh(h.type._context);break;case 22:case 23:Vd()}l=l.return}if(Tt=r,ct=r=ci(r.current,null),Pt=pn=s,gt=0,za=null,kd=Ou=us=0,tn=$a=null,os!==null){for(s=0;s<os.length;s++)if(l=os[s],h=l.interleaved,h!==null){l.interleaved=null;var f=h.next,g=l.pending;if(g!==null){var E=g.next;g.next=f,h.next=E}l.pending=h}os=null}return r}function Jg(r,s){do{var l=ct;try{if(Xh(),Tu.current=Au,Iu){for(var h=Ze.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}Iu=!1}if(ls=0,wt=mt=Ze=null,Va=!1,Ma=0,Pd.current=null,l===null||l.return===null){gt=1,za=s,ct=null;break}e:{var g=r,E=l.return,R=l,k=s;if(s=Pt,R.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var j=k,Q=R,J=Q.tag;if((Q.mode&1)===0&&(J===0||J===11||J===15)){var G=Q.alternate;G?(Q.updateQueue=G.updateQueue,Q.memoizedState=G.memoizedState,Q.lanes=G.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var se=Ig(E);if(se!==null){se.flags&=-257,Sg(se,E,R,g,s),se.mode&1&&Tg(g,j,s),s=se,k=j;var ue=s.updateQueue;if(ue===null){var ce=new Set;ce.add(k),s.updateQueue=ce}else ue.add(k);break e}else{if((s&1)===0){Tg(g,j,s),Md();break e}k=Error(t(426))}}else if(Xe&&R.mode&1){var ot=Ig(E);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),Sg(ot,E,R,g,s),Gh(_o(k,R));break e}}g=k=_o(k,R),gt!==4&&(gt=2),$a===null?$a=[g]:$a.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var U=Eg(g,k,s);$m(g,U);break e;case 1:R=k;var O=g.type,F=g.stateNode;if((g.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(oi===null||!oi.has(F)))){g.flags|=65536,s&=-s,g.lanes|=s;var te=wg(g,R,s);$m(g,te);break e}}g=g.return}while(g!==null)}ty(l)}catch(he){s=he,ct===l&&l!==null&&(ct=l=l.return);continue}break}while(!0)}function Zg(){var r=xu.current;return xu.current=Au,r===null?Au:r}function Md(){(gt===0||gt===3||gt===2)&&(gt=4),Tt===null||(us&268435455)===0&&(Ou&268435455)===0||ui(Tt,Pt)}function Uu(r,s){var l=be;be|=2;var h=Zg();(Tt!==r||Pt!==s)&&(xr=null,hs(r,s));do try{_T();break}catch(f){Jg(r,f)}while(!0);if(Xh(),be=l,xu.current=h,ct!==null)throw Error(t(261));return Tt=null,Pt=0,gt}function _T(){for(;ct!==null;)ey(ct)}function vT(){for(;ct!==null&&!Ll();)ey(ct)}function ey(r){var s=iy(r.alternate,r,pn);r.memoizedProps=r.pendingProps,s===null?ty(r):ct=s,Pd.current=null}function ty(r){var s=r;do{var l=s.alternate;if(r=s.return,(s.flags&32768)===0){if(l=hT(l,s,pn),l!==null){ct=l;return}}else{if(l=dT(l,s),l!==null){l.flags&=32767,ct=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{gt=6,ct=null;return}}if(s=s.sibling,s!==null){ct=s;return}ct=s=r}while(s!==null);gt===0&&(gt=5)}function ds(r,s,l){var h=Ne,f=Rn.transition;try{Rn.transition=null,Ne=1,ET(r,s,l,h)}finally{Rn.transition=f,Ne=h}return null}function ET(r,s,l,h){do To();while(ai!==null);if((be&6)!==0)throw Error(t(327));l=r.finishedWork;var f=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=l.lanes|l.childLanes;if($e(r,g),r===Tt&&(ct=Tt=null,Pt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||bu||(bu=!0,sy(_n,function(){return To(),null})),g=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||g){g=Rn.transition,Rn.transition=null;var E=Ne;Ne=1;var R=be;be|=4,Pd.current=null,pT(r,l),Wg(l,r),j0(Mh),Xr=!!Vh,Mh=Vh=null,r.current=l,mT(l),Eh(),be=R,Ne=E,Rn.transition=g}else r.current=l;if(bu&&(bu=!1,ai=r,Lu=f),g=r.pendingLanes,g===0&&(oi=null),Ul(l.stateNode),nn(r,He()),s!==null)for(h=r.onRecoverableError,l=0;l<s.length;l++)f=s[l],h(f.value,{componentStack:f.stack,digest:f.digest});if(Du)throw Du=!1,r=xd,xd=null,r;return(Lu&1)!==0&&r.tag!==0&&To(),g=r.pendingLanes,(g&1)!==0?r===Od?Ha++:(Ha=0,Od=r):Ha=0,ni(),null}function To(){if(ai!==null){var r=Gr(Lu),s=Rn.transition,l=Ne;try{if(Rn.transition=null,Ne=16>r?16:r,ai===null)var h=!1;else{if(r=ai,ai=null,Lu=0,(be&6)!==0)throw Error(t(331));var f=be;for(be|=4,ae=r.current;ae!==null;){var g=ae,E=g.child;if((ae.flags&16)!==0){var R=g.deletions;if(R!==null){for(var k=0;k<R.length;k++){var j=R[k];for(ae=j;ae!==null;){var Q=ae;switch(Q.tag){case 0:case 11:case 15:Ba(8,Q,g)}var J=Q.child;if(J!==null)J.return=Q,ae=J;else for(;ae!==null;){Q=ae;var G=Q.sibling,se=Q.return;if(jg(Q),Q===j){ae=null;break}if(G!==null){G.return=se,ae=G;break}ae=se}}}var ue=g.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var ot=ce.sibling;ce.sibling=null,ce=ot}while(ce!==null)}}ae=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,ae=E;else e:for(;ae!==null;){if(g=ae,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ba(9,g,g.return)}var U=g.sibling;if(U!==null){U.return=g.return,ae=U;break e}ae=g.return}}var O=r.current;for(ae=O;ae!==null;){E=ae;var F=E.child;if((E.subtreeFlags&2064)!==0&&F!==null)F.return=E,ae=F;else e:for(E=O;ae!==null;){if(R=ae,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:Nu(9,R)}}catch(he){tt(R,R.return,he)}if(R===E){ae=null;break e}var te=R.sibling;if(te!==null){te.return=R.return,ae=te;break e}ae=R.return}}if(be=f,ni(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Qi,r)}catch{}h=!0}return h}finally{Ne=l,Rn.transition=s}}return!1}function ny(r,s,l){s=_o(l,s),s=Eg(r,s,1),r=ii(r,s,1),s=qt(),r!==null&&(qr(r,1,s),nn(r,s))}function tt(r,s,l){if(r.tag===3)ny(r,r,l);else for(;s!==null;){if(s.tag===3){ny(s,r,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(oi===null||!oi.has(h))){r=_o(l,r),r=wg(s,r,1),s=ii(s,r,1),r=qt(),s!==null&&(qr(s,1,r),nn(s,r));break}}s=s.return}}function wT(r,s,l){var h=r.pingCache;h!==null&&h.delete(s),s=qt(),r.pingedLanes|=r.suspendedLanes&l,Tt===r&&(Pt&l)===l&&(gt===4||gt===3&&(Pt&130023424)===Pt&&500>He()-Nd?hs(r,0):kd|=l),nn(r,s)}function ry(r,s){s===0&&((r.mode&1)===0?s=1:(s=Hs,Hs<<=1,(Hs&130023424)===0&&(Hs=4194304)));var l=qt();r=Pr(r,s),r!==null&&(qr(r,s,l),nn(r,l))}function TT(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),ry(r,l)}function IT(r,s){var l=0;switch(r.tag){case 13:var h=r.stateNode,f=r.memoizedState;f!==null&&(l=f.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),ry(r,l)}var iy;iy=function(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps||Jt.current)en=!0;else{if((r.lanes&l)===0&&(s.flags&128)===0)return en=!1,cT(r,s,l);en=(r.flags&131072)!==0}else en=!1,Xe&&(s.flags&1048576)!==0&&Vm(s,fu,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Pu(r,s),r=s.pendingProps;var f=uo(s,Lt.current);mo(s,l),f=ud(null,s,h,r,f,l);var g=cd();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Zt(h)?(g=!0,cu(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,ed(s),f.updater=vu,s.stateNode=f,f._reactInternals=s,nd(s,h,r,l),s=_d(null,s,h,!0,g,l)):(s.tag=0,Xe&&g&&Hh(s),Wt(null,s,f,l),s=s.child),s;case 16:h=s.elementType;e:{switch(Pu(r,s),r=s.pendingProps,f=h._init,h=f(h._payload),s.type=h,f=s.tag=RT(h),r=Fn(h,r),f){case 0:s=yd(null,s,h,r,l);break e;case 1:s=Ng(null,s,h,r,l);break e;case 11:s=Rg(null,s,h,r,l);break e;case 14:s=Ag(null,s,h,Fn(h.type,r),l);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Fn(h,f),yd(r,s,h,f,l);case 1:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Fn(h,f),Ng(r,s,h,f,l);case 3:e:{if(xg(s),r===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,f=g.element,zm(r,s),_u(s,h,null,l);var E=s.memoizedState;if(h=E.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=_o(Error(t(423)),s),s=Og(r,s,h,l,f);break e}else if(h!==f){f=_o(Error(t(424)),s),s=Og(r,s,h,l,f);break e}else for(fn=Zr(s.stateNode.containerInfo.firstChild),dn=s,Xe=!0,Un=null,l=Ym(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(fo(),h===f){s=Nr(r,s,l);break e}Wt(r,s,h,l)}s=s.child}return s;case 5:return Jm(s),r===null&&Kh(s),h=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,E=f.children,Uh(h,f)?E=null:g!==null&&Uh(h,g)&&(s.flags|=32),kg(r,s),Wt(r,s,E,l),s.child;case 6:return r===null&&Kh(s),null;case 13:return Dg(r,s,l);case 4:return rd(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=go(s,null,h,l):Wt(r,s,h,l),s.child;case 11:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Fn(h,f),Rg(r,s,h,f,l);case 7:return Wt(r,s,s.pendingProps,l),s.child;case 8:return Wt(r,s,s.pendingProps.children,l),s.child;case 12:return Wt(r,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,f=s.pendingProps,g=s.memoizedProps,E=f.value,We(mu,h._currentValue),h._currentValue=E,g!==null)if(Mn(g.value,E)){if(g.children===f.children&&!Jt.current){s=Nr(r,s,l);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var R=g.dependencies;if(R!==null){E=g.child;for(var k=R.firstContext;k!==null;){if(k.context===h){if(g.tag===1){k=kr(-1,l&-l),k.tag=2;var j=g.updateQueue;if(j!==null){j=j.shared;var Q=j.pending;Q===null?k.next=k:(k.next=Q.next,Q.next=k),j.pending=k}}g.lanes|=l,k=g.alternate,k!==null&&(k.lanes|=l),Jh(g.return,l,s),R.lanes|=l;break}k=k.next}}else if(g.tag===10)E=g.type===s.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=l,R=E.alternate,R!==null&&(R.lanes|=l),Jh(E,l,s),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===s){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}Wt(r,s,f.children,l),s=s.child}return s;case 9:return f=s.type,h=s.pendingProps.children,mo(s,l),f=In(f),h=h(f),s.flags|=1,Wt(r,s,h,l),s.child;case 14:return h=s.type,f=Fn(h,s.pendingProps),f=Fn(h.type,f),Ag(r,s,h,f,l);case 15:return Cg(r,s,s.type,s.pendingProps,l);case 17:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Fn(h,f),Pu(r,s),s.tag=1,Zt(h)?(r=!0,cu(s)):r=!1,mo(s,l),Km(s,h,f),nd(s,h,f,l),_d(null,s,h,!0,r,l);case 19:return Lg(r,s,l);case 22:return Pg(r,s,l)}throw Error(t(156,s.tag))};function sy(r,s){return zs(r,s)}function ST(r,s,l,h){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(r,s,l,h){return new ST(r,s,l,h)}function Ud(r){return r=r.prototype,!(!r||!r.isReactComponent)}function RT(r){if(typeof r=="function")return Ud(r)?1:0;if(r!=null){if(r=r.$$typeof,r===V)return 11;if(r===Ot)return 14}return 2}function ci(r,s){var l=r.alternate;return l===null?(l=An(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function Fu(r,s,l,h,f,g){var E=2;if(h=r,typeof r=="function")Ud(r)&&(E=1);else if(typeof r=="string")E=5;else e:switch(r){case N:return fs(l.children,f,g,s);case S:E=8,f|=8;break;case C:return r=An(12,l,s,f|2),r.elementType=C,r.lanes=g,r;case A:return r=An(13,l,s,f),r.elementType=A,r.lanes=g,r;case it:return r=An(19,l,s,f),r.elementType=it,r.lanes=g,r;case ze:return ju(l,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case x:E=10;break e;case b:E=9;break e;case V:E=11;break e;case Ot:E=14;break e;case Dt:E=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=An(E,l,s,f),s.elementType=r,s.type=h,s.lanes=g,s}function fs(r,s,l,h){return r=An(7,r,h,s),r.lanes=l,r}function ju(r,s,l,h){return r=An(22,r,h,s),r.elementType=ze,r.lanes=l,r.stateNode={isHidden:!1},r}function Fd(r,s,l){return r=An(6,r,null,s),r.lanes=l,r}function jd(r,s,l){return s=An(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function AT(r,s,l,h,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wr(0),this.expirationTimes=Wr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wr(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Bd(r,s,l,h,f,g,E,R,k){return r=new AT(r,s,l,R,k),s===1?(s=1,g===!0&&(s|=8)):s=0,g=An(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},ed(g),r}function CT(r,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:de,key:h==null?null:""+h,children:r,containerInfo:s,implementation:l}}function oy(r){if(!r)return ti;r=r._reactInternals;e:{if(Nn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Zt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(Zt(l))return Dm(r,l,s)}return s}function ay(r,s,l,h,f,g,E,R,k){return r=Bd(l,h,!0,r,f,g,E,R,k),r.context=oy(null),l=r.current,h=qt(),f=li(l),g=kr(h,f),g.callback=s??null,ii(l,g,f),r.current.lanes=f,qr(r,f,h),nn(r,h),r}function Bu(r,s,l,h){var f=s.current,g=qt(),E=li(f);return l=oy(l),s.context===null?s.context=l:s.pendingContext=l,s=kr(g,E),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=ii(f,s,E),r!==null&&(zn(r,f,E,g),yu(r,f,E)),E}function zu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function ly(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function zd(r,s){ly(r,s),(r=r.alternate)&&ly(r,s)}function PT(){return null}var uy=typeof reportError=="function"?reportError:function(r){console.error(r)};function $d(r){this._internalRoot=r}$u.prototype.render=$d.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Bu(r,s,null,null)},$u.prototype.unmount=$d.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;cs(function(){Bu(null,r,null,null)}),s[Sr]=null}};function $u(r){this._internalRoot=r}$u.prototype.unstable_scheduleHydration=function(r){if(r){var s=$l();r={blockedOn:null,target:r,priority:s};for(var l=0;l<Jn.length&&s!==0&&s<Jn[l].priority;l++);Jn.splice(l,0,r),l===0&&ql(r)}};function Hd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Hu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function cy(){}function kT(r,s,l,h,f){if(f){if(typeof h=="function"){var g=h;h=function(){var j=zu(E);g.call(j)}}var E=ay(s,h,r,0,null,!1,!1,"",cy);return r._reactRootContainer=E,r[Sr]=E.current,Pa(r.nodeType===8?r.parentNode:r),cs(),E}for(;f=r.lastChild;)r.removeChild(f);if(typeof h=="function"){var R=h;h=function(){var j=zu(k);R.call(j)}}var k=Bd(r,0,!1,null,null,!1,!1,"",cy);return r._reactRootContainer=k,r[Sr]=k.current,Pa(r.nodeType===8?r.parentNode:r),cs(function(){Bu(s,k,l,h)}),k}function Wu(r,s,l,h,f){var g=l._reactRootContainer;if(g){var E=g;if(typeof f=="function"){var R=f;f=function(){var k=zu(E);R.call(k)}}Bu(s,E,r,f)}else E=kT(l,s,r,f,h);return zu(E)}Bl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var l=Hr(s.pendingLanes);l!==0&&(Kr(s,l|1),nn(s,He()),(be&6)===0&&(wo=He()+500,ni()))}break;case 13:cs(function(){var h=Pr(r,1);if(h!==null){var f=qt();zn(h,r,1,f)}}),zd(r,1)}},Ws=function(r){if(r.tag===13){var s=Pr(r,134217728);if(s!==null){var l=qt();zn(s,r,134217728,l)}zd(r,134217728)}},zl=function(r){if(r.tag===13){var s=li(r),l=Pr(r,s);if(l!==null){var h=qt();zn(l,r,s,h)}zd(r,s)}},$l=function(){return Ne},Hl=function(r,s){var l=Ne;try{return Ne=r,s()}finally{Ne=l}},Vs=function(r,s,l){switch(s){case"input":if(Zo(r,l),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==r&&h.form===r.form){var f=lu(h);if(!f)throw Error(t(90));Ns(h),Zo(h,f)}}}break;case"textarea":bs(r,l);break;case"select":s=l.value,s!=null&&gr(r,!!l.multiple,s,!1)}},Hi=Ld,ua=cs;var NT={usingClientEntryPoint:!1,Events:[xa,ao,lu,Xn,la,Ld]},Wa={findFiberByHostInstance:ns,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},xT={bundleType:Wa.bundleType,version:Wa.version,rendererPackageName:Wa.rendererPackageName,rendererConfig:Wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=da(r),r===null?null:r.stateNode},findFiberByHostInstance:Wa.findFiberByHostInstance||PT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qu.isDisabled&&qu.supportsFiber)try{Qi=qu.inject(xT),ln=qu}catch{}}return rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NT,rn.createPortal=function(r,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hd(s))throw Error(t(200));return CT(r,s,null,l)},rn.createRoot=function(r,s){if(!Hd(r))throw Error(t(299));var l=!1,h="",f=uy;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=Bd(r,1,!1,null,null,l,!1,h,f),r[Sr]=s.current,Pa(r.nodeType===8?r.parentNode:r),new $d(s)},rn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=da(s),r=r===null?null:r.stateNode,r},rn.flushSync=function(r){return cs(r)},rn.hydrate=function(r,s,l){if(!Hu(s))throw Error(t(200));return Wu(null,r,s,!0,l)},rn.hydrateRoot=function(r,s,l){if(!Hd(r))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,f=!1,g="",E=uy;if(l!=null&&(l.unstable_strictMode===!0&&(f=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),s=ay(s,null,r,1,l??null,f,!1,g,E),r[Sr]=s.current,Pa(r),h)for(r=0;r<h.length;r++)l=h[r],f=l._getVersion,f=f(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,f]:s.mutableSourceEagerHydrationData.push(l,f);return new $u(s)},rn.render=function(r,s,l){if(!Hu(s))throw Error(t(200));return Wu(null,r,s,!1,l)},rn.unmountComponentAtNode=function(r){if(!Hu(r))throw Error(t(40));return r._reactRootContainer?(cs(function(){Wu(null,null,r,!1,function(){r._reactRootContainer=null,r[Sr]=null})}),!0):!1},rn.unstable_batchedUpdates=Ld,rn.unstable_renderSubtreeIntoContainer=function(r,s,l,h){if(!Hu(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Wu(r,s,l,!1,h)},rn.version="18.2.0-next-9e3b772b8-20220608",rn}var _y;function gv(){if(_y)return Kd.exports;_y=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Kd.exports=jT(),Kd.exports}var vy;function BT(){if(vy)return Ku;vy=1;var n=gv();return Ku.createRoot=n.createRoot,Ku.hydrateRoot=n.hydrateRoot,Ku}var zT=BT();const $T=Qf(zT);gv();/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ol(){return ol=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ol.apply(this,arguments)}var vi;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(vi||(vi={}));const Ey="popstate";function HT(n){n===void 0&&(n={});function e(o,a){let{pathname:c="/",search:d="",hash:p=""}=Ss(o.location.hash.substr(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),mf("",{pathname:c,search:d,hash:p},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(o,a){let c=o.document.querySelector("base"),d="";if(c&&c.getAttribute("href")){let p=o.location.href,y=p.indexOf("#");d=y===-1?p:p.slice(0,y)}return d+"#"+(typeof a=="string"?a:pc(a))}function i(o,a){Bc(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return qT(e,t,i,n)}function lt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Bc(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function WT(){return Math.random().toString(36).substr(2,8)}function wy(n,e){return{usr:n.state,key:n.key,idx:e}}function mf(n,e,t,i){return t===void 0&&(t=null),ol({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Ss(e):e,{state:t,key:e&&e.key||i||WT()})}function pc(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ss(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function qT(n,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:a=!1}=i,c=o.history,d=vi.Pop,p=null,y=v();y==null&&(y=0,c.replaceState(ol({},c.state,{idx:y}),""));function v(){return(c.state||{idx:null}).idx}function w(){d=vi.Pop;let L=v(),Z=L==null?null:L-y;y=L,p&&p({action:d,location:z.location,delta:Z})}function I(L,Z){d=vi.Push;let ee=mf(z.location,L,Z);t&&t(ee,L),y=v()+1;let K=wy(ee,y),ne=z.createHref(ee);try{c.pushState(K,"",ne)}catch(_e){if(_e instanceof DOMException&&_e.name==="DataCloneError")throw _e;o.location.assign(ne)}a&&p&&p({action:d,location:z.location,delta:1})}function D(L,Z){d=vi.Replace;let ee=mf(z.location,L,Z);t&&t(ee,L),y=v();let K=wy(ee,y),ne=z.createHref(ee);c.replaceState(K,"",ne),a&&p&&p({action:d,location:z.location,delta:0})}function B(L){let Z=o.location.origin!=="null"?o.location.origin:o.location.href,ee=typeof L=="string"?L:pc(L);return lt(Z,"No window.location.(origin|href) available to create URL for href: "+ee),new URL(ee,Z)}let z={get action(){return d},get location(){return n(o,c)},listen(L){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Ey,w),p=L,()=>{o.removeEventListener(Ey,w),p=null}},createHref(L){return e(o,L)},createURL:B,encodeLocation(L){let Z=B(L);return{pathname:Z.pathname,search:Z.search,hash:Z.hash}},push:I,replace:D,go(L){return c.go(L)}};return z}var Ty;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Ty||(Ty={}));function KT(n,e,t){t===void 0&&(t="/");let i=typeof e=="string"?Ss(e):e,o=Yf(i.pathname||"/",t);if(o==null)return null;let a=yv(n);GT(a);let c=null;for(let d=0;c==null&&d<a.length;++d)c=rI(a[d],oI(o));return c}function yv(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(a,c,d)=>{let p={relativePath:d===void 0?a.path||"":d,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};p.relativePath.startsWith("/")&&(lt(p.relativePath.startsWith(i),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(i.length));let y=wi([i,p.relativePath]),v=t.concat(p);a.children&&a.children.length>0&&(lt(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),yv(a.children,e,v,y)),!(a.path==null&&!a.index)&&e.push({path:y,score:tI(y,a.index),routesMeta:v})};return n.forEach((a,c)=>{var d;if(a.path===""||!((d=a.path)!=null&&d.includes("?")))o(a,c);else for(let p of _v(a.path))o(a,c,p)}),e}function _v(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(i.length===0)return o?[a,""]:[a];let c=_v(i.join("/")),d=[];return d.push(...c.map(p=>p===""?a:[a,p].join("/"))),o&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function GT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:nI(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const QT=/^:[\w-]+$/,XT=3,YT=2,JT=1,ZT=10,eI=-2,Iy=n=>n==="*";function tI(n,e){let t=n.split("/"),i=t.length;return t.some(Iy)&&(i+=eI),e&&(i+=YT),t.filter(o=>!Iy(o)).reduce((o,a)=>o+(QT.test(a)?XT:a===""?JT:ZT),i)}function nI(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function rI(n,e){let{routesMeta:t}=n,i={},o="/",a=[];for(let c=0;c<t.length;++c){let d=t[c],p=c===t.length-1,y=o==="/"?e:e.slice(o.length)||"/",v=iI({path:d.relativePath,caseSensitive:d.caseSensitive,end:p},y);if(!v)return null;Object.assign(i,v.params);let w=d.route;a.push({params:i,pathname:wi([o,v.pathname]),pathnameBase:hI(wi([o,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(o=wi([o,v.pathnameBase]))}return a}function iI(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=sI(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let a=o[0],c=a.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,v,w)=>{let{paramName:I,isOptional:D}=v;if(I==="*"){let z=d[w]||"";c=a.slice(0,a.length-z.length).replace(/(.)\/+$/,"$1")}const B=d[w];return D&&!B?y[I]=void 0:y[I]=aI(B||"",I),y},{}),pathname:a,pathnameBase:c,pattern:n}}function sI(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Bc(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function oI(n){try{return decodeURI(n)}catch(e){return Bc(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function aI(n,e){try{return decodeURIComponent(n)}catch(t){return Bc(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+n+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),n}}function Yf(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function lI(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Ss(n):n;return{pathname:t?t.startsWith("/")?t:uI(t,e):e,search:dI(i),hash:fI(o)}}function uI(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Xd(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cI(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Jf(n,e){let t=cI(n);return e?t.map((i,o)=>o===n.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Zf(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=Ss(n):(o=ol({},n),lt(!o.pathname||!o.pathname.includes("?"),Xd("?","pathname","search",o)),lt(!o.pathname||!o.pathname.includes("#"),Xd("#","pathname","hash",o)),lt(!o.search||!o.search.includes("#"),Xd("#","search","hash",o)));let a=n===""||o.pathname==="",c=a?"/":o.pathname,d;if(c==null)d=t;else{let w=e.length-1;if(!i&&c.startsWith("..")){let I=c.split("/");for(;I[0]==="..";)I.shift(),w-=1;o.pathname=I.join("/")}d=w>=0?e[w]:"/"}let p=lI(o,d),y=c&&c!=="/"&&c.endsWith("/"),v=(a||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||v)&&(p.pathname+="/"),p}const wi=n=>n.join("/").replace(/\/\/+/g,"/"),hI=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),dI=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,fI=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function pI(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const vv=["post","put","patch","delete"];new Set(vv);const mI=["get",...vv];new Set(mI);/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function al(){return al=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},al.apply(this,arguments)}const ep=Y.createContext(null),gI=Y.createContext(null),Vi=Y.createContext(null),zc=Y.createContext(null),Fr=Y.createContext({outlet:null,matches:[],isDataRoute:!1}),Ev=Y.createContext(null);function yI(n,e){let{relative:t}=e===void 0?{}:e;Ho()||lt(!1);let{basename:i,navigator:o}=Y.useContext(Vi),{hash:a,pathname:c,search:d}=Iv(n,{relative:t}),p=c;return i!=="/"&&(p=c==="/"?i:wi([i,c])),o.createHref({pathname:p,search:d,hash:a})}function Ho(){return Y.useContext(zc)!=null}function Wo(){return Ho()||lt(!1),Y.useContext(zc).location}function wv(n){Y.useContext(Vi).static||Y.useLayoutEffect(n)}function tp(){let{isDataRoute:n}=Y.useContext(Fr);return n?NI():_I()}function _I(){Ho()||lt(!1);let n=Y.useContext(ep),{basename:e,future:t,navigator:i}=Y.useContext(Vi),{matches:o}=Y.useContext(Fr),{pathname:a}=Wo(),c=JSON.stringify(Jf(o,t.v7_relativeSplatPath)),d=Y.useRef(!1);return wv(()=>{d.current=!0}),Y.useCallback(function(y,v){if(v===void 0&&(v={}),!d.current)return;if(typeof y=="number"){i.go(y);return}let w=Zf(y,JSON.parse(c),a,v.relative==="path");n==null&&e!=="/"&&(w.pathname=w.pathname==="/"?e:wi([e,w.pathname])),(v.replace?i.replace:i.push)(w,v.state,v)},[e,i,c,a,n])}function Tv(){let{matches:n}=Y.useContext(Fr),e=n[n.length-1];return e?e.params:{}}function Iv(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=Y.useContext(Vi),{matches:o}=Y.useContext(Fr),{pathname:a}=Wo(),c=JSON.stringify(Jf(o,i.v7_relativeSplatPath));return Y.useMemo(()=>Zf(n,JSON.parse(c),a,t==="path"),[n,c,a,t])}function vI(n,e){return EI(n,e)}function EI(n,e,t,i){Ho()||lt(!1);let{navigator:o}=Y.useContext(Vi),{matches:a}=Y.useContext(Fr),c=a[a.length-1],d=c?c.params:{};c&&c.pathname;let p=c?c.pathnameBase:"/";c&&c.route;let y=Wo(),v;if(e){var w;let L=typeof e=="string"?Ss(e):e;p==="/"||(w=L.pathname)!=null&&w.startsWith(p)||lt(!1),v=L}else v=y;let I=v.pathname||"/",D=p==="/"?I:I.slice(p.length)||"/",B=KT(n,{pathname:D}),z=RI(B&&B.map(L=>Object.assign({},L,{params:Object.assign({},d,L.params),pathname:wi([p,o.encodeLocation?o.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?p:wi([p,o.encodeLocation?o.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),a,t,i);return e&&z?Y.createElement(zc.Provider,{value:{location:al({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:vi.Pop}},z):z}function wI(){let n=kI(),e=pI(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),t?Y.createElement("pre",{style:o},t):null,null)}const TI=Y.createElement(wI,null);class II extends Y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Y.createElement(Fr.Provider,{value:this.props.routeContext},Y.createElement(Ev.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function SI(n){let{routeContext:e,match:t,children:i}=n,o=Y.useContext(ep);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),Y.createElement(Fr.Provider,{value:e},i)}function RI(n,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var a;if((a=t)!=null&&a.errors)n=t.matches;else return null}let c=n,d=(o=t)==null?void 0:o.errors;if(d!=null){let v=c.findIndex(w=>w.route.id&&(d==null?void 0:d[w.route.id]));v>=0||lt(!1),c=c.slice(0,Math.min(c.length,v+1))}let p=!1,y=-1;if(t&&i&&i.v7_partialHydration)for(let v=0;v<c.length;v++){let w=c[v];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(y=v),w.route.id){let{loaderData:I,errors:D}=t,B=w.route.loader&&I[w.route.id]===void 0&&(!D||D[w.route.id]===void 0);if(w.route.lazy||B){p=!0,y>=0?c=c.slice(0,y+1):c=[c[0]];break}}}return c.reduceRight((v,w,I)=>{let D,B=!1,z=null,L=null;t&&(D=d&&w.route.id?d[w.route.id]:void 0,z=w.route.errorElement||TI,p&&(y<0&&I===0?(xI("route-fallback"),B=!0,L=null):y===I&&(B=!0,L=w.route.hydrateFallbackElement||null)));let Z=e.concat(c.slice(0,I+1)),ee=()=>{let K;return D?K=z:B?K=L:w.route.Component?K=Y.createElement(w.route.Component,null):w.route.element?K=w.route.element:K=v,Y.createElement(SI,{match:w,routeContext:{outlet:v,matches:Z,isDataRoute:t!=null},children:K})};return t&&(w.route.ErrorBoundary||w.route.errorElement||I===0)?Y.createElement(II,{location:t.location,revalidation:t.revalidation,component:z,error:D,children:ee(),routeContext:{outlet:null,matches:Z,isDataRoute:!0}}):ee()},null)}var Sv=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(Sv||{}),Rv=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Rv||{});function AI(n){let e=Y.useContext(ep);return e||lt(!1),e}function CI(n){let e=Y.useContext(gI);return e||lt(!1),e}function PI(n){let e=Y.useContext(Fr);return e||lt(!1),e}function Av(n){let e=PI(),t=e.matches[e.matches.length-1];return t.route.id||lt(!1),t.route.id}function kI(){var n;let e=Y.useContext(Ev),t=CI(),i=Av();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function NI(){let{router:n}=AI(Sv.UseNavigateStable),e=Av(Rv.UseNavigateStable),t=Y.useRef(!1);return wv(()=>{t.current=!0}),Y.useCallback(function(o,a){a===void 0&&(a={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,al({fromRouteId:e},a)))},[n,e])}const Sy={};function xI(n,e,t){Sy[n]||(Sy[n]=!0)}function OI(n){let{to:e,replace:t,state:i,relative:o}=n;Ho()||lt(!1);let{future:a,static:c}=Y.useContext(Vi),{matches:d}=Y.useContext(Fr),{pathname:p}=Wo(),y=tp(),v=Zf(e,Jf(d,a.v7_relativeSplatPath),p,o==="path"),w=JSON.stringify(v);return Y.useEffect(()=>y(JSON.parse(w),{replace:t,state:i,relative:o}),[y,w,o,t,i]),null}function fi(n){lt(!1)}function DI(n){let{basename:e="/",children:t=null,location:i,navigationType:o=vi.Pop,navigator:a,static:c=!1,future:d}=n;Ho()&&lt(!1);let p=e.replace(/^\/*/,"/"),y=Y.useMemo(()=>({basename:p,navigator:a,static:c,future:al({v7_relativeSplatPath:!1},d)}),[p,d,a,c]);typeof i=="string"&&(i=Ss(i));let{pathname:v="/",search:w="",hash:I="",state:D=null,key:B="default"}=i,z=Y.useMemo(()=>{let L=Yf(v,p);return L==null?null:{location:{pathname:L,search:w,hash:I,state:D,key:B},navigationType:o}},[p,v,w,I,D,B,o]);return z==null?null:Y.createElement(Vi.Provider,{value:y},Y.createElement(zc.Provider,{children:t,value:z}))}function bI(n){let{children:e,location:t}=n;return vI(gf(e),t)}new Promise(()=>{});function gf(n,e){e===void 0&&(e=[]);let t=[];return Y.Children.forEach(n,(i,o)=>{if(!Y.isValidElement(i))return;let a=[...e,o];if(i.type===Y.Fragment){t.push.apply(t,gf(i.props.children,a));return}i.type!==fi&&lt(!1),!i.props.index||!i.props.children||lt(!1);let c={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=gf(i.props.children,a)),t.push(c)}),t}/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yf(){return yf=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},yf.apply(this,arguments)}function LI(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,a;for(a=0;a<i.length;a++)o=i[a],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function VI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function MI(n,e){return n.button===0&&(!e||e==="_self")&&!VI(n)}const UI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],FI="startTransition",Ry=MT[FI];function jI(n){let{basename:e,children:t,future:i,window:o}=n,a=Y.useRef();a.current==null&&(a.current=HT({window:o,v5Compat:!0}));let c=a.current,[d,p]=Y.useState({action:c.action,location:c.location}),{v7_startTransition:y}=i||{},v=Y.useCallback(w=>{y&&Ry?Ry(()=>p(w)):p(w)},[p,y]);return Y.useLayoutEffect(()=>c.listen(v),[c,v]),Y.createElement(DI,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:c,future:i})}const BI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nc=Y.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:a,replace:c,state:d,target:p,to:y,preventScrollReset:v,unstable_viewTransition:w}=e,I=LI(e,UI),{basename:D}=Y.useContext(Vi),B,z=!1;if(typeof y=="string"&&zI.test(y)&&(B=y,BI))try{let K=new URL(window.location.href),ne=y.startsWith("//")?new URL(K.protocol+y):new URL(y),_e=Yf(ne.pathname,D);ne.origin===K.origin&&_e!=null?y=_e+ne.search+ne.hash:z=!0}catch{}let L=yI(y,{relative:o}),Z=$I(y,{replace:c,state:d,target:p,preventScrollReset:v,relative:o,unstable_viewTransition:w});function ee(K){i&&i(K),K.defaultPrevented||Z(K)}return Y.createElement("a",yf({},I,{href:B||L,onClick:z||a?i:ee,ref:t,target:p}))});var Ay;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Ay||(Ay={}));var Cy;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Cy||(Cy={}));function $I(n,e){let{target:t,replace:i,state:o,preventScrollReset:a,relative:c,unstable_viewTransition:d}=e===void 0?{}:e,p=tp(),y=Wo(),v=Iv(n,{relative:c});return Y.useCallback(w=>{if(MI(w,t)){w.preventDefault();let I=i!==void 0?i:pc(y)===pc(v);p(n,{replace:I,state:o,preventScrollReset:a,relative:c,unstable_viewTransition:d})}},[y,p,v,i,o,t,n,a,c,d])}const HI=()=>{};var Py={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},WI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[i++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],c=n[t++],d=n[t++],p=((o&7)<<18|(a&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const a=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(a&63)<<6|c&63)}}return e.join("")},Pv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const a=n[o],c=o+1<n.length,d=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,v=a>>2,w=(a&3)<<4|d>>4;let I=(d&15)<<2|y>>6,D=y&63;p||(D=64,c||(I=64)),i.push(t[v],t[w],t[I],t[D])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Cv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):WI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const w=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||d==null||y==null||w==null)throw new qI;const I=a<<2|d>>4;if(i.push(I),y!==64){const D=d<<4&240|y>>2;if(i.push(D),w!==64){const B=y<<6&192|w;i.push(B)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class qI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const KI=function(n){const e=Cv(n);return Pv.encodeByteArray(e,!0)},mc=function(n){return KI(n).replace(/\./g,"")},kv=function(n){try{return Pv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=()=>GI().__FIREBASE_DEFAULTS__,XI=()=>{if(typeof process>"u"||typeof Py>"u")return;const n=Py.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},YI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&kv(n[1]);return e&&JSON.parse(e)},$c=()=>{try{return HI()||QI()||XI()||YI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Nv=n=>{var e,t;return(t=(e=$c())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},np=n=>{const e=Nv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},xv=()=>{var n;return(n=$c())===null||n===void 0?void 0:n.config},Ov=n=>{var e;return(e=$c())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[mc(JSON.stringify(t)),mc(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function eS(){var n;const e=(n=$c())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function rS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iS(){const n=zt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function sS(){return!eS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function oS(){try{return typeof indexedDB=="object"}catch{return!1}}function aS(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS="FirebaseError";class Gn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=lS,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,El.prototype.create)}}class El{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],c=a?uS(a,i):"Error",d=`${this.serviceName}: ${c} (${o}).`;return new Gn(o,d,i)}}function uS(n,e){return n.replace(cS,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const cS=/\{\$([^}]+)}/g;function hS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function _s(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const a=n[o],c=e[o];if(ky(a)&&ky(c)){if(!_s(a,c))return!1}else if(a!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function ky(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ga(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,a]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function Qa(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function dS(n,e){const t=new fS(n,e);return t.subscribe.bind(t)}class fS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");pS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Yd),o.error===void 0&&(o.error=Yd),o.complete===void 0&&(o.complete=Yd);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Yd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(n){return n&&n._delegate?n._delegate:n}class br{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new JI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yS(e))try{this.getOrInitializeService({instanceIdentifier:ps})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});i.resolve(a)}catch{}}}}clearInstance(e=ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ps){return this.instances.has(e)}getOptions(e=ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);i===d&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),a=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;a.add(e),this.onInitCallbacks.set(o,a);const c=this.instances.get(o);return c&&e(c,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:gS(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ps){return this.component?this.component.multipleInstances?e:ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gS(n){return n===ps?void 0:n}function yS(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const vS={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},ES=Pe.INFO,wS={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},TS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=wS[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rp{constructor(e){this.name=e,this._logLevel=ES,this._logHandler=TS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const IS=(n,e)=>e.some(t=>n instanceof t);let Ny,xy;function SS(){return Ny||(Ny=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RS(){return xy||(xy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bv=new WeakMap,_f=new WeakMap,Lv=new WeakMap,Jd=new WeakMap,ip=new WeakMap;function AS(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(Ti(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&bv.set(t,n)}).catch(()=>{}),ip.set(e,n),e}function CS(n){if(_f.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});_f.set(n,e)}let vf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return _f.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Lv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ti(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function PS(n){vf=n(vf)}function kS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Zd(this),e,...t);return Lv.set(i,e.sort?e.sort():[e]),Ti(i)}:RS().includes(n)?function(...e){return n.apply(Zd(this),e),Ti(bv.get(this))}:function(...e){return Ti(n.apply(Zd(this),e))}}function NS(n){return typeof n=="function"?kS(n):(n instanceof IDBTransaction&&CS(n),IS(n,SS())?new Proxy(n,vf):n)}function Ti(n){if(n instanceof IDBRequest)return AS(n);if(Jd.has(n))return Jd.get(n);const e=NS(n);return e!==n&&(Jd.set(n,e),ip.set(e,n)),e}const Zd=n=>ip.get(n);function xS(n,e,{blocked:t,upgrade:i,blocking:o,terminated:a}={}){const c=indexedDB.open(n,e),d=Ti(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Ti(c.result),p.oldVersion,p.newVersion,Ti(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{a&&p.addEventListener("close",()=>a()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const OS=["get","getKey","getAll","getAllKeys","count"],DS=["put","add","delete","clear"],ef=new Map;function Oy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ef.get(e))return ef.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=DS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||OS.includes(t)))return;const a=async function(c,...d){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return ef.set(e,a),a}PS(n=>({...n,get:(e,t,i)=>Oy(e,t)||n.get(e,t,i),has:(e,t)=>!!Oy(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(LS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function LS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ef="@firebase/app",Dy="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new rp("@firebase/app"),VS="@firebase/app-compat",MS="@firebase/analytics-compat",US="@firebase/analytics",FS="@firebase/app-check-compat",jS="@firebase/app-check",BS="@firebase/auth",zS="@firebase/auth-compat",$S="@firebase/database",HS="@firebase/data-connect",WS="@firebase/database-compat",qS="@firebase/functions",KS="@firebase/functions-compat",GS="@firebase/installations",QS="@firebase/installations-compat",XS="@firebase/messaging",YS="@firebase/messaging-compat",JS="@firebase/performance",ZS="@firebase/performance-compat",eR="@firebase/remote-config",tR="@firebase/remote-config-compat",nR="@firebase/storage",rR="@firebase/storage-compat",iR="@firebase/firestore",sR="@firebase/vertexai",oR="@firebase/firestore-compat",aR="firebase",lR="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="[DEFAULT]",uR={[Ef]:"fire-core",[VS]:"fire-core-compat",[US]:"fire-analytics",[MS]:"fire-analytics-compat",[jS]:"fire-app-check",[FS]:"fire-app-check-compat",[BS]:"fire-auth",[zS]:"fire-auth-compat",[$S]:"fire-rtdb",[HS]:"fire-data-connect",[WS]:"fire-rtdb-compat",[qS]:"fire-fn",[KS]:"fire-fn-compat",[GS]:"fire-iid",[QS]:"fire-iid-compat",[XS]:"fire-fcm",[YS]:"fire-fcm-compat",[JS]:"fire-perf",[ZS]:"fire-perf-compat",[eR]:"fire-rc",[tR]:"fire-rc-compat",[nR]:"fire-gcs",[rR]:"fire-gcs-compat",[iR]:"fire-fst",[oR]:"fire-fst-compat",[sR]:"fire-vertex","fire-js":"fire-js",[aR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=new Map,cR=new Map,Tf=new Map;function by(n,e){try{n.container.addComponent(e)}catch(t){Lr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Pi(n){const e=n.name;if(Tf.has(e))return Lr.debug(`There were multiple attempts to register component ${e}.`),!1;Tf.set(e,n);for(const t of gc.values())by(t,n);for(const t of cR.values())by(t,n);return!0}function Tl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function mn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ii=new El("app","Firebase",hR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ii.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=lR;function Vv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:wf,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Ii.create("bad-app-name",{appName:String(o)});if(t||(t=xv()),!t)throw Ii.create("no-options");const a=gc.get(o);if(a){if(_s(t,a.options)&&_s(i,a.config))return a;throw Ii.create("duplicate-app",{appName:o})}const c=new _S(o);for(const p of Tf.values())c.addComponent(p);const d=new dR(t,i,c);return gc.set(o,d),d}function Hc(n=wf){const e=gc.get(n);if(!e&&n===wf&&xv())return Vv();if(!e)throw Ii.create("no-app",{appName:n});return e}function Cn(n,e,t){var i;let o=(i=uR[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const a=o.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const d=[`Unable to register library "${o}" with version "${e}":`];a&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lr.warn(d.join(" "));return}Pi(new br(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR="firebase-heartbeat-database",pR=1,ll="firebase-heartbeat-store";let tf=null;function Mv(){return tf||(tf=xS(fR,pR,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ll)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ii.create("idb-open",{originalErrorMessage:n.message})})),tf}async function mR(n){try{const t=(await Mv()).transaction(ll),i=await t.objectStore(ll).get(Uv(n));return await t.done,i}catch(e){if(e instanceof Gn)Lr.warn(e.message);else{const t=Ii.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lr.warn(t.message)}}}async function Ly(n,e){try{const i=(await Mv()).transaction(ll,"readwrite");await i.objectStore(ll).put(e,Uv(n)),await i.done}catch(t){if(t instanceof Gn)Lr.warn(t.message);else{const i=Ii.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Lr.warn(i.message)}}}function Uv(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=1024,yR=30;class _R{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ER(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Vy();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats.length>yR){const c=wR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Lr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Vy(),{heartbeatsToSend:i,unsentEntries:o}=vR(this._heartbeatsCache.heartbeats),a=mc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Lr.warn(t),""}}}function Vy(){return new Date().toISOString().substring(0,10)}function vR(n,e=gR){const t=[];let i=n.slice();for(const o of n){const a=t.find(c=>c.agent===o.agent);if(a){if(a.dates.push(o.date),My(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),My(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class ER{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oS()?aS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await mR(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ly(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ly(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function My(n){return mc(JSON.stringify({version:2,heartbeats:n})).length}function wR(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(n){Pi(new br("platform-logger",e=>new bS(e),"PRIVATE")),Pi(new br("heartbeat",e=>new _R(e),"PRIVATE")),Cn(Ef,Dy,n),Cn(Ef,Dy,"esm2017"),Cn("fire-js","")}TR("");var Uy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Si,Fv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,S){function C(){}C.prototype=S.prototype,N.D=S.prototype,N.prototype=new C,N.prototype.constructor=N,N.C=function(x,b,V){for(var A=Array(arguments.length-2),it=2;it<arguments.length;it++)A[it-2]=arguments[it];return S.prototype[b].apply(x,A)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,S,C){C||(C=0);var x=Array(16);if(typeof S=="string")for(var b=0;16>b;++b)x[b]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(b=0;16>b;++b)x[b]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=N.g[0],C=N.g[1],b=N.g[2];var V=N.g[3],A=S+(V^C&(b^V))+x[0]+3614090360&4294967295;S=C+(A<<7&4294967295|A>>>25),A=V+(b^S&(C^b))+x[1]+3905402710&4294967295,V=S+(A<<12&4294967295|A>>>20),A=b+(C^V&(S^C))+x[2]+606105819&4294967295,b=V+(A<<17&4294967295|A>>>15),A=C+(S^b&(V^S))+x[3]+3250441966&4294967295,C=b+(A<<22&4294967295|A>>>10),A=S+(V^C&(b^V))+x[4]+4118548399&4294967295,S=C+(A<<7&4294967295|A>>>25),A=V+(b^S&(C^b))+x[5]+1200080426&4294967295,V=S+(A<<12&4294967295|A>>>20),A=b+(C^V&(S^C))+x[6]+2821735955&4294967295,b=V+(A<<17&4294967295|A>>>15),A=C+(S^b&(V^S))+x[7]+4249261313&4294967295,C=b+(A<<22&4294967295|A>>>10),A=S+(V^C&(b^V))+x[8]+1770035416&4294967295,S=C+(A<<7&4294967295|A>>>25),A=V+(b^S&(C^b))+x[9]+2336552879&4294967295,V=S+(A<<12&4294967295|A>>>20),A=b+(C^V&(S^C))+x[10]+4294925233&4294967295,b=V+(A<<17&4294967295|A>>>15),A=C+(S^b&(V^S))+x[11]+2304563134&4294967295,C=b+(A<<22&4294967295|A>>>10),A=S+(V^C&(b^V))+x[12]+1804603682&4294967295,S=C+(A<<7&4294967295|A>>>25),A=V+(b^S&(C^b))+x[13]+4254626195&4294967295,V=S+(A<<12&4294967295|A>>>20),A=b+(C^V&(S^C))+x[14]+2792965006&4294967295,b=V+(A<<17&4294967295|A>>>15),A=C+(S^b&(V^S))+x[15]+1236535329&4294967295,C=b+(A<<22&4294967295|A>>>10),A=S+(b^V&(C^b))+x[1]+4129170786&4294967295,S=C+(A<<5&4294967295|A>>>27),A=V+(C^b&(S^C))+x[6]+3225465664&4294967295,V=S+(A<<9&4294967295|A>>>23),A=b+(S^C&(V^S))+x[11]+643717713&4294967295,b=V+(A<<14&4294967295|A>>>18),A=C+(V^S&(b^V))+x[0]+3921069994&4294967295,C=b+(A<<20&4294967295|A>>>12),A=S+(b^V&(C^b))+x[5]+3593408605&4294967295,S=C+(A<<5&4294967295|A>>>27),A=V+(C^b&(S^C))+x[10]+38016083&4294967295,V=S+(A<<9&4294967295|A>>>23),A=b+(S^C&(V^S))+x[15]+3634488961&4294967295,b=V+(A<<14&4294967295|A>>>18),A=C+(V^S&(b^V))+x[4]+3889429448&4294967295,C=b+(A<<20&4294967295|A>>>12),A=S+(b^V&(C^b))+x[9]+568446438&4294967295,S=C+(A<<5&4294967295|A>>>27),A=V+(C^b&(S^C))+x[14]+3275163606&4294967295,V=S+(A<<9&4294967295|A>>>23),A=b+(S^C&(V^S))+x[3]+4107603335&4294967295,b=V+(A<<14&4294967295|A>>>18),A=C+(V^S&(b^V))+x[8]+1163531501&4294967295,C=b+(A<<20&4294967295|A>>>12),A=S+(b^V&(C^b))+x[13]+2850285829&4294967295,S=C+(A<<5&4294967295|A>>>27),A=V+(C^b&(S^C))+x[2]+4243563512&4294967295,V=S+(A<<9&4294967295|A>>>23),A=b+(S^C&(V^S))+x[7]+1735328473&4294967295,b=V+(A<<14&4294967295|A>>>18),A=C+(V^S&(b^V))+x[12]+2368359562&4294967295,C=b+(A<<20&4294967295|A>>>12),A=S+(C^b^V)+x[5]+4294588738&4294967295,S=C+(A<<4&4294967295|A>>>28),A=V+(S^C^b)+x[8]+2272392833&4294967295,V=S+(A<<11&4294967295|A>>>21),A=b+(V^S^C)+x[11]+1839030562&4294967295,b=V+(A<<16&4294967295|A>>>16),A=C+(b^V^S)+x[14]+4259657740&4294967295,C=b+(A<<23&4294967295|A>>>9),A=S+(C^b^V)+x[1]+2763975236&4294967295,S=C+(A<<4&4294967295|A>>>28),A=V+(S^C^b)+x[4]+1272893353&4294967295,V=S+(A<<11&4294967295|A>>>21),A=b+(V^S^C)+x[7]+4139469664&4294967295,b=V+(A<<16&4294967295|A>>>16),A=C+(b^V^S)+x[10]+3200236656&4294967295,C=b+(A<<23&4294967295|A>>>9),A=S+(C^b^V)+x[13]+681279174&4294967295,S=C+(A<<4&4294967295|A>>>28),A=V+(S^C^b)+x[0]+3936430074&4294967295,V=S+(A<<11&4294967295|A>>>21),A=b+(V^S^C)+x[3]+3572445317&4294967295,b=V+(A<<16&4294967295|A>>>16),A=C+(b^V^S)+x[6]+76029189&4294967295,C=b+(A<<23&4294967295|A>>>9),A=S+(C^b^V)+x[9]+3654602809&4294967295,S=C+(A<<4&4294967295|A>>>28),A=V+(S^C^b)+x[12]+3873151461&4294967295,V=S+(A<<11&4294967295|A>>>21),A=b+(V^S^C)+x[15]+530742520&4294967295,b=V+(A<<16&4294967295|A>>>16),A=C+(b^V^S)+x[2]+3299628645&4294967295,C=b+(A<<23&4294967295|A>>>9),A=S+(b^(C|~V))+x[0]+4096336452&4294967295,S=C+(A<<6&4294967295|A>>>26),A=V+(C^(S|~b))+x[7]+1126891415&4294967295,V=S+(A<<10&4294967295|A>>>22),A=b+(S^(V|~C))+x[14]+2878612391&4294967295,b=V+(A<<15&4294967295|A>>>17),A=C+(V^(b|~S))+x[5]+4237533241&4294967295,C=b+(A<<21&4294967295|A>>>11),A=S+(b^(C|~V))+x[12]+1700485571&4294967295,S=C+(A<<6&4294967295|A>>>26),A=V+(C^(S|~b))+x[3]+2399980690&4294967295,V=S+(A<<10&4294967295|A>>>22),A=b+(S^(V|~C))+x[10]+4293915773&4294967295,b=V+(A<<15&4294967295|A>>>17),A=C+(V^(b|~S))+x[1]+2240044497&4294967295,C=b+(A<<21&4294967295|A>>>11),A=S+(b^(C|~V))+x[8]+1873313359&4294967295,S=C+(A<<6&4294967295|A>>>26),A=V+(C^(S|~b))+x[15]+4264355552&4294967295,V=S+(A<<10&4294967295|A>>>22),A=b+(S^(V|~C))+x[6]+2734768916&4294967295,b=V+(A<<15&4294967295|A>>>17),A=C+(V^(b|~S))+x[13]+1309151649&4294967295,C=b+(A<<21&4294967295|A>>>11),A=S+(b^(C|~V))+x[4]+4149444226&4294967295,S=C+(A<<6&4294967295|A>>>26),A=V+(C^(S|~b))+x[11]+3174756917&4294967295,V=S+(A<<10&4294967295|A>>>22),A=b+(S^(V|~C))+x[2]+718787259&4294967295,b=V+(A<<15&4294967295|A>>>17),A=C+(V^(b|~S))+x[9]+3951481745&4294967295,N.g[0]=N.g[0]+S&4294967295,N.g[1]=N.g[1]+(b+(A<<21&4294967295|A>>>11))&4294967295,N.g[2]=N.g[2]+b&4294967295,N.g[3]=N.g[3]+V&4294967295}i.prototype.u=function(N,S){S===void 0&&(S=N.length);for(var C=S-this.blockSize,x=this.B,b=this.h,V=0;V<S;){if(b==0)for(;V<=C;)o(this,N,V),V+=this.blockSize;if(typeof N=="string"){for(;V<S;)if(x[b++]=N.charCodeAt(V++),b==this.blockSize){o(this,x),b=0;break}}else for(;V<S;)if(x[b++]=N[V++],b==this.blockSize){o(this,x),b=0;break}}this.h=b,this.o+=S},i.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var S=1;S<N.length-8;++S)N[S]=0;var C=8*this.o;for(S=N.length-8;S<N.length;++S)N[S]=C&255,C/=256;for(this.u(N),N=Array(16),S=C=0;4>S;++S)for(var x=0;32>x;x+=8)N[C++]=this.g[S]>>>x&255;return N};function a(N,S){var C=d;return Object.prototype.hasOwnProperty.call(C,N)?C[N]:C[N]=S(N)}function c(N,S){this.h=S;for(var C=[],x=!0,b=N.length-1;0<=b;b--){var V=N[b]|0;x&&V==S||(C[b]=V,x=!1)}this.g=C}var d={};function p(N){return-128<=N&&128>N?a(N,function(S){return new c([S|0],0>S?-1:0)}):new c([N|0],0>N?-1:0)}function y(N){if(isNaN(N)||!isFinite(N))return w;if(0>N)return L(y(-N));for(var S=[],C=1,x=0;N>=C;x++)S[x]=N/C|0,C*=4294967296;return new c(S,0)}function v(N,S){if(N.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(N.charAt(0)=="-")return L(v(N.substring(1),S));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=y(Math.pow(S,8)),x=w,b=0;b<N.length;b+=8){var V=Math.min(8,N.length-b),A=parseInt(N.substring(b,b+V),S);8>V?(V=y(Math.pow(S,V)),x=x.j(V).add(y(A))):(x=x.j(C),x=x.add(y(A)))}return x}var w=p(0),I=p(1),D=p(16777216);n=c.prototype,n.m=function(){if(z(this))return-L(this).m();for(var N=0,S=1,C=0;C<this.g.length;C++){var x=this.i(C);N+=(0<=x?x:4294967296+x)*S,S*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(B(this))return"0";if(z(this))return"-"+L(this).toString(N);for(var S=y(Math.pow(N,6)),C=this,x="";;){var b=ne(C,S).g;C=Z(C,b.j(S));var V=((0<C.g.length?C.g[0]:C.h)>>>0).toString(N);if(C=b,B(C))return V+x;for(;6>V.length;)V="0"+V;x=V+x}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function B(N){if(N.h!=0)return!1;for(var S=0;S<N.g.length;S++)if(N.g[S]!=0)return!1;return!0}function z(N){return N.h==-1}n.l=function(N){return N=Z(this,N),z(N)?-1:B(N)?0:1};function L(N){for(var S=N.g.length,C=[],x=0;x<S;x++)C[x]=~N.g[x];return new c(C,~N.h).add(I)}n.abs=function(){return z(this)?L(this):this},n.add=function(N){for(var S=Math.max(this.g.length,N.g.length),C=[],x=0,b=0;b<=S;b++){var V=x+(this.i(b)&65535)+(N.i(b)&65535),A=(V>>>16)+(this.i(b)>>>16)+(N.i(b)>>>16);x=A>>>16,V&=65535,A&=65535,C[b]=A<<16|V}return new c(C,C[C.length-1]&-2147483648?-1:0)};function Z(N,S){return N.add(L(S))}n.j=function(N){if(B(this)||B(N))return w;if(z(this))return z(N)?L(this).j(L(N)):L(L(this).j(N));if(z(N))return L(this.j(L(N)));if(0>this.l(D)&&0>N.l(D))return y(this.m()*N.m());for(var S=this.g.length+N.g.length,C=[],x=0;x<2*S;x++)C[x]=0;for(x=0;x<this.g.length;x++)for(var b=0;b<N.g.length;b++){var V=this.i(x)>>>16,A=this.i(x)&65535,it=N.i(b)>>>16,Ot=N.i(b)&65535;C[2*x+2*b]+=A*Ot,ee(C,2*x+2*b),C[2*x+2*b+1]+=V*Ot,ee(C,2*x+2*b+1),C[2*x+2*b+1]+=A*it,ee(C,2*x+2*b+1),C[2*x+2*b+2]+=V*it,ee(C,2*x+2*b+2)}for(x=0;x<S;x++)C[x]=C[2*x+1]<<16|C[2*x];for(x=S;x<2*S;x++)C[x]=0;return new c(C,0)};function ee(N,S){for(;(N[S]&65535)!=N[S];)N[S+1]+=N[S]>>>16,N[S]&=65535,S++}function K(N,S){this.g=N,this.h=S}function ne(N,S){if(B(S))throw Error("division by zero");if(B(N))return new K(w,w);if(z(N))return S=ne(L(N),S),new K(L(S.g),L(S.h));if(z(S))return S=ne(N,L(S)),new K(L(S.g),S.h);if(30<N.g.length){if(z(N)||z(S))throw Error("slowDivide_ only works with positive integers.");for(var C=I,x=S;0>=x.l(N);)C=_e(C),x=_e(x);var b=de(C,1),V=de(x,1);for(x=de(x,2),C=de(C,2);!B(x);){var A=V.add(x);0>=A.l(N)&&(b=b.add(C),V=A),x=de(x,1),C=de(C,1)}return S=Z(N,b.j(S)),new K(b,S)}for(b=w;0<=N.l(S);){for(C=Math.max(1,Math.floor(N.m()/S.m())),x=Math.ceil(Math.log(C)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),V=y(C),A=V.j(S);z(A)||0<A.l(N);)C-=x,V=y(C),A=V.j(S);B(V)&&(V=I),b=b.add(V),N=Z(N,A)}return new K(b,N)}n.A=function(N){return ne(this,N).h},n.and=function(N){for(var S=Math.max(this.g.length,N.g.length),C=[],x=0;x<S;x++)C[x]=this.i(x)&N.i(x);return new c(C,this.h&N.h)},n.or=function(N){for(var S=Math.max(this.g.length,N.g.length),C=[],x=0;x<S;x++)C[x]=this.i(x)|N.i(x);return new c(C,this.h|N.h)},n.xor=function(N){for(var S=Math.max(this.g.length,N.g.length),C=[],x=0;x<S;x++)C[x]=this.i(x)^N.i(x);return new c(C,this.h^N.h)};function _e(N){for(var S=N.g.length+1,C=[],x=0;x<S;x++)C[x]=N.i(x)<<1|N.i(x-1)>>>31;return new c(C,N.h)}function de(N,S){var C=S>>5;S%=32;for(var x=N.g.length-C,b=[],V=0;V<x;V++)b[V]=0<S?N.i(V+C)>>>S|N.i(V+C+1)<<32-S:N.i(V+C);return new c(b,N.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Fv=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=v,Si=c}).apply(typeof Uy<"u"?Uy:typeof self<"u"?self:typeof window<"u"?window:{});var Gu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jv,Xa,Bv,rc,If,zv,$v,Hv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gu=="object"&&Gu];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var M=u[T];if(!(M in _))break e;_=_[M]}u=u[u.length-1],T=_[u],m=m(T),m!=T&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function a(u,m){u instanceof String&&(u+="");var _=0,T=!1,M={next:function(){if(!T&&_<u.length){var $=_++;return{value:m($,u[$]),done:!1}}return T=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(u){return u||function(){return a(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function v(u,m,_){return u.call.apply(u.bind,arguments)}function w(u,m,_){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,T),u.apply(m,M)}}return function(){return u.apply(m,arguments)}}function I(u,m,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:w,I.apply(null,arguments)}function D(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function B(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(T,M,$){for(var re=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)re[Be-2]=arguments[Be];return m.prototype[M].apply(T,re)}}function z(u){const m=u.length;if(0<m){const _=Array(m);for(let T=0;T<m;T++)_[T]=u[T];return _}return[]}function L(u,m){for(let _=1;_<arguments.length;_++){const T=arguments[_];if(p(T)){const M=u.length||0,$=T.length||0;u.length=M+$;for(let re=0;re<$;re++)u[M+re]=T[re]}else u.push(T)}}class Z{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function ee(u){return/^[\s\xa0]*$/.test(u)}function K(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function ne(u){return ne[" "](u),u}ne[" "]=function(){};var _e=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function de(u,m,_){for(const T in u)m.call(_,u[T],T,u)}function N(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function S(u){const m={};for(const _ in u)m[_]=u[_];return m}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(u,m){let _,T;for(let M=1;M<arguments.length;M++){T=arguments[M];for(_ in T)u[_]=T[_];for(let $=0;$<C.length;$++)_=C[$],Object.prototype.hasOwnProperty.call(T,_)&&(u[_]=T[_])}}function b(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function V(u){d.setTimeout(()=>{throw u},0)}function A(){var u=pe;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class it{constructor(){this.h=this.g=null}add(m,_){const T=Ot.get();T.set(m,_),this.h?this.h.next=T:this.g=T,this.h=T}}var Ot=new Z(()=>new Dt,u=>u.reset());class Dt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,ie=!1,pe=new it,P=()=>{const u=d.Promise.resolve(void 0);ze=()=>{u.then(q)}};var q=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(_){V(_)}var m=Ot;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ie=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ve(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return u}();function Le(u,m){if(ve.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(_e){e:{try{ne(m.nodeName);var M=!0;break e}catch{}M=!1}M||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Le.aa.h.call(this)}}B(Le,ve);var De={2:"touch",3:"pen",4:"mouse"};Le.prototype.h=function(){Le.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ve="closure_listenable_"+(1e6*Math.random()|0),Me=0;function bt(u,m,_,T,M){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!T,this.ha=M,this.key=++Me,this.da=this.fa=!1}function ks(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function pr(u){this.src=u,this.g={},this.h=0}pr.prototype.add=function(u,m,_,T,M){var $=u.toString();u=this.g[$],u||(u=this.g[$]=[],this.h++);var re=Br(u,m,T,M);return-1<re?(m=u[re],_||(m.fa=!1)):(m=new bt(m,this.src,$,!!T,M),m.fa=_,u.push(m)),m};function Ns(u,m){var _=m.type;if(_ in u.g){var T=u.g[_],M=Array.prototype.indexOf.call(T,m,void 0),$;($=0<=M)&&Array.prototype.splice.call(T,M,1),$&&(ks(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Br(u,m,_,T){for(var M=0;M<u.length;++M){var $=u[M];if(!$.da&&$.listener==m&&$.capture==!!_&&$.ha==T)return M}return-1}var ji="closure_lm_"+(1e6*Math.random()|0),xs={};function Jo(u,m,_,T,M){if(Array.isArray(m)){for(var $=0;$<m.length;$++)Jo(u,m[$],_,T,M);return null}return _=ta(_),u&&u[Ve]?u.K(m,_,y(T)?!!T.capture:!1,M):Zo(u,m,_,!1,T,M)}function Zo(u,m,_,T,M,$){if(!m)throw Error("Invalid event type");var re=y(M)?!!M.capture:!!M,Be=Ds(u);if(Be||(u[ji]=Be=new pr(u)),_=Be.add(m,_,T,re,$),_.proxy)return _;if(T=Ol(),_.proxy=T,T.src=u,T.listener=_,u.addEventListener)Re||(M=re),M===void 0&&(M=!1),u.addEventListener(m.toString(),T,M);else if(u.attachEvent)u.attachEvent(gr(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Ol(){function u(_){return m.call(u.src,u.listener,_)}const m=ea;return u}function Os(u,m,_,T,M){if(Array.isArray(m))for(var $=0;$<m.length;$++)Os(u,m[$],_,T,M);else T=y(T)?!!T.capture:!!T,_=ta(_),u&&u[Ve]?(u=u.i,m=String(m).toString(),m in u.g&&($=u.g[m],_=Br($,_,T,M),-1<_&&(ks($[_]),Array.prototype.splice.call($,_,1),$.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ds(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Br(m,_,T,M)),(_=-1<u?m[u]:null)&&mr(_))}function mr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Ve])Ns(m.i,u);else{var _=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(_,T,u.capture):m.detachEvent?m.detachEvent(gr(_),T):m.addListener&&m.removeListener&&m.removeListener(T),(_=Ds(m))?(Ns(_,u),_.h==0&&(_.src=null,m[ji]=null)):ks(u)}}}function gr(u){return u in xs?xs[u]:xs[u]="on"+u}function ea(u,m){if(u.da)u=!0;else{m=new Le(m,this);var _=u.listener,T=u.ha||u.src;u.fa&&mr(u),u=_.call(T,m)}return u}function Ds(u){return u=u[ji],u instanceof pr?u:null}var bs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ta(u){return typeof u=="function"?u:(u[bs]||(u[bs]=function(m){return u.handleEvent(m)}),u[bs])}function dt(){le.call(this),this.i=new pr(this),this.M=this,this.F=null}B(dt,le),dt.prototype[Ve]=!0,dt.prototype.removeEventListener=function(u,m,_,T){Os(this,u,m,_,T)};function ft(u,m){var _,T=u.F;if(T)for(_=[];T;T=T.F)_.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new ve(m,u);else if(m instanceof ve)m.target=m.target||u;else{var M=m;m=new ve(T,u),x(m,M)}if(M=!0,_)for(var $=_.length-1;0<=$;$--){var re=m.g=_[$];M=yr(re,T,!0,m)&&M}if(re=m.g=u,M=yr(re,T,!0,m)&&M,M=yr(re,T,!1,m)&&M,_)for($=0;$<_.length;$++)re=m.g=_[$],M=yr(re,T,!1,m)&&M}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],T=0;T<_.length;T++)ks(_[T]);delete u.g[m],u.h--}}this.F=null},dt.prototype.K=function(u,m,_,T){return this.i.add(String(u),m,!1,_,T)},dt.prototype.L=function(u,m,_,T){return this.i.add(String(u),m,!0,_,T)};function yr(u,m,_,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var M=!0,$=0;$<m.length;++$){var re=m[$];if(re&&!re.da&&re.capture==_){var Be=re.listener,pt=re.ha||re.src;re.fa&&Ns(u.i,re),M=Be.call(pt,T)!==!1&&M}}return M&&!T.defaultPrevented}function na(u,m,_){if(typeof u=="function")_&&(u=I(u,_));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function zr(u){u.g=na(()=>{u.g=null,u.i&&(u.i=!1,zr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Bi extends le{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:zr(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zi(u){le.call(this),this.h=u,this.g={}}B(zi,le);var ra=[];function ia(u){de(u.g,function(m,_){this.g.hasOwnProperty(_)&&mr(m)},u),u.g={}}zi.prototype.N=function(){zi.aa.N.call(this),ia(this)},zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sa=d.JSON.stringify,oa=d.JSON.parse,aa=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function $i(){}$i.prototype.h=null;function Ls(u){return u.h||(u.h=u.i())}function Vs(){}var yn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qn(){ve.call(this,"d")}B(Qn,ve);function Ms(){ve.call(this,"c")}B(Ms,ve);var Xn={},la=null;function Hi(){return la=la||new dt}Xn.La="serverreachability";function ua(u){ve.call(this,Xn.La,u)}B(ua,ve);function _r(u){const m=Hi();ft(m,new ua(m))}Xn.STAT_EVENT="statevent";function ca(u,m){ve.call(this,Xn.STAT_EVENT,u),this.stat=m}B(ca,ve);function st(u){const m=Hi();ft(m,new ca(m,u))}Xn.Ma="timingevent";function Us(u,m){ve.call(this,Xn.Ma,u),this.size=m}B(Us,ve);function Pn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function Wi(){this.g=!0}Wi.prototype.xa=function(){this.g=!1};function qi(u,m,_,T,M,$){u.info(function(){if(u.g)if($)for(var re="",Be=$.split("&"),pt=0;pt<Be.length;pt++){var xe=Be[pt].split("=");if(1<xe.length){var Et=xe[0];xe=xe[1];var ut=Et.split("_");re=2<=ut.length&&ut[1]=="type"?re+(Et+"="+xe+"&"):re+(Et+"=redacted&")}}else re=null;else re=$;return"XMLHTTP REQ ("+T+") [attempt "+M+"]: "+m+`
`+_+`
`+re})}function Fs(u,m,_,T,M,$,re){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+M+"]: "+m+`
`+_+`
`+$+" "+re})}function kn(u,m,_,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+vh(u,_)+(T?" "+T:"")})}function ha(u,m){u.info(function(){return"TIMEOUT: "+m})}Wi.prototype.info=function(){};function vh(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var T=_[u];if(!(2>T.length)){var M=T[1];if(Array.isArray(M)&&!(1>M.length)){var $=M[0];if($!="noop"&&$!="stop"&&$!="close")for(var re=1;re<M.length;re++)M[re]=""}}}}return sa(_)}catch{return m}}var js={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Dl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nn;function Ki(){}B(Ki,$i),Ki.prototype.g=function(){return new XMLHttpRequest},Ki.prototype.i=function(){return{}},Nn=new Ki;function xn(u,m,_,T){this.j=u,this.i=m,this.l=_,this.R=T||1,this.U=new zi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bl}function bl(){this.i=null,this.g="",this.h=!1}var da={},Bs={};function zs(u,m,_){u.L=1,u.v=Kr(un(m)),u.m=_,u.P=!0,fa(u,null)}function fa(u,m){u.F=Date.now(),He(u),u.A=un(u.v);var _=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),Qr(_.i,"t",T),u.C=0,_=u.j.J,u.h=new bl,u.g=Jl(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Bi(I(u.Y,u,u.g),u.O)),m=u.U,_=u.g,T=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(ra[0]=M.toString()),M=ra);for(var $=0;$<M.length;$++){var re=Jo(_,M[$],T||m.handleEvent,!1,m.h||m);if(!re)break;m.g[re.key]=re}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),_r(),qi(u.i,u.u,u.A,u.l,u.R,u.m)}xn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Yt(u)==3?m.j():this.Y(u)},xn.prototype.Y=function(u){try{if(u==this.g)e:{const ut=Yt(this.g);var m=this.g.Ba();const En=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||va(this.g)))){this.J||ut!=4||m==7||(m==8||0>=En?_r(3):_r(2)),Gi(this);var _=this.g.Z();this.X=_;t:if(Ll(this)){var T=va(this.g);u="";var M=T.length,$=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_n(this),$r(this);var re="";break t}this.h.i=new d.TextDecoder}for(m=0;m<M;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!($&&m==M-1)});T.length=0,this.h.g+=u,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=_==200,Fs(this.i,this.u,this.A,this.l,this.R,ut,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,pt=this.g;if((Be=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(Be)){var xe=Be;break t}}xe=null}if(_=xe)kn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pa(this,_);else{this.o=!1,this.s=3,st(12),_n(this),$r(this);break e}}if(this.P){_=!0;let hn;for(;!this.J&&this.C<re.length;)if(hn=Eh(this,re),hn==Bs){ut==4&&(this.s=4,st(14),_=!1),kn(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==da){this.s=4,st(15),kn(this.i,this.l,re,"[Invalid Chunk]"),_=!1;break}else kn(this.i,this.l,hn,null),pa(this,hn);if(Ll(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||re.length!=0||this.h.h||(this.s=1,st(16),_=!1),this.o=this.o&&_,!_)kn(this.i,this.l,re,"[Invalid Chunked Response]"),_n(this),$r(this);else if(0<re.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),wa(Et),Et.M=!0,st(11))}}else kn(this.i,this.l,re,null),pa(this,re);ut==4&&_n(this),this.o&&!this.J&&(ut==4?Zs(this.j,this):(this.o=!1,He(this)))}else Gs(this.g),_==400&&0<re.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),_n(this),$r(this)}}}catch{}finally{}};function Ll(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Eh(u,m){var _=u.C,T=m.indexOf(`
`,_);return T==-1?Bs:(_=Number(m.substring(_,T)),isNaN(_)?da:(T+=1,T+_>m.length?Bs:(m=m.slice(T,T+_),u.C=T+_,m)))}xn.prototype.cancel=function(){this.J=!0,_n(this)};function He(u){u.S=Date.now()+u.I,Vl(u,u.I)}function Vl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Pn(I(u.ba,u),m)}function Gi(u){u.B&&(d.clearTimeout(u.B),u.B=null)}xn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ha(this.i,this.A),this.L!=2&&(_r(),st(17)),_n(this),this.s=2,$r(this)):Vl(this,this.S-u)};function $r(u){u.j.G==0||u.J||Zs(u.j,u)}function _n(u){Gi(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,ia(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function pa(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||$t(_.h,u))){if(!u.K&&$t(_.h,u)&&_.G==3){try{var T=_.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var M=T;if(M[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Js(_),Vn(_);else break e;Ys(_),st(18)}}else _.za=M[1],0<_.za-_.T&&37500>M[2]&&_.F&&_.v==0&&!_.C&&(_.C=Pn(I(_.Za,_),6e3));if(1>=Ul(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Ir(_,11)}else if((u.K||_.g==u)&&Js(_),!ee(m))for(M=_.Da.g.parse(m),m=0;m<M.length;m++){let xe=M[m];if(_.T=xe[0],xe=xe[1],_.G==2)if(xe[0]=="c"){_.K=xe[1],_.ia=xe[2];const Et=xe[3];Et!=null&&(_.la=Et,_.j.info("VER="+_.la));const ut=xe[4];ut!=null&&(_.Aa=ut,_.j.info("SVER="+_.Aa));const En=xe[5];En!=null&&typeof En=="number"&&0<En&&(T=1.5*En,_.L=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const hn=u.g;if(hn){const ts=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ts){var $=T.h;$.g||ts.indexOf("spdy")==-1&&ts.indexOf("quic")==-1&&ts.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(ma($,$.h),$.h=null))}if(T.D){const to=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;to&&(T.ya=to,$e(T.I,T.D,to))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),T=_;var re=u;if(T.qa=Yl(T,T.J?T.ia:null,T.W),re.K){Fl(T.h,re);var Be=re,pt=T.L;pt&&(Be.I=pt),Be.B&&(Gi(Be),He(Be)),T.g=re}else es(T);0<_.i.length&&er(_)}else xe[0]!="stop"&&xe[0]!="close"||Ir(_,7);else _.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?Ir(_,7):At(_):xe[0]!="noop"&&_.l&&_.l.ta(xe),_.v=0)}}_r(4)}catch{}}var Ml=class{constructor(u,m){this.g=u,this.map=m}};function Qi(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ln(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ul(u){return u.h?1:u.g?u.g.size:0}function $t(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function ma(u,m){u.g?u.g.add(m):u.h=m}function Fl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Qi.prototype.cancel=function(){if(this.i=jl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function jl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return z(u.i)}function $s(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,T=0;T<_;T++)m.push(u[T]);return m}m=[],_=0;for(T in u)m[_++]=u[T];return m}function Hs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const T in u)m[_++]=T;return m}}}function Hr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Hs(u),T=$s(u),M=T.length,$=0;$<M;$++)m.call(void 0,T[$],_&&_[$],u)}var Xi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wh(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var T=u[_].indexOf("="),M=null;if(0<=T){var $=u[_].substring(0,T);M=u[_].substring(T+1)}else $=u[_];m($,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function vr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof vr){this.h=u.h,Yi(this,u.j),this.o=u.o,this.g=u.g,Wr(this,u.s),this.l=u.l;var m=u.i,_=new Yn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),qr(this,_),this.m=u.m}else u&&(m=String(u).match(Xi))?(this.h=!1,Yi(this,m[1]||"",!0),this.o=Ne(m[2]||""),this.g=Ne(m[3]||"",!0),Wr(this,m[4]),this.l=Ne(m[5]||"",!0),qr(this,m[6]||"",!0),this.m=Ne(m[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}vr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Gr(m,Ws,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Gr(m,Ws,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Gr(_,_.charAt(0)=="/"?$l:zl,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Gr(_,ga)),u.join("")};function un(u){return new vr(u)}function Yi(u,m,_){u.j=_?Ne(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Wr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function qr(u,m,_){m instanceof Yn?(u.i=m,Jn(u.i,u.h)):(_||(m=Gr(m,Hl)),u.i=new Yn(m,u.h))}function $e(u,m,_){u.i.set(m,_)}function Kr(u){return $e(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Gr(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,Bl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Bl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ws=/[#\/\?@]/g,zl=/[#\?:]/g,$l=/[#\?]/g,Hl=/[#\?@]/g,ga=/#/g;function Yn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Rt(u){u.g||(u.g=new Map,u.h=0,u.i&&wh(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Yn.prototype,n.add=function(u,m){Rt(this),this.i=null,u=vn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function On(u,m){Rt(u),m=vn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Dn(u,m){return Rt(u),m=vn(u,m),u.g.has(m)}n.forEach=function(u,m){Rt(this),this.g.forEach(function(_,T){_.forEach(function(M){u.call(m,M,T,this)},this)},this)},n.na=function(){Rt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let T=0;T<m.length;T++){const M=u[T];for(let $=0;$<M.length;$++)_.push(m[T])}return _},n.V=function(u){Rt(this);let m=[];if(typeof u=="string")Dn(this,u)&&(m=m.concat(this.g.get(vn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return Rt(this),this.i=null,u=vn(this,u),Dn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Qr(u,m,_){On(u,m),0<_.length&&(u.i=null,u.g.set(vn(u,m),z(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var T=m[_];const $=encodeURIComponent(String(T)),re=this.V(T);for(T=0;T<re.length;T++){var M=$;re[T]!==""&&(M+="="+encodeURIComponent(String(re[T]))),u.push(M)}}return this.i=u.join("&")};function vn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Jn(u,m){m&&!u.j&&(Rt(u),u.i=null,u.g.forEach(function(_,T){var M=T.toLowerCase();T!=M&&(On(this,T),Qr(this,M,_))},u)),u.j=m}function Th(u,m){const _=new Wi;if(d.Image){const T=new Image;T.onload=D(Xt,_,"TestLoadImage: loaded",!0,m,T),T.onerror=D(Xt,_,"TestLoadImage: error",!1,m,T),T.onabort=D(Xt,_,"TestLoadImage: abort",!1,m,T),T.ontimeout=D(Xt,_,"TestLoadImage: timeout",!1,m,T),d.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function Wl(u,m){const _=new Wi,T=new AbortController,M=setTimeout(()=>{T.abort(),Xt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then($=>{clearTimeout(M),$.ok?Xt(_,"TestPingServer: ok",!0,m):Xt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(M),Xt(_,"TestPingServer: error",!1,m)})}function Xt(u,m,_,T,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),T(_)}catch{}}function Ih(){this.g=new aa}function ql(u,m,_){const T=_||"";try{Hr(u,function(M,$){let re=M;y(M)&&(re=sa(M)),m.push(T+$+"="+encodeURIComponent(re))})}catch(M){throw m.push(T+"type="+encodeURIComponent("_badmap")),M}}function Er(u){this.l=u.Ub||null,this.j=u.eb||!1}B(Er,$i),Er.prototype.g=function(){return new Ji(this.l,this.j)},Er.prototype.i=function(u){return function(){return u}}({});function Ji(u,m){dt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(Ji,dt),n=Ji.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Ln(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Kl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Kl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?bn(this):Ln(this),this.readyState==3&&Kl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,bn(this))},n.Qa=function(u){this.g&&(this.response=u,bn(this))},n.ga=function(){this.g&&bn(this)};function bn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ln(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Ln(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function wr(u){let m="";return de(u,function(_,T){m+=T,m+=":",m+=_,m+=`\r
`}),m}function Xr(u,m,_){e:{for(T in _){var T=!1;break e}T=!0}T||(_=wr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):$e(u,m,_))}function Qe(u){dt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(Qe,dt);var Sh=/^https?$/i,ya=["POST","PUT"];n=Qe.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nn.g(),this.v=this.o?Ls(this.o):Ls(Nn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch($){Zi(this,$);return}if(u=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var M in T)_.set(M,T[M]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const $ of T.keys())_.set($,T.get($));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),M=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ya,m,void 0))||T||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,re]of _)this.g.setRequestHeader($,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ks(this),this.u=!0,this.g.send(u),this.u=!1}catch($){Zi(this,$)}};function Zi(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,qs(u),cn(u)}function qs(u){u.A||(u.A=!0,ft(u,"complete"),ft(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ft(this,"complete"),ft(this,"abort"),cn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cn(this,!0)),Qe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?_a(this):this.bb())},n.bb=function(){_a(this)};function _a(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Yt(u)!=4||u.Z()!=2)){if(u.u&&Yt(u)==4)na(u.Ea,0,u);else if(ft(u,"readystatechange"),Yt(u)==4){u.h=!1;try{const re=u.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var T;if(T=re===0){var M=String(u.D).match(Xi)[1]||null;!M&&d.self&&d.self.location&&(M=d.self.location.protocol.slice(0,-1)),T=!Sh.test(M?M.toLowerCase():"")}_=T}if(_)ft(u,"complete"),ft(u,"success");else{u.m=6;try{var $=2<Yt(u)?u.g.statusText:""}catch{$=""}u.l=$+" ["+u.Z()+"]",qs(u)}}finally{cn(u)}}}}function cn(u,m){if(u.g){Ks(u);const _=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||ft(u,"ready");try{_.onreadystatechange=T}catch{}}}function Ks(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Yt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),oa(m)}};function va(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Gs(u){const m={};u=(u.g&&2<=Yt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(ee(u[T]))continue;var _=b(u[T]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=m[M]||[];m[M]=$,$.push(_)}N(m,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function Ea(u){this.Aa=0,this.i=[],this.j=new Wi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zn("baseRetryDelayMs",5e3,u),this.cb=Zn("retryDelaySeedMs",1e4,u),this.Wa=Zn("forwardChannelMaxRetries",2,u),this.wa=Zn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Qi(u&&u.concurrentRequestLimit),this.Da=new Ih,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ea.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,T){st(0),this.W=u,this.H=m||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.I=Yl(this,null,this.W),er(this)};function At(u){if(Qs(u),u.G==3){var m=u.U++,_=un(u.I);if($e(_,"SID",u.K),$e(_,"RID",m),$e(_,"TYPE","terminate"),Tr(u,_),m=new xn(u,u.j,m),m.L=2,m.v=Kr(un(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=Jl(m.j,null),m.g.ea(m.v)),m.F=Date.now(),He(m)}Xl(u)}function Vn(u){u.g&&(wa(u),u.g.cancel(),u.g=null)}function Qs(u){Vn(u),u.u&&(d.clearTimeout(u.u),u.u=null),Js(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function er(u){if(!ln(u.h)&&!u.s){u.s=!0;var m=u.Ga;ze||P(),ie||(ze(),ie=!0),pe.add(m,u),u.B=0}}function Rh(u,m){return Ul(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Pn(I(u.Ga,u,m),Ql(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new xn(this,this.j,u);let $=this.o;if(this.S&&($?($=S($),x($,this.S)):$=this.S),this.m!==null||this.O||(M.H=$,$=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=Yr(this,M,m),_=un(this.I),$e(_,"RID",u),$e(_,"CVER",22),this.D&&$e(_,"X-HTTP-Session-Id",this.D),Tr(this,_),$&&(this.O?m="headers="+encodeURIComponent(String(wr($)))+"&"+m:this.m&&Xr(_,this.m,$)),ma(this.h,M),this.Ua&&$e(_,"TYPE","init"),this.P?($e(_,"$req",m),$e(_,"SID","null"),M.T=!0,zs(M,_,null)):zs(M,_,m),this.G=2}}else this.G==3&&(u?Xs(this,u):this.i.length==0||ln(this.h)||Xs(this))};function Xs(u,m){var _;m?_=m.l:_=u.U++;const T=un(u.I);$e(T,"SID",u.K),$e(T,"RID",_),$e(T,"AID",u.T),Tr(u,T),u.m&&u.o&&Xr(T,u.m,u.o),_=new xn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Yr(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ma(u.h,_),zs(_,T,m)}function Tr(u,m){u.H&&de(u.H,function(_,T){$e(m,T,_)}),u.l&&Hr({},function(_,T){$e(m,T,_)})}function Yr(u,m,_){_=Math.min(u.i.length,_);var T=u.l?I(u.l.Na,u.l,u):null;e:{var M=u.i;let $=-1;for(;;){const re=["count="+_];$==-1?0<_?($=M[0].g,re.push("ofs="+$)):$=0:re.push("ofs="+$);let Be=!0;for(let pt=0;pt<_;pt++){let xe=M[pt].g;const Et=M[pt].map;if(xe-=$,0>xe)$=Math.max(0,M[pt].g-100),Be=!1;else try{ql(Et,re,"req"+xe+"_")}catch{T&&T(Et)}}if(Be){T=re.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,T}function es(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;ze||P(),ie||(ze(),ie=!0),pe.add(m,u),u.v=0}}function Ys(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Pn(I(u.Fa,u),Ql(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Gl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Pn(I(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),Vn(this),Gl(this))};function wa(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function Gl(u){u.g=new xn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=un(u.qa);$e(m,"RID","rpc"),$e(m,"SID",u.K),$e(m,"AID",u.T),$e(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&$e(m,"TO",u.ja),$e(m,"TYPE","xmlhttp"),Tr(u,m),u.m&&u.o&&Xr(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Kr(un(m)),_.m=null,_.P=!0,fa(_,u)}n.Za=function(){this.C!=null&&(this.C=null,Vn(this),Ys(this),st(19))};function Js(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function Zs(u,m){var _=null;if(u.g==m){Js(u),wa(u),u.g=null;var T=2}else if($t(u.h,m))_=m.D,Fl(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var M=u.B;T=Hi(),ft(T,new Us(T,_)),er(u)}else es(u);else if(M=m.s,M==3||M==0&&0<m.X||!(T==1&&Rh(u,m)||T==2&&Ys(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),M){case 1:Ir(u,5);break;case 4:Ir(u,10);break;case 3:Ir(u,6);break;default:Ir(u,2)}}}function Ql(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Ir(u,m){if(u.j.info("Error code "+m),m==2){var _=I(u.fb,u),T=u.Xa;const M=!T;T=new vr(T||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Yi(T,"https"),Kr(T),M?Th(T.toString(),_):Wl(T.toString(),_)}else st(2);u.G=0,u.l&&u.l.sa(m),Xl(u),Qs(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Xl(u){if(u.G=0,u.ka=[],u.l){const m=jl(u.h);(m.length!=0||u.i.length!=0)&&(L(u.ka,m),L(u.ka,u.i),u.h.i.length=0,z(u.i),u.i.length=0),u.l.ra()}}function Yl(u,m,_){var T=_ instanceof vr?un(_):new vr(_);if(T.g!="")m&&(T.g=m+"."+T.g),Wr(T,T.s);else{var M=d.location;T=M.protocol,m=m?m+"."+M.hostname:M.hostname,M=+M.port;var $=new vr(null);T&&Yi($,T),m&&($.g=m),M&&Wr($,M),_&&($.l=_),T=$}return _=u.D,m=u.ya,_&&m&&$e(T,_,m),$e(T,"VER",u.la),Tr(u,T),T}function Jl(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Qe(new Er({eb:_})):new Qe(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ta(){}n=Ta.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function eo(){}eo.prototype.g=function(u,m){return new Ht(u,m)};function Ht(u,m){dt.call(this),this.g=new Ea(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!ee(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!ee(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new tr(this)}B(Ht,dt),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){At(this.g)},Ht.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=sa(u),u=_);m.i.push(new Ml(m.Ya++,u)),m.G==3&&er(m)},Ht.prototype.N=function(){this.g.l=null,delete this.j,At(this.g),delete this.g,Ht.aa.N.call(this)};function Zl(u){Qn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}B(Zl,Qn);function eu(){Ms.call(this),this.status=1}B(eu,Ms);function tr(u){this.g=u}B(tr,Ta),tr.prototype.ua=function(){ft(this.g,"a")},tr.prototype.ta=function(u){ft(this.g,new Zl(u))},tr.prototype.sa=function(u){ft(this.g,new eu)},tr.prototype.ra=function(){ft(this.g,"b")},eo.prototype.createWebChannel=eo.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,Hv=function(){return new eo},$v=function(){return Hi()},zv=Xn,If={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},js.NO_ERROR=0,js.TIMEOUT=8,js.HTTP_ERROR=6,rc=js,Dl.COMPLETE="complete",Bv=Dl,Vs.EventType=yn,yn.OPEN="a",yn.CLOSE="b",yn.ERROR="c",yn.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Xa=Vs,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,jv=Qe}).apply(typeof Gu<"u"?Gu:typeof self<"u"?self:typeof window<"u"?window:{});const Fy="@firebase/firestore",jy="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new rp("@firebase/firestore");function Io(){return vs.logLevel}function oe(n,...e){if(vs.logLevel<=Pe.DEBUG){const t=e.map(sp);vs.debug(`Firestore (${qo}): ${n}`,...t)}}function Vr(n,...e){if(vs.logLevel<=Pe.ERROR){const t=e.map(sp);vs.error(`Firestore (${qo}): ${n}`,...t)}}function bo(n,...e){if(vs.logLevel<=Pe.WARN){const t=e.map(sp);vs.warn(`Firestore (${qo}): ${n}`,...t)}}function sp(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n="Unexpected state"){const e=`FIRESTORE (${qo}) INTERNAL ASSERTION FAILED: `+n;throw Vr(e),new Error(e)}function je(n,e){n||we()}function Se(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends Gn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(jt.UNAUTHENTICATED))}shutdown(){}}class SR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class RR{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let a=new Ri;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Ri,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const p=a;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Ri)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(je(typeof i.accessToken=="string"),new Wv(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string"),new jt(e)}}class AR{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class CR{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new AR(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class By{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PR{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,mn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){je(this.o===void 0);const i=a=>{a.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const c=a.token!==this.R;return this.R=a.token,oe("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>i(a))};const o=a=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>o(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?o(a):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new By(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(je(typeof t.token=="string"),this.R=t.token,new By(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=kR(40);for(let a=0;a<o.length;++a)i.length<20&&o[a]<t&&(i+=e.charAt(o[a]%62))}return i}}function Ae(n,e){return n<e?-1:n>e?1:0}function Sf(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return Ae(i,o);{const a=qv(),c=NR(a.encode(zy(n,t)),a.encode(zy(e,t)));return c!==0?c:Ae(i,o)}}t+=i>65535?2:1}return Ae(n.length,e.length)}function zy(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function NR(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ae(n[t],e[t]);return Ae(n.length,e.length)}function Lo(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=-62135596800,Hy=1e6;class _t{static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Hy);return new _t(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new fe(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new fe(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<$y)throw new fe(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hy}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-$y;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new _t(0,0))}static max(){return new Ie(new _t(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="__name__";class or{constructor(e,t,i){t===void 0?t=0:t>e.length&&we(),i===void 0?i=e.length-t:i>e.length-t&&we(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return or.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof or?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const a=or.compareSegments(e.get(o),t.get(o));if(a!==0)return a}return Ae(e.length,t.length)}static compareSegments(e,t){const i=or.isNumericId(e),o=or.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?or.extractNumericId(e).compare(or.extractNumericId(t)):Sf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Si.fromString(e.substring(4,e.length-2))}}class Ye extends or{construct(e,t,i){return new Ye(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new fe(X.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Ye(t)}static emptyPath(){return new Ye([])}}const xR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends or{construct(e,t,i){return new Nt(e,t,i)}static isValidIdentifier(e){return xR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wy}static keyField(){return new Nt([Wy])}static fromServerFormat(e){const t=[];let i="",o=0;const a=()=>{if(i.length===0)throw new fe(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new fe(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new fe(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(c=!c,o++):d!=="."||c?(i+=d,o++):(a(),o++)}if(a(),c)throw new fe(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(Ye.fromString(e))}static fromName(e){return new ye(Ye.fromString(e).popFirst(5))}static empty(){return new ye(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new Ye(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=-1;function OR(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(i===1e9?new _t(t+1,0):new _t(t,i));return new ki(o,ye.empty(),e)}function DR(n){return new ki(n.readTime,n.key,ul)}class ki{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new ki(Ie.min(),ye.empty(),ul)}static max(){return new ki(Ie.max(),ye.empty(),ul)}}function bR(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:Ae(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(n){if(n.code!==X.FAILED_PRECONDITION||n.message!==LR)throw n;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W((i,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(i,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):W.reject(t)}static resolve(e){return new W((t,i)=>{t(e)})}static reject(e){return new W((t,i)=>{i(e)})}static waitFor(e){return new W((t,i)=>{let o=0,a=0,c=!1;e.forEach(d=>{++o,d.next(()=>{++a,c&&a===o&&t()},p=>i(p))}),c=!0,a===o&&t()})}static or(e){let t=W.resolve(!1);for(const i of e)t=t.next(o=>o?W.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,a)=>{i.push(t.call(this,o,a))}),this.waitFor(i)}static mapArray(e,t){return new W((i,o)=>{const a=e.length,c=new Array(a);let d=0;for(let p=0;p<a;p++){const y=p;t(e[y]).next(v=>{c[y]=v,++d,d===a&&i(c)},v=>o(v))}})}static doWhile(e,t){return new W((i,o)=>{const a=()=>{e()===!0?t().next(()=>{a()},o):i()};a()})}}function MR(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Go(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.oe(i),this._e=i=>t.writeSequenceNumber(i))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Wc.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=-1;function qc(n){return n==null}function yc(n){return n===0&&1/n==-1/0}function UR(n){return typeof n=="number"&&Number.isInteger(n)&&!yc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="";function FR(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=qy(e)),e=jR(n.get(t),e);return qy(e)}function jR(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const a=n.charAt(o);switch(a){case"\0":t+="";break;case Gv:t+="";break;default:t+=a}}return t}function qy(n){return n+Gv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Mi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Qv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.comparator=e,this.root=t||kt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qu(this.root,e,this.comparator,!0)}}class Qu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?i(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class kt{constructor(e,t,i,o,a){this.key=e,this.value=t,this.color=i??kt.RED,this.left=o??kt.EMPTY,this.right=a??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,a){return new kt(e??this.key,t??this.value,i??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const a=i(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,i),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return kt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw we();const e=this.left.check();if(e!==this.right.check())throw we();return e+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw we()}get value(){throw we()}get color(){throw we()}get left(){throw we()}get right(){throw we()}copy(e,t,i,o,a){return this}insert(e,t,i){return new kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Gy(this.data.getIterator())}getIteratorFrom(e){return new Gy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class Gy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new gn([])}unionWith(e){let t=new vt(Nt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new gn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Lo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Xv("Invalid base64 string: "+a):a}}(e);return new xt(t)}static fromUint8Array(e){const t=function(o){let a="";for(let c=0;c<o.length;++c)a+=String.fromCharCode(o[c]);return a}(e);return new xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const BR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ni(n){if(je(!!n),typeof n=="string"){let e=0;const t=BR.exec(n);if(je(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:at(n.seconds),nanos:at(n.nanos)}}function at(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function xi(n){return typeof n=="string"?xt.fromBase64String(n):xt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv="server_timestamp",Jv="__type__",Zv="__previous_value__",eE="__local_write_time__";function ap(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Jv])===null||t===void 0?void 0:t.stringValue)===Yv}function Kc(n){const e=n.mapValue.fields[Zv];return ap(e)?Kc(e):e}function cl(n){const e=Ni(n.mapValue.fields[eE].timestampValue);return new _t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,t,i,o,a,c,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y}}const _c="(default)";class hl{constructor(e,t){this.projectId=e,this.database=t||_c}static empty(){return new hl("","")}get isDefaultDatabase(){return this.database===_c}isEqual(e){return e instanceof hl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="__type__",$R="__max__",Xu={mapValue:{}},nE="__vector__",vc="value";function Oi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ap(n)?4:WR(n)?9007199254740991:HR(n)?10:11:we()}function dr(n,e){if(n===e)return!0;const t=Oi(n);if(t!==Oi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return cl(n).isEqual(cl(e));case 3:return function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const c=Ni(o.timestampValue),d=Ni(a.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,a){return xi(o.bytesValue).isEqual(xi(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,a){return at(o.geoPointValue.latitude)===at(a.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(a.geoPointValue.longitude)}(n,e);case 2:return function(o,a){if("integerValue"in o&&"integerValue"in a)return at(o.integerValue)===at(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const c=at(o.doubleValue),d=at(a.doubleValue);return c===d?yc(c)===yc(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return Lo(n.arrayValue.values||[],e.arrayValue.values||[],dr);case 10:case 11:return function(o,a){const c=o.mapValue.fields||{},d=a.mapValue.fields||{};if(Ky(c)!==Ky(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!dr(c[p],d[p])))return!1;return!0}(n,e);default:return we()}}function dl(n,e){return(n.values||[]).find(t=>dr(t,e))!==void 0}function Vo(n,e){if(n===e)return 0;const t=Oi(n),i=Oi(e);if(t!==i)return Ae(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(n.booleanValue,e.booleanValue);case 2:return function(a,c){const d=at(a.integerValue||a.doubleValue),p=at(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return Qy(n.timestampValue,e.timestampValue);case 4:return Qy(cl(n),cl(e));case 5:return Sf(n.stringValue,e.stringValue);case 6:return function(a,c){const d=xi(a),p=xi(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(a,c){const d=a.split("/"),p=c.split("/");for(let y=0;y<d.length&&y<p.length;y++){const v=Ae(d[y],p[y]);if(v!==0)return v}return Ae(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,c){const d=Ae(at(a.latitude),at(c.latitude));return d!==0?d:Ae(at(a.longitude),at(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Xy(n.arrayValue,e.arrayValue);case 10:return function(a,c){var d,p,y,v;const w=a.fields||{},I=c.fields||{},D=(d=w[vc])===null||d===void 0?void 0:d.arrayValue,B=(p=I[vc])===null||p===void 0?void 0:p.arrayValue,z=Ae(((y=D==null?void 0:D.values)===null||y===void 0?void 0:y.length)||0,((v=B==null?void 0:B.values)===null||v===void 0?void 0:v.length)||0);return z!==0?z:Xy(D,B)}(n.mapValue,e.mapValue);case 11:return function(a,c){if(a===Xu.mapValue&&c===Xu.mapValue)return 0;if(a===Xu.mapValue)return 1;if(c===Xu.mapValue)return-1;const d=a.fields||{},p=Object.keys(d),y=c.fields||{},v=Object.keys(y);p.sort(),v.sort();for(let w=0;w<p.length&&w<v.length;++w){const I=Sf(p[w],v[w]);if(I!==0)return I;const D=Vo(d[p[w]],y[v[w]]);if(D!==0)return D}return Ae(p.length,v.length)}(n.mapValue,e.mapValue);default:throw we()}}function Qy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ae(n,e);const t=Ni(n),i=Ni(e),o=Ae(t.seconds,i.seconds);return o!==0?o:Ae(t.nanos,i.nanos)}function Xy(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const a=Vo(t[o],i[o]);if(a)return a}return Ae(t.length,i.length)}function Mo(n){return Rf(n)}function Rf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ni(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return xi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ye.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const a of t.values||[])o?o=!1:i+=",",i+=Rf(a);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const c of i)a?a=!1:o+=",",o+=`${c}:${Rf(t.fields[c])}`;return o+"}"}(n.mapValue):we()}function ic(n){switch(Oi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Kc(n);return e?16+ic(e):16;case 5:return 2*n.stringValue.length;case 6:return xi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,a)=>o+ic(a),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return Mi(i.fields,(a,c)=>{o+=a.length+ic(c)}),o}(n.mapValue);default:throw we()}}function Af(n){return!!n&&"integerValue"in n}function lp(n){return!!n&&"arrayValue"in n}function Yy(n){return!!n&&"nullValue"in n}function Jy(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function sc(n){return!!n&&"mapValue"in n}function HR(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[tE])===null||t===void 0?void 0:t.stringValue)===nE}function el(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Mi(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=el(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=el(n.arrayValue.values[t]);return e}return Object.assign({},n)}function WR(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===$R}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.value=e}static empty(){return new on({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!sc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=el(t)}setAll(e){let t=Nt.emptyPath(),i={},o=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}c?i[d.lastSegment()]=el(c):o.push(d.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,i,o)}delete(e){const t=this.field(e.popLast());sc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];sc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Mi(t,(o,a)=>e[o]=a);for(const o of i)delete e[o]}clone(){return new on(el(this.value))}}function rE(n){const e=[];return Mi(n.fields,(t,i)=>{const o=new Nt([t]);if(sc(i)){const a=rE(i.mapValue).fields;if(a.length===0)e.push(o);else for(const c of a)e.push(o.child(c))}else e.push(o)}),new gn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,i,o,a,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=a,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Bt(e,0,Ie.min(),Ie.min(),Ie.min(),on.empty(),0)}static newFoundDocument(e,t,i,o){return new Bt(e,1,t,Ie.min(),i,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Ie.min(),Ie.min(),on.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Ie.min(),Ie.min(),on.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=on.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=on.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t){this.position=e,this.inclusive=t}}function Zy(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const a=e[o],c=n.position[o];if(a.field.isKeyField()?i=ye.comparator(ye.fromName(c.referenceValue),t.key):i=Vo(c,t.data.field(a.field)),a.dir==="desc"&&(i*=-1),i!==0)break}return i}function e_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!dr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t="asc"){this.field=e,this.dir=t}}function qR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{}class yt extends iE{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new GR(e,t,i):t==="array-contains"?new YR(e,i):t==="in"?new JR(e,i):t==="not-in"?new ZR(e,i):t==="array-contains-any"?new eA(e,i):new yt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new QR(e,i):new XR(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Vo(t,this.value)):t!==null&&Oi(this.value)===Oi(t)&&this.matchesComparison(Vo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fr extends iE{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new fr(e,t)}matches(e){return sE(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function sE(n){return n.op==="and"}function oE(n){return KR(n)&&sE(n)}function KR(n){for(const e of n.filters)if(e instanceof fr)return!1;return!0}function Cf(n){if(n instanceof yt)return n.field.canonicalString()+n.op.toString()+Mo(n.value);if(oE(n))return n.filters.map(e=>Cf(e)).join(",");{const e=n.filters.map(t=>Cf(t)).join(",");return`${n.op}(${e})`}}function aE(n,e){return n instanceof yt?function(i,o){return o instanceof yt&&i.op===o.op&&i.field.isEqual(o.field)&&dr(i.value,o.value)}(n,e):n instanceof fr?function(i,o){return o instanceof fr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((a,c,d)=>a&&aE(c,o.filters[d]),!0):!1}(n,e):void we()}function lE(n){return n instanceof yt?function(t){return`${t.field.canonicalString()} ${t.op} ${Mo(t.value)}`}(n):n instanceof fr?function(t){return t.op.toString()+" {"+t.getFilters().map(lE).join(" ,")+"}"}(n):"Filter"}class GR extends yt{constructor(e,t,i){super(e,t,i),this.key=ye.fromName(i.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class QR extends yt{constructor(e,t){super(e,"in",t),this.keys=uE("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class XR extends yt{constructor(e,t){super(e,"not-in",t),this.keys=uE("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function uE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ye.fromName(i.referenceValue))}class YR extends yt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return lp(t)&&dl(t.arrayValue,this.value)}}class JR extends yt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&dl(this.value.arrayValue,t)}}class ZR extends yt{constructor(e,t){super(e,"not-in",t)}matches(e){if(dl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!dl(this.value.arrayValue,t)}}class eA extends yt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!lp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>dl(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,t=null,i=[],o=[],a=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=a,this.startAt=c,this.endAt=d,this.le=null}}function t_(n,e=null,t=[],i=[],o=null,a=null,c=null){return new tA(n,e,t,i,o,a,c)}function up(n){const e=Se(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Cf(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(a){return a.field.canonicalString()+a.dir}(i)).join(","),qc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Mo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Mo(i)).join(",")),e.le=t}return e.le}function cp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!qR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!aE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!e_(n.startAt,e.startAt)&&e_(n.endAt,e.endAt)}function Pf(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t=null,i=[],o=[],a=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=a,this.limitType=c,this.startAt=d,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function nA(n,e,t,i,o,a,c,d){return new Gc(n,e,t,i,o,a,c,d)}function Qc(n){return new Gc(n)}function n_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function rA(n){return n.collectionGroup!==null}function tl(n){const e=Se(n);if(e.he===null){e.he=[];const t=new Set;for(const a of e.explicitOrderBy)e.he.push(a),t.add(a.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new vt(Nt.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.he.push(new wc(a,i))}),t.has(Nt.keyField().canonicalString())||e.he.push(new wc(Nt.keyField(),i))}return e.he}function lr(n){const e=Se(n);return e.Pe||(e.Pe=iA(e,tl(n))),e.Pe}function iA(n,e){if(n.limitType==="F")return t_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const a=o.dir==="desc"?"asc":"desc";return new wc(o.field,a)});const t=n.endAt?new Ec(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Ec(n.startAt.position,n.startAt.inclusive):null;return t_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function kf(n,e,t){return new Gc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Xc(n,e){return cp(lr(n),lr(e))&&n.limitType===e.limitType}function cE(n){return`${up(lr(n))}|lt:${n.limitType}`}function So(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>lE(o)).join(", ")}]`),qc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Mo(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Mo(o)).join(",")),`Target(${i})`}(lr(n))}; limitType=${n.limitType})`}function Yc(n,e){return e.isFoundDocument()&&function(i,o){const a=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(a):ye.isDocumentKey(i.path)?i.path.isEqual(a):i.path.isImmediateParentOf(a)}(n,e)&&function(i,o){for(const a of tl(i))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const a of i.filters)if(!a.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(c,d,p){const y=Zy(c,d,p);return c.inclusive?y<=0:y<0}(i.startAt,tl(i),o)||i.endAt&&!function(c,d,p){const y=Zy(c,d,p);return c.inclusive?y>=0:y>0}(i.endAt,tl(i),o))}(n,e)}function sA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function hE(n){return(e,t)=>{let i=!1;for(const o of tl(n)){const a=oA(o,e,t);if(a!==0)return a;i=i||o.field.isKeyField()}return 0}}function oA(n,e,t){const i=n.field.isKeyField()?ye.comparator(e.key,t.key):function(a,c,d){const p=c.data.field(a),y=d.data.field(a);return p!==null&&y!==null?Vo(p,y):we()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return we()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,a]of i)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Mi(this.inner,(t,i)=>{for(const[o,a]of i)e(o,a)})}isEmpty(){return Qv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=new et(ye.comparator);function Mr(){return aA}const dE=new et(ye.comparator);function Ya(...n){let e=dE;for(const t of n)e=e.insert(t.key,t);return e}function fE(n){let e=dE;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function gs(){return nl()}function pE(){return nl()}function nl(){return new As(n=>n.toString(),(n,e)=>n.isEqual(e))}const lA=new et(ye.comparator),uA=new vt(ye.comparator);function ke(...n){let e=uA;for(const t of n)e=e.add(t);return e}const cA=new vt(Ae);function hA(){return cA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yc(e)?"-0":e}}function mE(n){return{integerValue:""+n}}function dA(n,e){return UR(e)?mE(e):hp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this._=void 0}}function fA(n,e,t){return n instanceof Tc?function(o,a){const c={fields:{[Jv]:{stringValue:Yv},[eE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&ap(a)&&(a=Kc(a)),a&&(c.fields[Zv]=a),{mapValue:c}}(t,e):n instanceof fl?yE(n,e):n instanceof pl?_E(n,e):function(o,a){const c=gE(o,a),d=r_(c)+r_(o.Ie);return Af(c)&&Af(o.Ie)?mE(d):hp(o.serializer,d)}(n,e)}function pA(n,e,t){return n instanceof fl?yE(n,e):n instanceof pl?_E(n,e):t}function gE(n,e){return n instanceof Ic?function(i){return Af(i)||function(a){return!!a&&"doubleValue"in a}(i)}(e)?e:{integerValue:0}:null}class Tc extends Jc{}class fl extends Jc{constructor(e){super(),this.elements=e}}function yE(n,e){const t=vE(e);for(const i of n.elements)t.some(o=>dr(o,i))||t.push(i);return{arrayValue:{values:t}}}class pl extends Jc{constructor(e){super(),this.elements=e}}function _E(n,e){let t=vE(e);for(const i of n.elements)t=t.filter(o=>!dr(o,i));return{arrayValue:{values:t}}}class Ic extends Jc{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function r_(n){return at(n.integerValue||n.doubleValue)}function vE(n){return lp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function mA(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof fl&&o instanceof fl||i instanceof pl&&o instanceof pl?Lo(i.elements,o.elements,dr):i instanceof Ic&&o instanceof Ic?dr(i.Ie,o.Ie):i instanceof Tc&&o instanceof Tc}(n.transform,e.transform)}class gA{constructor(e,t){this.version=e,this.transformResults=t}}class Hn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Hn}static exists(e){return new Hn(void 0,e)}static updateTime(e){return new Hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Zc{}function EE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new dp(n.key,Hn.none()):new Il(n.key,n.data,Hn.none());{const t=n.data,i=on.empty();let o=new vt(Nt.comparator);for(let a of e.fields)if(!o.has(a)){let c=t.field(a);c===null&&a.length>1&&(a=a.popLast(),c=t.field(a)),c===null?i.delete(a):i.set(a,c),o=o.add(a)}return new Ui(n.key,i,new gn(o.toArray()),Hn.none())}}function yA(n,e,t){n instanceof Il?function(o,a,c){const d=o.value.clone(),p=s_(o.fieldTransforms,a,c.transformResults);d.setAll(p),a.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Ui?function(o,a,c){if(!oc(o.precondition,a))return void a.convertToUnknownDocument(c.version);const d=s_(o.fieldTransforms,a,c.transformResults),p=a.data;p.setAll(wE(o)),p.setAll(d),a.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(o,a,c){a.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function rl(n,e,t,i){return n instanceof Il?function(a,c,d,p){if(!oc(a.precondition,c))return d;const y=a.value.clone(),v=o_(a.fieldTransforms,p,c);return y.setAll(v),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof Ui?function(a,c,d,p){if(!oc(a.precondition,c))return d;const y=o_(a.fieldTransforms,p,c),v=c.data;return v.setAll(wE(a)),v.setAll(y),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(w=>w.field))}(n,e,t,i):function(a,c,d){return oc(a.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function _A(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),a=gE(i.transform,o||null);a!=null&&(t===null&&(t=on.empty()),t.set(i.field,a))}return t||null}function i_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Lo(i,o,(a,c)=>mA(a,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Il extends Zc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ui extends Zc{constructor(e,t,i,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function wE(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function s_(n,e,t){const i=new Map;je(n.length===t.length);for(let o=0;o<t.length;o++){const a=n[o],c=a.transform,d=e.data.field(a.field);i.set(a.field,pA(c,d,t[o]))}return i}function o_(n,e,t){const i=new Map;for(const o of n){const a=o.transform,c=t.data.field(o.field);i.set(o.field,fA(a,c,e))}return i}class dp extends Zc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vA extends Zc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&yA(a,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=rl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=rl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=pE();return this.mutations.forEach(o=>{const a=e.get(o.key),c=a.overlayedDocument;let d=this.applyToLocalView(c,a.mutatedFields);d=t.has(o.key)?null:d;const p=EE(c,d);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(Ie.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ke())}isEqual(e){return this.batchId===e.batchId&&Lo(this.mutations,e.mutations,(t,i)=>i_(t,i))&&Lo(this.baseMutations,e.baseMutations,(t,i)=>i_(t,i))}}class fp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){je(e.mutations.length===i.length);let o=function(){return lA}();const a=e.mutations;for(let c=0;c<a.length;c++)o=o.insert(a[c].key,i[c].version);return new fp(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,Oe;function IA(n){switch(n){case X.OK:return we();case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return we()}}function TE(n){if(n===void 0)return Vr("GRPC error has no .code"),X.UNKNOWN;switch(n){case ht.OK:return X.OK;case ht.CANCELLED:return X.CANCELLED;case ht.UNKNOWN:return X.UNKNOWN;case ht.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case ht.INTERNAL:return X.INTERNAL;case ht.UNAVAILABLE:return X.UNAVAILABLE;case ht.UNAUTHENTICATED:return X.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case ht.NOT_FOUND:return X.NOT_FOUND;case ht.ALREADY_EXISTS:return X.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return X.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case ht.ABORTED:return X.ABORTED;case ht.OUT_OF_RANGE:return X.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return X.UNIMPLEMENTED;case ht.DATA_LOSS:return X.DATA_LOSS;default:return we()}}(Oe=ht||(ht={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=new Si([4294967295,4294967295],0);function a_(n){const e=qv().encode(n),t=new Fv;return t.update(e),new Uint8Array(t.digest())}function l_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Si([t,i],0),new Si([o,a],0)]}class pp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ja(`Invalid padding: ${t}`);if(i<0)throw new Ja(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ja(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ja(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Si.fromNumber(this.Ee)}Ae(e,t,i){let o=e.add(t.multiply(Si.fromNumber(i)));return o.compare(SA)===1&&(o=new Si([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=a_(e),[i,o]=l_(t);for(let a=0;a<this.hashCount;a++){const c=this.Ae(i,o,a);if(!this.Re(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),c=new pp(a,o,t);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.Ee===0)return;const t=a_(e),[i,o]=l_(t);for(let a=0;a<this.hashCount;a++){const c=this.Ae(i,o,a);this.Ve(c)}}Ve(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ja extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,t,i,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Sl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new eh(Ie.min(),o,new et(Ae),Mr(),ke())}}class Sl{constructor(e,t,i,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Sl(i,t,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,t,i,o){this.me=e,this.removedTargetIds=t,this.key=i,this.fe=o}}class IE{constructor(e,t){this.targetId=e,this.ge=t}}class SE{constructor(e,t,i=xt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class u_{constructor(){this.pe=0,this.ye=c_(),this.we=xt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=ke(),t=ke(),i=ke();return this.ye.forEach((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:we()}}),new Sl(this.we,this.Se,e,t,i)}Me(){this.be=!1,this.ye=c_()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,je(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class RA{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Mr(),this.$e=Yu(),this.Ue=Yu(),this.Ke=new et(Ae)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const i=this.He(t);switch(e.state){case 0:this.Je(t)&&i.Ce(e.resumeToken);break;case 1:i.Be(),i.De||i.Me(),i.Ce(e.resumeToken);break;case 2:i.Be(),i.De||this.removeTarget(t);break;case 3:this.Je(t)&&(i.Le(),i.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),i.Ce(e.resumeToken));break;default:we()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((i,o)=>{this.Je(o)&&t(o)})}Ze(e){const t=e.targetId,i=e.ge.count,o=this.Xe(t);if(o){const a=o.target;if(Pf(a))if(i===0){const c=new ye(a.path);this.ze(t,c,Bt.newNoDocument(c,Ie.min()))}else je(i===1);else{const c=this.et(t);if(c!==i){const d=this.tt(e),p=d?this.nt(d,e,c):1;if(p!==0){this.Ye(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=t;let c,d;try{c=xi(i).toUint8Array()}catch(p){if(p instanceof Xv)return bo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new pp(c,o,a)}catch(p){return bo(p instanceof Ja?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Ee===0?null:d}nt(e,t,i){return t.ge.count===i-this.st(e,t.targetId)?0:2}st(e,t){const i=this.ke.getRemoteKeysForTarget(t);let o=0;return i.forEach(a=>{const c=this.ke.it(),d=`projects/${c.projectId}/databases/${c.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,a,null),o++)}),o}ot(e){const t=new Map;this.qe.forEach((a,c)=>{const d=this.Xe(c);if(d){if(a.current&&Pf(d.target)){const p=new ye(d.target.path);this._t(p).has(c)||this.ut(c,p)||this.ze(c,p,Bt.newNoDocument(p,e))}a.ve&&(t.set(c,a.Fe()),a.Me())}});let i=ke();this.Ue.forEach((a,c)=>{let d=!0;c.forEachWhile(p=>{const y=this.Xe(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(a))}),this.Qe.forEach((a,c)=>c.setReadTime(e));const o=new eh(e,t,this.Ke,this.Qe,i);return this.Qe=Mr(),this.$e=Yu(),this.Ue=Yu(),this.Ke=new et(Ae),o}Ge(e,t){if(!this.Je(e))return;const i=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,i),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,i){if(!this.Je(e))return;const o=this.He(e);this.ut(e,t)?o.xe(t,1):o.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),i&&(this.Qe=this.Qe.insert(t,i))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new u_,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new vt(Ae),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new vt(Ae),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new u_),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Yu(){return new et(ye.comparator)}function c_(){return new et(ye.comparator)}const AA={asc:"ASCENDING",desc:"DESCENDING"},CA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PA={and:"AND",or:"OR"};class kA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Nf(n,e){return n.useProto3Json||qc(e)?e:{value:e}}function Sc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function RE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function NA(n,e){return Sc(n,e.toTimestamp())}function ur(n){return je(!!n),Ie.fromTimestamp(function(t){const i=Ni(t);return new _t(i.seconds,i.nanos)}(n))}function mp(n,e){return xf(n,e).canonicalString()}function xf(n,e){const t=function(o){return new Ye(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function AE(n){const e=Ye.fromString(n);return je(xE(e)),e}function Of(n,e){return mp(n.databaseId,e.path)}function nf(n,e){const t=AE(e);if(t.get(1)!==n.databaseId.projectId)throw new fe(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new fe(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye(PE(t))}function CE(n,e){return mp(n.databaseId,e)}function xA(n){const e=AE(n);return e.length===4?Ye.emptyPath():PE(e)}function Df(n){return new Ye(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function PE(n){return je(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function h_(n,e,t){return{name:Of(n,e),fields:t.value.mapValue.fields}}function OA(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:we()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=function(y,v){return y.useProto3Json?(je(v===void 0||typeof v=="string"),xt.fromBase64String(v||"")):(je(v===void 0||v instanceof Buffer||v instanceof Uint8Array),xt.fromUint8Array(v||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(y){const v=y.code===void 0?X.UNKNOWN:TE(y.code);return new fe(v,y.message||"")}(c);t=new SE(i,o,a,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=nf(n,i.document.name),a=ur(i.document.updateTime),c=i.document.createTime?ur(i.document.createTime):Ie.min(),d=new on({mapValue:{fields:i.document.fields}}),p=Bt.newFoundDocument(o,a,c,d),y=i.targetIds||[],v=i.removedTargetIds||[];t=new ac(y,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=nf(n,i.document),a=i.readTime?ur(i.readTime):Ie.min(),c=Bt.newNoDocument(o,a),d=i.removedTargetIds||[];t=new ac([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=nf(n,i.document),a=i.removedTargetIds||[];t=new ac([],a,o,null)}else{if(!("filter"in e))return we();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:a}=i,c=new TA(o,a),d=i.targetId;t=new IE(d,c)}}return t}function DA(n,e){let t;if(e instanceof Il)t={update:h_(n,e.key,e.value)};else if(e instanceof dp)t={delete:Of(n,e.key)};else if(e instanceof Ui)t={update:h_(n,e.key,e.data),updateMask:zA(e.fieldMask)};else{if(!(e instanceof vA))return we();t={verify:Of(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(a,c){const d=c.transform;if(d instanceof Tc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof fl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof pl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Ic)return{fieldPath:c.field.canonicalString(),increment:d.Ie};throw we()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,a){return a.updateTime!==void 0?{updateTime:NA(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:we()}(n,e.precondition)),t}function bA(n,e){return n&&n.length>0?(je(e!==void 0),n.map(t=>function(o,a){let c=o.updateTime?ur(o.updateTime):ur(a);return c.isEqual(Ie.min())&&(c=ur(a)),new gA(c,o.transformResults||[])}(t,e))):[]}function LA(n,e){return{documents:[CE(n,e.path)]}}function VA(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=CE(n,o);const a=function(y){if(y.length!==0)return NE(fr.create(y,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const c=function(y){if(y.length!==0)return y.map(v=>function(I){return{field:Ro(I.field),direction:FA(I.dir)}}(v))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Nf(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ht:t,parent:o}}function MA(n){let e=xA(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){je(i===1);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=function(w){const I=kE(w);return I instanceof fr&&oE(I)?I.getFilters():[I]}(t.where));let c=[];t.orderBy&&(c=function(w){return w.map(I=>function(B){return new wc(Ao(B.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(B.direction))}(I))}(t.orderBy));let d=null;t.limit&&(d=function(w){let I;return I=typeof w=="object"?w.value:w,qc(I)?null:I}(t.limit));let p=null;t.startAt&&(p=function(w){const I=!!w.before,D=w.values||[];return new Ec(D,I)}(t.startAt));let y=null;return t.endAt&&(y=function(w){const I=!w.before,D=w.values||[];return new Ec(D,I)}(t.endAt)),nA(e,o,c,a,d,"F",p,y)}function UA(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function kE(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Ao(t.unaryFilter.field);return yt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Ao(t.unaryFilter.field);return yt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Ao(t.unaryFilter.field);return yt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Ao(t.unaryFilter.field);return yt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return we()}}(n):n.fieldFilter!==void 0?function(t){return yt.create(Ao(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return we()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return fr.create(t.compositeFilter.filters.map(i=>kE(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we()}}(t.compositeFilter.op))}(n):we()}function FA(n){return AA[n]}function jA(n){return CA[n]}function BA(n){return PA[n]}function Ro(n){return{fieldPath:n.canonicalString()}}function Ao(n){return Nt.fromServerFormat(n.fieldPath)}function NE(n){return n instanceof yt?function(t){if(t.op==="=="){if(Jy(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NAN"}};if(Yy(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Jy(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NOT_NAN"}};if(Yy(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ro(t.field),op:jA(t.op),value:t.value}}}(n):n instanceof fr?function(t){const i=t.getFilters().map(o=>NE(o));return i.length===1?i[0]:{compositeFilter:{op:BA(t.op),filters:i}}}(n):we()}function zA(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function xE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t,i,o,a=Ie.min(),c=Ie.min(),d=xt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Ei(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.Tt=e}}function HA(n){const e=MA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?kf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(){this.Tn=new qA}addToCollectionParentIndex(e,t){return this.Tn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(ki.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(ki.min())}updateCollectionGroup(e,t,i){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class qA{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new vt(Ye.comparator),a=!o.has(i);return this.index[t]=o.add(i),a}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new vt(Ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},OE=41943040;class sn{static withCacheSize(e){return new sn(e,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn.DEFAULT_COLLECTION_PERCENTILE=10,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sn.DEFAULT=new sn(OE,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sn.DISABLED=new sn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Uo(0)}static Kn(){return new Uo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_="LruGarbageCollector",KA=1048576;function p_([n,e],[t,i]){const o=Ae(n,t);return o===0?Ae(e,i):o}class GA{constructor(e){this.Hn=e,this.buffer=new vt(p_),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();p_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class QA{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){oe(f_,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Go(t)?oe(f_,"Ignoring IndexedDB error during garbage collection: ",t):await Ko(t)}await this.er(3e5)})}}class XA{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return W.resolve(Wc.ae);const i=new GA(t);return this.tr.forEachTarget(e,o=>i.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>i.Zn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.tr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(d_)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),d_):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let i,o,a,c,d,p,y;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,c=Date.now(),this.nthSequenceNumber(e,o))).next(w=>(i=w,d=Date.now(),this.removeTargets(e,i,t))).next(w=>(a=w,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(w=>(y=Date.now(),Io()<=Pe.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${o} in `+(d-c)+`ms
	Removed ${a} targets in `+(p-d)+`ms
	Removed ${w} documents in `+(y-p)+`ms
Total Duration: ${y-v}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:w})))}}function YA(n,e){return new XA(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(){this.changes=new As(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?W.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&rl(i.mutation,o,gn.empty(),_t.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,ke()).next(()=>i))}getLocalViewOfDocuments(e,t,i=ke()){const o=gs();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(a=>{let c=Ya();return a.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=gs();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,ke()))}populateOverlays(e,t,i){const o=[];return i.forEach(a=>{t.has(a)||o.push(a)}),this.documentOverlayCache.getOverlays(e,o).next(a=>{a.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,i,o){let a=Mr();const c=nl(),d=function(){return nl()}();return t.forEach((p,y)=>{const v=i.get(y.key);o.has(y.key)&&(v===void 0||v.mutation instanceof Ui)?a=a.insert(y.key,y):v!==void 0?(c.set(y.key,v.mutation.getFieldMask()),rl(v.mutation,y,v.mutation.getFieldMask(),_t.now())):c.set(y.key,gn.empty())}),this.recalculateAndSaveOverlays(e,a).next(p=>(p.forEach((y,v)=>c.set(y,v)),t.forEach((y,v)=>{var w;return d.set(y,new ZA(v,(w=c.get(y))!==null&&w!==void 0?w:null))}),d))}recalculateAndSaveOverlays(e,t){const i=nl();let o=new et((c,d)=>c-d),a=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let v=i.get(p)||gn.empty();v=d.applyToLocalView(y,v),i.set(p,v);const w=(o.get(d.batchId)||ke()).add(p);o=o.insert(d.batchId,w)})}).next(()=>{const c=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,v=p.value,w=pE();v.forEach(I=>{if(!a.has(I)){const D=EE(t.get(I),i.get(I));D!==null&&w.set(I,D),a=a.add(I)}}),c.push(this.documentOverlayCache.saveOverlays(e,y,w))}return W.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(c){return ye.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):rA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(a=>{const c=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-a.size):W.resolve(gs());let d=ul,p=a;return c.next(y=>W.forEach(y,(v,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),a.get(v)?W.resolve():this.remoteDocumentCache.getEntry(e,v).next(I=>{p=p.insert(v,I)}))).next(()=>this.populateOverlays(e,y,a)).next(()=>this.computeViews(e,p,y,ke())).next(v=>({batchId:d,changes:fE(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(i=>{let o=Ya();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const a=t.collectionGroup;let c=Ya();return this.indexManager.getCollectionParents(e,a).next(d=>W.forEach(d,p=>{const y=function(w,I){return new Gc(I,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(t,p.child(a));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(v=>{v.forEach((w,I)=>{c=c.insert(w,I)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(a=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,a,o))).next(c=>{a.forEach((p,y)=>{const v=y.getKey();c.get(v)===null&&(c=c.insert(v,Bt.newInvalidDocument(v)))});let d=Ya();return c.forEach((p,y)=>{const v=a.get(p);v!==void 0&&rl(v.mutation,y,gn.empty(),_t.now()),Yc(t,y)&&(d=d.insert(p,y))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return W.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:ur(o.createTime)}}(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(o){return{name:o.name,query:HA(o.bundledQuery),readTime:ur(o.readTime)}}(t)),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(){this.overlays=new et(ye.comparator),this.Rr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const i=gs();return W.forEach(t,o=>this.getOverlay(e,o).next(a=>{a!==null&&i.set(o,a)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,a)=>{this.Et(e,t,a)}),W.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Rr.get(i);return o!==void 0&&(o.forEach(a=>this.overlays=this.overlays.remove(a)),this.Rr.delete(i)),W.resolve()}getOverlaysForCollection(e,t,i){const o=gs(),a=t.length+1,c=new ye(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===a&&p.largestBatchId>i&&o.set(p.getKey(),p)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let a=new et((y,v)=>y-v);const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let v=a.get(y.largestBatchId);v===null&&(v=gs(),a=a.insert(y.largestBatchId,v)),v.set(y.getKey(),y)}}const d=gs(),p=a.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,v)=>d.set(y,v)),!(d.size()>=o)););return W.resolve(d)}Et(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Rr.get(o.largestBatchId).delete(i.key);this.Rr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new wA(t,i));let a=this.Rr.get(t);a===void 0&&(a=ke(),this.Rr.set(t,a)),this.Rr.set(t,a.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(){this.Vr=new vt(St.mr),this.gr=new vt(St.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const i=new St(e,t);this.Vr=this.Vr.add(i),this.gr=this.gr.add(i)}yr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.wr(new St(e,t))}Sr(e,t){e.forEach(i=>this.removeReference(i,t))}br(e){const t=new ye(new Ye([])),i=new St(t,e),o=new St(t,e+1),a=[];return this.gr.forEachInRange([i,o],c=>{this.wr(c),a.push(c.key)}),a}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ye(new Ye([])),i=new St(t,e),o=new St(t,e+1);let a=ke();return this.gr.forEachInRange([i,o],c=>{a=a.add(c.key)}),a}containsKey(e){const t=new St(e,0),i=this.Vr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class St{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ye.comparator(e.key,t.key)||Ae(e.Cr,t.Cr)}static pr(e,t){return Ae(e.Cr,t.Cr)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new vt(St.mr)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const a=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new EA(a,t,i,o);this.mutationQueue.push(c);for(const d of o)this.Mr=this.Mr.add(new St(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return W.resolve(c)}lookupMutationBatch(e,t){return W.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Nr(i),a=o<0?0:o;return W.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?op:this.Fr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),a=[];return this.Mr.forEachInRange([i,o],c=>{const d=this.Or(c.Cr);a.push(d)}),W.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new vt(Ae);return t.forEach(o=>{const a=new St(o,0),c=new St(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([a,c],d=>{i=i.add(d.Cr)})}),W.resolve(this.Br(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let a=i;ye.isDocumentKey(a)||(a=a.child(""));const c=new St(new ye(a),0);let d=new vt(Ae);return this.Mr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.Cr)),!0)},c),W.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(i=>{const o=this.Or(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){je(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Mr;return W.forEach(t.mutations,o=>{const a=new St(o.key,t.batchId);return i=i.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=i})}qn(e){}containsKey(e,t){const i=new St(t,0),o=this.Mr.firstAfterOrEqual(i);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.kr=e,this.docs=function(){return new et(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),a=o?o.size:0,c=this.kr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-a,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return W.resolve(i?i.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let i=Mr();return t.forEach(o=>{const a=this.docs.get(o);i=i.insert(o,a?a.document.mutableCopy():Bt.newInvalidDocument(o))}),W.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let a=Mr();const c=t.path,d=new ye(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:v}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||bR(DR(v),i)<=0||(o.has(v.key)||Yc(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return W.resolve(a)}getAllFromCollectionGroup(e,t,i,o){we()}qr(e,t){return W.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new oC(this)}getSize(e){return W.resolve(this.size)}}class oC extends JA{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(i)}),W.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e){this.persistence=e,this.Qr=new As(t=>up(t),cp),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.$r=0,this.Ur=new gp,this.targetCount=0,this.Kr=Uo.Un()}forEachTarget(e,t){return this.Qr.forEach((i,o)=>t(o)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.$r&&(this.$r=t),W.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new Uo(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.zn(t),W.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,i){let o=0;const a=[];return this.Qr.forEach((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Qr.delete(c),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),W.waitFor(a).next(()=>o)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const i=this.Qr.get(t)||null;return W.resolve(i)}addMatchingKeys(e,t,i){return this.Ur.yr(t,i),W.resolve()}removeMatchingKeys(e,t,i){this.Ur.Sr(t,i);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach(c=>{a.push(o.markPotentiallyOrphaned(e,c))}),W.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),W.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Ur.vr(t);return W.resolve(i)}containsKey(e,t){return W.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Wc(0),this.zr=!1,this.zr=!0,this.jr=new rC,this.referenceDelegate=e(this),this.Hr=new aC(this),this.indexManager=new WA,this.remoteDocumentCache=function(o){return new sC(o)}(i=>this.referenceDelegate.Jr(i)),this.serializer=new $A(t),this.Yr=new tC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Wr[e.toKey()];return i||(i=new iC(t,this.referenceDelegate),this.Wr[e.toKey()]=i),i}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,i){oe("MemoryPersistence","Starting transaction:",e);const o=new lC(this.Gr.next());return this.referenceDelegate.Zr(),i(o).next(a=>this.referenceDelegate.Xr(o).next(()=>a)).toPromise().then(a=>(o.raiseOnCommittedEvent(),a))}ei(e,t){return W.or(Object.values(this.Wr).map(i=>()=>i.containsKey(e,t)))}}class lC extends VR{constructor(e){super(),this.currentSequenceNumber=e}}class yp{constructor(e){this.persistence=e,this.ti=new gp,this.ni=null}static ri(e){return new yp(e)}get ii(){if(this.ni)return this.ni;throw we()}addReference(e,t,i){return this.ti.addReference(i,t),this.ii.delete(i.toString()),W.resolve()}removeReference(e,t,i){return this.ti.removeReference(i,t),this.ii.add(i.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),W.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(o=>this.ii.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(a=>this.ii.add(a.toString()))}).next(()=>i.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.ii,i=>{const o=ye.fromPath(i);return this.si(e,o).next(a=>{a||t.removeEntry(o,Ie.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(i=>{i?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return W.or([()=>W.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Rc{constructor(e,t){this.persistence=e,this.oi=new As(i=>FR(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=YA(this,t)}static ri(e,t){return new Rc(e,t)}Zr(){}Xr(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}sr(e){let t=0;return this.rr(e,i=>{t++}).next(()=>t)}rr(e,t){return W.forEach(this.oi,(i,o)=>this.ar(e,i,o).next(a=>a?W.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.qr(e,c=>this.ar(e,c,t).next(d=>{d||(i++,a.removeEntry(c,Ie.min()))})).next(()=>a.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.oi.set(i,e.currentSequenceNumber),W.resolve()}removeReference(e,t,i){return this.oi.set(i,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),W.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ic(e.data.value)),t}ar(e,t,i){return W.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.oi.get(t);return W.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Hi=i,this.Ji=o}static Yi(e,t){let i=ke(),o=ke();for(const a of t.docChanges)switch(a.type){case 0:i=i.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new _p(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return sS()?8:MR(zt())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,i,o){const a={result:null};return this.rs(e,t).next(c=>{a.result=c}).next(()=>{if(!a.result)return this.ss(e,t,o,i).next(c=>{a.result=c})}).next(()=>{if(a.result)return;const c=new uC;return this._s(e,t,c).next(d=>{if(a.result=d,this.Xi)return this.us(e,t,c,d.size)})}).next(()=>a.result)}us(e,t,i,o){return i.documentReadCount<this.es?(Io()<=Pe.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",So(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),W.resolve()):(Io()<=Pe.DEBUG&&oe("QueryEngine","Query:",So(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.ts*o?(Io()<=Pe.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",So(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lr(t))):W.resolve())}rs(e,t){if(n_(t))return W.resolve(null);let i=lr(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=kf(t,null,"F"),i=lr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(a=>{const c=ke(...a);return this.ns.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.cs(t,d);return this.ls(t,y,c,p.readTime)?this.rs(e,kf(t,null,"F")):this.hs(e,y,t,p)}))})))}ss(e,t,i,o){return n_(t)||o.isEqual(Ie.min())?W.resolve(null):this.ns.getDocuments(e,i).next(a=>{const c=this.cs(t,a);return this.ls(t,c,i,o)?W.resolve(null):(Io()<=Pe.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),So(t)),this.hs(e,c,t,OR(o,ul)).next(d=>d))})}cs(e,t){let i=new vt(hE(e));return t.forEach((o,a)=>{Yc(e,a)&&(i=i.add(a))}),i}ls(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}_s(e,t,i){return Io()<=Pe.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",So(t)),this.ns.getDocumentsMatchingQuery(e,t,ki.min(),i)}hs(e,t,i,o){return this.ns.getDocumentsMatchingQuery(e,i,o).next(a=>(t.forEach(c=>{a=a.insert(c.key,c)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="LocalStore",hC=3e8;class dC{constructor(e,t,i,o){this.persistence=e,this.Ps=t,this.serializer=o,this.Ts=new et(Ae),this.Is=new As(a=>up(a),cp),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(i)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eC(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function fC(n,e,t,i){return new dC(n,e,t,i)}async function bE(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(a=>(o=a,t.As(e),t.mutationQueue.getAllMutationBatches(i))).next(a=>{const c=[],d=[];let p=ke();for(const y of o){c.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}for(const y of a){d.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Rs:y,removedBatchIds:c,addedBatchIds:d}))})})}function pC(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),a=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,p,y,v){const w=y.batch,I=w.keys();let D=W.resolve();return I.forEach(B=>{D=D.next(()=>v.getEntry(p,B)).next(z=>{const L=y.docVersions.get(B);je(L!==null),z.version.compareTo(L)<0&&(w.applyToRemoteDocument(z,y),z.isValidDocument()&&(z.setReadTime(y.commitVersion),v.addEntry(z)))})}),D.next(()=>d.mutationQueue.removeMutationBatch(p,w))}(t,i,e,a).next(()=>a.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=ke();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function LE(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function mC(n,e){const t=Se(n),i=e.snapshotVersion;let o=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const c=t.ds.newChangeBuffer({trackRemovals:!0});o=t.Ts;const d=[];e.targetChanges.forEach((v,w)=>{const I=o.get(w);if(!I)return;d.push(t.Hr.removeMatchingKeys(a,v.removedDocuments,w).next(()=>t.Hr.addMatchingKeys(a,v.addedDocuments,w)));let D=I.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?D=D.withResumeToken(xt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):v.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(v.resumeToken,i)),o=o.insert(w,D),function(z,L,Z){return z.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=hC?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0}(I,D,v)&&d.push(t.Hr.updateTargetData(a,D))});let p=Mr(),y=ke();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))}),d.push(gC(a,c,e.documentUpdates).next(v=>{p=v.Vs,y=v.fs})),!i.isEqual(Ie.min())){const v=t.Hr.getLastRemoteSnapshotVersion(a).next(w=>t.Hr.setTargetsMetadata(a,a.currentSequenceNumber,i));d.push(v)}return W.waitFor(d).next(()=>c.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,p,y)).next(()=>p)}).then(a=>(t.Ts=o,a))}function gC(n,e,t){let i=ke(),o=ke();return t.forEach(a=>i=i.add(a)),e.getEntries(n,i).next(a=>{let c=Mr();return t.forEach((d,p)=>{const y=a.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Ie.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):oe(vp,"Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)}),{Vs:c,fs:o}})}function yC(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=op),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function _C(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Hr.getTargetData(i,e).next(a=>a?(o=a,W.resolve(o)):t.Hr.allocateTargetId(i).next(c=>(o=new Ei(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Hr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.Ts.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(i.targetId,i),t.Is.set(e,i.targetId)),i})}async function bf(n,e,t){const i=Se(n),o=i.Ts.get(e),a=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",a,c=>i.persistence.referenceDelegate.removeTarget(c,o))}catch(c){if(!Go(c))throw c;oe(vp,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Ts=i.Ts.remove(e),i.Is.delete(o.target)}function m_(n,e,t){const i=Se(n);let o=Ie.min(),a=ke();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,y,v){const w=Se(p),I=w.Is.get(v);return I!==void 0?W.resolve(w.Ts.get(I)):w.Hr.getTargetData(y,v)}(i,c,lr(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Hr.getMatchingKeysForTargetId(c,d.targetId).next(p=>{a=p})}).next(()=>i.Ps.getDocumentsMatchingQuery(c,e,t?o:Ie.min(),t?a:ke())).next(d=>(vC(i,sA(e),d),{documents:d,gs:a})))}function vC(n,e,t){let i=n.Es.get(e)||Ie.min();t.forEach((o,a)=>{a.readTime.compareTo(i)>0&&(i=a.readTime)}),n.Es.set(e,i)}class g_{constructor(){this.activeTargetIds=hA()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EC{constructor(){this.ho=new g_,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,i){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new g_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="ConnectivityMonitor";class __{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){oe(y_,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){oe(y_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ju=null;function Lf(){return Ju===null?Ju=function(){return 268435456+Math.round(2147483648*Math.random())}():Ju++,"0x"+Ju.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="RestConnection",TC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class IC{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${i}/databases/${o}`,this.wo=this.databaseId.database===_c?`project_id=${i}`:`project_id=${i}&database_id=${o}`}So(e,t,i,o,a){const c=Lf(),d=this.bo(e,t.toUriEncodedString());oe(rf,`Sending RPC '${e}' ${c}:`,d,i);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,o,a),this.vo(e,d,p,i).then(y=>(oe(rf,`Received RPC '${e}' ${c}: `,y),y),y=>{throw bo(rf,`RPC '${e}' ${c} failed with error: `,y,"url: ",d,"request:",i),y})}Co(e,t,i,o,a,c){return this.So(e,t,i,o,a)}Do(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}bo(e,t){const i=TC[e];return`${this.po}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class RC extends IC{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,i,o){const a=Lf();return new Promise((c,d)=>{const p=new jv;p.setWithCredentials(!0),p.listenOnce(Bv.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case rc.NO_ERROR:const v=p.getResponseJson();oe(Ft,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(v)),c(v);break;case rc.TIMEOUT:oe(Ft,`RPC '${e}' ${a} timed out`),d(new fe(X.DEADLINE_EXCEEDED,"Request time out"));break;case rc.HTTP_ERROR:const w=p.getStatus();if(oe(Ft,`RPC '${e}' ${a} failed with status:`,w,"response text:",p.getResponseText()),w>0){let I=p.getResponseJson();Array.isArray(I)&&(I=I[0]);const D=I==null?void 0:I.error;if(D&&D.status&&D.message){const B=function(L){const Z=L.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(Z)>=0?Z:X.UNKNOWN}(D.status);d(new fe(B,D.message))}else d(new fe(X.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new fe(X.UNAVAILABLE,"Connection failed."));break;default:we()}}finally{oe(Ft,`RPC '${e}' ${a} completed.`)}});const y=JSON.stringify(o);oe(Ft,`RPC '${e}' ${a} sending request:`,o),p.send(t,"POST",y,i,15)})}Wo(e,t,i){const o=Lf(),a=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Hv(),d=$v(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const v=a.join("");oe(Ft,`Creating RPC '${e}' stream ${o}: ${v}`,p);const w=c.createWebChannel(v,p);let I=!1,D=!1;const B=new SC({Fo:L=>{D?oe(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,L):(I||(oe(Ft,`Opening RPC '${e}' stream ${o} transport.`),w.open(),I=!0),oe(Ft,`RPC '${e}' stream ${o} sending:`,L),w.send(L))},Mo:()=>w.close()}),z=(L,Z,ee)=>{L.listen(Z,K=>{try{ee(K)}catch(ne){setTimeout(()=>{throw ne},0)}})};return z(w,Xa.EventType.OPEN,()=>{D||(oe(Ft,`RPC '${e}' stream ${o} transport opened.`),B.Qo())}),z(w,Xa.EventType.CLOSE,()=>{D||(D=!0,oe(Ft,`RPC '${e}' stream ${o} transport closed`),B.Uo())}),z(w,Xa.EventType.ERROR,L=>{D||(D=!0,bo(Ft,`RPC '${e}' stream ${o} transport errored:`,L),B.Uo(new fe(X.UNAVAILABLE,"The operation could not be completed")))}),z(w,Xa.EventType.MESSAGE,L=>{var Z;if(!D){const ee=L.data[0];je(!!ee);const K=ee,ne=(K==null?void 0:K.error)||((Z=K[0])===null||Z===void 0?void 0:Z.error);if(ne){oe(Ft,`RPC '${e}' stream ${o} received error:`,ne);const _e=ne.status;let de=function(C){const x=ht[C];if(x!==void 0)return TE(x)}(_e),N=ne.message;de===void 0&&(de=X.INTERNAL,N="Unknown error status: "+_e+" with message "+ne.message),D=!0,B.Uo(new fe(de,N)),w.close()}else oe(Ft,`RPC '${e}' stream ${o} received:`,ee),B.Ko(ee)}}),z(d,zv.STAT_EVENT,L=>{L.stat===If.PROXY?oe(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):L.stat===If.NOPROXY&&oe(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{B.$o()},0),B}}function sf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(n){return new kA(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,t,i=1e3,o=1.5,a=6e4){this.Ti=e,this.timerId=t,this.Go=i,this.zo=o,this.jo=a,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),i=Math.max(0,Date.now()-this.Yo),o=Math.max(0,t-i);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="PersistentStream";class ME{constructor(e,t,i,o,a,c,d,p){this.Ti=e,this.n_=i,this.r_=o,this.connection=a,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new VE(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===X.RESOURCE_EXHAUSTED?(Vr(t.toString()),Vr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.i_===t&&this.V_(i,o)},i=>{e(()=>{const o=new fe(X.UNKNOWN,"Fetching auth token failed: "+i.message);return this.m_(o)})})}V_(e,t){const i=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{i(()=>this.listener.xo())}),this.stream.No(()=>{i(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{i(()=>this.m_(o))}),this.stream.onMessage(o=>{i(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return oe(v_,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(oe(v_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AC extends ME{constructor(e,t,i,o,a,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=a}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=OA(this.serializer,e),i=function(a){if(!("targetChange"in a))return Ie.min();const c=a.targetChange;return c.targetIds&&c.targetIds.length?Ie.min():c.readTime?ur(c.readTime):Ie.min()}(e);return this.listener.p_(t,i)}y_(e){const t={};t.database=Df(this.serializer),t.addTarget=function(a,c){let d;const p=c.target;if(d=Pf(p)?{documents:LA(a,p)}:{query:VA(a,p).ht},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=RE(a,c.resumeToken);const y=Nf(a,c.expectedCount);y!==null&&(d.expectedCount=y)}else if(c.snapshotVersion.compareTo(Ie.min())>0){d.readTime=Sc(a,c.snapshotVersion.toTimestamp());const y=Nf(a,c.expectedCount);y!==null&&(d.expectedCount=y)}return d}(this.serializer,e);const i=UA(this.serializer,e);i&&(t.labels=i),this.I_(t)}w_(e){const t={};t.database=Df(this.serializer),t.removeTarget=e,this.I_(t)}}class CC extends ME{constructor(e,t,i,o,a,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=a}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return je(!!e.streamToken),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){je(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=bA(e.writeResults,e.commitTime),i=ur(e.commitTime);return this.listener.v_(i,t)}C_(){const e={};e.database=Df(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>DA(this.serializer,i))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{}class kC extends PC{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new fe(X.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,i,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.So(e,xf(t,i),o,a,c)).catch(a=>{throw a.name==="FirebaseError"?(a.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new fe(X.UNKNOWN,a.toString())})}Co(e,t,i,o,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Co(e,xf(t,i),o,c,d,a)).catch(c=>{throw c.name==="FirebaseError"?(c.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new fe(X.UNKNOWN,c.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class NC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Vr(t),this.N_=!1):oe("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es="RemoteStore";class xC{constructor(e,t,i,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=a,this.z_.To(c=>{i.enqueueAndForget(async()=>{Cs(this)&&(oe(Es,"Restarting streams for network reachability change."),await async function(p){const y=Se(p);y.W_.add(4),await Rl(y),y.j_.set("Unknown"),y.W_.delete(4),await nh(y)}(this))})}),this.j_=new NC(i,o)}}async function nh(n){if(Cs(n))for(const e of n.G_)await e(!0)}async function Rl(n){for(const e of n.G_)await e(!1)}function UE(n,e){const t=Se(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),Ip(t)?Tp(t):Qo(t).c_()&&wp(t,e))}function Ep(n,e){const t=Se(n),i=Qo(t);t.K_.delete(e),i.c_()&&FE(t,e),t.K_.size===0&&(i.c_()?i.P_():Cs(t)&&t.j_.set("Unknown"))}function wp(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Qo(n).y_(e)}function FE(n,e){n.H_.Ne(e),Qo(n).w_(e)}function Tp(n){n.H_=new RA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Qo(n).start(),n.j_.B_()}function Ip(n){return Cs(n)&&!Qo(n).u_()&&n.K_.size>0}function Cs(n){return Se(n).W_.size===0}function jE(n){n.H_=void 0}async function OC(n){n.j_.set("Online")}async function DC(n){n.K_.forEach((e,t)=>{wp(n,e)})}async function bC(n,e){jE(n),Ip(n)?(n.j_.q_(e),Tp(n)):n.j_.set("Unknown")}async function LC(n,e,t){if(n.j_.set("Online"),e instanceof SE&&e.state===2&&e.cause)try{await async function(o,a){const c=a.cause;for(const d of a.targetIds)o.K_.has(d)&&(await o.remoteSyncer.rejectListen(d,c),o.K_.delete(d),o.H_.removeTarget(d))}(n,e)}catch(i){oe(Es,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ac(n,i)}else if(e instanceof ac?n.H_.We(e):e instanceof IE?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Ie.min()))try{const i=await LE(n.localStore);t.compareTo(i)>=0&&await function(a,c){const d=a.H_.ot(c);return d.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const v=a.K_.get(y);v&&a.K_.set(y,v.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,y)=>{const v=a.K_.get(p);if(!v)return;a.K_.set(p,v.withResumeToken(xt.EMPTY_BYTE_STRING,v.snapshotVersion)),FE(a,p);const w=new Ei(v.target,p,y,v.sequenceNumber);wp(a,w)}),a.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){oe(Es,"Failed to raise snapshot:",i),await Ac(n,i)}}async function Ac(n,e,t){if(!Go(e))throw e;n.W_.add(1),await Rl(n),n.j_.set("Offline"),t||(t=()=>LE(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{oe(Es,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await nh(n)})}function BE(n,e){return e().catch(t=>Ac(n,t,e))}async function rh(n){const e=Se(n),t=Di(e);let i=e.U_.length>0?e.U_[e.U_.length-1].batchId:op;for(;VC(e);)try{const o=await yC(e.localStore,i);if(o===null){e.U_.length===0&&t.P_();break}i=o.batchId,MC(e,o)}catch(o){await Ac(e,o)}zE(e)&&$E(e)}function VC(n){return Cs(n)&&n.U_.length<10}function MC(n,e){n.U_.push(e);const t=Di(n);t.c_()&&t.S_&&t.b_(e.mutations)}function zE(n){return Cs(n)&&!Di(n).u_()&&n.U_.length>0}function $E(n){Di(n).start()}async function UC(n){Di(n).C_()}async function FC(n){const e=Di(n);for(const t of n.U_)e.b_(t.mutations)}async function jC(n,e,t){const i=n.U_.shift(),o=fp.from(i,e,t);await BE(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await rh(n)}async function BC(n,e){e&&Di(n).S_&&await async function(i,o){if(function(c){return IA(c)&&c!==X.ABORTED}(o.code)){const a=i.U_.shift();Di(i).h_(),await BE(i,()=>i.remoteSyncer.rejectFailedWrite(a.batchId,o)),await rh(i)}}(n,e),zE(n)&&$E(n)}async function E_(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),oe(Es,"RemoteStore received new credentials");const i=Cs(t);t.W_.add(3),await Rl(t),i&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await nh(t)}async function zC(n,e){const t=Se(n);e?(t.W_.delete(2),await nh(t)):e||(t.W_.add(2),await Rl(t),t.j_.set("Unknown"))}function Qo(n){return n.J_||(n.J_=function(t,i,o){const a=Se(t);return a.M_(),new AC(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(n.datastore,n.asyncQueue,{xo:OC.bind(null,n),No:DC.bind(null,n),Lo:bC.bind(null,n),p_:LC.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),Ip(n)?Tp(n):n.j_.set("Unknown")):(await n.J_.stop(),jE(n))})),n.J_}function Di(n){return n.Y_||(n.Y_=function(t,i,o){const a=Se(t);return a.M_(),new CC(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:UC.bind(null,n),Lo:BC.bind(null,n),D_:FC.bind(null,n),v_:jC.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await rh(n)):(await n.Y_.stop(),n.U_.length>0&&(oe(Es,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,t,i,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=a,this.deferred=new Ri,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,a){const c=Date.now()+i,d=new Sp(e,t,c,o,a);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rp(n,e){if(Vr("AsyncQueue",`${e}: ${n}`),Go(n))return new fe(X.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{static emptySet(e){return new ko(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ye.comparator(t.key,i.key):(t,i)=>ye.comparator(t.key,i.key),this.keyedMap=Ya(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ko)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new ko;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.Z_=new et(ye.comparator)}track(e){const t=e.doc.key,i=this.Z_.get(t);i?e.type!==0&&i.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&i.type!==1?this.Z_=this.Z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Z_=this.Z_.remove(t):e.type===1&&i.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):we():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Fo{constructor(e,t,i,o,a,c,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=a,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,a){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new Fo(e,t,ko.emptySet(t),c,i,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class HC{constructor(){this.queries=T_(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,i){const o=Se(t),a=o.queries;o.queries=T_(),a.forEach((c,d)=>{for(const p of d.ta)p.onError(i)})})(this,new fe(X.ABORTED,"Firestore shutting down"))}}function T_(){return new As(n=>cE(n),Xc)}async function HE(n,e){const t=Se(n);let i=3;const o=e.query;let a=t.queries.get(o);a?!a.na()&&e.ra()&&(i=2):(a=new $C,i=e.ra()?0:1);try{switch(i){case 0:a.ea=await t.onListen(o,!0);break;case 1:a.ea=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const d=Rp(c,`Initialization of query '${So(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,a),a.ta.push(e),e.sa(t.onlineState),a.ea&&e.oa(a.ea)&&Ap(t)}async function WE(n,e){const t=Se(n),i=e.query;let o=3;const a=t.queries.get(i);if(a){const c=a.ta.indexOf(e);c>=0&&(a.ta.splice(c,1),a.ta.length===0?o=e.ra()?0:1:!a.na()&&e.ra()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function WC(n,e){const t=Se(n);let i=!1;for(const o of e){const a=o.query,c=t.queries.get(a);if(c){for(const d of c.ta)d.oa(o)&&(i=!0);c.ea=o}}i&&Ap(t)}function qC(n,e,t){const i=Se(n),o=i.queries.get(e);if(o)for(const a of o.ta)a.onError(t);i.queries.delete(e)}function Ap(n){n.ia.forEach(e=>{e.next()})}var Vf,I_;(I_=Vf||(Vf={}))._a="default",I_.Cache="cache";class qE{constructor(e,t,i){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=i||{}}oa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Fo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const i=t!=="Offline";return(!this.options.Ta||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Fo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Vf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this.key=e}}class GE{constructor(e){this.key=e}}class KC{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ke(),this.mutatedKeys=ke(),this.ya=hE(e),this.wa=new ko(this.ya)}get Sa(){return this.fa}ba(e,t){const i=t?t.Da:new w_,o=t?t.wa:this.wa;let a=t?t.mutatedKeys:this.mutatedKeys,c=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((v,w)=>{const I=o.get(v),D=Yc(this.query,w)?w:null,B=!!I&&this.mutatedKeys.has(I.key),z=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let L=!1;I&&D?I.data.isEqual(D.data)?B!==z&&(i.track({type:3,doc:D}),L=!0):this.va(I,D)||(i.track({type:2,doc:D}),L=!0,(p&&this.ya(D,p)>0||y&&this.ya(D,y)<0)&&(d=!0)):!I&&D?(i.track({type:0,doc:D}),L=!0):I&&!D&&(i.track({type:1,doc:I}),L=!0,(p||y)&&(d=!0)),L&&(D?(c=c.add(D),a=z?a.add(v):a.delete(v)):(c=c.delete(v),a=a.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),a=a.delete(v.key),i.track({type:1,doc:v})}return{wa:c,Da:i,ls:d,mutatedKeys:a}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const a=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const c=e.Da.X_();c.sort((v,w)=>function(D,B){const z=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we()}};return z(D)-z(B)}(v.type,w.type)||this.ya(v.doc,w.doc)),this.Ca(i),o=o!=null&&o;const d=t&&!o?this.Fa():[],p=this.pa.size===0&&this.current&&!o?1:0,y=p!==this.ga;return this.ga=p,c.length!==0||y?{snapshot:new Fo(this.query,e.wa,a,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new w_,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=ke(),this.wa.forEach(i=>{this.xa(i.key)&&(this.pa=this.pa.add(i.key))});const t=[];return e.forEach(i=>{this.pa.has(i)||t.push(new GE(i))}),this.pa.forEach(i=>{e.has(i)||t.push(new KE(i))}),t}Oa(e){this.fa=e.gs,this.pa=ke();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Fo.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Cp="SyncEngine";class GC{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class QC{constructor(e){this.key=e,this.Ba=!1}}class XC{constructor(e,t,i,o,a,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=c,this.La={},this.ka=new As(d=>cE(d),Xc),this.qa=new Map,this.Qa=new Set,this.$a=new et(ye.comparator),this.Ua=new Map,this.Ka=new gp,this.Wa={},this.Ga=new Map,this.za=Uo.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function YC(n,e,t=!0){const i=ew(n);let o;const a=i.ka.get(e);return a?(i.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.Na()):o=await QE(i,e,t,!0),o}async function JC(n,e){const t=ew(n);await QE(t,e,!0,!1)}async function QE(n,e,t,i){const o=await _C(n.localStore,lr(e)),a=o.targetId,c=n.sharedClientState.addLocalQueryTarget(a,t);let d;return i&&(d=await ZC(n,e,a,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&UE(n.remoteStore,o),d}async function ZC(n,e,t,i,o){n.Ha=(w,I,D)=>async function(z,L,Z,ee){let K=L.view.ba(Z);K.ls&&(K=await m_(z.localStore,L.query,!1).then(({documents:N})=>L.view.ba(N,K)));const ne=ee&&ee.targetChanges.get(L.targetId),_e=ee&&ee.targetMismatches.get(L.targetId)!=null,de=L.view.applyChanges(K,z.isPrimaryClient,ne,_e);return R_(z,L.targetId,de.Ma),de.snapshot}(n,w,I,D);const a=await m_(n.localStore,e,!0),c=new KC(e,a.gs),d=c.ba(a.documents),p=Sl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(d,n.isPrimaryClient,p);R_(n,t,y.Ma);const v=new GC(e,t,c);return n.ka.set(e,v),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),y.snapshot}async function eP(n,e,t){const i=Se(n),o=i.ka.get(e),a=i.qa.get(o.targetId);if(a.length>1)return i.qa.set(o.targetId,a.filter(c=>!Xc(c,e))),void i.ka.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await bf(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Ep(i.remoteStore,o.targetId),Mf(i,o.targetId)}).catch(Ko)):(Mf(i,o.targetId),await bf(i.localStore,o.targetId,!0))}async function tP(n,e){const t=Se(n),i=t.ka.get(e),o=t.qa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Ep(t.remoteStore,i.targetId))}async function nP(n,e,t){const i=uP(n);try{const o=await function(c,d){const p=Se(c),y=_t.now(),v=d.reduce((D,B)=>D.add(B.key),ke());let w,I;return p.persistence.runTransaction("Locally write mutations","readwrite",D=>{let B=Mr(),z=ke();return p.ds.getEntries(D,v).next(L=>{B=L,B.forEach((Z,ee)=>{ee.isValidDocument()||(z=z.add(Z))})}).next(()=>p.localDocuments.getOverlayedDocuments(D,B)).next(L=>{w=L;const Z=[];for(const ee of d){const K=_A(ee,w.get(ee.key).overlayedDocument);K!=null&&Z.push(new Ui(ee.key,K,rE(K.value.mapValue),Hn.exists(!0)))}return p.mutationQueue.addMutationBatch(D,y,Z,d)}).next(L=>{I=L;const Z=L.applyToLocalDocumentSet(w,z);return p.documentOverlayCache.saveOverlays(D,L.batchId,Z)})}).then(()=>({batchId:I.batchId,changes:fE(w)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(c,d,p){let y=c.Wa[c.currentUser.toKey()];y||(y=new et(Ae)),y=y.insert(d,p),c.Wa[c.currentUser.toKey()]=y}(i,o.batchId,t),await Al(i,o.changes),await rh(i.remoteStore)}catch(o){const a=Rp(o,"Failed to persist write");t.reject(a)}}async function XE(n,e){const t=Se(n);try{const i=await mC(t.localStore,e);e.targetChanges.forEach((o,a)=>{const c=t.Ua.get(a);c&&(je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?c.Ba=!0:o.modifiedDocuments.size>0?je(c.Ba):o.removedDocuments.size>0&&(je(c.Ba),c.Ba=!1))}),await Al(t,i,e)}catch(i){await Ko(i)}}function S_(n,e,t){const i=Se(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.ka.forEach((a,c)=>{const d=c.view.sa(e);d.snapshot&&o.push(d.snapshot)}),function(c,d){const p=Se(c);p.onlineState=d;let y=!1;p.queries.forEach((v,w)=>{for(const I of w.ta)I.sa(d)&&(y=!0)}),y&&Ap(p)}(i.eventManager,e),o.length&&i.La.p_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function rP(n,e,t){const i=Se(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Ua.get(e),a=o&&o.key;if(a){let c=new et(ye.comparator);c=c.insert(a,Bt.newNoDocument(a,Ie.min()));const d=ke().add(a),p=new eh(Ie.min(),new Map,new et(Ae),c,d);await XE(i,p),i.$a=i.$a.remove(a),i.Ua.delete(e),Pp(i)}else await bf(i.localStore,e,!1).then(()=>Mf(i,e,t)).catch(Ko)}async function iP(n,e){const t=Se(n),i=e.batch.batchId;try{const o=await pC(t.localStore,e);JE(t,i,null),YE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Al(t,o)}catch(o){await Ko(o)}}async function sP(n,e,t){const i=Se(n);try{const o=await function(c,d){const p=Se(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let v;return p.mutationQueue.lookupMutationBatch(y,d).next(w=>(je(w!==null),v=w.keys(),p.mutationQueue.removeMutationBatch(y,w))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,v)).next(()=>p.localDocuments.getDocuments(y,v))})}(i.localStore,e);JE(i,e,t),YE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Al(i,o)}catch(o){await Ko(o)}}function YE(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function JE(n,e,t){const i=Se(n);let o=i.Wa[i.currentUser.toKey()];if(o){const a=o.get(e);a&&(t?a.reject(t):a.resolve(),o=o.remove(e)),i.Wa[i.currentUser.toKey()]=o}}function Mf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.qa.get(e))n.ka.delete(i),t&&n.La.Ja(i,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(i=>{n.Ka.containsKey(i)||ZE(n,i)})}function ZE(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(Ep(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),Pp(n))}function R_(n,e,t){for(const i of t)i instanceof KE?(n.Ka.addReference(i.key,e),oP(n,i)):i instanceof GE?(oe(Cp,"Document no longer in limbo: "+i.key),n.Ka.removeReference(i.key,e),n.Ka.containsKey(i.key)||ZE(n,i.key)):we()}function oP(n,e){const t=e.key,i=t.path.canonicalString();n.$a.get(t)||n.Qa.has(i)||(oe(Cp,"New document in limbo: "+t),n.Qa.add(i),Pp(n))}function Pp(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new ye(Ye.fromString(e)),i=n.za.next();n.Ua.set(i,new QC(t)),n.$a=n.$a.insert(t,i),UE(n.remoteStore,new Ei(lr(Qc(t.path)),i,"TargetPurposeLimboResolution",Wc.ae))}}async function Al(n,e,t){const i=Se(n),o=[],a=[],c=[];i.ka.isEmpty()||(i.ka.forEach((d,p)=>{c.push(i.Ha(p,e,t).then(y=>{var v;if((y||t)&&i.isPrimaryClient){const w=y?!y.fromCache:(v=t==null?void 0:t.targetChanges.get(p.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,w?"current":"not-current")}if(y){o.push(y);const w=_p.Yi(p.targetId,y);a.push(w)}}))}),await Promise.all(c),i.La.p_(o),await async function(p,y){const v=Se(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>W.forEach(y,I=>W.forEach(I.Hi,D=>v.persistence.referenceDelegate.addReference(w,I.targetId,D)).next(()=>W.forEach(I.Ji,D=>v.persistence.referenceDelegate.removeReference(w,I.targetId,D)))))}catch(w){if(!Go(w))throw w;oe(vp,"Failed to update sequence numbers: "+w)}for(const w of y){const I=w.targetId;if(!w.fromCache){const D=v.Ts.get(I),B=D.snapshotVersion,z=D.withLastLimboFreeSnapshotVersion(B);v.Ts=v.Ts.insert(I,z)}}}(i.localStore,a))}async function aP(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){oe(Cp,"User change. New user:",e.toKey());const i=await bE(t.localStore,e);t.currentUser=e,function(a,c){a.Ga.forEach(d=>{d.forEach(p=>{p.reject(new fe(X.CANCELLED,c))})}),a.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Al(t,i.Rs)}}function lP(n,e){const t=Se(n),i=t.Ua.get(e);if(i&&i.Ba)return ke().add(i.key);{let o=ke();const a=t.qa.get(e);if(!a)return o;for(const c of a){const d=t.ka.get(c);o=o.unionWith(d.view.Sa)}return o}}function ew(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=XE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rP.bind(null,e),e.La.p_=WC.bind(null,e.eventManager),e.La.Ja=qC.bind(null,e.eventManager),e}function uP(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sP.bind(null,e),e}class Cc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=th(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return fC(this.persistence,new cC,e.initialUser,this.serializer)}Xa(e){return new DE(yp.ri,this.serializer)}Za(e){return new EC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cc.provider={build:()=>new Cc};class cP extends Cc{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){je(this.persistence.referenceDelegate instanceof Rc);const i=this.persistence.referenceDelegate.garbageCollector;return new QA(i,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?sn.withCacheSize(this.cacheSizeBytes):sn.DEFAULT;return new DE(i=>Rc.ri(i,t),this.serializer)}}class Uf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>S_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=aP.bind(null,this.syncEngine),await zC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new HC}()}createDatastore(e){const t=th(e.databaseInfo.databaseId),i=function(a){return new RC(a)}(e.databaseInfo);return function(a,c,d,p){return new kC(a,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,a,c,d){return new xC(i,o,a,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>S_(this.syncEngine,t,0),function(){return __.D()?new __:new wC}())}createSyncEngine(e,t){return function(o,a,c,d,p,y,v){const w=new XC(o,a,c,d,p,y);return v&&(w.ja=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const a=Se(o);oe(Es,"RemoteStore shutting down."),a.W_.add(5),await Rl(a),a.z_.shutdown(),a.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Uf.provider={build:()=>new Uf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Vr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="FirestoreClient";class hP{constructor(e,t,i,o,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=jt.UNAUTHENTICATED,this.clientId=Kv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(i,async c=>{oe(bi,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(oe(bi,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ri;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Rp(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function of(n,e){n.asyncQueue.verifyOperationInProgress(),oe(bi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await bE(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function A_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await dP(n);oe(bi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>E_(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>E_(e.remoteStore,o)),n._onlineComponents=e}async function dP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){oe(bi,"Using user provided OfflineComponentProvider");try{await of(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===X.FAILED_PRECONDITION||o.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;bo("Error using user provided cache. Falling back to memory cache: "+t),await of(n,new Cc)}}else oe(bi,"Using default OfflineComponentProvider"),await of(n,new cP(void 0));return n._offlineComponents}async function nw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(oe(bi,"Using user provided OnlineComponentProvider"),await A_(n,n._uninitializedComponentsProvider._online)):(oe(bi,"Using default OnlineComponentProvider"),await A_(n,new Uf))),n._onlineComponents}function fP(n){return nw(n).then(e=>e.syncEngine)}async function Ff(n){const e=await nw(n),t=e.eventManager;return t.onListen=YC.bind(null,e.syncEngine),t.onUnlisten=eP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=JC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=tP.bind(null,e.syncEngine),t}function pP(n,e,t={}){const i=new Ri;return n.asyncQueue.enqueueAndForget(async()=>function(a,c,d,p,y){const v=new tw({next:I=>{v.su(),c.enqueueAndForget(()=>WE(a,w));const D=I.docs.has(d);!D&&I.fromCache?y.reject(new fe(X.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&I.fromCache&&p&&p.source==="server"?y.reject(new fe(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(I)},error:I=>y.reject(I)}),w=new qE(Qc(d.path),v,{includeMetadataChanges:!0,Ta:!0});return HE(a,w)}(await Ff(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(n,e,t){if(!t)throw new fe(X.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function mP(n,e,t,i){if(e===!0&&i===!0)throw new fe(X.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function P_(n){if(!ye.isDocumentKey(n))throw new fe(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function k_(n){if(ye.isDocumentKey(n))throw new fe(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function kp(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":we()}function Wn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new fe(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=kp(n);throw new fe(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw="firestore.googleapis.com",N_=!0;class x_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new fe(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sw,this.ssl=N_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:N_;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=OE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<KA)throw new fe(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new fe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new fe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new fe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ih{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new x_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new x_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new IR;switch(i.type){case"firstParty":return new CR(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new fe(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=C_.get(t);i&&(oe("ComponentProvider","Removing Datastore"),C_.delete(t),i.terminate())}(this),Promise.resolve()}}function gP(n,e,t,i={}){var o;const a=(n=Wn(n,ih))._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),d=`${e}:${t}`;a.host!==sw&&a.host!==d&&bo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},a),{host:d,ssl:!1,emulatorOptions:i});if(!_s(p,c)&&(n._setSettings(p),i.mockUserToken)){let y,v;if(typeof i.mockUserToken=="string")y=i.mockUserToken,v=jt.MOCK_USER;else{y=Dv(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new fe(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new jt(w)}n._authCredentials=new SR(new Wv(y,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new sh(this.firestore,e,this._query)}}class Qt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ai(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qt(this.firestore,e,this._key)}}class Ai extends sh{constructor(e,t,i){super(e,t,Qc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qt(this.firestore,null,new ye(e))}withConverter(e){return new Ai(this.firestore,e,this._path)}}function oh(n,e,...t){if(n=qe(n),iw("collection","path",e),n instanceof ih){const i=Ye.fromString(e,...t);return k_(i),new Ai(n,null,i)}{if(!(n instanceof Qt||n instanceof Ai))throw new fe(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ye.fromString(e,...t));return k_(i),new Ai(n.firestore,null,i)}}function Li(n,e,...t){if(n=qe(n),arguments.length===1&&(e=Kv.newId()),iw("doc","path",e),n instanceof ih){const i=Ye.fromString(e,...t);return P_(i),new Qt(n,null,new ye(i))}{if(!(n instanceof Qt||n instanceof Ai))throw new fe(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ye.fromString(e,...t));return P_(i),new Qt(n.firestore,n instanceof Ai?n.converter:null,new ye(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="AsyncQueue";class D_{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new VE(this,"async_queue_retry"),this.Su=()=>{const i=sf();i&&oe(O_,"Visibility state changed to "+i.visibilityState),this.a_.t_()},this.bu=e;const t=sf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=sf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Ri;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Go(e))throw e;oe(O_,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(i=>{this.gu=i,this.pu=!1;const o=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(i);throw Vr("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.pu=!1,i))));return this.bu=t,t}enqueueAfterDelay(e,t,i){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const o=Sp.createAndSchedule(this,e,t,i,a=>this.Fu(a));return this.fu.push(o),o}Du(){this.gu&&we()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function b_(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const a of i)if(a in o&&typeof o[a]=="function")return!0;return!1}(n,["next","error","complete"])}class ws extends ih{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new D_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new D_(e),this._firestoreClient=void 0,await e}}}function ah(n,e){const t=typeof n=="object"?n:Hc(),i=typeof n=="string"?n:_c,o=Tl(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const a=np("firestore");a&&gP(o,...a)}return o}function Np(n){if(n._terminated)throw new fe(X.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||yP(n),n._firestoreClient}function yP(n){var e,t,i;const o=n._freezeSettings(),a=function(d,p,y,v){return new zR(d,p,y,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,rw(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new hP(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jo(xt.fromBase64String(e))}catch(t){throw new fe(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new jo(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new fe(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new fe(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new fe(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let a=0;a<i.length;++a)if(i[a]!==o[a])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P=/^__.*__$/;class vP{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ui(e,this.data,this.fieldMask,t,this.fieldTransforms):new Il(e,this.data,t,this.fieldTransforms)}}class ow{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Ui(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function aw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we()}}class bp{constructor(e,t,i,o,a,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,a===void 0&&this.Bu(),this.fieldTransforms=a||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new bp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:i,Qu:!1});return o.$u(e),o}Uu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:i,Qu:!1});return o.Bu(),o}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Pc(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(aw(this.Lu)&&_P.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class EP{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||th(e)}ju(e,t,i,o=!1){return new bp({Lu:e,methodName:t,zu:i,path:Nt.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lw(n){const e=n._freezeSettings(),t=th(n._databaseId);return new EP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function wP(n,e,t,i,o,a={}){const c=n.ju(a.merge||a.mergeFields?2:0,e,t,o);Lp("Data must be an object, but it was:",c,i);const d=uw(i,c);let p,y;if(a.merge)p=new gn(c.fieldMask),y=c.fieldTransforms;else if(a.mergeFields){const v=[];for(const w of a.mergeFields){const I=jf(e,w,t);if(!c.contains(I))throw new fe(X.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);hw(v,I)||v.push(I)}p=new gn(v),y=c.fieldTransforms.filter(w=>p.covers(w.field))}else p=null,y=c.fieldTransforms;return new vP(new on(d),p,y)}class uh extends xp{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uh}}function TP(n,e,t,i){const o=n.ju(1,e,t);Lp("Data must be an object, but it was:",o,i);const a=[],c=on.empty();Mi(i,(p,y)=>{const v=Vp(e,p,t);y=qe(y);const w=o.Uu(v);if(y instanceof uh)a.push(v);else{const I=ch(y,w);I!=null&&(a.push(v),c.set(v,I))}});const d=new gn(a);return new ow(c,d,o.fieldTransforms)}function IP(n,e,t,i,o,a){const c=n.ju(1,e,t),d=[jf(e,i,t)],p=[o];if(a.length%2!=0)throw new fe(X.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<a.length;I+=2)d.push(jf(e,a[I])),p.push(a[I+1]);const y=[],v=on.empty();for(let I=d.length-1;I>=0;--I)if(!hw(y,d[I])){const D=d[I];let B=p[I];B=qe(B);const z=c.Uu(D);if(B instanceof uh)y.push(D);else{const L=ch(B,z);L!=null&&(y.push(D),v.set(D,L))}}const w=new gn(y);return new ow(v,w,c.fieldTransforms)}function ch(n,e){if(cw(n=qe(n)))return Lp("Unsupported field value:",e,n),uw(n,e);if(n instanceof xp)return function(i,o){if(!aw(o.Lu))throw o.Wu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${i._methodName}() is not currently supported inside arrays`);const a=i._toFieldTransform(o);a&&o.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(i,o){const a=[];let c=0;for(const d of i){let p=ch(d,o.Ku(c));p==null&&(p={nullValue:"NULL_VALUE"}),a.push(p),c++}return{arrayValue:{values:a}}}(n,e)}return function(i,o){if((i=qe(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return dA(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const a=_t.fromDate(i);return{timestampValue:Sc(o.serializer,a)}}if(i instanceof _t){const a=new _t(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Sc(o.serializer,a)}}if(i instanceof Op)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof jo)return{bytesValue:RE(o.serializer,i._byteString)};if(i instanceof Qt){const a=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(a))throw o.Wu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:mp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Dp)return function(c,d){return{mapValue:{fields:{[tE]:{stringValue:nE},[vc]:{arrayValue:{values:c.toArray().map(y=>{if(typeof y!="number")throw d.Wu("VectorValues must only contain numeric values.");return hp(d.serializer,y)})}}}}}}(i,o);throw o.Wu(`Unsupported field value: ${kp(i)}`)}(n,e)}function uw(n,e){const t={};return Qv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mi(n,(i,o)=>{const a=ch(o,e.qu(i));a!=null&&(t[i]=a)}),{mapValue:{fields:t}}}function cw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _t||n instanceof Op||n instanceof jo||n instanceof Qt||n instanceof xp||n instanceof Dp)}function Lp(n,e,t){if(!cw(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=kp(t);throw i==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+i)}}function jf(n,e,t){if((e=qe(e))instanceof lh)return e._internalPath;if(typeof e=="string")return Vp(n,e);throw Pc("Field path arguments must be of type string or ",n,!1,void 0,t)}const SP=new RegExp("[~\\*/\\[\\]]");function Vp(n,e,t){if(e.search(SP)>=0)throw Pc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new lh(...e.split("."))._internalPath}catch{throw Pc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Pc(n,e,t,i,o){const a=i&&!i.isEmpty(),c=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(a||c)&&(p+=" (found",a&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new fe(X.INVALID_ARGUMENT,d+n+p)}function hw(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,t,i,o,a){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new RP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(fw("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class RP extends dw{data(){return super.data()}}function fw(n,e){return typeof e=="string"?Vp(n,e):e instanceof lh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new fe(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class CP{convertValue(e,t="none"){switch(Oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Mi(e,(o,a)=>{i[o]=this.convertValue(a,t)}),i}convertVectorValue(e){var t,i,o;const a=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[vc].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(c=>at(c.doubleValue));return new Dp(a)}convertGeoPoint(e){return new Op(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Kc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(cl(e));default:return null}}convertTimestamp(e){const t=Ni(e);return new _t(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ye.fromString(e);je(xE(i));const o=new hl(i.get(1),i.get(3)),a=new ye(i.popFirst(5));return o.isEqual(t)||Vr(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PP(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pw extends dw{constructor(e,t,i,o,a,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(fw("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class lc extends pw{data(e={}){return super.data(e)}}class kP{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Za(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new lc(this._firestore,this._userDataWriter,i.key,i,new Za(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new fe(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,a){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map(d=>{const p=new lc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Za(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>a||d.type!==3).map(d=>{const p=new lc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Za(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,v=-1;return d.type!==0&&(y=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:NP(d.type),doc:p,oldIndex:y,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function NP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(n){n=Wn(n,Qt);const e=Wn(n.firestore,ws);return pP(Np(e),n._key).then(t=>_w(e,n,t))}class mw extends CP{constructor(e){super(),this.firestore=e}convertBytes(e){return new jo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Qt(this.firestore,null,t)}}function gw(n,e,t){n=Wn(n,Qt);const i=Wn(n.firestore,ws),o=PP(n.converter,e);return Mp(i,[wP(lw(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Hn.none())])}function L_(n,e,t,...i){n=Wn(n,Qt);const o=Wn(n.firestore,ws),a=lw(o);let c;return c=typeof(e=qe(e))=="string"||e instanceof lh?IP(a,"updateDoc",n._key,e,t,i):TP(a,"updateDoc",n._key,e),Mp(o,[c.toMutation(n._key,Hn.exists(!0))])}function OP(n){return Mp(Wn(n.firestore,ws),[new dp(n._key,Hn.none())])}function yw(n,...e){var t,i,o;n=qe(n);let a={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||b_(e[c])||(a=e[c],c++);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(b_(e[c])){const w=e[c];e[c]=(t=w.next)===null||t===void 0?void 0:t.bind(w),e[c+1]=(i=w.error)===null||i===void 0?void 0:i.bind(w),e[c+2]=(o=w.complete)===null||o===void 0?void 0:o.bind(w)}let p,y,v;if(n instanceof Qt)y=Wn(n.firestore,ws),v=Qc(n._key.path),p={next:w=>{e[c]&&e[c](_w(y,n,w))},error:e[c+1],complete:e[c+2]};else{const w=Wn(n,sh);y=Wn(w.firestore,ws),v=w._query;const I=new mw(y);p={next:D=>{e[c]&&e[c](new kP(y,I,w,D))},error:e[c+1],complete:e[c+2]},AP(n._query)}return function(I,D,B,z){const L=new tw(z),Z=new qE(D,L,B);return I.asyncQueue.enqueueAndForget(async()=>HE(await Ff(I),Z)),()=>{L.su(),I.asyncQueue.enqueueAndForget(async()=>WE(await Ff(I),Z))}}(Np(y),v,d,p)}function Mp(n,e){return function(i,o){const a=new Ri;return i.asyncQueue.enqueueAndForget(async()=>nP(await fP(i),o,a)),a.promise}(Np(n),e)}function _w(n,e,t){const i=t.docs.get(e._key),o=new mw(n);return new pw(n,o,e._key,i,new Za(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){qo=o})(Rs),Pi(new br("firestore",(i,{instanceIdentifier:o,options:a})=>{const c=i.getProvider("app").getImmediate(),d=new ws(new RR(i.getProvider("auth-internal")),new PR(c,i.getProvider("app-check-internal")),function(y,v){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new fe(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hl(y.options.projectId,v)}(c,o),c);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d},"PUBLIC").setMultipleInstances(!0)),Cn(Fy,jy,e),Cn(Fy,jy,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw="firebasestorage.googleapis.com",Ew="storageBucket",DP=2*60*1e3,bP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Gn{constructor(e,t,i=0){super(af(e),`Firebase Storage: ${t} (${af(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return af(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nt||(nt={}));function af(n){return"storage/"+n}function Up(){const n="An unknown error occurred, please check the error payload for server response.";return new rt(nt.UNKNOWN,n)}function LP(n){return new rt(nt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function VP(n){return new rt(nt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function MP(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new rt(nt.UNAUTHENTICATED,n)}function UP(){return new rt(nt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function FP(n){return new rt(nt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function jP(){return new rt(nt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function BP(){return new rt(nt.CANCELED,"User canceled the upload/download.")}function zP(n){return new rt(nt.INVALID_URL,"Invalid URL '"+n+"'.")}function $P(n){return new rt(nt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function HP(){return new rt(nt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ew+"' property when initializing the app?")}function WP(){return new rt(nt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function qP(){return new rt(nt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function KP(n){return new rt(nt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Bf(n){return new rt(nt.INVALID_ARGUMENT,n)}function ww(){return new rt(nt.APP_DELETED,"The Firebase app was deleted.")}function GP(n){return new rt(nt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function il(n,e){return new rt(nt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ka(n){throw new rt(nt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Gt.makeFromUrl(e,t)}catch{return new Gt(e,"")}if(i.path==="")return i;throw $P(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function a(ne){ne.path.charAt(ne.path.length-1)==="/"&&(ne.path_=ne.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+o+c,"i"),p={bucket:1,path:3};function y(ne){ne.path_=decodeURIComponent(ne.path)}const v="v[A-Za-z0-9_]+",w=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",D=new RegExp(`^https?://${w}/${v}/b/${o}/o${I}`,"i"),B={bucket:1,path:3},z=t===vw?"(?:storage.googleapis.com|storage.cloud.google.com)":t,L="([^?#]*)",Z=new RegExp(`^https?://${z}/${o}/${L}`,"i"),K=[{regex:d,indices:p,postModify:a},{regex:D,indices:B,postModify:y},{regex:Z,indices:{bucket:1,path:2},postModify:y}];for(let ne=0;ne<K.length;ne++){const _e=K[ne],de=_e.regex.exec(e);if(de){const N=de[_e.indices.bucket];let S=de[_e.indices.path];S||(S=""),i=new Gt(N,S),_e.postModify(i);break}}if(i==null)throw zP(e);return i}}class QP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(n,e,t){let i=1,o=null,a=null,c=!1,d=0;function p(){return d===2}let y=!1;function v(...L){y||(y=!0,e.apply(null,L))}function w(L){o=setTimeout(()=>{o=null,n(D,p())},L)}function I(){a&&clearTimeout(a)}function D(L,...Z){if(y){I();return}if(L){I(),v.call(null,L,...Z);return}if(p()||c){I(),v.call(null,L,...Z);return}i<64&&(i*=2);let K;d===1?(d=2,K=0):K=(i+Math.random())*1e3,w(K)}let B=!1;function z(L){B||(B=!0,I(),!y&&(o!==null?(L||(d=2),clearTimeout(o),w(0)):L||(d=1)))}return w(0),a=setTimeout(()=>{c=!0,z(!0)},t),z}function YP(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(n){return n!==void 0}function ZP(n){return typeof n=="object"&&!Array.isArray(n)}function Fp(n){return typeof n=="string"||n instanceof String}function V_(n){return jp()&&n instanceof Blob}function jp(){return typeof Blob<"u"}function zf(n,e,t,i){if(i<e)throw Bf(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Bf(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function Tw(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var ys;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ys||(ys={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||o||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,t,i,o,a,c,d,p,y,v,w,I=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=a,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=v,this.connectionFactory_=w,this.retry=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((D,B)=>{this.resolve_=D,this.reject_=B,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new Zu(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const c=d=>{const p=d.loaded,y=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&a.addUploadProgressListener(c),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(c),this.pendingConnection_=null;const d=a.getErrorCode()===ys.NO_ERROR,p=a.getStatus();if(!d||ek(p,this.additionalRetryCodes_)&&this.retry){const v=a.getErrorCode()===ys.ABORT;i(!1,new Zu(!1,null,v));return}const y=this.successCodes_.indexOf(p)!==-1;i(!0,new Zu(y,a))})},t=(i,o)=>{const a=this.resolve_,c=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());JP(p)?a(p):a()}catch(p){c(p)}else if(d!==null){const p=Up();p.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,p)):c(p)}else if(o.canceled){const p=this.appDelete_?ww():BP();c(p)}else{const p=jP();c(p)}};this.canceled_?t(!1,new Zu(!1,null,!0)):this.backoffId_=XP(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&YP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Zu{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function nk(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function rk(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ik(n,e){e&&(n["X-Firebase-GMPID"]=e)}function sk(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function ok(n,e,t,i,o,a,c=!0){const d=Tw(n.urlParams),p=n.url+d,y=Object.assign({},n.headers);return ik(y,e),nk(y,t),rk(y,a),sk(y,i),new tk(p,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function lk(...n){const e=ak();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(jp())return new Blob(n);throw new rt(nt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function uk(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(n){if(typeof atob>"u")throw KP("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class lf{constructor(e,t){this.data=e,this.contentType=t||null}}function hk(n,e){switch(n){case ar.RAW:return new lf(Iw(e));case ar.BASE64:case ar.BASE64URL:return new lf(Sw(n,e));case ar.DATA_URL:return new lf(fk(e),pk(e))}throw Up()}function Iw(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const a=i,c=n.charCodeAt(++t);i=65536|(a&1023)<<10|c&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function dk(n){let e;try{e=decodeURIComponent(n)}catch{throw il(ar.DATA_URL,"Malformed data URL.")}return Iw(e)}function Sw(n,e){switch(n){case ar.BASE64:{const o=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(o||a)throw il(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case ar.BASE64URL:{const o=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(o||a)throw il(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=ck(e)}catch(o){throw o.message.includes("polyfill")?o:il(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class Rw{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw il(ar.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=mk(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function fk(n){const e=new Rw(n);return e.base64?Sw(ar.BASE64,e.rest):dk(e.rest)}function pk(n){return new Rw(n).contentType}function mk(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t){let i=0,o="";V_(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(V_(this.data_)){const i=this.data_,o=uk(i,e,t);return o===null?null:new pi(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new pi(i,!0)}}static getBlob(...e){if(jp()){const t=e.map(i=>i instanceof pi?i.data_:i);return new pi(lk.apply(null,t))}else{const t=e.map(c=>Fp(c)?hk(ar.RAW,c).data:c.data_);let i=0;t.forEach(c=>{i+=c.byteLength});const o=new Uint8Array(i);let a=0;return t.forEach(c=>{for(let d=0;d<c.length;d++)o[a++]=c[d]}),new pi(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(n){let e;try{e=JSON.parse(n)}catch{return null}return ZP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function yk(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function Aw(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(n,e){return e}class Kt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||_k}}let ec=null;function vk(n){return!Fp(n)||n.length<2?n:Aw(n)}function Cw(){if(ec)return ec;const n=[];n.push(new Kt("bucket")),n.push(new Kt("generation")),n.push(new Kt("metageneration")),n.push(new Kt("name","fullPath",!0));function e(a,c){return vk(c)}const t=new Kt("name");t.xform=e,n.push(t);function i(a,c){return c!==void 0?Number(c):c}const o=new Kt("size");return o.xform=i,n.push(o),n.push(new Kt("timeCreated")),n.push(new Kt("updated")),n.push(new Kt("md5Hash",null,!0)),n.push(new Kt("cacheControl",null,!0)),n.push(new Kt("contentDisposition",null,!0)),n.push(new Kt("contentEncoding",null,!0)),n.push(new Kt("contentLanguage",null,!0)),n.push(new Kt("contentType",null,!0)),n.push(new Kt("metadata","customMetadata",!0)),ec=n,ec}function Ek(n,e){function t(){const i=n.bucket,o=n.fullPath,a=new Gt(i,o);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:t})}function wk(n,e,t){const i={};i.type="file";const o=t.length;for(let a=0;a<o;a++){const c=t[a];i[c.local]=c.xform(i,e[c.server])}return Ek(i,n),i}function Pw(n,e,t){const i=Bp(e);return i===null?null:wk(n,i,t)}function Tk(n,e,t,i){const o=Bp(e);if(o===null||!Fp(o.downloadTokens))return null;const a=o.downloadTokens;if(a.length===0)return null;const c=encodeURIComponent;return a.split(",").map(y=>{const v=n.bucket,w=n.fullPath,I="/b/"+c(v)+"/o/"+c(w),D=Cl(I,t,i),B=Tw({alt:"media",token:y});return D+B})[0]}function Ik(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const a=e[o];a.writable&&(t[a.server]=n[a.local])}return JSON.stringify(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="prefixes",U_="items";function Sk(n,e,t){const i={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[M_])for(const o of t[M_]){const a=o.replace(/\/$/,""),c=n._makeStorageReference(new Gt(e,a));i.prefixes.push(c)}if(t[U_])for(const o of t[U_]){const a=n._makeStorageReference(new Gt(e,o.name));i.items.push(a)}return i}function Rk(n,e,t){const i=Bp(t);return i===null?null:Sk(n,e,i)}class hh{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(n){if(!n)throw Up()}function Ak(n,e){function t(i,o){const a=Pw(n,o,e);return zp(a!==null),a}return t}function Ck(n,e){function t(i,o){const a=Rk(n,e,o);return zp(a!==null),a}return t}function Pk(n,e){function t(i,o){const a=Pw(n,o,e);return zp(a!==null),Tk(a,o,n.host,n._protocol)}return t}function $p(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=UP():o=MP():t.getStatus()===402?o=VP(n.bucket):t.getStatus()===403?o=FP(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function kw(n){const e=$p(n);function t(i,o){let a=e(i,o);return i.getStatus()===404&&(a=LP(n.path)),a.serverResponse=o.serverResponse,a}return t}function kk(n,e,t,i,o){const a={};e.isRoot?a.prefix="":a.prefix=e.path+"/",t.length>0&&(a.delimiter=t),i&&(a.pageToken=i),o&&(a.maxResults=o);const c=e.bucketOnlyServerUrl(),d=Cl(c,n.host,n._protocol),p="GET",y=n.maxOperationRetryTime,v=new hh(d,p,Ck(n,e.bucket),y);return v.urlParams=a,v.errorHandler=$p(e),v}function Nk(n,e,t){const i=e.fullServerUrl(),o=Cl(i,n.host,n._protocol),a="GET",c=n.maxOperationRetryTime,d=new hh(o,a,Pk(n,t),c);return d.errorHandler=kw(e),d}function xk(n,e){const t=e.fullServerUrl(),i=Cl(t,n.host,n._protocol),o="DELETE",a=n.maxOperationRetryTime;function c(p,y){}const d=new hh(i,o,c,a);return d.successCodes=[200,204],d.errorHandler=kw(e),d}function Ok(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Dk(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=Ok(null,e)),i}function bk(n,e,t,i,o){const a=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function d(){let K="";for(let ne=0;ne<2;ne++)K=K+Math.random().toString().slice(2);return K}const p=d();c["Content-Type"]="multipart/related; boundary="+p;const y=Dk(e,i,o),v=Ik(y,t),w="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,I=`\r
--`+p+"--",D=pi.getBlob(w,i,I);if(D===null)throw WP();const B={name:y.fullPath},z=Cl(a,n.host,n._protocol),L="POST",Z=n.maxUploadRetryTime,ee=new hh(z,L,Ak(n,t),Z);return ee.urlParams=B,ee.headers=c,ee.body=D.uploadData(),ee.errorHandler=$p(e),ee}class Lk{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ys.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ys.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ys.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o){if(this.sent_)throw Ka("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const a in o)o.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,o[a].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ka("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ka("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ka("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ka("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Vk extends Lk{initXhr(){this.xhr_.responseType="text"}}function dh(){return new Vk}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t){this._service=e,t instanceof Gt?this._location=t:this._location=Gt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ts(e,t)}get root(){const e=new Gt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Aw(this._location.path)}get storage(){return this._service}get parent(){const e=gk(this._location.path);if(e===null)return null;const t=new Gt(this._location.bucket,e);return new Ts(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw GP(e)}}function Mk(n,e,t){n._throwIfRoot("uploadBytes");const i=bk(n.storage,n._location,Cw(),new pi(e,!0),t);return n.storage.makeRequestWithTokens(i,dh).then(o=>({metadata:o,ref:n}))}function Uk(n){const e={prefixes:[],items:[]};return Nw(n,e).then(()=>e)}async function Nw(n,e,t){const o=await Fk(n,{pageToken:t});e.prefixes.push(...o.prefixes),e.items.push(...o.items),o.nextPageToken!=null&&await Nw(n,e,o.nextPageToken)}function Fk(n,e){e!=null&&typeof e.maxResults=="number"&&zf("options.maxResults",1,1e3,e.maxResults);const t=e||{},i=kk(n.storage,n._location,"/",t.pageToken,t.maxResults);return n.storage.makeRequestWithTokens(i,dh)}function jk(n){n._throwIfRoot("getDownloadURL");const e=Nk(n.storage,n._location,Cw());return n.storage.makeRequestWithTokens(e,dh).then(t=>{if(t===null)throw qP();return t})}function Bk(n){n._throwIfRoot("deleteObject");const e=xk(n.storage,n._location);return n.storage.makeRequestWithTokens(e,dh)}function zk(n,e){const t=yk(n._location.path,e),i=new Gt(n._location.bucket,t);return new Ts(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(n){return/^[A-Za-z]+:\/\//.test(n)}function Hk(n,e){return new Ts(n,e)}function xw(n,e){if(n instanceof Hp){const t=n;if(t._bucket==null)throw HP();const i=new Ts(t,t._bucket);return e!=null?xw(i,e):i}else return e!==void 0?zk(n,e):n}function Wk(n,e){if(e&&$k(e)){if(n instanceof Hp)return Hk(n,e);throw Bf("To use ref(service, url), the first argument must be a Storage instance.")}else return xw(n,e)}function F_(n,e){const t=e==null?void 0:e[Ew];return t==null?null:Gt.makeFromBucketSpec(t,n)}function qk(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:Dv(o,n.app.options.projectId))}class Hp{constructor(e,t,i,o,a){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=a,this._bucket=null,this._host=vw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=DP,this._maxUploadRetryTime=bP,this._requests=new Set,o!=null?this._bucket=Gt.makeFromBucketSpec(o,this._host):this._bucket=F_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Gt.makeFromBucketSpec(this._url,e):this._bucket=F_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){zf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){zf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ts(this,e)}_makeRequest(e,t,i,o,a=!0){if(this._deleted)return new QP(ww());{const c=ok(e,this._appId,i,o,t,this._firebaseVersion,a);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const j_="@firebase/storage",B_="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="storage";function Wp(n,e,t){return n=qe(n),Mk(n,e,t)}function Kk(n){return n=qe(n),Uk(n)}function kc(n){return n=qe(n),jk(n)}function qp(n){return n=qe(n),Bk(n)}function qn(n,e){return n=qe(n),Wk(n,e)}function fh(n=Hc(),e){n=qe(n);const i=Tl(n,Ow).getImmediate({identifier:e}),o=np("storage");return o&&Gk(i,...o),i}function Gk(n,e,t,i={}){qk(n,e,t,i)}function Qk(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Hp(t,i,o,e,Rs)}function Xk(){Pi(new br(Ow,Qk,"PUBLIC").setMultipleInstances(!0)),Cn(j_,B_,""),Cn(j_,B_,"esm2017")}Xk();var Yk="firebase",Jk="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cn(Yk,Jk,"app");function Kp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function Dw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zk=Dw,bw=new El("auth","Firebase",Dw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=new rp("@firebase/auth");function e1(n,...e){Nc.logLevel<=Pe.WARN&&Nc.warn(`Auth (${Rs}): ${n}`,...e)}function uc(n,...e){Nc.logLevel<=Pe.ERROR&&Nc.error(`Auth (${Rs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(n,...e){throw Gp(n,...e)}function cr(n,...e){return Gp(n,...e)}function Lw(n,e,t){const i=Object.assign(Object.assign({},Zk()),{[e]:t});return new El("auth","Firebase",i).create(e,{appName:n.name})}function Ci(n){return Lw(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gp(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return bw.create(n,...e)}function Ee(n,e,...t){if(!n)throw Gp(e,...t)}function Or(n){const e="INTERNAL ASSERTION FAILED: "+n;throw uc(e),new Error(e)}function Ur(n,e){n||Or(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function t1(){return z_()==="http:"||z_()==="https:"}function z_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(t1()||nS()||"connection"in navigator)?navigator.onLine:!0}function r1(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ur(t>e,"Short delay should be less than long delay!"),this.isMobile=ZI()||rS()}get(){return n1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(n,e){Ur(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],o1=new Pl(3e4,6e4);function Ps(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Fi(n,e,t,i,o={}){return Mw(n,o,async()=>{let a={},c={};i&&(e==="GET"?c=i:a={body:JSON.stringify(i)});const d=wl(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},a);return tS()||(y.referrerPolicy="no-referrer"),Vw.fetch()(await Uw(n,n.config.apiHost,t,d),y)})}async function Mw(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},i1),e);try{const o=new l1(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw tc(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const d=a.ok?c.errorMessage:c.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw tc(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw tc(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw tc(n,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Lw(n,v,y);Kn(n,v)}}catch(o){if(o instanceof Gn)throw o;Kn(n,"network-request-failed",{message:String(o)})}}async function ph(n,e,t,i,o={}){const a=await Fi(n,e,t,i,o);return"mfaPendingCredential"in a&&Kn(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function Uw(n,e,t,i){const o=`${e}${t}?${i}`,a=n,c=a.config.emulator?Qp(n.config,o):`${n.config.apiScheme}://${o}`;return s1.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}function a1(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class l1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(cr(this.auth,"network-request-failed")),o1.get())})}}function tc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=cr(n,e,i);return o.customData._tokenResponse=t,o}function $_(n){return n!==void 0&&n.enterprise!==void 0}class u1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return a1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function c1(n,e){return Fi(n,"GET","/v2/recaptchaConfig",Ps(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(n,e){return Fi(n,"POST","/v1/accounts:delete",e)}async function xc(n,e){return Fi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function d1(n,e=!1){const t=qe(n),i=await t.getIdToken(e),o=Xp(i);Ee(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:o,token:i,authTime:sl(uf(o.auth_time)),issuedAtTime:sl(uf(o.iat)),expirationTime:sl(uf(o.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function uf(n){return Number(n)*1e3}function Xp(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return uc("JWT malformed, contained fewer than 3 sections"),null;try{const o=kv(t);return o?JSON.parse(o):(uc("Failed to decode base64 JWT payload"),null)}catch(o){return uc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function H_(n){const e=Xp(n);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ml(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Gn&&f1(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function f1({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=sl(this.lastLoginAt),this.creationTime=sl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await ml(n,xc(t,{idToken:i}));Ee(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?Fw(a.providerUserInfo):[],d=g1(n.providerData,c),p=n.isAnonymous,y=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),v=p?y:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Hf(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,w)}async function m1(n){const e=qe(n);await Oc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function g1(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Fw(n){return n.map(e=>{var{providerId:t}=e,i=Kp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y1(n,e){const t=await Mw(n,{},async()=>{const i=wl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,c=await Uw(n,o,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",Vw.fetch()(c,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function _1(n,e){return Fi(n,"POST","/v2/accounts:revokeToken",Ps(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):H_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=H_(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:a}=await y1(e,t);this.updateTokensAndExpiration(i,o,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:a}=t,c=new No;return i&&(Ee(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(Ee(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),a&&(Ee(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new No,this.toJSON())}_performRefresh(){return Or("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(n,e){Ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class $n{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,a=Kp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new p1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Hf(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await ml(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return d1(this,e)}reload(){return m1(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Oc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mn(this.auth.app))return Promise.reject(Ci(this.auth));const e=await this.getIdToken();return await ml(this,h1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,a,c,d,p,y,v;const w=(i=t.displayName)!==null&&i!==void 0?i:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,D=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,B=(c=t.photoURL)!==null&&c!==void 0?c:void 0,z=(d=t.tenantId)!==null&&d!==void 0?d:void 0,L=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,Z=(y=t.createdAt)!==null&&y!==void 0?y:void 0,ee=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:K,emailVerified:ne,isAnonymous:_e,providerData:de,stsTokenManager:N}=t;Ee(K&&N,e,"internal-error");const S=No.fromJSON(this.name,N);Ee(typeof K=="string",e,"internal-error"),di(w,e.name),di(I,e.name),Ee(typeof ne=="boolean",e,"internal-error"),Ee(typeof _e=="boolean",e,"internal-error"),di(D,e.name),di(B,e.name),di(z,e.name),di(L,e.name),di(Z,e.name),di(ee,e.name);const C=new $n({uid:K,auth:e,email:I,emailVerified:ne,displayName:w,isAnonymous:_e,photoURL:B,phoneNumber:D,tenantId:z,stsTokenManager:S,createdAt:Z,lastLoginAt:ee});return de&&Array.isArray(de)&&(C.providerData=de.map(x=>Object.assign({},x))),L&&(C._redirectEventId=L),C}static async _fromIdTokenResponse(e,t,i=!1){const o=new No;o.updateFromServerResponse(t);const a=new $n({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Oc(a),a}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ee(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?Fw(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),d=new No;d.updateFromIdToken(i);const p=new $n({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Hf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=new Map;function Dr(n){Ur(n instanceof Function,"Expected a class definition");let e=W_.get(n);return e?(Ur(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,W_.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jw.type="NONE";const q_=jw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(n,e,t){return`firebase:${n}:${e}:${t}`}class xo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:a}=this.auth;this.fullUserKey=cc(this.userKey,o.apiKey,a),this.fullPersistenceKey=cc("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await xc(this.auth,{idToken:e}).catch(()=>{});return t?$n._fromGetAccountInfoResponse(this.auth,t,e):null}return $n._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new xo(Dr(q_),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let a=o[0]||Dr(q_);const c=cc(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const v=await y._get(c);if(v){let w;if(typeof v=="string"){const I=await xc(e,{idToken:v}).catch(()=>{});if(!I)break;w=await $n._fromGetAccountInfoResponse(e,I,v)}else w=$n._fromJSON(e,v);y!==a&&(d=w),a=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new xo(a,e,i):(a=p[0],d&&await a._set(c,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==a)try{await y._remove(c)}catch{}})),new xo(a,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qw(e))return"Blackberry";if(Kw(e))return"Webos";if(zw(e))return"Safari";if((e.includes("chrome/")||$w(e))&&!e.includes("edge/"))return"Chrome";if(Ww(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Bw(n=zt()){return/firefox\//i.test(n)}function zw(n=zt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $w(n=zt()){return/crios\//i.test(n)}function Hw(n=zt()){return/iemobile/i.test(n)}function Ww(n=zt()){return/android/i.test(n)}function qw(n=zt()){return/blackberry/i.test(n)}function Kw(n=zt()){return/webos/i.test(n)}function Yp(n=zt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function v1(n=zt()){var e;return Yp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function E1(){return iS()&&document.documentMode===10}function Gw(n=zt()){return Yp(n)||Ww(n)||Kw(n)||qw(n)||/windows phone/i.test(n)||Hw(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(n,e=[]){let t;switch(n){case"Browser":t=K_(zt());break;case"Worker":t=`${K_(zt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Rs}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((c,d)=>{try{const p=e(a);c(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T1(n,e={}){return Fi(n,"GET","/v2/passwordPolicy",Ps(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1=6;class S1{constructor(e){var t,i,o,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:I1,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,a,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(a=p.containsUppercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new G_(this),this.idTokenSubscription=new G_(this),this.beforeStateQueue=new w1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dr(t)),this._initializationPromise=this.queue(async()=>{var i,o,a;if(!this._deleted&&(this.persistenceManager=await xo.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await xc(this,{idToken:e}),i=await $n._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(mn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(o=p.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Oc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=r1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mn(this.app))return Promise.reject(Ci(this));const t=e?qe(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mn(this.app)?Promise.reject(Ci(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mn(this.app)?Promise.reject(Ci(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await T1(this),t=new S1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new El("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await _1(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dr(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await xo.create(this,[Dr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(d,this,"internal-error"),d.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&e1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Xo(n){return qe(n)}class G_{constructor(e){this.auth=e,this.observer=null,this.addObserver=dS(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function A1(n){mh=n}function Xw(n){return mh.loadJS(n)}function C1(){return mh.recaptchaEnterpriseScript}function P1(){return mh.gapiScript}function k1(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class N1{constructor(){this.enterprise=new x1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class x1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const O1="recaptcha-enterprise",Yw="NO_RECAPTCHA";class D1{constructor(e){this.type=O1,this.auth=Xo(e)}async verify(e="verify",t=!1){async function i(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,d)=>{c1(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new u1(p);return a.tenantId==null?a._agentRecaptchaConfig=y:a._tenantRecaptchaConfigs[a.tenantId]=y,c(y.siteKey)}}).catch(p=>{d(p)})})}function o(a,c,d){const p=window.grecaptcha;$_(p)?p.enterprise.ready(()=>{p.enterprise.execute(a,{action:e}).then(y=>{c(y)}).catch(()=>{c(Yw)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new N1().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{i(this.auth).then(d=>{if(!t&&$_(window.grecaptcha))o(d,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=C1();p.length!==0&&(p+=d),Xw(p).then(()=>{o(d,a,c)}).catch(y=>{c(y)})}}).catch(d=>{c(d)})})}}async function Q_(n,e,t,i=!1,o=!1){const a=new D1(n);let c;if(o)c=Yw;else try{c=await a.verify(t)}catch{c=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,y=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function X_(n,e,t,i,o){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Q_(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Q_(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(n,e){const t=Tl(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(_s(a,e??{}))return o;Kn(o,"already-initialized")}return t.initialize({options:e})}function L1(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Dr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function V1(n,e,t){const i=Xo(n);Ee(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,a=Jw(e),{host:c,port:d}=M1(e),p=d===null?"":`:${d}`,y={url:`${a}//${c}${p}/`},v=Object.freeze({host:c,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){Ee(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Ee(_s(y,i.config.emulator)&&_s(v,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=v,i.settings.appVerificationDisabledForTesting=!0,U1()}function Jw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function M1(n){const e=Jw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const a=o[1];return{host:a,port:Y_(i.substr(a.length+1))}}else{const[a,c]=i.split(":");return{host:a,port:Y_(c)}}}function Y_(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function U1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Or("not implemented")}_getIdTokenResponse(e){return Or("not implemented")}_linkToIdToken(e,t){return Or("not implemented")}_getReauthenticationResolver(e){return Or("not implemented")}}async function F1(n,e){return Fi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j1(n,e){return ph(n,"POST","/v1/accounts:signInWithPassword",Ps(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(n,e){return ph(n,"POST","/v1/accounts:signInWithEmailLink",Ps(n,e))}async function z1(n,e){return ph(n,"POST","/v1/accounts:signInWithEmailLink",Ps(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends Jp{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new gl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new gl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return X_(e,t,"signInWithPassword",j1);case"emailLink":return B1(e,{email:this._email,oobCode:this._password});default:Kn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return X_(e,i,"signUpPassword",F1);case"emailLink":return z1(e,{idToken:t,email:this._email,oobCode:this._password});default:Kn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(n,e){return ph(n,"POST","/v1/accounts:signInWithIdp",Ps(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1="http://localhost";class Is extends Jp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Kn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,a=Kp(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new Is(i,o);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Oo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Oo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Oo(e,t)}buildRequest(){const e={requestUri:$1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function W1(n){const e=Ga(Qa(n)).link,t=e?Ga(Qa(e)).deep_link_id:null,i=Ga(Qa(n)).deep_link_id;return(i?Ga(Qa(i)).link:null)||i||t||e||n}class Zp{constructor(e){var t,i,o,a,c,d;const p=Ga(Qa(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,v=(i=p.oobCode)!==null&&i!==void 0?i:null,w=H1((o=p.mode)!==null&&o!==void 0?o:null);Ee(y&&v&&w,"argument-error"),this.apiKey=y,this.operation=w,this.code=v,this.continueUrl=(a=p.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=W1(e);try{return new Zp(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){this.providerId=Yo.PROVIDER_ID}static credential(e,t){return gl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Zp.parseLink(t);return Ee(i,"argument-error"),gl._fromEmailAndCode(e,i.code,i.tenantId)}}Yo.PROVIDER_ID="password";Yo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl extends Zw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends kl{constructor(){super("facebook.com")}static credential(e){return Is._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mi.credential(e.oauthAccessToken)}catch{return null}}}mi.FACEBOOK_SIGN_IN_METHOD="facebook.com";mi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends kl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Is._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return gi.credential(t,i)}catch{return null}}}gi.GOOGLE_SIGN_IN_METHOD="google.com";gi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends kl{constructor(){super("github.com")}static credential(e){return Is._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yi.credential(e.oauthAccessToken)}catch{return null}}}yi.GITHUB_SIGN_IN_METHOD="github.com";yi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends kl{constructor(){super("twitter.com")}static credential(e,t){return Is._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return _i.credential(t,i)}catch{return null}}}_i.TWITTER_SIGN_IN_METHOD="twitter.com";_i.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const a=await $n._fromIdTokenResponse(e,i,o),c=J_(i);return new Bo({user:a,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=J_(i);return new Bo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function J_(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc extends Gn{constructor(e,t,i,o){var a;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Dc.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Dc(e,t,i,o)}}function e0(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Dc._fromErrorAndOperation(n,a,e,i):a})}async function q1(n,e,t=!1){const i=await ml(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Bo._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K1(n,e,t=!1){const{auth:i}=n;if(mn(i.app))return Promise.reject(Ci(i));const o="reauthenticate";try{const a=await ml(n,e0(i,o,e,n),t);Ee(a.idToken,i,"internal-error");const c=Xp(a.idToken);Ee(c,i,"internal-error");const{sub:d}=c;return Ee(n.uid===d,i,"user-mismatch"),Bo._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Kn(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0(n,e,t=!1){if(mn(n.app))return Promise.reject(Ci(n));const i="signIn",o=await e0(n,i,e),a=await Bo._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(a.user),a}async function G1(n,e){return t0(Xo(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q1(n){const e=Xo(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function X1(n,e,t){return mn(n.app)?Promise.reject(Ci(n)):G1(qe(n),Yo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Q1(n),i})}function Y1(n,e,t,i){return qe(n).onIdTokenChanged(e,t,i)}function J1(n,e,t){return qe(n).beforeAuthStateChanged(e,t)}function Z1(n,e,t,i){return qe(n).onAuthStateChanged(e,t,i)}const bc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(bc,"1"),this.storage.removeItem(bc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=1e3,tN=10;class r0 extends n0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},a=this.storage.getItem(i);E1()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,tN):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},eN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}r0.type="LOCAL";const nN=r0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0 extends n0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}i0.type="SESSION";const s0=i0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new gh(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:a}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(c).map(async y=>y(t.origin,a)),p=await rN(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,c;return new Promise((d,p)=>{const y=em("",20);o.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(w){const I=w;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(I.data.response);break;default:clearTimeout(v),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(){return window}function sN(n){hr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(){return typeof hr().WorkerGlobalScope<"u"&&typeof hr().importScripts=="function"}async function oN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aN(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function lN(){return o0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="firebaseLocalStorageDb",uN=1,Lc="firebaseLocalStorage",l0="fbase_key";class Nl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function yh(n,e){return n.transaction([Lc],e?"readwrite":"readonly").objectStore(Lc)}function cN(){const n=indexedDB.deleteDatabase(a0);return new Nl(n).toPromise()}function Wf(){const n=indexedDB.open(a0,uN);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Lc,{keyPath:l0})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Lc)?e(i):(i.close(),await cN(),e(await Wf()))})})}async function Z_(n,e,t){const i=yh(n,!0).put({[l0]:e,value:t});return new Nl(i).toPromise()}async function hN(n,e){const t=yh(n,!1).get(e),i=await new Nl(t).toPromise();return i===void 0?null:i.value}function ev(n,e){const t=yh(n,!0).delete(e);return new Nl(t).toPromise()}const dN=800,fN=3;class u0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>fN)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return o0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gh._getInstance(lN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await oN(),!this.activeServiceWorker)return;this.sender=new iN(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wf();return await Z_(e,bc,"1"),await ev(e,bc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Z_(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>hN(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ev(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=yh(o,!1).getAll();return new Nl(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}u0.type="LOCAL";const pN=u0;new Pl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(n,e){return e?Dr(e):(Ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm extends Jp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Oo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function gN(n){return t0(n.auth,new tm(n),n.bypassAuthState)}function yN(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),K1(t,new tm(n),n.bypassAuthState)}async function _N(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),q1(t,new tm(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,t,i,o,a=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:a,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gN;case"linkViaPopup":case"linkViaRedirect":return _N;case"reauthViaPopup":case"reauthViaRedirect":return yN;default:Kn(this.auth,"internal-error")}}resolve(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=new Pl(2e3,1e4);class Co extends c0{constructor(e,t,i,o,a){super(e,t,o,a),this.provider=i,this.authWindow=null,this.pollId=null,Co.currentPopupAction&&Co.currentPopupAction.cancel(),Co.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){Ur(this.filter.length===1,"Popup operations only handle one event");const e=em();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(cr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Co.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vN.get())};e()}}Co.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN="pendingRedirect",hc=new Map;class wN extends c0{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=hc.get(this.auth._key());if(!e){try{const i=await TN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}hc.set(this.auth._key(),e)}return this.bypassAuthState||hc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TN(n,e){const t=RN(e),i=SN(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function IN(n,e){hc.set(n._key(),e)}function SN(n){return Dr(n._redirectPersistence)}function RN(n){return cc(EN,n.config.apiKey,n.name)}async function AN(n,e,t=!1){if(mn(n.app))return Promise.reject(Ci(n));const i=Xo(n),o=mN(i,e),c=await new wN(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=10*60*1e3;class PN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!h0(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(cr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CN&&this.cachedEventUids.clear(),this.cachedEventUids.has(tv(e))}saveEventToCache(e){this.cachedEventUids.add(tv(e)),this.lastProcessedEventTime=Date.now()}}function tv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function h0({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kN(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return h0(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NN(n,e={}){return Fi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ON=/^https?/;async function DN(n){if(n.config.emulator)return;const{authorizedDomains:e}=await NN(n);for(const t of e)try{if(bN(t))return}catch{}Kn(n,"unauthorized-domain")}function bN(n){const e=$f(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!ON.test(t))return!1;if(xN.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=new Pl(3e4,6e4);function nv(){const n=hr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function VN(n){return new Promise((e,t)=>{var i,o,a;function c(){nv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nv(),t(cr(n,"network-request-failed"))},timeout:LN.get()})}if(!((o=(i=hr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=hr().gapi)===null||a===void 0)&&a.load)c();else{const d=k1("iframefcb");return hr()[d]=()=>{gapi.load?c():t(cr(n,"network-request-failed"))},Xw(`${P1()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw dc=null,e})}let dc=null;function MN(n){return dc=dc||VN(n),dc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN=new Pl(5e3,15e3),FN="__/auth/iframe",jN="emulator/auth/iframe",BN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $N(n){const e=n.config;Ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Qp(e,jN):`https://${n.config.authDomain}/${FN}`,i={apiKey:e.apiKey,appName:n.name,v:Rs},o=zN.get(n.config.apiHost);o&&(i.eid=o);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${wl(i).slice(1)}`}async function HN(n){const e=await MN(n),t=hr().gapi;return Ee(t,n,"internal-error"),e.open({where:document.body,url:$N(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BN,dontclear:!0},i=>new Promise(async(o,a)=>{await i.restyle({setHideOnLeave:!1});const c=cr(n,"network-request-failed"),d=hr().setTimeout(()=>{a(c)},UN.get());function p(){hr().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qN=500,KN=600,GN="_blank",QN="http://localhost";class rv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XN(n,e,t,i=qN,o=KN){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},WN),{width:i.toString(),height:o.toString(),top:a,left:c}),y=zt().toLowerCase();t&&(d=$w(y)?GN:t),Bw(y)&&(e=e||QN,p.scrollbars="yes");const v=Object.entries(p).reduce((I,[D,B])=>`${I}${D}=${B},`,"");if(v1(y)&&d!=="_self")return YN(e||"",d),new rv(null);const w=window.open(e||"",d,v);Ee(w,n,"popup-blocked");try{w.focus()}catch{}return new rv(w)}function YN(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN="__/auth/handler",ZN="emulator/auth/handler",ex=encodeURIComponent("fac");async function iv(n,e,t,i,o,a){Ee(n.config.authDomain,n,"auth-domain-config-required"),Ee(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Rs,eventId:o};if(e instanceof Zw){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",hS(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,w]of Object.entries({}))c[v]=w}if(e instanceof kl){const v=e.getScopes().filter(w=>w!=="");v.length>0&&(c.scopes=v.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await n._getAppCheckToken(),y=p?`#${ex}=${encodeURIComponent(p)}`:"";return`${tx(n)}?${wl(d).slice(1)}${y}`}function tx({config:n}){return n.emulator?Qp(n,ZN):`https://${n.authDomain}/${JN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="webStorageSupport";class nx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=s0,this._completeRedirectFn=AN,this._overrideRedirectResult=IN}async _openPopup(e,t,i,o){var a;Ur((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await iv(e,t,i,$f(),o);return XN(e,c,em())}async _openRedirect(e,t,i,o){await this._originValidation(e);const a=await iv(e,t,i,$f(),o);return sN(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(Ur(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await HN(e),i=new PN(e);return t.register("authEvent",o=>(Ee(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(cf,{type:cf},o=>{var a;const c=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[cf];c!==void 0&&t(!!c),Kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=DN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Gw()||zw()||Yp()}}const rx=nx;var sv="@firebase/auth",ov="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ox(n){Pi(new br("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;Ee(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qw(n)},y=new R1(i,o,a,p);return L1(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Pi(new br("auth-internal",e=>{const t=Xo(e.getProvider("auth").getImmediate());return(i=>new ix(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cn(sv,ov,sx(n)),Cn(sv,ov,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax=5*60,lx=Ov("authIdTokenMaxAge")||ax;let av=null;const ux=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>lx)return;const o=t==null?void 0:t.token;av!==o&&(av=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function cx(n=Hc()){const e=Tl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=b1(n,{popupRedirectResolver:rx,persistence:[pN,nN,s0]}),i=Ov("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const c=ux(a.toString());J1(t,c,()=>c(t.currentUser)),Y1(t,d=>c(d))}}const o=Nv("auth");return o&&V1(t,`http://${o}`),t}function hx(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}A1({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const a=cr("internal-error");a.customData=o,t(a)},i.type="text/javascript",i.charset="UTF-8",hx().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ox("Browser");const dx={apiKey:"AIzaSyBL_41dC7dPVg8gBxfQ7CO50CRfFkBDEW0",authDomain:"tata-s-photography.firebaseapp.com",projectId:"tata-s-photography",storageBucket:"tata-s-photography.appspot.com",messagingSenderId:"882623239114",appId:"1:882623239114:web:08c807c7c9705dea657533",measurementId:"G-RGKVDBCEMC"},jr=Vv(dx);fh(jr);ah(jr);const d0=cx(jr),f0=()=>H.jsx(H.Fragment,{children:H.jsxs("div",{className:"nav-bar-home",children:[H.jsxs("div",{className:"krzysztof",children:[H.jsx("span",{className:"lg-view",children:H.jsx(nc,{to:"/",children:"K R Z Y S Z T O F   D L U G O S Z"})}),H.jsx("span",{className:"sm-view",children:H.jsxs(nc,{to:"/",children:["K R Z Y S Z T O F ",H.jsx("br",{})," D L U G O S Z"]})})]}),H.jsxs("div",{className:"other-menu-opts",children:[H.jsx(nc,{to:"/",children:" PORTFOLIO "}),H.jsx("a",{href:"/tatanka/blog",children:" BLOG "}),H.jsx("a",{href:"/",children:" ABOUT "})]})]})}),xl=({onClose:n,children:e,backgroundClassName:t="modal-background",contentClassName:i="modal-content"})=>H.jsx("div",{className:t,onClick:n,children:H.jsx("div",{className:i,onClick:o=>o.stopPropagation(),children:e})}),fx=({onClose:n,onSave:e,collectionPath:t})=>{const[i,o]=Y.useState(""),[a,c]=Y.useState(null),d=!i.trim()||!a,p=y=>{y.preventDefault(),e(i,a,t),n()};return H.jsxs(xl,{onClose:n,children:[H.jsx("h2",{children:"Add New Gallery"}),H.jsxs("form",{onSubmit:p,children:[H.jsx("input",{type:"text",placeholder:"Album Title",value:i,onChange:y=>o(y.target.value),required:!0}),H.jsx("input",{type:"file",accept:"image/*",onChange:y=>{var v;return c(((v=y.target.files)==null?void 0:v[0])||null)}}),H.jsx("button",{type:"submit",disabled:d,className:"save-button",children:"Save"}),H.jsx("button",{type:"button",onClick:n,className:"cancel-button",children:"Cancel"})]})]})},px=({onClose:n,onDelete:e,collectionPath:t,galleryName:i})=>{const o=a=>{a.preventDefault(),e(t,i),n()};return H.jsxs(xl,{onClose:n,children:[H.jsx("h2",{children:"Delete Album"}),H.jsxs("form",{onSubmit:o,children:[H.jsx("button",{type:"submit",className:"delete-button",children:"Delete"}),H.jsx("button",{type:"button",onClick:n,className:"cancel-button",children:"Cancel"})]})]})},mx=({onClose:n,onEdit:e,collectionPath:t,galleryName:i})=>{const[o,a]=Y.useState(""),[c,d]=Y.useState(null),p=!o.trim()&&!c,y=v=>{v.preventDefault(),e(t,i,o,c),n()};return H.jsxs(xl,{onClose:n,children:[H.jsx("h2",{children:"Edit Album"}),H.jsxs("form",{onSubmit:y,children:[H.jsx("input",{type:"text",placeholder:"Album Title",value:o,onChange:v=>a(v.target.value)}),H.jsx("input",{type:"file",accept:"image/*",onChange:v=>{var w;return d(((w=v.target.files)==null?void 0:w[0])||null)}}),H.jsx("button",{type:"submit",disabled:p,className:"save-button",children:"Save"}),H.jsx("button",{type:"button",onClick:n,className:"cancel-button",children:"Cancel"})]})]})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx="type.googleapis.com/google.protobuf.Int64Value",yx="type.googleapis.com/google.protobuf.UInt64Value";function p0(n,e){const t={};for(const i in n)n.hasOwnProperty(i)&&(t[i]=e(n[i]));return t}function Vc(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>Vc(e));if(typeof n=="function"||typeof n=="object")return p0(n,e=>Vc(e));throw new Error("Data cannot be encoded in JSON: "+n)}function zo(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case gx:case yx:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>zo(e)):typeof n=="function"||typeof n=="object"?p0(n,e=>zo(e)):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class an extends Gn{constructor(e,t,i){super(`${nm}/${e}`,t||""),this.details=i,Object.setPrototypeOf(this,an.prototype)}}function _x(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Mc(n,e){let t=_x(n),i=t,o;try{const a=e&&e.error;if(a){const c=a.status;if(typeof c=="string"){if(!lv[c])return new an("internal","internal");t=lv[c],i=c}const d=a.message;typeof d=="string"&&(i=d),o=a.details,o!==void 0&&(o=zo(o))}}catch{}return t==="ok"?null:new an(t,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e,t,i,o){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,mn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=i.getImmediate({optional:!0}),this.auth||t.get().then(a=>this.auth=a,()=>{}),this.messaging||i.get().then(a=>this.messaging=a,()=>{}),this.appCheck||o==null||o.get().then(a=>this.appCheck=a,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),i=await this.getMessagingToken(),o=await this.getAppCheckToken(e);return{authToken:t,messagingToken:i,appCheckToken:o}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="us-central1",Ex=/^data: (.*?)(?:\n|$)/;function wx(n){let e=null;return{promise:new Promise((t,i)=>{e=setTimeout(()=>{i(new an("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}class Tx{constructor(e,t,i,o,a=qf,c=(...d)=>fetch(...d)){this.app=e,this.fetchImpl=c,this.emulatorOrigin=null,this.contextProvider=new vx(e,t,i,o),this.cancelAllRequests=new Promise(d=>{this.deleteService=()=>Promise.resolve(d())});try{const d=new URL(a);this.customDomain=d.origin+(d.pathname==="/"?"":d.pathname),this.region=qf}catch{this.customDomain=null,this.region=a}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function Ix(n,e,t){n.emulatorOrigin=`http://${e}:${t}`}function Sx(n,e,t){const i=o=>Ax(n,e,o,{});return i.stream=(o,a)=>Px(n,e,o,a),i}async function Rx(n,e,t,i){t["Content-Type"]="application/json";let o;try{o=await i(n,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let a=null;try{a=await o.json()}catch{}return{status:o.status,json:a}}async function m0(n,e){const t={},i=await n.contextProvider.getContext(e.limitedUseAppCheckTokens);return i.authToken&&(t.Authorization="Bearer "+i.authToken),i.messagingToken&&(t["Firebase-Instance-ID-Token"]=i.messagingToken),i.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=i.appCheckToken),t}function Ax(n,e,t,i){const o=n._url(e);return Cx(n,o,t,i)}async function Cx(n,e,t,i){t=Vc(t);const o={data:t},a=await m0(n,i),c=i.timeout||7e4,d=wx(c),p=await Promise.race([Rx(e,o,a,n.fetchImpl),d.promise,n.cancelAllRequests]);if(d.cancel(),!p)throw new an("cancelled","Firebase Functions instance was deleted.");const y=Mc(p.status,p.json);if(y)throw y;if(!p.json)throw new an("internal","Response is not valid JSON object.");let v=p.json.data;if(typeof v>"u"&&(v=p.json.result),typeof v>"u")throw new an("internal","Response is missing data field.");return{data:zo(v)}}function Px(n,e,t,i){const o=n._url(e);return kx(n,o,t,i||{})}async function kx(n,e,t,i){var o;t=Vc(t);const a={data:t},c=await m0(n,i);c["Content-Type"]="application/json",c.Accept="text/event-stream";let d;try{d=await n.fetchImpl(e,{method:"POST",body:JSON.stringify(a),headers:c,signal:i==null?void 0:i.signal})}catch(D){if(D instanceof Error&&D.name==="AbortError"){const z=new an("cancelled","Request was cancelled.");return{data:Promise.reject(z),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(z)}}}}}}const B=Mc(0,null);return{data:Promise.reject(B),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(B)}}}}}}let p,y;const v=new Promise((D,B)=>{p=D,y=B});(o=i==null?void 0:i.signal)===null||o===void 0||o.addEventListener("abort",()=>{const D=new an("cancelled","Request was cancelled.");y(D)});const w=d.body.getReader(),I=Nx(w,p,y,i==null?void 0:i.signal);return{stream:{[Symbol.asyncIterator](){const D=I.getReader();return{async next(){const{value:B,done:z}=await D.read();return{value:B,done:z}},async return(){return await D.cancel(),{done:!0,value:void 0}}}}},data:v}}function Nx(n,e,t,i){const o=(c,d)=>{const p=c.match(Ex);if(!p)return;const y=p[1];try{const v=JSON.parse(y);if("result"in v){e(zo(v.result));return}if("message"in v){d.enqueue(zo(v.message));return}if("error"in v){const w=Mc(0,v);d.error(w),t(w);return}}catch(v){if(v instanceof an){d.error(v),t(v);return}}},a=new TextDecoder;return new ReadableStream({start(c){let d="";return p();async function p(){if(i!=null&&i.aborted){const y=new an("cancelled","Request was cancelled");return c.error(y),t(y),Promise.resolve()}try{const{value:y,done:v}=await n.read();if(v){d.trim()&&o(d.trim(),c),c.close();return}if(i!=null&&i.aborted){const I=new an("cancelled","Request was cancelled");c.error(I),t(I),await n.cancel();return}d+=a.decode(y,{stream:!0});const w=d.split(`
`);d=w.pop()||"";for(const I of w)I.trim()&&o(I.trim(),c);return p()}catch(y){const v=y instanceof an?y:Mc(0,null);c.error(v),t(v)}}},cancel(){return n.cancel()}})}const uv="@firebase/functions",cv="0.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx="auth-internal",Ox="app-check-internal",Dx="messaging-internal";function bx(n){const e=(t,{instanceIdentifier:i})=>{const o=t.getProvider("app").getImmediate(),a=t.getProvider(xx),c=t.getProvider(Dx),d=t.getProvider(Ox);return new Tx(o,a,c,d,i)};Pi(new br(nm,e,"PUBLIC").setMultipleInstances(!0)),Cn(uv,cv,n),Cn(uv,cv,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(n=Hc(),e=qf){const i=Tl(qe(n),nm).getImmediate({identifier:e}),o=np("functions");return o&&Vx(i,...o),i}function Vx(n,e,t){Ix(qe(n),e,t)}function Mx(n,e,t){return Sx(qe(n),e)}bx();const Ux=Lx(),yl=ah(jr),_l=fh(jr),Fx=async(n,e,t,i)=>{if(!(!i&&!t)&&(console.log(t),console.log(t==""),console.log(t==null),t!=""&&await L_(Li(yl,n,e),{title:t,updatedAt:Date.now()}),i!=null)){console.log(n),console.log(e);const o=qn(_l,n+"/"+e+"/cover");await qp(o).then(()=>{}).catch(c=>{console.error("Error occurred in deleting file from Firebase storage",c)});const a=await qn(_l,n+"/"+e+"/cover");await Wp(a,i).then(c=>{console.log("Uploaded a blob or file!")}).catch(c=>{console.error("Upload failed",c)}),await L_(Li(yl,n,e),{updatedAt:Date.now()})}},jx=async(n,e,t)=>{if(e==null)return;const i=Li(oh(yl,t)),o=await qn(_l,"/"+t+"/"+i.id+"/cover");await Wp(o,e).then(a=>{console.log("Uploaded an album/category")}).catch(a=>{console.error("Upload failed",a)}),await gw(i,{coverImageUrl:t+"/"+i.id+"/cover",title:n,id:i.id,updatedAt:Date.now()})},g0=async n=>{const e=await Kk(qn(_l,n));await Promise.all(e.items.map(t=>qp(t))),await Promise.all(e.prefixes.map(t=>g0(t.fullPath)))},Bx=async(n,e)=>{const t=Li(yl,n,e);console.log("docRef "+t),console.log("docid "+e),await g0(n+"/"+t.id);const i=Mx(Ux,"deleteDocumentsRecursively");let o=n+"/"+t.id;console.log("Path "+o);try{await i({path:o}),console.log("Yay "+o)}catch{console.log("Womp womp "+t)}},y0=async n=>{const e=Li(yl,n),t=await xP(e);return t.exists()?t.data().title:"asd"},zx=async n=>{let e=!1,t=0;for(;!e&&t<5e3;)try{await kc(qn(_l,n)),console.log("Setting True"),e=!0}catch{await new Promise(o=>setTimeout(o,500)),t+=500,console.log("WAITING!")}},$x=ah(jr),Hx=fh(jr),fc=({galleryType:n,collectionName:e="",adminMode:t=!1})=>{let i="";const{categoryId:o=""}=Tv(),a=t?"admin/":"",[c,d]=Y.useState(null),[p,y]=Y.useState(),v=()=>{d("add")},w=K=>{y(K),d("delete")},I=K=>{y(K),d("edit")},D=()=>{y(void 0),d(null)};n=="album"&&(i=o+"/",e="/albumCategories/"+o+"/albums");const[B,z]=Y.useState([]),[L,Z]=Y.useState(""),ee=Wo();return Y.useEffect(()=>{(async()=>{if(n==="album"){const ne="/albumCategories/"+o,_e=await y0(ne);Z(_e)}else Z("GALLERY")})()},[n,o]),Y.useEffect(()=>{const K=yw(oh($x,e),async ne=>{const _e=await Promise.all(ne.docs.map(async de=>{const N=de.data(),S=await kc(qn(Hx,N.coverImageUrl));return{id:de.id,title:N.title,coverImageUrl:S,updatedAt:N.updatedAt}}));z(_e)});return()=>K()},[e,ee]),H.jsxs("div",{className:"",children:[H.jsx(f0,{}),H.jsx("div",{className:"albumHeading",children:L.toUpperCase().split("").join(" ")}),t&&H.jsxs("div",{className:"admin-content text-neutral-200 ",children:[H.jsx("button",{onClick:v,className:"add-button",children:"Add"}),c=="add"&&H.jsx(fx,{onClose:D,onSave:jx,collectionPath:e})]}),H.jsx("div",{className:"mx-auto container grid grid-cols-3 gap-4",children:B.map(K=>H.jsxs("div",{children:[H.jsx(nc,{to:`/${a}${i}${K.id}`,className:"group transition-all mb-2",children:H.jsxs("div",{className:"flex flex-col items-center",children:[H.jsx("img",{src:K.coverImageUrl,alt:K.title,className:"album-image"}),H.jsxs("div",{className:"mt-4 text-center text-neutral-200",children:[H.jsx("strong",{children:K.title}),H.jsx("p",{className:"text-xs",children:K.title})]})]})}),t&&H.jsxs("div",{className:"admin-content ",children:[H.jsxs("div",{className:"text-red-500",children:[H.jsx("button",{onClick:()=>w(K.id),className:"delete-button",children:"Delete"}),c=="delete"&&p==K.id&&H.jsx(px,{onClose:D,onDelete:Bx,collectionPath:e,galleryName:K.id})]}),H.jsxs("div",{className:"text-blue-500",children:[H.jsx("button",{onClick:()=>I(K.id),className:"edit-button",children:"Edit"}),c=="edit"&&p==K.id&&H.jsx(mx,{onClose:D,onEdit:Fx,collectionPath:e,galleryName:K.id})]})]})]}))})]})},Wx=()=>H.jsx("div",{children:H.jsx("div",{children:H.jsx(fc,{galleryType:"",collectionName:"albumCategories"})})});var hf={exports:{}},df,hv;function qx(){if(hv)return df;hv=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return df=n,df}var ff,dv;function Kx(){if(dv)return ff;dv=1;var n=qx();function e(){}function t(){}return t.resetWarningCache=e,ff=function(){function i(c,d,p,y,v,w){if(w!==n){var I=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw I.name="Invariant Violation",I}}i.isRequired=i;function o(){return i}var a={array:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:o,element:i,elementType:i,instanceOf:o,node:i,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return a.PropTypes=a,a},ff}var fv;function Gx(){return fv||(fv=1,hf.exports=Kx()()),hf.exports}var Qx=Gx();const Fe=Qf(Qx);var _0=function(){if(typeof Map<"u")return Map;function n(e,t){var i=-1;return e.some(function(o,a){return o[0]===t?(i=a,!0):!1}),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(t){var i=n(this.__entries__,t),o=this.__entries__[i];return o&&o[1]},e.prototype.set=function(t,i){var o=n(this.__entries__,t);~o?this.__entries__[o][1]=i:this.__entries__.push([t,i])},e.prototype.delete=function(t){var i=this.__entries__,o=n(i,t);~o&&i.splice(o,1)},e.prototype.has=function(t){return!!~n(this.__entries__,t)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,i){i===void 0&&(i=null);for(var o=0,a=this.__entries__;o<a.length;o++){var c=a[o];t.call(i,c[1],c[0])}},e}()}(),Kf=typeof window<"u"&&typeof document<"u"&&window.document===document,Uc=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Xx=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Uc):function(n){return setTimeout(function(){return n(Date.now())},1e3/60)}}(),Yx=2;function Jx(n,e){var t=!1,i=!1,o=0;function a(){t&&(t=!1,n()),i&&d()}function c(){Xx(a)}function d(){var p=Date.now();if(t){if(p-o<Yx)return;i=!0}else t=!0,i=!1,setTimeout(c,e);o=p}return d}var Zx=20,eO=["top","right","bottom","left","width","height","size","weight"],tO=typeof MutationObserver<"u",nO=function(){function n(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Jx(this.refresh.bind(this),Zx)}return n.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},n.prototype.removeObserver=function(e){var t=this.observers_,i=t.indexOf(e);~i&&t.splice(i,1),!t.length&&this.connected_&&this.disconnect_()},n.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},n.prototype.updateObservers_=function(){var e=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return e.forEach(function(t){return t.broadcastActive()}),e.length>0},n.prototype.connect_=function(){!Kf||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),tO?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},n.prototype.disconnect_=function(){!Kf||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},n.prototype.onTransitionEnd_=function(e){var t=e.propertyName,i=t===void 0?"":t,o=eO.some(function(a){return!!~i.indexOf(a)});o&&this.refresh()},n.getInstance=function(){return this.instance_||(this.instance_=new n),this.instance_},n.instance_=null,n}(),v0=function(n,e){for(var t=0,i=Object.keys(e);t<i.length;t++){var o=i[t];Object.defineProperty(n,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return n},$o=function(n){var e=n&&n.ownerDocument&&n.ownerDocument.defaultView;return e||Uc},E0=_h(0,0,0,0);function Fc(n){return parseFloat(n)||0}function pv(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return e.reduce(function(i,o){var a=n["border-"+o+"-width"];return i+Fc(a)},0)}function rO(n){for(var e=["top","right","bottom","left"],t={},i=0,o=e;i<o.length;i++){var a=o[i],c=n["padding-"+a];t[a]=Fc(c)}return t}function iO(n){var e=n.getBBox();return _h(0,0,e.width,e.height)}function sO(n){var e=n.clientWidth,t=n.clientHeight;if(!e&&!t)return E0;var i=$o(n).getComputedStyle(n),o=rO(i),a=o.left+o.right,c=o.top+o.bottom,d=Fc(i.width),p=Fc(i.height);if(i.boxSizing==="border-box"&&(Math.round(d+a)!==e&&(d-=pv(i,"left","right")+a),Math.round(p+c)!==t&&(p-=pv(i,"top","bottom")+c)),!aO(n)){var y=Math.round(d+a)-e,v=Math.round(p+c)-t;Math.abs(y)!==1&&(d-=y),Math.abs(v)!==1&&(p-=v)}return _h(o.left,o.top,d,p)}var oO=function(){return typeof SVGGraphicsElement<"u"?function(n){return n instanceof $o(n).SVGGraphicsElement}:function(n){return n instanceof $o(n).SVGElement&&typeof n.getBBox=="function"}}();function aO(n){return n===$o(n).document.documentElement}function lO(n){return Kf?oO(n)?iO(n):sO(n):E0}function uO(n){var e=n.x,t=n.y,i=n.width,o=n.height,a=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,c=Object.create(a.prototype);return v0(c,{x:e,y:t,width:i,height:o,top:t,right:e+i,bottom:o+t,left:e}),c}function _h(n,e,t,i){return{x:n,y:e,width:t,height:i}}var cO=function(){function n(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=_h(0,0,0,0),this.target=e}return n.prototype.isActive=function(){var e=lO(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},n.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},n}(),hO=function(){function n(e,t){var i=uO(t);v0(this,{target:e,contentRect:i})}return n}(),dO=function(){function n(e,t,i){if(this.activeObservations_=[],this.observations_=new _0,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=i}return n.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof $o(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new cO(e)),this.controller_.addObserver(this),this.controller_.refresh())}},n.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof $o(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},n.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},n.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},n.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(i){return new hO(i.target,i.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},n.prototype.clearActive=function(){this.activeObservations_.splice(0)},n.prototype.hasActive=function(){return this.activeObservations_.length>0},n}(),w0=typeof WeakMap<"u"?new WeakMap:new _0,T0=function(){function n(e){if(!(this instanceof n))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var t=nO.getInstance(),i=new dO(e,t,this);w0.set(this,i)}return n}();["observe","unobserve","disconnect"].forEach(function(n){T0.prototype[n]=function(){var e;return(e=w0.get(this))[n].apply(e,arguments)}});var fO=function(){return typeof Uc.ResizeObserver<"u"?Uc.ResizeObserver:T0}();function pO(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Gf(){return Gf=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Gf.apply(this,arguments)}function I0(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{},i=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),i.forEach(function(o){pO(n,o,t[o])})}return n}function mO(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,a;for(a=0;a<i.length;a++)o=i[a],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function gO(n,e){if(n==null)return{};var t=mO(n,e),i,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)i=a[o],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function yO(n,e){return _O(n)||vO(n,e)||EO()}function _O(n){if(Array.isArray(n))return n}function vO(n,e){var t=[],i=!0,o=!1,a=void 0;try{for(var c=n[Symbol.iterator](),d;!(i=(d=c.next()).done)&&(t.push(d.value),!(e&&t.length===e));i=!0);}catch(p){o=!0,a=p}finally{try{!i&&c.return!=null&&c.return()}finally{if(o)throw a}}return t}function EO(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var wO={cursor:"pointer"},S0=function(e){var t=e.index,i=e.onClick,o=e.photo,a=e.margin,c=e.direction,d=e.top,p=e.left,y=e.key,v={margin:a,display:"block"};c==="column"&&(v.position="absolute",v.left=p,v.top=d);var w=function(D){i(D,{photo:o,index:t})};return ms.createElement("img",Gf({key:y,style:i?I0({},v,wO):v},o,{onClick:i?w:null}))},R0=Fe.shape({key:Fe.string,src:Fe.string.isRequired,width:Fe.number.isRequired,height:Fe.number.isRequired,alt:Fe.string,title:Fe.string,srcSet:Fe.oneOfType([Fe.string,Fe.array]),sizes:Fe.oneOfType([Fe.string,Fe.array])});S0.propTypes={index:Fe.number.isRequired,onClick:Fe.func,photo:R0.isRequired,margin:Fe.number,top:function(e){if(e.direction==="column"&&typeof e.top!="number")return new Error("top is a required number when direction is set to `column`")},left:function(e){if(e.direction==="column"&&typeof e.left!="number")return new Error("left is a required number when direction is set to `column`")},direction:Fe.string};var Do=function(e,t){return t||(t=0),+(Math.round(e+"e"+t)+"e-"+t)},TO=function(e){for(var t=e.photos,i=e.columns,o=e.containerWidth,a=e.margin,c=(o-a*2*i)/i,d=t.map(function(I){var D=I.height/I.width*c;return I0({},I,{width:Do(c,1),height:Do(D,1)})}),p=[],y=[],v=0;v<i;v++)p[v]=Do(v*(c+a*2),1),y[v]=0;var w=d.map(function(I){var D=y.reduce(function(z,L,Z){return z=L<y[z]?Z:z,z},0);I.top=y[D],I.left=p[D],y[D]=y[D]+I.height+a*2;var B=y.reduce(function(z,L,Z){return z=L>y[z]?Z:z,z},0);return I.containerHeight=y[B],I});return w},A0=function(e){var t=e.width,i=e.height;return Do(t/i,2)};function C0(n){this.content=[],this.scoreFunction=n}C0.prototype={push:function(e){this.content.push(e),this.bubbleUp(this.content.length-1)},pop:function(){var e=this.content[0],t=this.content.pop();return this.content.length>0&&(this.content[0]=t,this.sinkDown(0)),e},remove:function(e){for(var t=this.content.length,i=0;i<t;i++)if(this.content[i]==e){var o=this.content.pop();if(i==t-1)break;this.content[i]=o,this.bubbleUp(i),this.sinkDown(i);break}},size:function(){return this.content.length},bubbleUp:function(e){for(var t=this.content[e],i=this.scoreFunction(t);e>0;){var o=Math.floor((e+1)/2)-1,a=this.content[o];if(i>=this.scoreFunction(a))break;this.content[o]=t,this.content[e]=a,e=o}},sinkDown:function(e){for(var t=this.content.length,i=this.content[e],o=this.scoreFunction(i);;){var a=(e+1)*2,c=a-1,d=null;if(c<t){var p=this.content[c],y=this.scoreFunction(p);y<o&&(d=c)}if(a<t){var v=this.content[a],w=this.scoreFunction(v);w<(d==null?o:y)&&(d=a)}if(d==null)break;this.content[e]=this.content[d],this.content[d]=i,e=d}}};var IO=function(e,t,i){var o={},a={},c={};c[t]=0;var d=new C0(function(D){return D.weight});for(d.push({id:t,weight:0});d.size();){var p=d.pop(),y=p.id;if(!a[y]){var v=e(y)||{};a[y]=1;for(var w in v){var I=p.weight+v[w];(typeof c[w]>"u"||c[w]>I)&&(c[w]=I,d.push({id:w,weight:I}),o[w]=y)}}}if(typeof c[i]>"u")throw new Error("There is no path from ".concat(t," to ").concat(i));return o},SO=function(e,t){for(var i=[],o=t;o;)i.push(o),o=e[o];return i.reverse()},RO=function(e,t,i){var o=IO(e,t,i);return SO(o,i)},P0=function(e,t,i){var o=t-e.length*(i*2),a=e.reduce(function(c,d){return c+A0(d)},0);return o/a},AO=function(e,t,i,o,a,c){var d=e.slice(t,i),p=P0(d,o,c);return Math.pow(Math.abs(p-a),2)},CO=function(e,t,i,o,a){return function(c){var d={};c=+c,d[+c]=0;for(var p=c+1;p<i.length+1&&!(p-c>o);++p)d[p.toString()]=AO(i,c,p,t,e,a);return d}},PO=function(e){var t=e.containerWidth,i=e.limitNodeSearch,o=e.targetRowHeight,a=e.margin,c=e.photos,d=CO(o,t,c,i,a),p=RO(d,"0",c.length);p=p.map(function(D){return+D});for(var y=1;y<p.length;++y)for(var v=c.slice(p[y-1],p[y]),w=P0(v,t,a),I=p[y-1];I<p[y];++I)c[I].width=Do(w*A0(c[I]),1),c[I].height=w;return c},kO=function(e){var t=e.targetRowHeight,i=e.containerWidth,o=i/t;return Do(o/1.5)+8},rm=ms.memo(function(e){var t=e.photos,i=e.onClick,o=e.direction,a=e.margin,c=e.limitNodeSearch,d=e.targetRowHeight,p=e.columns,y=e.renderImage,v=Y.useState(0),w=yO(v,2),I=w[0],D=w[1],B=Y.useRef(null);Y.useLayoutEffect(function(){var ne=null,_e=new fO(function(de){var N=de[0].contentRect.width;I!==N&&(ne=window.requestAnimationFrame(function(){D(Math.floor(N))}))});return _e.observe(B.current),function(){_e.disconnect(),window.cancelAnimationFrame(ne)}});var z=function(_e,de){var N=de.index;i(_e,{index:N,photo:t[N],previous:t[N-1]||null,next:t[N+1]||null})};if(!I)return ms.createElement("div",{ref:B}," ");var L=I-1,Z,ee;o==="row"&&(typeof c=="function"&&(c=c(I)),typeof d=="function"&&(d=d(I)),c===void 0&&(c=2,I>=450&&(c=kO({containerWidth:I,targetRowHeight:d}))),Z={display:"flex",flexWrap:"wrap",flexDirection:"row"},ee=PO({containerWidth:L,limitNodeSearch:c,targetRowHeight:d,margin:a,photos:t})),o==="column"&&(typeof p=="function"&&(p=p(I)),p===void 0&&(p=1,I>=500&&(p=2),I>=900&&(p=3),I>=1500&&(p=4)),Z={position:"relative"},ee=TO({containerWidth:L,columns:p,margin:a,photos:t}),Z.height=ee[ee.length-1].containerHeight);var K=y||S0;return ms.createElement("div",{className:"react-photo-gallery--gallery"},ms.createElement("div",{ref:B,style:Z},ee.map(function(ne,_e){var de=ne.left,N=ne.top,S=ne.containerHeight,C=gO(ne,["left","top","containerHeight"]);return K({left:de,top:N,key:ne.key||ne.src,containerHeight:S,index:_e,margin:a,direction:o,onClick:i?z:null,photo:C})})))});rm.propTypes={photos:Fe.arrayOf(R0).isRequired,direction:Fe.string,onClick:Fe.func,columns:Fe.oneOfType([Fe.func,Fe.number]),targetRowHeight:Fe.oneOfType([Fe.func,Fe.number]),limitNodeSearch:Fe.oneOfType([Fe.func,Fe.number]),margin:Fe.number,renderImage:Fe.func};rm.defaultProps={margin:2,direction:"row",targetRowHeight:300};const NO=({onClose:n,onSave:e,collectionPath:t})=>{const[i,o]=Y.useState(null),a=!i,[c,d]=Y.useState(0),[p,y]=Y.useState(0),v=I=>{var B;const D=((B=I.target.files)==null?void 0:B[0])||null;if(o(D),D){const z=new FileReader;z.onload=L=>{var ee;const Z=new Image;Z.onload=()=>{d(Z.naturalWidth),y(Z.naturalHeight),console.log(`Image dimensions: ${Z.width}x${Z.height}`)},Z.src=(ee=L.target)==null?void 0:ee.result},z.readAsDataURL(D)}else d(0),y(0)},w=I=>{I.preventDefault(),e(p,c,i,t),n()};return H.jsxs(xl,{onClose:n,children:[H.jsx("h2",{children:"Add Image"}),H.jsxs("form",{onSubmit:w,children:[H.jsx("input",{type:"file",accept:"image/*",onChange:v}),H.jsx("button",{type:"submit",disabled:a,className:"save-button",children:"Save"}),H.jsx("button",{type:"button",onClick:n,className:"cancel-button",children:"Cancel"})]})]})},xO=({onClose:n,onDelete:e,collectionPath:t,galleryName:i,enlargedImageURL:o,imageSrc:a,adminMode:c=!1})=>{const d=p=>{console.log("IMAGE SRC"),console.log(a),console.log(i),p.preventDefault(),e(t,i),n()};return H.jsxs(xl,{onClose:n,backgroundClassName:"image-modal-background",contentClassName:"image-modal-content",children:[H.jsx("img",{src:o}),c&&H.jsx("button",{className:"delete-button",onClick:d,children:"Delete Image"})]})},jc=ah(jr),vl=fh(jr),OO=async(n,e,t,i)=>{if(t==null)return;const o=Li(oh(jc,i)),a=await qn(vl,"/"+i+o.id);await Wp(a,t).then(d=>{console.log("Uploaded a blob or file!")}).catch(d=>{console.error("Upload failed",d)});const c=i+o.id;await zx(c+"_700x700"),await gw(o,{imageUrl:c,smallURL:c+"_500x500",mediumURL:c+"_700x700",largeURL:c+"_2000x2000",width:e,height:n})},DO=async(n,e)=>{console.log("ADADSSDSDSDSDS"),console.log(n),console.log(e),console.log(Li(jc,e)),await OP(Li(jc,e)).then(o=>{console.log("Deleted document from database")}).catch(o=>{console.error("Failed to delete document from database",o)});const t=qn(vl,e);console.log(t);let i=[e,e+"_500x500",e+"_700x700",e+"_2000x2000"];for(let o=0;o<i.length;o++)await qp(qn(vl,i[o])).then(()=>{console.log("Deleted ",i[o])}).catch(a=>{console.error("Error occurred in deleting file from Firebase storage",a)})},mv=({adminMode:n=!1})=>{const{categoryId:e,galleryId:t}=Tv();if(!t)return H.jsx("div",{className:"text-white",children:"Invalid gallery ID"});const[i,o]=Y.useState([]),[a,c]=Y.useState("");Y.useEffect(()=>{(async()=>{const K=`albumCategories/${e}/albums/${t}`,ne=await y0(K);c(ne)})()},[e]),Y.useEffect(()=>{const ee=yw(oh(jc,`albumCategories/${e}/albums/${t}/images/`),async K=>{const ne=await Promise.all(K.docs.map(async _e=>{const de=_e.data();console.log(de.imageUrl);const N=await kc(qn(vl,de.mediumURL)),S=de.width,C=de.height,x=await kc(qn(vl,de.largeURL)),b=de.imageUrl;return{src:N,width:Number(S),height:Number(C),name:b,largeImageURL:x}}));o(ne),console.log(i)});return()=>ee()},[e,t]);const[d,p]=Y.useState(null),[y,v]=Y.useState(),w=()=>{p("add")},I=()=>{v(void 0),p(null)},D=({photo:ee,index:K,left:ne,top:_e,margin:de,direction:N})=>{const S=ee;return H.jsx("div",{style:{margin:de,cursor:"pointer",position:N==="column"?"absolute":"relative",left:ne,top:_e,backgroundColor:"#eee",overflow:"hidden"},onClick:()=>L(ee.src,S.name,S.largeImageURL),children:H.jsx("img",{src:ee.src,width:ee.width,height:ee.height,alt:`Image ${K}`})})},[B,z]=Y.useState([null,null,null]),L=(ee,K,ne)=>z([ee,K,ne]),Z=()=>z([null,null,null]);return H.jsxs("div",{className:"w-full h-screen overflow-x-hidden",children:[H.jsx(f0,{}),H.jsx("div",{className:"albumHeading",children:a.toUpperCase().split("").join(" ")}),n&&H.jsxs("div",{className:"admin-content text-neutral-200 ",children:[H.jsx("button",{onClick:w,className:"add-button",children:"Add"}),d=="add"&&H.jsx(NO,{onClose:I,onSave:OO,collectionPath:`albumCategories/${e}/albums/${t}/images/`})]}),i.length>0&&H.jsx(rm,{photos:i,direction:"column",renderImage:D}),B[0]&&H.jsx(xO,{onDelete:DO,collectionPath:`albumCategories/${e}/albums/${t}/images/`,galleryName:B[1],enlargedImageURL:B[2],adminMode:n,imageSrc:B[0],onClose:Z})]})},bO=()=>{const[n,e]=Y.useState(""),[t,i]=Y.useState(""),[o,a]=Y.useState(""),c=tp(),d=async()=>{try{a(""),await X1(d0,n,t),c("/admin")}catch{a("THE ROBOTS ARE TAKING OVER!!!!!!! JK email or password was wrong please try again or contact Jacek")}};return H.jsx("div",{className:"login-container",children:H.jsxs("div",{className:"login-box",children:[H.jsx("div",{className:"login-header",children:"Tata Login"}),o&&H.jsx("div",{className:"login-error",children:o}),H.jsx("input",{type:"email",placeholder:"Email",value:n,onChange:p=>e(p.target.value)}),H.jsx("input",{type:"password",placeholder:"Password",value:t,onChange:p=>i(p.target.value)}),H.jsx("button",{onClick:d,children:"Login"})]})})};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function LO(n,e,t,i){function o(a){return a instanceof t?a:new t(function(c){c(a)})}return new(t||(t=Promise))(function(a,c){function d(v){try{y(i.next(v))}catch(w){c(w)}}function p(v){try{y(i.throw(v))}catch(w){c(w)}}function y(v){v.done?a(v.value):o(v.value).then(d,p)}y((i=i.apply(n,[])).next())})}function VO(n,e){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},i,o,a,c;return c={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function d(y){return function(v){return p([y,v])}}function p(y){if(i)throw new TypeError("Generator is already executing.");for(;t;)try{if(i=1,o&&(a=y[0]&2?o.return:y[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,y[1])).done)return a;switch(o=0,a&&(y=[y[0]&2,a.value]),y[0]){case 0:case 1:a=y;break;case 4:return t.label++,{value:y[1],done:!1};case 5:t.label++,o=y[1],y=[0];continue;case 7:y=t.ops.pop(),t.trys.pop();continue;default:if(a=t.trys,!(a=a.length>0&&a[a.length-1])&&(y[0]===6||y[0]===2)){t=0;continue}if(y[0]===3&&(!a||y[1]>a[0]&&y[1]<a[3])){t.label=y[1];break}if(y[0]===6&&t.label<a[1]){t.label=a[1],a=y;break}if(a&&t.label<a[2]){t.label=a[2],t.ops.push(y);break}a[2]&&t.ops.pop(),t.trys.pop();continue}y=e.call(n,t)}catch(v){y=[6,v],o=0}finally{i=a=0}if(y[0]&5)throw y[1];return{value:y[0]?y[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Po=function(){return Po=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Po.apply(this,arguments)},k0=function(n){return{loading:n==null,value:n}},MO=function(){return function(n,e){switch(e.type){case"error":return Po(Po({},n),{error:e.error,loading:!1,value:void 0});case"reset":return k0(e.defaultValue);case"value":return Po(Po({},n),{error:void 0,loading:!1,value:e.value});default:return n}}},UO=function(n){var e=n?n():void 0,t=Y.useReducer(MO(),k0(e)),i=t[0],o=t[1],a=Y.useCallback(function(){var p=n?n():void 0;o({type:"reset",defaultValue:p})},[n]),c=Y.useCallback(function(p){o({type:"error",error:p})},[]),d=Y.useCallback(function(p){o({type:"value",value:p})},[]);return Y.useMemo(function(){return{error:i.error,loading:i.loading,reset:a,setError:c,setValue:d,value:i.value}},[i.error,i.loading,a,c,d,i.value])},FO=function(n,e){var t=UO(function(){return n.currentUser}),i=t.error,o=t.loading,a=t.setError,c=t.setValue,d=t.value;return Y.useEffect(function(){var p=Z1(n,function(y){return LO(void 0,void 0,void 0,function(){var v;return VO(this,function(w){switch(w.label){case 0:return[3,4];case 1:return w.trys.push([1,3,,4]),[4,e.onUserChanged(y)];case 2:return w.sent(),[3,4];case 3:return v=w.sent(),a(v),[3,4];case 4:return c(y),[2]}})})},a);return function(){p()}},[n]),[d,o,i]};const pf=({children:n})=>{const[e,t]=FO(d0);return t?H.jsx("div",{children:"Loading..."}):e?n:H.jsx(OI,{to:"/login"})};function jO(){return H.jsx(H.Fragment,{children:H.jsxs("div",{className:"gradient_background",children:[H.jsxs(bI,{children:[H.jsx(fi,{path:"/",element:H.jsx(Wx,{})}),H.jsx(fi,{path:"/:categoryId",element:H.jsx(fc,{galleryType:"album"})}),H.jsx(fi,{path:"/:categoryId/:galleryId",element:H.jsx(mv,{})}),H.jsx(fi,{path:"/login",element:H.jsx(bO,{})}),H.jsx(fi,{path:"/admin",element:H.jsx(pf,{children:H.jsx(fc,{galleryType:"gallery",collectionName:"albumCategories",adminMode:!0})})}),H.jsx(fi,{path:"/admin/:categoryId",element:H.jsx(pf,{children:H.jsx(fc,{galleryType:"album",adminMode:!0})})}),H.jsx(fi,{path:"/admin/:categoryId/:galleryId",element:H.jsx(pf,{children:H.jsx(mv,{adminMode:!0})})})]}),H.jsx("script",{src:"../dist/bundle.js"})]})})}$T.createRoot(document.getElementById("root")).render(H.jsx(ms.StrictMode,{children:H.jsx(jI,{children:H.jsx(jO,{})})}));
