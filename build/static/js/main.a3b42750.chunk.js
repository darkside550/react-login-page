(this.webpackJsonploginpage=this.webpackJsonploginpage||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(2),a=n.n(i),l=n(13),s=n.n(l),r=(n(19),n(10)),o=(n(20),n(8)),j=n(25),d=n(26),b=n(27),h=n(28),O=n(29),u=n(12);var x=function(e){var t=e.Login,n=e.error,a=Object(i.useState)({name:"",email:"",password:""}),l=Object(r.a)(a,2),s=l[0],x=l[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("body",{children:Object(c.jsxs)("div",{style:{height:"100%",width:"100%",display:"inline-block"},children:[Object(c.jsx)(j.a,{className:"splitdiv",id:"leftdiv",onSubmit:function(e){e.preventDefault(),t(s)},children:Object(c.jsxs)("div",{id:"leftdivcard",children:[Object(c.jsx)("h1",{style:{paddingTop:"20px",textAlign:"center"},children:"Sign in to journey"}),Object(c.jsx)(u.FacebookLoginButton,{}),Object(c.jsx)(u.TwitterLoginButton,{}),Object(c.jsx)("div",{style:{textAlign:"center"},children:"or use email for log in"}),""!==n?Object(c.jsx)("div",{className:"error",children:n}):"",Object(c.jsxs)(d.a,{children:[Object(c.jsx)(b.a,{children:"\xa0\xa0Name"}),Object(c.jsx)(h.a,{type:"text",placeholder:"name",onChange:function(e){return x(Object(o.a)(Object(o.a)({},s),{},{name:e.target.value}))},value:s.name})]}),Object(c.jsxs)(d.a,{children:[Object(c.jsx)(b.a,{children:"\xa0\xa0Email"}),Object(c.jsx)(h.a,{type:"email",placeholder:"email",onChange:function(e){return x(Object(o.a)(Object(o.a)({},s),{},{email:e.target.value}))},value:s.email})]}),Object(c.jsxs)(d.a,{children:[Object(c.jsx)(b.a,{children:"Password"}),Object(c.jsx)(h.a,{type:"password",placeholder:"password",onChange:function(e){return x(Object(o.a)(Object(o.a)({},s),{},{password:e.target.value}))},value:s.password})]}),Object(c.jsx)("div",{style:{textAlign:"center"},children:Object(c.jsx)(O.a,{className:"ripple2",id:"leftbutton",children:"Sign in"})})]})}),Object(c.jsx)("div",{className:"splitdiv",id:"rightdiv",children:Object(c.jsxs)("div",{id:"rightdivcard",children:[Object(c.jsx)("h1",{style:{paddingTop:"20px",textAlign:"center",color:"white"},children:"Hello, Friend!"}),Object(c.jsx)("p",{style:{color:"white",textAlign:"center"},children:"You can start journey and have fun with us"}),Object(c.jsx)("div",{style:{textAlign:"center"},children:Object(c.jsx)("button",{id:"rightbutton",className:"ripple",children:"Sign Up"})})]})})]})})})};var m=function(){var e="admin@admin.com",t="admin123",n=Object(i.useState)({name:"",email:""}),a=Object(r.a)(n,2),l=a[0],s=a[1],o=Object(i.useState)(""),j=Object(r.a)(o,2),d=j[0],b=j[1];return Object(c.jsx)("div",{className:"App",children:""!==l.email?Object(c.jsxs)("div",{className:"welcome",children:[Object(c.jsxs)("h2",{children:[" Welcome, ",Object(c.jsxs)("span",{children:[l.name," "]})]}),Object(c.jsx)("button",{onClick:function(){s({name:"",email:""}),console.log("Log Out")},children:" Logout "})]}):Object(c.jsx)(x,{Login:function(n){console.log(n),n.email===e&&n.password===t?(console.log("Loged in"),s({name:n.name,email:n.email})):(console.log("details dont match"),b("details dont match"))},error:d})})};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.a3b42750.chunk.js.map