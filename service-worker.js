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
    "revision": "c9f922471945fbe12169e6c008ee959e"
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
    "url": "assets/js/11.34c45fee.js",
    "revision": "975306a2a02c3ad85ceb7f88d6a4e0d4"
  },
  {
    "url": "assets/js/12.e5da63ff.js",
    "revision": "5629d5484470b2768fdd593a651785b4"
  },
  {
    "url": "assets/js/13.1773c2e3.js",
    "revision": "c3eead5e44a937f621ca238ceb949f7e"
  },
  {
    "url": "assets/js/14.018a97dc.js",
    "revision": "631a1ea6e7ed01aec1efec00ce5e1666"
  },
  {
    "url": "assets/js/15.1b1662d0.js",
    "revision": "2eba70d6e802d263c4ce742d5b128ae9"
  },
  {
    "url": "assets/js/16.60b28d9b.js",
    "revision": "a7dd9855f8c60fd5c02017c17a257bb0"
  },
  {
    "url": "assets/js/17.310bd69d.js",
    "revision": "21e3ee59769403a1927daf4286a274a9"
  },
  {
    "url": "assets/js/18.11447b2c.js",
    "revision": "4e86a9f643e97174faa8eb2bcf0e3c75"
  },
  {
    "url": "assets/js/19.a9016fcf.js",
    "revision": "60453595604f0a4dc42bf3dc9080e496"
  },
  {
    "url": "assets/js/2.dae5834e.js",
    "revision": "63195b20089e9064ebdb4c411c9a6d25"
  },
  {
    "url": "assets/js/20.a27d751f.js",
    "revision": "ed74767d6f275173d23213234850df48"
  },
  {
    "url": "assets/js/21.93bef832.js",
    "revision": "0b41fd67f543d51bf1663cd5fc8ff472"
  },
  {
    "url": "assets/js/22.986a72c3.js",
    "revision": "1b647aaa5d937be427330349194f13a9"
  },
  {
    "url": "assets/js/23.103c6b54.js",
    "revision": "c84dce764a242c4a99559db4ff3c37a7"
  },
  {
    "url": "assets/js/24.9bfba4de.js",
    "revision": "e0549fd59684c748030b2abf76055caf"
  },
  {
    "url": "assets/js/25.8a83af7f.js",
    "revision": "abb46aa34a38132fbe627a1b58889e0d"
  },
  {
    "url": "assets/js/26.f460fcd8.js",
    "revision": "045ffd54b2a3246b246af6f53a91acd6"
  },
  {
    "url": "assets/js/3.1bb2d4cd.js",
    "revision": "4fcafce95cfe426e11111dfcd687fdb3"
  },
  {
    "url": "assets/js/4.f23fa452.js",
    "revision": "3de73e9a411bd84c1eff4c356775a864"
  },
  {
    "url": "assets/js/5.98130bab.js",
    "revision": "353ad2d15b2b5d503ff033baea2a1e3d"
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
    "url": "assets/js/app.072b4478.js",
    "revision": "660881ce0c2a6d9c6a663cdf2795ade3"
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
    "revision": "116faaa9d5e78c4f997fd32e49a75c73"
  },
  {
    "url": "lessons/comment.html",
    "revision": "75f1c5ef5d26b3de4ed4d25c9ac48219"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "fecb6d9463eb9d05decfa0d6686d39e6"
  },
  {
    "url": "lessons/functions.html",
    "revision": "90d3d078e9c17f91a20a8af140bc18e4"
  },
  {
    "url": "lessons/index.html",
    "revision": "8b1a60d69fef1becd5d23b8911218e67"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "51f10a2f4b96b169c7ffced7a783b0f2"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "1b9df5fcdbed4b90e01ffdc3f294b382"
  },
  {
    "url": "lessons/modules.html",
    "revision": "1ab56a2f95060a810afafb646b5f5bc0"
  },
  {
    "url": "lessons/operator.html",
    "revision": "add8421e34ae9b7022e8d5e6b39b16ee"
  },
  {
    "url": "lessons/script.html",
    "revision": "fac4cada07252bae41df16467d9cae51"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "eb9f6521684b7ee790fb0a090fbd83d5"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "165459bd4a1ab33d8944d6f0238cb42f"
  },
  {
    "url": "lessons/setup.html",
    "revision": "e9879d3d5736ae015759e7a3a25eb415"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "32939a271089806ec1c19d97e4352968"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "3190524a834072a05b3369375443a8b3"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "132a21fb476326a149866aa15a14991f"
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
