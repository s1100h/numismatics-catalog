if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,a,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const t={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return n;case"module":return t;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-1ca495a9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1090551b028d5499fbd515eb6504373fdea3caaf.c2d9e7f47e698e62dafd.js",revision:"vWzJioUYQpRnqZNSxhlQp"},{url:"/_next/static/chunks/26c282cd35651e7c84e4548f4ebd28c92eed10b4.3baab1ffc7e421b8ce40.js",revision:"vWzJioUYQpRnqZNSxhlQp"},{url:"/_next/static/chunks/7a922c211ccf98094a67ffea90fac74651a0774b.de83366245802c6a5360.js",revision:"vWzJioUYQpRnqZNSxhlQp"},{url:"/_next/static/chunks/commons.4249f1fefeb0b2400030.js",revision:"vWzJioUYQpRnqZNSxhlQp"},{url:"/_next/static/chunks/framework.37f4a736348214b3ca94.js",revision:"vWzJioUYQpRnqZNSxhlQp"},{url:"/_next/static/chunks/main-32d46d7b2ab69038bdae.js",revision:"vWzJioUYQpRnqZNSxhlQp"},{url:"/_next/static/chunks/pages/_app-15b680cfb07b8da65d66.js",revision:"vWzJioUYQpRnqZNSxhlQp"},{url:"/_next/static/chunks/pages/_error-4142e680b88c5937c357.js",revision:"vWzJioUYQpRnqZNSxhlQp"},{url:"/_next/static/chunks/pages/admin-cea06f2eeb2ddb7e5697.js",revision:"vWzJioUYQpRnqZNSxhlQp"},{url:"/_next/static/chunks/pages/coin/%5B...slug%5D-b4e3b929184cc8b014b1.js",revision:"vWzJioUYQpRnqZNSxhlQp"},{url:"/_next/static/chunks/pages/collection/%5B...slug%5D-2716f27d731498b0b344.js",revision:"vWzJioUYQpRnqZNSxhlQp"},{url:"/_next/static/chunks/pages/index-aa51c4e58c56a2cefc42.js",revision:"vWzJioUYQpRnqZNSxhlQp"},{url:"/_next/static/chunks/polyfills-feb8a7604fa7fce626b2.js",revision:"vWzJioUYQpRnqZNSxhlQp"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"vWzJioUYQpRnqZNSxhlQp"},{url:"/_next/static/css/05b41dc8dd81a8b1d602.css",revision:"vWzJioUYQpRnqZNSxhlQp"},{url:"/_next/static/css/0bf8788c49aa90d0748f.css",revision:"vWzJioUYQpRnqZNSxhlQp"},{url:"/_next/static/media/revicons.57fd05d4ae650374c8deeff7c4aae380.ttf",revision:"vWzJioUYQpRnqZNSxhlQp"},{url:"/_next/static/media/revicons.a77de540a38981833f9e31bd4c365cc6.eot",revision:"vWzJioUYQpRnqZNSxhlQp"},{url:"/_next/static/media/revicons.e8746a624ed098489406e6113d185258.woff",revision:"vWzJioUYQpRnqZNSxhlQp"},{url:"/_next/static/vWzJioUYQpRnqZNSxhlQp/_buildManifest.js",revision:"vWzJioUYQpRnqZNSxhlQp"},{url:"/_next/static/vWzJioUYQpRnqZNSxhlQp/_ssgManifest.js",revision:"vWzJioUYQpRnqZNSxhlQp"},{url:"/android-chrome-192x192.png",revision:"8d0d9af7b8212bc41b2fd391f2b416d4"},{url:"/android-chrome-512x512.png",revision:"53f0d64467673b52d6ffa80a5c6a3c7d"},{url:"/apple-touch-icon.png",revision:"86908564187e3a0fad49b68f67d65c95"},{url:"/favicon-16x16.png",revision:"1ebb961868bda153904ce0b919f8f66c"},{url:"/favicon-32x32.png",revision:"464eface21e76ebb826da1b3f0278cba"},{url:"/favicon.ico",revision:"2726da2b70c74bb79c49727c7896ff7a"},{url:"/fonts.css",revision:"7ff16af7d5f7b8a6ca2216aa48e0d138"},{url:"/fonts/OFL.txt",revision:"d1eb27a3a8f2a203e12661c784af951e"},{url:"/fonts/Tajawal-Black.ttf",revision:"a515f84cb1a7ed89288dba4be9719722"},{url:"/fonts/Tajawal-Bold.ttf",revision:"79bb19e04937c19974260fcb4128270e"},{url:"/fonts/Tajawal-ExtraBold.ttf",revision:"7bbbfd28e8dbd463c9f449aa96ffd7ed"},{url:"/fonts/Tajawal-ExtraLight.ttf",revision:"8c37c5fa0335c5d15c2a9f182af1eeb0"},{url:"/fonts/Tajawal-Light.ttf",revision:"fbca61ce5f0321ab500bdbb168b775b0"},{url:"/fonts/Tajawal-Medium.ttf",revision:"2bfe3ee2145f6755e4b5960310daee03"},{url:"/fonts/Tajawal-Regular.ttf",revision:"6b10b55e4df612910047b7e5d596a9d5"},{url:"/manifest.json",revision:"5d7752a0d5487bb74aa96fa30f240456"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
