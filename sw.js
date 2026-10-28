"use strict";

var CACHE_NAME = "moussa-lo-portfolio-v2";

var CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./manifest.webmanifest",
  "./assets/images/favicon.svg",
  "./assets/images/favicon-32.png",
  "./assets/images/moussa-480.webp",
  "./assets/images/moussa.webp",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/apple-touch-icon.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(CORE_ASSETS);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) {
          return key !== CACHE_NAME;
        }).map(function (key) {
          return caches.delete(key);
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

function isCacheableAsset(url) {
  return /\.(?:png|webp|svg|ico|jpe?g|gif|woff2?)$/i.test(url.pathname);
}

function putInCache(request, response) {
  if (!response || !response.ok) {
    return;
  }

  var copy = response.clone();
  caches.open(CACHE_NAME).then(function (cache) {
    cache.put(request, copy);
  });
}

self.addEventListener("fetch", function (event) {
  var request = event.request;

  if (request.method !== "GET") {
    return;
  }

  var url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return;
  }

  /* Navigation : réseau d'abord, cache hors ligne. */
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).then(function (response) {
        if (!response.ok) {
          throw new Error("network");
        }

        putInCache("./index.html", response);
        return response;
      }).catch(function () {
        return caches.match("./index.html").then(function (cached) {
          return cached || caches.match("./");
        });
      })
    );
    return;
  }

  /* Images et polices : cache d'abord, rafraîchissement en arrière-plan. */
  if (isCacheableAsset(url)) {
    event.respondWith(
      caches.match(request).then(function (cached) {
        if (cached) {
          fetch(request).then(function (response) {
            putInCache(request, response);
          }).catch(function () {
            /* Hors ligne : l'image en cache reste utilisable. */
          });

          return cached;
        }

        return fetch(request).then(function (response) {
          putInCache(request, response);
          return response;
        });
      })
    );
    return;
  }

  /* CSS, JS, manifeste : réseau d'abord pour éviter le contenu périmé. */
  event.respondWith(
    fetch(request).then(function (response) {
      if (!response.ok) {
        return caches.match(request).then(function (cached) {
          return cached || response;
        });
      }

      putInCache(request, response);
      return response;
    }).catch(function () {
      return caches.match(request).then(function (cached) {
        return cached || Response.error();
      });
    })
  );
});
