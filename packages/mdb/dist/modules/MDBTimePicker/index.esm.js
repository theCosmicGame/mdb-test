import e from"clsx";import t,{useState as n,useRef as a,useEffect as o,useCallback as i,useContext as r}from"react";import l from"react-dom";import{usePopper as c}from"react-popper";var u=function(){return u=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)};function m(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n}var s=function(r){var l,c=r.className,s=r.size,d=r.contrast,p=r.value,f=r.defaultValue,v=r.id,h=r.labelClass,b=r.wrapperClass,g=r.wrapperStyle,x=r.wrapperTag,k=r.label,M=r.onChange,y=r.children,E=r.labelRef,N=r.labelStyle,w=r.inputRef,C=r.type,I=r.onBlur,P=r.readonly,A=m(r,["className","size","contrast","value","defaultValue","id","labelClass","wrapperClass","wrapperStyle","wrapperTag","label","onChange","children","labelRef","labelStyle","inputRef","type","onBlur","readonly"]),L=n(p||f),T=L[0],H=L[1],R=n(0),O=R[0],j=R[1],D=n(!(!p&&!f)),S=D[0],V=D[1],z=a(null),B=a(null),F=E||z,W=w||B,U=e("form-outline",d&&"form-white",b),Y=e("form-control",S&&"active","date"===C&&"active",s&&"form-control-".concat(s),c),X=e("form-label",h);o((function(){void 0!==p&&V(!!p)}),[p]),o((function(){void 0!==f&&V(!!f)}),[f]);var q=i((function(){var e;(null===(e=F.current)||void 0===e?void 0:e.clientWidth)&&j(.8*F.current.clientWidth+8)}),[F]);o((function(){q()}),[null===(l=F.current)||void 0===l?void 0:l.clientWidth,q]);return t.createElement(x,{className:U,style:g},t.createElement("input",u({type:C,readOnly:P,className:Y,onBlur:function(e){V(""!==T),null==I||I(e)},onChange:function(e){H(e.target.value),null==M||M(e)},onFocus:q,value:p,defaultValue:f,id:v,ref:W},A)),k&&t.createElement("label",{className:X,style:N,htmlFor:v,ref:F},k),t.createElement("div",{className:"form-notch"},t.createElement("div",{className:"form-notch-leading"}),t.createElement("div",{className:"form-notch-middle",style:{width:O}}),t.createElement("div",{className:"form-notch-trailing"})),y)};s.defaultProps={wrapperTag:"div",readonly:!1};var d=function(r){var l=r.animation,c=r.animationRef,s=r.className,d=r.children,p=r.delay,f=r.infinite,v=r.duration,h=r.enableTarget,b=r.target,g=r.repeatOnScroll,x=r.reset,k=r.setTarget,M=r.start,y=r.style,E=r.tag,N=m(r,["animation","animationRef","className","children","delay","infinite","duration","enableTarget","target","repeatOnScroll","reset","setTarget","start","style","tag"]),w=n(!!b),C=w[0],I=w[1],P=n(!1),A=P[0],L=P[1],T=a(!0),H=e(C&&"animation",C&&l,s),R=a(null),O=c||R,j=function(){I(!C)},D=i((function(){if(O.current){var e=O.current.getBoundingClientRect().top+document.body.scrollTop,t=O.current.offsetHeight,n=e<=window.innerHeight&&e+t>=0;n&&T.current?(T.current=!1,p?setTimeout((function(){I(!0),L(!0)}),p):(I(!0),L(!0))):!n&&g&&(L(!1),T.current=!0)}}),[O,g,p]);return o((function(){return"onScroll"===M&&window.addEventListener("scroll",D),function(){window.removeEventListener("scroll",D)}}),[D,M]),o((function(){I(!!b)}),[b]),o((function(){"onLoad"===M&&I(!0)}),[M]),o((function(){C&&!f&&x&&setTimeout((function(){I(!C),h&&k(!1)}),v)}),[C,v,h,k,f,x]),t.createElement(t.Fragment,null,"onClick"===M&&!1===h&&t.createElement(E,u({onClick:j,className:H,ref:O},N,{style:u(u({},y),{animationDuration:"".concat(v,"ms"),animationIterationCount:f?"infinite":null,animationDelay:p?"".concat(p,"ms"):null})}),d),"onHover"===M&&!1===h&&t.createElement(E,u({onMouseEnter:j,className:H,ref:O},N,{style:u(u({},y),{animationDuration:"".concat(v,"ms"),animationIterationCount:f?"infinite":null,animationDelay:p?"".concat(p,"ms"):null})}),d),("onLoad"===M||!0===h)&&t.createElement(E,u({className:H,ref:O},N,{style:u(u({},y),{animationDuration:"".concat(v,"ms"),animationIterationCount:f?"infinite":null,animationDelay:p?"".concat(p,"ms"):null})}),d),"onScroll"===M&&t.createElement(E,u({className:H,ref:O},N,{style:u(u({},y),{animationDuration:"".concat(v,"ms"),visibility:A?"visible":"hidden",animationIterationCount:f?"infinite":null})}),d))};d.defaultProps={enableTarget:!1,target:!1,tag:"div",start:"onClick",duration:500,animation:"slide-right"};var p=function(a){var i=m(a,[]),r=n(!1),l=r[0],c=r[1],s=e("ripple-wave",l&&"active");return o((function(){var e=setTimeout((function(){c(!0)}),50);return function(){clearTimeout(e)}}),[]),t.createElement("div",u({className:s},i))},f=t.forwardRef((function(i,r){var l=i.className,c=i.rippleTag,s=i.rippleCentered,d=i.rippleDuration,f=i.rippleUnbound,v=i.rippleRadius,h=i.rippleColor,b=i.children,g=i.onClick,x=m(i,["className","rippleTag","rippleCentered","rippleDuration","rippleUnbound","rippleRadius","rippleColor","children","onClick"]),k=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var a=t.useRef();return t.useEffect((function(){e.forEach((function(e){e&&("function"==typeof e?e(a.current):e.current=a.current)}))}),[e]),a}(r,a(null)),M=[0,0,0],y=["primary","secondary","success","danger","warning","info","light","dark"],E=n([]),N=E[0],w=E[1],C=n(!1),I=C[0],P=C[1],A=e("ripple","ripple-surface",f&&"ripple-surface-unbound",I&&"ripple-surface-".concat(h),l),L=function(){if(y.find((function(e){return e===(null==h?void 0:h.toLowerCase())})))return P(!0);var e=T(h).join(","),t="rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%".split("{{color}}").join("".concat(e));return"radial-gradient(circle, ".concat(t,")")},T=function(e){return"transparent"===e.toLowerCase()?M:"#"===e[0]?function(e){return e.length<7&&(e="#".concat(e[1]).concat(e[1]).concat(e[2]).concat(e[2]).concat(e[3]).concat(e[3])),[parseInt(e.substr(1,2),16),parseInt(e.substr(3,2),16),parseInt(e.substr(5,2),16)]}(e):(-1===e.indexOf("rgb")&&(e=function(e){var t=document.body.appendChild(document.createElement("fictum")),n="rgb(1, 2, 3)";return t.style.color=n,t.style.color!==n?M:(t.style.color=e,t.style.color===n||""===t.style.color?M:(e=getComputedStyle(t).color,document.body.removeChild(t),e))}(e)),0===e.indexOf("rgb")?function(e){return(e=e.match(/[.\d]+/g).map((function(e){return+Number(e)}))).length=3,e}(e):M)},H=function(e){var t,n=null===(t=k.current)||void 0===t?void 0:t.getBoundingClientRect(),a=e.clientX-n.left,o=e.clientY-n.top,i=n.height,r=n.width,l={delay:d&&.5*d,duration:d&&d-.5*d},c=function(e){var t=e.offsetX,n=e.offsetY,a=e.height,o=e.width,i=n<=a/2,r=t<=o/2,l=function(e,t){return Math.sqrt(Math.pow(e,2)+Math.pow(t,2))},c=n===a/2&&t===o/2,u=!0===i&&!1===r,m=!0===i&&!0===r,s=!1===i&&!0===r,d=!1===i&&!1===r,p={topLeft:l(t,n),topRight:l(o-t,n),bottomLeft:l(t,a-n),bottomRight:l(o-t,a-n)},f=0;return c||d?f=p.topLeft:s?f=p.topRight:m?f=p.bottomRight:u&&(f=p.bottomLeft),2*f}({offsetX:s?i/2:a,offsetY:s?r/2:o,height:i,width:r}),m=v||c/2,p={left:"".concat(s?r/2-m:a-m,"px"),top:"".concat(s?i/2-m:o-m,"px"),height:"".concat(v?2*v:c,"px"),width:"".concat(v?2*v:c,"px"),transitionDelay:"0s, ".concat(l.delay,"ms"),transitionDuration:"".concat(d,"ms, ").concat(l.duration,"ms")};return I?p:u(u({},p),{backgroundImage:"".concat(L())})};return o((function(){var e=setTimeout((function(){N.length>0&&w(N.splice(1,N.length-1))}),d);return function(){clearTimeout(e)}}),[d,N]),t.createElement(c,u({className:A,onClick:function(e){return function(e){var t=H(e),n=N.concat(t);w(n),g&&g(e)}(e)},ref:k},x),b,N.map((function(e,n){return t.createElement(p,{key:n,style:e})})))}));f.defaultProps={rippleTag:"div",rippleDuration:500,rippleRadius:0,rippleColor:"dark"};var v=t.forwardRef((function(a,o){var i,r=a.className,l=a.color,c=a.outline,s=a.children,d=a.rounded,p=a.disabled,v=a.floating,h=a.size,b=a.href,g=a.block,x=a.active,k=a.toggle,M=a.noRipple,y=a.tag,E=m(a,["className","color","outline","children","rounded","disabled","floating","size","href","block","active","toggle","noRipple","tag"]),N=n(x||!1),w=N[0],C=N[1],I=l&&["light","link"].includes(l)||c?"dark":"light";i="none"!==l?c?l?"btn-outline-".concat(l):"btn-outline-primary":l?"btn-".concat(l):"btn-primary":"";var P=e("none"!==l&&"btn",i,d&&"btn-rounded",v&&"btn-floating",h&&"btn-".concat(h),"".concat((b||"button"!==y)&&p?"disabled":""),g&&"btn-block",w&&"active",r);return b&&"a"!==y&&(y="a"),["hr","img","input"].includes(y)||M?t.createElement(y,u({className:P,onClick:k?function(){C(!w)}:void 0,disabled:!(!p||"button"!==y)||void 0,href:b,ref:o},E),s):t.createElement(f,u({rippleTag:y,rippleColor:I,className:P,onClick:k?function(){C(!w)}:void 0,disabled:!(!p||"button"!==y)||void 0,href:b,ref:o},E),s)}));v.defaultProps={tag:"button",role:"button",color:"primary"};var h=function(n){var a,o=n.animate,i=n.className,r=n.icon,l=n.fab,c=n.fas,s=n.fal,d=n.far,p=n.flag,f=n.spin,v=n.fixed,h=n.flip,b=n.list,g=n.size,x=n.pull,k=n.pulse,M=n.color,y=n.border,E=n.rotate,N=n.inverse,w=n.stack,C=n.iconType,I=n.children,P=m(n,["animate","className","icon","fab","fas","fal","far","flag","spin","fixed","flip","list","size","pull","pulse","color","border","rotate","inverse","stack","iconType","children"]);a=p?"flag":l?"fab":c?"fas":d?"far":s?"fal":"fa";var A=e(C?"fa-".concat(C):a,o&&"fa-".concat(o),p?"flag-".concat(p):r&&"fa-".concat(r),g&&"fa-".concat(g),M&&"text-".concat(M),y&&"fa-border",E&&"fa-rotate-".concat(E),x&&"fa-pull-".concat(x),f&&!o&&"fa-spin",b&&"fa-li",v&&"fa-fw",k&&!o&&"fa-pulse",N&&"fa-inverse",h&&"fa-flip-".concat(h),w&&"fa-stack-".concat(w),i);return t.createElement("i",u({className:A},P),I)},b=t.createContext({isPickerOpened:!1,setIsPickerOpened:null,setInputValue:null,setActiveHour:null,setActiveMinute:null,setPeriod:null,setMode:null,setHandAnimation:null,setMinuteAngle:null,setHourAngle:null,submitLabel:"",clearLabel:"",cancelLabel:"",activeHour:12,activeMinute:12,format:"12h",period:"",defaultValue:"",minHour:0,maxHour:23,minPeriod:"",maxPeriod:"",mode:"hours",handAnimation:!1,maxMinute:59,minMinute:0,minuteAngle:360,hourAngle:360,inline:!1,increment:!1,onChange:function(){return null}}),g=function(e){var t=e.split(":"),n=t[0],a=t[1].split(" ")[1],o=t[1].split(" ")[0];return{hour:parseInt(n),minute:parseInt(o),defaultPeriod:a}},x=function(e,t){return("24h"===t?/^([01]\d|2[0-3])(:[0-5]\d)$/:/^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/).test(e)},k=function(e,t,n,a,o,i){var r=!1;return t&&(""!==o?e>t&&a===o&&(r=!0):e>t&&(r=!0)),n&&(""!==i?e<n&&a===i&&(r=!0):e<n&&(r=!0)),r},M=function(e,t){var n=t.x-e.x,a=t.y-e.y;return Math.sqrt(n*n+a*a)},y=function(e,t){var n=2*Math.atan2(t.y-e.y-M(e,t),t.x-e.x);return Math.abs(180*n/Math.PI)},E=function(e){return{radius:(e-32)/2-4}},N=t.forwardRef((function(e,n){var a=m(e,[]),o=r(b),i=o.activeHour,l=o.format,c=o.period,s=o.setPeriod,d=o.mode,p=o.setMode,f=o.activeMinute,g=o.setHandAnimation,x=o.inline,M=o.setActiveHour,y=o.setActiveMinute,E=o.maxHour,N=o.maxMinute,w=o.minHour,C=o.minMinute,I=o.maxPeriod,P=o.minPeriod,A=o.setInputValue,L=o.setIsPickerOpened,T=o.increment,H=o.submitLabel,R=function(e){p(e),g(!0)},O=function(e){var t="12h"===l?12:24;M(e?i===t?1:i+1:1===i?t:i-1)},j=function(e){var t=T?55:59,n=T?5:1;y(e?f>=t?0:f+n:f<=0?t:f-n)};return x?t.createElement("div",u({className:"timepicker-head d-flex flex-row align-items-center justify-content-center timepicker-head-inline",style:{paddingRight:"0px"},ref:n},a),t.createElement("div",{className:"timepicker-head-content d-flex w-100 justify-content-evenly align-items-center"},t.createElement("div",{className:"timepicker-current-wrapper"},t.createElement("span",{className:"position-relative h-100 timepicker-inline-hour-icons"},t.createElement(h,{fas:!0,icon:"chevron-up",className:"position-absolute text-white timepicker-icon-up timepicker-icon-inline-hour",onClick:function(){return O(!0)}}),t.createElement(v,{type:"button",color:"none",onClick:function(){return R("hours")},className:"timepicker-current timepicker-current-inline timepicker-hour ".concat("hours"===d&&"active"),tabIndex:0,style:{pointerEvents:"hours"===d?"none":void 0}},24===i?"00":i<10?"0".concat(i):i),t.createElement(h,{fas:!0,icon:"chevron-down",className:"position-absolute text-white timepicker-icon-down timepicker-icon-inline-hour",onClick:function(){return O(!1)}})),t.createElement(v,{color:"none",className:"timepicker-dot timepicker-current-inline",disabled:!0},":"),t.createElement("span",{className:"position-relative h-100 timepicker-inline-minutes-icons"},t.createElement(h,{fas:!0,icon:"chevron-up",className:"position-absolute text-white timepicker-icon-up timepicker-icon-inline-minute",onClick:function(){return j(!0)}}),t.createElement(v,{onClick:function(){return R("minutes")},type:"button",color:"none",className:"timepicker-current timepicker-current-inline timepicker-minute ".concat("minutes"===d&&"active"),tabIndex:0,style:{pointerEvents:"minutes"===d?"none":void 0}},f<10?"0".concat(f):f),t.createElement(h,{fas:!0,icon:"chevron-down",className:"position-absolute text-white timepicker-icon-down timepicker-icon-inline-minute",onClick:function(){return j(!1)}}))),t.createElement("div",{className:"d-flex justify-content-center timepicker-mode-wrapper"},"12h"===l&&t.createElement(t.Fragment,null,t.createElement(v,{onClick:function(){return s("AM")},type:"button",color:"none",className:"timepicker-hour-mode timepicker-am me-2 ms-4 ".concat("AM"===c&&"active"),tabIndex:0},"AM"),t.createElement(v,{onClick:function(){return s("PM")},type:"button",color:"none",className:"timepicker-hour-mode timepicker-pm ".concat("PM"===c&&"active"),tabIndex:0},"PM")),t.createElement(v,{type:"button",color:"none",className:"timepicker-button timepicker-submit timepicker-submit-inline py-1 px-2 mb-0",tabIndex:0,onClick:function(){if(!k(i,E,w,c,I,P)&&!k(f,N,C,c,I,P)){L(!1);var e=24===i?"00":i<10?"0".concat(i):i,t=f<10?"0".concat(f):f;A("".concat(e,":").concat(t," ").concat(c).trim())}}},H)))):t.createElement("div",u({className:"timepicker-head d-flex flex-row align-items-center justify-content-center",style:{paddingRight:"0px"},ref:n},a),t.createElement("div",{className:"timepicker-head-content d-flex w-100 justify-content-evenly",style:{paddingRight:"24h"===l?"50px":""}},t.createElement("div",{className:"timepicker-current-wrapper"},t.createElement("span",{className:"position-relative h-100"},t.createElement(v,{type:"button",color:"none",onClick:function(){return R("hours")},className:"timepicker-current timepicker-hour ".concat("hours"===d&&"active"),tabIndex:0,style:{pointerEvents:"hours"===d?"none":void 0}},24===i?"00":i<10?"0".concat(i):i),t.createElement(v,{color:"none",className:"timepicker-dot",disabled:!0},":")),t.createElement("span",{className:"position-relative h-100"},t.createElement(v,{onClick:function(){return R("minutes")},type:"button",color:"none",className:"timepicker-current timepicker-minute ".concat("minutes"===d&&"active"),tabIndex:0,style:{pointerEvents:"minutes"===d?"none":void 0}},f<10?"0".concat(f):f))),"12h"===l&&t.createElement("div",{className:"d-flex flex-column justify-content-center timepicker-mode-wrapper"},t.createElement(v,{onClick:function(){return s("AM")},type:"button",color:"none",className:"timepicker-hour-mode timepicker-am ".concat("AM"===c&&"active"),tabIndex:0},"AM"),t.createElement(v,{onClick:function(){return s("PM")},type:"button",color:"none",className:"timepicker-hour-mode timepicker-pm ".concat("PM"===c&&"active"),tabIndex:0},"PM"))))})),w={hours:[{value:1,left:"169px",bottom:"209.263px",angle:30,id:"hour-1-".concat(Math.floor(1001*Math.random()))},{value:2,left:"209.263px",bottom:"169px",angle:60,id:"hour-2-".concat(Math.floor(1001*Math.random()))},{value:3,left:"224px",bottom:"114px",angle:90,id:"hour-3-".concat(Math.floor(1001*Math.random()))},{value:4,left:"209.263px",bottom:"59px",angle:120,id:"hour-4-".concat(Math.floor(1001*Math.random()))},{value:5,left:"169px",bottom:"18.7372px",angle:150,id:"hour-5-".concat(Math.floor(1001*Math.random()))},{value:6,left:"114px",bottom:"4px",angle:180,id:"hour-6-".concat(Math.floor(1001*Math.random()))},{value:7,left:"59px",bottom:"18.7372px",angle:210,id:"hour-7-".concat(Math.floor(1001*Math.random()))},{value:8,left:"18.7372px",bottom:"59px",angle:240,id:"hour-8-".concat(Math.floor(1001*Math.random()))},{value:9,left:"4px",bottom:"114px",angle:270,id:"hour-9-".concat(Math.floor(1001*Math.random()))},{value:10,left:"18.7372px",bottom:"169px",angle:300,id:"hour-10-".concat(Math.floor(1001*Math.random()))},{value:11,left:"59px",bottom:"209.263px",angle:330,id:"hour-11-".concat(Math.floor(1001*Math.random()))},{value:12,left:"114px",bottom:"224px",angle:360,id:"hour-12-".concat(Math.floor(1001*Math.random()))},{value:13,left:"94px",bottom:"115.962px",angle:30,id:"hour-13-".concat(Math.floor(1001*Math.random()))},{value:14,left:"115.962px",bottom:"94px",angle:60,id:"hour-14-".concat(Math.floor(1001*Math.random()))},{value:15,left:"124px",bottom:"64px",angle:90,id:"hour-15-".concat(Math.floor(1001*Math.random()))},{value:16,left:"115.962px",bottom:"34px",angle:120,id:"hour-16-".concat(Math.floor(1001*Math.random()))},{value:17,left:"94px",bottom:"12.0385px",angle:150,id:"hour-17-".concat(Math.floor(1001*Math.random()))},{value:18,left:"64px",bottom:"4px",angle:180,id:"hour-18-".concat(Math.floor(1001*Math.random()))},{value:19,left:"34px",bottom:"12.0385px",angle:210,id:"hour-19-".concat(Math.floor(1001*Math.random()))},{value:20,left:"12.0385px",bottom:"34px",angle:240,id:"hour-20-".concat(Math.floor(1001*Math.random()))},{value:21,left:"4px",bottom:"64px",angle:270,id:"hour-21-".concat(Math.floor(1001*Math.random()))},{value:22,left:"12.0385px",bottom:"94px",angle:300,id:"hour-22-".concat(Math.floor(1001*Math.random()))},{value:23,left:"34px",bottom:"115.962px",angle:330,id:"hour-23-".concat(Math.floor(1001*Math.random()))},{value:24,left:"64px",bottom:"124px",angle:360,id:"hour-0-".concat(Math.floor(1001*Math.random()))}],minutes:[{value:0,left:"114px",bottom:"224px",angle:360,id:"minute-0-".concat(Math.floor(1001*Math.random()))},{value:5,left:"169px",bottom:"209.263px",angle:30,id:"minute-5-".concat(Math.floor(1001*Math.random()))},{value:10,left:"209.263px",bottom:"169px",angle:60,id:"minute-10-".concat(Math.floor(1001*Math.random()))},{value:15,left:"224px",bottom:"114px",angle:90,id:"minute-15-".concat(Math.floor(1001*Math.random()))},{value:20,left:"209.263px",bottom:"59px",angle:120,id:"minute-20-".concat(Math.floor(1001*Math.random()))},{value:25,left:"169px",bottom:"18.7372px",angle:150,id:"minute-25-".concat(Math.floor(1001*Math.random()))},{value:30,left:"114px",bottom:"4px",angle:180,id:"minute-30-".concat(Math.floor(1001*Math.random()))},{value:35,left:"59px",bottom:"18.7372px",angle:210,id:"minute-35-".concat(Math.floor(1001*Math.random()))},{value:40,left:"18.7372px",bottom:"59px",angle:240,id:"minute-40-".concat(Math.floor(1001*Math.random()))},{value:45,left:"4px",bottom:"114px",angle:270,id:"minute-45-".concat(Math.floor(1001*Math.random()))},{value:50,left:"18.7372px",bottom:"169px",angle:300,id:"minute-50-".concat(Math.floor(1001*Math.random()))},{value:55,left:"59px",bottom:"209.263px",angle:330,id:"minute-55-".concat(Math.floor(1001*Math.random()))}]},C=t.forwardRef((function(e,l){var c=m(e,[]),s=a(null),d=a(null),p=n(!1),f=p[0],v=p[1],h=n(0),g=h[0],x=h[1],N=n(0),C=N[0],I=N[1],P=r(b),A=P.setActiveHour,L=P.format,T=P.activeHour,H=P.minHour,R=P.maxHour,O=P.minPeriod,j=P.maxPeriod,D=P.period,S=P.mode,V=P.setMode,z=P.activeMinute,B=P.setActiveMinute,F=P.setHandAnimation,W=P.handAnimation,U=P.maxMinute,Y=P.minMinute,X=P.hourAngle,q=P.setHourAngle,$=P.minuteAngle,Z=P.setMinuteAngle,G=P.increment,J="24h"===L?w.hours:w.hours.filter((function(e){return e.value<13&&0!==e.value})),K=w.minutes,Q=n("calc(40% + 1px)"),_=Q[0],ee=Q[1],te=i(y,[]),ne=i((function(e){var t,n=null===(t=s.current)||void 0===t?void 0:t.getBoundingClientRect(),a=n.width,o=n.top,i=n.left,r="touches"in e?e.touches[0]:e,l={x:a/2,y:-a/2},c={x:r.clientX-i,y:o-r.clientY},u=Math.round(te(l,c)+360)%360;if("hours"===S){var m=30*Math.round(u/30),d=m/30;if("24h"===L){var p=E(g).radius,f=E(C).radius;M(l,c)<(p+f)/2-16&&(d+=12)}k(d,R,H,D,j,O)||(A(d),q(m))}else if(0===u)k(0,U,Y,D,j,O)||(B(0),Z(360));else{var v=G?30:6;d=v*Math.round(u/v);k(d/6,U,Y,D,j,O)||(B(d/6),Z(d))}}),[te,U,Y,j,O,S,D,B,R,H,A,C,g,L,q,Z,G]);return o((function(){s.current&&x(s.current.offsetWidth),d.current&&I(d.current.offsetWidth)}),[]),o((function(){var e,t;return f&&(e=document,t=ne,"mouseup mousemove mouseleave mouseover touchstart touchmove touchend".split(" ").forEach((function(n){e.addEventListener(n,t)}))),function(){!function(e,t,n){t.split(" ").forEach((function(t){e.removeEventListener(t,n)}))}(document,"mouseup mousemove mouseleave mouseover touchstart touchmove touchend",ne)}}),[f,ne]),o((function(){var e=J.find((function(e){return e.value===T}));void 0!==e&&(e.value>12||24===e.value?ee("21.5%"):ee("calc(40% + 1px)"))}),[J,T]),t.createElement("div",u({className:"timepicker-clock-wrapper d-flex justify-content-center flex-column align-items-center",ref:l},c),t.createElement("div",{onMouseDown:function(e){return function(e){e.preventDefault(),v(!0)}(e)},onMouseUp:function(e){return function(e){e.preventDefault(),v(!1),"hours"===S&&(V("minutes"),F(!0))}(e)},ref:s,className:"timepicker-clock timepicker-clock-animation"},t.createElement("span",{className:"timepicker-middle-dot position-absolute"}),t.createElement("div",{className:"timepicker-hand-pointer position-absolute ".concat(W&&"timepicker-transform"),style:{transform:"rotateZ(".concat("hours"===S?X:$,"deg)"),height:"hours"===S?_:"calc(40% + 1px)"}},t.createElement("div",{className:"timepicker-circle position-absolute",style:{backgroundColor:"rgb(25, 118, 210)"}})),"hours"===S&&"24h"===L&&t.createElement("div",{ref:d,className:"timepicker-clock-inner"},J.map((function(e){if(e.value>12||0===e.value)return t.createElement("span",{id:e.id,key:e.id,className:"timepicker-time-tips-inner ".concat(k(e.value,R,H,D,j,O)&&"disabled"," ").concat(e.value===T&&"active"),style:{left:e.left,bottom:e.bottom}},t.createElement("span",{className:"timepicker-tips-inner-element"},24===e.value?"00":e.value))}))),"hours"===S&&J.map((function(e){return"24h"!==L||e.value<13&&0!==e.value?t.createElement("span",{id:e.id,key:e.id,className:"timepicker-time-tips-hours ".concat(k(e.value,R,H,D,j,O)&&"disabled"," ").concat(e.value===T&&"active"),style:{left:e.left,bottom:e.bottom}},t.createElement("span",{className:"timepicker-tips-element"},e.value)):void 0})),"minutes"===S&&K.map((function(e){return t.createElement("span",{id:e.id,key:e.id,className:"timepicker-time-tips-minutes ".concat(k(e.value,U,Y,D,j,O)&&"disabled"," ").concat(z===e.value&&"active"),style:{left:e.left,bottom:e.bottom}},t.createElement("span",{className:"timepicker-tips-element"},e.value<10?"0".concat(e.value):e.value))}))))})),I=t.forwardRef((function(e,n){var a=m(e,[]),o=r(b),i=o.setIsPickerOpened,l=o.setInputValue,c=o.cancelLabel,s=o.submitLabel,d=o.clearLabel,p=o.activeHour,f=o.period,h=o.activeMinute,x=o.maxHour,M=o.maxMinute,y=o.minHour,E=o.minMinute,N=o.maxPeriod,w=o.minPeriod,C=o.defaultValue,I=o.setActiveHour,P=o.setActiveMinute,A=o.setPeriod,L=o.format,T=o.setHourAngle,H=o.setMinuteAngle,R=o.onChange;return t.createElement("div",u({className:"timepicker-footer",ref:n},a),t.createElement("div",{className:"w-100 d-flex justify-content-between"},t.createElement(v,{onClick:function(){if(""!==C&&void 0!==C){var e=g(C),t=e.hour,n=e.minute,a=e.defaultPeriod;"24h"===L?(I(0===t?24:t),T(0===t?360:t>12?30*(t-12):30*t)):(I(t),T(30*t),A(a)),P(n),H(6*n),l(C),null==R||R(C)}else I(12),T(360),P(0),H(360),l(""),null==R||R(""),A("24h"===L?"":"AM")},type:"button",color:"none",className:"timepicker-button timepicker-clear",tabIndex:0},d),t.createElement(v,{onClick:function(){return i(!1)},type:"button",color:"none",className:"timepicker-button timepicker-cancel",tabIndex:0},c),t.createElement(v,{onClick:function(){if(!k(p,x,y,f,N,w)&&!k(h,M,E,f,N,w)){i(!1);var e=24===p?"00":p<10?"0".concat(p):p,t=h<10?"0".concat(h):h,n="".concat(e,":").concat(t," ").concat(f).trim();l(n),null==R||R(n)}},type:"button",color:"none",className:"timepicker-button timepicker-submit",tabIndex:0},s)))})),P=t.forwardRef((function(r,p){var f=r.className,v=r.defaultValue,h=r.minHour,k=r.maxHour,M=r.maxTime,y=r.minTime,E=r.noIcon,w=r.showRef,P=r.inputID,A=r.justInput,L=r.inputClasses,T=r.inputLabel,H=r.invalidLabel,R=r.clearLabel,O=r.submitLabel,j=r.cancelLabel,D=r.format,S=r.timePickerClasses,V=r.customIcon,z=r.customIconSize,B=r.btnIcon,F=r.inline,W=r.increment,U=r.inputWrapperTag,Y=r.onChange,X=r.customValue,q=r.inputStyle,$=r.onOpen,Z=r.onClose,G=r.isOpen,J=r.setIsOpen,K=r.inlinePickerTag,Q=m(r,["className","defaultValue","minHour","maxHour","maxTime","minTime","noIcon","showRef","inputID","justInput","inputClasses","inputLabel","invalidLabel","clearLabel","submitLabel","cancelLabel","format","timePickerClasses","customIcon","customIconSize","btnIcon","inline","increment","inputWrapperTag","onChange","customValue","inputStyle","onOpen","onClose","isOpen","setIsOpen","inlinePickerTag"]),_=n(!1),ee=_[0],te=_[1],ne=n(!1),ae=ne[0],oe=ne[1],ie=n(""),re=ie[0],le=ie[1],ce=n(!1),ue=ce[0],me=ce[1],se=n(12),de=se[0],pe=se[1],fe=n(0),ve=fe[0],he=fe[1],be=n("24h"===D?"":"AM"),ge=be[0],xe=be[1],ke=n(k||24),Me=ke[0],ye=ke[1],Ee=n(h||1),Ne=Ee[0],we=Ee[1],Ce=n(59),Ie=Ce[0],Pe=Ce[1],Ae=n(0),Le=Ae[0],Te=Ae[1],He=n(""),Re=He[0],Oe=He[1],je=n(""),De=je[0],Se=je[1],Ve=n("hours"),ze=Ve[0],Be=Ve[1],Fe=n(!1),We=Fe[0],Ue=Fe[1],Ye=n(360),Xe=Ye[0],qe=Ye[1],$e=n(360),Ze=$e[0],Ge=$e[1],Je=n(null),Ke=Je[0],Qe=Je[1],_e=n(null),et=_e[0],tt=_e[1],nt=n(0),at=nt[0],ot=nt[1],it={input:null!=T?T:"Select a time",invalid:null!=H?H:"Invalid Time Format",clear:null!=R?R:"Clear",submit:null!=O?O:"Ok",cancel:null!=j?j:"Cancel"},rt=e("timepicker",f),lt=e("timepicker-modal",S),ct=P||"timepicker-input-".concat(Math.floor(10001*Math.random())),ut=e("timepicker-wrapper","h-100","d-flex","align-items-center","justify-content-center","flex-column",F?"timepicker-wrapper-inline":"position-fixed","fade",ae&&(G||ee)&&"show"),mt=c(Ke,et,{placement:"bottom-start"}),st=mt.styles,dt=mt.attributes,pt=e("timepicker-input",ue&&"is-invalid",L),ft=a(null),vt=a(null),ht=a(null),bt=i((function(){G?J(!0):te(!0)}),[G,J]),gt=i((function(e){var t,n,a,o;F||e.target!==vt.current||(G?J(!1):te(!1)),!F||e.target===vt.current||(null===(t=vt.current)||void 0===t?void 0:t.contains(e.target))||e.target===(null===(n=ht.current)||void 0===n?void 0:n.parentNode)||(null===(o=null===(a=ht.current)||void 0===a?void 0:a.parentNode)||void 0===o?void 0:o.contains(e.target))||(G?J(!1):te(!1))}),[vt,F,ht,G,J]),xt=i((function(e){var t,n=e.key;(e.preventDefault(),"Escape"===n&&(G?J(!1):te(!1)),"ArrowUp"===n&&"hours"===ze)&&(pe(i=de===(o="12h"===D?12:24)?1:de+1),qe(30*i));if("ArrowUp"===n&&"minutes"===ze){var a=W?5:1;he(i=ve>=(o=W?55:59)?0:ve+a),Ge(6*i)}if("ArrowDown"===n&&"hours"===ze){var o="12h"===D?12:24;pe(i=1===de?o:de-1),qe(30*i)}if("ArrowDown"===n&&"minutes"===ze){var i;o=W?55:59,a=W?5:1;he(i=ve<=0?o:ve-a),Ge(6*i)}if("Tab"===n){var r=null===(t=vt.current)||void 0===t?void 0:t.querySelectorAll('[tabindex="0"]');r&&r[at]&&(r[at].focus(),at===r.length-1?ot(0):ot(at+1))}"Enter"===n&&document.activeElement&&document.activeElement.click()}),[de,D,ze,ve,W,at,G,J]);return o((function(){return ee&&(document.addEventListener("click",gt),document.addEventListener("keydown",xt)),function(){document.removeEventListener("click",gt),document.removeEventListener("keydown",xt)}}),[ee,gt,xt]),o((function(){if(M){var e=g(M),t=e.hour,n=e.minute,a=e.defaultPeriod;ye(t),Pe(n),void 0!==a&&Se(a)}if(y){var o=g(y);t=o.hour,n=o.minute,a=o.defaultPeriod;we(t),Te(n),void 0!==a&&Oe(a)}}),[M,y]),o((function(){X&&le(X)}),[X]),o((function(){v&&x(v,D)&&le(v)}),[v,D]),o((function(){if(x(re,D)||""===re){if(me(!1),""!==re){var e=g(re),t=e.hour,n=e.minute,a=e.defaultPeriod;"24h"===D?(pe(0===t?24:t),qe(0===t?360:t>12?30*(t-12):30*t)):(pe(t),qe(30*t),xe(a)),he(n),Ge(6*n)}}else me(!0)}),[re,D]),o((function(){var e;if(!A&&!E){var t=null===(e=ft.current)||void 0===e?void 0:e.parentNode,n=function(e,t,n,a){var o=document.createElement("button"),i=document.createElement("div");i.className="invalid-feedback",i.style.bottom="-23px",i.textContent=e,o.id="timepicker-toggle-".concat(Math.floor(10001*Math.random())),o.tabIndex=0,o.type="button",o.style.pointerEvents="auto";var r=document.createElement("i");r.className="".concat(t," fa-").concat(n," timepicker-icon"),a&&o.appendChild(r);var l=a?o:r;return l.classList.add("timepicker-toggle-button"),{div:i,selector:l}}(it.invalid,V,z,B),a=n.div,o=n.selector;return null==t||t.insertBefore(a,ft.current),null==t||t.insertBefore(o,ft.current),o.addEventListener("click",bt),function(){o.removeEventListener("click",bt),null==t||t.removeChild(o)}}}),[bt,it.invalid,B,V,z,A,E]),o((function(){if(w){var e=w.current;return null==e||e.addEventListener("click",bt),function(){null==e||e.removeEventListener("click",bt)}}}),[w,bt]),o((function(){var e,t;return ee||G?(null==$||$(),Be("hours"),oe(!0),ot(0),e=setTimeout((function(){G?J(!0):te(!0)}),4)):(null==Z||Z(),G?J(!1):te(!1),t=setTimeout((function(){oe(!1)}),300)),function(){clearTimeout(e),clearTimeout(t)}}),[ee,G,J,$,Z]),o((function(){var e;return We&&(e=setTimeout((function(){Ue(!1)}),400)),function(){clearTimeout(e)}}),[We]),t.createElement(t.Fragment,null,t.createElement(b.Provider,{value:{isPickerOpened:null!=G?G:ee,setIsPickerOpened:G?J:te,setInputValue:le,submitLabel:it.submit,clearLabel:it.clear,cancelLabel:it.cancel,activeHour:de,activeMinute:ve,setActiveHour:pe,setActiveMinute:he,format:D,period:ge,setPeriod:xe,defaultValue:v,maxHour:Me,minHour:Ne,maxPeriod:De,minPeriod:Re,mode:ze,setMode:Be,setHandAnimation:Ue,handAnimation:We,minMinute:Le,maxMinute:Ie,hourAngle:Xe,setHourAngle:qe,minuteAngle:Ze,setMinuteAngle:Ge,inline:F,increment:W,onChange:Y}},t.createElement(t.Fragment,null,t.createElement(U,u({className:rt,ref:F?Qe:p},Q),t.createElement(s,{onFocus:function(e){A&&(e.target.blur(),G?J(!0):te(!0))},inputRef:ht,labelRef:ft,className:pt,label:it.input,id:ct,value:re,onChange:function(e){le(e.target.value),null==Y||Y(e.target.value)},wrapperClass:"timepicker",style:q})),!F&&(G||ee||ae)&&l.createPortal(t.createElement(d,{tag:"div",start:"onLoad",animation:"fade-in",className:lt,role:"dialog",tabIndex:-1,duration:300},t.createElement("div",{ref:vt,className:ut},t.createElement("div",{className:"d-flex align-items-center justify-content-center flex-column shadow timepicker-container"},t.createElement("div",{className:"d-flex flex-column timepicker-elements justify-content-around"},t.createElement(N,null),t.createElement(C,null)),t.createElement(I,null)))),document.body),F&&(G||ee||ae)&&l.createPortal(t.createElement(d,u({start:"onLoad",animation:"fade-in",className:lt,style:st.popper},dt.popper,{role:"dialog",animationRef:tt,tabIndex:-1,tag:K,duration:300}),t.createElement("div",{ref:vt,className:ut},t.createElement("div",{className:"d-flex align-items-center justify-content-center flex-column shadow timepicker-container",style:{overflowY:"inherit"}},t.createElement("div",{className:"d-flex flex-column timepicker-elements justify-content-around timepicker-elements-inline"},t.createElement(N,null))))),document.body))))}));P.defaultProps={format:"12h",customIcon:"far fa-clock",customIconSize:"sm",btnIcon:!0,justInput:!1,noIcon:!1,inline:!1,inlinePickerTag:"div",inputWrapperTag:"div",increment:!1,open:!1};export{P as default};