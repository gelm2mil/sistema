const CACHE = "gelm-core-v1";

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c =>
      c.addAll([
        "./",
        "./index.html"
      ])
    )
  );
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);

  // NO tocar Google
  if (url.origin.includes("google.com")) return;

  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
