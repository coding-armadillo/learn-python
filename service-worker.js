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
    "revision": "5724e58023f976081886fd55a57814d4"
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
    "url": "assets/js/app.6afdfcfc.js",
    "revision": "07069de0cd2a71ab63492c136ee8f97e"
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
    "revision": "98d8ebf50943c5161c73bbdafddde9bc"
  },
  {
    "url": "lessons/advent-of-code.html",
    "revision": "4e0056fdaa18d94732c81fedf11f33a4"
  },
  {
    "url": "lessons/another-challenge.html",
    "revision": "599b1e0ca5b1932016a344d589762621"
  },
  {
    "url": "lessons/classes-objects.html",
    "revision": "d360a4ca68ec024ac61b7e779fe5e494"
  },
  {
    "url": "lessons/coding-challenge.html",
    "revision": "1a78b230c563f714a9c01c52dcb38ea6"
  },
  {
    "url": "lessons/comment.html",
    "revision": "f29b0bea3347f8f44ebd4c7bb9519078"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "300ad31a08d150ea4285db2f83a119cd"
  },
  {
    "url": "lessons/functions.html",
    "revision": "d9162754e2e91d7e22a8c6cd3d5ee4b9"
  },
  {
    "url": "lessons/index.html",
    "revision": "60abe2d8f087013d2a3b4a8623b75558"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "5088ed6c37a5d96e6424f5b5c6405add"
  },
  {
    "url": "lessons/make-executables.html",
    "revision": "89566fee1cb5ec6fee4958a2c96e0b5c"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "292126c90a007bdeac8938b4ba1c242b"
  },
  {
    "url": "lessons/modules.html",
    "revision": "330f58037ba3b44902a71eb30c317458"
  },
  {
    "url": "lessons/operator.html",
    "revision": "0ddd78e00df85f1af0553f0a023c78dd"
  },
  {
    "url": "lessons/project-euler.html",
    "revision": "168f1de2618ccf8877404c5bb6cb1f96"
  },
  {
    "url": "lessons/script.html",
    "revision": "1f302dbbe62f30836eca417ab1bd47cb"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "7c943d664c5173b0d37c59df161edc0d"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "7738acc15f0f0f9da15c91b64cb15da7"
  },
  {
    "url": "lessons/setup.html",
    "revision": "96f8a39775e4bb9fdadb9f43cca6810a"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "64842e3134b4a0c4ab31cb1ddbc37bae"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "8d207cd807979c856f9a4c6dcad0ddc0"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "4d67ab1835e81614c872a36b9fcc6e05"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "6cfc28623d9b5387851ce42dbba01c89"
  },
  {
    "url": "lessons/virtual-env.html",
    "revision": "1902dfc88e8ced2b33b566d370845391"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "e9e1b1ce7b67da882badb7732fbe89cc"
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
