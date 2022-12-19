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
    "revision": "92ec1324e23f943f5911aabf1d14edad"
  },
  {
    "url": "assets/css/0.styles.8574e7f2.css",
    "revision": "37d4a372e14d280367d1795630734ea3"
  },
  {
    "url": "assets/img/centralized-vcs.fc277603.png",
    "revision": "fc2776036da25e7a2af7f41f0aa6460f"
  },
  {
    "url": "assets/img/distributed-vcs.82572b90.png",
    "revision": "82572b90e32fac3ef8736c00dd8b3348"
  },
  {
    "url": "assets/img/screen-green.2e380c8e.png",
    "revision": "2e380c8e3d50474a1db56ad7af63a45c"
  },
  {
    "url": "assets/img/screen.e2f5d6c4.png",
    "revision": "e2f5d6c42f7ecdb9e024e49aa19a4a07"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/turtle-backward.6f157056.png",
    "revision": "6f157056e85ca7dde14722fdc91f41e6"
  },
  {
    "url": "assets/img/turtle-circle.c1ee919a.png",
    "revision": "c1ee919ab9068f7f255df94ef4a6d684"
  },
  {
    "url": "assets/img/turtle-fill.cb2e7e27.png",
    "revision": "cb2e7e270fd29b182e62ce31e915ffef"
  },
  {
    "url": "assets/img/turtle-forward-again.cfd34756.png",
    "revision": "cfd34756fbe301b553f810788ad4c02b"
  },
  {
    "url": "assets/img/turtle-forward.1382a457.png",
    "revision": "1382a457cafba913400522b39791c49c"
  },
  {
    "url": "assets/img/turtle-goto.0d6be904.png",
    "revision": "0d6be90469a5a03b9d868a1e40ea5e65"
  },
  {
    "url": "assets/img/turtle-home.06e174fe.png",
    "revision": "06e174fefc3c041e7b289556eaf1ea46"
  },
  {
    "url": "assets/img/turtle-left.2aae5442.png",
    "revision": "2aae54423f639f6830d86a917ed09ed9"
  },
  {
    "url": "assets/img/turtle-multiple.5d643a31.png",
    "revision": "5d643a319f0f594880118f6ca2a411d1"
  },
  {
    "url": "assets/img/turtle-pen-up-down.f8294a91.png",
    "revision": "f8294a91cced266a4623e71a4e1eb5b1"
  },
  {
    "url": "assets/img/turtle-pensize.169c157e.png",
    "revision": "169c157e88e6906545d5dde59b6a760c"
  },
  {
    "url": "assets/img/turtle-race.e9d00e3f.png",
    "revision": "e9d00e3f3996940f8805e147462d26a3"
  },
  {
    "url": "assets/img/turtle-red-white.1f74986f.png",
    "revision": "1f74986f39df58769d419e6576c884cf"
  },
  {
    "url": "assets/img/turtle-right.c8cd2a98.png",
    "revision": "c8cd2a98e5568a70fc3fd64fbc8ed136"
  },
  {
    "url": "assets/img/turtle-speed.e79a5321.png",
    "revision": "e79a53210e709482638903df176c6f4e"
  },
  {
    "url": "assets/img/turtle-square.a457510b.png",
    "revision": "a457510b4efdbb2847be5d38ac53a05d"
  },
  {
    "url": "assets/img/turtle-triangle.9a3c1c4a.png",
    "revision": "9a3c1c4aa28943c40dbb377b997a2387"
  },
  {
    "url": "assets/img/turtle.88630085.png",
    "revision": "886300853f8bc6429239c1c431896fa5"
  },
  {
    "url": "assets/js/10.919ad503.js",
    "revision": "38fc1d3997a34f5448d84f5666b16d59"
  },
  {
    "url": "assets/js/11.c705d11c.js",
    "revision": "779dc5404b55e4363bfe4f5cc641a6c9"
  },
  {
    "url": "assets/js/12.15cb91c5.js",
    "revision": "008dd3a2299c91374d52fc819928b8b8"
  },
  {
    "url": "assets/js/13.3010bbbc.js",
    "revision": "1d380c608b27322e430055f0ab3c32aa"
  },
  {
    "url": "assets/js/14.325fea8e.js",
    "revision": "8e570d517ca7ea8ff6164f1e02e8457f"
  },
  {
    "url": "assets/js/15.cd237966.js",
    "revision": "1ed6c72fda35176ac653e0be0c110393"
  },
  {
    "url": "assets/js/16.298c4bcd.js",
    "revision": "f262ced464dcfbd3449ddce6f572b669"
  },
  {
    "url": "assets/js/17.0862a85d.js",
    "revision": "b0a72a4cb6f8290925dce833e749b65a"
  },
  {
    "url": "assets/js/18.ea3d5ea3.js",
    "revision": "cafd77d4ae03213806a51c52f0293cb1"
  },
  {
    "url": "assets/js/19.acc97994.js",
    "revision": "1197443ff461b375ff16c54e1c6b781b"
  },
  {
    "url": "assets/js/2.bc2ee15f.js",
    "revision": "24fa7a29306d7a878cef0c322398fd0d"
  },
  {
    "url": "assets/js/20.1d5783dc.js",
    "revision": "cd196da3e397435ab8e9d15fed34ae0d"
  },
  {
    "url": "assets/js/21.032cc351.js",
    "revision": "cb1105893be8487a11a31fecd7f50d05"
  },
  {
    "url": "assets/js/22.b99deb6b.js",
    "revision": "17fd692b2ef2192d21c93d5bc3622560"
  },
  {
    "url": "assets/js/23.b3dd44b0.js",
    "revision": "6f1c46d3824472b4121c69a69e76b9f0"
  },
  {
    "url": "assets/js/24.115232e8.js",
    "revision": "af67db588d3753b2cfd8f8e1f5d4d1b8"
  },
  {
    "url": "assets/js/25.9bdd5acd.js",
    "revision": "42cd2381f744d3858357af89d01022cc"
  },
  {
    "url": "assets/js/26.db97ca24.js",
    "revision": "84e137f51c4232356d01c177c419f88b"
  },
  {
    "url": "assets/js/27.0e21052b.js",
    "revision": "1f6ce54789964fea03247c352d05383b"
  },
  {
    "url": "assets/js/28.66d0746e.js",
    "revision": "86bb36e86873912a5fb42dfc8c86c64f"
  },
  {
    "url": "assets/js/29.4667b7d9.js",
    "revision": "2739fa3a9fa86ef90adbd9c1077f1afe"
  },
  {
    "url": "assets/js/3.71a637cf.js",
    "revision": "0fec321e747b1b2ec42c8c35c3e263bc"
  },
  {
    "url": "assets/js/30.2b4b321b.js",
    "revision": "2a6f6b4a815f94a79e19cb2d3d50d9db"
  },
  {
    "url": "assets/js/31.1df5ab33.js",
    "revision": "93e13d3f838526a1a2784e76683cbd48"
  },
  {
    "url": "assets/js/32.12f69b6c.js",
    "revision": "4826341ffa40bbf2cc86aa64e67c6944"
  },
  {
    "url": "assets/js/33.90c83bf6.js",
    "revision": "cfccb25a9fc79b00e8281d16f2fb36a0"
  },
  {
    "url": "assets/js/34.99ab2e5e.js",
    "revision": "be81785354d63adac70fbff7820e7e5e"
  },
  {
    "url": "assets/js/35.bd4084aa.js",
    "revision": "46b8cfb46940a0a6a9fae7c7a3f7447d"
  },
  {
    "url": "assets/js/4.a42a8296.js",
    "revision": "053244ee5f167083450ff0a2624b73d0"
  },
  {
    "url": "assets/js/5.582a3a83.js",
    "revision": "1275c31b0f83e8a79abfc8a867f65d66"
  },
  {
    "url": "assets/js/6.1a1f5ce8.js",
    "revision": "4c1d94c62da2753d7371093e68e7f0f3"
  },
  {
    "url": "assets/js/7.538f50a8.js",
    "revision": "7285b2c5512094aa780e983c358bed93"
  },
  {
    "url": "assets/js/8.0b0209a6.js",
    "revision": "01f2bf6432ded2bea1c26b7219992972"
  },
  {
    "url": "assets/js/9.bb361f68.js",
    "revision": "4ff781b8afc8d4e5a8152cf02f62b4b1"
  },
  {
    "url": "assets/js/app.2bf47f6c.js",
    "revision": "309d569fd95071c125a3ca71c9d47c70"
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
    "revision": "66ac812dc31a224cd96b020b32c402d3"
  },
  {
    "url": "lessons/advent-of-code.html",
    "revision": "77c0963feca1e4c2ac3258d262be0715"
  },
  {
    "url": "lessons/another-challenge.html",
    "revision": "d4b69250de146ad561a3afcffda3cbba"
  },
  {
    "url": "lessons/classes-objects.html",
    "revision": "b6a532fcdcc4669cf9b2550fa18f86e3"
  },
  {
    "url": "lessons/coding-challenge.html",
    "revision": "00efc28c9ffaf5f1940ddf450b0d3ac4"
  },
  {
    "url": "lessons/comment.html",
    "revision": "265ad1646f8c18ef146f1077f24f6707"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "feccca43267a584aafd2f37b6326a02f"
  },
  {
    "url": "lessons/functions.html",
    "revision": "796a769846211ead8ac986d37c206fe4"
  },
  {
    "url": "lessons/index.html",
    "revision": "44aba27a79ef8023e990a15ecb715d49"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "ffa915d8e951fab4c529c8ce17e24600"
  },
  {
    "url": "lessons/make-executables.html",
    "revision": "d9ed746bfa92d246965764da4bd5e0bd"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "3ed5ee424ada861fe20193112446d911"
  },
  {
    "url": "lessons/modules.html",
    "revision": "6a224f18c086682b25f44a02caf55ae6"
  },
  {
    "url": "lessons/operator.html",
    "revision": "981a7a1ceed84bb76f9119e9928d9f2f"
  },
  {
    "url": "lessons/project-euler.html",
    "revision": "675d1bb976ee1622d55ea086def285a8"
  },
  {
    "url": "lessons/script.html",
    "revision": "ee0ed0d20293ea56a113534a06d6a75a"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "84a14db3ebb669281ca433dd8ab58af8"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "08fda6ab6bee9f25e7ae3d96767d62e2"
  },
  {
    "url": "lessons/setup.html",
    "revision": "1e4eecbadfe422b645f1447ddc5a1607"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "1238d5200e8d967682b3bd6c8282c3a9"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "4fe70f7f7de2a161a02e29531e9765e6"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "03983f22fb846fdb6813fb0c145fb34e"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "1deda98733fdf902e28c63f7378cad69"
  },
  {
    "url": "lessons/virtual-env.html",
    "revision": "60db738799cbb273cf7bb9f339645f7f"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "fef9302cf509be8ec5271a3b4e1e63d8"
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
