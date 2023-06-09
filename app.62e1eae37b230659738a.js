!function(){"use strict";var e,n,t,s={"./node_modules/css-loader/dist/cjs.js!./src/App.css":function(e,n,t){var s=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(s),o=t("./node_modules/css-loader/dist/runtime/api.js"),i=t.n(o)()(r());i.push([e.id,"* {\n  box-sizing: border-box;\n}\n\n.App, #root, body, html {\n  height: 100%;\n  width: 100%;\n}\n\n.App {\n  background-color: #282c34;\n  display: flex;\n  flex-direction: column;\n  font-size: calc(10px + 2vmin);\n  gap: 14px;\n  color: white;\n  padding: 10px;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n}\n\n.App-layout {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 14px;\n  width: 100%;\n  height: 100%;\n  align-items: stretch;\n  overflow-y: auto;\n}\n\nbutton {\n  cursor: pointer;\n}\n",""]),n.Z=i},"./node_modules/css-loader/dist/cjs.js!./src/ExpenseList.css":function(e,n,t){var s=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(s),o=t("./node_modules/css-loader/dist/runtime/api.js"),i=t.n(o)()(r());i.push([e.id,".Expense-List-container {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  height: 100%;\n  flex: 1;\n}\n\n.Expense-List {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  gap: 10px;\n  overflow: auto;\n}\n\n.Expense-Item {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 6px;\n}\n\n.Expense-Item-value {\n  width: 100%;\n  /* min-width: 120px; */\n}\n",""]),n.Z=i},"./node_modules/css-loader/dist/cjs.js!./src/components/buttons/Button/Button.css":function(e,n,t){var s=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(s),o=t("./node_modules/css-loader/dist/runtime/api.js"),i=t.n(o)()(r());i.push([e.id,".button {\n  height: 38px;\n  padding: 4px 6px;\n}\n",""]),n.Z=i},"./node_modules/css-loader/dist/cjs.js!./src/index.css":function(e,n,t){var s=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(s),o=t("./node_modules/css-loader/dist/runtime/api.js"),i=t.n(o)()(r());i.push([e.id,"body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n",""]),n.Z=i},"./src/index.tsx":function(e,n,t){var s=t("./node_modules/react/jsx-runtime.js"),r=t("./node_modules/react/index.js"),o=t("./node_modules/react-dom/client.js"),i=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=t.n(i),l=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),c=t.n(l),u=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),d=t.n(u),p=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),m=t.n(p),f=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),h=t.n(f),v=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=t.n(v),y=t("./node_modules/css-loader/dist/cjs.js!./src/index.css"),j={};j.styleTagTransform=x(),j.setAttributes=m(),j.insert=d().bind(null,"head"),j.domAPI=c(),j.insertStyleElement=h(),a()(y.Z,j),y.Z&&y.Z.locals&&y.Z.locals;var b=t("./node_modules/css-loader/dist/cjs.js!./src/App.css"),g={};g.styleTagTransform=x(),g.setAttributes=m(),g.insert=d().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=h(),a()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals;var O=function(e){return e.reduce((function(e,n){return e+n}),0)},E=t("./node_modules/css-loader/dist/cjs.js!./src/ExpenseList.css"),w={};w.styleTagTransform=x(),w.setAttributes=m(),w.insert=d().bind(null,"head"),w.domAPI=c(),w.insertStyleElement=h(),a()(E.Z,w),E.Z&&E.Z.locals&&E.Z.locals;var S=function(){return S=Object.assign||function(e){for(var n,t=1,s=arguments.length;t<s;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},S.apply(this,arguments)},_=function(e){var n=e.name,t=e.expenses,r=e.removeExpense,o=function(e){return function(){r(n,e)}};return(0,s.jsx)("div",S({className:"Expense-List"},{children:t.map((function(e,n){return(0,s.jsxs)("div",S({className:"Expense-Item"},{children:[(0,s.jsxs)("span",S({className:"Expense-Item-value"},{children:[e,"€"]})),(0,s.jsx)("button",S({onClick:o(n)},{children:"supprimer"}))]}),n)}))}))},k=t("./node_modules/classnames/index.js"),A=t.n(k),C=t("./node_modules/css-loader/dist/cjs.js!./src/components/buttons/Button/Button.css"),N={};N.styleTagTransform=x(),N.setAttributes=m(),N.insert=d().bind(null,"head"),N.domAPI=c(),N.insertStyleElement=h(),a()(C.Z,N),C.Z&&C.Z.locals&&C.Z.locals;var P,Z,T=function(){return T=Object.assign||function(e){for(var n,t=1,s=arguments.length;t<s;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},T.apply(this,arguments)},M=(0,r.forwardRef)((function(e){var n=e.children,t=e.className,r=function(e,n){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&n.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)n.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(t[s[r]]=e[s[r]])}return t}(e,["children","className"]);return(0,s.jsx)("button",T({},r,{className:A()(t,"button")},{children:n}))})),I=function(){return I=Object.assign||function(e){for(var n,t=1,s=arguments.length;t<s;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},I.apply(this,arguments)},F=function(e){return"string"==typeof e||isNaN(e)?0:e.toFixed(2)},L=function(e){var n=e.name,t=e.title,o=e.totalAmount,i=e.addExpense,a=e.expense,l=(0,r.useCallback)((function(){i(n)}),[n,i]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("span",{children:[t,": ",o,"€"]}),(0,s.jsxs)(M,I({onClick:l,disabled:!a},{children:["+ ",F(a),"€ à ",t]}))]})},B=function(){return B=Object.assign||function(e){for(var n,t=1,s=arguments.length;t<s;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},B.apply(this,arguments)},z=function(e,n,t){if(t||2===arguments.length)for(var s,r=0,o=n.length;r<o;r++)!s&&r in n||(s||(s=Array.prototype.slice.call(n,0,r)),s[r]=n[r]);return e.concat(s||Array.prototype.slice.call(n))},R="EXPENSES",D={francois:[],emma:[]},W=(P=localStorage.getItem(R))?JSON.parse(P):D;o.createRoot(document.getElementById("root")).render((0,s.jsx)(r.StrictMode,{children:(0,s.jsx)((function(){var e=(0,r.useState)(""),n=e[0],t=e[1],o=(0,r.useState)(W),i=o[0],a=o[1],l=(0,r.useRef)(null),c=(0,r.useCallback)((function(e){a((function(n){var t="function"==typeof e?e(n):e;return localStorage.setItem(R,JSON.stringify(t)),t}))}),[]),u=(0,r.useCallback)((function(){window.confirm("Voulez-vous réinitialisez toutes les dépenses à zéro ?")&&c(D)}),[c]),d=(0,r.useCallback)((function(e){t(parseFloat(e.currentTarget.value)||"")}),[]),p=(0,r.useCallback)((function(e){c((function(s){var r,o=z(z([],s[e],!0),[n],!1);return t(""),l.current&&l.current.focus(),B(B({},s),((r={})[e]=o,r))}))}),[n,c]),m=(0,r.useCallback)((function(e,n){a((function(t){var s,r=t[e].filter((function(e,t){return t!==n}));return B(B({},t),((s={})[e]=r,s))}))}),[]),f=(0,r.useMemo)((function(){return O(i.emma)}),[i.emma]),h=(0,r.useMemo)((function(){return O(i.francois)}),[i.francois]),v=(0,r.useMemo)((function(){var e=f-h;return e>0?"François doit ".concat((Math.abs(e)/2).toFixed(2),"€ à Emma."):e<0?"Emma doit ".concat((Math.abs(e)/2).toFixed(2),"€ à François."):"Les dépenses sont équilibrées."}),[f,h]);return(0,s.jsxs)("div",B({className:"App"},{children:[(0,s.jsxs)("header",B({className:"header"},{children:[(0,s.jsx)("span",{children:v}),(0,s.jsx)("input",{ref:l,value:n,type:"number",onChange:d,autoFocus:!0,step:"0.1",inputMode:"decimal"})]})),(0,s.jsxs)("div",B({className:"App-layout"},{children:[(0,s.jsxs)("div",B({className:"Expense-List-container"},{children:[(0,s.jsx)(L,{title:"François",name:"francois",addExpense:p,expense:n,totalAmount:h}),(0,s.jsx)(_,{name:"francois",removeExpense:m,expenses:i.francois})]})),(0,s.jsxs)("div",B({className:"Expense-List-container"},{children:[(0,s.jsx)(L,{title:"Emma",name:"emma",addExpense:p,expense:n,totalAmount:f}),(0,s.jsx)(_,{name:"emma",removeExpense:m,expenses:i.emma})]}))]})),(0,s.jsx)("div",{children:(0,s.jsx)("button",B({onClick:u},{children:"Réinitialiser toutes les dépenses"}))})]}))}),{})})),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js").then((function(e){console.log("Le service worker a été enregistré avec succès:",e)})).catch((function(e){console.error("Échec de l'enregistrement du service worker:",e)}))})),Z&&Z instanceof Function&&t.e(131).then(t.bind(t,"./node_modules/web-vitals/dist/web-vitals.js")).then((function(e){var n=e.getCLS,t=e.getFID,s=e.getFCP,r=e.getLCP,o=e.getTTFB;n(Z),t(Z),s(Z),r(Z),o(Z)}))}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var t=r[e]={id:e,exports:{}};return s[e](t,t.exports,o),t.exports}o.m=s,e=[],o.O=function(n,t,s,r){if(!t){var i=1/0;for(u=0;u<e.length;u++){t=e[u][0],s=e[u][1],r=e[u][2];for(var a=!0,l=0;l<t.length;l++)(!1&r||i>=r)&&Object.keys(o.O).every((function(e){return o.O[e](t[l])}))?t.splice(l--,1):(a=!1,r<i&&(i=r));if(a){e.splice(u--,1);var c=s();void 0!==c&&(n=c)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[t,s,r]},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,{a:n}),n},o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(n,t){return o.f[t](e,n),n}),[]))},o.u=function(e){return e+".70418bdd0cad5e8cd240.js"},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n={},t="home-app:",o.l=function(e,s,r,i){if(n[e])n[e].push(s);else{var a,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==t+r){a=d;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+r),a.src=e),n[e]=[s];var p=function(t,s){a.onerror=a.onload=null,clearTimeout(m);var r=n[e];if(delete n[e],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(s)})),t)return t(s)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/",function(){var e={143:0};o.f.j=function(n,t){var s=o.o(e,n)?e[n]:void 0;if(0!==s)if(s)t.push(s[2]);else{var r=new Promise((function(t,r){s=e[n]=[t,r]}));t.push(s[2]=r);var i=o.p+o.u(n),a=new Error;o.l(i,(function(t){if(o.o(e,n)&&(0!==(s=e[n])&&(e[n]=void 0),s)){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+n+" failed.\n("+r+": "+i+")",a.name="ChunkLoadError",a.type=r,a.request=i,s[1](a)}}),"chunk-"+n,n)}},o.O.j=function(n){return 0===e[n]};var n=function(n,t){var s,r,i=t[0],a=t[1],l=t[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(l)var u=l(o)}for(n&&n(t);c<i.length;c++)r=i[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},t=self.webpackChunkhome_app=self.webpackChunkhome_app||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}(),o.nc=void 0;var i=o.O(void 0,[945],(function(){return o("./src/index.tsx")}));i=o.O(i)}();