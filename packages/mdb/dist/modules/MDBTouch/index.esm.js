import e,{useRef as t,useState as n,useEffect as o,useCallback as r}from"react";var i=function(){return i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)};var u=function(e){var t=e.touches[0];return{x:t.clientX,y:t.clientY}},c=function(e){var t=e.x,n=e.y;return{x:{direction:t<0?"left":"right",value:Math.abs(t)},y:{direction:n<0?"up":"down",value:Math.abs(n)}}},a=function(e,t){var n=e.x,o=e.y;return{x:n-t.x,y:o-t.y}},v=function(e){var t=e.x1,n=e.x2,o=e.y1;return{x:t+(n-t)/2,y:o+(e.y2-o)/2}},l=function(e){var t,n,o,r,i,u=e[0],c=e[1],a={x1:u.clientX,x2:c.clientX,y1:u.clientY,y2:c.clientY};return[(t=a,n=t.x1,o=t.x2,r=t.y1,i=t.y2,Math.sqrt(Math.pow(o-n,2)+Math.pow(i-r,2))),v(a)]},s=function(e,t){return"number"==typeof e&&"number"==typeof t&&!isNaN(e)&&!isNaN(t)},h=function(v){var h=v.tag,d=v.children,f=v.touchRef,p=v.type,y=v.threshold,m=v.allDirections,L=v.onSwipe,E=v.onSwipeLeft,w=v.onSwipeRight,x=v.onSwipeUp,g=v.onSwipeDown,P=v.onPan,b=v.onPanLeft,D=v.onPanRight,O=v.onPanUp,S=v.onPanDown,M=v.onPinch,R=v.onRotate,j=v.onTap,X=v.onPress,N=v.pointers,T=v.interval,Y=v.taps,U=v.duration,I=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(v,["tag","children","touchRef","type","threshold","allDirections","onSwipe","onSwipeLeft","onSwipeRight","onSwipeUp","onSwipeDown","onPan","onPanLeft","onPanRight","onPanUp","onPanDown","onPinch","onRotate","onTap","onPress","pointers","interval","taps","duration"]),A=t(null),q=f||A,B=n(null),C=B[0],V=B[1],_=n(null),k=_[0],z=_[1],F=n(null),G=F[0],H=F[1],J=n(null),K=J[0],Q=J[1],W=n({x:0,y:0}),Z=W[0],$=W[1],ee=n(null),te=ee[0],ne=ee[1],oe=n(0),re=oe[0],ie=oe[1],ue=n(0),ce=ue[0],ae=ue[1],ve=n(0),le=ve[0],se=ve[1],he=n(0),de=he[0],fe=he[1],pe=n(0),ye=pe[0],me=pe[1],Le=n({x:0,y:0}),Ee=Le[0],we=Le[1],xe=n(0),ge=xe[0],Pe=xe[1],be=n(null),De=be[0],Oe=be[1],Se=t();o((function(){"tap"===p&&(1===ge&&(Se.current=window.setTimeout((function(){Pe(0)}),T)),ge===Y&&(window.clearTimeout(Se.current),Pe(0),j&&j(De)))}),[ge,T,Y,j,De,p]);var Me=r((function(e){e.touches.length===N&&(Pe(ge+1),Oe(e))}),[N,ge]),Re=r((function(){}),[]),je=r((function(){}),[]),Xe=r((function(e){e.touches.length===N&&(Se.current=window.setTimeout((function(){X&&X(e,U)}),U))}),[U,N,X]),Ne=r((function(){}),[]),Te=r((function(){window.clearTimeout(Se.current)}),[]),Ye=r((function(e){V(u(e))}),[]),Ue=r((function(e){return"left"===e?E:"right"===e?w:"up"===e?x:"down"===e?g:void 0}),[g,E,w,x]),Ie=r((function(e){if("touchmove"===e.type&&e.preventDefault(),C){var t=u(e),n={x:t.x-C.x,y:t.y-C.y},o=c(n),r=o.x,i=o.y;if(m){if(y&&i.value<y&&r.value<y)return;var a=i.value>r.value?i.direction:r.direction;return L&&L(e,{direction:a}),void V(null)}var v=w||E?"x":"y";if(y&&o[v].value>y){var l=Ue(o[v].direction);l&&l(e),V(null)}}}),[m,L,C,y,w,E,Ue]),Ae=r((function(){V(null)}),[]),qe=r((function(e){z(u(e)),H(e)}),[]),Be=r((function(e){return"left"===e?b:"right"===e?D:"up"===e?O:"down"===e?S:void 0}),[S,b,D,O]),Ce=r((function(e){"touchmove"===e.type&&e.preventDefault();var t=u(e),n=u(G),o=a(t,k),r=a(t,n),i=c(o),v=c(r),l=i.x,s=i.y;y&&m&&(s.value>y||l.value>y)&&P&&P(e);var h=b||D?"x":"y";if(y&&i[h].value>y){var d=Be(v[h].direction);d&&d(e)}H(e)}),[m,G,k,y,P,b,D,Be]),Ve=r((function(e){"touchend"===e.type&&e.preventDefault(),z(null),H(null)}),[]),_e=r((function(e){if(e.touches.length===N){"touchstart"===e.type&&e.preventDefault();var t=l(e.touches),n=t[0],o=t[1];Q(n),z(n),$(o)}}),[N]),ke=r((function(e){e.touches.length===N&&("touchmove"===e.type&&e.preventDefault(),Q(l(e.touches)[0]),"number"==typeof k&&"number"==typeof K&&ne(K/k),s(k,K)&&"object"==typeof Z&&(y&&Z.x>y||y&&Z.y>y)&&(z(K),M&&M(e,{ratio:te,origin:Z})))}),[N,k,K,y,M,Z,te]),ze=r((function(){s(k,K)&&z(null)}),[k,K]),Fe=r((function(e){if("touchstart"===e.type&&e.preventDefault(),1===e.touches.length&&1===N){var t=e.target.element.getBoundingClientRect(),n=t.left,o=t.top,r=t.width,i=t.height;we({x:n+r/2,y:o+i/2})}else{if(2!==e.touches.length||2!==N)return;var u=e.touches,c=u[0],a=u[1],v={x1:a.clientX,x2:c.clientX,y1:a.clientY,y2:c.clientY};we({x:(v.x1+v.x2)/2,y:(v.y1+v.y2)/2})}}),[N]),Ge=r((function(e){var t;if("touchmove"===e.type&&e.preventDefault(),1===e.touches.length&&1===N)t=e.touches[0];else{if(2!==e.touches.length||2!==N)return;t=function(e){for(var t=null,n=Number.MIN_VALUE,o=0,r=e;o<r.length;o++){var i=r[o];i.clientX>n&&(t=i)}return t}(e.touches)}ie(function(e,t,n,o){var r=Math.atan2(o-t,n-e)*(180/Math.PI);return Math.round(r+360)%360}(Ee.x,Ee.y,t.clientX,t.clientY)),le?(me(re-ce),fe(de+ye)):(ae(re),se(re),fe(0),me(0)),ae(re),R&&R(e,{currentAngle:re,distance:de,change:ye})}),[ye,re,ce,Ee,R,de,le,N]),He=r((function(e){"touchend"===e.type&&e.preventDefault(),ie(0),se(0),ae(0),me(0),fe(0)}),[]);return o((function(){var e=q.current;return"tap"===p&&(e.addEventListener("touchstart",Me),e.addEventListener("touchmove",Re),e.addEventListener("touchend",je)),"press"===p&&(e.addEventListener("touchstart",Xe),e.addEventListener("touchmove",Ne),e.addEventListener("touchend",Te)),"swipe"===p&&(e.addEventListener("touchstart",Ye),e.addEventListener("touchmove",Ie),e.addEventListener("touchend",Ae)),"pan"===p&&(e.addEventListener("touchstart",qe),e.addEventListener("touchmove",Ce),e.addEventListener("touchend",Ve)),"pinch"===p&&(e.addEventListener("touchstart",_e),e.addEventListener("touchmove",ke),e.addEventListener("touchend",ze)),"rotate"===p&&(e.addEventListener("touchstart",Fe),e.addEventListener("touchmove",Ge),e.addEventListener("touchend",He)),function(){"tap"===p&&(e.removeEventListener("touchstart",Me),e.removeEventListener("touchmove",Re),e.removeEventListener("touchend",je)),"press"===p&&(e.removeEventListener("touchstart",Xe),e.removeEventListener("touchmove",Ne),e.removeEventListener("touchend",Te)),"swipe"===p&&(e.removeEventListener("touchstart",Ye),e.removeEventListener("touchmove",Ie),e.removeEventListener("touchend",Ae)),"pan"===p&&(e.removeEventListener("touchstart",qe),e.removeEventListener("touchmove",Ce),e.removeEventListener("touchend",Ve)),"pinch"===p&&(e.removeEventListener("touchstart",_e),e.removeEventListener("touchmove",ke),e.removeEventListener("touchend",ze)),"rotate"===p&&(e.removeEventListener("touchstart",Fe),e.removeEventListener("touchmove",Ge),e.removeEventListener("touchend",He))}}),[q,Me,Re,je,Xe,Ne,Te,Ye,Ie,Ae,qe,Ce,Ve,_e,ke,ze,Fe,Ge,He,p]),e.createElement(h,i({ref:q},I),d)};h.defaultProps={tag:"div",interval:500,duration:250,taps:1,pointers:1,threshold:10,allDirections:!1};export{h as default};