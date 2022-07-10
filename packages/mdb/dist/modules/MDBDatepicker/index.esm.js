import e,{useState as t,useRef as n,useCallback as a,useEffect as r,useContext as l}from"react";import i from"react-dom";import o from"clsx";import{usePopper as c}from"react-popper";import{flip as u}from"@popperjs/core";var s=function(){return s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)};function d(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}var m=function(l){var i=l.animation,c=l.animationRef,u=l.className,m=l.children,f=l.delay,p=l.infinite,v=l.duration,y=l.enableTarget,b=l.target,k=l.repeatOnScroll,g=l.reset,h=l.setTarget,w=l.start,E=l.style,D=l.tag,x=d(l,["animation","animationRef","className","children","delay","infinite","duration","enableTarget","target","repeatOnScroll","reset","setTarget","start","style","tag"]),N=t(!!b),S=N[0],C=N[1],T=t(!1),O=T[0],I=T[1],B=n(!0),F=o(S&&"animation",S&&i,u),A=n(null),L=c||A,R=function(){C(!S)},M=a((function(){if(L.current){var e=L.current.getBoundingClientRect().top+document.body.scrollTop,t=L.current.offsetHeight,n=e<=window.innerHeight&&e+t>=0;n&&B.current?(B.current=!1,f?setTimeout((function(){C(!0),I(!0)}),f):(C(!0),I(!0))):!n&&k&&(I(!1),B.current=!0)}}),[L,k,f]);return r((function(){return"onScroll"===w&&window.addEventListener("scroll",M),function(){window.removeEventListener("scroll",M)}}),[M,w]),r((function(){C(!!b)}),[b]),r((function(){"onLoad"===w&&C(!0)}),[w]),r((function(){S&&!p&&g&&setTimeout((function(){C(!S),y&&h(!1)}),v)}),[S,v,y,h,p,g]),e.createElement(e.Fragment,null,"onClick"===w&&!1===y&&e.createElement(D,s({onClick:R,className:F,ref:L},x,{style:s(s({},E),{animationDuration:"".concat(v,"ms"),animationIterationCount:p?"infinite":null,animationDelay:f?"".concat(f,"ms"):null})}),m),"onHover"===w&&!1===y&&e.createElement(D,s({onMouseEnter:R,className:F,ref:L},x,{style:s(s({},E),{animationDuration:"".concat(v,"ms"),animationIterationCount:p?"infinite":null,animationDelay:f?"".concat(f,"ms"):null})}),m),("onLoad"===w||!0===y)&&e.createElement(D,s({className:F,ref:L},x,{style:s(s({},E),{animationDuration:"".concat(v,"ms"),animationIterationCount:p?"infinite":null,animationDelay:f?"".concat(f,"ms"):null})}),m),"onScroll"===w&&e.createElement(D,s({className:F,ref:L},x,{style:s(s({},E),{animationDuration:"".concat(v,"ms"),visibility:O?"visible":"hidden",animationIterationCount:p?"infinite":null})}),m))};m.defaultProps={enableTarget:!1,target:!1,tag:"div",start:"onClick",duration:500,animation:"slide-right"};var f=function(t){var n=t.className,a=t.dropdown,r=t.children,l=t.isOpen,i=t.styles,c=t.attributes,u=t.setPopperElement,d=t.style,f=o("datepicker-dropdown-container",l?"fade-out":"fade-in","animation",n),p=o("datepicker-modal-container",n);return e.createElement(e.Fragment,null,a?e.createElement("div",s({style:s(s({position:"absolute",zIndex:1065},i.popper),{animationDuration:"300ms"})},c.popper,{ref:u,className:f,tabIndex:-1}),r):e.createElement(m,{tag:"div",start:"onLoad",animation:l?"fade-out":"fade-in",className:p,duration:300,style:d},r))};f.defaultProps={};var p={closeOnEsc:!0,title:"Select date",okBtnText:"Ok",clearBtnText:"Clear",cancelBtnText:"Cancel",customIcon:"far fa-calendar",inputLabel:"Select a date",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],views:"days",format:"dd/mm/yyyy",weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysNarrow:["S","M","T","W","T","F","S"],startDay:0};function v(e){return e.getDate()}function y(e){return e.getDay()}function b(e){return e.getMonth()}function k(e){return e.getFullYear()}function g(e){return function(e){return e.getDate()===h(e)}(e)?h(new Date(k(e),b(e)+1,1)):v(e)}function h(e){return function(e){return N(e.getFullYear(),e.getMonth()+1,0)}(e).getDate()}function w(){return new Date}function E(e,t){return D(e,12*t)}function D(e,t){var n=N(e.getFullYear(),e.getMonth()+t,e.getDate());return v(e)!==v(n)&&n.setDate(0),n}function x(e,t){return N(e.getFullYear(),e.getMonth(),e.getDate()+t)}function N(e,t,n){var a=new Date(e,t,n);return e>=0&&e<100&&a.setFullYear(a.getFullYear()-1900),a}function S(e){return!Number.isNaN(e.getTime())}function C(e,t){return k(e)-k(t)||b(e)-b(t)||v(e)-v(t)}function T(e,t){return e.setHours(0,0,0,0),t.setHours(0,0,0,0),e.getTime()===t.getTime()}function O(e){return parseInt(e,10)<10?"0".concat(e):e}function I(e,t){var n,a=k(e)-B(0,null,null);return(a%(n=t)+n)%n}function B(e,t,n){var a=0;n?a=k(n)-e+1:t&&(a=k(t));return a}function F(e,t,n,a){var r=t&&C(e,t)<=0,l=n&&C(e,n)>=0,i=a&&!1===a(e);return Boolean(r||l||i)}function A(e,t,n,a){var r=a&&k(a),l=a&&b(a),i=n&&k(n),o=n&&b(n);return!(!l||!r)&&(t>r||t===r&&e>l)||!(!o||!i)&&(t<i||t===i&&e<o)}function L(e,t,n){var a=t&&k(t),r=n&&k(n);return!!r&&e>r||!!a&&e<a}function R(e,t,n,a,r){return!!r&&P(e,r,t,n,a,r)}function M(e,t,n,a,r){return!!a&&P(e,a,t,n,a,r)}function P(e,t,n,a,r,l){if("days"===n)return k(e)===k(t)&&b(e)===b(t);if("months"===n)return k(e)===k(t);if("years"===n){var i=B(a,r,l);return Math.floor((k(e)-i)/a)===Math.floor((k(t)-i)/a)}return!1}function V(e,t,n,a){var r,l;if(t){var i=function(e){return e.match(/[^(dmy)]{1,}/g)}(t);if(i){r=i[0]!==i[1]?i[0]+i[1]:i[0];var o=new RegExp("[".concat(r,"]")),c=e.split(o),u=null==t?void 0:t.split(o),s=-1!==(null==t?void 0:t.indexOf("mmm")),d=[];null==u||u.forEach((function(e,t){-1!==e.indexOf("yy")&&(d[0]={value:c[t],format:e}),-1!==e.indexOf("m")&&(d[1]={value:c[t],format:e}),-1!==e.indexOf("d")&&e.length<=2&&(d[2]={value:c[t],format:e})}));var m=void 0;return m=-1!==(null==t?void 0:t.indexOf("mmmm"))?n:a,N(Number(d[0].value),s?(l=d[1].value,m.findIndex((function(e){return e===l}))):Number(d[1].value)-1,Number(d[2].value))}}}function W(e,t,n,a,r,l){var i=v(e),o=O(v(e).toString()),c=n[y(e)],u=a[y(e)],s=b(e),d=O((b(e)+1).toString()),m=r[b(e)],f=l[b(e)],p=2===k(e).toString().length?k(e):k(e).toString().slice(2,4),g=k(e),h=t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g),w="";return h.forEach((function(e){switch(e){case"dddd":e=e.replace(e,u);break;case"ddd":e=e.replace(e,c);break;case"dd":e=e.replace(e,o);break;case"d":e=e.replace(e,i.toString());break;case"mmmm":e=e.replace(e,f);break;case"mmm":e=e.replace(e,m);break;case"mm":e=e.replace(e,d);break;case"m":e=e.replace(e,s.toString());break;case"yyyy":e=e.replace(e,g.toString());break;case"yy":e=e.replace(e,p.toString())}w+=e})),w}var H=e.createContext({view:"days",setView:null,activeDate:new Date,setActiveDate:null,selectedDate:new Date,setSelectedDate:null,weekdaysShort:[],monthsShort:[],monthsFull:[],min:void 0,max:void 0,setIsClosing:null,weekdaysFull:[],yearScope:[],tabCount:0,inline:!1,isOpen:!1,isClosing:!1}),j=function(t){var n=t.clearBtnText,a=t.cancelBtnText,r=t.okBtnText,i=t.setValue,o=t.selectDate,c=l(H),u=c.setActiveDate,s=c.setSelectedDate,d=c.setIsClosing,m=c.selectedDate;return e.createElement("div",{className:"datepicker-footer",style:{position:"static"}},e.createElement("button",{tabIndex:0,onClick:function(e){return function(e){e.currentTarget.blur(),u(new Date),s(void 0),i("")}(e)},className:"datepicker-footer-btn datepicker-clear-btn"},n),e.createElement("button",{tabIndex:0,onClick:function(){return d(!0)},className:"datepicker-footer-btn datepicker-cancel-btn"},a),e.createElement("button",{tabIndex:0,onClick:function(){return o(m)},className:"datepicker-footer-btn datepicker-ok-btn"},r))};j.defaultProps={okBtnText:"Ok",clearBtnText:"Clear",cancelBtnText:"Cancel"};var q=function(e,t,n,a,r,l){for(var i=[],o=b(e),c=b(D(e,-1)),u=b(D(e,1)),s=k(e),d=function(e,t,n){var a=n>0?7-n:0,r=new Date(e,t).getDay()+a;return r>=7?r-7:r}(s,o,l),m=h(e),f=h(D(e,-1)),p=1,y=!1,g=1;g<7;g++){var E=[];if(1===g){for(var x=f-d+1;x<=f;x++){var S=N(s,c,x);E.push({date:S,currentMonth:y,isSelected:t&&T(S,t),isToday:T(S,w()),dayNumber:v(S),disabled:F(S,n,a,r)})}y=!0;var C=7-E.length;for(x=0;x<C;x++){S=N(s,o,p);E.push({date:S,currentMonth:y,isSelected:t&&T(S,t),isToday:T(S,w()),dayNumber:v(S),disabled:F(S,n,a,r)}),p++}}else for(x=1;x<8;x++){p>m&&(p=1,y=!1);S=N(s,y?o:u,p);E.push({date:S,currentMonth:y,isSelected:t&&T(S,t),isToday:T(S,w()),dayNumber:v(S),disabled:F(S,n,a,r)}),p++}i.push(E)}return i},Y=function(t){var n=t.filter,a=t.startWeekdays,r=t.startDay,i=t.inlineDayClick,c=l(H),u=c.min,s=c.max,d=c.setActiveDate,m=c.setSelectedDate,f=c.activeDate,p=c.selectedDate,v=c.tabCount;return e.createElement("table",{className:"datepicker-table"},e.createElement("thead",null,e.createElement("tr",null,a.map((function(t,n){return e.createElement("th",{key:n,className:"datepicker-day-heading",scope:"col"},t)})))),e.createElement("tbody",{className:"datepicker-table-body"},q(f,p,u,s,n,r).map((function(t,a){return e.createElement("tr",{key:a},t.map((function(t,a){return e.createElement("td",{key:a,onClick:function(){var e;!F(e=t.date,u,s,n)&&(d(e),m(e),i(e))},tabIndex:T(t.date,f)?0:void 0,className:o("datepicker-cell","datepicker-small-cell","datepicker-day-cell",t.isToday&&"current",t.isSelected&&"selected",t.disabled&&"disabled",3===v&&T(t.date,f)&&"focused",b(f)!==b(t.date)&&"disabled")},e.createElement("div",{className:"datepicker-cell-content datepicker-small-cell-content",style:{display:t.currentMonth?"block":"none"}},t.dayNumber))})))}))))};Y.defaultProps={};var J=function(){var t=l(H),n=t.yearScope,a=t.setView,r=t.setActiveDate,i=t.activeDate,c=t.selectedDate,u=t.tabCount,s=t.min,d=t.max;return e.createElement("table",{className:"datepicker-table"},e.createElement("tbody",{className:"datepicker-table-body"},function(e){for(var t=[],n=e[0],a=[],r=0;r<24;r++)if(a.push(n+r),4===a.length){var l=a;t.push(l),a=[]}return t}(n).map((function(t,n){return e.createElement("tr",{key:n},t.map((function(t){return e.createElement("td",{key:t,onClick:function(){r(new Date(t,b(i),v(i))),a("months")},tabIndex:t===k(i)?0:void 0,className:o("datepicker-cell","datepicker-large-cell","datepicker-year-cell",c&&t===k(c)&&"selected",3===u&&t===k(i)&&"focused",L(t,s,d)&&"disabled",k(w())===t&&"current")},e.createElement("div",{className:"datepicker-cell-content datepicker-large-cell-content"},t))})))}))))};J.defaultProps={okBtnText:"Ok",clearBtnText:"Clear",cancelBtnText:"Cancel"};var U=function(){var t=l(H),n=t.monthsShort,a=t.setActiveDate,r=t.setView,i=t.activeDate,c=t.selectedDate,u=t.tabCount,s=t.min,d=t.max;return e.createElement("table",{className:"datepicker-table"},e.createElement("tbody",{className:"datepicker-table-body"},function(e){var t=[],n=[];return e.forEach((function(e){if(n.push(e),4===n.length){var a=n;t.push(a),n=[]}})),t}(n).map((function(t,l){return e.createElement("tr",{key:l},t.map((function(t){return e.createElement("td",{key:n.indexOf(t),onClick:function(){a(new Date(k(i),n.indexOf(t),g(i))),r("days")},tabIndex:n.indexOf(t)===b(i)?0:void 0,className:o("datepicker-cell","datepicker-large-cell","datepicker-month-cell",c&&n.indexOf(t)===b(c)&&k(i)===k(c)&&"selected",3===u&&n.indexOf(t)===b(i)&&"focused",b(w())===n.indexOf(t)&&k(w())===k(i)&&"current",A(n.indexOf(t),k(i),s,d)&&"disabled")},e.createElement("div",{className:"datepicker-cell-content datepicker-large-cell-content"},t))})))}))))};U.defaultProps={okBtnText:"Ok",clearBtnText:"Clear",cancelBtnText:"Cancel"};var z=function(t){var n=t.title,a=l(H),r=a.weekdaysShort,i=a.monthsShort,o=a.selectedDate;return e.createElement("div",{className:"datepicker-header"},e.createElement("div",{className:"datepicker-title"},e.createElement("span",{className:"datepicker-title-text"},n)),e.createElement("div",{className:"datepicker-date"},e.createElement("span",{className:"datepicker-date-text"},r[o?o.getDay():(new Date).getDay()],","," ",i[o?o.getMonth():(new Date).getMonth()]," ",o?o.getDate():(new Date).getDate())))},K=function(){var t=l(H),n=t.view,a=t.setView,r=t.activeDate,i=t.setActiveDate,o=t.monthsFull,c=t.min,u=t.max,s=t.yearScope,d=function(e){if("days"===n){var t=e?new Date(k(r),b(r)+1,g(r)):new Date(k(r),b(r)-1,g(r));e?!R(D(t,-1),"days",1,c,u)&&i(t):!M(D(t,1),"days",1,c,u)&&i(t)}else if("years"===n){t=e?new Date(k(r)+24,b(r),v(r)):new Date(k(r)-24,b(r),v(r));e?u?s[0]+24<k(u)&&i(t):i(t):c?s[1]-24>k(c)&&i(t):i(t)}else if("months"===n){t=e?new Date(k(r)+1,b(r),v(r)):new Date(k(r)-1,b(r),v(r));e?!R(E(t,-1),"months",1,c,u)&&i(t):!M(E(t,1),"months",1,c,u)&&i(t)}};return e.createElement("div",{className:"datepicker-date-controls"},"days"===n&&e.createElement("button",{tabIndex:0,className:"datepicker-view-change-button",onClick:function(){return a("years")}},o[r.getMonth()]," ",r.getFullYear()),"years"===n&&e.createElement("button",{tabIndex:0,className:"datepicker-view-change-button",onClick:function(){return a("days")}},s[0]," - ",s[1]),"months"===n&&e.createElement("button",{tabIndex:0,className:"datepicker-view-change-button",onClick:function(){return a("days")}},k(r)),e.createElement("div",{className:"datepicker-arrow-controls"},e.createElement("button",{tabIndex:0,className:"datepicker-previous-button",onClick:function(){return d(!1)}}),e.createElement("button",{tabIndex:0,className:"datepicker-next-button",onClick:function(){return d(!0)}})))},G=function(l){var i,c=l.className,u=l.size,m=l.contrast,f=l.value,p=l.defaultValue,v=l.id,y=l.labelClass,b=l.wrapperClass,k=l.wrapperStyle,g=l.wrapperTag,h=l.label,w=l.onChange,E=l.children,D=l.labelRef,x=l.labelStyle,N=l.inputRef,S=l.type,C=l.onBlur,T=l.readonly,O=d(l,["className","size","contrast","value","defaultValue","id","labelClass","wrapperClass","wrapperStyle","wrapperTag","label","onChange","children","labelRef","labelStyle","inputRef","type","onBlur","readonly"]),I=t(f||p),B=I[0],F=I[1],A=t(0),L=A[0],R=A[1],M=t(!(!f&&!p)),P=M[0],V=M[1],W=n(null),H=n(null),j=D||W,q=N||H,Y=o("form-outline",m&&"form-white",b),J=o("form-control",P&&"active","date"===S&&"active",u&&"form-control-".concat(u),c),U=o("form-label",y);r((function(){void 0!==f&&V(!!f)}),[f]),r((function(){void 0!==p&&V(!!p)}),[p]);var z=a((function(){var e;(null===(e=j.current)||void 0===e?void 0:e.clientWidth)&&R(.8*j.current.clientWidth+8)}),[j]);r((function(){z()}),[null===(i=j.current)||void 0===i?void 0:i.clientWidth,z]);return e.createElement(g,{className:Y,style:k},e.createElement("input",s({type:S,readOnly:T,className:J,onBlur:function(e){V(""!==B),null==C||C(e)},onChange:function(e){F(e.target.value),null==w||w(e)},onFocus:z,value:f,defaultValue:p,id:v,ref:q},O)),h&&e.createElement("label",{className:U,style:x,htmlFor:v,ref:j},h),e.createElement("div",{className:"form-notch"},e.createElement("div",{className:"form-notch-leading"}),e.createElement("div",{className:"form-notch-middle",style:{width:L}}),e.createElement("div",{className:"form-notch-trailing"})),E)};G.defaultProps={wrapperTag:"div",readonly:!1};var Q=function(t){var a=t.labelText,i=t.inline,c=t.setReferenceElement,u=t.inputClasses,m=t.value,f=t.style,p=t.inputStyle,v=t.setIsOpen,y=t.icon,b=t.input,k=t.inputToggle,g=t.setDatepickerValue,h=t.format,w=d(t,["labelText","inline","setReferenceElement","inputClasses","value","style","inputStyle","setIsOpen","icon","input","inputToggle","setDatepickerValue","format"]),E=l(H),D=E.monthsFull,x=E.monthsShort,N=E.setSelectedDate,C=E.setActiveDate,T=o(m?"active":"",u),O=n(null);r((function(){var e;if(!k){var t=null===(e=O.current)||void 0===e?void 0:e.parentNode,n=function(e,t,n){var a=document.createElement("button"),r=document.createElement("div");a.id="datepicker-toggle-".concat(Math.floor(10001*Math.random())),a.tabIndex=0,a.type="button",a.style.pointerEvents="auto";var l=document.createElement("i");l.className="".concat(e," fa-").concat(t," datepicker-icon"),n&&a.appendChild(l);var i=n?a:l;return i.classList.add("datepicker-toggle-button"),{div:r,selector:i}}(y,"sm",!0),a=n.div,r=n.selector;return null==t||t.insertBefore(a,O.current),null==t||t.insertBefore(r,O.current),r.addEventListener("click",(function(){return v((function(e){return!e}))})),function(){r.removeEventListener("click",(function(){return v((function(e){return!e}))})),null==t||t.removeChild(r)}}}),[y,v,k]);return e.createElement(G,s({className:T,label:a,inputRef:i?c:b,labelRef:O,wrapperClass:"datepicker",value:m,onChange:function(e){var t=V(e.target.value,h,D,x);g(e.target.value),t&&S(t)?(C(t),N(t)):(C(new Date),N(void 0))},style:p,wrapperStyle:f,onClick:function(){k&&v(!0)}},w))},X=function(e){var l=e.setIsClosing,i=e.closeOnEsc,o=e.isOpen,c=e.activeDate,u=e.setActiveDate,s=e.min,d=e.max,m=e.view,f=e.setView,p=e.setSelectedDate,y=e.filter,g=e.setInlineDate,w=t(3),N=w[0],S=w[1],C=n(null),T=a((function(e){var t,n,a;if(i&&"Escape"===e.key&&l(!0),e.preventDefault(),e.shiftKey||"Tab"!==e.key){if("Enter"===e.key)3!==N&&document.activeElement&&document.activeElement.click();else if(e.shiftKey&&"Tab"===e.key){var r;(r=null===(n=C.current)||void 0===n?void 0:n.querySelectorAll('[tabindex="0"]'))&&S(0===N?r.length-1:N-1)}}else(r=null===(t=C.current)||void 0===t?void 0:t.querySelectorAll('[tabindex="0"]'))&&(N===r.length-1?S(0):S(N+1));(null===(a=C.current)||void 0===a?void 0:a.querySelector(".focused"))&&4!==N&&("days"===m?function(e,t,n,a,r,l,i,o){switch(e){case"ArrowLeft":t((function(e){return x(e,-1)}));break;case"ArrowRight":t((function(e){return x(e,1)}));break;case"ArrowUp":t((function(e){return x(e,-7)}));break;case"ArrowDown":t((function(e){return x(e,7)}));break;case"Home":t((function(e){return x(e,1-v(e))}));break;case"End":t((function(e){return x(e,h(e)-v(e))}));break;case"PageUp":t((function(e){return D(e,-1)}));break;case"PageDown":t((function(e){return D(e,1)}));break;case"Enter":if(F(n,a,r,i))return;o(n),l(n);break;case" ":if(!i||i(n)){if(F(n,a,r,i))return;o(n),l(n)}break;default:;}}(e.key,u,c,s,d,p,y,g):"years"===m?function(e,t,n,a,r,l,i){switch(e){case"ArrowLeft":n((function(e){return E(e,-1)}));break;case"ArrowRight":n((function(e){return E(e,1)}));break;case"ArrowUp":n((function(e){return E(e,-4)}));break;case"ArrowDown":n((function(e){return E(e,4)}));break;case"Home":n((function(e){return E(e,-I(e,24))}));break;case"End":n((function(e){return E(e,24-I(e,24)-1)}));break;case"PageUp":n((function(e){return E(e,-24)}));break;case"PageDown":n((function(e){return E(e,24)}));break;case"Enter":!L(k(t),a,r)&&l("months");break;case" ":return void(!L(k(t),a,r)&&i(t));default:;}}(e.key,c,u,s,d,f,p):"months"===m&&function(e,t,n,a,r,l,i,o){switch(e){case"ArrowLeft":n((function(e){return D(e,-1)}));break;case"ArrowRight":n((function(e){return D(e,1)}));break;case"ArrowUp":n((function(e){return D(e,-4)}));break;case"ArrowDown":n((function(e){return D(e,4)}));break;case"Home":n((function(e){return D(e,-b(e))}));break;case"End":n((function(e){return D(e,11-b(e))}));break;case"PageUp":n((function(e){return E(e,-1)}));break;case"PageDown":n((function(e){return E(e,1)}));break;case"Enter":!F(t,a,r,o)&&l("days");break;case" ":return void(!F(t,a,r,o)&&i(t));default:;}}(e.key,c,u,s,d,f,p,y))}),[c,m,y,d,s,i,N,l,f,u,p,g]);return r((function(){var e,t,n=null===(e=C.current)||void 0===e?void 0:e.querySelectorAll('[tabindex="0"]');if(n){var a=n[N];if("TD"!==a.tagName){a.focus();var r=null===(t=C.current)||void 0===t?void 0:t.querySelector(".focused");null==r||r.classList.remove("focused")}else n[N-1].blur(),a.classList.add("focused")}}),[N]),r((function(){return o&&document.addEventListener("keydown",T),function(){document.removeEventListener("keydown",T)}}),[T,o]),{tabCount:N,modalRef:C}},Z=function(l){var o=l.closeOnEsc,v=void 0===o?p.closeOnEsc:o,y=l.title,b=void 0===y?p.title:y,g=l.weekdaysNarrow,h=void 0===g?p.weekdaysNarrow:g,w=l.monthsFull,E=void 0===w?p.monthsFull:w,D=l.monthsShort,x=void 0===D?p.monthsShort:D,N=l.weekdaysFull,C=void 0===N?p.weekdaysFull:N,T=l.weekdaysShort,O=void 0===T?p.weekdaysShort:T,B=l.filter,F=l.inline,A=l.className,L=l.min,R=l.max,M=l.format,P=void 0===M?p.format:M,q=l.okBtnText,G=void 0===q?p.okBtnText:q,Z=l.clearBtnText,$=void 0===Z?p.clearBtnText:Z,_=l.cancelBtnText,ee=void 0===_?p.cancelBtnText:_,te=l.inputToggle,ne=l.customIcon,ae=void 0===ne?p.customIcon:ne,re=l.inputLabel,le=void 0===re?p.inputLabel:re,ie=l.inputStyle,oe=l.startDay,ce=void 0===oe?p.startDay:oe,ue=l.views,se=void 0===ue?p.views:ue,de=l.style,me=l.defaultValue,fe=void 0===me?"":me,pe=l.onChange,ve=l.onClose,ye=l.onOpen,be=l.value,ke=l.wrapperClass,ge=d(l,["closeOnEsc","title","weekdaysNarrow","monthsFull","monthsShort","weekdaysFull","weekdaysShort","filter","inline","className","min","max","format","okBtnText","clearBtnText","cancelBtnText","inputToggle","customIcon","inputLabel","inputStyle","startDay","views","style","defaultValue","onChange","onClose","onOpen","value","wrapperClass"]),he=t(!1),we=he[0],Ee=he[1],De=t(!1),xe=De[0],Ne=De[1],Se=t(new Date),Ce=Se[0],Te=Se[1],Oe=t(new Date),Ie=Oe[0],Be=Oe[1],Fe=t(se),Ae=Fe[0],Le=Fe[1],Re=t(be||fe),Me=Re[0],Pe=Re[1],Ve=t(!1),We=Ve[0],He=Ve[1],je=t(),qe=je[0],Ye=je[1],Je=t(),Ue=Je[0],ze=Je[1],Ke=t(h),Ge=Ke[0],Qe=Ke[1],Xe=t([0,0]),Ze=Xe[0],$e=Xe[1],_e=n(null),et=n(null),tt=n(fe&&!0),nt=c(Ue,qe,s({placement:"bottom-start",modifiers:[u]},{})),at=nt.styles,rt=nt.attributes,lt=function(e){if(F&&F){var t=W(e,P,O,C,x,E);Pe(t),Ne(!0)}},it=X({setIsClosing:Ne,closeOnEsc:v,isOpen:we,activeDate:Ce,setActiveDate:Te,min:L,max:R,view:Ae,setView:Le,setSelectedDate:Be,filter:B,setInlineDate:lt}),ot=it.tabCount,ct=it.modalRef;return function(e){var t=e.isOpen,n=e.inline;r((function(){var e=window.innerWidth>document.documentElement.clientWidth&&window.innerWidth>=576;if(!n)return t&&e?(document.body.style.overflow="hidden",document.body.style.paddingRight="17px"):(document.body.style.overflow="",document.body.style.paddingRight=""),function(){document.body.style.overflow="",document.body.style.paddingRight=""}}),[t,n])}({isOpen:we,inline:F}),function(e){var t=e.isOpen,n=e.inline,l=e.popperElement,i=e.referenceElement,o=e.setIsClosing,c=e.backdropRef,u=a((function(e){var t;n?!((null==l?void 0:l.contains(e.target))||(null===(t=null==i?void 0:i.parentNode)||void 0===t?void 0:t.contains(e.target))||e.target.classList.contains("datepicker-view-change-button")||e.target.classList.contains("datepicker-large-cell-content"))&&o(!0):e.target===c.current&&o(!0)}),[l,i,c,n,o]);r((function(){return t&&document.addEventListener("click",u),function(){document.removeEventListener("click",u)}}),[u,t])}({isOpen:we,inline:F,referenceElement:Ue,popperElement:qe,setIsClosing:Ne,backdropRef:_e}),r((function(){var e=k(Ce)-I(Ce,24);$e([e,e+23])}),[Ce]),r((function(){var e=h.slice(ce).concat(h.slice(0,ce));Qe(e)}),[h,ce]),r((function(){if(xe){var e=F?Ue:et.current,t=null==e?void 0:e.parentNode,n=null==t?void 0:t.querySelector("button");n?n.focus():null==e||e.focus(),null==ve||ve();var a=setTimeout((function(){Ee(!1),He(!1)}),300);return function(){clearTimeout(a)}}}),[xe,et,Ue,F,ve]),r((function(){if(we){var e=F?Ue:et.current,t=null==e?void 0:e.parentNode,n=null==t?void 0:t.querySelector("button");n?n.blur():null==e||e.blur(),null==ye||ye()}}),[we,et,Ue,F,ye]),r((function(){if(tt.current){var e=V(Me,P,E,x);e&&S(e)&&(Te(e),Be(e)),tt.current=!1}}),[fe,Me,P,E,x]),r((function(){var e=be&&V(be,P,E,x);e&&S(e)&&(Te(e),Be(e),Pe(be))}),[be,P,E,x]),r((function(){we||(Ne(!1),Le(se),Me||(Te(new Date),Be(void 0)))}),[we,se,Me]),r((function(){null==pe||pe(Me,Ce)}),[Me]),r((function(){var e=setTimeout((function(){we&&He(!0)}),10);return function(){clearTimeout(e)}}),[we]),e.createElement(H.Provider,{value:{view:Ae,setView:Le,activeDate:Ce,setActiveDate:Te,selectedDate:Ie,setSelectedDate:Be,weekdaysShort:O,monthsShort:x,monthsFull:E,min:L,max:R,setIsClosing:Ne,weekdaysFull:C,yearScope:Ze,tabCount:ot,isClosing:xe,isOpen:we}},e.createElement(e.Fragment,null,e.createElement(Q,s({inputClasses:A,labelText:le,inline:F,setReferenceElement:ze,value:Me,setDatepickerValue:Pe,setIsOpen:Ee,style:de,inputStyle:ie,format:P,icon:ae,input:et,inputToggle:te},ge)),we&&i.createPortal(e.createElement(e.Fragment,null,e.createElement(f,{className:ke,dropdown:F,isOpen:xe,styles:at,attributes:rt,setPopperElement:Ye,style:{display:We?"block":"none"}},!F&&e.createElement(z,{title:b}),e.createElement("div",{className:"datepicker-main",ref:ct},e.createElement(K,null),e.createElement("div",{className:"datepicker-view"},"days"===Ae&&e.createElement(Y,{startWeekdays:Ge,startDay:ce,filter:B,inlineDayClick:lt}),"years"===Ae&&e.createElement(J,null),"months"===Ae&&e.createElement(U,null)),!F&&e.createElement(j,{okBtnText:G,clearBtnText:$,cancelBtnText:ee,setValue:Pe,selectDate:function(e){var t=e&&W(e,P,O,C,x,E);t&&Pe(t),Ne(!0)}}))),!F&&e.createElement(m,{tag:"div",animation:xe?"fade-out":"fade-in",start:"onLoad",animationRef:_e,className:"datepicker-backdrop",style:{display:We?"block":"none"},duration:300})),document.body)))};export{Z as default};