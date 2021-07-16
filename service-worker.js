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
    "revision": "0251700c0a4dcca717fd74ca78194889"
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
    "url": "assets/js/16.8cddc41f.js",
    "revision": "376934f8c22159c010aac048e6fc98b0"
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
    "url": "assets/js/20.6f08425c.js",
    "revision": "0d3e695c36b2edaa37db9056ee7d2428"
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
    "url": "assets/js/app.fc4c158f.js",
    "revision": "8eb7f0427990ca4f6b7a90fac055ee33"
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
    "revision": "a497e18e122669a002abb7be2377ceb5"
  },
  {
    "url": "lessons/comment.html",
    "revision": "93676f383fb9080d8f7f944f5366464f"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "a0464a2eae22aad49223ace3ea9283e3"
  },
  {
    "url": "lessons/functions.html",
    "revision": "8bd9dab79f64a1c55fb91b9edf2c4ace"
  },
  {
    "url": "lessons/index.html",
    "revision": "63442a75225e888bf3c01982d74decd0"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "edc7aea72fa0da073e563a88fdccffe2"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "e8ddb139d1512de52b348a02a5e740cf"
  },
  {
    "url": "lessons/modules.html",
    "revision": "9154aa410240a930d60210a5917e2519"
  },
  {
    "url": "lessons/operator.html",
    "revision": "d01d40f0d2c5c4d646b6ee74a0b98cae"
  },
  {
    "url": "lessons/script.html",
    "revision": "6c41a5dd10aa5fdecbcc9e0bac7e0c85"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "9fa2437c035a037c3d73944ed181096a"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "2e7fa6e88865fd89fa9e14e01c74d91e"
  },
  {
    "url": "lessons/setup.html",
    "revision": "4024fd594b409a46c9ee46c20342fb00"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "36aa5bbf52fadae8420c0a797151d762"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "0e687c90760778ab01095e0055e00e95"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "8c4d7404b6584f20be17aaa9a0c27299"
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
