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
    "revision": "99d4425324f9987c71cc9cbe74b8b73e"
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
    "url": "assets/js/12.0ad76ce6.js",
    "revision": "2a10724df389064059b450792a277fbc"
  },
  {
    "url": "assets/js/13.a56c01e1.js",
    "revision": "a74a76c46530c5e70bf9a1fd3971fda5"
  },
  {
    "url": "assets/js/14.605dcdc3.js",
    "revision": "2d57487025c707e6031e237a1e99f0c2"
  },
  {
    "url": "assets/js/15.cba51c1a.js",
    "revision": "c42755de2e8a97cfd45dbe815a434b86"
  },
  {
    "url": "assets/js/16.f8a9698c.js",
    "revision": "d01c7f828de838e0289f5b64e0e23c38"
  },
  {
    "url": "assets/js/17.117fcbe6.js",
    "revision": "c644e17b3d93b90551c4dfb3ce51d12e"
  },
  {
    "url": "assets/js/18.134483ea.js",
    "revision": "ba5692639644ee289885ef066092e3c0"
  },
  {
    "url": "assets/js/19.4c685a7b.js",
    "revision": "23a014c89191dee9895496a88b957586"
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
    "url": "assets/js/23.d7997181.js",
    "revision": "bdce31a8443847b828ac90756f87ec59"
  },
  {
    "url": "assets/js/24.1fdb4ed0.js",
    "revision": "6aa3c13a5031229f27bbf8e60b6d39c9"
  },
  {
    "url": "assets/js/25.1b568a54.js",
    "revision": "0310840a5bcd33bc82318091ccc64a7d"
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
    "url": "assets/js/app.1a6843e3.js",
    "revision": "4251f50e3c262b86d798887d435be063"
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
    "revision": "8395e2b2ab3b0a2515a4753b3e8e2737"
  },
  {
    "url": "lessons/comment.html",
    "revision": "5ad08118f035f6b5ec157b92e9f4ee77"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "e7860a578bbe37cecf5891ed8b3659e2"
  },
  {
    "url": "lessons/functions.html",
    "revision": "45e01dde951226bad5e7326a67a65141"
  },
  {
    "url": "lessons/index.html",
    "revision": "af5f319a95de06da551990426dea20e2"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "cbfc86493bfe1d625755c1f3e3084bbe"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "75c6e4085e920be822035e03d8c038fc"
  },
  {
    "url": "lessons/modules.html",
    "revision": "1cf1b90eb46d5b142ea488d5174dd644"
  },
  {
    "url": "lessons/operator.html",
    "revision": "1d77c314c487ea42d0607d5e09ab143d"
  },
  {
    "url": "lessons/script.html",
    "revision": "b298ff9f18af9d255a277f0c15fd08b1"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "01536eca5160e6a817fa17b472940439"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "e0755bfc7c8b6abf07f1a43d94519cab"
  },
  {
    "url": "lessons/setup.html",
    "revision": "4548f71f8230bfa47750d9ccd1ecc47c"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "652f0a8499148138cddddefbe9a66eb4"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "f0ff2279a548a333ba8d7aa5b0ac730d"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "ab0498ac33ea86fcc95760b01bc18b37"
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
