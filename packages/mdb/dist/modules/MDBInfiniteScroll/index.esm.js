import n,{useRef as e,useCallback as t,useEffect as r}from"react";var o=function(){return o=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},o.apply(this,arguments)};var i=function(i){var l=i.children,c=i.infiniteScrollRef,f=i.infiniteDirection,a=i.tag,u=i.onInfiniteScroll,p=i.onComplete,d=i.windowParent,s=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t}(i,["children","infiniteScrollRef","infiniteDirection","tag","onInfiniteScroll","onComplete","windowParent"]),w=e(null),g=c||w,h=t((function(){if(d)return window.scrollY+window.innerHeight===document.documentElement.scrollHeight;var n=g.current.getBoundingClientRect();return"x"===f?n.width+g.current.scrollLeft+10>=g.current.scrollWidth:n.height+g.current.scrollTop>=g.current.scrollHeight}),[d,f,g]),v=t((function(){h()&&(p&&p(),u&&u())}),[h,u,p]);return r((function(){var n=d?window:g.current;return n.addEventListener("scroll",v),function(){n.removeEventListener("scroll",v)}}),[v,g,d]),n.createElement(a,o({ref:g},s),l)};i.defaultProps={tag:"div",windowParent:!1};export{i as default};
