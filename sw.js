const CACHE = 'alphafoz-v2';

self.addEventListener('install', function(e){
  self.skipWaiting();
});

self.addEventListener('activate', function(e){
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(e){
  // Deixa todas as requests passarem normalmente sem interceptar
  return;
});
