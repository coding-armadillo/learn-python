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
    "revision": "31e256520005a38035e710190f1991f4"
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
    "url": "assets/js/17.adeb1a3a.js",
    "revision": "cd708e6c587965f5997696742b89b6be"
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
    "url": "assets/js/app.d244adfb.js",
    "revision": "b506e9137b3ffc3631d9a92d2695d802"
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
    "revision": "aba18966bf04a0da6fe9c9011fc66710"
  },
  {
    "url": "lessons/comment.html",
    "revision": "7a18acd1912c66a37b797855faf55dcd"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "93f6ee64df009bffad9dae99d94fbfc1"
  },
  {
    "url": "lessons/functions.html",
    "revision": "2212b64b9087d9cc9a7ef9fd470d47ee"
  },
  {
    "url": "lessons/index.html",
    "revision": "c9c22ed2370e0b1fa15ea7de9f27bc92"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "038b704f94e47ef3bbf57d47db7047a7"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "52ed9c2c003c9b8849401fe2a2f30366"
  },
  {
    "url": "lessons/modules.html",
    "revision": "d4a8c8ed2bd37bf2b6892e4dd077079d"
  },
  {
    "url": "lessons/operator.html",
    "revision": "e7924aea4926879037f1a07075c4737c"
  },
  {
    "url": "lessons/script.html",
    "revision": "1ee46a5f40ace49518d026b09739ea7c"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "4b5f5b71c4650854e7054153ec243f97"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "beb697a732236619d675e57d803db56b"
  },
  {
    "url": "lessons/setup.html",
    "revision": "405d42a90bf9ef82ad1c8614a21ed6d6"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "3cbdd53cef9f26d2212b87bc0cef6e24"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "1f757ae6d91f162bdf933d0260242887"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "ae2a163eff52e44f5f79861944084750"
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
