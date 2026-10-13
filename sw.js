const CACHE_PREFIX = "rtve-estudio-pwa-";
const CACHE_NAME = `${CACHE_PREFIX}v1`;
const CACHE_FILES = [
  "./index.html", "./styles.css", "./scripts.js", "./manifest.webmanifest",
  "./BANCO_PREGUNTAS_RTVE_TECNICA_INFORMATICA_BD.md", "./icons/favicon.ico",
  ...[16, 32, 48, 64, 72, 96, 120, 128, 144, 152, 167, 180, 192, 256, 384, 512, 1024].map(size => `./icons/icon-${size}.png`),
  "./icons/icon-maskable-192.png", "./icons/icon-maskable-512.png"
];
const ASSETS = new Map(CACHE_FILES.map(path => {
  const url = new URL(path, self.registration.scope);
  return [url.pathname, url.href];
}));
const HOME_URL = new URL("./index.html", self.registration.scope).href;
const ROOT_PATH = new URL("./", self.registration.scope).pathname;

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CACHE_FILES)));
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(names => Promise.all(names
    .filter(name => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
    .map(name => caches.delete(name)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;
  const assetUrl = url.pathname === ROOT_PATH ? HOME_URL : ASSETS.get(url.pathname);
  if (!assetUrl) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    try {
      const response = await fetch(request);
      if (response.ok) {
        event.waitUntil(cache.put(assetUrl, response.clone()).catch(() => {}));
        return response;
      }
      return await cache.match(assetUrl) || response;
    } catch {
      const cached = await cache.match(assetUrl);
      return cached || new Response("Sin conexión. Abre la aplicación con conexión una vez para guardarla.", {
        status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    }
  })());
});
