import t,{useRef as n,useEffect as e}from"react";var r=function(){return r=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},r.apply(this,arguments)};var o=function(t,n){switch(n){case"motionLinear":default:return t;case"motionEaseInQuad":return(e=t)*e;case"motionEaseInCubic":return function(t){return t*t*t}(t);case"motionEaseInQuart":return function(t){return t*t*t*t}(t);case"motionEaseInQuint":return function(t){return t*t*t*t*t}(t);case"motionEaseInOutQuad":return function(t){return t<.5?2*t*t:(4-2*t)*t-1}(t);case"motionEaseInOutCubic":return function(t){return(t/=.5)<1?t*t*t/2:((t-=2)*t*t+2)/2}(t);case"motionEaseInOutQuart":return function(t){return(t/=.5)<1?.5*t*t*t*t:-((t-=2)*t*t*t-2)/2}(t);case"motionEaseInOutQuint":return function(t){return(t/=.5)<1?t*t*t*t*t/2:((t-=2)*t*t*t*t+2)/2}(t);case"motionEaseOutQuad":return function(t){return-t*(t-2)}(t);case"motionEaseOutCubic":return function(t){return--t*t*t+1}(t);case"motionEaseOutQuart":return function(t){return-(--t*t*t*t-1)}(t);case"motionEaseOutQuint":return function(t){return--t*t*t*t*t+1}(t)}var e},u=function(u){var c=u.className,i=u.duration,a=u.href,f=u.offset,s=u.easing,l=u.containerRef,m=u.targetRef,d=u.children,p=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e}(u,["className","duration","href","offset","easing","containerRef","targetRef","children"]),v=n(null);e((function(){v.current=l?l.current:document.documentElement}),[l]);var g=function(){var t,n,e=v.current,r=null==m?void 0:m.current;if(e&&void 0!==f){var o=e.scrollTop;return l?r.getBoundingClientRect().y-e.getBoundingClientRect().y-f+o:(t=r,n=t.getBoundingClientRect(),{top:n.top+document.body.scrollTop,left:n.left+document.body.scrollLeft}).top-f+o}},O=function(t,n,e,r,u,c){r<0||r>1||u<=0?t.scrollTop=e:s&&(t.scrollTo({top:n-(n-e)*o(r,s)}),r+=u*c,setTimeout((function(){O(t,n,e,r,u,c)})))};return t.createElement("a",r({className:c,href:a,onClick:function(t){t.preventDefault();var n=v.current;if(n&&i){var e=n.scrollTop,r=g(),o=1/i,u=4.25;!function(){var t;if(!l)return!0;if(v.current){var n=null===(t=v.current)||void 0===t?void 0:t.getBoundingClientRect();return n.top>=0&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)}}()?(O(document.documentElement,document.documentElement.scrollTop,n.offsetTop,0,o,u),setTimeout((function(){O(n,e,r,0,o,u)}),i)):O(n,e,r,0,o,u)}}},p),d)};u.defaultProps={duration:500,href:"#",easing:"motionLinear",offset:0};export{u as default};