if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const s=e=>c(e,o),l={module:{uri:o},exports:t,require:s};i[o]=Promise.all(r.map((e=>l[e]||s(e)))).then((e=>(n(...e),t)))}}define(["./workbox-f4a95bd7"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"945.cc2f0098540b13df0b72.js",revision:null},{url:"945.cc2f0098540b13df0b72.js.LICENSE.txt",revision:"6cb2abd69bcf5c1bc8ea13bc6a30ce0e"},{url:"app.8723509382338e140de0.js",revision:null},{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"index.html",revision:"f03c11f6dc71e1b9aa3f0a58a43aa8a9"}],{})}));
