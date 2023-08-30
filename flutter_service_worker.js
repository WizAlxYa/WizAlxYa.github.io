'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "4df4ba884a52870c71b564596cee1e54",
"splash/img/light-2x.png": "f35554a10555461efcd60073c710fc6c",
"splash/img/dark-4x.png": "34ef2c7a25e6f2f1dc2694739b9a371e",
"splash/img/light-3x.png": "80dad222b641a0430e43fd0ffad26b5e",
"splash/img/dark-3x.png": "80dad222b641a0430e43fd0ffad26b5e",
"splash/img/light-4x.png": "34ef2c7a25e6f2f1dc2694739b9a371e",
"splash/img/dark-2x.png": "f35554a10555461efcd60073c710fc6c",
"splash/img/dark-1x.png": "18068a570f4aa5cddee20914622e97d3",
"splash/img/light-1x.png": "18068a570f4aa5cddee20914622e97d3",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "164e9193af5c45af8a64054f92c06f94",
"index.html": "68f5ba1a66c6ddaf7a5a6b9005d4a64e",
"/": "68f5ba1a66c6ddaf7a5a6b9005d4a64e",
"main.dart.js": "4aa74014f2a76a49671e02c5313fcac8",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "79446c17f54cb77423cbae1d24799181",
"assets/AssetManifest.json": "64136db6f6218d1d9d0adcd3dfa4cb96",
"assets/NOTICES": "3e6f24d3b57e2a1c393ef41742c4044c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "739ba55fb520dd55d8db6d29ce59ba8d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "4ef002f743abc476796c9c81cb658e2f",
"assets/fonts/Raleway-Medium.ttf": "2ec8557460d3a2cd7340b16ac84fce32",
"assets/fonts/Raleway-SemiBold.ttf": "8a192102b50118c45033e53ce897f103",
"assets/fonts/Raleway-ExtraBold.ttf": "c9503ab0f939e9d37fcfb59b25acf8b3",
"assets/fonts/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/fonts/Raleway-Light.ttf": "6c084270ccdeb72fd9f5a5144cea628f",
"assets/fonts/OFL.txt": "651d331ec3ad07851ba9001f84b6dcca",
"assets/fonts/MaterialIcons-Regular.otf": "495d7f886e1ae66b1915f1c10bd98be2",
"assets/fonts/CustomIcons.ttf": "3f9faf2f4671ef13757f723ae8cbc0ac",
"assets/fonts/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"assets/assets/nichese.png": "5e5bbc0d5015a0d19482cdabed092bf5",
"assets/assets/appbar/back_appbar_icon.svg": "7e8c72efa67caa0eff853f7153396dc9",
"assets/assets/intro/app_intro_page_1.svg": "6b5adb54d8037569dcffd16e389f1ffd",
"assets/assets/photo_album.svg": "3801a6819c409657f11e2ffaf550de0e",
"assets/assets/rive/bottom_bar/animated_button.riv": "162e8114717a3e37193d6c11d805571a",
"assets/assets/rive/side_menu/side_menu_button_dark.riv": "21d2ddf3423dae6fdc6489243e5f99ec",
"assets/assets/camera.svg": "c3f9a22e18581b26a1d0c93afe991bfc",
"assets/assets/avatar/avatar_man_1.png": "3eb9adc62c2a4ed25f18c983352ea792",
"assets/assets/avatar/avatar_man_2.png": "8ceb7e02d2ef8facb65e9cf32e3a215c",
"assets/assets/avatar/avatar_aydar.png": "6c1b4639e6aad010c12d52fbc3adfea7",
"assets/assets/avatar/avatar_nichese.png": "5e5bbc0d5015a0d19482cdabed092bf5",
"assets/assets/avatar/avatar_woman_2.png": "f430de7daea7f0184f8519378790cb3a",
"assets/assets/avatar/avatar_woman_1.png": "996c6ad44ca457a9f115a7ed8ce745c9",
"assets/assets/delete.svg": "e2bf0129df9a60286a444dcbad41475a",
"assets/assets/halloween-ghost.png": "89e0b73a21ab6caca600a9e4a04c27cb",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
