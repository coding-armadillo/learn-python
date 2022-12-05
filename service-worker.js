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
    "revision": "cd5d3bc5b81e22ab5b8bf17ffc1e1932"
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
    "url": "assets/js/app.3a007557.js",
    "revision": "c6057a19a3656dd3f6223660acca961f"
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
    "revision": "68f31b762f6fc35751798960d0bff1ca"
  },
  {
    "url": "lessons/advent-of-code.html",
    "revision": "3ff51a6ac7df85937ec8f81a07991231"
  },
  {
    "url": "lessons/another-challenge.html",
    "revision": "2d15bb2708b285cc9279370f31822d27"
  },
  {
    "url": "lessons/classes-objects.html",
    "revision": "7a57c77f13071aaaf7b71ded9ac8e85f"
  },
  {
    "url": "lessons/coding-challenge.html",
    "revision": "7f8e1a5029958a34da273154824a793f"
  },
  {
    "url": "lessons/comment.html",
    "revision": "656c79021368b1939f677a94ec145597"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "af048e6d44b88c8e1f29841c86d54c3f"
  },
  {
    "url": "lessons/functions.html",
    "revision": "d9e26057a16629cd4a72e1f2e1656412"
  },
  {
    "url": "lessons/index.html",
    "revision": "ad7eb97402bbe67715bf2c983c5f1966"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "10740ed57522d9ad82ec6917ebfa5fa1"
  },
  {
    "url": "lessons/make-executables.html",
    "revision": "c74b2595c8a252bac404a209e3b57def"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "ebe32a782dbf76366b9d31981c5ab1fd"
  },
  {
    "url": "lessons/modules.html",
    "revision": "e4c0b93b8aa59b0011d7f3476ca37ff5"
  },
  {
    "url": "lessons/operator.html",
    "revision": "7c0accd065980b06f9dc825ca91aa2d2"
  },
  {
    "url": "lessons/project-euler.html",
    "revision": "651a93d8de94e64c1476fed7814584af"
  },
  {
    "url": "lessons/script.html",
    "revision": "08b6e9cb552e2e9c413581d560cc42f6"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "9e17a09d973b9d34a7046e42f89421f0"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "20b0a5f2bf2130b13839a9d3b3991357"
  },
  {
    "url": "lessons/setup.html",
    "revision": "0773a7c3b0a47bf0cc8e20f5d92aa576"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "e59cd581d4b9b3183bab16ce466a9cb2"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "97c81e1acc14300c69f497272055e715"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "d462d33036586852ef8cee63920ca3c6"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "db3154a4a1a25113b7f46f8a1ad9b752"
  },
  {
    "url": "lessons/virtual-env.html",
    "revision": "d91ce4f6510bac9430ff594889f20ea5"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "672c8ef4c25b5cb81bf1e334f06b2ca2"
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
