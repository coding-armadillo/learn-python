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
    "revision": "3033eef8074a4e5da81ac3d485d76ac6"
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
    "url": "assets/js/13.c1b162ff.js",
    "revision": "d68956cdf773bfce14e59086dd3ebd0b"
  },
  {
    "url": "assets/js/14.e423ba19.js",
    "revision": "ef2d5a02e9d87df362a5ea736ec1344b"
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
    "url": "assets/js/26.57c9004f.js",
    "revision": "048b5abe2a21311188ae930c0b08f4dd"
  },
  {
    "url": "assets/js/27.8d1e1e53.js",
    "revision": "f39f151ff2c263b0f6aa2182a919af78"
  },
  {
    "url": "assets/js/28.2435d1bb.js",
    "revision": "bbb68d967e83ea7cdefd5fe62cd481d5"
  },
  {
    "url": "assets/js/29.17313f5a.js",
    "revision": "56c407d79d4ea01bef7f1ef025e63260"
  },
  {
    "url": "assets/js/3.df3f79bb.js",
    "revision": "ba4d1b09e579c6cd2fe729025d57bc78"
  },
  {
    "url": "assets/js/30.385edc09.js",
    "revision": "7e5679c1a30b56cc2b1043bd88625c4d"
  },
  {
    "url": "assets/js/31.9fb7f10e.js",
    "revision": "8fb4102fa2eb2c772f9dfc1abe327625"
  },
  {
    "url": "assets/js/32.9db491f5.js",
    "revision": "1b41e4ec1bbff5b07aadaf751b31a819"
  },
  {
    "url": "assets/js/33.b361f975.js",
    "revision": "bc16d8589fd83010feddfa95fd3a8d05"
  },
  {
    "url": "assets/js/34.10cb79ac.js",
    "revision": "91cf348c3d6346bc5b4ef01472062bdf"
  },
  {
    "url": "assets/js/4.7607e2b4.js",
    "revision": "85aac97abf1d6f40908d76baf36e5c60"
  },
  {
    "url": "assets/js/5.582a3a83.js",
    "revision": "1275c31b0f83e8a79abfc8a867f65d66"
  },
  {
    "url": "assets/js/6.7c0aad4b.js",
    "revision": "e60ca4f39fc3b52018e05f47fe0b15cb"
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
    "url": "assets/js/9.857bc022.js",
    "revision": "88f6202d226f3b67db83ba7917965aa2"
  },
  {
    "url": "assets/js/app.c95aeefe.js",
    "revision": "a702de29ad28179f2f784da05bf2fa25"
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
    "revision": "74914cb2904e9e56fabb65e98f973f82"
  },
  {
    "url": "lessons/advent-of-code.html",
    "revision": "b35ca51a2ba00ae0e621c4217b7d1880"
  },
  {
    "url": "lessons/another-challenge.html",
    "revision": "29ea839125e754406e119d872d5fe480"
  },
  {
    "url": "lessons/classes-objects.html",
    "revision": "ecbc25218ad7855c71340c59339d294b"
  },
  {
    "url": "lessons/coding-challenge.html",
    "revision": "77b4852099c31cd5ad80cb6641b4a5b2"
  },
  {
    "url": "lessons/comment.html",
    "revision": "6a0a779dff914ed89fad82d88ebd54f0"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "e4cafea571f709194633065e46ea614e"
  },
  {
    "url": "lessons/functions.html",
    "revision": "5fd98bd7fe859ff4121470e26be32bc7"
  },
  {
    "url": "lessons/index.html",
    "revision": "db0633c534831b9e2285ab53ab8a82f4"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "24bb79cec7602c3a964f20d02773bf1d"
  },
  {
    "url": "lessons/make-executables.html",
    "revision": "13d3a3e55f2f0fb0952ee04e4537451b"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "a0deb1a3c7b49eea9c97c31f17bca371"
  },
  {
    "url": "lessons/modules.html",
    "revision": "800b5d6de05bf109d5d7c5c126981381"
  },
  {
    "url": "lessons/operator.html",
    "revision": "54614c1ac6052301ebbc1c471df75699"
  },
  {
    "url": "lessons/script.html",
    "revision": "2ca46083830d178840b612b445b3e810"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "8230726ccdcc8f34a19505dcaaa6d817"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "715238a74e8f2836bfd5226071e82ebc"
  },
  {
    "url": "lessons/setup.html",
    "revision": "b6cf376530f9bbf84d5f05290c3969eb"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "820a18210ddf0ac9dc25cf8c5bb4c777"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "62e676ed99c0561ed541ab700811e0ca"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "8461d3e6b40d1dcde98a4fe5252d53bb"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "f578fe454cdb15f12d3bd108624e2524"
  },
  {
    "url": "lessons/virtual-env.html",
    "revision": "6a3e9e5fcf5923b65d2da740ecaed40e"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "96cf7b13f971212e97cbc73ad1d47f57"
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
