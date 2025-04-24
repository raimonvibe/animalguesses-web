'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5daf94f4f4a28602331d63ab4ede5a98",
"version.json": "68933a1833f7c1c219ee33760e8cf494",
"index.html": "3362835d53f4a419101c9ec6f88214d2",
"/": "3362835d53f4a419101c9ec6f88214d2",
"main.dart.js": "14b1aa6d1756d0f08061a39819c7f770",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c303c23be0c31e6bbda7a8ea9678fa81",
"assets/AssetManifest.json": "809860d7a25b3e6d154e21c66827f2c2",
"assets/NOTICES": "7db556fb4655ad05e74424dde7901439",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "7c5aba86328e59e366b991e193d6645f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "23cda20dcd2365c587e4706bbc16a705",
"assets/fonts/MaterialIcons-Regular.otf": "48cad1d91e8cae78fe0ef4fd3e8eb2fa",
"assets/assets/rabe.wav": "6941e644dd68922609ded751831821fc",
"assets/assets/parrot.jpg": "3a578b155c3482ad8bdcdde2ad13121a",
"assets/assets/hahn_kikeriki.wav": "5ef4e78bb7343617380e59cbd4640341",
"assets/assets/seahorse.jpg": "c57ad6a79c5b97206401905f70fd649b",
"assets/assets/cow.wav": "9c9deaea0d25cb0104da383740dde166",
"assets/assets/horse.jpg": "0143efa5e8d9de863dfe6684b226e1bb",
"assets/assets/tiger.wav": "fc8b2f1ee50bdf7d3922402e243716a2",
"assets/assets/crickets.wav": "8944735533338eb14b6a8d376113e709",
"assets/assets/mouse.webp": "762e5e98336061a34658c3f10d86407a",
"assets/assets/elk.wav": "522d01d05326e5e0316abc01828f46e4",
"assets/assets/turtle.jpg": "00330b5cd3933fe67bd65d4047d9ccaa",
"assets/assets/pony.wav": "17636ef894d6a00081d401f174e34b2e",
"assets/assets/sealion.jpg": "d12201416235bed29a6ebe94f5f807a4",
"assets/assets/eagle.wav": "1b3c8b6cc281de03cb36885f48779fc1",
"assets/assets/horse.webp": "df231ba94fa12a41e94d8904206ff9c8",
"assets/assets/geese.jpg": "d90718149277776076391c4940c48e8a",
"assets/assets/bee.wav": "cbb4b053f096a6f3ba953ee324b44ff2",
"assets/assets/huehner.wav": "c1ea11d982e72e965615f6f8766b69be",
"assets/assets/peacock.wav": "1acbcf81e284445b9f33ed1310d5ed85",
"assets/assets/snowparrot.jpg": "98d1df35449b55e39991d858dd739693",
"assets/assets/Ente_quackt.wav": "2aa6e19b26e98d73655951098592f11a",
"assets/assets/turtle.webp": "18169bb33770454bb7e0d0059814f527",
"assets/assets/owl.wav": "2c714cf1d1db0faa7e83d75c0299b77e",
"assets/assets/guineapig.webp": "2220b43c178bcb21c3c9e91b0fd2d31d",
"assets/assets/parrot.webp": "51ca7ef0353cd263f4ed9b26d518a354",
"assets/assets/giraffe.webp": "9fbae35e547c8631f70cdfff38b7fbe2",
"assets/assets/deer.jpg": "c90bcef22dbd8abac608da51d769adf1",
"assets/assets/elephant.jpg": "3a893a8bdf72231918e176ed815e7e20",
"assets/assets/frogs.wav": "ba21f29de73da7dcf7a79b5fc3124a29",
"assets/assets/panda.wav": "e50e0b3ce05b6653a215141eeb18b59c",
"assets/assets/hippo.wav": "332830e8107d7a64905878ca0d4b0162",
"assets/assets/gorilla.webp": "baa3c90944b01459777ac17cd8582624",
"assets/assets/gorilla.wav": "a3f1b7436c2e5bc6ec2acdda39eca4b7",
"assets/assets/geese.webp": "88d9b714ee5aca04c29841168bfabf84",
"assets/assets/donkey.wav": "3fa4ccdd4dbfbfec6384177e5286fe05",
"assets/assets/geese.wav": "3b1a71839a09d1fa717266d7999d6ff8",
"assets/assets/geier.wav": "087f81efa1f9f4df038cadfa161dde91",
"assets/assets/guineapig.jpg": "899701be51a9d61caa25def7efd92c38",
"assets/assets/eagle.jpg": "14895285a66b105d63f1484438be9b91",
"assets/assets/eagle.webp": "2140ba125b191800dce76219998a81a7",
"assets/assets/elephant.webp": "094ed9af8ad93edf80c2e0a5f12e6c4e",
"assets/assets/zebra.jpg": "05ed71dadb818a57e71e7778c6e52e90",
"assets/assets/Rhinozerus.wav": "f151692a1baabfb5762b33ee52df2ecf",
"assets/assets/Ziege.wav": "504afc4de1de587f203c1a5992a17a07",
"assets/assets/dog.wav": "4ca17d108b01d0f0817ce293ef966374",
"assets/assets/parrot.wav": "821f6e0dc39522b838d68e7dddfbafeb",
"assets/assets/RedParot.wav": "82b7fac5aa837262f3f2ecdf92bcdbf2",
"assets/assets/horse.wav": "cc6dfb4655459c9e5b0cd421ce218091",
"assets/assets/cow.jpg": "4fde620849b268137b3c2ac2fe8c323b",
"assets/assets/puma.wav": "a64a890c533c1b0bfa56b306eaa0c77b",
"assets/assets/fish2.jpg": "e49785be3f787e105fe4938221399664",
"assets/assets/gorilla.jpg": "25ec96705f02b3279732dd7a860ebb6c",
"assets/assets/monkey.webp": "e36e11e51fc58bb2daef35b52c24dada",
"assets/assets/AssetManifest.json": "b1465899851f749077168773f2ea4617",
"assets/assets/hippo.jpg": "e3cf84b287a23c32513b978a0dfb7d4a",
"assets/assets/lion.wav": "0c2e2faef07daf409d2f395d7455d41c",
"assets/assets/panda.jpg": "d7ba1e551ec270621f2eab0201f47f0d",
"assets/assets/donkey.jpg": "4cc78cb4ab20697d903565cdcd042894",
"assets/assets/pigeons.wav": "67bd397adbcedfabdf247b79d0aaa37f",
"assets/assets/bison.wav": "b12d19b634e4c7569b7e6553721ef7f7",
"assets/assets/NOTICES": "7db556fb4655ad05e74424dde7901439",
"assets/assets/vulture.webp": "bd6cc4d969e4907625208707bb3cd303",
"assets/assets/fox.wav": "f3d116766f6d3f34a60a9ef47b293906",
"assets/assets/deer.webp": "331fa35295c70b97f17b3151b962958a",
"assets/assets/mouse.jpg": "72fdc6f186dbd212b6a1b8b18a0b2e34",
"assets/assets/Gaense.wav": "3d14f423160dcb11fd4d4945576e0b5e",
"assets/assets/hippo.webp": "d0a20cd1b79e7c7f31bb90fda7e98b68",
"assets/assets/ochse.wav": "1e5180d57c534bdf7f5d0e301423a040",
"assets/assets/truthahn.wav": "eb3f6283db05e60bc7151dac69da6161",
"assets/assets/giraffe.wav": "99bee5f94a9e2373a66fd7dc78582002",
"assets/assets/pferd_whinnert.wav": "08e1fe360e6205c0e826892f69867fc5",
"assets/assets/Kapuzineraffe.wav": "233ed78d69fbbcdf0882fae53c2cf29b",
"assets/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/AssetManifest.bin.json": "394900fafa31acb6f54149b6b089c600",
"assets/assets/fox.webp": "da9caaa9285be0cb24ab98ec030f87f9",
"assets/assets/fish.webp": "675e12fbac583864376f3d763f7c1748",
"assets/assets/cow.webp": "c0232ad7db021efcce40a28fa9db6bc4",
"assets/assets/Elefant.wav": "9f9d78084e9b82f7051bbb1a079ceb58",
"assets/assets/pig.wav": "8cec85318407d46ff6e04780a9fcac29",
"assets/assets/zebra.webp": "76b0d496fff8491805448aadabe15da7",
"assets/assets/koala.webp": "084135a47785bd3aa327d200af9c5022",
"assets/assets/otter.webp": "d0d7b7d00c9ce514a4acd19954d25ecc",
"assets/assets/monkey.jpg": "eb771375f5d141ecf0b11505f667f19a",
"assets/assets/moewe.wav": "1db7b9d11438028afd17dfe46ab0f0ce",
"assets/assets/grasshopper.wav": "d19b9f0ce690d3d6c72855766be6ec50",
"assets/assets/Schimpanse.wav": "c2452bd192ff827fcba17367d3ee7d8a",
"assets/assets/cat.wav": "ff5ddb7867ea88df2c1e3a0cbc076b23",
"assets/assets/squirrel.wav": "1af2f5072c372a1a00e914cbcb46c94c",
"assets/assets/sealion.webp": "e028fa274e0a6aaf12683a52f8e5407a",
"assets/assets/giraffe.jpg": "e36a86a9564332865f0e49b5ba6daeae",
"assets/assets/canary.wav": "fc1c635e76a689b05a39c45d7d58cd21",
"assets/assets/seahorse.webp": "40c1a848f078c12a321a954d9055cbb3",
"assets/assets/panda.webp": "03c29fe44396e2d2018a2c805e2b7c38",
"assets/assets/AssetManifest.bin": "887b9bb62d14ed09089376044861c610",
"assets/assets/fox.jpg": "a14a97b18ee36ef65b4e6e93b4e15c57",
"assets/assets/donkey.webp": "a0be9f22aefc01ee903727541cc6772f",
"assets/assets/mouse.wav": "df1fa6039b718fc7ce65fe25a434dab5",
"assets/assets/wolf.wav": "4729d1cfc15b50b5e74e2e14bf50b5ca",
"assets/assets/otter.jpg": "2380e20803670d552eac3f92ec158db9",
"assets/assets/schafe.wav": "33e755c1aa53586b8ea67cc7fc538364",
"assets/assets/koala.jpg": "91e57ad668a39ba7ffb3cf501254a270",
"assets/assets/pig.jpg": "72245097df7e489f9c8f94e00dc3fadb",
"assets/assets/dolphin.webp": "cd8436b647388dd30fae153b9ccc9681",
"assets/assets/snail.webp": "eb2c32bf6113b557a8d660e922968fa8",
"assets/assets/snowparrot.webp": "2be91a3f307f65352c51a43d98975cc7",
"assets/assets/pig.webp": "d38ddc9fbb976f1b1cf258bbc4c7d97d",
"assets/assets/schaf.wav": "c3ff8bd9fbd00a4bc64b2533324246e9",
"assets/assets/snail.jpg": "78a825fc36dc988937a94db5637b04e7",
"assets/assets/fish.jpg": "9a2c3e8700843b92d61198e29bdc998b",
"assets/assets/vulture.jpg": "7637ef543605fb32136469ebbf6610d7",
"assets/assets/fish2.webp": "cad8c915ca852f2badc57c47825bcae0",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
