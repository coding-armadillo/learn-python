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
    "revision": "00feffd3a2bf5d752683d89178ce3b68"
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
    "url": "assets/js/12.5a36017d.js",
    "revision": "f1882920ee21b19e4b84cc16beb60ff1"
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
    "url": "assets/js/24.b53b5c03.js",
    "revision": "62913782c00cfa05e59d9ae87f7d7884"
  },
  {
    "url": "assets/js/25.db54b389.js",
    "revision": "141f65d79f7bb057e6d78cd70efdaa72"
  },
  {
    "url": "assets/js/26.fd2c7e9d.js",
    "revision": "7d04fadfd67d22631e88d897e9d36c9b"
  },
  {
    "url": "assets/js/27.16321a29.js",
    "revision": "6416ec50f5189b7bc7ccb9b30f3e5693"
  },
  {
    "url": "assets/js/3.f4501062.js",
    "revision": "ebbe936c0ea45bd8226739b8a3359502"
  },
  {
    "url": "assets/js/4.c61871d1.js",
    "revision": "53e373152a89fb3982802d2e99817c4d"
  },
  {
    "url": "assets/js/5.6247e0ea.js",
    "revision": "b1b43c55c191f59cc6af59a0651cab6f"
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
    "url": "assets/js/8.22d901d6.js",
    "revision": "e3e78b5db1fc4674565adcc2aeb99891"
  },
  {
    "url": "assets/js/9.2e9ee556.js",
    "revision": "3940ebd4386806ba974ddb0290b401cb"
  },
  {
    "url": "assets/js/app.5f668728.js",
    "revision": "56fb783902ec945a81c3879b1f7602ce"
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
    "revision": "ef276d25a98eeb93501cd6c03b31d5ff"
  },
  {
    "url": "lessons/comment.html",
    "revision": "a7ce64e0fd6c226b64580a401b7d93b5"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "a823a53748d01314a6ea08f378814778"
  },
  {
    "url": "lessons/functions.html",
    "revision": "078039f0fbd18c92ffc7360e43dfbfd9"
  },
  {
    "url": "lessons/index.html",
    "revision": "1efd8e4e6b35e093feb3545c690fb0ea"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "47e07dde98434db5b30886e4095505da"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "b9f51bd9666710f521619bade4ce8b3c"
  },
  {
    "url": "lessons/modules.html",
    "revision": "038b921b6f7976fd7df8965e4662733b"
  },
  {
    "url": "lessons/operator.html",
    "revision": "57f52d1fb987d55b710592290b3b3c02"
  },
  {
    "url": "lessons/script.html",
    "revision": "3048ff9543f0d92ddc41ec84b2048166"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "183641a689bd175e7de257dc8a87e75d"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "c5c18b357881ff7aa9dd9928dc122359"
  },
  {
    "url": "lessons/setup.html",
    "revision": "e44766602dad53cc81fed1da7bb663f5"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "1af750d6dfb2218a6296da8e596c95ef"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "ad5316658f01b24422b5fe988444335b"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "049f85edd2581607d3871693bf3f1abe"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "ae987805d1c6db56ef91a7c2d04a66ba"
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
