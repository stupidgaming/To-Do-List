(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){},15:function(t,e,c){},17:function(t,e,c){"use strict";c.r(e);var s=c(1),n=c.n(s),o=c(7),a=c.n(o),i=(c(13),c(3)),l=(c(14),c(8)),d=(c(15),c(4)),r=c.p+"static/media/delete.7079ab05.png",u=c(0);var j=function(t){var e,c=t.text,s=t.todo,n=t.todos,o=t.setTodos;return console.log(e+"px"),Object(u.jsxs)("div",{className:"todo ".concat(s.trash?"trash":""),id:s.id,children:[Object(u.jsx)("li",{className:"todo-list ".concat(s.completed?"completed":""),children:Object(u.jsx)("span",{children:c})}),Object(u.jsx)("button",{onClick:function(){o(n.map((function(t){return t.id===s.id?Object(d.a)(Object(d.a)({},t),{},{completed:!t.completed}):t})))},className:"completeBtn  ".concat(s.completed?"completedBtn":""),children:"\u2713"}),Object(u.jsx)("button",{onClick:function(){e=document.getElementById("".concat(s.id)).offsetHeight,document.getElementById("".concat(s.id)).style.margin="".concat(.5*-e,"px"),o(n.map((function(t){return t.id===s.id?Object(d.a)(Object(d.a)({},t),{},{trash:!t.trash}):t}))),setTimeout((function(){o(n.filter((function(t){return t.id!==s.id})))}),500)},className:"trashBtn",children:Object(u.jsx)("img",{src:r})})]})};var b=function(t){var e=t.text,c=t.setText,n=t.todos,o=t.setTodos,a=t.status,i=t.setStatus,d=t.filteredTodos;return Object(s.useEffect)((function(){document.querySelector("input").focus()}),[]),Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o([].concat(Object(l.a)(n),[{text1:e,completed:!1,trash:!1,id:1e3*Math.random()}])),c("")},children:[Object(u.jsx)("h1",{className:"h1",children:"To-Do-List"}),Object(u.jsxs)("div",{className:"inputDiv",children:[Object(u.jsx)("input",{className:"input",type:"text",value:e,onChange:function(t){return c(t.target.value)},required:!0}),Object(u.jsxs)("button",{className:"inputBtn",type:"submit",children:[Object(u.jsx)("span",{className:"btnSpan1"}),Object(u.jsx)("span",{className:"btnSpan2"})]})]}),Object(u.jsxs)("div",{className:"select",children:[Object(u.jsx)("h1",{children:"To-Do :\xa0\xa0"}),Object(u.jsxs)("select",{name:"todos",onChange:function(t){i(t.target.value)},className:"filterTodos",children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"completed",children:"Completed"}),Object(u.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})]}),Object(u.jsxs)("h1",{className:"h2",children:["List : ",a]})]}),Object(u.jsx)("div",{id:"div1",children:Object(u.jsx)("ul",{id:"ul1",children:d.map((function(t){return Object(u.jsx)(j,{todo:t,todos:n,setTodos:o,text:t.text1},t.id)}))})})]})};var m=function(){var t=Object(s.useState)(""),e=Object(i.a)(t,2),c=e[0],n=e[1],o=Object(s.useState)([]),a=Object(i.a)(o,2),l=a[0],d=a[1],r=Object(s.useState)("all"),j=Object(i.a)(r,2),m=j[0],f=j[1],p=Object(s.useState)([]),O=Object(i.a)(p,2),h=O[0],x=O[1];Object(s.useEffect)((function(){S()}),[]),Object(s.useEffect)((function(){v(),g()}),[l,m]);var v=function(){switch(m){case"completed":x(l.filter((function(t){return!0===t.completed})));break;case"uncompleted":x(l.filter((function(t){return!1===t.completed})));break;default:x(l)}},g=function(){localStorage.setItem("todos",JSON.stringify(l))},S=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));d(t)}};return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(b,{filteredTodos:h,setFilteredTodos:x,status:m,setStatus:f,todos:l,setTodos:d,text:c,setText:n})})};a.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.querySelector("#root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.339a02ab.chunk.js.map