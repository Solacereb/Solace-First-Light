const CACHE='solace-firstlight-v1';
const ASSETS=['/','/index.html','/styles.css','/manifest.json','/assets/solace-logo.png','/assets/icon-192.png','/assets/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
