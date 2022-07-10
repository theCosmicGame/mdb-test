"use strict";var e=require("clsx"),t=require("react"),a=require("react-dom");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(e),l=r(t),n=r(a),c=function(){return c=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)};function i(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(a[r[o]]=e[r[o]])}return a}var s=l.default.forwardRef((function(e,t){var a=e.className,r=e.children,n=e.tag,s=e.color,d=e.grow,u=e.size,f=i(e,["className","children","tag","color","grow","size"]),p=o.default("".concat(d?"spinner-grow":"spinner-border"),s&&"text-".concat(s),"".concat(u?d?"spinner-grow-"+u:"spinner-border-"+u:""),a);return l.default.createElement(n,c({className:p,ref:t},f),r)}));s.defaultProps={tag:"div"};var d=l.default.forwardRef((function(e,a){var r=e.backdrop,s=e.backdropColor,d=e.backdropOpacity,u=e.color,f=e.className,p=e.loadingText,m=e.isOpen,g=e.fullScreen,b=e.overflow,y=e.parentRef,v=e.spinnerElement,O=e.textClassName,w=e.textStyles,x=e.tag,E=i(e,["backdrop","backdropColor","backdropOpacity","color","className","loadingText","isOpen","fullScreen","overflow","parentRef","spinnerElement","textClassName","textStyles","tag"]),k=o.default("loading-text",O),N=o.default(g?"loading-full":"loading","loading-spinner",g?"position-fixed":"position-absolute",u&&"text-".concat(u),f),h=o.default("loading-backdrop",!g&&"position-absolute");t.useEffect((function(){var e=null==y?void 0:y.current;if(e)return e.classList.add("position-relative"),function(){e.classList.remove("position-relative")}}),[y]),t.useEffect((function(){if(g&&b)return document.body.style.overflow=m?"hidden":"",function(){document.body.style.overflow=""}}),[g,m,b]);var j=l.default.createElement(x,c({className:N,ref:a},E),v,l.default.createElement("span",{className:k,style:w},p)),P=l.default.createElement("div",{className:h,style:{opacity:d,backgroundColor:s}});return l.default.createElement(l.default.Fragment,null,!1!==m&&l.default.createElement(l.default.Fragment,null,g?n.default.createPortal(l.default.createElement(l.default.Fragment,null,j,P),document.body):l.default.createElement(l.default.Fragment,null,j,r&&P)))}));d.defaultProps={tag:"div",backdrop:!0,loadingText:"Loading...",backdropColor:"black",backdropOpacity:.4,spinnerElement:l.default.createElement(s,{className:"loading-icon",role:"status"}),overflow:!0},module.exports=d;