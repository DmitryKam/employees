(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{104:function(e,t,n){e.exports={employeeCards:"Employee_employeeCards__AMuSa"}},110:function(e,t,n){e.exports={homeContainer:"Home_homeContainer__2iA24"}},126:function(e,t,n){},177:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(0),c=n.n(r),o=n(10),s=n.n(o),i=n(77),l=(n(126),n(75)),d=n.n(l),j=n(11),m=n(32),b=n.n(m),p=function(){return Object(a.jsx)("div",{className:b.a.body,children:Object(a.jsxs)("div",{className:b.a.mainbox,children:[Object(a.jsx)("div",{className:b.a.err,children:"4"}),Object(a.jsx)("div",{className:b.a.far,children:Object(a.jsx)("i",{className:"far fa-question-circle fa-spin"})}),Object(a.jsx)("div",{className:b.a.err2,children:"4"}),Object(a.jsxs)("div",{className:b.a.msg,children:["Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?",Object(a.jsxs)("p",{children:["Let's go ",Object(a.jsx)("a",{className:b.a.a,href:"/",children:"home"})," and try from there."]})]})]})})},u=n(111),h=n(82),O=n(213),x=n(214),y=n(216),_=n(215),f=n(217),E=n(210),v=n(105),C=n.n(v),N=n(212),g=n(112),k=n(104),M=n.n(k),B=c.a.memo((function(e){var t=e.firstName,n=e.id,r=e.deleteEmployee;return Object(a.jsx)(E.a,{item:!0,xs:6,md:4,children:Object(a.jsx)("div",{className:M.a.employeeCards,children:Object(a.jsx)(N.a,{children:Object(a.jsx)(g.a,{elevation:3,children:Object(a.jsx)(O.a,{children:Object(a.jsxs)(x.a,{children:[Object(a.jsx)(_.a,{primary:t}),Object(a.jsx)(y.a,{children:Object(a.jsx)(f.a,{edge:"end","aria-label":"delete",onClick:function(){r(n)},children:Object(a.jsx)(C.a,{})})})]})})})})})})})),F=n(33),S=n.n(F),A=n(78),H=n.n(A),L=n(106),I=n(107),P=n.n(I).a.create({baseURL:"https://reqres.in/api/"}),w=function(){return P.get("users?per_page=12")},T=function(){var e=Object(L.a)(H.a.mark((function e(){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:return t=e.sent,e.abrupt("return",t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=n(224),Y=n(218),D=n(108),G=n.n(D),J=n(109),R=n.n(J),z=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),s=Object(h.a)(o,2),i=s[0],l=s[1];Object(r.useEffect)((function(){T().then((function(e){return c(e)}))}),[]);var d=Object(r.useCallback)((function(e){c((function(t){return[].concat(Object(u.a)(t),[e])})),l("")}),[]),j=Object(r.useCallback)((function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}),[]);return Object(a.jsxs)("div",{className:S.a.addEmployeeForm,children:[Object(a.jsxs)("div",{className:S.a.addEmployeeContainer,children:[Object(a.jsx)("div",{className:S.a.employeeBlockHeader,children:"Add New Employee"}),Object(a.jsx)("div",{children:Object(a.jsx)(q.a,{id:"outlined-basic",label:"Add employee",variant:"outlined",onChange:function(e){l(e.currentTarget.value)},value:i})}),Object(a.jsx)("div",{className:S.a.buttonAddEmployeeContainer,children:Object(a.jsx)(Y.a,{variant:"contained",color:"secondary",disabled:""===i,onClick:function(){return d({id:Math.random()*Math.floor(200),first_name:i})},children:"Add employee"})})]}),Object(a.jsxs)("div",{className:S.a.employeesBlock,children:[Object(a.jsxs)("div",{className:S.a.employeeBlockHeader,children:["Employees list",Object(a.jsx)(G.a,{badgeContent:n.length,color:"secondary",children:Object(a.jsx)(R.a,{})})]}),Object(a.jsx)("div",{className:S.a.employeesContainer,children:n.map((function(e){var t=e.id,n=e.first_name;return Object(a.jsx)(B,{id:t,firstName:n,deleteEmployee:j},t)}))})]})]})},Q=n(219),U=n(220),V=n(64),W=n(110),K=n.n(W),X=function(){return Object(a.jsx)(Q.a,{className:K.a.homeContainer,children:Object(a.jsx)(N.a,{children:Object(a.jsxs)(U.a,{children:[Object(a.jsx)(V.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"React"}),Object(a.jsx)(V.a,{variant:"body2",color:"textSecondary",component:"p",children:"\u0421 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 React \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0443\u043c\u0435\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b: \u25cf / \u2014 \u0433\u043b\u0430\u0432\u043d\u0430\u044f \u25cf /employees \u2014 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432 \u041d\u0430 \u0441\u0430\u0439\u0442\u0435, \u0432 \u0448\u0430\u043f\u043a\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0438: \u25cf \u0413\u043b\u0430\u0432\u043d\u0430\u044f \u25cf \u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438 \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c \u0432\u044b\u0437\u043e\u0432\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0435\u0433\u043e api \u2014 https://reqres.in/api/users?per_page=12 \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432 (\u0442\u043e\u043b\u044c\u043a\u043e \u0438\u043c\u0435\u043d\u0430), \u043d\u0430 \u043d\u0435\u0439 \u0442\u0430\u043a\u0436\u0435 \u0435\u0441\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430. \u0420\u0430\u0437\u0443\u043c\u0435\u0435\u0442\u0441\u044f, \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043d\u0438\u043a\u0443\u0434\u0430 \u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u2014 \u0438\u0445 \u043f\u0440\u043e\u0441\u0442\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0432\u0438\u0434\u043d\u043e \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438. \u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 (\u0434\u0438\u0437\u0430\u0439\u043d) \u2014 \u043d\u0435 \u0432\u0430\u0436\u043d\u043e."}),Object(a.jsx)(Y.a,{variant:"contained",color:"secondary",href:Z.EMPLOYEES,children:"Go To Employees List"})]})})})},Z={EMPLOYEES:"/emoloyees",HOME:"/"};var $=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{exact:!0,path:Z.HOME,component:X}),Object(a.jsx)(j.a,{path:Z.EMPLOYEES,component:z}),Object(a.jsx)(j.a,{component:p})]})})},ee=n(221),te=n(222),ne=n(223),ae=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(ee.a,{position:"static",children:Object(a.jsxs)(te.a,{children:[Object(a.jsx)(f.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(a.jsx)(ne.a,{})}),Object(a.jsxs)(V.a,{variant:"h6",children:[Object(a.jsx)(Y.a,{variant:"contained",color:"primary",href:Z.HOME,children:"Home"}),Object(a.jsx)(Y.a,{variant:"contained",color:"primary",href:Z.EMPLOYEES,children:"Employees"})]})]})}),Object(a.jsx)("div",{className:d.a.routeContainer,children:Object(a.jsx)($,{})})]})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,225)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(i.a,{children:Object(a.jsx)(ae,{})})}),document.getElementById("root")),re()},32:function(e,t,n){e.exports={body:"Error404_body__2M8WI",mainbox:"Error404_mainbox__2dYzG",err:"Error404_err__2yFDJ",far:"Error404_far__FuNIj",err2:"Error404_err2__1_CI3",msg:"Error404_msg__2GITB",a:"Error404_a__EpJiv"}},33:function(e,t,n){e.exports={employeesBlock:"Employees_employeesBlock__1losh",employeeBlockHeader:"Employees_employeeBlockHeader__3TPI_",employeesContainer:"Employees_employeesContainer__2Qqot",addEmployeeForm:"Employees_addEmployeeForm__8twz3",addEmployeeContainer:"Employees_addEmployeeContainer__9ouF0",buttonAddEmployeeContainer:"Employees_buttonAddEmployeeContainer__ioD7V"}},75:function(e,t,n){e.exports={routeContainer:"App_routeContainer__1D6rh"}}},[[177,1,2]]]);
//# sourceMappingURL=main.cb602646.chunk.js.map