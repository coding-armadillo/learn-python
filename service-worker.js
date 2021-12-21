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
    "revision": "bb48b7599ce49baeb3abf419386ff363"
  },
  {
    "url": "assets/css/0.styles.56831745.css",
    "revision": "1ce6b9d49cd972cf97556468c9eb34c0"
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
    "url": "assets/js/10.2ca14e79.js",
    "revision": "38fc1d3997a34f5448d84f5666b16d59"
  },
  {
    "url": "assets/js/11.1bc42a2b.js",
    "revision": "779dc5404b55e4363bfe4f5cc641a6c9"
  },
  {
    "url": "assets/js/12.a1003fc9.js",
    "revision": "008dd3a2299c91374d52fc819928b8b8"
  },
  {
    "url": "assets/js/13.d119ac54.js",
    "revision": "d68956cdf773bfce14e59086dd3ebd0b"
  },
  {
    "url": "assets/js/14.cba49cef.js",
    "revision": "ef2d5a02e9d87df362a5ea736ec1344b"
  },
  {
    "url": "assets/js/15.74d0553d.js",
    "revision": "1ed6c72fda35176ac653e0be0c110393"
  },
  {
    "url": "assets/js/16.9fdcb57c.js",
    "revision": "f262ced464dcfbd3449ddce6f572b669"
  },
  {
    "url": "assets/js/17.7c08a519.js",
    "revision": "b0a72a4cb6f8290925dce833e749b65a"
  },
  {
    "url": "assets/js/18.010746eb.js",
    "revision": "cafd77d4ae03213806a51c52f0293cb1"
  },
  {
    "url": "assets/js/19.9bcb8ce1.js",
    "revision": "1197443ff461b375ff16c54e1c6b781b"
  },
  {
    "url": "assets/js/2.830177a1.js",
    "revision": "4eb81494f98a4890a5e0977b472537a2"
  },
  {
    "url": "assets/js/20.574741f8.js",
    "revision": "cd196da3e397435ab8e9d15fed34ae0d"
  },
  {
    "url": "assets/js/21.3110ee98.js",
    "revision": "cb1105893be8487a11a31fecd7f50d05"
  },
  {
    "url": "assets/js/22.e09bf66d.js",
    "revision": "17fd692b2ef2192d21c93d5bc3622560"
  },
  {
    "url": "assets/js/23.049b49f5.js",
    "revision": "6f1c46d3824472b4121c69a69e76b9f0"
  },
  {
    "url": "assets/js/24.c11bb86d.js",
    "revision": "af67db588d3753b2cfd8f8e1f5d4d1b8"
  },
  {
    "url": "assets/js/25.65495b43.js",
    "revision": "42cd2381f744d3858357af89d01022cc"
  },
  {
    "url": "assets/js/26.670b6ad1.js",
    "revision": "048b5abe2a21311188ae930c0b08f4dd"
  },
  {
    "url": "assets/js/27.2c936b8d.js",
    "revision": "f39f151ff2c263b0f6aa2182a919af78"
  },
  {
    "url": "assets/js/28.8583a837.js",
    "revision": "bbb68d967e83ea7cdefd5fe62cd481d5"
  },
  {
    "url": "assets/js/29.fb9a6f42.js",
    "revision": "56c407d79d4ea01bef7f1ef025e63260"
  },
  {
    "url": "assets/js/3.eb46e0d5.js",
    "revision": "ba4d1b09e579c6cd2fe729025d57bc78"
  },
  {
    "url": "assets/js/30.0d776b1f.js",
    "revision": "7e5679c1a30b56cc2b1043bd88625c4d"
  },
  {
    "url": "assets/js/31.c4ec17b1.js",
    "revision": "8fb4102fa2eb2c772f9dfc1abe327625"
  },
  {
    "url": "assets/js/32.ce9d782c.js",
    "revision": "1b41e4ec1bbff5b07aadaf751b31a819"
  },
  {
    "url": "assets/js/33.df64cc22.js",
    "revision": "bc16d8589fd83010feddfa95fd3a8d05"
  },
  {
    "url": "assets/js/34.10cb79ac.js",
    "revision": "91cf348c3d6346bc5b4ef01472062bdf"
  },
  {
    "url": "assets/js/4.6eebd55b.js",
    "revision": "85aac97abf1d6f40908d76baf36e5c60"
  },
  {
    "url": "assets/js/5.e307502b.js",
    "revision": "1275c31b0f83e8a79abfc8a867f65d66"
  },
  {
    "url": "assets/js/6.7c0aad4b.js",
    "revision": "e60ca4f39fc3b52018e05f47fe0b15cb"
  },
  {
    "url": "assets/js/7.aee7a804.js",
    "revision": "7285b2c5512094aa780e983c358bed93"
  },
  {
    "url": "assets/js/8.5e6081e0.js",
    "revision": "01f2bf6432ded2bea1c26b7219992972"
  },
  {
    "url": "assets/js/9.a1cb9bd5.js",
    "revision": "88f6202d226f3b67db83ba7917965aa2"
  },
  {
    "url": "assets/js/app.3d699e83.js",
    "revision": "ab9decff6291fa8e91e54a3d8424ab08"
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
    "revision": "57d8a50a5ca6552bc5697ce4c64439ce"
  },
  {
    "url": "lessons/advent-of-code.html",
    "revision": "624007748a7f2114e9079fa5c0b09136"
  },
  {
    "url": "lessons/another-challenge.html",
    "revision": "179db2c53f8543b201dc27622b5abb86"
  },
  {
    "url": "lessons/classes-objects.html",
    "revision": "62f84c46acd648527101c1fa62435451"
  },
  {
    "url": "lessons/coding-challenge.html",
    "revision": "fcc63d6788fc281c67b8717bf4878bec"
  },
  {
    "url": "lessons/comment.html",
    "revision": "92b4f6daffe9d43ea8ab82a8080eca1e"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "3772209c9fa533e7b7a732f27f6a1990"
  },
  {
    "url": "lessons/functions.html",
    "revision": "46c1e2371dd0eb21b6fdc21625e8556b"
  },
  {
    "url": "lessons/index.html",
    "revision": "df4ad8e2136e83059fe5495c34a56d58"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "41d80565e9a6c1881798fe97c119fb63"
  },
  {
    "url": "lessons/make-executables.html",
    "revision": "8e32c9827902d57a060bd6b3db1ef67e"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "4744ef76ddc963051f614df7d3052610"
  },
  {
    "url": "lessons/modules.html",
    "revision": "f3fbfa40770119b9f5db501c920dad39"
  },
  {
    "url": "lessons/operator.html",
    "revision": "d82411a97f6cd6f349e0b6df962a40ac"
  },
  {
    "url": "lessons/script.html",
    "revision": "d21c0cfad214149f32f1821913f0d88d"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "eb2d924a12a883d762bdb32af8ed8599"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "532b5c1e933ef760d899ad575c4aa908"
  },
  {
    "url": "lessons/setup.html",
    "revision": "74b0028bfdc0e84c55a60d34c3a37628"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "4732a8992fba00df6b3802b46ce9a158"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "19852221039d15e8a4b0cfefd1546f8e"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "f8c31653797c3c083d3d73c1aaefe1f6"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "1307c6124aa151f8546797d135dfa9e9"
  },
  {
    "url": "lessons/virtual-env.html",
    "revision": "53cfe1bea03a1b6e285ea3955ffd1cec"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "f02330f47f0e07a0e9ce536d018a98ce"
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
