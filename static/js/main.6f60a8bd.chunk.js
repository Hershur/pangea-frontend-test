(this["webpackJsonppangea-frontend-test"]=this["webpackJsonppangea-frontend-test"]||[]).push([[0],{15:function(t,e,n){"use strict";n.r(e);n(8),n(9);var o=n(1),c=n.n(o),i=n(6),r=n.n(i),l=n(5),s=n(7),a=n(0);var u=function(){var t=new URL(document.URL).hash;t||(window.location.hash="#tags=red,blue,purple");var e=function(t){var e,n;return null===t||void 0===t||null===(e=t.split("=")[1])||void 0===e||null===(n=e.split(","))||void 0===n?void 0:n.map((function(t,e){return{id:e,color:t}}))},n=Object(o.useState)(e(t)),c=Object(s.a)(n,2),i=c[0],r=c[1],u=Object(o.useRef)(null),d=function(t){var e=i.filter((function(e){return e.id!==+t.target.id})).map((function(t){return t.color.toLowerCase()}));window.location.hash="".concat(window.location.hash.split("=")[0],"=").concat(Object(l.a)(e))};return Object(o.useEffect)((function(){window.addEventListener("hashchange",(function(t){return r(e(window.location.hash))}))}),[t]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Test - Frontend"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"color",className:"form-label mt-4",children:"Color"}),Object(a.jsx)("input",{ref:u,style:{marginBottom:"5px"},type:"text",className:"form-control",id:"color",placeholder:"Enter color"}),Object(a.jsx)("button",{onClick:function(t){i.push({id:i.length,color:u.current.value});var e=i.map((function(t){return t.color.toLowerCase()}));window.location.hash="".concat(window.location.hash.split("=")[0],"=").concat(Object(l.a)(e))},type:"button",className:"btn btn-success",children:"Add Color"})]}),Object(a.jsx)("hr",{}),Object(a.jsx)("ul",{className:"list-group",children:null===i||void 0===i?void 0:i.map((function(t,e){return t&&Object(a.jsx)("li",{onClick:d,className:"list-group-item d-flex justify-content-between align-items-center",id:t.id,children:decodeURI(t.color.substring(0,1).toUpperCase()+t.color.substring(1))},t.id)}))})]})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),o(t),c(t),i(t),r(t)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root")),d()},9:function(t,e,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.6f60a8bd.chunk.js.map