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
    "revision": "75719a6ba9ac6b47bd827cc6d481bae2"
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
    "url": "assets/js/12.e5da63ff.js",
    "revision": "5629d5484470b2768fdd593a651785b4"
  },
  {
    "url": "assets/js/13.d11d878a.js",
    "revision": "f1b499b7d19d1cd6dd2a301e9f40a31c"
  },
  {
    "url": "assets/js/14.6abaaae8.js",
    "revision": "818dd8d7f206b611478da6701f810ee0"
  },
  {
    "url": "assets/js/15.075951c7.js",
    "revision": "5b9403fcdaf4e739fda8b980950466d8"
  },
  {
    "url": "assets/js/16.2376b926.js",
    "revision": "79be3f2802d831913626d11409e840d0"
  },
  {
    "url": "assets/js/17.c618a924.js",
    "revision": "e52659037c870e70d6fc7f03abe0af7e"
  },
  {
    "url": "assets/js/18.fab2e58d.js",
    "revision": "a1bbdf1dc9dd6818f400d5ed7408c98f"
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
    "url": "assets/js/app.9cf46cda.js",
    "revision": "ec5b23d493da05040baddf8000557ad9"
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
    "revision": "7a825b952eda663732e8a5fa9dca363d"
  },
  {
    "url": "lessons/comment.html",
    "revision": "ee21f7fb350466ebcf07245f895d78ec"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "94e36dc4b70877a31734ab3000decf16"
  },
  {
    "url": "lessons/index.html",
    "revision": "e35e2b1f7d3e9f5e81e3eff437ff4abd"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "58199486c3fcc3bb4492af1b692a33b1"
  },
  {
    "url": "lessons/operator.html",
    "revision": "6e7a4bbd3e3f18004536a84e90760563"
  },
  {
    "url": "lessons/script.html",
    "revision": "98ebb4ef2661cac7e1968844e9a220ab"
  },
  {
    "url": "lessons/setup.html",
    "revision": "6abdb18409b899c6f33f500b715c2607"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "a2e4dd5d0ff8aa94541db6383512d646"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "bf4bac92e76bd2af56163fcf00576f2b"
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
