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
    "revision": "a7072c7f6ad11ef13d94bb72c0ffe8f8"
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
    "url": "assets/js/10.dc84764d.js",
    "revision": "1600e5cdb961d76db9c45817517744c7"
  },
  {
    "url": "assets/js/11.9575d135.js",
    "revision": "96ba62b60b926b72ba833e578d840eaf"
  },
  {
    "url": "assets/js/12.eefa325f.js",
    "revision": "ff77a45c23ef37c394d1716f3f26da84"
  },
  {
    "url": "assets/js/13.e67070d5.js",
    "revision": "49cdb1eff1b0bd7ece4d3215a0f17554"
  },
  {
    "url": "assets/js/14.7ec992cf.js",
    "revision": "0ca613299cfe1dc496f3cd147ef67bd5"
  },
  {
    "url": "assets/js/15.3408779a.js",
    "revision": "c82f8265386af8e905da134f6b4aeee9"
  },
  {
    "url": "assets/js/16.e75b9099.js",
    "revision": "9982f2941abbf4e806232ab6e9b08602"
  },
  {
    "url": "assets/js/17.c36b0326.js",
    "revision": "15a7e9a9570c8fd3d177a95d1a6079d5"
  },
  {
    "url": "assets/js/18.1446aef9.js",
    "revision": "bde8cdb462e80cffd3e68348cdb900e1"
  },
  {
    "url": "assets/js/19.2101b9df.js",
    "revision": "b92515f5c76687abb9f04fea2dfc12a6"
  },
  {
    "url": "assets/js/2.418a2e0a.js",
    "revision": "63195b20089e9064ebdb4c411c9a6d25"
  },
  {
    "url": "assets/js/20.794276a5.js",
    "revision": "c26264b52889fcdc2621ca7f1499d579"
  },
  {
    "url": "assets/js/3.a40d6746.js",
    "revision": "240a912cc9ec2702294e3087d30c961d"
  },
  {
    "url": "assets/js/4.3c6b077e.js",
    "revision": "3de73e9a411bd84c1eff4c356775a864"
  },
  {
    "url": "assets/js/5.0af50bf2.js",
    "revision": "59805aadb0af02129848af5de71cab6e"
  },
  {
    "url": "assets/js/6.a294fd99.js",
    "revision": "d9237fb1ba7b5c3b9b74f31b1ed8e762"
  },
  {
    "url": "assets/js/7.38e45b8c.js",
    "revision": "6f8ab81d0a2470397b8c08045b8e2402"
  },
  {
    "url": "assets/js/8.d5809f30.js",
    "revision": "adc548d7433616ab4d5c09d8e30bceca"
  },
  {
    "url": "assets/js/9.8a867b67.js",
    "revision": "15f698d63cf5fab0dbe29a55149f8c68"
  },
  {
    "url": "assets/js/app.27e4962b.js",
    "revision": "99d0790afe073f88de70917c9c306787"
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
    "revision": "1baca690c72e9afc12235f9825027718"
  },
  {
    "url": "lessons/comment.html",
    "revision": "ffda7e049f15f802b6eb9f03149cd656"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "5ac89faead1580b3f149928f4fa27221"
  },
  {
    "url": "lessons/index.html",
    "revision": "56c036f910cf38107ed97b948ff4f6c3"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "6bbc98a9a243bd65e51d79bb0d7dda21"
  },
  {
    "url": "lessons/operator.html",
    "revision": "72ad91fcd70bd65db6d7e64d9b5bd820"
  },
  {
    "url": "lessons/script.html",
    "revision": "b73fef61a3fe372b4115b502848603cb"
  },
  {
    "url": "lessons/setup.html",
    "revision": "2ea4c5d89e890aa5dd621fed85b4ce16"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "7c09825c065d04f99dc8fd054da94366"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "f5965071de337ebd4dca2f900f471e43"
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
