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
    "revision": "9aec41c1a9e7a324d0319337e227f1d9"
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
    "url": "assets/js/12.1ac86f98.js",
    "revision": "50c7d44d8be7ee97fc94304d30aa7291"
  },
  {
    "url": "assets/js/13.de2495db.js",
    "revision": "9da36112a6a76ca94f8eab47e88bf1c1"
  },
  {
    "url": "assets/js/14.80116864.js",
    "revision": "657b08eff75d32524fb5d3aed6461b94"
  },
  {
    "url": "assets/js/15.233a02f9.js",
    "revision": "d581bbd55adbbe5a3c588fdd6c587827"
  },
  {
    "url": "assets/js/16.8d7d80af.js",
    "revision": "41dcc819ee646ef5d1abf71e31cd5b81"
  },
  {
    "url": "assets/js/17.117fcbe6.js",
    "revision": "c644e17b3d93b90551c4dfb3ce51d12e"
  },
  {
    "url": "assets/js/18.134483ea.js",
    "revision": "ba5692639644ee289885ef066092e3c0"
  },
  {
    "url": "assets/js/19.4c685a7b.js",
    "revision": "23a014c89191dee9895496a88b957586"
  },
  {
    "url": "assets/js/2.dae5834e.js",
    "revision": "63195b20089e9064ebdb4c411c9a6d25"
  },
  {
    "url": "assets/js/20.16723fd8.js",
    "revision": "994ef468ebaf9e29eda2966f437128a1"
  },
  {
    "url": "assets/js/21.49191263.js",
    "revision": "349f53341b0d61465f683cd4feff4eac"
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
    "url": "assets/js/app.f763825a.js",
    "revision": "9c40c999f48da1066ba74ea72e4bf0aa"
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
    "revision": "7be087d1d30b1ab4f8e2cbab5d906510"
  },
  {
    "url": "lessons/comment.html",
    "revision": "269e39fdade8d4920fe48d27e8ba1d16"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "ef0bfbe6a3dd55fffe9af2cf27b2dd48"
  },
  {
    "url": "lessons/functions.html",
    "revision": "365325c0f7003f03870751e0107137af"
  },
  {
    "url": "lessons/index.html",
    "revision": "234939f5fd6b908ba4d7ef049048d58a"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "5ca5840b15d07bd394f87af0f6bda83b"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "f9329899b6d16ad283e605feb3330e5e"
  },
  {
    "url": "lessons/modules.html",
    "revision": "92e77741e20022e0d030adddd1f98443"
  },
  {
    "url": "lessons/operator.html",
    "revision": "22783fcc73ce3498a855945128bfcd6d"
  },
  {
    "url": "lessons/script.html",
    "revision": "fc9ea648931fc7d1bd7550f85461e7f0"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "835dfedfacd4201f93c0d7fe8fd0ef30"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "035db94a66975a48841380dea374d3a1"
  },
  {
    "url": "lessons/setup.html",
    "revision": "8fe6f9dedb2856253fe1f876104e6e7e"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "897f31967debe445b79e333362150337"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "89a70f90d4fdcb0107ede6fd79afdf6c"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "6ff057eb5777925c409bb84b7cba14cd"
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
