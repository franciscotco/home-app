if(!self.define){let e,i={};const r=(r,t)=>(r=new URL(r+".js",t).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(t,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const c=e=>r(e,o),l={module:{uri:o},exports:s,require:c};i[o]=Promise.all(t.map((e=>l[e]||c(e)))).then((e=>(n(...e),s)))}}define(["./workbox-f4a95bd7"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"945.cc2f0098540b13df0b72.js",revision:null},{url:"945.cc2f0098540b13df0b72.js.LICENSE.txt",revision:"6cb2abd69bcf5c1bc8ea13bc6a30ce0e"},{url:"app.8723509382338e140de0.js",revision:null},{url:"index.html",revision:"a6334e98925ac3b36ae21675fada557e"}],{})}));
