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
    "revision": "06c53a2b94b6915093b611d467d258b4"
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
    "url": "assets/js/app.2ba3f9b7.js",
    "revision": "ea63f0ca70e566e54318c4e30a8d5263"
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
    "revision": "2bc083e4649ebca8417218ebe00db607"
  },
  {
    "url": "lessons/comment.html",
    "revision": "ce6b1a22f448e3b0533d7f75a9882249"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "f04d252906d1659bf97320915a1a6ddc"
  },
  {
    "url": "lessons/functions.html",
    "revision": "c1293d4e9725827061f7fa19007e4eb5"
  },
  {
    "url": "lessons/index.html",
    "revision": "84bf7af73f9b59a52af30d5e27dd8ec0"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "3cf3da28d593de35cae034f71e163a77"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "2e2f11ac6cfd2dce358f813065b9cc64"
  },
  {
    "url": "lessons/modules.html",
    "revision": "61a423ef3c87e4a425de4f17788a54e3"
  },
  {
    "url": "lessons/operator.html",
    "revision": "7ce65a3f7cfae6a15053de904cfe164e"
  },
  {
    "url": "lessons/script.html",
    "revision": "cb69107957eef9325c6557988990dfaf"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "80b7c3559031d0b0167caacc5911195c"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "d2533f0dcf6e3321eaf5113955d5a9dc"
  },
  {
    "url": "lessons/setup.html",
    "revision": "d464ed86469ec31c697de7e040959020"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "94f434397e774b49c647c94a970956af"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "05b816d9efce096c83b0ee0721832c93"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "324695f39481f09b4c10e6dcb47f6f62"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "dd113911bfaa221777ffcbe3f4c257a9"
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
