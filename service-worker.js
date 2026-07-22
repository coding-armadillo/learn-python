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
    "revision": "8ad04aa90cfe773bba93c4ef011fa4b3"
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
    "url": "assets/js/11.37826257.js",
    "revision": "33d63d5cf72b9e125bc288931704cae4"
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
    "url": "assets/js/24.b729368d.js",
    "revision": "6c5bdddf6e906af5e20e2d49f5d0365e"
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
    "url": "assets/js/28.f1724681.js",
    "revision": "5b8215545053e23808f1b487f36f8798"
  },
  {
    "url": "assets/js/29.f27f86e3.js",
    "revision": "dee20cc2f5025ad9b281fe1e1a8bc4ce"
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
    "url": "assets/js/31.eae43c86.js",
    "revision": "52cce9f1d56708e92471124fc1228130"
  },
  {
    "url": "assets/js/32.b29b622f.js",
    "revision": "2d551bc102136a47bc10063e1054cb6a"
  },
  {
    "url": "assets/js/33.77d86714.js",
    "revision": "125e5612079b0a7b590b800b335476a0"
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
    "url": "assets/js/36.1c8633eb.js",
    "revision": "e88dc563083ec488c3121933e2d31ffe"
  },
  {
    "url": "assets/js/37.7a5d12f3.js",
    "revision": "e4a1df5edd631912a6cce2fa5192dfbb"
  },
  {
    "url": "assets/js/38.3b4e53a1.js",
    "revision": "2aa02b2005608ea01780032068ea68af"
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
    "url": "assets/js/43.8d39977d.js",
    "revision": "e99c150e0fb4d20c2491ba5a65e910cb"
  },
  {
    "url": "assets/js/44.9bee2218.js",
    "revision": "e46bfdaaa4e6ebc1333f20cfe1909378"
  },
  {
    "url": "assets/js/45.cf02d96c.js",
    "revision": "c80c0e1cda586d99c7edeba34f7a1499"
  },
  {
    "url": "assets/js/46.71832f0f.js",
    "revision": "a1c56d14e0b7547418e4f8c19e9da3f3"
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
    "url": "assets/js/49.5daba131.js",
    "revision": "ba42a132dcc261fbcf92b59cdc8ee5b7"
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
    "url": "assets/js/app.17f66357.js",
    "revision": "10c002ff5e635d04e2b6e6bfe438d96f"
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
    "revision": "d6153c9373201d8ed2e1aeeef4b0a48e"
  },
  {
    "url": "lessons/advent-of-code.html",
    "revision": "89967baeb4a761cbced14871a361a25f"
  },
  {
    "url": "lessons/another-challenge.html",
    "revision": "526967a29a4a026f6c5573b69c6fe8b3"
  },
  {
    "url": "lessons/classes-objects.html",
    "revision": "f8fcdb78922be696f366ccd60481b9eb"
  },
  {
    "url": "lessons/coding-challenge.html",
    "revision": "5dda9ee3b2a08271fc8b189c0a0bad26"
  },
  {
    "url": "lessons/comment.html",
    "revision": "2326d2371879e6b9dae081fad2805076"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "a97d5dda6ff049b0742b74b2cf42062f"
  },
  {
    "url": "lessons/functions.html",
    "revision": "8899e42b63dbe1f07c9df71bc1b7b204"
  },
  {
    "url": "lessons/index.html",
    "revision": "d44dd0286bf28804271757e3569ad67a"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "90e78fa8a13aba0db13a4152a6f2a796"
  },
  {
    "url": "lessons/make-executables.html",
    "revision": "0f39cd82a8031de1ac39f9216fbc2c08"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "bdc37d019eb9306dd4db279fcc748962"
  },
  {
    "url": "lessons/modules.html",
    "revision": "e8640c0d5bd76eb9b101f3b09d902413"
  },
  {
    "url": "lessons/operator.html",
    "revision": "46193a1e18800e2953f6d828e169120a"
  },
  {
    "url": "lessons/project-euler.html",
    "revision": "2238b410234aea249e71e8a93e51b153"
  },
  {
    "url": "lessons/script.html",
    "revision": "8620005b99d627e78f71f65f1723e1da"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "d91251debc54bf483cf01f66cd5de3ad"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "60774712cafe8850267f7f96d3854d2f"
  },
  {
    "url": "lessons/setup.html",
    "revision": "3ae0c53310d9f30dd768f567ef9faf17"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "792e623e8e0fd48b1502485b76f97e73"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "ab23be502bbfcbade4812934d3827122"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "df2cd05e814cfbccda90bcf8cc8ed78a"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "dd3068b551cf332541f5022a3919f34b"
  },
  {
    "url": "lessons/virtual-env.html",
    "revision": "657edf7adff474189daec0906f9a1207"
  },
  {
    "url": "logo.png",
    "revision": "4d1bf7683aa0f8aed16f8eb318592c49"
  },
  {
    "url": "tags.html",
    "revision": "04be2a0aec6b401253190d4dcc616624"
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
