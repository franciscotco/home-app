!function(){"use strict";var e,n={"./node_modules/css-loader/dist/cjs.js!./src/Expenses/ExpenseList/ExpenseItem/ExpenseItem.css":function(e,n,s){var t=s("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=s.n(t),r=s("./node_modules/css-loader/dist/runtime/api.js"),i=s.n(r)()(o());i.push([e.id,".expense-item {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n",""]),n.Z=i},"./node_modules/css-loader/dist/cjs.js!./src/Expenses/ExpenseList/ExpenseList.css":function(e,n,s){var t=s("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=s.n(t),r=s("./node_modules/css-loader/dist/runtime/api.js"),i=s.n(r)()(o());i.push([e.id,".expense-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  gap: 8px;\n  overflow: auto;\n}\n",""]),n.Z=i},"./node_modules/css-loader/dist/cjs.js!./src/Expenses/Expenses.css":function(e,n,s){var t=s("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=s.n(t),r=s("./node_modules/css-loader/dist/runtime/api.js"),i=s.n(r)()(o());i.push([e.id,".expenses {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 10px;\n  background-color: #282c34;\n  color: white;\n  font-size: calc(10px + 2vmin);\n  width: 100%;\n  height: 100%;\n}\n\n.expenses-content {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: stretch;\n  gap: 14px;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.expenses-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n}\n\n.expenses-amount {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.expenses-list {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  height: 100%;\n  flex: 1;\n}\n",""]),n.Z=i},"./node_modules/css-loader/dist/cjs.js!./src/components/buttons/Button/Button.css":function(e,n,s){var t=s("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=s.n(t),r=s("./node_modules/css-loader/dist/runtime/api.js"),i=s.n(r)()(o());i.push([e.id,".button {\n  cursor: pointer;\n}\n\n.small {\n  height: 26px;\n  padding: 4px 8px;\n}\n\n.medium {\n  height: 38px;\n  padding: 4px 8px;\n}\n",""]),n.Z=i},"./node_modules/css-loader/dist/cjs.js!./src/components/controls/Input/input.css":function(e,n,s){var t=s("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=s.n(t),r=s("./node_modules/css-loader/dist/runtime/api.js"),i=s.n(r)()(o());i.push([e.id,".input {\n  height: 38px;\n  padding: 4px 8px;\n  width: 240px;\n}\n",""]),n.Z=i},"./node_modules/css-loader/dist/cjs.js!./src/index.css":function(e,n,s){var t=s("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=s.n(t),r=s("./node_modules/css-loader/dist/runtime/api.js"),i=s.n(r)()(o());i.push([e.id,"* {\n  box-sizing: border-box;\n}\n\n#root, body, html {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n",""]),n.Z=i},"./src/index.tsx":function(e,n,s){var t=s("./node_modules/react/jsx-runtime.js"),o=s("./node_modules/react/index.js"),r=s("./node_modules/react-dom/client.js"),i=s("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=s.n(i),l=s("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),c=s.n(l),d=s("./node_modules/style-loader/dist/runtime/insertBySelector.js"),u=s.n(d),m=s("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),p=s.n(m),f=s("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),x=s.n(f),j=s("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),v=s.n(j),h=s("./node_modules/css-loader/dist/cjs.js!./src/index.css"),y={};y.styleTagTransform=v(),y.setAttributes=p(),y.insert=u().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=x(),a()(h.Z,y),h.Z&&h.Z.locals&&h.Z.locals;var b=s("./node_modules/classnames/index.js"),g=s.n(b),E=s("./node_modules/css-loader/dist/cjs.js!./src/components/buttons/Button/Button.css"),O={};O.styleTagTransform=v(),O.setAttributes=p(),O.insert=u().bind(null,"head"),O.domAPI=c(),O.insertStyleElement=x(),a()(E.Z,O),E.Z&&E.Z.locals&&E.Z.locals;var w=function(){return w=Object.assign||function(e){for(var n,s=1,t=arguments.length;s<t;s++)for(var o in n=arguments[s])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},w.apply(this,arguments)},_=(0,o.forwardRef)((function(e,n){var s,o=e.children,r=e.className,i=e.size,a=void 0===i?"medium":i,l=function(e,n){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(s[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(s[t[o]]=e[t[o]])}return s}(e,["children","className","size"]);return(0,t.jsx)("button",w({},l,{ref:n,className:g()(r,"button",(s={},s[a]=Boolean(a),s)),children:o}))})),S=s("./node_modules/css-loader/dist/cjs.js!./src/components/controls/Input/input.css"),Z={};Z.styleTagTransform=v(),Z.setAttributes=p(),Z.insert=u().bind(null,"head"),Z.domAPI=c(),Z.insertStyleElement=x(),a()(S.Z,Z),S.Z&&S.Z.locals&&S.Z.locals;var N=function(){return N=Object.assign||function(e){for(var n,s=1,t=arguments.length;s<t;s++)for(var o in n=arguments[s])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},N.apply(this,arguments)};function k(){document.querySelectorAll("input").forEach((function(e){e.disabled=!0}))}k(),window.addEventListener("online",k),window.addEventListener("offline",k),window.addEventListener("load",(function(){var e=document.getElementsByTagName("input");console.log("LOAD");for(var n=0;n<e.length;n++)e[n].disabled=!1}));var I=(0,o.forwardRef)((function(e,n){var s=e.className,r=e.disabled,i=function(e,n){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(s[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(s[t[o]]=e[t[o]])}return s}(e,["className","disabled"]),a=(0,o.useCallback)((function(){console.log("OFFLINE"),n&&"function"!=typeof n&&n.current&&(console.log("HELLO"),n.current.disabled=!1)}),[n]);return(0,o.useEffect)((function(){return a(),window.addEventListener("offline",a),function(){window.removeEventListener("offline",a)}}),[a]),(0,t.jsx)("input",N({},i,{ref:n,disabled:r,className:g()(s,"input")}))})),A=function(){return A=Object.assign||function(e){for(var n,s=1,t=arguments.length;s<t;s++)for(var o in n=arguments[s])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},A.apply(this,arguments)},P={},C=function(e,n){return Object.values(e).filter((function(e){return e.name===n}))},M=function(e){var n=e.emma-e.francois;return n>0?"François doit ".concat((Math.abs(n)/2).toFixed(2),"€ à Emma."):n<0?"Emma doit ".concat((Math.abs(n)/2).toFixed(2),"€ à François."):"Les dépenses sont équilibrées."},T=s("./node_modules/css-loader/dist/cjs.js!./src/Expenses/ExpenseList/ExpenseItem/ExpenseItem.css"),L={};L.styleTagTransform=v(),L.setAttributes=p(),L.insert=u().bind(null,"head"),L.domAPI=c(),L.insertStyleElement=x(),a()(T.Z,L),T.Z&&T.Z.locals&&T.Z.locals;var F=function(e){var n=e.amount,s=e.id,r=e.removeExpense,i=(0,o.useCallback)((function(){return r(s)}),[]);return(0,t.jsxs)("li",{className:"expense-item",children:[n,"€",(0,t.jsx)(_,{onClick:i,size:"small",children:"supprimer"})]},s)},z=s("./node_modules/css-loader/dist/cjs.js!./src/Expenses/ExpenseList/ExpenseList.css"),B={};B.styleTagTransform=v(),B.setAttributes=p(),B.insert=u().bind(null,"head"),B.domAPI=c(),B.insertStyleElement=x(),a()(z.Z,B),z.Z&&z.Z.locals&&z.Z.locals;var R=function(e){var n=e.items,s=e.removeExpense;return(0,t.jsx)("ul",{className:"expense-list",children:n.map((function(e){var n=e.amount,o=e.id;return(0,t.jsx)(F,{amount:n,id:o,removeExpense:s},o)}))})},W=function(e){var n,s=e.name,r=e.title,i=e.totalAmount,a=e.addExpense,l=e.amount,c=(0,o.useCallback)((function(){return a(s)}),[s,a]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("h4",{children:[r,": ",i,"€"]}),(0,t.jsxs)(_,{onClick:c,disabled:!l,children:["+ ",(n=l,"string"==typeof n||isNaN(n)?"0":n.toFixed(2)),"€ à ",r]})]})},D="EXPENSES",q=function(){var e=localStorage.getItem(D);return e?JSON.parse(e):P},H=s("./node_modules/css-loader/dist/cjs.js!./src/Expenses/Expenses.css"),J={};J.styleTagTransform=v(),J.setAttributes=p(),J.insert=u().bind(null,"head"),J.domAPI=c(),J.insertStyleElement=x(),a()(H.Z,J),H.Z&&H.Z.locals&&H.Z.locals;var U=function(){return U=Object.assign||function(e){for(var n,s=1,t=arguments.length;s<t;s++)for(var o in n=arguments[s])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},U.apply(this,arguments)},V=function(){var e=(0,o.useState)(""),n=e[0],s=e[1],r=function(){var e=(0,o.useState)(q),n=e[0],s=e[1],t=(0,o.useCallback)((function(e){s((function(n){var s="function"==typeof e?e(n):e;return function(e){localStorage.setItem(D,JSON.stringify(e))}(s),s}))}),[]);return[n,t]}(),i=r[0],a=r[1],l=(0,o.useRef)(null),c=(0,o.useCallback)((function(){window.confirm("Voulez-vous réinitialisez toutes les dépenses à zéro ?")&&a(P)}),[]),d=(0,o.useCallback)((function(e){s(parseFloat(e.currentTarget.value)||"")}),[]),u=(0,o.useCallback)((function(e){"number"==typeof n&&a((function(t){var o,r=(new Date).getTime(),i="".concat(e,":").concat(n,":").concat(r);return s(""),l.current&&l.current.focus(),U(U({},t),((o={})[i]={amount:n,name:e,timestamp:r,id:i},o))}))}),[n]),m=(0,o.useCallback)((function(e){a((function(n){return delete n[e],n}))}),[]),p=(0,o.useMemo)((function(){return function(e){return Object.values(e).reduce((function(e,n){var s;return A(A({},e),((s={})[n.name]=e[n.name]+n.amount,s))}),{emma:0,francois:0})}(i)}),[i]),f=(0,o.useMemo)((function(){return C(i,"emma")}),[i]),x=(0,o.useMemo)((function(){return C(i,"francois")}),[i]);return(0,t.jsxs)("div",{className:"expenses",children:[(0,t.jsxs)("header",{className:"expenses-header",children:[(0,t.jsx)("h3",{children:M(p)}),(0,t.jsxs)("div",{className:"expenses-amount",children:["Montant: ",(0,t.jsx)(I,{ref:l,value:n,type:"number",onChange:d,autoFocus:!0,step:"1",inputMode:"decimal"})]})]}),(0,t.jsxs)("div",{className:"expenses-content",children:[(0,t.jsxs)("div",{className:"expenses-list",children:[(0,t.jsx)(W,{title:"François",name:"francois",addExpense:u,amount:n,totalAmount:p.francois}),(0,t.jsx)(R,{removeExpense:m,items:x})]}),(0,t.jsxs)("div",{className:"expenses-list",children:[(0,t.jsx)(W,{title:"Emma",name:"emma",addExpense:u,amount:n,totalAmount:p.emma}),(0,t.jsx)(R,{removeExpense:m,items:f})]})]}),(0,t.jsx)("div",{children:(0,t.jsx)(_,{onClick:c,size:"medium",children:"Réinitialiser toutes les dépenses"})})]})};"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js").then((function(e){console.log("SW registered: ",e)})).catch((function(e){console.log("SW registration failed: ",e)}))})),r.createRoot(function(){var e=document.getElementById("root");if(e)return e;var n=document.createElement("div");return n.id="root",document.body.appendChild(n),n}()).render((0,t.jsx)(o.StrictMode,{children:(0,t.jsx)((function(){return(0,t.jsx)(V,{})}),{})}))}},s={};function t(e){var o=s[e];if(void 0!==o)return o.exports;var r=s[e]={id:e,exports:{}};return n[e](r,r.exports,t),r.exports}t.m=n,e=[],t.O=function(n,s,o,r){if(!s){var i=1/0;for(d=0;d<e.length;d++){s=e[d][0],o=e[d][1],r=e[d][2];for(var a=!0,l=0;l<s.length;l++)(!1&r||i>=r)&&Object.keys(t.O).every((function(e){return t.O[e](s[l])}))?s.splice(l--,1):(a=!1,r<i&&(i=r));if(a){e.splice(d--,1);var c=o();void 0!==c&&(n=c)}}return n}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[s,o,r]},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,s){var o,r,i=s[0],a=s[1],l=s[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(l)var d=l(t)}for(n&&n(s);c<i.length;c++)r=i[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(d)},s=self.webpackChunkhome_app=self.webpackChunkhome_app||[];s.forEach(n.bind(null,0)),s.push=n.bind(null,s.push.bind(s))}(),t.nc=void 0;var o=t.O(void 0,[945],(function(){return t("./src/index.tsx")}));o=t.O(o)}();