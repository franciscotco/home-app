if(!self.define){let e,o={};const i=(i,r)=>(i=new URL(i+".js",r).href,o[i]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=o,document.head.appendChild(e)}else e=i,importScripts(i),o()})).then((()=>{let e=o[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(o[c])return;let n={};const s=e=>i(e,c),l={module:{uri:c},exports:n,require:s};o[c]=Promise.all(r.map((e=>l[e]||s(e)))).then((e=>(t(...e),n)))}}define(["./workbox-f4a95bd7"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/home-app/945.cc2f0098540b13df0b72.js",revision:null},{url:"/home-app/945.cc2f0098540b13df0b72.js.LICENSE.txt",revision:"6cb2abd69bcf5c1bc8ea13bc6a30ce0e"},{url:"/home-app/app.18deb25fbc0e80c2a143.js",revision:null},{url:"/index.html",revision:"542ea9e67358f7feebbcb10c8e3ddb6e"}],{})}));
