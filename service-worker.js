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
    "revision": "dc555a4aa2e417f95712a5725db37f8b"
  },
  {
    "url": "assets/css/0.styles.e2cc325e.css",
    "revision": "9669be5d938bed0255a62e17e6fe9efd"
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
    "url": "assets/js/1.e9cbb423.js",
    "revision": "028dcb97df08c07574ceb70adf64d448"
  },
  {
    "url": "assets/js/10.de3c7dbd.js",
    "revision": "9f21a3d3d852a646b558702c36693b0a"
  },
  {
    "url": "assets/js/11.85df2af8.js",
    "revision": "e5dcd994e2abc9fa725742d31f9208f5"
  },
  {
    "url": "assets/js/12.8952f3dd.js",
    "revision": "707d22925d50626a6beea4532c30d659"
  },
  {
    "url": "assets/js/13.b9da71cf.js",
    "revision": "9a06a33720e8f4fb4797a1c77f838be8"
  },
  {
    "url": "assets/js/14.b76b41f2.js",
    "revision": "079cf41f6843328caf9b362d03e0837e"
  },
  {
    "url": "assets/js/15.7aae05c0.js",
    "revision": "80dc9ddf6bac6e462670d55d4fdde060"
  },
  {
    "url": "assets/js/16.159e8753.js",
    "revision": "48fe9ba2dd0743e9c65c603dfdd17e75"
  },
  {
    "url": "assets/js/17.6b53240b.js",
    "revision": "d5cf30111db50aee174cb8f952e89e10"
  },
  {
    "url": "assets/js/18.13a1be65.js",
    "revision": "ece6ead0ce82180e4d66e109ed2baaaa"
  },
  {
    "url": "assets/js/19.4bc17243.js",
    "revision": "a9aaba146028831c3011c54e6b9ead3e"
  },
  {
    "url": "assets/js/2.2715130b.js",
    "revision": "c654c94a16fcc900275627c9582af217"
  },
  {
    "url": "assets/js/20.dcfdd185.js",
    "revision": "8b6ba3b4d17ff52e55945d571d9d2a0b"
  },
  {
    "url": "assets/js/21.2d26609c.js",
    "revision": "26dbc81824ac5965a5627bb89e99f365"
  },
  {
    "url": "assets/js/22.54887117.js",
    "revision": "7ae8ba8ef89aef7ed11caffc0ef364f0"
  },
  {
    "url": "assets/js/23.028eb2b4.js",
    "revision": "bd6d0637da5b2d5856da3ff5058a140e"
  },
  {
    "url": "assets/js/24.f05a867d.js",
    "revision": "3b3d1e7f74622ae9383fc201938e36e4"
  },
  {
    "url": "assets/js/25.5830db64.js",
    "revision": "acb8eaf62596b4315d522ea2072b19e4"
  },
  {
    "url": "assets/js/26.46bd976e.js",
    "revision": "069cfc1b5ba3085ec1db380946ab9a05"
  },
  {
    "url": "assets/js/27.2b6ab97d.js",
    "revision": "588899f9ac1390771c0c6472852da55b"
  },
  {
    "url": "assets/js/28.d9d7bf71.js",
    "revision": "c2b00fd33852268026a4a5a8dfb2fcff"
  },
  {
    "url": "assets/js/29.68c13854.js",
    "revision": "3e3b7557e27b2bd70f718e4543f8245a"
  },
  {
    "url": "assets/js/3.65730bda.js",
    "revision": "169d7084eeac2a9407df1cf3b5829517"
  },
  {
    "url": "assets/js/30.aa40ea26.js",
    "revision": "b88edc6dbd36ec60fd7f9a431a358b00"
  },
  {
    "url": "assets/js/31.a295d6e4.js",
    "revision": "b35405c6d26aff4a239a8a46a4e833e1"
  },
  {
    "url": "assets/js/32.b29b622f.js",
    "revision": "2d551bc102136a47bc10063e1054cb6a"
  },
  {
    "url": "assets/js/33.a1be0230.js",
    "revision": "f99852664913d7b370a333722a04392b"
  },
  {
    "url": "assets/js/34.428bf192.js",
    "revision": "43eecb7e66766bfaea986267c91f18b8"
  },
  {
    "url": "assets/js/35.8d51a9dd.js",
    "revision": "994a3d48683609198d6aa790553ca147"
  },
  {
    "url": "assets/js/36.cecc2e05.js",
    "revision": "a146b8f2c5f30263123315bb277d9d7c"
  },
  {
    "url": "assets/js/37.0eb4d8e3.js",
    "revision": "d8119cc56d3806ada01deda3afdee93d"
  },
  {
    "url": "assets/js/38.3b4e53a1.js",
    "revision": "2aa02b2005608ea01780032068ea68af"
  },
  {
    "url": "assets/js/39.ce08b748.js",
    "revision": "f0d98744e8ad57299159c3a949becc50"
  },
  {
    "url": "assets/js/4.6d0b5865.js",
    "revision": "4c977e01c353de56606a09dcd33ce235"
  },
  {
    "url": "assets/js/40.18222bd9.js",
    "revision": "f2251e8360fe540b241fe934f4cde97c"
  },
  {
    "url": "assets/js/41.3ed371be.js",
    "revision": "495e6390e2257e378784367eb23d8e70"
  },
  {
    "url": "assets/js/42.ff89c9d6.js",
    "revision": "f1505e557ff388ea1f620d1fa29e9cf3"
  },
  {
    "url": "assets/js/43.ceb62df8.js",
    "revision": "f4442aa6444681f53cf851c68a4eaade"
  },
  {
    "url": "assets/js/44.7e6dcd6d.js",
    "revision": "51e8c69e00f0e4e3022bb7e9a0910dfd"
  },
  {
    "url": "assets/js/45.04f3fea4.js",
    "revision": "b84b9e949cf14bf6d4475c441d1a34f4"
  },
  {
    "url": "assets/js/46.9a700a8a.js",
    "revision": "de5f0ddebb1a067bd5cc01497cfbd225"
  },
  {
    "url": "assets/js/47.fb7069fd.js",
    "revision": "81c936b97b10b4dd6ba15e739f1d956f"
  },
  {
    "url": "assets/js/48.c8fb37f0.js",
    "revision": "a33ac06079f9536a73720bececbf905c"
  },
  {
    "url": "assets/js/49.aa5f77ba.js",
    "revision": "ae9c0461bec69ddfa188d0bef50991de"
  },
  {
    "url": "assets/js/5.c3783bcb.js",
    "revision": "18aceab9f8b4f310c246001f542aadb7"
  },
  {
    "url": "assets/js/50.1f13b919.js",
    "revision": "c56125e032aaf8b963a98dd4ab5d70ef"
  },
  {
    "url": "assets/js/6.3f7f2ffe.js",
    "revision": "8a485f64b1db3c55c4a23d8cb6e0a271"
  },
  {
    "url": "assets/js/7.3fe5643b.js",
    "revision": "2770a8e4cf67ac9c0e603d1095e20868"
  },
  {
    "url": "assets/js/app.e15d4d11.js",
    "revision": "12149bd11503c9cfc1941496280b91af"
  },
  {
    "url": "assets/js/vendors~docsearch.d58db586.js",
    "revision": "ffad6a35348b8b0fb6848069121dda9d"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "d9fadcddacd4bf9132d6d339343d1e81"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "09e954339bb4a3f6b8ac991d5e6e9dc0"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "16bd4eaa8c6abe7715d376ae50ccf54a"
  },
  {
    "url": "index.html",
    "revision": "cf68ca38c5aaf19dff7a700204fd71d4"
  },
  {
    "url": "lessons/advent-of-code.html",
    "revision": "6c9c4b5d91475d64dfb4c8ecec2dbb31"
  },
  {
    "url": "lessons/another-challenge.html",
    "revision": "79e094e5aad3a7210878a1bdee52a136"
  },
  {
    "url": "lessons/classes-objects.html",
    "revision": "ea11fb71895abe2f71e7e38e1c46f987"
  },
  {
    "url": "lessons/coding-challenge.html",
    "revision": "a9f86cadeab0290999545bbf53a32fb4"
  },
  {
    "url": "lessons/comment.html",
    "revision": "da1c23bd86d80c5df220605abb3461e0"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "90566a1a2385de7f2795817ecf00f38e"
  },
  {
    "url": "lessons/functions.html",
    "revision": "4c3397270b02d011bb35f5f22e1b7a72"
  },
  {
    "url": "lessons/index.html",
    "revision": "44cffce90db0780fefa174e9b5ccde4a"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "1213829fd59e8e1b318521d977d20c31"
  },
  {
    "url": "lessons/make-executables.html",
    "revision": "43e71fce5d9eebafec3e8a8860f7b48d"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "95ad38594e26d758d6a2959b73336612"
  },
  {
    "url": "lessons/modules.html",
    "revision": "70af70e3240e5543d3ed17f2bda1d72e"
  },
  {
    "url": "lessons/operator.html",
    "revision": "6b74819feddf53393a7ae78e45c7acee"
  },
  {
    "url": "lessons/project-euler.html",
    "revision": "6ae229cc9b9679666d2e344d09e947cd"
  },
  {
    "url": "lessons/script.html",
    "revision": "a99a4113b4a3ea44be3b39f526113452"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "69d50dd4d85966c880739c6dae4b23e3"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "6cef3289ee7d557f6a89bd04c9b2143c"
  },
  {
    "url": "lessons/setup.html",
    "revision": "1a12689f014be695fbffc4f3f5461130"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "6bff52d20206ded834c85d1683a91975"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "acb5dcaccb1059eec3def7fb30aaed3f"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "17ad901a82f959a24e908e6a733b4ba7"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "fde631b8b53b322576ee0d64578098d5"
  },
  {
    "url": "lessons/virtual-env.html",
    "revision": "0e32dc61fc5207f70d6385b27afcfb83"
  },
  {
    "url": "logo.png",
    "revision": "4d1bf7683aa0f8aed16f8eb318592c49"
  },
  {
    "url": "tags.html",
    "revision": "2cc7520c5650ad0017b8abb3005ea3ef"
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
