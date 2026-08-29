// Café & Restaurant Sushi Arij - Service Worker (Production Ready PWA Caching v5.0)

const CACHE_NAME = 'sushi-arij-v7.1';

const ASSETS_TO_CACHE = [
  '/',
  'index.html',
  'admin.html',
  'css/styles.css',
  'js/translations.js',
  'js/app.js',
  'js/admin.js',
  'manifest.json',
  'assets/menu/assortiment_arij.webp',
  'assets/menu/special_roll_dragon.webp',
  'assets/menu/bento_golden.webp',
  'assets/menu/salade_arij.webp',
  'assets/qr_code.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Precaching core assets v5.0');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Clearing old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Dynamic Cache-First strategy for images in assets/
  if (url.pathname.includes('/assets/')) {
    e.respondWith(
      caches.match(e.request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        return fetch(e.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // Network-First with Cache fallback for HTML and scripts
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.match(e.request);
    })
  );
});
