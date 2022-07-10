"use strict";var e=require("react"),t=require("clsx"),a=require("react-perfect-scrollbar"),n=require("react-popper"),l=require("react-dom");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(e),c=r(t),i=r(a),s=r(l),u=function(){return u=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},u.apply(this,arguments)};function d(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}function f(e,t){for(var a=0,n=t.length,l=e.length;a<n;a++,l++)e[l]=t[a];return e}function m(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===a&&n.firstChild?n.insertBefore(l,n.firstChild):n.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}m("/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n.scrollbar-container {\n  position: relative;\n  height: 100%; }");var p=function(t){var a=t.className,n=t.sidenav,l=t.tag,r=t.handlers,s=t.wheelSpeed,f=t.wheelPropagation,m=t.swipeEasing,p=t.minScrollbarLength,h=t.maxScrollbarLength,b=t.scrollingThreshold,v=t.useBothWheelAxes,g=t.suppressScrollX,x=t.suppressScrollY,E=t.scrollXMarginOffset,y=t.scrollYMarginOffset,w=t.scrollBarRef,N=t.children,k=d(t,["className","sidenav","tag","handlers","wheelSpeed","wheelPropagation","swipeEasing","minScrollbarLength","maxScrollbarLength","scrollingThreshold","useBothWheelAxes","suppressScrollX","suppressScrollY","scrollXMarginOffset","scrollYMarginOffset","scrollBarRef","children"]),S=c.default(n&&"sidenav-menu",a),C=e.useRef(null);e.useEffect((function(){w&&w(C)}),[w]);var _=u(u({},r),{wheelSpeed:s,wheelPropagation:f,swipeEasing:m,minScrollbarLength:p,maxScrollbarLength:h,scrollingThreshold:b,useBothWheelAxes:v,suppressScrollX:g,suppressScrollY:x,scrollXMarginOffset:E,scrollYMarginOffset:y});return o.default.createElement(i.default,u({className:S,ref:C,component:l,options:_},k),N)};p.defaultProps={tag:"div",handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],wheelSpeed:1,wheelPropagation:!0,swipeEasing:!0,minScrollbarLength:void 0,maxScrollbarLength:void 0,scrollingThreshold:1e3,useBothWheelAxes:!1,suppressScrollX:!1,suppressScrollY:!1,scrollXMarginOffset:0,scrollYMarginOffset:0};var h=function(e){var t=e.className,a=e.maxWidth,n=e.maxHeight,l=e.children,r=d(e,["className","maxWidth","maxHeight","children"]),i=c.default("datatable-inner","table-responsive","ps",t);return o.default.createElement(p,u({style:{overflow:"auto",position:"relative",width:a,height:n},className:i},r),l)};h.defaultProps={};var b=o.default.forwardRef((function(e,t){var a=e.className,n=e.tag,l=e.children,r=d(e,["className","tag","children"]),i=c.default("datatable-pagination",a);return o.default.createElement(n,u({className:i,ref:t},r),l)}));b.defaultProps={tag:"div"};var v=function(t){var a,n=t.className,l=t.size,r=t.contrast,i=t.value,s=t.defaultValue,f=t.id,m=t.labelClass,p=t.wrapperClass,h=t.wrapperStyle,b=t.wrapperTag,v=t.label,g=t.onChange,x=t.children,E=t.labelRef,y=t.labelStyle,w=t.inputRef,N=t.type,k=t.onBlur,S=t.readonly,C=d(t,["className","size","contrast","value","defaultValue","id","labelClass","wrapperClass","wrapperStyle","wrapperTag","label","onChange","children","labelRef","labelStyle","inputRef","type","onBlur","readonly"]),_=e.useState(i||s),T=_[0],R=_[1],L=e.useState(0),O=L[0],P=L[1],B=e.useState(!(!i&&!s)),F=B[0],A=B[1],M=e.useRef(null),W=e.useRef(null),H=E||M,V=w||W,j=c.default("form-outline",r&&"form-white",p),z=c.default("form-control",F&&"active","date"===N&&"active",l&&"form-control-".concat(l),n),I=c.default("form-label",m);e.useEffect((function(){void 0!==i&&A(!!i)}),[i]),e.useEffect((function(){void 0!==s&&A(!!s)}),[s]);var q=e.useCallback((function(){var e;(null===(e=H.current)||void 0===e?void 0:e.clientWidth)&&P(.8*H.current.clientWidth+8)}),[H]);e.useEffect((function(){q()}),[null===(a=H.current)||void 0===a?void 0:a.clientWidth,q]);return o.default.createElement(b,{className:j,style:h},o.default.createElement("input",u({type:N,readOnly:S,className:z,onBlur:function(e){A(""!==T),null==k||k(e)},onChange:function(e){R(e.target.value),null==g||g(e)},onFocus:q,value:i,defaultValue:s,id:f,ref:V},C)),v&&o.default.createElement("label",{className:I,style:y,htmlFor:f,ref:H},v),o.default.createElement("div",{className:"form-notch"},o.default.createElement("div",{className:"form-notch-leading"}),o.default.createElement("div",{className:"form-notch-middle",style:{width:O}}),o.default.createElement("div",{className:"form-notch-trailing"})),x)};v.defaultProps={wrapperTag:"div",readonly:!1};var g=o.default.forwardRef((function(e,t){var a=e.className,n=e.open,l=e.tag,r=e.children,i=d(e,["className","open","tag","children"]),s=c.default("select-dropdown",n&&"open",a);return o.default.createElement(l,u({className:s},i,{ref:t}),r)}));g.defaultProps={tag:"div"};var x=o.default.forwardRef((function(e,t){var a=e.className,n=e.tag,l=e.children,r=d(e,["className","tag","children"]),i=c.default("select-option-icon-container",a);return o.default.createElement(n,u({className:i},r,{ref:t}),l)}));x.defaultProps={tag:"span"};var E=function(e){var t=e.className,a=e.inputRef,n=e.labelClass,l=e.wrapperClass,r=e.labelStyle,i=e.wrapperTag,s=e.wrapperStyle,f=e.label,m=e.inline,p=e.btn,h=e.id,b=e.btnColor,v=e.disableWrapper,g=e.toggleSwitch,x=d(e,["className","inputRef","labelClass","wrapperClass","labelStyle","wrapperTag","wrapperStyle","label","inline","btn","id","btnColor","disableWrapper","toggleSwitch"]),E="form-check-input",y="form-check-label";p&&(E="btn-check",y=b?"btn btn-".concat(b):"btn btn-primary");var w=c.default(f&&!p&&"form-check",m&&!p&&"form-check-inline",g&&"form-switch",l),N=c.default(E,t),k=c.default(y,n),S=o.default.createElement(o.default.Fragment,null,o.default.createElement("input",u({className:N,id:h,ref:a},x)),f&&o.default.createElement("label",{className:k,style:r,htmlFor:h},f));return o.default.createElement(o.default.Fragment,null,v?S:o.default.createElement(i,{style:s,className:w},S))};E.defaultProps={wrapperTag:"div"};var y=function(e){var t=d(e,[]);return o.default.createElement(E,u({type:"checkbox"},t))},w=function(t){var a=t.className,n=t.tag,l=t.disabled,r=t.height,i=t.active,s=t.children,f=t.selected,m=t.style,p=t.secondaryText,h=t.text,b=t.revert,v=t.onClick,g=t.multiple,x=d(t,["className","tag","disabled","height","active","children","selected","style","secondaryText","text","revert","onClick","multiple"]),E=c.default(void 0!==a&&(null==a?void 0:a.includes("select-no-results"))?"":"select-option",f&&"selected",l&&"disabled",i&&"active",a),w=e.useState(r),N=w[0],k=w[1],S=e.useState(!1),C=S[0],_=S[1];e.useEffect((function(){p&&void 0===r?k(44):void 0===r&&k(38)}),[p,r]);var T=e.useCallback((function(e){l||(v&&v(e),_(!C))}),[C,l,v]);return e.useEffect((function(){g&&_(!(!f||l))}),[f,l,g]),o.default.createElement(n,u({className:E,style:u({height:N},m),onClick:T},x,{role:"option"}),b?o.default.createElement(o.default.Fragment,null,s,o.default.createElement("div",{className:"select-option-text"},g&&o.default.createElement(y,{label:h,onChange:T,checked:C,disabled:l}),!g&&h,p&&o.default.createElement("span",{className:"select-option-secondary-text"},p))):o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"select-option-text"},g&&o.default.createElement(y,{label:h,onChange:T,checked:C,disabled:l}),!g&&h,p&&o.default.createElement("span",{className:"select-option-secondary-text"},p)),s))};w.defaultProps={tag:"span",revert:!1};var N=o.default.forwardRef((function(e,t){var a=e.className,n=e.tag,l=e.children,r=d(e,["className","tag","children"]),i=c.default("select-option-icon",a);return o.default.createElement(n,u({className:i},r,{ref:t}),l)}));N.defaultProps={tag:"img"};var k=o.default.forwardRef((function(e,t){var a=e.className,n=e.tag,l=e.children,r=d(e,["className","tag","children"]),i=c.default("select-options-list",a);return o.default.createElement(n,u({className:i},r,{ref:t}),l)}));k.defaultProps={tag:"div"};var S=o.default.forwardRef((function(e,t){var a=e.className,n=e.tag,l=e.children,r=e.maxHeight,i=d(e,["className","tag","children","maxHeight"]),s=c.default("select-options-wrapper",a);return o.default.createElement(n,u({className:s,style:{maxHeight:r}},i,{ref:t}),l)}));S.defaultProps={tag:"div"};m(".select-input-label-active {\n  color: #1266f1 !important;\n}\n");var C=function(t){var a=t.children,l=t.className,r=t.clearBtn,i=t.data,m=t.tag,p=t.tagWrapper,h=t.visibleOptions,b=t.placeholder,E=t.disabled,y=t.search,C=t.getValue,_=t.multiple,T=t.optionSelected,R=t.optionsSelectedLabel,L=t.label,O=t.getData,P=t.selectAllLabel,B=t.noResultLabel,F=t.searchLabel,A=t.size,M=t.validation,W=t.validFeedback,H=t.invalidFeedback,V=t.inputClassName,j=t.searchAriaLabel,z=d(t,["children","className","clearBtn","data","tag","tagWrapper","visibleOptions","placeholder","disabled","search","getValue","multiple","optionSelected","optionsSelectedLabel","label","getData","selectAllLabel","noResultLabel","searchLabel","size","validation","validFeedback","invalidFeedback","inputClassName","searchAriaLabel"]),I=e.useState(!1),q=I[0],D=I[1],X=e.useState(""),Y=X[0],U=X[1],K=e.useState(!1),G=K[0],J=K[1],Q=e.useState(!1),Z=Q[0],$=Q[1],ee=e.useState(""),te=ee[0],ae=ee[1],ne=e.useRef(null),le=e.useState(null),re=le[0],oe=le[1],ce=e.useState(i),ie=ce[0],se=ce[1],ue=e.useState(""),de=ue[0],fe=ue[1],me=e.useState(!1),pe=me[0],he=me[1],be=e.useState([]),ve=be[0],ge=be[1],xe=e.useState(!1),Ee=xe[0],ye=xe[1],we=e.useState(i),Ne=we[0],ke=we[1],Se=e.useState(),Ce=Se[0],_e=Se[1],Te=e.useState(),Re=Te[0],Le=Te[1],Oe=e.useState(ie.findIndex((function(e){return!e.disabled&&e.selected}))),Pe=Oe[0],Be=Oe[1],Fe=e.useRef(null),Ae=e.useState(!1),Me=Ae[0],We=Ae[1],He=e.useRef(null),Ve=e.useState(0),je=Ve[0],ze=Ve[1],Ie=e.useState(!1),qe=Ie[0],De=Ie[1],Xe=e.useState(!1),Ye=Xe[0],Ue=Xe[1],Ke=e.useRef(null),Ge=n.usePopper(Ce,Re,{placement:"bottom-start"}),Je=Ge.styles,Qe=Ge.attributes,Ze=c.default("select-wrapper",l),$e=c.default("select-input",b&&"placeholder-active",pe&&L&&"active",q&&"focused","default"!==A&&"form-control-".concat(A),V);e.useEffect((function(){se(i),ke(i);var e=i.filter((function(e){return!0===e.selected&&!e.disabled}));e.length>0&&ae(e[0].text)}),[i]),e.useEffect((function(){var e=[];ie.forEach((function(t){t.selected&&e.push({text:t.text,value:t.value})})),C&&e&&C(_?e:e[0])}),[te]),e.useEffect((function(){G&&y&&setTimeout((function(){var e;null===(e=He.current)||void 0===e||e.focus()}),100)}),[G,y]);var et=e.useCallback((function(){null!=Ce&&G&&setTimeout((function(){var e,t=null===(e=Ce.parentNode)||void 0===e?void 0:e.parentNode.getBoundingClientRect();U(t.width)}),100)}),[Ce,G]);e.useEffect((function(){var e,t;if(W&&H&&Ce){if(W){var a=document.createElement("div");a.classList.add("valid-feedback"),a.innerHTML=W,Ce.setAttribute("required","true"),null===(e=Ce.parentNode)||void 0===e||e.insertBefore(a,Ce.nextSibling)}if(H){var n=document.createElement("div");n.classList.add("invalid-feedback"),n.innerHTML=H,Ce.setAttribute("required","true"),null===(t=Ce.parentNode)||void 0===t||t.insertBefore(n,Ce.nextSibling)}}}),[W,H,Ce]),e.useEffect((function(){et()}),[et]);var tt=e.useCallback((function(e){Re&&null!==Re&&q&&Ce&&null!==Ce&&(Re.contains(e.target)||Ce.contains(e.target)?he(!0):(D(!1),he(!1),y&&setTimeout((function(){fe("")}),100)))}),[q,Re,Ce,y]),at=e.useCallback((function(){D(!q),y&&fe("")}),[q,y]);e.useEffect((function(){if(Me&&!G&&void 0!==je)if(_)D(!0);else{var e=i.map((function(e,t){return u(u({},e),t===je?{selected:!0,active:!0}:{selected:!1,active:!1})}));je<=0?ae(e[0].text):je>=e.length-1?ae(e[e.length-1].text):ae(e[je].text);for(var t=[],a=function(a){t.push(u(u({},i[a]),e.find((function(e){return e.text===i[a].text}))))},n=0;n<i.length;n++)a(n);O&&O(t),ke(t),se(t)}return function(){clearTimeout(undefined)}}),[je]),e.useEffect((function(){var e,t;return q?(J(!0),L&&he(!0),t=setTimeout((function(){$(!0)}),100)):(e=setTimeout((function(){J(!1)}),100),L&&he(!1),$(!1)),function(){clearTimeout(e),clearTimeout(t)}}),[q,L]),e.useEffect((function(){if(_)if(Ee){var e=ie.map((function(e){return u(u({},e),{selected:!0,active:!0})}));se(e);var t=e.filter((function(e){return!e.disabled})).map((function(e){return e.text}));ge(t),ae("".concat(t.length," option").concat(t.length<=1?"":"s"," selected"))}else{se(Ne);t=Ne.filter((function(e){return!e.disabled&&e.selected})).map((function(e){return e.text}));ge(t),ae("".concat(t.length," option").concat(t.length<=1?"":"s"," selected"))}}),[Ee]),e.useEffect((function(){_&&(ve.length>=Number(T)?ae(R||"".concat(ve.length," option").concat(ve.length<=1?"":"s"," selected")):ae(ve.join(", ")))}),[ve,_,T,R]),e.useEffect((function(){if(_){t=i.map((function(e){return void 0===e.selected?u(u({},e),{active:!1,selected:!1}):u(u({},e),{active:!0})}));se(t);var e=Ne.filter((function(e){return!0===e.selected&&!e.disabled})).map((function(e){return e.text}));ge(e),ve.length>=Number(T)?ae("".concat(ve.length," option").concat(ve.length<=1?"":"s"," selected")):ae(ve.join(", "))}else{var t,a=(t=ie.map((function(e){return void 0===e.selected?u(u({},e),{active:!1,selected:!1}):u(u({},e),{active:!0})}))).filter((function(e){return!0===e.selected&&!e.disabled}));a.length>0&&(se(t),ae(a[0].text)),O&&O(t)}}),[]),e.useEffect((function(){return G&&window.addEventListener("resize",et),function(){window.removeEventListener("resize",et)}}),[et,G]),e.useEffect((function(){return G&&window.addEventListener("click",tt),function(){window.removeEventListener("click",tt)}}),[tt,G]);var nt=e.useCallback((function(e,t,a){return void 0===a&&(a=h),f([],e).slice(0,a).forEach((function(e){var a=getComputedStyle(e).height;t.push(parseFloat(a))})),t}),[h]);e.useEffect((function(){var e,t;if(G){var a=null===(e=ne.current)||void 0===e?void 0:e.children,n=[];t=setTimeout((function(){void 0!==a&&(nt(a,n),oe(n.reduce((function(e,t){return e+t}))))}),0)}return function(){clearTimeout(t)}}),[G,h,nt]);var lt=e.useCallback((function(e,t){var a=e.disabled,n=e.className,l=e.text,r=e.selected;if(!(a||void 0!==n&&n.includes("select-no-results")))if(_)ie[t].selected=!ie[t].selected,se(ie),ke(ie),void 0===l||r&&void 0!==r?void 0!==l&&r&&ge(ve.filter((function(e){return e!==l}))):ge(f(f([],ve),[l]));else{Be(t),ae(l),D(!1);for(var o=ie.map((function(e,a){return a!==t?(e.selected=!1,e.active=!1):(e.selected=!0,e.active=!0),e})),c=i.map((function(e){return u(u({},e),{active:!1,selected:!1})})),s=[],d=function(e){s.push(u(u({},c[e]),o.find((function(t){return t.text===c[e].text}))))},m=0;m<c.length;m++)d(m);se(s),ke(s),O&&O(s)}}),[i,ie,O,_,ve]),rt=e.useCallback((function(e,t,a){var n=0;return a?((n=e-1)<0&&(n=0),t[n].disabled&&(n=rt(n,t,!0))):((n=e+1)>t.length-1&&(n=t.length-1),t[n].disabled&&(n=rt(n,t,!1))),n}),[]),ot=e.useCallback((function(e){var t=e.key;if("Escape"===t||"ArrowDown"===t||"ArrowUp"===t||"Enter"===t){var a,n,l;if(e.preventDefault(),"Escape"===t&&(a=setTimeout((function(){J(!1),y&&fe("")}),100),D(!1),$(!1)),"ArrowDown"===t){var r=G?ie.findIndex((function(e){return e.active})):ie.findIndex((function(e){return e.selected})),o=rt(r,ie,!1);G?(De(!1),Ue(!0),Be(o)):ze(o)}if("ArrowUp"===t){r=G?ie.findIndex((function(e){return e.active})):ie.findIndex((function(e){return e.selected})),o=rt(r,ie,!0);G?(De(!0),Ue(!1),Be(o)):ze(o)}if("Enter"===t)if(G)if(_){r=ie.findIndex((function(e){return e.active}));lt(ie[r],r)}else{l=setTimeout((function(){J(!1),y&&fe("")}),100);var c=ie.filter((function(e){return e.active&&!e.disabled}))[0],i=ie.findIndex((function(e){return e.active&&!e.disabled})),s=Ne.map((function(e,t){return u(u({},e),t===i?{selected:!0}:{selected:!1})}));ae(c.text),D(!1),$(!1),se(s),ke(s)}else n=setTimeout((function(){J(!0),D(!0),$(!0)}),100);return function(){clearTimeout(a),clearTimeout(n),clearTimeout(l)}}}),[y,ie,_,lt,Ne,G,rt]);e.useEffect((function(){var e,t=Ke.current;if(null!==ne){var a=[],n=[];if(G){var l=null===(e=ne.current)||void 0===e?void 0:e.children;setTimeout((function(){if(nt(l,a,i.length),nt(l,n,Pe),0!==n.length){var e=n.reduce((function(e,t){return e+t}));null!==re&&null!==t&&e>re&&(t.scrollTop=e)}}),100)}}}),[G,Pe]),e.useEffect((function(){var e,t=Ke.current;if(null!==ne){var a=[],n=[];if(G){var l=null===(e=ne.current)||void 0===e?void 0:e.children;setTimeout((function(){nt(l,a,i.length),nt(l,n,Pe+2);var e=a.reduce((function(e,t){return e+t})),r=n.reduce((function(e,t){return e+t})),o=ie.map((function(e,t){return u(u({},e),t===Pe?{active:!0}:{active:!1})}));se(o),null!==re&&null!==t&&(Ye&&(t.scrollTop=r>re?r-re:0),qe&&(t.scrollTop=r<=re?r-76:e))}),100)}}}),[G,i,Ye,qe,nt,Pe,re]),e.useEffect((function(){return Me&&window.addEventListener("keydown",ot),function(){window.removeEventListener("keydown",ot)}}),[Me,ot]),e.useEffect((function(){if(_){var e=ie.filter((function(e){return e.selected&&!e.disabled})),t=ie.filter((function(e){return!e.disabled}));e.length!==t.length?ye(!1):ye(!0)}}),[ie,_]);return e.useMemo((function(){if(G&&y){var e=Ne.filter((function(e){return e.text.toLowerCase().includes(de.toLowerCase())}));0===e.length?se([{text:B,className:"select-no-results"}]):se(e)}}),[G,Ne,y,B,de]),o.default.createElement(m,{className:Ze,ref:Fe},o.default.createElement(v,u({onFocus:function(){return We(!0)},onBlur:function(){return We(!1)},value:te,className:$e,labelClass:c.default(q?"select-input-label-active":"","select-label"),inputRef:_e,onClick:at,readOnly:!M,required:M,placeholder:b,disabled:E,wrapperStyle:{zIndex:0},label:L,"aria-expanded":!!G,"aria-disabled":!!E,"aria-haspopup":!0,role:"listbox"},z),void 0!==te&&te.length>0&&r&&o.default.createElement("span",{className:"select-clear-btn d-block",role:"button",onClick:function(){ae(""),he(!1),se(i.map((function(e){return u(u({},e),{active:!1,selected:!1})}))),ke(i.map((function(e){return u(u({},e),{active:!1,selected:!1})})))}},"✕"),o.default.createElement("span",{className:"select-arrow",style:{zIndex:-1}})),G&&s.default.createPortal(o.default.createElement(p,u({style:u(u({},Je.popper),{width:Y,zIndex:1070})},Qe.popper,{ref:Le}),o.default.createElement(g,{open:Z},y&&o.default.createElement("div",{className:"input-group"},o.default.createElement(v,{wrapperStyle:{width:"100%"},className:"select-filter-input placeholder-active",placeholder:F,role:"searchbox",type:"text",onKeyDown:ot,onChange:function(e){fe(e.target.value)},value:de,inputRef:He,"aria-label":j})),o.default.createElement(S,{ref:Ke,maxHeight:re},o.default.createElement(k,{ref:ne},_&&o.default.createElement(w,{onClick:function(){ye(!Ee)},selected:Ee,height:38,text:P,multiple:!0}),ie.map((function(e,t){return o.default.createElement(w,{onClick:function(){return lt(e,t)},onChange:function(){return lt(e,t)},"data-value":e.value,active:e.active,className:e.className,height:e.height,style:e.style,selected:e.selected,key:e.text+t,disabled:e.disabled,secondaryText:e.secondaryText,text:e.text,revert:e.revert,multiple:_},e.icon&&o.default.createElement(x,null,"object"!=typeof e.icon||e.icon.constructor!==Object||o.default.isValidElement(e.icon)?e.icon:o.default.createElement(N,{className:e.icon.className,src:e.icon.src?e.icon.src:""},e.icon.text)))})),a&&o.default.createElement("div",{className:"select-custom-content"},a))))),document.body))};C.defaultProps={noResultLabel:"No results",optionSelected:"5",searchLabel:"Search...",selectAllLabel:"Select all",tag:"div",tagWrapper:"div",visibleOptions:5,size:"default",validation:!1,searchAriaLabel:"Search"};var _=function(e){var t,a=e.animate,n=e.className,l=e.icon,r=e.fab,i=e.fas,s=e.fal,f=e.far,m=e.flag,p=e.spin,h=e.fixed,b=e.flip,v=e.list,g=e.size,x=e.pull,E=e.pulse,y=e.color,w=e.border,N=e.rotate,k=e.inverse,S=e.stack,C=e.iconType,_=e.children,T=d(e,["animate","className","icon","fab","fas","fal","far","flag","spin","fixed","flip","list","size","pull","pulse","color","border","rotate","inverse","stack","iconType","children"]);t=m?"flag":r?"fab":i?"fas":f?"far":s?"fal":"fa";var R=c.default(C?"fa-".concat(C):t,a&&"fa-".concat(a),m?"flag-".concat(m):l&&"fa-".concat(l),g&&"fa-".concat(g),y&&"text-".concat(y),w&&"fa-border",N&&"fa-rotate-".concat(N),x&&"fa-pull-".concat(x),p&&!a&&"fa-spin",v&&"fa-li",h&&"fa-fw",E&&!a&&"fa-pulse",k&&"fa-inverse",b&&"fa-flip-".concat(b),S&&"fa-stack-".concat(S),n);return o.default.createElement("i",u({className:R},T),_)},T=function(t){var a=t.className,n=t.classNameResponsive,l=t.responsive,r=t.align,i=t.borderColor,s=t.bordered,f=t.borderless,m=t.children,p=t.color,h=t.hover,b=t.small,v=t.striped,g=d(t,["className","classNameResponsive","responsive","align","borderColor","bordered","borderless","children","color","hover","small","striped"]),x=c.default("table",r&&"align-".concat(r),i&&"border-".concat(i),s&&"table-bordered",f&&"table-borderless",p&&"table-".concat(p),h&&"table-hover",b&&"table-sm",v&&"table-striped",a),E=e.useMemo((function(){return o.default.createElement("table",u({className:x},g),m)}),[m,x,g]);if(l){var y=c.default("string"==typeof l?"table-responsive-".concat(l):"table-responsive",n);return o.default.createElement("div",{className:y},E)}return E},R=function(e){var t=e.className,a=e.children,n=e.dark,l=e.light,r=d(e,["className","children","dark","light"]),i=c.default(n&&"table-dark",l&&"table-light",t);return o.default.createElement("thead",u({className:i},r),a)},L=function(e){var t=e.className,a=e.children,n=d(e,["className","children"]),l=c.default(t);return o.default.createElement("tbody",u({className:l},n),a)},O=o.default.forwardRef((function(e,t){var a=e.className,n=e.children,l=e.noBorder,r=e.textBefore,i=e.textAfter,s=e.noWrap,f=e.tag,m=e.textTag,p=e.textClass,h=e.size,b=e.textProps,v=d(e,["className","children","noBorder","textBefore","textAfter","noWrap","tag","textTag","textClass","size","textProps"]),g=c.default("input-group",s&&"flex-nowrap",h&&"input-group-".concat(h),a),x=c.default("input-group-text",l&&"border-0",p),E=function(e){return o.default.createElement(o.default.Fragment,null,e&&Array.isArray(e)?e.map((function(e,t){return o.default.createElement(m,u({key:t,className:x},b),e)})):o.default.createElement(m,u({className:x},b),e))};return o.default.createElement(f,u({className:g,ref:t},v),r&&E(r),n,i&&E(i))}));O.defaultProps={tag:"div",textTag:"span"};var P=function(e,t,a){if(!t)return e;var n=function(e){return e.toString().toLowerCase().includes(t.toLowerCase())};return e.filter((function(e){if(a&&"string"==typeof a)return n(e[a]);var t=Object.values(e);return a&&Array.isArray(a)&&(t=Object.keys(e).filter((function(e){return a.includes(e)})).map((function(t){return e[t]}))),t.filter((function(e){return n(e)})).length>0}))},B=function(t){var a=t.advancedSearch,n=t.advancedData,l=t.className,r=t.bordered,i=t.borderless,s=t.borderColor,m=t.clickableRows,p=t.color,g=t.dark,x=t.datatableRef,E=t.entries,w=t.entriesOptions,N=t.fixedHeader,k=t.fullPagination,S=t.hover,B=t.format,F=t.loaderClass,A=t.loading,M=t.loadingMessage,W=t.maxWidth,H=t.maxHeight,V=t.multi,j=t.noFoundMessage,z=t.pagination,I=t.selectable,q=t.selectedRows,D=t.setSelectedRows,X=t.sortField,Y=t.searchInputProps,U=t.sortOrder,K=t.sm,G=t.striped,J=t.rowsText,Q=t.data,Z=t.tag,$=t.search,ee=t.onSelectRows,te=t.onRowClick,ae=d(t,["advancedSearch","advancedData","className","bordered","borderless","borderColor","clickableRows","color","dark","datatableRef","entries","entriesOptions","fixedHeader","fullPagination","hover","format","loaderClass","loading","loadingMessage","maxWidth","maxHeight","multi","noFoundMessage","pagination","selectable","selectedRows","setSelectedRows","sortField","searchInputProps","sortOrder","sm","striped","rowsText","data","tag","search","onSelectRows","onRowClick"]),ne=c.default("datatable",S&&"datatable-hover",A&&"datatable-loading",p&&"bg-".concat(p),g&&"datatable-dark",r&&"datatable-bordered",i&&"datatable-borderless",s&&"border-".concat(s),G&&"datatable-striped",K&&"datatable-sm",l),le=e.useState(Q.rows),re=le[0],oe=le[1],ce=e.useState({phrase:"",columns:void 0,clickedBtn:!1}),ie=ce[0],se=ce[1],ue=e.useState(0),de=ue[0],fe=ue[1],me=e.useState(E||10),pe=me[0],he=me[1],be=e.useState({iconStyle:{transform:"rotate(0deg)"},activeColumn:""}),ve=be[0],ge=be[1],xe=e.useRef(null),Ee=x||xe,ye=function(e){se(u(u({},ie),{phrase:e.target.value}))},we=function(){return Math.floor(1e3*Math.random())},Ne="".concat(de*pe+1," - ").concat((de+1)*pe>Q.rows.length?Q.rows.length:(de+1)*pe," of ").concat(Q.rows.length),ke=function(e){var t=ve.activeColumn,a=ve.iconStyle;e===t&&"rotate(0deg)"===a.transform?ge({activeColumn:e,iconStyle:{transform:"rotate(180deg)"}}):e===t&&"rotate(180deg)"===a.transform?ge({activeColumn:"",iconStyle:{transform:"rotate(0deg)"}}):ge({activeColumn:e,iconStyle:{transform:"rotate(0deg)"}})};e.useEffect((function(){if(ee){var e=null==q?void 0:q.map((function(e){return re[e]}));ee(e)}}),[q,ee]),e.useEffect((function(){X&&ge("desc"===U?{activeColumn:X,iconStyle:{transform:"rotate(180deg)"}}:{activeColumn:X,iconStyle:{transform:"rotate(0deg)"}})}),[X,U]),e.useEffect((function(){var e=ve.activeColumn,t=ve.iconStyle,l=ie.phrase,r=ie.columns,o=ie.clickedBtn,c=n?Q.columns.find((function(t){return t.label===e})):Q.columns.indexOf(e);if(e){var i=function(e,t,a){return Object.assign([],e).sort((function(e,n){var l=e[t],r=n[t];return l<r?"desc"===a?1:-1:l>r?"desc"===a?-1:1:0}))}(Q.rows,n?c.field:c,"rotate(0deg)"===t.transform?"asc":"desc");l?a&&o?(oe(P(i,l,r)),se(u(u({},ie),{clickedBtn:!1}))):a||oe(P(i,l,r)):oe(i)}else l?a&&o?(oe(P(Q.rows,l,r)),se(u(u({},ie),{clickedBtn:!1}))):a||oe(P(Q.rows,l,r)):oe(Q.rows)}),[ve,Q.rows,ie,a,n,Q.columns]),e.useEffect((function(){fe(0)}),[pe]);var Se=o.default.createElement(o.default.Fragment,null,Q.columns.map((function(e,t){return o.default.createElement("th",{className:N?"fixed-cell":"",key:"item-".concat(we(),"-").concat(t),style:{cursor:"pointer"},scope:"row",onClick:function(){return ke(e)}},o.default.createElement(_,{fas:!0,icon:"arrow-up",className:c.default("datatable-sort-icon","".concat(e===ve.activeColumn&&"active")),style:e===ve.activeColumn?ve.iconStyle:{transform:"rotate(0deg)"}}),e)}))),Ce=o.default.createElement(o.default.Fragment,null,Q.columns.map((function(e,t){var a={cursor:!1!==e.sort?"pointer":void 0},n={left:"left"===e.fixed?e.fixedValue?e.fixedValue:0:void 0,right:"right"===e.fixed?e.fixedValue?e.fixedValue:0:void 0};return o.default.createElement("th",{className:N||e.fixed?"fixed-cell":"",key:"item-".concat(we(),"-").concat(t),style:u(u({},a),n),scope:"row",onClick:function(){return!1!==e.sort&&ke(e.label)}},!1!==e.sort&&o.default.createElement(_,{fas:!0,icon:"arrow-up",className:c.default("datatable-sort-icon","".concat(e.label===ve.activeColumn&&"active")),style:e.label===ve.activeColumn?ve.iconStyle:{transform:"rotate(0deg)"}}),e.label)})));return o.default.createElement(o.default.Fragment,null,$&&o.default.createElement(v,u({value:ie.phrase,onChange:ye,label:"Search",className:"mb-4"},Y)),a&&o.default.createElement(O,{className:"mb-4"},o.default.createElement("input",u({className:"form-control",placeholder:"phrase in:column1,column2",value:ie.phrase,onChange:ye},Y)),o.default.createElement("button",{onClick:function(){return se(u(u({},a(ie.phrase)),{clickedBtn:!0}))},className:"btn btn-primary",type:"button"},o.default.createElement(_,{icon:"search"}))),o.default.createElement(Z,u({className:ne,ref:Ee,style:{maxWidth:W&&W}},ae),o.default.createElement(h,{maxWidth:W,maxHeight:H},o.default.createElement(T,{className:"datatable-table"},o.default.createElement(R,{className:"datatable-header"},o.default.createElement("tr",null,I&&o.default.createElement("th",null,V&&o.default.createElement(y,{className:N?"fixed-cell":"",onChange:function(e){e.target.checked?D(Array.from({length:Q.rows.length},(function(e,t){return t}))):D([])}})),n?Ce:Se)),o.default.createElement(L,{className:"datatable-body"},re.map((function(e,t){var a=Q.rows.indexOf(e);if(function(e){return de*pe<=e&&e<(de+1)*pe}(t))return o.default.createElement("tr",{style:{cursor:m&&"pointer"},onClick:function(t){return function(e,t){te&&te(t),"INPUT"===e.target.nodeName||e.target.classList.contains("datatable-disable-onclick")||m&&m(t)}(t,e)},className:q&&q.includes(a)?"active":"",key:"item-".concat(we(),"-").concat(t)},I&&o.default.createElement("td",null,o.default.createElement(y,{checked:q&&q.includes(a),onChange:function(){return function(e){q&&(V?q.includes(e)?D(q.filter((function(t){return t!==e}))):D(f(f([],q),[e])):q.includes(e)?D([]):D([e]))}(a)}})),n?function(e){return o.default.createElement(o.default.Fragment,null,Q.columns.map((function(t,a){var n=B&&B(t.field,e[t.field]),l={minWidth:t.width,maxWidth:t.width,left:"left"===t.fixed&&(t.fixedValue?t.fixedValue:0),right:"right"===t.fixed&&(t.fixedValue?t.fixedValue:0)};return o.default.createElement("td",{className:t.fixed&&"fixed-cell",style:u(u({},n),l),key:"item-".concat(we(),"-").concat(a)},e[t.field])})))}(e):function(e){return o.default.createElement(o.default.Fragment,null,e.map((function(e,t){return o.default.createElement("td",{key:"item-".concat(we(),"-").concat(t)},e)})))}(e))})),0===re.length&&!A&&o.default.createElement("tr",{className:"datatable-results-info"},o.default.createElement("td",{colSpan:Q.columns.length,className:"text-center"},j))))),A&&o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"datatable-loader bg-light}"},o.default.createElement("span",{className:"datatable-loader-inner"},o.default.createElement("span",{className:c.default("datatable-progress",F)}))),o.default.createElement("p",{className:"text-center text-muted my-4"},M)),z&&o.default.createElement(b,null,o.default.createElement("div",{className:"datatable-select-wrapper"},o.default.createElement("p",{className:"datatable-select-text"},J),o.default.createElement(C,{getValue:function(e){he(e.value)},data:w.map((function(e){return{text:e.toString(),value:e,selected:pe===e}})),disabled:A})),o.default.createElement("div",{className:"datatable-pagination-nav"},Ne),o.default.createElement("div",{className:"datatable-pagination-buttons"},k&&o.default.createElement("button",{disabled:0===de||A,onClick:function(){return fe(0)},className:"btn btn-link datatable-pagination-button datatable-pagination-start"},o.default.createElement(_,{icon:"angle-double-left"})),o.default.createElement("button",{disabled:0===de||A,onClick:function(){return fe(de-1)},className:"btn btn-link datatable-pagination-button datatable-pagination-left"},o.default.createElement(_,{icon:"chevron-left"})),o.default.createElement("button",{disabled:re.length<=pe*(de+1)||A,onClick:function(){return fe(de+1)},className:"btn btn-link datatable-pagination-button datatable-pagination-right"},o.default.createElement(_,{icon:"chevron-right"})),k&&o.default.createElement("button",{disabled:de===Math.floor(re.length/pe),onClick:function(){return fe(Math.floor(re.length/pe))},className:"btn btn-link datatable-pagination-button datatable-pagination-end"},o.default.createElement(_,{icon:"angle-double-right"}))))))};B.defaultProps={tag:"div",bordered:!1,borderless:!1,borderColor:"",color:"",dark:!1,entries:10,entriesOptions:[10,25,50,200],fixedHeader:!1,fullPagination:!1,hover:!1,loaderClass:"bg-primary",loading:!1,loadingMessage:"Loading results...",maxWidth:"",maxHeight:"",multi:!1,noFoundMessage:"No matching results found",pagination:!0,selectable:!1,sm:!1,striped:!1,rowsText:"Rows per page:",sortOrder:"asc",sortField:""},module.exports=B;