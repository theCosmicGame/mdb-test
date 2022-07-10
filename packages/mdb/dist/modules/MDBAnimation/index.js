"use strict";var t=require("clsx"),e=require("react");function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var a=n(t),i=n(e),r=function(){return r=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)};var o=function(t){var n=t.animation,o=t.animationRef,l=t.className,c=t.children,u=t.delay,s=t.infinite,f=t.duration,m=t.enableTarget,d=t.target,y=t.repeatOnScroll,g=t.reset,p=t.setTarget,b=t.start,v=t.style,O=t.tag,E=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(t);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(t,a[i])&&(n[a[i]]=t[a[i]])}return n}(t,["animation","animationRef","className","children","delay","infinite","duration","enableTarget","target","repeatOnScroll","reset","setTarget","start","style","tag"]),h=e.useState(!!d),w=h[0],C=h[1],S=e.useState(!1),T=S[0],j=S[1],D=e.useRef(!0),N=a.default(w&&"animation",w&&n,l),I=e.useRef(null),P=o||I,R=function(){C(!w)},k=e.useCallback((function(){if(P.current){var t=P.current.getBoundingClientRect().top+document.body.scrollTop,e=P.current.offsetHeight,n=t<=window.innerHeight&&t+e>=0;n&&D.current?(D.current=!1,u?setTimeout((function(){C(!0),j(!0)}),u):(C(!0),j(!0))):!n&&y&&(j(!1),D.current=!0)}}),[P,y,u]);return e.useEffect((function(){return"onScroll"===b&&window.addEventListener("scroll",k),function(){window.removeEventListener("scroll",k)}}),[k,b]),e.useEffect((function(){C(!!d)}),[d]),e.useEffect((function(){"onLoad"===b&&C(!0)}),[b]),e.useEffect((function(){w&&!s&&g&&setTimeout((function(){C(!w),m&&p(!1)}),f)}),[w,f,m,p,s,g]),i.default.createElement(i.default.Fragment,null,"onClick"===b&&!1===m&&i.default.createElement(O,r({onClick:R,className:N,ref:P},E,{style:r(r({},v),{animationDuration:"".concat(f,"ms"),animationIterationCount:s?"infinite":null,animationDelay:u?"".concat(u,"ms"):null})}),c),"onHover"===b&&!1===m&&i.default.createElement(O,r({onMouseEnter:R,className:N,ref:P},E,{style:r(r({},v),{animationDuration:"".concat(f,"ms"),animationIterationCount:s?"infinite":null,animationDelay:u?"".concat(u,"ms"):null})}),c),("onLoad"===b||!0===m)&&i.default.createElement(O,r({className:N,ref:P},E,{style:r(r({},v),{animationDuration:"".concat(f,"ms"),animationIterationCount:s?"infinite":null,animationDelay:u?"".concat(u,"ms"):null})}),c),"onScroll"===b&&i.default.createElement(O,r({className:N,ref:P},E,{style:r(r({},v),{animationDuration:"".concat(f,"ms"),visibility:T?"visible":"hidden",animationIterationCount:s?"infinite":null})}),c))};o.defaultProps={enableTarget:!1,target:!1,tag:"div",start:"onClick",duration:500,animation:"slide-right"},module.exports=o;
