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
    "revision": "960960a343df965d39519963dc93dcd0"
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
    "url": "assets/js/app.32aaa44a.js",
    "revision": "0fc5c076c3b5cc3e249adfe4b6844ee1"
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
    "revision": "449536b0b3ecca8bb6281bcc8c1eead0"
  },
  {
    "url": "lessons/comment.html",
    "revision": "de91e8be927ecd1123ab5dce5bd0b2b9"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "ea48e8896da6fcf5fdf2fa5f3737e44c"
  },
  {
    "url": "lessons/functions.html",
    "revision": "6f954f120d07214b35f54a55b4293b22"
  },
  {
    "url": "lessons/index.html",
    "revision": "6a211e0cbef240d7a1e0263c51e608b3"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "655a5420e87a0de1b92fee72556e784e"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "449b4af200e241e45dc5e314001cbed4"
  },
  {
    "url": "lessons/modules.html",
    "revision": "096c326bf61dfa4e507c788106a2cc54"
  },
  {
    "url": "lessons/operator.html",
    "revision": "8919a07ea179df1edd7ba4c5acdc3818"
  },
  {
    "url": "lessons/script.html",
    "revision": "1522c1a67e8327ffeecc21ba564b60fa"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "c22f90c3eb57a572c42ac699ff70a618"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "ce16292d932908e5dc8ff8cf16a7a715"
  },
  {
    "url": "lessons/setup.html",
    "revision": "0b361d26319ca1e8101d422b93450bdf"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "1c39430c9f3071dbd0e396431fd5d51a"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "294a3e2f3c619a4ccc6542b13d899a99"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "c37642a053bdb9a5388e842a24a283eb"
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
