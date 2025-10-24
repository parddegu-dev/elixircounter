self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('elixir-tracker').then(cache => {
      return cache.addAll(['./elixir_tracker.html', './manifest.json']);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});