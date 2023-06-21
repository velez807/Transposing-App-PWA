const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/img/flecha.png',
    '/img/musica.png'
    // Agrega aquí los archivos que deseas almacenar en caché
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Almacenando archivos en caché');
                return cache.addAll(urlsToCache);
            })
    );
});


self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (response) {
                    console.log('Recuperando archivo desde caché:', event.request.url);
                    return response;
                }
                console.log('Recuperando archivo desde la red:', event.request.url);
                return fetch(event.request);
            })
    );
});


self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys()
            .then(function (cacheNames) {
                return Promise.all(
                    cacheNames.filter(function (cacheName) {
                        return cacheName !== CACHE_NAME;
                    }).map(function (cacheName) {
                        console.log('Eliminando caché antigua:', cacheName);
                        return caches.delete(cacheName);
                    })
                );
            })
    );
});


