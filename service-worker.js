/* eslint-disable no-restricted-globals */

/* global self, caches, fetch */

const CACHE = 'cache-e79b211';

self.addEventListener('install', e => {
  e.waitUntil(precache()).then(() => self.skipWaiting());
});

self.addEventListener('activate', event => {
  self.clients
    .matchAll({
      includeUncontrolled: true,
    })
    .then(clientList => {
      const urls = clientList.map(client => client.url);
      console.log('[ServiceWorker] Matching clients:', urls.join(', '));
    });

  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE) {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
            return null;
          })
        )
      )
      .then(() => {
        console.log('[ServiceWorker] Claiming clients for version', CACHE);
        return self.clients.claim();
      })
  );
});

function precache() {
  return caches.open(CACHE).then(cache => cache.addAll(["./","./bila_velryba_002.html","./bila_velryba_005.html","./bila_velryba_006.html","./bila_velryba_007.html","./bila_velryba_008.html","./bila_velryba_010.html","./bila_velryba_011.html","./bila_velryba_012.html","./bila_velryba_013.html","./bila_velryba_014.html","./bila_velryba_015.html","./bila_velryba_016.html","./bila_velryba_017.html","./bila_velryba_018.html","./bila_velryba_019.html","./bila_velryba_020.html","./bila_velryba_021.html","./bila_velryba_022.html","./bila_velryba_023.html","./bila_velryba_024.html","./bila_velryba_025.html","./bila_velryba_026.html","./bila_velryba_027.html","./bila_velryba_028.html","./bila_velryba_029.html","./bila_velryba_030.html","./bila_velryba_031.html","./bila_velryba_032.html","./bila_velryba_033.html","./bila_velryba_034.html","./bila_velryba_035.html","./bila_velryba_036.html","./bila_velryba_037.html","./bila_velryba_038.html","./bila_velryba_039.html","./bila_velryba_040.html","./bila_velryba_041.html","./bila_velryba_042.html","./bila_velryba_043.html","./bila_velryba_044.html","./bila_velryba_045.html","./bila_velryba_046.html","./bila_velryba_047.html","./bila_velryba_048.html","./bila_velryba_049.html","./bila_velryba_050.html","./bila_velryba_051.html","./bila_velryba_052.html","./bila_velryba_053.html","./bila_velryba_054.html","./bila_velryba_055.html","./bila_velryba_056.html","./bila_velryba_057.html","./bila_velryba_058.html","./bila_velryba_059.html","./bila_velryba_060.html","./bila_velryba_061.html","./bila_velryba_062.html","./bila_velryba_063.html","./bila_velryba_064.html","./bila_velryba_065.html","./bila_velryba_066.html","./bila_velryba_067.html","./bila_velryba_068.html","./bila_velryba_069.html","./bila_velryba_070.html","./bila_velryba_071.html","./bila_velryba_072.html","./bila_velryba_073.html","./bila_velryba_074.html","./bila_velryba_075.html","./bila_velryba_076.html","./bila_velryba_077.html","./bila_velryba_078.html","./bila_velryba_079.html","./bila_velryba_080.html","./bila_velryba_081.html","./bila_velryba_082.html","./bila_velryba_083.html","./bila_velryba_084.html","./bila_velryba_085.html","./bila_velryba_086.html","./bila_velryba_087.html","./bila_velryba_088.html","./bila_velryba_089.html","./bila_velryba_090.html","./bila_velryba_091.html","./bila_velryba_092.html","./bila_velryba_093.html","./bila_velryba_094.html","./bila_velryba_095.html","./bila_velryba_096.html","./bila_velryba_097.html","./bila_velryba_098.html","./bila_velryba_099.html","./bila_velryba_100.html","./bila_velryba_101.html","./bila_velryba_102.html","./bila_velryba_103.html","./bila_velryba_104.html","./bila_velryba_105.html","./bila_velryba_106.html","./bila_velryba_107.html","./bila_velryba_108.html","./bila_velryba_109.html","./bila_velryba_110.html","./bila_velryba_111.html","./bila_velryba_112.html","./bila_velryba_113.html","./bila_velryba_114.html","./bila_velryba_115.html","./bila_velryba_116.html","./bila_velryba_117.html","./bila_velryba_118.html","./bila_velryba_119.html","./bila_velryba_120.html","./bila_velryba_121.html","./bila_velryba_122.html","./bila_velryba_123.html","./bila_velryba_124.html","./bila_velryba_125.html","./bila_velryba_126.html","./bila_velryba_127.html","./bila_velryba_128.html","./bila_velryba_129.html","./bila_velryba_130.html","./bila_velryba_131.html","./bila_velryba_132.html","./bila_velryba_133.html","./bila_velryba_134.html","./bila_velryba_135.html","./bila_velryba_136.html","./bila_velryba_137.html","./bila_velryba_138.html","./bila_velryba_139.html","./bila_velryba_140.html","./bila_velryba_141.html","./bila_velryba_142.html","./bila_velryba_143.html","./bila_velryba_144.html","./bila_velryba_145.html","./colophon.html","./favicon.png","./index.html","./manifest.json","./fonts/Literata-Italic-var.woff2","./fonts/Literata-var.woff2","./fonts/LiterataTT-TextItalic.woff2","./fonts/LiterataTT-TextRegular.woff2","./fonts/LiterataTT-TextSemibold.woff2","./fonts/LiterataTT_LICENSE.txt","./fonts/SpaceGroteskVF.woff2","./fonts/SpaceGroteskVF_LICENSE.txt","./resources/image001_fmt.png","./resources/image002_fmt.png","./resources/obalka_bila_velryba_fmt.png","./resources/obr01.jpg","./resources/upoutavka_eknihy_bw_fmt.png","./scripts/bundle.js","./style/style.min.css","./template-images/circles.png"]));
}

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open(CACHE).then(cache => {
      return cache.match(e.request).then(matching => {
        if (matching) {
          console.log('[ServiceWorker] Serving file from cache.');
          console.log(e.request);
          return matching;
        }

        return fetch(e.request);
      });
    })
  );
});
