(this["webpackJsonpbiorhythm-calculator"]=this["webpackJsonpbiorhythm-calculator"]||[]).push([[1],{207:function(e,t,n){e.exports=n(406)},213:function(e,t,n){var a={"./ion-action-sheet.entry.js":[408,5],"./ion-alert.entry.js":[409,6],"./ion-app_8.entry.js":[410,7],"./ion-avatar_3.entry.js":[411,18],"./ion-back-button.entry.js":[412,19],"./ion-backdrop.entry.js":[413,43],"./ion-button_2.entry.js":[414,20],"./ion-card_5.entry.js":[415,21],"./ion-checkbox.entry.js":[416,22],"./ion-chip.entry.js":[417,23],"./ion-col_3.entry.js":[418,44],"./ion-datetime_3.entry.js":[419,10],"./ion-fab_3.entry.js":[420,24],"./ion-img.entry.js":[421,45],"./ion-infinite-scroll_2.entry.js":[422,46],"./ion-input.entry.js":[423,25],"./ion-item-option_3.entry.js":[424,26],"./ion-item_8.entry.js":[425,27],"./ion-loading.entry.js":[426,28],"./ion-menu_3.entry.js":[427,29],"./ion-modal.entry.js":[428,8],"./ion-nav_2.entry.js":[429,15],"./ion-popover.entry.js":[430,9],"./ion-progress-bar.entry.js":[431,30],"./ion-radio_2.entry.js":[432,31],"./ion-range.entry.js":[433,32],"./ion-refresher_2.entry.js":[434,11],"./ion-reorder_2.entry.js":[435,17],"./ion-ripple-effect.entry.js":[436,47],"./ion-route_4.entry.js":[437,33],"./ion-searchbar.entry.js":[438,34],"./ion-segment_2.entry.js":[439,35],"./ion-select_3.entry.js":[440,36],"./ion-slide_2.entry.js":[441,48],"./ion-spinner.entry.js":[442,13],"./ion-split-pane.entry.js":[443,49],"./ion-tab-bar_2.entry.js":[444,37],"./ion-tab_2.entry.js":[445,16],"./ion-text.entry.js":[446,38],"./ion-textarea.entry.js":[447,39],"./ion-toast.entry.js":[448,40],"./ion-toggle.entry.js":[449,12],"./ion-virtual-scroll.entry.js":[450,50]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=213,e.exports=r},215:function(e,t,n){var a={"./ion-icon.entry.js":[454,57]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=215,e.exports=r},405:function(e,t,n){},406:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(36),o=n.n(l),i=n(21),c=n(7),u=n(29),s=n.n(u);function m(e,t,n){s()(e).startOf("day");var a=s()(t).startOf("day").diff(e,"days");return Math.sin(2*Math.PI*a/n)}function y(e,t){return{physical:m(e,t,23),Emotional:m(e,t,28),intellectual:m(e,t,33)}}var j=n(26);var d=function(e){var t,n=e.targetDate,a=e.birthdate,l=y(a,n).physical,o=y(a,n).Emotional,i=y(a,n).intellectual;return r.a.createElement(c.b,{className:"ion-text-center"},r.a.createElement(c.d,null,r.a.createElement(c.e,null,(t=n,s()(t).format("DD MMM YYYY")))),r.a.createElement(c.c,null,r.a.createElement("p",null,"Physical :",Math.round(100*l),"%"),r.a.createElement("p",null,"Emotional :",Math.round(100*o),"%"),r.a.createElement("p",null,"intellectual :",Math.round(100*i),"%")))};var E=function(e){var t=e.birthDate,n=e.targetDate,a=e.size,l=function(e,t,n){for(var a=[],r=s()(t).startOf("day"),l=0;l<n;l++){var o=r.add(l,"days").toISOString();a.push(y(e,o))}return a}(t,new Date(s()(n).subtract(15,"days").format("DD-MMM-YYYY")),a);return r.a.createElement(j.c,{width:"99%",height:500},r.a.createElement(j.b,{data:l},r.a.createElement(j.e,null),r.a.createElement(j.f,null),r.a.createElement(j.d,null),r.a.createElement(j.a,{type:"natural",dataKey:"physical",stroke:"red"}),r.a.createElement(j.a,{type:"natural",dataKey:"Emotional",stroke:"yellow"}),r.a.createElement(j.a,{type:"natural",dataKey:"intellectual",stroke:"blue"})))};function h(e,t){var n=Object(a.useState)((function(){var n;return null!==(n=localStorage.getItem(e))&&void 0!==n?n:t})),r=Object(i.a)(n,2),l=r[0],o=r[1];return[l,function(t){o(t),localStorage.setItem(e,t)}]}var f=function(){var e=h("name",""),t=Object(i.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),s=u[0],m=u[1],y=Object(a.useState)(""),j=Object(i.a)(y,2),f=j[0],b=j[1],p=Object(a.useState)(""),v=Object(i.a)(p,2),g=v[0],O=v[1],_=Object(a.useState)(""),k=Object(i.a)(_,2),M=k[0],D=k[1],I=Object(a.useState)(""),Y=Object(i.a)(I,2),w=(Y[0],Y[1]),C=h("bod",""),S=Object(i.a)(C,2),x=S[0],N=S[1],B=h("tod",""),F=Object(i.a)(B,2),P=F[0],U=F[1],K=h("cycle",""),L=Object(i.a)(K,2),T=L[0],z=L[1];return r.a.createElement(c.a,null,r.a.createElement(c.h,null,r.a.createElement(c.m,null,r.a.createElement(c.l,null," Biorhythm Calculator"))),r.a.createElement(c.f,{className:"ion-padding"},r.a.createElement("p",null,n," ",s,"'s Biorhythm"),P&&r.a.createElement(d,{targetDate:P,birthdate:x}),r.a.createElement(c.j,null,r.a.createElement(c.k,null,"Name:"),r.a.createElement(c.i,{type:"text",value:n,onIonChange:function(e){return l(e.detail.value)}})),r.a.createElement(c.j,null,r.a.createElement(c.k,null,"Last Name:"),r.a.createElement(c.i,{type:"text",onIonChange:function(e){return m(e.detail.value)}})),r.a.createElement(c.j,null,r.a.createElement(c.k,null,"age:"),r.a.createElement(c.i,{type:"number",onIonChange:function(e){return b(e.detail.value)}})),r.a.createElement(c.j,null,r.a.createElement(c.k,null,"Country:"),r.a.createElement(c.i,{type:"text",onIonChange:function(e){return O(e.detail.value)}})),r.a.createElement(c.j,null,r.a.createElement(c.k,null,"Major:"),r.a.createElement(c.i,{type:"text",onIonChange:function(e){return D(e.detail.value)}})),r.a.createElement(c.j,null,r.a.createElement(c.k,null,"Email:"),r.a.createElement(c.i,{type:"email",onIonChange:function(e){return w(e.detail.value)}})),r.a.createElement(c.j,null,r.a.createElement(c.k,null,"Birth Date:"),r.a.createElement(c.g,{displayFormat:"D MMM YYYY",value:x,onIonChange:function(e){return N(e.detail.value)}})),r.a.createElement(c.j,null,r.a.createElement(c.k,null,"Target Date:"),r.a.createElement(c.g,{displayFormat:"D MMM YYYY",value:P,onIonChange:function(e){return U(e.detail.value)}})),r.a.createElement(c.j,null,r.a.createElement(c.k,null,"Date Cycle:"),r.a.createElement(c.i,{type:"number",value:T,onIonChange:function(e){return z(e.detail.value)}})),r.a.createElement(E,{targetDate:P,birthDate:x,size:T}),r.a.createElement("p",null,"My name is ",n," ",s,". I'm ",f," years old. I come from the beautiful country of ",g,". I'm majoring in ",M)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=n(174),p=(n(395),n(396),n(397),n(398),n(399),n(400),n(401),n(402),n(403),n(404),n(405),b.a.SplashScreen);o.a.render(r.a.createElement(f,null),document.getElementById("root")),p.hide(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[207,3,4]]]);
//# sourceMappingURL=main.62a5a843.chunk.js.map