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
    "revision": "f7606208fdc39d4ca1d704109094b38f"
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
    "url": "assets/js/24.2dd09b87.js",
    "revision": "59159b3b6b73aeb0a27b398ff0a936ef"
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
    "url": "assets/js/40.01ac69c8.js",
    "revision": "55138a68dda608ffa4c61df55df3eff2"
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
    "url": "assets/js/46.0b3d01d9.js",
    "revision": "25e99b1401e0809d89d7bb3754f9ab07"
  },
  {
    "url": "assets/js/47.fb7069fd.js",
    "revision": "81c936b97b10b4dd6ba15e739f1d956f"
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
    "url": "assets/js/app.654e6cb7.js",
    "revision": "2e137f552034bf2da821c611ef650e1b"
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
    "revision": "6338a40f74775b23701bbddf753ce225"
  },
  {
    "url": "lessons/advent-of-code.html",
    "revision": "966d8a99418821410c257d3a5f1a8522"
  },
  {
    "url": "lessons/another-challenge.html",
    "revision": "45693577a4ba382c86b0a9ab05433312"
  },
  {
    "url": "lessons/classes-objects.html",
    "revision": "a57ac398a7dc55f1f46aa96a17fb6732"
  },
  {
    "url": "lessons/coding-challenge.html",
    "revision": "ffd507c522f17e3b998f5fd603e61da9"
  },
  {
    "url": "lessons/comment.html",
    "revision": "fdfbb71f6ba0173a447b5c0cdec52f15"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "dfeba9c38405e42d5f9286475dd098c1"
  },
  {
    "url": "lessons/functions.html",
    "revision": "cc138c62cbe53b89e9e77f4d2e32c862"
  },
  {
    "url": "lessons/index.html",
    "revision": "0e406525b5fab61287441bbe730e36d5"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "671b225580cefa8a2b855d752ef61b0d"
  },
  {
    "url": "lessons/make-executables.html",
    "revision": "2f8c6220ecb4d9500ecf6724318e6ba7"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "953b2cbe4187e680496d938fd9a330d1"
  },
  {
    "url": "lessons/modules.html",
    "revision": "a1004dba245607c4be45060532761a52"
  },
  {
    "url": "lessons/operator.html",
    "revision": "077c6b9e2e5202fafa944a4e427ff084"
  },
  {
    "url": "lessons/project-euler.html",
    "revision": "86c07c8154b72a4da43deb916c6b6df0"
  },
  {
    "url": "lessons/script.html",
    "revision": "8e2a5fc2e1e7925231207e215afba67f"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "fe5495eb0dcc112071e42564f00d2491"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "00a629a956662a62cead2742d6a3ce57"
  },
  {
    "url": "lessons/setup.html",
    "revision": "7a988d9d831d8e54418dd4522c5b13c5"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "78ac96db78c79cf658f9cc2a8a3c11d4"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "32c7d06b9d9dd6d429f319ea640ef464"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "0bc877637fa69536621fa2fc35de8a9f"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "83ea0fc6e6bb6b109a4478a4de08728b"
  },
  {
    "url": "lessons/virtual-env.html",
    "revision": "a9c04b17e9d8a69cf26aef6a9b801b04"
  },
  {
    "url": "logo.png",
    "revision": "4d1bf7683aa0f8aed16f8eb318592c49"
  },
  {
    "url": "tags.html",
    "revision": "4f3f0e8e335ae8b4cff44981f64cac01"
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
