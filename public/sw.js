if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,n,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const t={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return i;case"module":return t;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-1ca495a9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.272090657c97d5e8a53a.js",revision:"kJliWMFDGvhU5fhky_EZf"},{url:"/_next/static/chunks/commons.902adc1571b60a679500.js",revision:"kJliWMFDGvhU5fhky_EZf"},{url:"/_next/static/chunks/framework.9d524150d48315f49e80.js",revision:"kJliWMFDGvhU5fhky_EZf"},{url:"/_next/static/chunks/main-f9fe8b63822c369a301b.js",revision:"kJliWMFDGvhU5fhky_EZf"},{url:"/_next/static/chunks/pages/_app-62b78aba2ec39d0652cf.js",revision:"kJliWMFDGvhU5fhky_EZf"},{url:"/_next/static/chunks/pages/_error-85c075cd0c9d249f4d31.js",revision:"kJliWMFDGvhU5fhky_EZf"},{url:"/_next/static/chunks/pages/index-4d514bd67be333c9c40f.js",revision:"kJliWMFDGvhU5fhky_EZf"},{url:"/_next/static/chunks/polyfills-4f14e8c8ea1352d3ef0d.js",revision:"kJliWMFDGvhU5fhky_EZf"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"kJliWMFDGvhU5fhky_EZf"},{url:"/_next/static/kJliWMFDGvhU5fhky_EZf/_buildManifest.js",revision:"kJliWMFDGvhU5fhky_EZf"},{url:"/_next/static/kJliWMFDGvhU5fhky_EZf/_ssgManifest.js",revision:"kJliWMFDGvhU5fhky_EZf"},{url:"/fonts/poppins-v15-latin-200.woff2",revision:"55c2cae4b028fe14ea2835cee0c2802f"},{url:"/fonts/poppins-v15-latin-600.woff2",revision:"087457026965f98466618a478c4b1b07"},{url:"/fonts/poppins-v15-latin-regular.woff2",revision:"9ed361bba8488aeb2797b82befda20f1"},{url:"/img/man.svg",revision:"7d2391853c7c69bc6aac7a62fdd6209f"},{url:"/img/old.svg",revision:"863ad58c253fa9311ae218b1e6ad3394"},{url:"/img/red-dead-float.png",revision:"3a214fab27713e63b4858f1599b92b28"},{url:"/img/red-dead-img.jpg",revision:"333ff67868c12dfa9c8989df2cd8f383"},{url:"/manifest.json",revision:"b5b731e32dc41395d3cb97d728713e74"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
