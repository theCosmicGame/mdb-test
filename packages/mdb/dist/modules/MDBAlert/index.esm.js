import t,{useState as e,useRef as n,useEffect as o,useCallback as r}from"react";import a from"react-dom";import l from"clsx";var i=function(){return i=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},i.apply(this,arguments)};var c=function(c){var s=c.className,f=c.alertRef,u=c.position,p=c.delay,d=c.autohide,m=c.width,h=c.containerRef,v=c.offset,y=c.appendToBody,g=c.color,b=c.children,w=c.triggerRef,O=c.show,x=c.stacking,k=c.onClose,T=c.onClosed,j=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n}(c,["className","alertRef","position","delay","autohide","width","containerRef","offset","appendToBody","color","children","triggerRef","show","stacking","onClose","onClosed"]),L=e(O),P=L[0],R=L[1],E=e(O),C=E[0],N=E[1],S=e({}),A=S[0],B=S[1],H=e(P?"block":"none"),I=H[0],q=H[1],F=e(0),z=F[0],D=F[1],G=n(null),J=f||G,K=l("alert","fade",u&&!h&&"alert-fixed",u&&"alert-".concat(u),h&&"alert-absolute",g?"alert-".concat(g):"alert-primary",P&&C&&"show",x&&"stacking-alert",s);o((function(){P&&q("block"),P||C||q("none")}),[P,C,J]),o((function(){var t,e;if(u){var n=u.split("-")[0],o=u.split("-")[1],r="top"===n?"bottom":"top",a="left"===o?"right":"left";B("center"===o?((t={})[n]="".concat(void 0!==v?v+z:z,"px"),t.left="50%",t[r]="unset",t.transform="translate(-50%)",t):((e={})[n]="".concat(void 0!==v?v+z:z,"px"),e[o]="".concat(v,"px"),e[r]="unset",e[a]="unset",e.transform="unset",e))}}),[v,u,z]);var M=r((function(){R(!0)}),[]);o((function(){R(O)}),[O]),o((function(){if(x&&P){var t=document.querySelectorAll(".alert-".concat(u)),e=0,n=h?"alert-absolute":"alert-fixed",o=Array.from(t).filter((function(t){return t.classList.contains("show")&&t!==J.current&&t.classList.contains(n)&&t.classList.contains("stacking-alert")}));if(o.length>0){var r=void 0;r="top"===(null==u?void 0:u.split("-")[0])?o[o.length-1].offsetTop+o[o.length-1].offsetHeight:parseInt(o[o.length-1].style.bottom)+o[o.length-1].offsetHeight,e=v?r+v:r}D(e)}}),[x,P,J,z,v,u,h]),o((function(){if(null!=w){var t=w.current;return w.current.addEventListener("click",M),function(){t.removeEventListener("click",M)}}}),[w,M]),o((function(){null!=h&&h.current.classList.add("parent-alert-relative")}),[h]),o((function(){var t;return d&&P&&(t=setTimeout((function(){R(!1)}),p)),function(){clearTimeout(t)}}),[d,P,p]),o((function(){var t,e;return P?t=setTimeout((function(){N(!0)}),100):P||(C&&(null==k||k()),e=setTimeout((function(){C&&(null==T||T()),N(!1)}),100)),function(){clearTimeout(t),clearTimeout(e)}}),[P,d,T,k,C]);var Q=t.createElement("div",i({className:K,ref:J,style:i(i({},A),{width:"unset"===m?m:"".concat(m,"px"),display:I})},j),b);return P||C?y?a.createPortal(Q,document.body):Q:t.createElement(t.Fragment,null)};c.defaultProps={offset:10,width:"unset",delay:1e3,show:!1,stacking:!1};export{c as default};