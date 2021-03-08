'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0de06d5439a60277945e3a0168ce947a",
".git/config": "51c300cef5cae3bf38aa2471ca982ea1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c1b0369ea8f29f7100850f3e1fcee0c8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ac3742b92dd30ace6683e2d927a73790",
".git/logs/refs/heads/main": "fddace07511a46715cfa0f9a1b0876c1",
".git/logs/refs/remotes/origin/main": "287fdd865757798e6bef18daba8eeef7",
".git/objects/09/cf97c00a3964b7aa22d75d5f1459f6b6552994": "520f306372fbb2cdbefea7070408bb45",
".git/objects/0b/3d9a07173116a7fe82948027ac9c722be67744": "f48e76ac29176c56be2d16b2b8c107b9",
".git/objects/0b/b9c8a614cab7c649972dd10bffa98e062279e7": "ee1343be5d5301394f16a1cb139555f3",
".git/objects/19/78910e1552471f0bddb35d9743d4996c9df1b7": "c224ef8fc0dff1a2b6767cdc29f8dce6",
".git/objects/1c/4236dff616f1bcbdd0fdb5b0dab43cf29ce05b": "f8064696d2ca8a9db9c9040ce5276530",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/c04c35e24cf6d9bd97fbb72684cd6eaa6b74eb": "c2e85644ff52fe7e2b1c5969cdb17c57",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/38/6680b9755aa81ddef1e84659f96739d469c53a": "a930f8bec7b0338d618dbf9dbecdf317",
".git/objects/38/c14ecce49ef4a323d62446760795b6858a63db": "7eee4782b4a5d78b96db5c4b8cd01e5f",
".git/objects/3a/d9ac513711420ef259e85a5017ec5cc41c1e66": "a72f04af2685102c4ab7e59b13c218e5",
".git/objects/3d/79af5fbeb718ea5b3679fd90f0cc262aae9723": "86a75f7b9082ed6329aa9e2cb744ec16",
".git/objects/3d/c900564b4dd125943baadb8a85f9acdcb015e3": "db7a290e709020341562c2f1f40cbac3",
".git/objects/3e/e409d4d0286a13be5a0ddfb653529a0a820030": "97313a16e2daaf2f5ef482a2f3234c06",
".git/objects/41/322900f775afb38d51648fb42ce44df47e4dbc": "2fce03342b8b2b3944f4018bded28274",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/52/579cb31f6603700472bba69b664d2d12fe16ce": "4b005adb6896902828f8e7bf9aff5ad0",
".git/objects/5c/d3a45cf1159442c36f3464d361e8d2cfd63333": "f04f33e3a8741badaea19b77784ae74a",
".git/objects/5e/fde43e91fcf0270a8756f41706f7a346ab4936": "30b422c92d99fb796717fe70e1d8b25e",
".git/objects/73/0ef7cced232ca8ad9b82ed6bb2fd8e7dcfce26": "1dd7eb5a11086662280220f9c11c50bd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/9a83c0f0aae5a3ece60c2b17107ec704e4099c": "5a1cd1edd6f76af289b2919111e33a78",
".git/objects/85/24e79d05441103d055c9056d5449c26e7b13b3": "9639085888a48d06410c874f5472d356",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/8f/3f7a6807cc404d239450ee33e7302b1beb3f26": "193a05896b448731f35a6a647d92d696",
".git/objects/93/7b33bd85c3c4e7f92ff054110c82537b8ef9a2": "a72ad9ead703d9793f28b02c155d2f6a",
".git/objects/95/99deb999d32508b2ab74ab68864410876fb93d": "ee58032d8aa61c16d8b19a11d3951115",
".git/objects/96/3c3bf1307f2c801597c8309065741f795f388a": "8fc42e8e87d7d05b70d18d62f3c5990d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/84be67c30500129445477e71ee66dd7fbf756b": "8c323d0ee98fbef84ecdaeb45fead135",
".git/objects/a6/4e3f57baa3219730c2ea6721f637429de6ff9a": "621e92dd8166a23e47a0da0d2d8297bb",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/548392e46ce10bd1627947201262231afa24c4": "8499ef6d2897025d4357819b2f1359e0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/4cec5dbe8aff77b01a5261166a3d886495d880": "cae36bb45c39aeeaffd6ff241fd3eabb",
".git/objects/be/3b71d95ae7e09acc34e48a4d44315414718524": "131980569e30958b04fb2171abdcd208",
".git/objects/c0/82c83335931128f972c3f05dc6efb4e28482f7": "8d12323e5841a4e0bccef158f20dc87a",
".git/objects/cf/105a63724b7cb34ef9bcd6df8bc60cc29cb2b1": "d20c45fcc2590ebc30c469072ed85e5e",
".git/objects/cf/1c1abe04547ec9b556ed44a012b7f34c875215": "1065578c3e56d17c1ca55fef841bc49d",
".git/objects/dd/8c0c687a748f799cd6cb360aa4a68c5f59e4a8": "c6c5eda4b9a48ae127ab9321cb118022",
".git/objects/e0/9e4dc9e3ad6bcfacc4c5cf6155379f5c26b680": "60e1d551e61d2d8959e57676fdca60e1",
".git/objects/e5/379a1f518a161fcff08c2c075fe81d3db36f13": "e9dae82010bfe415e95ff79f5cd82c37",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/545b815e3cb8e42a1da615833d2d33cd18e307": "552c02bae16a972ef6e522e5b5c770c0",
".git/objects/eb/4c77f1b8092cf46d40f8e1c52a24804b0417d8": "05dbd6d4e1d65bb8c34a6b4bfbf5e5e2",
".git/objects/ec/bd02dfc3638e98a4828642cf5b7c03b03cd280": "c8cc069a4a20b2084cafd1e500e93c6b",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fc/2c1e6f59ba9eec8d87a036f99864dbafd4fcf1": "86c014a7884d0799d49c6799abec1fb7",
".git/refs/heads/main": "2c74cb544a9b6193a5db036e3afae402",
".git/refs/remotes/origin/main": "2c74cb544a9b6193a5db036e3afae402",
"assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "7b1cd311f52c59b1012f89ebd2c90a90",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "bcd5f9e5cfc03511098a5820b2b15a57",
"/": "bcd5f9e5cfc03511098a5820b2b15a57",
"main.dart.js": "7455cbd738218b258f3e46f4d8e05bfd",
"manifest.json": "0bba155b0defdde620e377dffa80ab55",
"version.json": "faf983482cf51f1cdbc699a349e4d684"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
