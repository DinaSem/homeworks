(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,function(e,t,n){e.exports={littleButton:"Affairs_littleButton__1DGhI",button:"Affairs_button__88Xus",dbutton:"Affairs_dbutton__LeKpc"}},,,function(e,t,n){e.exports={main:"Message_main__3cv4n",message:"Message_message__P70In",avatar:"Message_avatar__1TJsT",text:"Message_text__3Pk9i"}},,,function(e,t,n){e.exports={someClass:"Greeting_someClass__2i0FJ",error:"Greeting_error__3GnDO",superInput:"Greeting_superInput__2oTLh",errorInput:"Greeting_errorInput__aYcA6",button:"Greeting_button__sUlrd",dbutton:"Greeting_dbutton__3NfPX"}},function(e,t,n){e.exports={superInput:"SuperInputText_superInput__1_tPc",errorInput:"SuperInputText_errorInput__1N0SC",error:"SuperInputText_error__4KGlC"}},function(e,t,n){e.exports={red:"SuperButton_red__1UcAM",default:"SuperButton_default__3sEBN"}},,function(e,t,n){e.exports={blue:"HW4_blue__uYmZ0",column:"HW4_column__6C1pv",testSpanError:"HW4_testSpanError__20yrJ"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__3i3xm",spanClassName:"SuperCheckbox_spanClassName__3pJRN"}},,function(e,t,n){e.exports={App:"App_App__2TEVI"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(15),s=n.n(c),i=(n(22),n(16)),o=n.n(i),l=n(6),u=n.n(l),j=n(0);var b=function(e){return Object(j.jsxs)("div",{className:u.a.main,children:[Object(j.jsx)("div",{className:u.a.avatar,children:Object(j.jsx)("img",{src:e.avatar,alt:""})}),Object(j.jsx)("div",{className:u.a.message,children:Object(j.jsxs)("div",{className:u.a.text,children:[Object(j.jsx)("div",{children:e.name}),Object(j.jsx)("div",{children:e.message}),Object(j.jsx)("div",{children:e.time})]})})]})},d="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Some Name",x="some text",m="22:00";var p=function(){return Object(j.jsxs)("div",{children:["\u0414\u04171",Object(j.jsx)("div",{children:Object(j.jsx)(b,{avatar:d,name:h,message:x,time:m})}),Object(j.jsx)("hr",{})]})},O=n(2),_=n(3),f=n.n(_);var v=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:" "+e.affair.name+" "}),Object(j.jsx)("span",{children:" "+e.affair.priority+" "}),Object(j.jsx)("button",{className:f.a.littleButton,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var g=function(e){var t=e.data.map((function(t){return Object(j.jsx)(v,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(j.jsxs)("div",{children:[t,Object(j.jsx)("button",{className:f.a.button,onClick:function(){e.setFilter("all")},children:"All"}),Object(j.jsx)("button",{className:f.a.button,onClick:function(){e.setFilter("high")},children:"High"}),Object(j.jsx)("button",{className:f.a.button,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(j.jsx)("button",{className:f.a.button,onClick:function(){e.setFilter("low")},children:"Low"})]})},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var N=function(){var e=Object(r.useState)(C),t=Object(O.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(O.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):[]}(n,i);return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"HW 2",Object(j.jsx)(g,{data:l,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},k=n(17),y=n(9),S=n.n(y),w=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.onKeyPress,s=e.totalUsers,i=a?S.a.errorInput:S.a.superInput;return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{value:t,onChange:n,className:i,onKeyPress:c}),Object(j.jsx)("span",{children:a}),Object(j.jsx)("button",{onClick:r,className:S.a.button,disabled:!t,children:"add"}),Object(j.jsx)("span",{children:s})]})},I=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(O.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),l=Object(O.a)(o,2),u=l[0],b=l[1],d=function(){n(s),alert("Hello  ".concat(s," !")),i("")},h=t.length;return Object(j.jsx)(w,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),u&&b("")):(i(""),b("\u043d\u0430\u043f\u0438\u0448\u0438 \u0445\u043e\u0442\u044c \u0447\u0442\u043e-\u0442\u043e"))},addUser:d,error:u,totalUsers:h,onKeyPress:function(e){"Enter"===e.key&&s&&(d(),i(""))}})},A=n(26);var T=function(){var e=Object(r.useState)([]),t=Object(O.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 3",Object(j.jsx)(I,{users:n,addUserCallback:function(e){var t={id:Object(A.a)(),name:e};a([t].concat(Object(k.a)(n)))}}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},E=n(4),P=n(5),G=n(10),B=n.n(G),F=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(P.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(B.a.error," ").concat(i||""),u="".concat(B.a.errorInput," ").concat(s?B.a.superInput:"");return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",Object(E.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:u},o)),c&&Object(j.jsx)("span",{className:l,children:c})]})},K=n(13),U=n.n(K),W=n(11),H=n.n(W),J=function(e){var t=e.red,n=(e.className,Object(P.a)(e,["red","className"])),r="".concat(t?H.a.red:H.a.default," ").concat(H.a.disabled);return Object(j.jsx)("button",Object(E.a)({className:r},n))},M=n(14),X=n.n(M),L=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(P.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(X.a.checkbox," ").concat(r||"");return Object(j.jsxs)("label",{children:[Object(j.jsx)("input",Object(E.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(!n)},className:s},c)),a&&Object(j.jsx)("span",{className:X.a.spanClassName,children:a})]})};var Y=function(){var e=Object(r.useState)(""),t=Object(O.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(O.a)(i,2),l=o[0],u=o[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 4",Object(j.jsxs)("div",{className:U.a.column,children:[Object(j.jsx)(F,{value:n,onChangeText:a,onEnter:s,error:c}),Object(j.jsx)(F,{className:U.a.blue}),Object(j.jsx)(J,{children:"default"}),Object(j.jsx)(J,{red:!0,onClick:s,children:"delete "}),Object(j.jsx)(J,{disabled:!0,children:"disabled"}),Object(j.jsx)(L,{checked:l,onChangeChecked:u,children:"some text "}),Object(j.jsx)(L,{checked:l,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})};var D=function(){return Object(j.jsxs)("div",{className:o.a.App,children:[Object(j.jsx)(p,{}),Object(j.jsx)(N,{}),Object(j.jsx)(T,{}),Object(j.jsx)(Y,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[24,1,2]]]);
//# sourceMappingURL=main.58ebfa3b.chunk.js.map