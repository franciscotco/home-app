if(!self.define){let e,c={};const i=(i,r)=>(i=new URL(i+".js",r).href,c[i]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=c,document.head.appendChild(e)}else e=i,importScripts(i),c()})).then((()=>{let e=c[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(c[n])return;let o={};const s=e=>i(e,n),l={module:{uri:n},exports:o,require:s};c[n]=Promise.all(r.map((e=>l[e]||s(e)))).then((e=>(t(...e),o)))}}define(["./workbox-f4a95bd7"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"945.cc2f0098540b13df0b72.js",revision:null},{url:"945.cc2f0098540b13df0b72.js.LICENSE.txt",revision:"6cb2abd69bcf5c1bc8ea13bc6a30ce0e"},{url:"app.f80c0877e1cc69b1669a.js",revision:null},{url:"index.html",revision:"a82bfaa71be2729ecd07c5e76792163b"}],{})}));
