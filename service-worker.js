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
    "revision": "bf93ea37128fd80fcf86f13c1e2ea283"
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
    "url": "assets/js/10.18add3a3.js",
    "revision": "ee2eb880bc1da4b455a27bb59b5045c1"
  },
  {
    "url": "assets/js/11.9745c4cc.js",
    "revision": "aa934b33c5edea8becc49a9ce6636225"
  },
  {
    "url": "assets/js/12.e37269b6.js",
    "revision": "40b1c1e9de35a17643e0a2e93f80acc1"
  },
  {
    "url": "assets/js/13.12789397.js",
    "revision": "f9b9dcfa98374fd464b45092f7134e63"
  },
  {
    "url": "assets/js/14.a1deadca.js",
    "revision": "918606f27f985a6209e88713cb3ad2b3"
  },
  {
    "url": "assets/js/15.073b23a7.js",
    "revision": "ca31250660d12d28d23358cd0a54e718"
  },
  {
    "url": "assets/js/16.ed86c94a.js",
    "revision": "03dbc3adb47a2e03ce83d31c2d87bcef"
  },
  {
    "url": "assets/js/17.b3ff78e4.js",
    "revision": "e9935a3823300e59823749fbb9dfed9d"
  },
  {
    "url": "assets/js/18.a30370c9.js",
    "revision": "d5db807a73fb96573e2c3f08e12c1ef8"
  },
  {
    "url": "assets/js/19.c3e3f9bc.js",
    "revision": "069cba49713547118e9d543032dc201b"
  },
  {
    "url": "assets/js/2.5841a18f.js",
    "revision": "79ed7f2502a8546be22602e96bb282a5"
  },
  {
    "url": "assets/js/20.7d2cc6f8.js",
    "revision": "15cff563fccd9766c246f65bc693478e"
  },
  {
    "url": "assets/js/21.cc7048b0.js",
    "revision": "7bb5808f71fb0b40379562f66e889ea0"
  },
  {
    "url": "assets/js/22.960c573c.js",
    "revision": "3c58337f2305e9d6b14837e18cdb08ea"
  },
  {
    "url": "assets/js/23.7e63d3de.js",
    "revision": "475613d93f7410a979d78ebdd651a037"
  },
  {
    "url": "assets/js/24.093bfada.js",
    "revision": "b9affe8c4e7226b9577da1bbd8a5bfbb"
  },
  {
    "url": "assets/js/25.d93ec91f.js",
    "revision": "06139abbaf6d4c0d51760bc0e818bc69"
  },
  {
    "url": "assets/js/26.b117842f.js",
    "revision": "cb9701c5e8ae7e4827896b4721f661e2"
  },
  {
    "url": "assets/js/27.584984a0.js",
    "revision": "f357d80ced52b9252a5dc769c342d81a"
  },
  {
    "url": "assets/js/28.9424940f.js",
    "revision": "4b4924ef1f40d708d96e1dd11ba538a5"
  },
  {
    "url": "assets/js/29.05bc2fec.js",
    "revision": "1e25bc7d7449fa6ea4ee196c626d169b"
  },
  {
    "url": "assets/js/3.d0f28511.js",
    "revision": "920f7ae32b328815c8ed1e64f2358c4a"
  },
  {
    "url": "assets/js/4.671ecda0.js",
    "revision": "e7fffe579690b39437d20f726820b406"
  },
  {
    "url": "assets/js/5.02118af0.js",
    "revision": "26cb3cb28dd6374ede4fdc88bc619816"
  },
  {
    "url": "assets/js/6.e0a91cbf.js",
    "revision": "188b9bfd730a67da623fe0444be19c04"
  },
  {
    "url": "assets/js/7.30cee585.js",
    "revision": "abdcf08181eea9293063fcec528f68c0"
  },
  {
    "url": "assets/js/8.e5b244d7.js",
    "revision": "338271bc8dba72f0121734de95be35c1"
  },
  {
    "url": "assets/js/9.a9aa46ad.js",
    "revision": "7606687dda45cf58303d1bc0c14b8187"
  },
  {
    "url": "assets/js/app.67f086ea.js",
    "revision": "9acee9a4000fc9ca70782cb8d53e1c24"
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
    "revision": "d1bb48e5f776bcfe65d7c9e2e79bed4b"
  },
  {
    "url": "lessons/another-challenge.html",
    "revision": "5c558b8d1739354f9d99bbba6ee260f2"
  },
  {
    "url": "lessons/comment.html",
    "revision": "a0fa516d69a04224de873beff07c18af"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "bd7fd3abe1ea5f54f6a0be026f50301e"
  },
  {
    "url": "lessons/functions.html",
    "revision": "94a34060411c6a7cc2310fd36e90be66"
  },
  {
    "url": "lessons/index.html",
    "revision": "0aae6770d9001670c1c5146f8d8ea7f8"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "4cec6f0b8fda4afc4c698005177fb4e0"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "fe8400714f0500691246b3cdaf68a717"
  },
  {
    "url": "lessons/modules.html",
    "revision": "279dd1e1345827f6361ee212e2e0974c"
  },
  {
    "url": "lessons/operator.html",
    "revision": "c6adb75b26cf8a4ed4c5570c3a897215"
  },
  {
    "url": "lessons/script.html",
    "revision": "4cb616dab854ce8a14677ccf413e5e3a"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "56bfa747f45255a07f3df00b02e752a1"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "2dbd4991afa5de8e28e02377154a9358"
  },
  {
    "url": "lessons/setup.html",
    "revision": "a496ad2b700e39cdfede10072bb39563"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "a39c57394791a51ba900f8171611f864"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "4900c387fa0841310459fb2aa93c21e7"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "88963b4e3ede0d81bf65673e838ae56b"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "891beb48addbd034ed44c4d67ad64ef9"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "9d98b58b8a219c6718e7c86e2d9e7605"
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
