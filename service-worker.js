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
    "revision": "0cbdcab83e1df970b19975b2b1f0158e"
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
    "url": "assets/js/14.22e3768b.js",
    "revision": "fe05d22707b7ea6964f71b64dd8dfdae"
  },
  {
    "url": "assets/js/15.1b1662d0.js",
    "revision": "2eba70d6e802d263c4ce742d5b128ae9"
  },
  {
    "url": "assets/js/16.d6173560.js",
    "revision": "c31c27e95a69f6ac75d0cf8981af080a"
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
    "url": "assets/js/20.26460482.js",
    "revision": "7587929c92625ce0e05b678bfd32d32b"
  },
  {
    "url": "assets/js/21.71eb0d40.js",
    "revision": "7fc8e8261f57d18c7ac2dac35d6a2a0c"
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
    "url": "assets/js/app.39776c4b.js",
    "revision": "89c8b9534316bfb158b560bba3cfaa5d"
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
    "revision": "0f839d9bbd9b349619ca7e86130e4bfe"
  },
  {
    "url": "lessons/comment.html",
    "revision": "1b73cf286516d39c9d90ed8ee351337a"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "9b26af5ac66f37f5eb6a15a8f89d02f3"
  },
  {
    "url": "lessons/functions.html",
    "revision": "a4b09529bf34addc7b8d910e59b67801"
  },
  {
    "url": "lessons/index.html",
    "revision": "f5bc55904711214d87338789a24073b3"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "12ea1f379fd18657452507c85eda628f"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "23f130e0eeecc7cba4ca53927a5e56f7"
  },
  {
    "url": "lessons/modules.html",
    "revision": "92756fb1a25884e41586942eb8743e85"
  },
  {
    "url": "lessons/operator.html",
    "revision": "5d5cc286658199acb20001aa953d4c86"
  },
  {
    "url": "lessons/script.html",
    "revision": "0e07605fe7f14688bc728e5f287b2cc1"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "2cf18638244175b9c5d009c0edaa3b27"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "7775b3540aac68289d698ee33de5e46b"
  },
  {
    "url": "lessons/setup.html",
    "revision": "ff77890c89528c27fa88954ed4740c62"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "0920684fefd31c16b01b53c1dbbe0df7"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "bc798cda3bac576ff4ece711a3064b56"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "0235f5748394611b4b6d177f8a392ad1"
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
