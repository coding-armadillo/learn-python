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
    "revision": "bd6960aebe2d4b0c81f07387fa6a1c6d"
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
    "url": "assets/js/11.b2d8b6c2.js",
    "revision": "5b64549b1aa603779beb5c42795b07fb"
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
    "url": "assets/js/24.09a7bd7b.js",
    "revision": "5cd090cdc3ca16171f12e45e4dc757ab"
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
    "url": "assets/js/32.52591002.js",
    "revision": "46fa668f65ba7cb2d536a2181da35ed5"
  },
  {
    "url": "assets/js/33.0fb7bc9d.js",
    "revision": "66c8939f58274a6b43a5f2ec919e4180"
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
    "url": "assets/js/37.65cd9597.js",
    "revision": "37b6828bd88a8152ea796e248e7b736f"
  },
  {
    "url": "assets/js/38.ff3e8398.js",
    "revision": "c577569ca7666b96e70345faed22460f"
  },
  {
    "url": "assets/js/39.553feda4.js",
    "revision": "ab4b1a587e0a3498828bef0bc83d3f75"
  },
  {
    "url": "assets/js/4.6d0b5865.js",
    "revision": "4c977e01c353de56606a09dcd33ce235"
  },
  {
    "url": "assets/js/40.c18f8555.js",
    "revision": "d429b5d2389bb9528caec8dd9bb7d634"
  },
  {
    "url": "assets/js/41.301574f3.js",
    "revision": "9855216e7b8edd552491522d48dc3361"
  },
  {
    "url": "assets/js/42.ff89c9d6.js",
    "revision": "f1505e557ff388ea1f620d1fa29e9cf3"
  },
  {
    "url": "assets/js/43.b9f470d1.js",
    "revision": "d7ac26c009d5040a41a0747cddc108f5"
  },
  {
    "url": "assets/js/44.61bf767b.js",
    "revision": "1280698bdca7ec929ce969ec662370a2"
  },
  {
    "url": "assets/js/45.5ac8b28c.js",
    "revision": "a8bd6d58368a87e6eeeb671b88ba58bb"
  },
  {
    "url": "assets/js/46.251ec8c8.js",
    "revision": "6e8936bab48485f0fd383c3e995ab020"
  },
  {
    "url": "assets/js/47.a8479039.js",
    "revision": "f33cd1a078af903a04ceb9fdc9f4ac80"
  },
  {
    "url": "assets/js/48.4e1700d2.js",
    "revision": "e933438c195526dada3e8aa80c49f1d2"
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
    "url": "assets/js/app.4bfce671.js",
    "revision": "80a62a1f3554c886be7ddd9d645588e7"
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
    "revision": "d01fa15719156c19c9af796ed800e68f"
  },
  {
    "url": "lessons/advent-of-code.html",
    "revision": "78d5c658a23a54f8c47f59e154a9d9c5"
  },
  {
    "url": "lessons/another-challenge.html",
    "revision": "8c487f18ef66bfc69b2a4c456f26a61e"
  },
  {
    "url": "lessons/classes-objects.html",
    "revision": "cb344a2e3dfb739937fe745582a3d66b"
  },
  {
    "url": "lessons/coding-challenge.html",
    "revision": "7fb1955303832e76cc4a1553805b82c0"
  },
  {
    "url": "lessons/comment.html",
    "revision": "0daaa22bafd5b41c5632c9b71e78dcf4"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "53d3ade4ad8a007d5351675ee95834c0"
  },
  {
    "url": "lessons/functions.html",
    "revision": "07dbca7663db5d08dda0402817aa158d"
  },
  {
    "url": "lessons/index.html",
    "revision": "6dfad0a758a61e61f1061468ad343bd6"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "27da3b74b4b926f62b5d2cf11836e776"
  },
  {
    "url": "lessons/make-executables.html",
    "revision": "fb694346ab62876322af1078012d625a"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "0f8ba79dc3cc6c1068798eb66f428416"
  },
  {
    "url": "lessons/modules.html",
    "revision": "cba05f33955e15cabb0056cc79479277"
  },
  {
    "url": "lessons/operator.html",
    "revision": "7bfefcf9ba73a4236701dd1cddc56cb8"
  },
  {
    "url": "lessons/project-euler.html",
    "revision": "3015cdbc58602cd5a94adccbfb855580"
  },
  {
    "url": "lessons/script.html",
    "revision": "fe334c9ac78340d1aed73c588a22a754"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "1e3e30b7f05cbd24576bc94c2a78aa2a"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "d81093c945e459fc44e9dbdaf886595d"
  },
  {
    "url": "lessons/setup.html",
    "revision": "3587516e35769ff8097b05256f6d39a2"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "e626067d682d7fef1dcd5265b6274a35"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "d127e0b2a7f34f847d0621e1affb722c"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "ba537181b1eef04f15cedae1a3020892"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "2356ed56655b3674f0aec4e1ab50c05b"
  },
  {
    "url": "lessons/virtual-env.html",
    "revision": "998fd343ed81cf6ec05084833a52a76b"
  },
  {
    "url": "logo.png",
    "revision": "4d1bf7683aa0f8aed16f8eb318592c49"
  },
  {
    "url": "tags.html",
    "revision": "9d6a03f8fe9e8fa061aad3c6e27e499c"
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
