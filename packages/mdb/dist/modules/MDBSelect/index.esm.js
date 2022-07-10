import e from"clsx";import t,{useState as n,useRef as l,useEffect as a,useCallback as r,useMemo as c}from"react";import{usePopper as i}from"react-popper";import o from"react-dom";var s=function(){return s=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)};function u(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(n[l[a]]=e[l[a]])}return n}function d(e,t){for(var n=0,l=t.length,a=e.length;n<l;n++,a++)e[a]=t[n];return e}var f=function(c){var i,o=c.className,d=c.size,f=c.contrast,p=c.value,m=c.defaultValue,v=c.id,h=c.labelClass,b=c.wrapperClass,g=c.wrapperStyle,y=c.wrapperTag,N=c.label,x=c.onChange,w=c.children,E=c.labelRef,T=c.labelStyle,C=c.inputRef,k=c.type,S=c.onBlur,L=c.readonly,O=u(c,["className","size","contrast","value","defaultValue","id","labelClass","wrapperClass","wrapperStyle","wrapperTag","label","onChange","children","labelRef","labelStyle","inputRef","type","onBlur","readonly"]),R=n(p||m),P=R[0],A=R[1],F=n(0),B=F[0],I=F[1],j=n(!(!p&&!m)),z=j[0],W=j[1],D=l(null),H=l(null),V=E||D,q=C||H,M=e("form-outline",f&&"form-white",b),U=e("form-control",z&&"active","date"===k&&"active",d&&"form-control-".concat(d),o),K=e("form-label",h);a((function(){void 0!==p&&W(!!p)}),[p]),a((function(){void 0!==m&&W(!!m)}),[m]);var G=r((function(){var e;(null===(e=V.current)||void 0===e?void 0:e.clientWidth)&&I(.8*V.current.clientWidth+8)}),[V]);a((function(){G()}),[null===(i=V.current)||void 0===i?void 0:i.clientWidth,G]);return t.createElement(y,{className:M,style:g},t.createElement("input",s({type:k,readOnly:L,className:U,onBlur:function(e){W(""!==P),null==S||S(e)},onChange:function(e){A(e.target.value),null==x||x(e)},onFocus:G,value:p,defaultValue:m,id:v,ref:q},O)),N&&t.createElement("label",{className:K,style:T,htmlFor:v,ref:V},N),t.createElement("div",{className:"form-notch"},t.createElement("div",{className:"form-notch-leading"}),t.createElement("div",{className:"form-notch-middle",style:{width:B}}),t.createElement("div",{className:"form-notch-trailing"})),w)};f.defaultProps={wrapperTag:"div",readonly:!1};var p=t.forwardRef((function(n,l){var a=n.className,r=n.open,c=n.tag,i=n.children,o=u(n,["className","open","tag","children"]),d=e("select-dropdown",r&&"open",a);return t.createElement(c,s({className:d},o,{ref:l}),i)}));p.defaultProps={tag:"div"};var m=t.forwardRef((function(n,l){var a=n.className,r=n.tag,c=n.children,i=u(n,["className","tag","children"]),o=e("select-option-icon-container",a);return t.createElement(r,s({className:o},i,{ref:l}),c)}));m.defaultProps={tag:"span"};var v=function(n){var l=n.className,a=n.inputRef,r=n.labelClass,c=n.wrapperClass,i=n.labelStyle,o=n.wrapperTag,d=n.wrapperStyle,f=n.label,p=n.inline,m=n.btn,v=n.id,h=n.btnColor,b=n.disableWrapper,g=n.toggleSwitch,y=u(n,["className","inputRef","labelClass","wrapperClass","labelStyle","wrapperTag","wrapperStyle","label","inline","btn","id","btnColor","disableWrapper","toggleSwitch"]),N="form-check-input",x="form-check-label";m&&(N="btn-check",x=h?"btn btn-".concat(h):"btn btn-primary");var w=e(f&&!m&&"form-check",p&&!m&&"form-check-inline",g&&"form-switch",c),E=e(N,l),T=e(x,r),C=t.createElement(t.Fragment,null,t.createElement("input",s({className:E,id:v,ref:a},y)),f&&t.createElement("label",{className:T,style:i,htmlFor:v},f));return t.createElement(t.Fragment,null,b?C:t.createElement(o,{style:d,className:w},C))};v.defaultProps={wrapperTag:"div"};var h=function(e){var n=u(e,[]);return t.createElement(v,s({type:"checkbox"},n))},b=function(l){var c=l.className,i=l.tag,o=l.disabled,d=l.height,f=l.active,p=l.children,m=l.selected,v=l.style,b=l.secondaryText,g=l.text,y=l.revert,N=l.onClick,x=l.multiple,w=u(l,["className","tag","disabled","height","active","children","selected","style","secondaryText","text","revert","onClick","multiple"]),E=e(void 0!==c&&(null==c?void 0:c.includes("select-no-results"))?"":"select-option",m&&"selected",o&&"disabled",f&&"active",c),T=n(d),C=T[0],k=T[1],S=n(!1),L=S[0],O=S[1];a((function(){b&&void 0===d?k(44):void 0===d&&k(38)}),[b,d]);var R=r((function(e){o||(N&&N(e),O(!L))}),[L,o,N]);return a((function(){x&&O(!(!m||o))}),[m,o,x]),t.createElement(i,s({className:E,style:s({height:C},v),onClick:R},w,{role:"option"}),y?t.createElement(t.Fragment,null,p,t.createElement("div",{className:"select-option-text"},x&&t.createElement(h,{label:g,onChange:R,checked:L,disabled:o}),!x&&g,b&&t.createElement("span",{className:"select-option-secondary-text"},b))):t.createElement(t.Fragment,null,t.createElement("div",{className:"select-option-text"},x&&t.createElement(h,{label:g,onChange:R,checked:L,disabled:o}),!x&&g,b&&t.createElement("span",{className:"select-option-secondary-text"},b)),p))};b.defaultProps={tag:"span",revert:!1};var g=t.forwardRef((function(n,l){var a=n.className,r=n.tag,c=n.children,i=u(n,["className","tag","children"]),o=e("select-option-icon",a);return t.createElement(r,s({className:o},i,{ref:l}),c)}));g.defaultProps={tag:"img"};var y=t.forwardRef((function(n,l){var a=n.className,r=n.tag,c=n.children,i=u(n,["className","tag","children"]),o=e("select-options-list",a);return t.createElement(r,s({className:o},i,{ref:l}),c)}));y.defaultProps={tag:"div"};var N=t.forwardRef((function(n,l){var a=n.className,r=n.tag,c=n.children,i=n.maxHeight,o=u(n,["className","tag","children","maxHeight"]),d=e("select-options-wrapper",a);return t.createElement(r,s({className:d,style:{maxHeight:i}},o,{ref:l}),c)}));N.defaultProps={tag:"div"};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var l=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&l.firstChild?l.insertBefore(a,l.firstChild):l.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".select-input-label-active {\n  color: #1266f1 !important;\n}\n");var x=function(v){var h=v.children,x=v.className,w=v.clearBtn,E=v.data,T=v.tag,C=v.tagWrapper,k=v.visibleOptions,S=v.placeholder,L=v.disabled,O=v.search,R=v.getValue,P=v.multiple,A=v.optionSelected,F=v.optionsSelectedLabel,B=v.label,I=v.getData,j=v.selectAllLabel,z=v.noResultLabel,W=v.searchLabel,D=v.size,H=v.validation,V=v.validFeedback,q=v.invalidFeedback,M=v.inputClassName,U=v.searchAriaLabel,K=u(v,["children","className","clearBtn","data","tag","tagWrapper","visibleOptions","placeholder","disabled","search","getValue","multiple","optionSelected","optionsSelectedLabel","label","getData","selectAllLabel","noResultLabel","searchLabel","size","validation","validFeedback","invalidFeedback","inputClassName","searchAriaLabel"]),G=n(!1),J=G[0],Q=G[1],X=n(""),Y=X[0],Z=X[1],$=n(!1),_=$[0],ee=$[1],te=n(!1),ne=te[0],le=te[1],ae=n(""),re=ae[0],ce=ae[1],ie=l(null),oe=n(null),se=oe[0],ue=oe[1],de=n(E),fe=de[0],pe=de[1],me=n(""),ve=me[0],he=me[1],be=n(!1),ge=be[0],ye=be[1],Ne=n([]),xe=Ne[0],we=Ne[1],Ee=n(!1),Te=Ee[0],Ce=Ee[1],ke=n(E),Se=ke[0],Le=ke[1],Oe=n(),Re=Oe[0],Pe=Oe[1],Ae=n(),Fe=Ae[0],Be=Ae[1],Ie=n(fe.findIndex((function(e){return!e.disabled&&e.selected}))),je=Ie[0],ze=Ie[1],We=l(null),De=n(!1),He=De[0],Ve=De[1],qe=l(null),Me=n(0),Ue=Me[0],Ke=Me[1],Ge=n(!1),Je=Ge[0],Qe=Ge[1],Xe=n(!1),Ye=Xe[0],Ze=Xe[1],$e=l(null),_e=i(Re,Fe,{placement:"bottom-start"}),et=_e.styles,tt=_e.attributes,nt=e("select-wrapper",x),lt=e("select-input",S&&"placeholder-active",ge&&B&&"active",J&&"focused","default"!==D&&"form-control-".concat(D),M);a((function(){pe(E),Le(E);var e=E.filter((function(e){return!0===e.selected&&!e.disabled}));e.length>0&&ce(e[0].text)}),[E]),a((function(){var e=[];fe.forEach((function(t){t.selected&&e.push({text:t.text,value:t.value})})),R&&e&&R(P?e:e[0])}),[re]),a((function(){_&&O&&setTimeout((function(){var e;null===(e=qe.current)||void 0===e||e.focus()}),100)}),[_,O]);var at=r((function(){null!=Re&&_&&setTimeout((function(){var e,t=null===(e=Re.parentNode)||void 0===e?void 0:e.parentNode.getBoundingClientRect();Z(t.width)}),100)}),[Re,_]);a((function(){var e,t;if(V&&q&&Re){if(V){var n=document.createElement("div");n.classList.add("valid-feedback"),n.innerHTML=V,Re.setAttribute("required","true"),null===(e=Re.parentNode)||void 0===e||e.insertBefore(n,Re.nextSibling)}if(q){var l=document.createElement("div");l.classList.add("invalid-feedback"),l.innerHTML=q,Re.setAttribute("required","true"),null===(t=Re.parentNode)||void 0===t||t.insertBefore(l,Re.nextSibling)}}}),[V,q,Re]),a((function(){at()}),[at]);var rt=r((function(e){Fe&&null!==Fe&&J&&Re&&null!==Re&&(Fe.contains(e.target)||Re.contains(e.target)?ye(!0):(Q(!1),ye(!1),O&&setTimeout((function(){he("")}),100)))}),[J,Fe,Re,O]),ct=r((function(){Q(!J),O&&he("")}),[J,O]);a((function(){if(He&&!_&&void 0!==Ue)if(P)Q(!0);else{var e=E.map((function(e,t){return s(s({},e),t===Ue?{selected:!0,active:!0}:{selected:!1,active:!1})}));Ue<=0?ce(e[0].text):Ue>=e.length-1?ce(e[e.length-1].text):ce(e[Ue].text);for(var t=[],n=function(n){t.push(s(s({},E[n]),e.find((function(e){return e.text===E[n].text}))))},l=0;l<E.length;l++)n(l);I&&I(t),Le(t),pe(t)}return function(){clearTimeout(undefined)}}),[Ue]),a((function(){var e,t;return J?(ee(!0),B&&ye(!0),t=setTimeout((function(){le(!0)}),100)):(e=setTimeout((function(){ee(!1)}),100),B&&ye(!1),le(!1)),function(){clearTimeout(e),clearTimeout(t)}}),[J,B]),a((function(){if(P)if(Te){var e=fe.map((function(e){return s(s({},e),{selected:!0,active:!0})}));pe(e);var t=e.filter((function(e){return!e.disabled})).map((function(e){return e.text}));we(t),ce("".concat(t.length," option").concat(t.length<=1?"":"s"," selected"))}else{pe(Se);t=Se.filter((function(e){return!e.disabled&&e.selected})).map((function(e){return e.text}));we(t),ce("".concat(t.length," option").concat(t.length<=1?"":"s"," selected"))}}),[Te]),a((function(){P&&(xe.length>=Number(A)?ce(F||"".concat(xe.length," option").concat(xe.length<=1?"":"s"," selected")):ce(xe.join(", ")))}),[xe,P,A,F]),a((function(){if(P){t=E.map((function(e){return void 0===e.selected?s(s({},e),{active:!1,selected:!1}):s(s({},e),{active:!0})}));pe(t);var e=Se.filter((function(e){return!0===e.selected&&!e.disabled})).map((function(e){return e.text}));we(e),xe.length>=Number(A)?ce("".concat(xe.length," option").concat(xe.length<=1?"":"s"," selected")):ce(xe.join(", "))}else{var t,n=(t=fe.map((function(e){return void 0===e.selected?s(s({},e),{active:!1,selected:!1}):s(s({},e),{active:!0})}))).filter((function(e){return!0===e.selected&&!e.disabled}));n.length>0&&(pe(t),ce(n[0].text)),I&&I(t)}}),[]),a((function(){return _&&window.addEventListener("resize",at),function(){window.removeEventListener("resize",at)}}),[at,_]),a((function(){return _&&window.addEventListener("click",rt),function(){window.removeEventListener("click",rt)}}),[rt,_]);var it=r((function(e,t,n){return void 0===n&&(n=k),d([],e).slice(0,n).forEach((function(e){var n=getComputedStyle(e).height;t.push(parseFloat(n))})),t}),[k]);a((function(){var e,t;if(_){var n=null===(e=ie.current)||void 0===e?void 0:e.children,l=[];t=setTimeout((function(){void 0!==n&&(it(n,l),ue(l.reduce((function(e,t){return e+t}))))}),0)}return function(){clearTimeout(t)}}),[_,k,it]);var ot=r((function(e,t){var n=e.disabled,l=e.className,a=e.text,r=e.selected;if(!(n||void 0!==l&&l.includes("select-no-results")))if(P)fe[t].selected=!fe[t].selected,pe(fe),Le(fe),void 0===a||r&&void 0!==r?void 0!==a&&r&&we(xe.filter((function(e){return e!==a}))):we(d(d([],xe),[a]));else{ze(t),ce(a),Q(!1);for(var c=fe.map((function(e,n){return n!==t?(e.selected=!1,e.active=!1):(e.selected=!0,e.active=!0),e})),i=E.map((function(e){return s(s({},e),{active:!1,selected:!1})})),o=[],u=function(e){o.push(s(s({},i[e]),c.find((function(t){return t.text===i[e].text}))))},f=0;f<i.length;f++)u(f);pe(o),Le(o),I&&I(o)}}),[E,fe,I,P,xe]),st=r((function(e,t,n){var l=0;return n?((l=e-1)<0&&(l=0),t[l].disabled&&(l=st(l,t,!0))):((l=e+1)>t.length-1&&(l=t.length-1),t[l].disabled&&(l=st(l,t,!1))),l}),[]),ut=r((function(e){var t=e.key;if("Escape"===t||"ArrowDown"===t||"ArrowUp"===t||"Enter"===t){var n,l,a;if(e.preventDefault(),"Escape"===t&&(n=setTimeout((function(){ee(!1),O&&he("")}),100),Q(!1),le(!1)),"ArrowDown"===t){var r=_?fe.findIndex((function(e){return e.active})):fe.findIndex((function(e){return e.selected})),c=st(r,fe,!1);_?(Qe(!1),Ze(!0),ze(c)):Ke(c)}if("ArrowUp"===t){r=_?fe.findIndex((function(e){return e.active})):fe.findIndex((function(e){return e.selected})),c=st(r,fe,!0);_?(Qe(!0),Ze(!1),ze(c)):Ke(c)}if("Enter"===t)if(_)if(P){r=fe.findIndex((function(e){return e.active}));ot(fe[r],r)}else{a=setTimeout((function(){ee(!1),O&&he("")}),100);var i=fe.filter((function(e){return e.active&&!e.disabled}))[0],o=fe.findIndex((function(e){return e.active&&!e.disabled})),u=Se.map((function(e,t){return s(s({},e),t===o?{selected:!0}:{selected:!1})}));ce(i.text),Q(!1),le(!1),pe(u),Le(u)}else l=setTimeout((function(){ee(!0),Q(!0),le(!0)}),100);return function(){clearTimeout(n),clearTimeout(l),clearTimeout(a)}}}),[O,fe,P,ot,Se,_,st]);a((function(){var e,t=$e.current;if(null!==ie){var n=[],l=[];if(_){var a=null===(e=ie.current)||void 0===e?void 0:e.children;setTimeout((function(){if(it(a,n,E.length),it(a,l,je),0!==l.length){var e=l.reduce((function(e,t){return e+t}));null!==se&&null!==t&&e>se&&(t.scrollTop=e)}}),100)}}}),[_,je]),a((function(){var e,t=$e.current;if(null!==ie){var n=[],l=[];if(_){var a=null===(e=ie.current)||void 0===e?void 0:e.children;setTimeout((function(){it(a,n,E.length),it(a,l,je+2);var e=n.reduce((function(e,t){return e+t})),r=l.reduce((function(e,t){return e+t})),c=fe.map((function(e,t){return s(s({},e),t===je?{active:!0}:{active:!1})}));pe(c),null!==se&&null!==t&&(Ye&&(t.scrollTop=r>se?r-se:0),Je&&(t.scrollTop=r<=se?r-76:e))}),100)}}}),[_,E,Ye,Je,it,je,se]),a((function(){return He&&window.addEventListener("keydown",ut),function(){window.removeEventListener("keydown",ut)}}),[He,ut]),a((function(){if(P){var e=fe.filter((function(e){return e.selected&&!e.disabled})),t=fe.filter((function(e){return!e.disabled}));e.length!==t.length?Ce(!1):Ce(!0)}}),[fe,P]);return c((function(){if(_&&O){var e=Se.filter((function(e){return e.text.toLowerCase().includes(ve.toLowerCase())}));0===e.length?pe([{text:z,className:"select-no-results"}]):pe(e)}}),[_,Se,O,z,ve]),t.createElement(T,{className:nt,ref:We},t.createElement(f,s({onFocus:function(){return Ve(!0)},onBlur:function(){return Ve(!1)},value:re,className:lt,labelClass:e(J?"select-input-label-active":"","select-label"),inputRef:Pe,onClick:ct,readOnly:!H,required:H,placeholder:S,disabled:L,wrapperStyle:{zIndex:0},label:B,"aria-expanded":!!_,"aria-disabled":!!L,"aria-haspopup":!0,role:"listbox"},K),void 0!==re&&re.length>0&&w&&t.createElement("span",{className:"select-clear-btn d-block",role:"button",onClick:function(){ce(""),ye(!1),pe(E.map((function(e){return s(s({},e),{active:!1,selected:!1})}))),Le(E.map((function(e){return s(s({},e),{active:!1,selected:!1})})))}},"✕"),t.createElement("span",{className:"select-arrow",style:{zIndex:-1}})),_&&o.createPortal(t.createElement(C,s({style:s(s({},et.popper),{width:Y,zIndex:1070})},tt.popper,{ref:Be}),t.createElement(p,{open:ne},O&&t.createElement("div",{className:"input-group"},t.createElement(f,{wrapperStyle:{width:"100%"},className:"select-filter-input placeholder-active",placeholder:W,role:"searchbox",type:"text",onKeyDown:ut,onChange:function(e){he(e.target.value)},value:ve,inputRef:qe,"aria-label":U})),t.createElement(N,{ref:$e,maxHeight:se},t.createElement(y,{ref:ie},P&&t.createElement(b,{onClick:function(){Ce(!Te)},selected:Te,height:38,text:j,multiple:!0}),fe.map((function(e,n){return t.createElement(b,{onClick:function(){return ot(e,n)},onChange:function(){return ot(e,n)},"data-value":e.value,active:e.active,className:e.className,height:e.height,style:e.style,selected:e.selected,key:e.text+n,disabled:e.disabled,secondaryText:e.secondaryText,text:e.text,revert:e.revert,multiple:P},e.icon&&t.createElement(m,null,"object"!=typeof e.icon||e.icon.constructor!==Object||t.isValidElement(e.icon)?e.icon:t.createElement(g,{className:e.icon.className,src:e.icon.src?e.icon.src:""},e.icon.text)))})),h&&t.createElement("div",{className:"select-custom-content"},h))))),document.body))};x.defaultProps={noResultLabel:"No results",optionSelected:"5",searchLabel:"Search...",selectAllLabel:"Select all",tag:"div",tagWrapper:"div",visibleOptions:5,size:"default",validation:!1,searchAriaLabel:"Search"};export{x as default};