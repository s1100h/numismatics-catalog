if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,c,t)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const n={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return s;case"module":return n;default:return e(a)}})).then(e=>{const a=t(...e);return s.default||(s.default=a),s})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/c1DnCRILHdjyIxw6OPZV-/_buildManifest.js",revision:"95a8f64fd60f1f076cf57a345c83a5bc"},{url:"/_next/static/c1DnCRILHdjyIxw6OPZV-/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/1090551b028d5499fbd515eb6504373fdea3caaf.b31a445dbb148e50b5d8.js",revision:"9bfb86a8dfc9eefbb31cc65066681987"},{url:"/_next/static/chunks/26c282cd35651e7c84e4548f4ebd28c92eed10b4.c586d40cbac01dffeab8.js",revision:"cff41fde87e3c169eca9f4a666b762f4"},{url:"/_next/static/chunks/7a922c211ccf98094a67ffea90fac74651a0774b.81526ead5895e40324d4.js",revision:"8a3f3446a0b71046324f2d08264a0072"},{url:"/_next/static/chunks/caf0dbef98a9744c8be7d5ecee1f1c7e9083a23d.f97200b56caa0d7b2911.js",revision:"4744138e9edc8152de5a6bd5de6a26e0"},{url:"/_next/static/chunks/commons.4b4051bd9b58d946cb2f.js",revision:"91f19150a6b8b4e9c4cfb8b7220b60c4"},{url:"/_next/static/chunks/framework.4df82c4704a0136f6a4b.js",revision:"7eafc2b810ea3395615465510119d273"},{url:"/_next/static/chunks/main-e02aae92b175b4847c05.js",revision:"cdf5ec86b7ed96f25f0ddee23aad7eb8"},{url:"/_next/static/chunks/pages/_app-80c8a7ee688e914b8913.js",revision:"9ce41a0b00b0772b27a259b1645afeca"},{url:"/_next/static/chunks/pages/_error-331ccb8250b7f4f4506c.js",revision:"533b0f70207ce85ae91f7fe84eaa864e"},{url:"/_next/static/chunks/pages/admin-871de856c2bd84a5dda4.js",revision:"bf2fa1691f0006e0621aa610cdc0b1a1"},{url:"/_next/static/chunks/pages/coin/%5B...slug%5D-9c06e5da7eef4bad8dde.js",revision:"349b08ce033250a9d5a64c42c2240119"},{url:"/_next/static/chunks/pages/collection/%5B...slug%5D-7ae2da6dd5c0e16a135e.js",revision:"4423333d795ee79a723ed0d3b1f39871"},{url:"/_next/static/chunks/pages/index-9376bfa73b96ac5e21ee.js",revision:"8ae479962d77ab755845912a0cae185b"},{url:"/_next/static/chunks/polyfills-86ef67bb8e62e3552895.js",revision:"24173573907373e3f72cae9cd454fd99"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/20796ac556e69ce23a66.css",revision:"9d0897d2bf5985916936c587473dcc16"},{url:"/_next/static/media/revicons.57fd05d4ae650374c8deeff7c4aae380.ttf",revision:"17629a5dfe0d3c3946cf401e1895f091"},{url:"/_next/static/media/revicons.a77de540a38981833f9e31bd4c365cc6.eot",revision:"2feb69ccb596730c72920c6ba3e37ef8"},{url:"/_next/static/media/revicons.e8746a624ed098489406e6113d185258.woff",revision:"04eb8fc57f27498e5ae37523e3bfb2c7"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/fonts.css",revision:"7ff16af7d5f7b8a6ca2216aa48e0d138"},{url:"/fonts/OFL.txt",revision:"d1eb27a3a8f2a203e12661c784af951e"},{url:"/fonts/Tajawal-Black.ttf",revision:"a515f84cb1a7ed89288dba4be9719722"},{url:"/fonts/Tajawal-Bold.ttf",revision:"79bb19e04937c19974260fcb4128270e"},{url:"/fonts/Tajawal-ExtraBold.ttf",revision:"7bbbfd28e8dbd463c9f449aa96ffd7ed"},{url:"/fonts/Tajawal-ExtraLight.ttf",revision:"8c37c5fa0335c5d15c2a9f182af1eeb0"},{url:"/fonts/Tajawal-Light.ttf",revision:"fbca61ce5f0321ab500bdbb168b775b0"},{url:"/fonts/Tajawal-Medium.ttf",revision:"2bfe3ee2145f6755e4b5960310daee03"},{url:"/fonts/Tajawal-Regular.ttf",revision:"6b10b55e4df612910047b7e5d596a9d5"},{url:"/manifest.json",revision:"5609fdf70afc2b71174a576aeb8db021"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));