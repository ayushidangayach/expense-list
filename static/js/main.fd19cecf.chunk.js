(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),s=(n(14),n(4)),l=n(2),i=n(1),r=(n(15),n(0)),u=function(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})},j=(n(17),function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{value:e.expenseFilter,onChange:function(t){return n=t.target.value,void e.setExpenseFilter(n);var n},children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"})]})]})})}),o=(n(18),function(e){var t=e.date.toLocaleDateString("en-US",{month:"long"}),n=e.date.toLocaleDateString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__year",children:a}),Object(r.jsx)("div",{className:"expense-date__day",children:n})]})}),d=(n(19),function(e){var t=e.date,n=e.title,a=e.amount;return Object(r.jsx)("li",{children:Object(r.jsxs)(u,{className:"expense-item",children:[Object(r.jsx)(o,{date:t}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:n}),Object(r.jsxs)("div",{className:"expense-item__price",children:["$",a]})]})]})})}),b=(n(20),function(e){return 0===e.expenses.length?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:"No Expenses Found."}):e.expenses.map((function(e){return Object(r.jsx)("ul",{className:"expenses-list",children:Object(r.jsx)(d,{amount:e.amount,title:e.title,date:e.date},e.id)})}))}),x=(n(21),n(9)),O=(n(22),n(23),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{children:e.label})]})}),p=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(s.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(O,{label:e.label,value:e.value,maxValue:n},e.label)}))})},v=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(x.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(r.jsx)(p,{dataPoints:n})},h=function(e){var t=Object(i.useState)("2021"),n=Object(l.a)(t,2),a=n[0],c=n[1],o=Object(s.a)(e.expenses);return o=o.filter((function(e){return e.date.getFullYear().toString()===a})),Object(r.jsxs)(u,{className:"expenses",children:[Object(r.jsx)(j,{expenseFilter:a,setExpenseFilter:function(e){c(e)}}),Object(r.jsx)(v,{expenses:o}),Object(r.jsx)(b,{expenses:o})]})},m=n(7),f=(n(24),function(e){var t=Object(i.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1],s=Object(i.useState)(""),u=Object(l.a)(s,2),j=u[0],o=u[1],d=Object(i.useState)(""),b=Object(l.a)(d,2),x=b[0],O=b[1],p=function(){c(""),o(""),O(""),e.changeExpenseForm()};return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+x,date:new Date(j)};p(),e.onNewExpense(n)},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)},value:a})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",min:"0.01",step:"0.01",onChange:function(e){O(e.target.value)},value:x})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"date",min:"2019-01-01",max:"2021-12-31",onChange:function(e){o(e.target.value)},value:j})]})]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{type:"button",onClick:p,className:"muted",children:"Cancel"}),Object(r.jsx)("button",{type:"submit",children:"Add Expense"})]})]})}),N=(n(25),function(e){var t=Object(i.useState)(!0),n=Object(l.a)(t,2),a=n[0],c=n[1],s=function(){c((function(e){return!e}))},u=Object(r.jsx)("button",{onClick:s,children:"Add New Expense"});return a&&(u=Object(r.jsx)(f,{onNewExpense:function(t){var n=Object(m.a)(Object(m.a)({},t),{},{id:Math.random().toString()});e.onAddNewExpense(n)},changeExpenseForm:s})),Object(r.jsx)("div",{className:"new-expense",children:u})}),_=function(){var e=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}],t=Object(i.useState)(e),n=Object(l.a)(t,2),a=n[0],c=n[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(N,{onAddNewExpense:function(e){c((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(r.jsx)(h,{expenses:a})]})};c.a.render(Object(r.jsx)(_,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.fd19cecf.chunk.js.map