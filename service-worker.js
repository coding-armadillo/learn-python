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
    "revision": "7c33008582c827825a6d438324c45e8b"
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
    "url": "assets/js/11.21e6d02e.js",
    "revision": "81b9f84d2c9ed84f28e56e502193e21f"
  },
  {
    "url": "assets/js/12.b174425c.js",
    "revision": "48762a29aafae1e51a808b287aa3e011"
  },
  {
    "url": "assets/js/13.5783fd92.js",
    "revision": "26d02120f38486f9c628a9ba93078612"
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
    "url": "assets/js/app.8061677e.js",
    "revision": "7fd20f85951c6ea4e89cddefebaf3b38"
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
    "revision": "2ea3325135f3aad88ed6efa5f15ffa7c"
  },
  {
    "url": "lessons/comment.html",
    "revision": "a7ddd9e230a2abe954a5e01df725be69"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "430528f73f3157f7e5a34fd4a622394a"
  },
  {
    "url": "lessons/index.html",
    "revision": "0330353602b63739b388c611f4faefd1"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "62159502abb1605b868360999f6e5654"
  },
  {
    "url": "lessons/operator.html",
    "revision": "f8eacac54bf30812ba51a0510d7ce484"
  },
  {
    "url": "lessons/script.html",
    "revision": "9e99647ff28b9636f0130e64f79eda6b"
  },
  {
    "url": "lessons/setup.html",
    "revision": "32c05956fd9f2d7f320a567f1149d134"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "b387e67c917631bde949210ab0d1ad9d"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "8777c115f24a5dd9c5ab5abfc5362f42"
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
