(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],{15:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),i=r(7),c=r.n(i),s=(r(15),r(8)),o=r.n(s),l=r(3),j=r.n(l),d=r(0);var u=function(e){return Object(d.jsxs)("div",{className:j.a.main,children:[Object(d.jsx)("div",{className:j.a.avatar,children:Object(d.jsx)("img",{src:e.avatar,alt:""})}),Object(d.jsx)("div",{className:j.a.message,children:Object(d.jsxs)("div",{className:j.a.text,children:[Object(d.jsx)("div",{children:e.name}),Object(d.jsx)("div",{children:e.message}),Object(d.jsx)("div",{children:e.time})]})})]})},b="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Some Name",O="some text",m="22:00";var f=function(){return Object(d.jsxs)("div",{children:["\u0414\u04171",Object(d.jsx)("div",{children:Object(d.jsx)(u,{avatar:b,name:h,message:O,time:m})}),Object(d.jsx)("hr",{})]})},x=r(2);var v=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:" "+e.affair.name+" "}),Object(d.jsx)("span",{children:" "+e.affair.priority+" "}),Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var p=function(e){var t=e.data.map((function(t){return Object(d.jsx)(v,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},_=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var g=function(){var e=Object(n.useState)(_),t=Object(x.a)(e,2),r=t[0],a=t[1],i=Object(n.useState)("all"),c=Object(x.a)(i,2),s=c[0],o=c[1],l=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):[]}(r,s);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"HW 2",Object(d.jsx)(p,{data:l,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(r,e))},filter:s}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},k=r(10),w=r(19),C=r(9),y=r.n(C),A=function(e){var t=e.name,r=e.setNameCallback,n=e.addUser,a=e.error,i=e.totalUsers,c=e.onKeyPressHandler,s=y.a.error;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:r,onKeyPress:c,className:s}),Object(d.jsx)("span",{children:a}),Object(d.jsx)("button",{onClick:n,children:"add"}),Object(d.jsx)("span",{children:i})]})},S=function(e){var t=e.users,r=e.addUserCallback,a=Object(n.useState)(""),i=Object(x.a)(a,2),c=i[0],s=i[1],o=Object(n.useState)(""),l=Object(x.a)(o,2),j=l[0],u=l[1],b=t.length;return Object(d.jsx)(A,{name:c,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(s(t),u("")):(s(""),u("\u043d\u0435 \u0433\u043e\u0434\u0438\u0442\u0441\u044f"),r(c))},onKeyPressHandler:function(e){"Enter"===e.key&&(r(c),s(""))},addUser:function(){r(c),alert("Hello  ".concat(c," !")),s("")},error:j,totalUsers:b})};var N=function(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),r=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(S,{users:r,addUserCallback:function(e){var t={_id:Object(w.a)(),name:e};a([t].concat(Object(k.a)(r)))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var F=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)(f,{}),Object(d.jsx)(g,{}),Object(d.jsx)(N,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,r){e.exports={main:"Message_main__3cv4n",message:"Message_message__P70In",avatar:"Message_avatar__1TJsT",text:"Message_text__3Pk9i"}},8:function(e,t,r){e.exports={App:"App_App__2TEVI"}},9:function(e,t,r){e.exports={someClass:"Greeting_someClass__2i0FJ",error:"Greeting_error__3GnDO"}}},[[17,1,2]]]);
//# sourceMappingURL=main.f4634079.chunk.js.map