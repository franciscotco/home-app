!function(){"use strict";var e,n={"./node_modules/css-loader/dist/cjs.js!./src/Expenses/ExpenseHeader/ExpenseHeader.css":function(e,n,s){var t=s("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=s.n(t),r=s("./node_modules/css-loader/dist/runtime/api.js"),i=s.n(r)()(o());i.push([e.id,".expense-header {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.expense-header--total-amount {\n  text-align: center;\n  padding: 12px 0;\n  margin: 0;\n  font-weight: 400;\n}\n",""]),n.Z=i},"./node_modules/css-loader/dist/cjs.js!./src/Expenses/ExpenseList/ExpenseItem/ExpenseItem.css":function(e,n,s){var t=s("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=s.n(t),r=s("./node_modules/css-loader/dist/runtime/api.js"),i=s.n(r)()(o());i.push([e.id,".expense-item {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n\n  padding: 8px 0;\n}\n\n.expense-item--avatar {\n  display: flex;\n  justify-content: flex-start;\n  flex: 1;\n}\n",""]),n.Z=i},"./node_modules/css-loader/dist/cjs.js!./src/Expenses/ExpenseList/ExpenseList.css":function(e,n,s){var t=s("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=s.n(t),r=s("./node_modules/css-loader/dist/runtime/api.js"),i=s.n(r)()(o());i.push([e.id,".expense-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  gap: 8px;\n  overflow: auto;\n}\n",""]),n.Z=i},"./node_modules/css-loader/dist/cjs.js!./src/Expenses/Expenses.css":function(e,n,s){var t=s("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=s.n(t),r=s("./node_modules/css-loader/dist/runtime/api.js"),i=s.n(r)()(o());i.push([e.id,".expenses {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 10px;\n  background-color: #282c34;\n  color: white;\n  font-size: calc(10px + 2vmin);\n  width: 100%;\n  height: 100%;\n}\n\n.expenses--content {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 12px;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.expenses-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n\n.expenses--list-sort {\n  font-size: 12px;\n}\n\n.expenses-list {\n  display: flex;\n  flex-direction: row;\n  gap: 12px;\n}\n\n.expenses--footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n",""]),n.Z=i},"./node_modules/css-loader/dist/cjs.js!./src/components/Avatar/Avatar.css":function(e,n,s){var t=s("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=s.n(t),r=s("./node_modules/css-loader/dist/runtime/api.js"),i=s.n(r)()(o());i.push([e.id,".avatar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  font-size: 16px;\n  font-weight: 700;\n  background-color: #FFFFFF;\n  padding: 4px;\n  border: 1px solid #FFFFFF;\n}\n",""]),n.Z=i},"./node_modules/css-loader/dist/cjs.js!./src/components/buttons/Button/Button.css":function(e,n,s){var t=s("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=s.n(t),r=s("./node_modules/css-loader/dist/runtime/api.js"),i=s.n(r)()(o());i.push([e.id,".button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:not(&:disabled) {\n    cursor: pointer;\n  }\n  &:disabled {\n    cursor: not-allowed;\n  }\n}\n\n.small {\n  height: 26px;\n  padding: 4px 8px;\n}\n\n.medium {\n  height: 38px;\n  padding: 4px 8px;\n}\n",""]),n.Z=i},"./node_modules/css-loader/dist/cjs.js!./src/components/controls/Input/input.css":function(e,n,s){var t=s("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=s.n(t),r=s("./node_modules/css-loader/dist/runtime/api.js"),i=s.n(r)()(o());i.push([e.id,".input {\n  height: 38px;\n  padding: 4px 8px;\n  width: 160px;\n}\n",""]),n.Z=i},"./node_modules/css-loader/dist/cjs.js!./src/components/forms/FormGroup/FormGroup.css":function(e,n,s){var t=s("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=s.n(t),r=s("./node_modules/css-loader/dist/runtime/api.js"),i=s.n(r)()(o());i.push([e.id,".form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.form-group--label {\n  font-weight: 500;\n}\n",""]),n.Z=i},"./node_modules/css-loader/dist/cjs.js!./src/index.css":function(e,n,s){var t=s("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=s.n(t),r=s("./node_modules/css-loader/dist/runtime/api.js"),i=s.n(r)()(o());i.push([e.id,"* {\n  box-sizing: border-box;\n}\n\n#root, body, html {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n",""]),n.Z=i},"./src/index.tsx":function(e,n,s){var t=s("./node_modules/react/jsx-runtime.js"),o=s("./node_modules/react/index.js"),r=s("./node_modules/react-dom/client.js"),i=(s("./src/serviceWorker.ts"),s("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),a=s.n(i),l=s("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),d=s.n(l),c=s("./node_modules/style-loader/dist/runtime/insertBySelector.js"),u=s.n(c),m=s("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),p=s.n(m),f=s("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),x=s.n(f),j=s("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),h=s.n(j),v=s("./node_modules/css-loader/dist/cjs.js!./src/index.css"),y={};y.styleTagTransform=h(),y.setAttributes=p(),y.insert=u().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=x(),a()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals;var b=s("./node_modules/classnames/index.js"),g=s.n(b),E=s("./node_modules/css-loader/dist/cjs.js!./src/components/buttons/Button/Button.css"),_={};_.styleTagTransform=h(),_.setAttributes=p(),_.insert=u().bind(null,"head"),_.domAPI=d(),_.insertStyleElement=x(),a()(E.Z,_),E.Z&&E.Z.locals&&E.Z.locals;var O=function(){return O=Object.assign||function(e){for(var n,s=1,t=arguments.length;s<t;s++)for(var o in n=arguments[s])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},O.apply(this,arguments)},Z=(0,o.forwardRef)((function(e,n){var s,o=e.children,r=e.className,i=e.size,a=void 0===i?"medium":i,l=function(e,n){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(s[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(s[t[o]]=e[t[o]])}return s}(e,["children","className","size"]);return(0,t.jsx)("button",O({},l,{ref:n,className:g()(r,"button",(s={},s[a]=Boolean(a),s)),children:o}))})),w=s("./node_modules/css-loader/dist/cjs.js!./src/components/controls/Input/input.css"),S={};S.styleTagTransform=h(),S.setAttributes=p(),S.insert=u().bind(null,"head"),S.domAPI=d(),S.insertStyleElement=x(),a()(w.Z,S),w.Z&&w.Z.locals&&w.Z.locals;var A=function(){return A=Object.assign||function(e){for(var n,s=1,t=arguments.length;s<t;s++)for(var o in n=arguments[s])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},A.apply(this,arguments)},F=(0,o.forwardRef)((function(e,n){var s=e.className,o=e.disabled,r=function(e,n){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(s[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(s[t[o]]=e[t[o]])}return s}(e,["className","disabled"]);return(0,t.jsx)("input",A({},r,{ref:n,disabled:o,className:g()(s,"input")}))})),N=s("./node_modules/css-loader/dist/cjs.js!./src/components/forms/FormGroup/FormGroup.css"),k={};k.styleTagTransform=h(),k.setAttributes=p(),k.insert=u().bind(null,"head"),k.domAPI=d(),k.insertStyleElement=x(),a()(N.Z,k),N.Z&&N.Z.locals&&N.Z.locals;var P=function(e){var n=e.children,s=e.label,o=e.name;return(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:o,className:"form-group--label",children:s}),(0,t.jsx)("div",{children:n})]})},I=s("./node_modules/css-loader/dist/cjs.js!./src/Expenses/ExpenseHeader/ExpenseHeader.css"),M={};M.styleTagTransform=h(),M.setAttributes=p(),M.insert=u().bind(null,"head"),M.domAPI=d(),M.insertStyleElement=x(),a()(I.Z,M),I.Z&&I.Z.locals&&I.Z.locals;var T=function(e){var n,s=e.name,r=e.title,i=e.totalAmount,a=e.addExpense,l=e.amount,d=(0,o.useCallback)((function(){return a(s)}),[s,a]);return(0,t.jsxs)("div",{className:"expense-header",children:[(0,t.jsxs)("h4",{className:"expense-header--total-amount",children:[r,": ",(0,t.jsxs)("strong",{children:[i,"€"]})]}),(0,t.jsxs)(Z,{onClick:d,disabled:!l,children:[(n=l,"string"==typeof n||isNaN(n)?"0":n.toFixed(2)),"€ de ",r]})]})},C=s("./node_modules/css-loader/dist/cjs.js!./src/components/Avatar/Avatar.css"),z={};z.styleTagTransform=h(),z.setAttributes=p(),z.insert=u().bind(null,"head"),z.domAPI=d(),z.insertStyleElement=x(),a()(C.Z,z),C.Z&&C.Z.locals&&C.Z.locals;var B={francois:{code:"FR",color:"#555F38"},emma:{code:"EM",color:"#272AB0"}},L=function(e){var n=e.name;return(0,t.jsx)("div",{className:"avatar",style:{color:B[n].color},children:B[n].code})},R=s("./node_modules/css-loader/dist/cjs.js!./src/Expenses/ExpenseList/ExpenseItem/ExpenseItem.css"),H={};H.styleTagTransform=h(),H.setAttributes=p(),H.insert=u().bind(null,"head"),H.domAPI=d(),H.insertStyleElement=x(),a()(R.Z,H),R.Z&&R.Z.locals&&R.Z.locals;var W=function(e){var n=e.amount,s=e.id,r=e.name,i=e.removeExpense,a=(0,o.useCallback)((function(){return i(s)}),[s,i]);return(0,t.jsxs)("li",{className:"expense-item",children:[(0,t.jsx)(L,{name:r}),(0,t.jsx)("div",{className:"expense-item--avatar",children:(0,t.jsxs)("strong",{children:[n,"€"]})}),(0,t.jsx)(Z,{onClick:a,size:"small",children:"supprimer"})]},s)},D=s("./node_modules/css-loader/dist/cjs.js!./src/Expenses/ExpenseList/ExpenseList.css"),G={};G.styleTagTransform=h(),G.setAttributes=p(),G.insert=u().bind(null,"head"),G.domAPI=d(),G.insertStyleElement=x(),a()(D.Z,G),D.Z&&D.Z.locals&&D.Z.locals;var J=function(e){var n=e.items,s=e.removeExpense;return(0,t.jsx)("ul",{className:"expense-list",children:n.map((function(e){var n=e.amount,o=e.id,r=e.name;return(0,t.jsx)(W,{amount:n,id:o,name:r,removeExpense:s},o)}))})},U=function(){return U=Object.assign||function(e){for(var n,s=1,t=arguments.length;s<t;s++)for(var o in n=arguments[s])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},U.apply(this,arguments)},q={},V=function(e){var n=e.emma-e.francois;return n>0?"François doit ".concat((Math.abs(n)/2).toFixed(2),"€ à Emma."):n<0?"Emma doit ".concat((Math.abs(n)/2).toFixed(2),"€ à François."):"Les dépenses sont équilibrées."},X="EXPENSES",K=function(){var e=localStorage.getItem(X);return e?JSON.parse(e):q},Q=s("./node_modules/css-loader/dist/cjs.js!./src/Expenses/Expenses.css"),Y={};Y.styleTagTransform=h(),Y.setAttributes=p(),Y.insert=u().bind(null,"head"),Y.domAPI=d(),Y.insertStyleElement=x(),a()(Q.Z,Y),Q.Z&&Q.Z.locals&&Q.Z.locals;var $=function(){return $=Object.assign||function(e){for(var n,s=1,t=arguments.length;s<t;s++)for(var o in n=arguments[s])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},$.apply(this,arguments)},ee=function(){var e=(0,o.useState)(""),n=e[0],s=e[1],r=function(){var e=(0,o.useState)(K),n=e[0],s=e[1],t=(0,o.useCallback)((function(e){s((function(n){var s="function"==typeof e?e(n):e;return function(e){localStorage.setItem(X,JSON.stringify(e))}(s),s}))}),[]);return[n,t]}(),i=r[0],a=r[1],l=(0,o.useRef)(null),d=(0,o.useCallback)((function(){window.confirm("Voulez-vous réinitialisez toutes les dépenses à zéro ?")&&a(q)}),[a]),c=(0,o.useCallback)((function(e){s(parseFloat(e.currentTarget.value)||"")}),[]),u=(0,o.useCallback)((function(e){"number"==typeof n&&a((function(t){var o,r=(new Date).getTime(),i="".concat(e,":").concat(n,":").concat(r);return s(""),l.current&&l.current.focus(),$($({},t),((o={})[i]={amount:n,name:e,timestamp:r,id:i},o))}))}),[n,a]),m=(0,o.useCallback)((function(e){a((function(n){return delete n[e],$({},n)}))}),[a]),p=(0,o.useMemo)((function(){return function(e){return Object.values(e).reduce((function(e,n){var s;return U(U({},e),((s={})[n.name]=e[n.name]+n.amount,s))}),{emma:0,francois:0})}(i)}),[i]),f=(0,o.useMemo)((function(){return function(e){return e.sort((function(e,n){return n.timestamp-e.timestamp}))}(Object.values(i))}),[i]);return(0,t.jsxs)("div",{className:"expenses",children:[(0,t.jsxs)("header",{className:"expenses-header",children:[(0,t.jsx)("h3",{children:V(p)}),(0,t.jsx)(P,{label:"Montant",name:"amount",children:(0,t.jsx)(F,{ref:l,id:"amount",value:n,type:"number",onChange:c,autoFocus:!0,step:"1",inputMode:"decimal"})})]}),(0,t.jsxs)("div",{className:"expenses--content",children:[(0,t.jsxs)("div",{className:"expenses-list",children:[(0,t.jsx)(T,{title:"François",name:"francois",addExpense:u,amount:n,totalAmount:p.francois}),(0,t.jsx)(T,{title:"Emma",name:"emma",addExpense:u,amount:n,totalAmount:p.emma})]}),(0,t.jsxs)("div",{children:[f.length>0&&(0,t.jsx)("span",{className:"expenses--list-sort",children:"Plus récent"}),(0,t.jsx)(J,{removeExpense:m,items:f})]})]}),(0,t.jsx)("div",{className:"expenses--footer",children:(0,t.jsx)(Z,{onClick:d,size:"medium",children:"Réinitialiser toutes les dépenses"})})]})},ne=document.getElementById("root");if(!ne)throw Error("Missing the root tag in the DOM.");r.createRoot(ne).render((0,t.jsx)(o.StrictMode,{children:(0,t.jsx)((function(){return(0,t.jsx)(ee,{})}),{})}))},"./src/serviceWorker.ts":function(){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./service-worker.js")}))}},s={};function t(e){var o=s[e];if(void 0!==o)return o.exports;var r=s[e]={id:e,exports:{}};return n[e](r,r.exports,t),r.exports}t.m=n,e=[],t.O=function(n,s,o,r){if(!s){var i=1/0;for(c=0;c<e.length;c++){s=e[c][0],o=e[c][1],r=e[c][2];for(var a=!0,l=0;l<s.length;l++)(!1&r||i>=r)&&Object.keys(t.O).every((function(e){return t.O[e](s[l])}))?s.splice(l--,1):(a=!1,r<i&&(i=r));if(a){e.splice(c--,1);var d=o();void 0!==d&&(n=d)}}return n}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[s,o,r]},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,s){var o,r,i=s[0],a=s[1],l=s[2],d=0;if(i.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(l)var c=l(t)}for(n&&n(s);d<i.length;d++)r=i[d],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(c)},s=self.webpackChunkhome_app=self.webpackChunkhome_app||[];s.forEach(n.bind(null,0)),s.push=n.bind(null,s.push.bind(s))}(),t.nc=void 0;var o=t.O(void 0,[945],(function(){return t("./src/index.tsx")}));o=t.O(o)}();