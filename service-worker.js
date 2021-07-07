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
    "revision": "21d9f701a7859ee960b25c5fbd5a9197"
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
    "url": "assets/js/20.1e96b42d.js",
    "revision": "d786f09b074d35418b818c169f102ebb"
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
    "url": "assets/js/app.9e093d61.js",
    "revision": "8d7b4fb4ac9c3590c23bbd96c040daa9"
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
    "revision": "c8a69a6ef946ef2a6a777f0a7ffa0e7d"
  },
  {
    "url": "lessons/comment.html",
    "revision": "a9d131c6cce527d348cf19d13b553c32"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "52c6b927cc21697c0b279a3db10250e4"
  },
  {
    "url": "lessons/functions.html",
    "revision": "6de3b6a7779d4a45055c7255352acaa6"
  },
  {
    "url": "lessons/index.html",
    "revision": "457fee9611869a632c777ba4e71cb8aa"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "f4636d972ca75caef3e1b6a4f35a99c1"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "f9f9be1e62d2858f7556ad30b3c5cfd0"
  },
  {
    "url": "lessons/modules.html",
    "revision": "db22ddb9102808f4c13f57f0fbcbd458"
  },
  {
    "url": "lessons/operator.html",
    "revision": "e08c090da86b92fdb4b2996d523ed8d3"
  },
  {
    "url": "lessons/script.html",
    "revision": "b0bec2c77f733c3ed4257bd5f4dd84cb"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "3577eed616ab389ac03f799bbab70de6"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "52d9c660866fb7b2ea44e13c8bdd9540"
  },
  {
    "url": "lessons/setup.html",
    "revision": "b22b4d797735277f0c787dfafa2db71c"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "716718bb2a4037a590d137e3534d7992"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "217ebbbd2243c512210544bb863698fb"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "5a56cdee9e9850d1ccfe4ea2ea3c34fc"
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
