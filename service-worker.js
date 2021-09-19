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
    "revision": "8869fcc64799a166a16181105a0e700e"
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
    "url": "assets/js/13.a736d5fb.js",
    "revision": "fde51a8e6707d3ce3b98016c4c512fa7"
  },
  {
    "url": "assets/js/14.e18a8706.js",
    "revision": "8572baf59e6a51793dff3ffaf3aa275d"
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
    "url": "assets/js/24.76a4d9ec.js",
    "revision": "1974adcdf1694b8d0e4592c7e429da73"
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
    "url": "assets/js/app.79946aff.js",
    "revision": "6db6247a5eaf266a58950b3b2820eda4"
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
    "revision": "40478e5da6924324859089c8f5ae390e"
  },
  {
    "url": "lessons/comment.html",
    "revision": "1a0910ae715adb23c630793dc6e8056f"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "e7b29ea5a628f84a306aa25fd8498513"
  },
  {
    "url": "lessons/functions.html",
    "revision": "acaaab0edb54c5d3566486e37e62dd74"
  },
  {
    "url": "lessons/index.html",
    "revision": "4ed70f4d1e78ae2f5658f08ae5660117"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "6cf1643987e95c4629cd78f251d5ee38"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "1f6dee32144b5e7feec5602239d27b36"
  },
  {
    "url": "lessons/modules.html",
    "revision": "58100d73c704607d7cd8b170e9d27a1b"
  },
  {
    "url": "lessons/operator.html",
    "revision": "744e787f23848034a7f0112266079852"
  },
  {
    "url": "lessons/script.html",
    "revision": "65f5fef165185d0ad2cc312036767e92"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "45a4d4ddc80b29685d90cf76c6637788"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "9c5df1f5c8262408fce32824970ede02"
  },
  {
    "url": "lessons/setup.html",
    "revision": "845eb1a7f1c7e4161901d88f5dd84d03"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "702e6c334ae489d66cd9e26f35a383ea"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "3d3028b4c6d92c9f67aa7b57d7f8b813"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "6e1a37763e05a3219a4371e516149b58"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "aace46c9b95bcc8a6984beca3c760fcb"
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
