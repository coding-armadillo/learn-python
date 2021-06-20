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
    "revision": "e54684b1d0e84e6c4c8d2fe9c945aeb0"
  },
  {
    "url": "assets/css/0.styles.5816bb88.css",
    "revision": "7236a39899b7e4fff8d6e25ad16890b3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.be2d0ec9.js",
    "revision": "1600e5cdb961d76db9c45817517744c7"
  },
  {
    "url": "assets/js/11.722d7567.js",
    "revision": "81b9f84d2c9ed84f28e56e502193e21f"
  },
  {
    "url": "assets/js/12.e5da63ff.js",
    "revision": "5629d5484470b2768fdd593a651785b4"
  },
  {
    "url": "assets/js/13.be2ffd96.js",
    "revision": "a437d616e05c626bbae8f8849a84d5d8"
  },
  {
    "url": "assets/js/14.6abaaae8.js",
    "revision": "818dd8d7f206b611478da6701f810ee0"
  },
  {
    "url": "assets/js/15.23ac3041.js",
    "revision": "0a702daa9178a872bac36627393795ee"
  },
  {
    "url": "assets/js/16.2376b926.js",
    "revision": "79be3f2802d831913626d11409e840d0"
  },
  {
    "url": "assets/js/17.605c0e02.js",
    "revision": "15a7e9a9570c8fd3d177a95d1a6079d5"
  },
  {
    "url": "assets/js/18.4f826139.js",
    "revision": "61793448c7a9a3a3d425a803df1c3e45"
  },
  {
    "url": "assets/js/19.2fbaf4cf.js",
    "revision": "b92515f5c76687abb9f04fea2dfc12a6"
  },
  {
    "url": "assets/js/2.dae5834e.js",
    "revision": "63195b20089e9064ebdb4c411c9a6d25"
  },
  {
    "url": "assets/js/20.794276a5.js",
    "revision": "c26264b52889fcdc2621ca7f1499d579"
  },
  {
    "url": "assets/js/3.76401cf9.js",
    "revision": "240a912cc9ec2702294e3087d30c961d"
  },
  {
    "url": "assets/js/4.f23fa452.js",
    "revision": "3de73e9a411bd84c1eff4c356775a864"
  },
  {
    "url": "assets/js/5.0af50bf2.js",
    "revision": "59805aadb0af02129848af5de71cab6e"
  },
  {
    "url": "assets/js/6.7fb4c753.js",
    "revision": "d9237fb1ba7b5c3b9b74f31b1ed8e762"
  },
  {
    "url": "assets/js/7.69114d76.js",
    "revision": "6f8ab81d0a2470397b8c08045b8e2402"
  },
  {
    "url": "assets/js/8.2bd7f8cc.js",
    "revision": "adc548d7433616ab4d5c09d8e30bceca"
  },
  {
    "url": "assets/js/9.84ffb8c2.js",
    "revision": "15f698d63cf5fab0dbe29a55149f8c68"
  },
  {
    "url": "assets/js/app.8fabff2f.js",
    "revision": "ff660951d96c2ff7b24e0ef96a4b5c8e"
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
    "revision": "4f588fe16a81ab4453da838664860958"
  },
  {
    "url": "lessons/comment.html",
    "revision": "709614b1172a4f0cb6189bc2d6f3301c"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "fb763a80880ba61d90a066f90173274e"
  },
  {
    "url": "lessons/index.html",
    "revision": "bed1a7cdc72b1437223cfd9bd6e3e3f3"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "ed27f5fd19bedf28e9e7b92e4eee37f6"
  },
  {
    "url": "lessons/operator.html",
    "revision": "727a3805fdb97363667898b8f50d3900"
  },
  {
    "url": "lessons/script.html",
    "revision": "be914d33f12eb654544e5808c908cdb3"
  },
  {
    "url": "lessons/setup.html",
    "revision": "9705884a3416bbcd435bf154f6968454"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "ff50ad34df425c79a91d4b523b780a73"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "a8a3c672cf58bd312e50ed398ca894b4"
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
