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
    "revision": "906a1d7b3c639311b30ae9a5a2a3e410"
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
    "url": "assets/js/12.c4eac97a.js",
    "revision": "7ec2efafa9b0fe89492bbb757d55bd1c"
  },
  {
    "url": "assets/js/13.4865dfb2.js",
    "revision": "d03248d8c9769e0e94aacd6961d9e0a5"
  },
  {
    "url": "assets/js/14.1d110d6b.js",
    "revision": "59475a6124821ec236e87bdf711b2a09"
  },
  {
    "url": "assets/js/15.08073076.js",
    "revision": "991078aa95e16957ceb45c976d1edabb"
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
    "url": "assets/js/app.088a2b7c.js",
    "revision": "c1e5e9910bf84d36f16d555505fe1267"
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
    "revision": "3122040301d036c950a1c6afb07f5c72"
  },
  {
    "url": "lessons/comment.html",
    "revision": "7452e5ee8e2b18a7ce3028cdd8ace101"
  },
  {
    "url": "lessons/index.html",
    "revision": "1ecd0b9f1667cb7ed238c930af611b9c"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "5459006e29c439a0668f435df7d54c5e"
  },
  {
    "url": "lessons/operator.html",
    "revision": "5041e16427750b145966846a83174891"
  },
  {
    "url": "lessons/script.html",
    "revision": "da41ca72a09da7bfd2b3bd57596e88db"
  },
  {
    "url": "lessons/setup.html",
    "revision": "5cf740a8fbce773e63ed682ad395357d"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "d872f34abc90c29950ed8d116f977b56"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "42a21a5a03a8250ebe5d2572edccb1e4"
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
