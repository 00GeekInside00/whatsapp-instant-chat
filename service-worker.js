var cacheName = "Whatsapp";
var filesToCache = [];

self.addEventListener("install", function(e) {
  console.log("[ServiceWorker] Install");
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("[ServiceWorker] Creating App Shell");
      return cache.addAll(filesToCache);
    })
  );
});
