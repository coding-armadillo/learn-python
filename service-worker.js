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
    "revision": "f562c066b1bc309ce2a423a765f99401"
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
    "url": "assets/js/15.100448ce.js",
    "revision": "1c78507d301e02a273cc5b8ef48fb5fd"
  },
  {
    "url": "assets/js/16.8d7d80af.js",
    "revision": "41dcc819ee646ef5d1abf71e31cd5b81"
  },
  {
    "url": "assets/js/17.fc1dd396.js",
    "revision": "2ca699a66168a7363f4c7fd3eac7f59b"
  },
  {
    "url": "assets/js/18.134483ea.js",
    "revision": "ba5692639644ee289885ef066092e3c0"
  },
  {
    "url": "assets/js/19.798b3431.js",
    "revision": "f1ccee24a76893628ad8afe563c0460e"
  },
  {
    "url": "assets/js/2.dae5834e.js",
    "revision": "63195b20089e9064ebdb4c411c9a6d25"
  },
  {
    "url": "assets/js/20.938d6d3f.js",
    "revision": "5f207c040643eeab92ecb32b019ad132"
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
    "url": "assets/js/app.ca419558.js",
    "revision": "0c7a4038543f1aa63bcf1ae6f887a616"
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
    "revision": "2134b8372cf117b9cd8f95f2f72cb8df"
  },
  {
    "url": "lessons/comment.html",
    "revision": "157d7a4f56b7e358663441f86230da6d"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "d18373f4f1db2adde65d601a21fa0088"
  },
  {
    "url": "lessons/functions.html",
    "revision": "dd8742ba864c1594564645c327fbb9fb"
  },
  {
    "url": "lessons/index.html",
    "revision": "ac8b0ca9eb44c78c072d9b637e44c1b7"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "d3161825fe795a97b770a4899bab16b7"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "3fe37f67379ec13cb159d064c34e6f8b"
  },
  {
    "url": "lessons/modules.html",
    "revision": "2745ffd5e9f569631258ab660737ab48"
  },
  {
    "url": "lessons/operator.html",
    "revision": "762a95f259a5e946629c86de48dc8363"
  },
  {
    "url": "lessons/script.html",
    "revision": "5abf25de5d6d55b4b47320738f61e054"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "a7db2df748a139b261ed3e274711b883"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "e08694e0ac579e404aeb71ec01914439"
  },
  {
    "url": "lessons/setup.html",
    "revision": "cd32cc5ab8f0a0c9feada834a57d3ac5"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "7dbba0763d59a4650997f691dc337871"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "59cbc8dfae277e7bc903786b0c5fe744"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "13cfe102ce3cc7ffcb3fe0e04d7f865b"
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
