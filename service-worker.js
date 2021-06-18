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
    "revision": "3814df33164cd65c593031532aea3cf5"
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
    "url": "assets/js/10.f962fa8d.js",
    "revision": "944960211ab42950b3561cf1dac8f0f2"
  },
  {
    "url": "assets/js/11.33786737.js",
    "revision": "67b1c98565476d026c7a794ca3357c10"
  },
  {
    "url": "assets/js/12.f64bee8a.js",
    "revision": "8a9f3b1e021de5c9c510891d3eacc246"
  },
  {
    "url": "assets/js/13.78321cb5.js",
    "revision": "e19ee12afa4ab075d66063341f531599"
  },
  {
    "url": "assets/js/14.29bed4ab.js",
    "revision": "c196272d50972c0baeecb3263a19dc09"
  },
  {
    "url": "assets/js/15.8d8e4b39.js",
    "revision": "654aa89f6275fbfc593c2065841b3ec3"
  },
  {
    "url": "assets/js/16.803d00b3.js",
    "revision": "941a57d4a60074e7216bcc859787dba5"
  },
  {
    "url": "assets/js/17.ba6c1944.js",
    "revision": "cda74018405f64b43ad7ab9de7633558"
  },
  {
    "url": "assets/js/18.cc46d053.js",
    "revision": "7ca328e9b11d96ce517e4da04055ca4f"
  },
  {
    "url": "assets/js/19.78559556.js",
    "revision": "deb1228f37e6c7d287e1bc9f93538494"
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
    "url": "assets/js/app.1903447c.js",
    "revision": "e5c56a82ea63845309dde168d3e03915"
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
    "revision": "379ff2b9f18a55b8c5ccc91388b02258"
  },
  {
    "url": "lessons/comment.html",
    "revision": "719706b3d2c8bd7145a9317e15a45cd2"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "cf5a81ab9ba9c3050bacbe7b50b4ea7d"
  },
  {
    "url": "lessons/index.html",
    "revision": "582173a351aa3dbf7b5c4e590012f36c"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "631c4fb02614094bbf16766e05d7a75a"
  },
  {
    "url": "lessons/operator.html",
    "revision": "25b8c6457ccf421475014d382067040f"
  },
  {
    "url": "lessons/script.html",
    "revision": "1fe8e52f46a89e0ceb31f8ecb6b6f267"
  },
  {
    "url": "lessons/setup.html",
    "revision": "4230ee6b05cb0e56744a0fc9369fa848"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "f9da9b5d4176c8d3135f0f50b0aa3eee"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "fd10891fe6104ba00ac89f2f924f0116"
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
