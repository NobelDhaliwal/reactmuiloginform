(this.webpackJsonpmyreactmuiformapp=this.webpackJsonpmyreactmuiformapp||[]).push([[0],{47:function(e,a,t){e.exports=t(58)},57:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),m=t.n(r),o=t(27),c=t(33),i=t(34),u=t(89),E=t(59),h=t(90),s=t(91),d=t(86),p=t(84),f=t(88),g=t(85),y=t(87),v=function(){var e=Object(n.useState)({fname:"",lname:"",email:"",phone:"",pass:"",gender:""}),a=Object(i.a)(e,2),t=a[0],r=a[1],m=Object(n.useState)(""),v=Object(i.a)(m,2),b=v[0],w=v[1],C=function(e){console.log(e.target.value),console.log(e.target.name);var a=e.target,t=a.value,n=a.name;r((function(e){return console.log(e),Object(c.a)(Object(c.a)({},e),{},Object(o.a)({},n,t))}))},F=function(e){e.preventDefault(),alert("Form Submitted\ud83d\udc4d"),w(t),window.open(URL,"_blank"),document.write("<h1>Congratulations ! Your Form Submitted</h1>"),document.body.style.backgroundColor="aliceblue",document.write("<h1>Thankyou!\ud83d\udc4d\ud83d\ude00</h1>")};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main_div"},l.a.createElement("div",{className:"center_div"},l.a.createElement("form",{onSubmit:F},l.a.createElement("h1",null,"Login Form"),l.a.createElement("h1",null," Welcome ",t.fname,"  ",t.lname),l.a.createElement("h3",null,b.email),l.a.createElement("h3",null,b.phone),l.a.createElement("h3",null,t.gender),l.a.createElement(u.a,{margin:"normal",fullWidth:!0,autoComplete:"off"},l.a.createElement(p.a,{htmlfor:"fname"},"FirstName"),l.a.createElement(f.a,{id:"fname",name:"fname",type:"text",onChange:C,placeholder:"Enter your FirstName",value:t.fname})),l.a.createElement(u.a,{margin:"normal",fullWidth:!0},l.a.createElement(p.a,{htmlfor:"lname"},"LastName"),l.a.createElement(f.a,{id:"lname",type:"text",name:"lname",onChange:C,placeholder:"Enter your LastName",value:t.lname})),l.a.createElement(u.a,{margin:"normal",fullWidth:!0},l.a.createElement(p.a,{htmlfor:"Email"},"Email"),l.a.createElement(f.a,{id:"email",name:"email",type:"email",onChange:C,placeholder:"Enter your Email",value:t.email})),l.a.createElement(u.a,{margin:"normal",fullWidth:!0},l.a.createElement(p.a,{htmlfor:"phone"},"Phone"),l.a.createElement(f.a,{id:"phone",type:"phone",name:"phone",onChange:C,placeholder:"Enter your Phone_no",value:t.phone})),l.a.createElement(u.a,{size:"large",margin:"normal",fullWidth:!0},l.a.createElement(p.a,{htmlfor:"pass"},"Password"),l.a.createElement(f.a,{id:"pass",name:"pass",type:"password",onChange:C,placeholder:"Enter your Password",value:t.pass})),l.a.createElement(u.a,{color:"primary",margin:"normal",fullWidth:!0},l.a.createElement(E.a,null,"Select Gender:"),l.a.createElement(h.a,{row:!0,name:"gender",onChange:C},l.a.createElement(s.a,{value:"Male",control:l.a.createElement(d.a,{color:"primary"}),label:"Male"}),l.a.createElement(s.a,{value:"Female",control:l.a.createElement(d.a,{color:"primary"}),label:"Female"}),l.a.createElement(s.a,{value:"other",control:l.a.createElement(d.a,{color:"primary"}),label:"Other"}))),l.a.createElement(u.a,{variant:"outlined",margin:"normal",fullWidth:!0},l.a.createElement(p.a,{htmlFor:"msg"},"Message"),l.a.createElement(f.a,{id:"msg",multiline:!0,rows:1})),l.a.createElement("div",{className:"yip"},l.a.createElement(y.a,{title:"Click me!"},l.a.createElement(g.a,{variant:"contained",onClick:F,size:"large",color:"primary"},"Submit")))))))},b=function(){return l.a.createElement(v,null)};t(57);m.a.render(l.a.createElement(b,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.e079539a.chunk.js.map