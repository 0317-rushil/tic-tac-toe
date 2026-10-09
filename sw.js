// Minimal service worker: just enough to satisfy "installable" criteria on Android/Chrome.
// Always defers to the network so game updates are picked up immediately (no stale caching
// of the board logic, which would be worse than no cache at all for this app).
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
