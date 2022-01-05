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
    "revision": "6c65a733a354df4ad551b228d155ab26"
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
    "url": "assets/js/10.4f03d720.js",
    "revision": "38fc1d3997a34f5448d84f5666b16d59"
  },
  {
    "url": "assets/js/11.fb04582b.js",
    "revision": "779dc5404b55e4363bfe4f5cc641a6c9"
  },
  {
    "url": "assets/js/12.3512dc2f.js",
    "revision": "008dd3a2299c91374d52fc819928b8b8"
  },
  {
    "url": "assets/js/13.16586f75.js",
    "revision": "d68956cdf773bfce14e59086dd3ebd0b"
  },
  {
    "url": "assets/js/14.c57c5c7f.js",
    "revision": "ef2d5a02e9d87df362a5ea736ec1344b"
  },
  {
    "url": "assets/js/15.f3aa7c3e.js",
    "revision": "1ed6c72fda35176ac653e0be0c110393"
  },
  {
    "url": "assets/js/16.0240281a.js",
    "revision": "f262ced464dcfbd3449ddce6f572b669"
  },
  {
    "url": "assets/js/17.1965cfc3.js",
    "revision": "b0a72a4cb6f8290925dce833e749b65a"
  },
  {
    "url": "assets/js/18.59920a8d.js",
    "revision": "cafd77d4ae03213806a51c52f0293cb1"
  },
  {
    "url": "assets/js/19.1e07332d.js",
    "revision": "1197443ff461b375ff16c54e1c6b781b"
  },
  {
    "url": "assets/js/2.86ff2ffb.js",
    "revision": "4eb81494f98a4890a5e0977b472537a2"
  },
  {
    "url": "assets/js/20.f77d4244.js",
    "revision": "cd196da3e397435ab8e9d15fed34ae0d"
  },
  {
    "url": "assets/js/21.3b09381c.js",
    "revision": "cb1105893be8487a11a31fecd7f50d05"
  },
  {
    "url": "assets/js/22.47ae4887.js",
    "revision": "17fd692b2ef2192d21c93d5bc3622560"
  },
  {
    "url": "assets/js/23.fc25683e.js",
    "revision": "6f1c46d3824472b4121c69a69e76b9f0"
  },
  {
    "url": "assets/js/24.b593dd34.js",
    "revision": "af67db588d3753b2cfd8f8e1f5d4d1b8"
  },
  {
    "url": "assets/js/25.5247ed55.js",
    "revision": "42cd2381f744d3858357af89d01022cc"
  },
  {
    "url": "assets/js/26.dc3cef30.js",
    "revision": "048b5abe2a21311188ae930c0b08f4dd"
  },
  {
    "url": "assets/js/27.30fcbc59.js",
    "revision": "f39f151ff2c263b0f6aa2182a919af78"
  },
  {
    "url": "assets/js/28.e50856b8.js",
    "revision": "bbb68d967e83ea7cdefd5fe62cd481d5"
  },
  {
    "url": "assets/js/29.b2591185.js",
    "revision": "56c407d79d4ea01bef7f1ef025e63260"
  },
  {
    "url": "assets/js/3.8b3af528.js",
    "revision": "ba4d1b09e579c6cd2fe729025d57bc78"
  },
  {
    "url": "assets/js/30.34c795d6.js",
    "revision": "7e5679c1a30b56cc2b1043bd88625c4d"
  },
  {
    "url": "assets/js/31.20c0cfd1.js",
    "revision": "8fb4102fa2eb2c772f9dfc1abe327625"
  },
  {
    "url": "assets/js/32.26948059.js",
    "revision": "1b41e4ec1bbff5b07aadaf751b31a819"
  },
  {
    "url": "assets/js/33.cfba399d.js",
    "revision": "bc16d8589fd83010feddfa95fd3a8d05"
  },
  {
    "url": "assets/js/34.10cb79ac.js",
    "revision": "91cf348c3d6346bc5b4ef01472062bdf"
  },
  {
    "url": "assets/js/4.e6fb5748.js",
    "revision": "85aac97abf1d6f40908d76baf36e5c60"
  },
  {
    "url": "assets/js/5.fc51f8bd.js",
    "revision": "1275c31b0f83e8a79abfc8a867f65d66"
  },
  {
    "url": "assets/js/6.7c0aad4b.js",
    "revision": "e60ca4f39fc3b52018e05f47fe0b15cb"
  },
  {
    "url": "assets/js/7.bf6628c9.js",
    "revision": "7285b2c5512094aa780e983c358bed93"
  },
  {
    "url": "assets/js/8.e0fe4da2.js",
    "revision": "01f2bf6432ded2bea1c26b7219992972"
  },
  {
    "url": "assets/js/9.0ab64d26.js",
    "revision": "88f6202d226f3b67db83ba7917965aa2"
  },
  {
    "url": "assets/js/app.615c6733.js",
    "revision": "282eab6e728166d17def8f76484d0a07"
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
    "revision": "df89061318010b72ffeffb2dfb8b4948"
  },
  {
    "url": "lessons/advent-of-code.html",
    "revision": "4407e1c45b74061418c7760336e23196"
  },
  {
    "url": "lessons/another-challenge.html",
    "revision": "8f59c6ea86d3736e94a5c8904bc8468d"
  },
  {
    "url": "lessons/classes-objects.html",
    "revision": "cfbd0e40aec6f1d335dbdcefaf38f745"
  },
  {
    "url": "lessons/coding-challenge.html",
    "revision": "2fbc6bd7576ce243da1669636b8106c0"
  },
  {
    "url": "lessons/comment.html",
    "revision": "a7939bf32d98cf263996bcf48b2cad00"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "868a7c9d73c1a159b711358d447b40d4"
  },
  {
    "url": "lessons/functions.html",
    "revision": "091a38019daadcfc680534fcf1895ed1"
  },
  {
    "url": "lessons/index.html",
    "revision": "b18d2b7560e94313523cb3f711fb67b7"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "583f90b8e6e9a43cbe140267771bb090"
  },
  {
    "url": "lessons/make-executables.html",
    "revision": "0994ade1ec16de6127a15e21b5f20e99"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "ab2ccddfd6a2510515bf1ec0c6b57317"
  },
  {
    "url": "lessons/modules.html",
    "revision": "d799e8ddcf5c59ec57e08ec529d3053a"
  },
  {
    "url": "lessons/operator.html",
    "revision": "a30fff99bfb4540ad8bdfb62fb62cd3c"
  },
  {
    "url": "lessons/script.html",
    "revision": "1dbe14b7171970fd50b06af92688d75d"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "198367bf0c6e1854a2d2ecfd25972f73"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "0e10369a80a313f21598d6a674cbd3f2"
  },
  {
    "url": "lessons/setup.html",
    "revision": "4895bba2eed1a54e5fd39c254039ba71"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "cf1694f8b7c3719ad433b9c2be362ef4"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "0aaad1fd4e6244d20c4bd3fae6516525"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "5f8faa08160224c7bee55edfe4de0521"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "568a1f730db8ca59cd7a1f3509f09165"
  },
  {
    "url": "lessons/virtual-env.html",
    "revision": "35ec31e811317c72984881ab554308eb"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "08869b3f330559c4c3263d68e67f62b9"
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
