(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Captain Molly","Role":"Firefighter","Department":"Firefighting ","Office":713137137,"Mobile":3453453453,"Email":"spongebob@app.com","Address":"#111  Houston M4B 1B3"},{"id":2,"name":"F Peterson","Role":"Detective","Department":"Firefighting ","Office":235345345,"Mobile":454355,"Email":"krabs@app.com","Address":"#222  Houston M4B 1B4"},{"id":3,"image":"../assets/01.jpg","name":"Captain JJ","Role":"Battalion chief","Department":"Firefighting ","Office":23534445,"Mobile":3534534543,"Email":"squidward@app.com","Address":"#333  Houston M4B 1B4"},{"id":4,"name":"A Anderson","Role":"Fire chief","Department":"Firefighting ","Office":34534534534,"Mobile":3453453454,"Email":"dexter@app.com","Address":"#444  Houston M4B 1B4"},{"id":5,"name":"Ross D.","Role":"Assistant chief ","Department":"Firefighting","Office":3453534535,"Mobile":345534534534,"Email":"test@app.com","Address":"#555  Houston M4B 1B4"},{"id":6,"name":"Charles Diaz","Role":"Detective","Department":"Firefighting ","Office":678678678678,"Mobile":678678678678,"Email":"doug@app.com","Address":"#666  Houston M4B 1B4"},{"id":7,"name":"Tom D.","Role":"Administration","Department":"Firefighting ","Office":678686786,"Mobile":67867868678,"Email":"gina@app.com","Address":"#777  Houston M4B 1B4"},{"id":8,"name":"Hailey","Role":"Administration","Department":"Firefighting ","Office":7697696789789,"Mobile":78967897897,"Email":"johny@app.com","Address":"#888  Houston M4B 1B4"},{"id":9,"name":"Jose","Role":"Administration","Department":"Firefighting ","Office":7697978978,"Mobile":6797897897,"Email":"tommy@app.com","Address":"#999  Houston M4B 1B4"}]')},,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),i=a.n(r);a(13);var c=function(e){return l.a.createElement("div",null,l.a.createElement("div",{class:"container-fluid"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-12"},l.a.createElement("div",{className:"wrapper",style:{}},e.children)))))},o=(a(14),a(2)),s=a(7);var m=function(e){var t={colborder:{border:"1px solid lightgrey"},listtype:{listStyleType:"none"},imgcontainer:{}};return l.a.createElement("div",null,e.displayEmployeeList.map((function(e){return l.a.createElement("div",{class:"row justify-content-center"},l.a.createElement("div",{class:"col-11 p-2",style:t.colborder},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-3 imgcontainer"},l.a.createElement("img",{class:"img-thumbnail",alt:e.name,src:e.image})),l.a.createElement("div",{class:"col-9 emp-content"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col"},l.a.createElement("ul",{style:t.listtype},l.a.createElement("li",null,l.a.createElement("strong",null,"Name:")," ",e.name),l.a.createElement("li",null,l.a.createElement("strong",null,"Occupation:")," ",e.Role),l.a.createElement("li",null,l.a.createElement("strong",null,"Department:")," ",e.Department),l.a.createElement("li",null,l.a.createElement("strong",null,"Email:")," ",e.Email),l.a.createElement("li",null,l.a.createElement("strong",null,"Office:")," ",e.Office),l.a.createElement("li",null,l.a.createElement("strong",null,"Address:")," ",e.Address))))))))})))},d=a(4);var u=function(e){var t=Object(n.useState)({search:""}),a=Object(o.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)(d),u=Object(o.a)(c,2),p=u[0],E=u[1];return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("div",{class:"input-group p-3"},l.a.createElement("input",{type:"text",class:"form-control",value:r.search,placeholder:"Search Employee by Name",onChange:function(e){e.preventDefault();var t=e.target.value;if(i({search:t}),t.length>1){var a=d.filter((function(e){return 0===e.name.toLowerCase().indexOf(r.search.toLowerCase())}));E(a)}else E([])}}))),l.a.createElement("div",{class:"row justify-content-center"},l.a.createElement("div",{class:"col-2"},l.a.createElement("button",{style:{backgroundColor:"blue",padding:"5px",paddingLeft:"5px"},onClick:function(e){e.preventDefault(),console.log("i am clicked");var t=Object(s.a)(p);E(t.reverse()),console.log(p)}},"Sort By Id"))),l.a.createElement(m,{displayEmployeeList:p}))};var p=function(){var e=Object(n.useState)({search:""}),t=Object(o.a)(e,2);return t[0],t[1],l.a.createElement("div",null,l.a.createElement("form",{class:"row"},l.a.createElement("div",{class:"col-12"},l.a.createElement(u,null))))};var E=function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-12 p-2",style:{border:"3px solid blue"}},l.a.createElement("h1",{class:" headertxt text-center"},"EMPLOYEE DIRECTORY"))))};var f=function(){return l.a.createElement(c,null,l.a.createElement(E,null),l.a.createElement(p,null))};a(15);i.a.render(l.a.createElement(f,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.555c5cf0.chunk.js.map