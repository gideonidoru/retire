// Assembled service worker: network-first for the page (updates flow the
// moment a new build is uploaded), cache fallback so the tool keeps working
// with no connection at all.
const CACHE = 'assembled-v1'

self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', e => e.waitUntil(clients.claim()))

self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate' || e.request.destination === 'document') {
    e.respondWith(
      fetch(e.request).then(res => {
        const copy = res.clone()
        caches.open(CACHE).then(c => c.put('./', copy))
        return res
      }).catch(() => caches.match('./'))
    )
  }
})
