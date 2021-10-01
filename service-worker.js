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
    "revision": "87e5ed39b1c847fad188a8a7ee0b03db"
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
    "url": "assets/js/14.998345c1.js",
    "revision": "41d401614ef9159d437149bf6ab763b3"
  },
  {
    "url": "assets/js/15.7e1bf0da.js",
    "revision": "c33b7807eeb833af586caa1346450ba7"
  },
  {
    "url": "assets/js/16.dcac4efa.js",
    "revision": "807b2b8d59f6a3c170ff658860733415"
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
    "url": "assets/js/24.854ef64e.js",
    "revision": "aac7ad8ad5c584fa563ed1bdb18a2e9e"
  },
  {
    "url": "assets/js/25.9d105082.js",
    "revision": "a4b8d067fb21fe0e2178b46fc4b8feac"
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
    "url": "assets/js/8.3f77a433.js",
    "revision": "09142b667367e5514bf06a517282d566"
  },
  {
    "url": "assets/js/9.2e9ee556.js",
    "revision": "3940ebd4386806ba974ddb0290b401cb"
  },
  {
    "url": "assets/js/app.64957bea.js",
    "revision": "ee85f2e692c238865ad3f77b6b5907b2"
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
    "revision": "1b37229a525a7cd61c09b4b4da48bd6b"
  },
  {
    "url": "lessons/comment.html",
    "revision": "cf6f539caa755eac85ced1e599cf1e5a"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "1db10a1fd7df043e5c60da9cf496653d"
  },
  {
    "url": "lessons/functions.html",
    "revision": "f46bbdf6b82e7950553b09bf5ffa24b0"
  },
  {
    "url": "lessons/index.html",
    "revision": "2bac00fc623ccb28c92d5b3a520f5eeb"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "dfa2b954f13bd1550ba247ca46a8df95"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "6ac0cb3c7f03d764db417b2cb9b50aca"
  },
  {
    "url": "lessons/modules.html",
    "revision": "495dbffa9ddc8832f411f00b7a4633f2"
  },
  {
    "url": "lessons/operator.html",
    "revision": "31e8949b532e429421e396cfc7c4cd35"
  },
  {
    "url": "lessons/script.html",
    "revision": "a3c5057065422d71227a422626145428"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "670671178c9775d7d33a1d6e9e78704f"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "3275c0aca984c708fb546a0243835844"
  },
  {
    "url": "lessons/setup.html",
    "revision": "4b7bd18371e21f7e353b183fc9458b2b"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "f193dbefd8700d6d168a1c1f8845208b"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "05506b32000cd7ae23e81f9ad20d6622"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "fac4b88ca1013f00b85014952a5c0ad6"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "63d3fcd90d871179b91f9e911c358793"
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
