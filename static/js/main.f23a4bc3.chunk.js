(this["webpackJsonphs-soft-test-project"]=this["webpackJsonphs-soft-test-project"]||[]).push([[0],{45:function(e){e.exports=JSON.parse('{"data":[{"name":"Asia","children":[{"name":"India","children":[{"name":"Goa","children":[{"name":"North Goa","children":[{"name":"Arambol","children":[]},{"name":"Mandrem","children":[]},{"name":"Morjim","children":[]},{"name":"Chapora","children":[]}]},{"name":"South Goa","children":[{"name":"Margao","children":[]},{"name":"Colva","children":[]},{"name":"Canacona","children":[]}]}]},{"name":"Karnataka","children":[{"name":"Bengaluru","children":[]},{"name":"Hampi","children":[]}]},{"name":"Tamil Nadu","children":[{"name":"Chennai","children":[]},{"name":"Madurai","children":[]}]}]},{"name":"Sri Lanka","children":[{"name":"Colombo","children":[]},{"name":"Matara","children":[]},{"name":"Haputale","children":[]},{"name":"Ella","children":[]}]}]},{"name":"Europe","children":[{"name":"Ukraine","children":[{"name":"Kyiv","children":[]},{"name":"Lviv","children":[]},{"name":"Dnipro","children":[]}]},{"name":"Unite Kingdom","children":[{"name":"England","children":[{"name":"London","children":[]},{"name":"Manchester","children":[]}]},{"name":"Scotland","children":[]},{"name":"Wales","children":[]},{"name":"North Ireland","children":[]}]}]},{"name":"Africa","children":[{"name":"Nigeria","children":[]},{"name":"Ethiopia","children":[]},{"name":"Egypt","children":[]}]},{"name":"America","children":[{"name":"USA","children":[]},{"name":"Canada","children":[]}]},{"name":"Antarctica","children":[]}]}')},56:function(e,n,a){},65:function(e,n,a){},67:function(e,n,a){},68:function(e,n,a){},69:function(e,n,a){},71:function(e,n,a){"use strict";a.r(n);var t,r=a(4),c=a.n(r),i=a(44),l=a.n(i),s=(a(56),a(84)),o=a(82),d=a(81),h=a(8),m=a(85),u=a(32),j=a.n(u),b=a(45),f=a(49),x="recursiveDataGeneration",p="dynamicDataGeneration",O="staticData",g="externalData",v=function e(n,a){for(var t=[],r=0;r<a;r+=1){if(0===n)return t;t[r]={name:"item: ".concat(r+1," - ").concat(n),children:e(n-1,a)}}return t},N=function(e,n,a){for(var t=a,r=0;r<n;r+=1)t[r]={name:"item: ".concat(r+1," - ").concat(e),children:[]};return t},C=(a(65),a(2)),y=Object(r.createContext)({visibleContext:!0,setVisibleContext:function(){return null}}),k=function e(n){var a,t,c=n.data,i=n.soursData,l=n.ni,s=n.m,o=Object(r.useState)(!1),d=Object(h.a)(o,2),m=d[0],u=d[1],b=Object(r.useContext)(y),O=b.visibleContext,g=b.setVisibleContext,v=Object(f.a)({},c);Object(r.useEffect)((function(){O||(u(!1),g(!0))}),[g,O]);var k=i===p||i===x?0===l:!c.children||0===(null===(a=c.children)||void 0===a?void 0:a.length);return Object(C.jsxs)("div",{className:"countries-container",children:[Object(C.jsx)("div",{className:"countries-item ".concat(k?"last-children":""),onClick:function(){(i===p&&l>0||i===p)&&(v.children=N(l,s,v.children)),g(!k),u(!m)},children:c.name}),null===(t=c.children)||void 0===t?void 0:t.map((function(n){return m?Object(C.jsx)(e,{data:n,soursData:i,ni:l-1,m:s},j.a.generate()):Object(C.jsx)(C.Fragment,{})}))]})},w=a(46),M=a(83),S=Object(M.a)(t||(t=Object(w.a)(["\n  query {\n    data: continents {\n      name\n      children: countries {\n        name\n        children: languages {\n          name\n        }\n      }\n    }\n  }\n"]))),D=(a(67),function(e){var n=e.soursData,a=e.setSoursData;return Object(C.jsxs)("div",{className:"sours-data-button form-check",children:[Object(C.jsx)("input",{type:"radio",className:"btn-check",name:"sours-data",id:"static-data",autoComplete:"off",checked:n===O,onChange:function(){return a(O)}}),Object(C.jsx)("label",{className:"btn btn-outline-primary",htmlFor:"static-data",children:"Static data"})," ",Object(C.jsx)("input",{type:"radio",className:"btn-check",name:"sours-data",id:"recursive-data-generation",autoComplete:"off",checked:n===x,onChange:function(){return a(x)}}),Object(C.jsx)("label",{className:"btn btn-outline-warning",htmlFor:"recursive-data-generation",children:"Recursively generated data"})," ",Object(C.jsx)("input",{type:"radio",className:"btn-check",name:"sours-data",id:"dynamic-data-generation",autoComplete:"off",checked:n===p,onChange:function(){return a(p)}}),Object(C.jsx)("label",{className:"btn btn-outline-primary",htmlFor:"dynamic-data-generation",children:"Dynamically generated data"})," ",Object(C.jsx)("input",{type:"radio",className:"btn-check",name:"sours-data",id:"external-data",autoComplete:"off",checked:n===g,onChange:function(){return a(g)}}),Object(C.jsx)("label",{className:"btn btn-outline-primary",htmlFor:"external-data",children:"External data"})]})}),A=(a(68),function(e){var n=e.n,a=e.setN,t=e.m,r=e.setM;return Object(C.jsxs)("div",{className:"input-group mb-3",children:[Object(C.jsx)("span",{className:"input-group-text",children:"n = "}),Object(C.jsx)("input",{type:"text",className:"form-control",placeholder:"n - depth of JSON tree","aria-label":"n - depth of JSON tree",value:n,onChange:function(e){return a(+e.currentTarget.value)}}),Object(C.jsx)("span",{className:"input-group-text",children:"m = "}),Object(C.jsx)("input",{type:"text",className:"form-control",placeholder:"m - number of children","aria-label":"m - number of children",value:t,onChange:function(e){return r(+e.currentTarget.value)}})]})}),E=function(e){var n=e.n,a=e.setN,t=e.m,r=e.setM;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"alert alert-warning d-flex align-items-center",role:"alert",children:[Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-exclamation-triangle-fill flex-shrink-0 me-2",viewBox:"0 0 16 16",role:"img","aria-label":"Warning:",children:Object(C.jsx)("path",{d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})}),Object(C.jsxs)("div",{children:["In this approach, the data object for the React component is created using a compact recursive function.",Object(C.jsx)("br",{}),"But this approach is not suitable for large values of n (depth of the object tree)."]})]}),Object(C.jsx)("div",{className:"recursive-data-info-listing",children:Object(C.jsx)("img",{src:"./img/listing1.png",alt:""})}),Object(C.jsx)(A,{n:n,setN:a,m:t,setM:r})]})},L=(a(69),function(e){var n=e.n,a=e.setN,t=e.m,r=e.setM;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"alert alert-success d-flex align-items-center",role:"alert",children:[Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-exclamation-triangle-fill flex-shrink-0 me-2",viewBox:"0 0 16 16",role:"img","aria-label":"Warning:",children:Object(C.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})}),Object(C.jsxs)("div",{children:["In this approach, the data object for the React component is dynamically created in chunks.",Object(C.jsx)("br",{}),"This approach is suitable for any values of n (depth of the object tree) and m (number of children in each node of object)"]})]}),Object(C.jsx)("div",{className:"dynamic-data-info-listing",children:Object(C.jsx)("img",{src:"./img/listing2.png",alt:""})}),Object(C.jsx)(A,{n:n,setN:a,m:t,setM:r})]})}),F=function(){var e,n=Object(r.useState)(!0),a=Object(h.a)(n,2),t=a[0],c=a[1],i=Object(r.useState)(O),l=Object(h.a)(i,2),s=l[0],o=l[1],d=Object(r.useState)(5),u=Object(h.a)(d,2),f=u[0],g=u[1],w=Object(r.useState)(4),M=Object(h.a)(w,2),A=M[0],F=M[1],z=Object(m.a)(S),B=z.loading,G=z.error,I=z.data;if(B)return Object(C.jsx)("p",{children:"Loading..."});if(G)return Object(C.jsx)("p",{children:"Error :("});var J,T=I.data;switch(s){case x:J=v(f,A);break;case p:J=N(f,A,J=[]);break;case O:J=b.data;break;default:J=T}return Object(C.jsxs)("div",{className:"App container",children:[Object(C.jsx)(D,{soursData:s,setSoursData:function(e){g(5),F(4),o(e)}}),s===x&&Object(C.jsx)(E,{n:f,setN:g,m:A,setM:F}),s===p&&Object(C.jsx)(L,{n:f,setN:g,m:A,setM:F}),Object(C.jsx)(y.Provider,{value:{visibleContext:t,setVisibleContext:c},children:null===(e=J)||void 0===e?void 0:e.map((function(e){return Object(C.jsx)(k,{data:e,soursData:s,ni:f-1,m:A},j.a.generate())}))})]})},z=new s.a,B=new o.a({uri:"https://countries.trevorblades.com/",cache:z});l.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(d.a,{client:B,children:Object(C.jsx)(F,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.f23a4bc3.chunk.js.map