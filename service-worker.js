/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0f1a3fe8907c5d46c25e851783f9af17"
  },
  {
    "url": "assets/css/0.styles.90897c6f.css",
    "revision": "89af5f5d8cc1a883cd7a8faad48db6f5"
  },
  {
    "url": "assets/img/centralized-vcs.fc277603.png",
    "revision": "fc2776036da25e7a2af7f41f0aa6460f"
  },
  {
    "url": "assets/img/distributed-vcs.82572b90.png",
    "revision": "82572b90e32fac3ef8736c00dd8b3348"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.52fec791.js",
    "revision": "eba3aab0874027b6f083dbea31d1e3bf"
  },
  {
    "url": "assets/js/11.ed2d0348.js",
    "revision": "fbe4199d2f2c7956060abf208e56067c"
  },
  {
    "url": "assets/js/12.900d9a1e.js",
    "revision": "aaefd89fb68a0934669dc48719c4673b"
  },
  {
    "url": "assets/js/13.09bca41f.js",
    "revision": "41699f9f5293ba56c49467d7018645d2"
  },
  {
    "url": "assets/js/14.7c0e40b7.js",
    "revision": "a2f2517594877fd7d9e4aa5ed40c9541"
  },
  {
    "url": "assets/js/15.37e76d9c.js",
    "revision": "222b73c49ae0f9e2e62034a5708a49b7"
  },
  {
    "url": "assets/js/16.0cb0e974.js",
    "revision": "1a1117759cddbd1dedc5a09ce5aa6fe2"
  },
  {
    "url": "assets/js/17.9f6223cf.js",
    "revision": "d4dd622f81a7e6f4f7c3392c4b4fcc23"
  },
  {
    "url": "assets/js/18.b8676639.js",
    "revision": "29e607e41f0a344202fb21bd72a558b6"
  },
  {
    "url": "assets/js/19.30d13e34.js",
    "revision": "5cd4de43482856121d95a8614393770a"
  },
  {
    "url": "assets/js/2.45405de1.js",
    "revision": "b34cb9f8ccd757a7b6c369849188b414"
  },
  {
    "url": "assets/js/20.1cdd1e0d.js",
    "revision": "bbe3bb4bbfc66bf22a75a09f85636a13"
  },
  {
    "url": "assets/js/21.b132f094.js",
    "revision": "07f18b81c6e7257b5918014b278d662d"
  },
  {
    "url": "assets/js/22.4d9cc59b.js",
    "revision": "ef7ce4aa9a206af3c4e76b129f7482ce"
  },
  {
    "url": "assets/js/23.59830cbe.js",
    "revision": "c9f200562ea1f2b66472aa4ff2515e81"
  },
  {
    "url": "assets/js/24.f3885bbe.js",
    "revision": "1141c6bf0c8aa04a1a7116e8a0c00063"
  },
  {
    "url": "assets/js/25.f46351f9.js",
    "revision": "36c1269994c064b5814300abf133ca7c"
  },
  {
    "url": "assets/js/26.08f0e02c.js",
    "revision": "1df93d9fa99a6264fc089930281de27f"
  },
  {
    "url": "assets/js/3.0fb4869b.js",
    "revision": "08c6c36173da28519d945e33f8e78a7d"
  },
  {
    "url": "assets/js/4.c61871d1.js",
    "revision": "53e373152a89fb3982802d2e99817c4d"
  },
  {
    "url": "assets/js/5.3803f41d.js",
    "revision": "528f27ed24bb30113d522d61bd2844b5"
  },
  {
    "url": "assets/js/6.f7b69c14.js",
    "revision": "ec185aaf69a0027b68520e68ab472dde"
  },
  {
    "url": "assets/js/7.b4478473.js",
    "revision": "235b1506c557a600a613224a18407eb5"
  },
  {
    "url": "assets/js/8.3f77a433.js",
    "revision": "09142b667367e5514bf06a517282d566"
  },
  {
    "url": "assets/js/9.2e9ee556.js",
    "revision": "3940ebd4386806ba974ddb0290b401cb"
  },
  {
    "url": "assets/js/app.64e260b3.js",
    "revision": "2da69371bc2a6b24da023fc0e64c11cb"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "8c75d233692b19d3f6b8762342ebb318"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "44eeb85ead237cfd00bbb8adb61b9cd8"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "813602267567469a5bfba77ceaba5943"
  },
  {
    "url": "index.html",
    "revision": "80ca3c9b9a3384e16cc197a8f827e698"
  },
  {
    "url": "lessons/comment.html",
    "revision": "3bcd274f37bb6c0a30eba6d675c1b6db"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "2516f924996c73c3a50d8a35e34ec8a0"
  },
  {
    "url": "lessons/functions.html",
    "revision": "b1c7afa4bfe4230f20b2c6c07174b30f"
  },
  {
    "url": "lessons/index.html",
    "revision": "d27d8990202aaf1f55b8c6d0f35d9480"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "49839b31bf9920dc9c6b415df3366f49"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "2963cf33d147c07f4fb26e83461a3f6b"
  },
  {
    "url": "lessons/modules.html",
    "revision": "76a838b6c73a863e0196e1428f2c88a8"
  },
  {
    "url": "lessons/operator.html",
    "revision": "c3fd87dc43cf0c6526decdce6722a8e1"
  },
  {
    "url": "lessons/script.html",
    "revision": "fcdaa8f3a2e24717ca2e9143c5805715"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "ff93d796e2851b6fabe10b7f24b40551"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "42db04979a93ecacaed0b5ba93900d21"
  },
  {
    "url": "lessons/setup.html",
    "revision": "b611555b75f6652a28c58f9a0c7320d9"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "4760b9f51ae44aaf24b8406e29bdd56b"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "49c92bae3d48515cbe497e8d8f85c6a4"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "19f03bb6722300a7621661cc0986e9c7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
