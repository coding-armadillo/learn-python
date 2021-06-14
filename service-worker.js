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
    "revision": "906967dcd3bd225e3d0ab824ddedfb1f"
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
    "url": "assets/js/11.a862bd83.js",
    "revision": "eda165458678d5e505adaffb9a396112"
  },
  {
    "url": "assets/js/12.b174425c.js",
    "revision": "48762a29aafae1e51a808b287aa3e011"
  },
  {
    "url": "assets/js/13.4865dfb2.js",
    "revision": "d03248d8c9769e0e94aacd6961d9e0a5"
  },
  {
    "url": "assets/js/14.46ce0583.js",
    "revision": "1401157c06d99587e224f9ca40b1bb26"
  },
  {
    "url": "assets/js/15.7aeb0ee6.js",
    "revision": "fe69162e2285c7e52d49ce92caf5a105"
  },
  {
    "url": "assets/js/16.9a2918e9.js",
    "revision": "17b924eee3df52dcea3eb7dee2516481"
  },
  {
    "url": "assets/js/17.79f14390.js",
    "revision": "a1ace1ef0662185f7229c7e716ae85c8"
  },
  {
    "url": "assets/js/18.241ba867.js",
    "revision": "9c203503d9fa5636383aa2dd87fc1daf"
  },
  {
    "url": "assets/js/19.aa8d41a9.js",
    "revision": "8c6e0c91f8ee2ca1045bc4dd40ac1739"
  },
  {
    "url": "assets/js/2.418a2e0a.js",
    "revision": "63195b20089e9064ebdb4c411c9a6d25"
  },
  {
    "url": "assets/js/3.25ab8d1f.js",
    "revision": "619e55d8f477ed02149c37c392e6f835"
  },
  {
    "url": "assets/js/4.3c6b077e.js",
    "revision": "3de73e9a411bd84c1eff4c356775a864"
  },
  {
    "url": "assets/js/5.c7c6bd47.js",
    "revision": "70b6b340374dd724ac960123d107afda"
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
    "url": "assets/js/app.587d2a25.js",
    "revision": "645515bd77c557ab632475ad1dadcfed"
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
    "revision": "426ffa7ae7532d3ed64ff3b3f57f9d34"
  },
  {
    "url": "lessons/comment.html",
    "revision": "46b2359ddad69430218ff4f733141caf"
  },
  {
    "url": "lessons/index.html",
    "revision": "89ec2e3431966370255954dc2423259f"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "46da0d9e5b2954eeb4ed5bcc2aa980c1"
  },
  {
    "url": "lessons/operator.html",
    "revision": "7c85dce1d15656396f788660dc110fdd"
  },
  {
    "url": "lessons/script.html",
    "revision": "6fea8e4363329f2c690b46c322c3795c"
  },
  {
    "url": "lessons/setup.html",
    "revision": "569e685b12b6f920f1634b29e3fa22a6"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "d11c8ecc636d69fc3ccdbb0109a13dfa"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "9324975abef1fb496d69e54523723267"
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
