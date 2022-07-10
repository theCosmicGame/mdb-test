import t,{useState as e,useEffect as n,useRef as o,useCallback as r}from"react";import a from"react-dom";import c from"clsx";var i=function(){return i=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},i.apply(this,arguments)};function l(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n}var s=t.forwardRef((function(e,n){var o=e.className,r=e.color,a=e.children,s=l(e,["className","color","children"]),u=c("toast-header",r&&"bg-".concat(r),r&&"light"!==r&&"text-white",o);return t.createElement("div",i({className:u,ref:n},s),a)})),u=t.forwardRef((function(e,n){var o=e.className,r=e.children,a=e.color,s=l(e,["className","children","color"]),u=c("toast-body",a&&"light"!==a&&"text-white",o);return t.createElement("div",i({className:u,ref:n},s),r)})),f=function(o){var r=l(o,[]),a=e(!1),s=a[0],u=a[1],f=c("ripple-wave",s&&"active");return n((function(){var t=setTimeout((function(){u(!0)}),50);return function(){clearTimeout(t)}}),[]),t.createElement("div",i({className:f},r))},d=t.forwardRef((function(r,a){var s=r.className,u=r.rippleTag,d=r.rippleCentered,p=r.rippleDuration,m=r.rippleUnbound,h=r.rippleRadius,g=r.rippleColor,b=r.children,v=r.onClick,y=l(r,["className","rippleTag","rippleCentered","rippleDuration","rippleUnbound","rippleRadius","rippleColor","children","onClick"]),w=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var o=t.useRef();return t.useEffect((function(){e.forEach((function(t){t&&("function"==typeof t?t(o.current):t.current=o.current)}))}),[e]),o}(a,o(null)),C=[0,0,0],N=["primary","secondary","success","danger","warning","info","light","dark"],k=e([]),R=k[0],E=k[1],x=e(!1),T=x[0],O=x[1],L=c("ripple","ripple-surface",m&&"ripple-surface-unbound",T&&"ripple-surface-".concat(g),s),j=function(){if(N.find((function(t){return t===(null==g?void 0:g.toLowerCase())})))return O(!0);var t=P(g).join(","),e="rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%".split("{{color}}").join("".concat(t));return"radial-gradient(circle, ".concat(e,")")},P=function(t){return"transparent"===t.toLowerCase()?C:"#"===t[0]?function(t){return t.length<7&&(t="#".concat(t[1]).concat(t[1]).concat(t[2]).concat(t[2]).concat(t[3]).concat(t[3])),[parseInt(t.substr(1,2),16),parseInt(t.substr(3,2),16),parseInt(t.substr(5,2),16)]}(t):(-1===t.indexOf("rgb")&&(t=function(t){var e=document.body.appendChild(document.createElement("fictum")),n="rgb(1, 2, 3)";return e.style.color=n,e.style.color!==n?C:(e.style.color=t,e.style.color===n||""===e.style.color?C:(t=getComputedStyle(e).color,document.body.removeChild(e),t))}(t)),0===t.indexOf("rgb")?function(t){return(t=t.match(/[.\d]+/g).map((function(t){return+Number(t)}))).length=3,t}(t):C)},I=function(t){var e,n=null===(e=w.current)||void 0===e?void 0:e.getBoundingClientRect(),o=t.clientX-n.left,r=t.clientY-n.top,a=n.height,c=n.width,l={delay:p&&.5*p,duration:p&&p-.5*p},s=function(t){var e=t.offsetX,n=t.offsetY,o=t.height,r=t.width,a=n<=o/2,c=e<=r/2,i=function(t,e){return Math.sqrt(Math.pow(t,2)+Math.pow(e,2))},l=n===o/2&&e===r/2,s=!0===a&&!1===c,u=!0===a&&!0===c,f=!1===a&&!0===c,d=!1===a&&!1===c,p={topLeft:i(e,n),topRight:i(r-e,n),bottomLeft:i(e,o-n),bottomRight:i(r-e,o-n)},m=0;return l||d?m=p.topLeft:f?m=p.topRight:u?m=p.bottomRight:s&&(m=p.bottomLeft),2*m}({offsetX:d?a/2:o,offsetY:d?c/2:r,height:a,width:c}),u=h||s/2,f={left:"".concat(d?c/2-u:o-u,"px"),top:"".concat(d?a/2-u:r-u,"px"),height:"".concat(h?2*h:s,"px"),width:"".concat(h?2*h:s,"px"),transitionDelay:"0s, ".concat(l.delay,"ms"),transitionDuration:"".concat(p,"ms, ").concat(l.duration,"ms")};return T?f:i(i({},f),{backgroundImage:"".concat(j())})};return n((function(){var t=setTimeout((function(){R.length>0&&E(R.splice(1,R.length-1))}),p);return function(){clearTimeout(t)}}),[p,R]),t.createElement(u,i({className:L,onClick:function(t){return function(t){var e=I(t),n=R.concat(e);E(n),v&&v(t)}(t)},ref:w},y),b,R.map((function(e,n){return t.createElement(f,{key:n,style:e})})))}));d.defaultProps={rippleTag:"div",rippleDuration:500,rippleRadius:0,rippleColor:"dark"};var p=t.forwardRef((function(n,o){var r,a=n.className,s=n.color,u=n.outline,f=n.children,p=n.rounded,m=n.disabled,h=n.floating,g=n.size,b=n.href,v=n.block,y=n.active,w=n.toggle,C=n.noRipple,N=n.tag,k=l(n,["className","color","outline","children","rounded","disabled","floating","size","href","block","active","toggle","noRipple","tag"]),R=e(y||!1),E=R[0],x=R[1],T=s&&["light","link"].includes(s)||u?"dark":"light";r="none"!==s?u?s?"btn-outline-".concat(s):"btn-outline-primary":s?"btn-".concat(s):"btn-primary":"";var O=c("none"!==s&&"btn",r,p&&"btn-rounded",h&&"btn-floating",g&&"btn-".concat(g),"".concat((b||"button"!==N)&&m?"disabled":""),v&&"btn-block",E&&"active",a);return b&&"a"!==N&&(N="a"),["hr","img","input"].includes(N)||C?t.createElement(N,i({className:O,onClick:w?function(){x(!E)}:void 0,disabled:!(!m||"button"!==N)||void 0,href:b,ref:o},k),f):t.createElement(d,i({rippleTag:N,rippleColor:T,className:O,onClick:w?function(){x(!E)}:void 0,disabled:!(!m||"button"!==N)||void 0,href:b,ref:o},k),f)}));p.defaultProps={tag:"button",role:"button",color:"primary"};var m=t.forwardRef((function(e,n){var o=e.className,r=e.white,a=e.children,s=l(e,["className","white","children"]),u=c("btn-close",r&&"btn-close-white",o);return t.createElement(p,i({className:u,color:"none",ref:n},s),a)})),h=function(f){var d=f.className,p=f.position,h=f.delay,g=f.autohide,b=f.width,v=f.onShow,y=f.onHide,w=f.containerRef,C=f.toastRef,N=f.offset,k=f.stacking,R=f.appendToBody,E=f.color,x=f.triggerRef,T=f.show,O=f.bodyContent,L=f.headerContent,j=f.bodyClasses,P=f.headerClasses,I=f.closeBtnClasses,S=l(f,["className","position","delay","autohide","width","onShow","onHide","containerRef","toastRef","offset","stacking","appendToBody","color","triggerRef","show","bodyContent","headerContent","bodyClasses","headerClasses","closeBtnClasses"]),B=e(T),D=B[0],H=B[1],M=e(T),X=M[0],Y=M[1],q=e({}),z=q[0],A=q[1],U=e(D?"block":"none"),F=U[0],G=U[1],J=e(0),K=J[0],Q=J[1],V=e(!0),W=V[0],Z=V[1],$=o(null),_=C||$,tt=c("toast","fade",p&&!w&&"toast-fixed",p&&"toast-".concat(p),w&&"toast-absolute",E&&"bg-".concat(E),D&&X&&"show",k&&"stacking-toast",d);n((function(){Z(!1)}),[]),n((function(){var t,e;if(p){var n=p.split("-")[0],o=p.split("-")[1],r="top"===n?"bottom":"top",a="left"===o?"right":"left";A("center"===o?((t={})[n]="".concat(void 0!==N?N+K:K,"px"),t.left="50%",t[r]="unset",t.transform="translate(-50%)",t):((e={})[n]="".concat(void 0!==N?N+K:K,"px"),e[o]="".concat(N,"px"),e[r]="unset",e[a]="unset",e.transform="unset",e))}}),[N,p,K]);n((function(){if(k&&D){var t=document.querySelectorAll(".toast-".concat(p)),e=0,n=w?"toast-absolute":"toast-fixed",o=Array.from(t).filter((function(t){return t.classList.contains("show")&&t!==_.current&&t.classList.contains(n)&&t.classList.contains("stacking-toast")}));if(o.length>0){var r=void 0;r="top"===(null==p?void 0:p.split("-")[0])?o[o.length-1].offsetTop+o[o.length-1].offsetHeight:parseInt(o[o.length-1].style.bottom)+o[o.length-1].offsetHeight,e=N?r+N:r}Q(e)}}),[k,D,_,K,N,p,w]);var et=r((function(){H(!0)}),[]);n((function(){D&&G("block"),D||X||(G("none"),W||null==y||y())}),[D,X,y]),n((function(){H(T)}),[T]),n((function(){if(null!=x){var t=x.current;return x.current.addEventListener("click",et),function(){t.removeEventListener("click",et)}}}),[x,et]),n((function(){null!=w&&w.current.classList.add("parent-toast-relative")}),[w]),n((function(){var t;return g&&D&&(t=setTimeout((function(){H(!1)}),h)),function(){clearTimeout(t)}}),[g,D,h]),n((function(){var t,e;return D?(null==v||v(),t=setTimeout((function(){Y(!0)}),100)):D||(e=setTimeout((function(){Y(!1)}),100)),function(){clearTimeout(t),clearTimeout(e)}}),[D,g,v]);var nt=t.createElement("div",i({className:tt,ref:_,style:i(i({},z),{width:"unset"===b?b:"".concat(b,"px"),display:F})},S),L&&t.createElement(s,{className:P,color:E},L,t.createElement(m,{onClick:function(){H(!1)},className:I,white:!(!E||"light"===E)})),t.createElement(u,{className:j,color:E},O));return D||X?R?a.createPortal(nt,document.body):nt:t.createElement(t.Fragment,null)};h.defaultProps={offset:10,width:"width",delay:1e3,show:!1};export{h as default};
