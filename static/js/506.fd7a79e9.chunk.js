"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[506],{5506:function(n,e,r){r.r(e),r.d(e,{default:function(){return vn}});var t,i,o,a,c,s,l,d,p,u,x,f,b,g,h,m,Z,v,w,j,y,k,z,C,N,E,_=r(9439),A=r(2791),$=r(9434),I=r(1892),L=function(n){return n.contacts.items},M=function(n){return n.contacts.isLoading},S=function(n){return n.contacts.error},B=function(n){return n.filters},D=r(9195),q=r(168),F=r(4112),K=r(9135),T=(0,F.Z)(K.Bj$)(t||(t=(0,q.Z)(["\n  width: 20px;\n  height: 20px;\n\n  fill: #fabb18;\n"]))),G=F.Z.form(i||(i=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),J=F.Z.label(o||(o=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 12px;\n  font-size: 16px;\n  font-weight: 500;\n"]))),P=F.Z.input(a||(a=(0,q.Z)(["\n  width: 250px;\n  padding: 22px 36px;\n\n  color: #000000;\n  background: #efefef;\n  border-radius: 18px;\n  border-style: none;\n\n  :placeholder {\n    color: #757575;\n  }\n"]))),R=F.Z.button(c||(c=(0,q.Z)(["\n  font-weight: 700;\n  font-size: 18px;\n\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: fit-content;\n\n  margin-top: 24px;\n  padding: 1.063em 1.5em;\n\n  background-color: #000000;\n\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(250, 187, 24, 0.1);\n  border-radius: 14px;\n\n  cursor: pointer;\n\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: #000000;\n    background-color: rgba(250, 187, 24, 0.1);\n    border: 1px solid #000000;\n\n    > svg {\n      fill: #000000;\n    }\n  }\n"]))),X=r(1686),Y=r(3329),H=function(n){var e=n.onCloseModal,r=(0,$.I0)(),t=(0,$.v9)(L);return(0,Y.jsxs)(G,{onSubmit:function(n){n.preventDefault();var i=n.target,o=n.target.elements.name.value,a=n.target.elements.number.value;return t.some((function(n){return n.name===o}))?alert("".concat(o," is already in contacts")):t.some((function(n){return n.number===a}))?alert("".concat(a," is already in contacts")):(r((0,I.uK)({name:o,number:a.toString()})).then((function(n){X.Notify.success("".concat(n.name," successfully added to contacts"))})).catch((function(){X.Notify.failure("Sorry, something's wrong")})),e(),void i.reset())},autoComplete:"off",children:[(0,Y.jsxs)(J,{children:["Name",(0,Y.jsx)(P,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name ...",value:t.name})]}),(0,Y.jsxs)(J,{children:["Number",(0,Y.jsx)(P,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Enter number ...",value:t.number})]}),(0,Y.jsxs)(R,{type:"submit",children:[(0,Y.jsx)(T,{}),"New contact"]})]})},O=r(3985),Q=F.Z.label(s||(s=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 16px;\n  font-weight: 500;\n"]))),U=F.Z.input(l||(l=(0,q.Z)(["\n  width: 250px;\n  padding: 22px 36px;\n\n  color: #000000;\n  background: #efefef;\n  border-radius: 18px;\n  border-style: none;\n\n  :placeholder {\n    color: #757575;\n  }\n"]))),V=function(){var n=(0,$.I0)(),e=(0,$.v9)(B);return(0,Y.jsx)(Q,{children:(0,Y.jsx)(U,{type:"text",name:"filter",placeholder:"Enter contact name",value:e,onChange:function(e){var r=e.currentTarget.value.toLowerCase().trim();n((0,O.p)(r))}})})},W=r(3433),nn=(0,F.Z)(K.Xws)(d||(d=(0,q.Z)(["\n  padding: 8px;\n\n  width: 20px;\n  height: 20px;\n\n  fill: #fabb18;\n\n  border-radius: 12px;\n\n  background-color: rgba(250, 187, 24, 0.1);\n"]))),en=(0,F.Z)(K.DNl)(p||(p=(0,q.Z)(["\n  padding: 8px;\n\n  width: 20px;\n  height: 20px;\n\n  fill: #fabb18;\n\n  border-radius: 12px;\n\n  background-color: rgba(250, 187, 24, 0.1);\n"]))),rn=(0,F.Z)(K.dIY)(u||(u=(0,q.Z)(["\n  width: 20px;\n  height: 20px;\n\n  fill: #fabb18;\n"]))),tn=F.Z.li(x||(x=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 6px;\n\n  padding: 20px 20px;\n\n  border-radius: 24px;\n  border: 1px solid rgba(0, 0, 0, 0.04);\n\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);\n"]))),on=F.Z.p(f||(f=(0,q.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 14px;\n\n  margin: 0;\n  font-weight: 500;\n"]))),an=F.Z.p(b||(b=(0,q.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 14px;\n\n  margin: 0;\n  /* margin-left: 10px; */\n"]))),cn=F.Z.button(g||(g=(0,q.Z)(["\n  font-weight: 700;\n\n  display: flex;\n  align-items: center;\n  gap: 14px;\n\n  padding: 0.563em 1em;\n  background-color: #000000;\n\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(250, 187, 24, 0.1);\n  border-radius: 8px;\n\n  cursor: pointer;\n\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: #000000;\n    background-color: rgba(250, 187, 24, 0.1);\n    border: 1px solid #000000;\n\n    > svg {\n      fill: #000000;\n    }\n  }\n"]))),sn=function(n){var e=n.id,r=n.name,t=n.number,i=(0,$.I0)();return(0,Y.jsxs)(tn,{children:[(0,Y.jsxs)(on,{children:[(0,Y.jsx)(nn,{}),r]}),(0,Y.jsxs)(an,{children:[(0,Y.jsx)(en,{}),t]}),(0,Y.jsxs)(cn,{onClick:function(){return n=e,void i((0,I.GK)(n)).unwrap().then((function(n){X.Notify.success("".concat(n.name," successfully deleted from contacts"))})).catch((function(){X.Notify.failure("Sorry, something's wrong")}));var n},children:[(0,Y.jsx)(rn,{}),"Delete"]})]},e)},ln=F.Z.ul(h||(h=(0,q.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n\n  grid-gap: 24px;\n"]))),dn=function(){var n=(0,$.v9)(L),e=(0,$.v9)(B),r=(0,W.Z)(n.filter((function(n){return n.name.toLowerCase().includes(e)})));return(0,Y.jsx)(ln,{children:r.map((function(n){var e=n.name,r=n.number,t=n.id;return(0,Y.jsx)(sn,{id:t,name:e,number:r},t)}))})},pn=(0,F.Z)(K.Bj$)(m||(m=(0,q.Z)(["\n  width: 20px;\n  height: 20px;\n\n  fill: #fabb18;\n"]))),un=F.Z.div(Z||(Z=(0,q.Z)(["\n  padding: 38px 48px;\n  height: 100vh;\n\n  border-radius: 32px 32px 0 0;\n  background-color: #f9f9f9;\n"]))),xn=F.Z.div(v||(v=(0,q.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 28px;\n"]))),fn=F.Z.h2(w||(w=(0,q.Z)(["\n  font-weight: 700;\n  font-size: 34px;\n\n  margin: 0;\n"]))),bn=F.Z.div(j||(j=(0,q.Z)(["\n  display: flex;\n  margin-left: auto;\n"]))),gn=(F.Z.form(y||(y=(0,q.Z)([""]))),F.Z.label(k||(k=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 12px;\n  font-size: 16px;\n  font-weight: 500;\n"]))),F.Z.input(z||(z=(0,q.Z)(["\n  width: 250px;\n  padding: 22px 36px;\n\n  color: #000000;\n  background: #efefef;\n  border-radius: 18px;\n  border-style: none;\n\n  :placeholder {\n    color: #757575;\n  }\n"]))),F.Z.button(C||(C=(0,q.Z)(["\n  font-weight: 700;\n  font-size: 14px;\n\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: fit-content;\n\n  padding: 1.063em 1.5em;\n  margin-left: 28px;\n\n  background-color: #000000;\n\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(250, 187, 24, 0.1);\n  border-radius: 14px;\n\n  cursor: pointer;\n\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: #000000;\n    background-color: rgba(250, 187, 24, 0.1);\n    border: 1px solid #000000;\n    > svg {\n      fill: #000000;\n    }\n  }\n"])))),hn=F.Z.div(N||(N=(0,q.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(138.13deg, #22343c75 25.87%, #1f2e3572 100%);\n  z-index: 1200;\n"]))),mn=F.Z.div(E||(E=(0,q.Z)(["\n  border-radius: 25px;\n  overflow: hidden;\n\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n\n  padding-left: 30px;\n  padding-right: 30px;\n  background-color: #f9f9f9;\n"]))),Zn=function(n){var e=n.children,r=n.onCloseModal;(0,A.useEffect)((function(){var n=function(n){"Escape"===n.code&&r()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[r]);return(0,Y.jsx)(hn,{onClick:function(n){var e=n.target;n.currentTarget===e&&r()},children:(0,Y.jsx)(mn,{children:e})})},vn=function(){var n=(0,$.I0)(),e=(0,$.v9)(M),r=(0,$.v9)(S),t=(0,A.useState)(!1),i=(0,_.Z)(t,2),o=i[0],a=i[1];(0,A.useEffect)((function(){n((0,I.yF)())}),[n]);var c=function(){a((function(n){return!n}))};return(0,Y.jsxs)(un,{children:[(0,Y.jsxs)(D.$,{children:[(0,Y.jsxs)(xn,{children:[(0,Y.jsx)(fn,{children:"Contacts"}),(0,Y.jsxs)(bn,{children:[(0,Y.jsx)(V,{}),(0,Y.jsxs)(gn,{type:"button",onClick:c,children:[(0,Y.jsx)(pn,{}),"New Contact"]})]})]}),e&&!r&&(0,Y.jsx)("b",{children:"Request in progress"}),(0,Y.jsx)(dn,{})]}),o&&(0,Y.jsx)(Zn,{children:(0,Y.jsx)(D.$,{title:"Add New Contact",children:(0,Y.jsx)(H,{onCloseModal:c})}),onCloseModal:c})]})}},9195:function(n,e,r){r.d(e,{$:function(){return d}});var t,i,o=r(168),a=r(4112),c=a.Z.section(t||(t=(0,o.Z)(["\n  margin: auto;\n  padding: 26px 0;\n\n  background-color: #f9f9f9;\n"]))),s=a.Z.h2(i||(i=(0,o.Z)(["\n  font-weight: 700;\n  font-size: 34px;\n\n  text-align: center;\n  margin: 0;\n"]))),l=r(3329),d=function(n){var e=n.title,r=n.children;return(0,l.jsxs)(c,{children:[e&&(0,l.jsx)(s,{children:e}),r]})}}}]);
//# sourceMappingURL=506.fd7a79e9.chunk.js.map