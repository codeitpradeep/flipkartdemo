'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "973e4ce9b76d4ac328aa987e0fbba7f0",
"assets/AssetManifest.bin.json": "42f50ff52c08b0474f86707a10846351",
"assets/AssetManifest.json": "575092d0028461559c05839491caa3d5",
"assets/assets/avatar/boy_image_1.png": "f90552a21e9e3aaf146c95f52f7ef6ab",
"assets/assets/avatar/boy_image_2.png": "c813bf82471d03d13bf4a32cee525309",
"assets/assets/avatar/girl_image_1.png": "25ed18f4f45226bc0fb362da4f7561ae",
"assets/assets/avatar/girl_image_2.png": "27ed3a138b61dda2dde4968f8b6d056d",
"assets/assets/avatar/Yellow%2520Background%2520Telugu%2520Script.jpeg": "9f09f36e09ab99a3f822795a33885554",
"assets/assets/output_1.json": "d6958f321f345c74f292ad331a3311d2",
"assets/assets/output_10.json": "6d427c204e6a3b298a87fd09e281cbb6",
"assets/assets/output_11.json": "a0a47be0bba8bdb70205c6af683bcc39",
"assets/assets/output_12.json": "16ecd5303c680a6b3005aa8dbe3f1ff8",
"assets/assets/output_13.json": "2004a082e8b38a3d59331d323f4fc967",
"assets/assets/output_14.json": "df23976ab9815e0ec08295d020ba61a0",
"assets/assets/output_15.json": "2fe4c55295bc765312b4462abb7260d7",
"assets/assets/output_16.json": "0cb5efa3c8c5dce6f726c68607291fb5",
"assets/assets/output_17.json": "37ada0c762657071036d37f236f445f1",
"assets/assets/output_18.json": "bfd236206100c7e1f1b53ca871c9ae6a",
"assets/assets/output_19.json": "0fbd91cfafaf3d7e691a7c22902ddac5",
"assets/assets/output_2.json": "55a8fe3a92b2fc00cf3b1c75fc9552f9",
"assets/assets/output_20.json": "64d3323d8a89743aa8dda46bc8b2eeea",
"assets/assets/output_21.json": "7d6a4caf8947c9eee351f176992c9e96",
"assets/assets/output_22.json": "cf21e878f79355fe09fb99f2f2052a75",
"assets/assets/output_23.json": "a25819e87db8fb150dcc08c165af856c",
"assets/assets/output_24.json": "a3b01406298bd19fbd9e4e50f1952dff",
"assets/assets/output_25.json": "28dd0229d2a4f42c028925d323cdad48",
"assets/assets/output_26.json": "a417ba6f9f5e0b5ae952538dc6244cbc",
"assets/assets/output_27.json": "b04d081489686b7acb902e4c8a25b22d",
"assets/assets/output_28.json": "db6e9d7bb28b4f70ac0faef82b8f30e6",
"assets/assets/output_29.json": "e3c059ff55884e6e37fd33c86a6731bc",
"assets/assets/output_3.json": "133094f87d4516d6dfde3c32dcbf12b6",
"assets/assets/output_30.json": "be303de01acc6a637951374dbff8524e",
"assets/assets/output_31.json": "472b59a89d05b7ce20c4a7731cb6aa19",
"assets/assets/output_32.json": "e5e0632e4896ebc5538e11d50f6070b6",
"assets/assets/output_33.json": "0dfec1cc8359262dc585d545edbde6c1",
"assets/assets/output_34.json": "9417530433a70234dc3b78e075862d76",
"assets/assets/output_35.json": "875a0097016a65f62aa3b9c98a505cf5",
"assets/assets/output_36.json": "de62436a2825db5ab67db69629ee5259",
"assets/assets/output_37.json": "d5c4ca75aaa4f30ccc83c824a111fb78",
"assets/assets/output_38.json": "8af58f987a6b55ca9927970e5081b0ed",
"assets/assets/output_39.json": "c52f15fa61280fe62fe9185bcd7d1183",
"assets/assets/output_4.json": "b4543f387bfec392617e601030e46ef3",
"assets/assets/output_40.json": "2548c6de0e201ed86bfde717aa98f027",
"assets/assets/output_41.json": "99cf3c9eb75f4f27c113d353d94449aa",
"assets/assets/output_42.json": "aafce6f3e8d18203a407afceaa22539f",
"assets/assets/output_43.json": "0ef1abe8ad92548f0a499c5e137d36f3",
"assets/assets/output_44.json": "5ce7add9f8d6dbbc696e78fbc8d2ed5f",
"assets/assets/output_45.json": "23289216284af63d5b23d23ad87f3e82",
"assets/assets/output_46.json": "89baf0c702e4b055072843a7e996f14e",
"assets/assets/output_47.json": "a16a4f5fd4189fd95ac8f5c40e60f50b",
"assets/assets/output_48.json": "fab9a37f3ca626433a12eec4bbe8d409",
"assets/assets/output_49.json": "0db4a7a691a08777d15f6ad37fb388cb",
"assets/assets/output_5.json": "38529149472a025d1c2560910e2cfbc1",
"assets/assets/output_50.json": "5b656668e3103d208a139e734b2e9f30",
"assets/assets/output_51.json": "23ab5ae2c377e41bb98bb2a99eb2457d",
"assets/assets/output_52.json": "f9a11954171f422167981be4efd4ee49",
"assets/assets/output_53.json": "dd812ca125f3c7f4075acdb5c0f65a5d",
"assets/assets/output_54.json": "f4d6c135b2ac3f2240a0391bfd0a5d9c",
"assets/assets/output_55.json": "7f282d415f27c0e027d29d9248f8bc32",
"assets/assets/output_6.json": "59b33f5c8923ca8cd5781f7aea77c936",
"assets/assets/output_7.json": "fef6b006e3f8deee85f9e8ddf58bc6cb",
"assets/assets/output_9.json": "a3e08ffdcb9ee107601f767515f4545c",
"assets/FontManifest.json": "db8f453ee5bd623ef9ffbe9d7a009cf7",
"assets/fonts/MaterialIcons-Regular.otf": "c2f9e75d6537bd601308fc4439f65b3f",
"assets/NOTICES": "55d8b55326436ea4a9ed3b3697073c17",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "61a1675f4255a13d25f620c8f54cc2cb",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "13772a1f4854721ef2aa7188b999f014",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "5db4d60d9b2a9cdae31b06505c78ae66",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "30840d0af1493fe8fda5890f5293e4b4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "99f7bc6db37451e3dcd414b8ad3150d5",
"/": "99f7bc6db37451e3dcd414b8ad3150d5",
"main.dart.js": "c58bdcb4d38e96023124d58fae7d6992",
"manifest.json": "94daf6d1084134e4d0f0659f9602e5ff",
"version.json": "54fca4da3be6e7480ed306cad2cd2d39"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
