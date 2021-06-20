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
    "revision": "c49142fdcc4428da504e26104d8d67cc"
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
    "url": "assets/js/12.c83e5e4e.js",
    "revision": "2e720bc7e7f5d8296dc8d017c323f31c"
  },
  {
    "url": "assets/js/13.0b03a9e1.js",
    "revision": "dd4e0f48221f94bf608a1b7c2c5bbd03"
  },
  {
    "url": "assets/js/14.6abaaae8.js",
    "revision": "818dd8d7f206b611478da6701f810ee0"
  },
  {
    "url": "assets/js/15.4782d0b8.js",
    "revision": "88d34bfdbf37cfa63f56f171c9762d95"
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
    "url": "assets/js/app.e38b8ed0.js",
    "revision": "2de3d5403965f193ed211f34ef06be0f"
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
    "revision": "69101aa4d4969985ea1c65690ae387d6"
  },
  {
    "url": "lessons/comment.html",
    "revision": "e877a8e3326455a0ecbebd8e62cae9f6"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "c8c2dfa47b7f7dcc3654ad889ab8033b"
  },
  {
    "url": "lessons/index.html",
    "revision": "6808114c6f02406c4f7a0966a51fd178"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "e9a12956225f9b32e4e19df567d09517"
  },
  {
    "url": "lessons/operator.html",
    "revision": "851f22268de6b38d22c196fa0c7d5792"
  },
  {
    "url": "lessons/script.html",
    "revision": "1a5d37c6692863f94dc0073fd25e9ecf"
  },
  {
    "url": "lessons/setup.html",
    "revision": "60f39ef5f46972155c498207fe4053ce"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "0f90db81e8f0b71c43421115eb3cde89"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "ccf003955babc3f16830b127b7f443e6"
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
