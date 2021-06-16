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
    "revision": "420337dd615a8e732fa54ee1657debb0"
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
    "url": "assets/js/app.6fa69b6b.js",
    "revision": "9ee577bf6c876d12290ea1f10a0dd673"
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
    "revision": "38f0347851719458498360491feba7f9"
  },
  {
    "url": "lessons/comment.html",
    "revision": "ce0e94aafc2d286c2d8577bbde6a2709"
  },
  {
    "url": "lessons/index.html",
    "revision": "2575eb326851eb5765f9019dbfad1a87"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "79dd2391990645e99d224d19133d74d3"
  },
  {
    "url": "lessons/operator.html",
    "revision": "5254aea4fd5087fa6f35502028b6cd82"
  },
  {
    "url": "lessons/script.html",
    "revision": "41d2585e9d4e53560acd58495e82fc11"
  },
  {
    "url": "lessons/setup.html",
    "revision": "3f3a6bfa2da8252b7f4b9c402baead88"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "66ce40f0a3ce5611ee033fa1b4daeb84"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "4970f66b81c85270acd3624a385a1b54"
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
