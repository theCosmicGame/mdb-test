import e from"clsx";import t,{useState as n,useEffect as r,useRef as o,useCallback as a}from"react";import c from"react-dom";import{usePopper as i}from"react-popper";var l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)};function p(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}var s=function(o){var a=p(o,[]),c=n(!1),i=c[0],s=c[1],u=e("ripple-wave",i&&"active");return r((function(){var e=setTimeout((function(){s(!0)}),50);return function(){clearTimeout(e)}}),[]),t.createElement("div",l({className:u},a))},u=t.forwardRef((function(a,c){var i=a.className,u=a.rippleTag,f=a.rippleCentered,m=a.rippleDuration,d=a.rippleUnbound,g=a.rippleRadius,b=a.rippleColor,h=a.children,v=a.onClick,C=p(a,["className","rippleTag","rippleCentered","rippleDuration","rippleUnbound","rippleRadius","rippleColor","children","onClick"]),y=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=t.useRef();return t.useEffect((function(){e.forEach((function(e){e&&("function"==typeof e?e(r.current):e.current=r.current)}))}),[e]),r}(c,o(null)),k=[0,0,0],w=["primary","secondary","success","danger","warning","info","light","dark"],E=n([]),N=E[0],T=E[1],x=n(!1),O=x[0],R=x[1],B=e("ripple","ripple-surface",d&&"ripple-surface-unbound",O&&"ripple-surface-".concat(b),i),j=function(){if(w.find((function(e){return e===(null==b?void 0:b.toLowerCase())})))return R(!0);var e=L(b).join(","),t="rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%".split("{{color}}").join("".concat(e));return"radial-gradient(circle, ".concat(t,")")},L=function(e){return"transparent"===e.toLowerCase()?k:"#"===e[0]?function(e){return e.length<7&&(e="#".concat(e[1]).concat(e[1]).concat(e[2]).concat(e[2]).concat(e[3]).concat(e[3])),[parseInt(e.substr(1,2),16),parseInt(e.substr(3,2),16),parseInt(e.substr(5,2),16)]}(e):(-1===e.indexOf("rgb")&&(e=function(e){var t=document.body.appendChild(document.createElement("fictum")),n="rgb(1, 2, 3)";return t.style.color=n,t.style.color!==n?k:(t.style.color=e,t.style.color===n||""===t.style.color?k:(e=getComputedStyle(t).color,document.body.removeChild(t),e))}(e)),0===e.indexOf("rgb")?function(e){return(e=e.match(/[.\d]+/g).map((function(e){return+Number(e)}))).length=3,e}(e):k)},P=function(e){var t,n=null===(t=y.current)||void 0===t?void 0:t.getBoundingClientRect(),r=e.clientX-n.left,o=e.clientY-n.top,a=n.height,c=n.width,i={delay:m&&.5*m,duration:m&&m-.5*m},p=function(e){var t=e.offsetX,n=e.offsetY,r=e.height,o=e.width,a=n<=r/2,c=t<=o/2,i=function(e,t){return Math.sqrt(Math.pow(e,2)+Math.pow(t,2))},l=n===r/2&&t===o/2,p=!0===a&&!1===c,s=!0===a&&!0===c,u=!1===a&&!0===c,f=!1===a&&!1===c,m={topLeft:i(t,n),topRight:i(o-t,n),bottomLeft:i(t,r-n),bottomRight:i(o-t,r-n)},d=0;return l||f?d=m.topLeft:u?d=m.topRight:s?d=m.bottomRight:p&&(d=m.bottomLeft),2*d}({offsetX:f?a/2:r,offsetY:f?c/2:o,height:a,width:c}),s=g||p/2,u={left:"".concat(f?c/2-s:r-s,"px"),top:"".concat(f?a/2-s:o-s,"px"),height:"".concat(g?2*g:p,"px"),width:"".concat(g?2*g:p,"px"),transitionDelay:"0s, ".concat(i.delay,"ms"),transitionDuration:"".concat(m,"ms, ").concat(i.duration,"ms")};return O?u:l(l({},u),{backgroundImage:"".concat(j())})};return r((function(){var e=setTimeout((function(){N.length>0&&T(N.splice(1,N.length-1))}),m);return function(){clearTimeout(e)}}),[m,N]),t.createElement(u,l({className:B,onClick:function(e){return function(e){var t=P(e),n=N.concat(t);T(n),v&&v(e)}(e)},ref:y},C),h,N.map((function(e,n){return t.createElement(s,{key:n,style:e})})))}));u.defaultProps={rippleTag:"div",rippleDuration:500,rippleRadius:0,rippleColor:"dark"};var f=t.forwardRef((function(r,o){var a,c=r.className,i=r.color,s=r.outline,f=r.children,m=r.rounded,d=r.disabled,g=r.floating,b=r.size,h=r.href,v=r.block,C=r.active,y=r.toggle,k=r.noRipple,w=r.tag,E=p(r,["className","color","outline","children","rounded","disabled","floating","size","href","block","active","toggle","noRipple","tag"]),N=n(C||!1),T=N[0],x=N[1],O=i&&["light","link"].includes(i)||s?"dark":"light";a="none"!==i?s?i?"btn-outline-".concat(i):"btn-outline-primary":i?"btn-".concat(i):"btn-primary":"";var R=e("none"!==i&&"btn",a,m&&"btn-rounded",g&&"btn-floating",b&&"btn-".concat(b),"".concat((h||"button"!==w)&&d?"disabled":""),v&&"btn-block",T&&"active",c);return h&&"a"!==w&&(w="a"),["hr","img","input"].includes(w)||k?t.createElement(w,l({className:R,onClick:y?function(){x(!T)}:void 0,disabled:!(!d||"button"!==w)||void 0,href:h,ref:o},E),f):t.createElement(u,l({rippleTag:w,rippleColor:O,className:R,onClick:y?function(){x(!T)}:void 0,disabled:!(!d||"button"!==w)||void 0,href:h,ref:o},E),f)}));f.defaultProps={tag:"button",role:"button",color:"primary"};var m=function(o){var s=o.className,u=o.btnClassName,m=o.btnChildren,d=o.confirmBtnText,g=o.cancelBtnClasses,b=o.confirmBtnClasses,h=o.cancelBtnText,v=o.placement,C=o.children,y=o.modal,k=o.onClick,w=o.onConfirm,E=o.onCancel,N=o.options,T=o.popperTag,x=p(o,["className","btnClassName","btnChildren","confirmBtnText","cancelBtnClasses","confirmBtnClasses","cancelBtnText","placement","children","modal","onClick","onConfirm","onCancel","options","popperTag"]),O=n(),R=O[0],B=O[1],j=n(),L=j[0],P=j[1],D=n(!1),I=D[0],z=D[1],M=n(!1),S=M[0],X=M[1],Y=n(!1),F=Y[0],U=Y[1],q=i(R,L,l({placement:v},N)),A=q.styles,G=q.attributes,H=e(y?"popconfirm-modal":"popconfirm-popover","shadow-4",s),J=e("popconfirm",!y&&"fade",S&&"show"),K=a((function(e){var t=R===e.target,n=e.target===L,r=L&&L.contains(e.target),o=null==R?void 0:R.contains(e.target);t||n||r||o||z(!1)}),[L,R]);r((function(){I?(U(!0),setTimeout((function(){X(!0)}),0)):(X(!1),y?U(!1):setTimeout((function(){U(!1)}),150))}),[I,y]),r((function(){return window.addEventListener("click",K),function(){window.removeEventListener("click",K)}}),[K]);var Q=t.createElement("div",{className:J},C,t.createElement("div",{className:"popconfirm-buttons-container"},t.createElement(f,{className:g,onClick:function(e){null==E||E(e),z(!1)},size:"sm"},h),t.createElement(f,{className:b,onClick:function(e){null==w||w(e),z(!1)},size:"sm"},d)));return t.createElement(t.Fragment,null,t.createElement(f,l({onClick:function(e){z(!0),k&&k(e)},className:u},x,{ref:B}),m),F&&c.createPortal(t.createElement(t.Fragment,null,y?t.createElement("div",{className:"popconfirm-backdrop"},t.createElement(T,{ref:P,className:H},Q)):t.createElement(T,l({className:H,ref:P,style:l({},A.popper)},G.popper),Q)),document.body))};m.defaultProps={popperTag:"div",placement:"top",modal:!1,cancelBtnText:"Cancel",confirmBtnText:"Ok"};export{m as default};