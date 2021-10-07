(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(e,t,n){e.exports={form:"Form_form__14G4x",label:"Form_label__1ph2Q",input:"Form_input__3SUPk",button:"Form_button__2O86R",btnText:"Form_btnText__3pv8G"}},,,,,,function(e,t,n){e.exports={text:"Filter_text__1eRvy",value:"Filter_value__2YXFy"}},,function(e,t,n){e.exports={name:"Contact_name__2dTXX",number:"Contact_number__2b9-5"}},function(e,t,n){e.exports={item:"ContactsList_item__1RFc7",button:"ContactsList_button__vTCQU"}},function(e,t,n){e.exports={title:"App_title__2fE2s",contactTitle:"App_contactTitle__2TLJT"}},,function(e,t,n){e.exports={container:"Container_container__BAmPM"}},,function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},,,,,,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(13),i=n.n(c),s=(n(22),n(17)),o=n(3),u=n(4),l=n(6),m=n(5),b=n(14),d=n.n(b),j=n(0);function h(e){var t=e.children;return Object(j.jsx)("div",{className:d.a.container,children:t})}var p=n(15),f=n(28),_=n(2),x=n.n(_),v=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleInputChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(p.a)({},a,r))},e.handleSubmit=function(t){var n=e.state,a=n.name,r=n.number;t.preventDefault();var c={id:Object(f.a)(),name:a,number:r};e.props.onSubmit(c),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=this.handleSubmit,r=this.handleInputChange;return Object(j.jsxs)("form",{className:x.a.form,onSubmit:a,children:[Object(j.jsxs)("label",{className:x.a.label,children:["Name",Object(j.jsx)("input",{onChange:r,value:t,className:x.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{className:x.a.label,children:["Phone",Object(j.jsx)("input",{value:n,className:x.a.input,onChange:r,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{className:x.a.button,type:"submit",children:Object(j.jsx)("span",{className:x.a.btnText,children:" Add contacts"})})]})}}]),n}(a.Component),O=n(8),C=n.n(O);function g(e){var t=e.value,n=e.onChange;return Object(j.jsxs)("label",{className:C.a.text,children:["Find contacts by name",Object(j.jsx)("input",{className:C.a.value,type:"text",value:t,onChange:n})]})}var y=n(9),N=n.n(y),S=n(10),F=n.n(S);function T(e){var t=e.name,n=e.number;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("span",{className:F.a.name,children:[t,":"]}),Object(j.jsx)("span",{className:F.a.number,children:n})]})}T.propType={name:N.a.string.isRequired,number:N.a.number.isRequired};var A=n(11),w=n.n(A);function k(e){var t=e.contacts,n=e.onDeleteContact;return Object(j.jsx)("ul",{children:t.map((function(e){var t=e.name,a=e.number,r=e.id;return Object(j.jsxs)("li",{className:w.a.item,children:[Object(j.jsx)(T,{name:t,number:a}),Object(j.jsx)("button",{className:w.a.button,type:"button",onClick:function(){return n(r)},children:"Delete"})]},r)}))})}var L=n(16),R=n(12),J=n.n(R),q=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:L,filter:""},e.formSubmitHandler=function(t){e.state.contacts.forEach((function(e){if(e.name.toLowerCase()===t.name.toLowerCase())return t.name="repeat",alert("contact is already in the directory")})),"repeat"!==t.name&&e.setState((function(e){var n=e.contacts;return{contacts:[t].concat(Object(s.a)(n))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleContact=function(){var t=e.state,n=t.filter,a=t.contacts,r=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(r)}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.formSubmitHandler,n=this.changeFilter,a=this.deleteContact,r=this.getVisibleContact();return Object(j.jsxs)(h,{children:[Object(j.jsx)("h1",{className:J.a.title,children:"Phonebook"}),Object(j.jsx)(v,{onSubmit:t}),Object(j.jsx)(g,{value:e,onChange:n}),Object(j.jsx)("h2",{className:J.a.contactTitle,children:"Contacts"}),Object(j.jsx)(k,{contacts:r,onDeleteContact:a})]})}}]),n}(a.Component),z=q;i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.cefc06cb.chunk.js.map