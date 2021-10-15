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
    "revision": "1658c174359e204a45e6e76c37e5ba28"
  },
  {
    "url": "assets/css/0.styles.90897c6f.css",
    "revision": "89af5f5d8cc1a883cd7a8faad48db6f5"
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
    "url": "assets/js/10.55ef3fed.js",
    "revision": "15aad54c0957c8565ba2a4d7026ed51e"
  },
  {
    "url": "assets/js/11.78b30818.js",
    "revision": "47984f0d6871b7fbc57408068c1dd94e"
  },
  {
    "url": "assets/js/12.ad5fd79e.js",
    "revision": "5fa0f2a5d3e57b1108dc3faf74c0817a"
  },
  {
    "url": "assets/js/13.0716a6e9.js",
    "revision": "f6c0724b728527ab52a7273a26cb7bcd"
  },
  {
    "url": "assets/js/14.13b70052.js",
    "revision": "df9458d34337a1b0da1216bc4b3d90d2"
  },
  {
    "url": "assets/js/15.2f3f1d6a.js",
    "revision": "2375f6764df00fe621e8a3c78dca05bc"
  },
  {
    "url": "assets/js/16.c4e31c10.js",
    "revision": "6395e9ef4d0a40fdcbd6dc51b8e8875d"
  },
  {
    "url": "assets/js/17.6c8d8b3f.js",
    "revision": "edb21e116c7402d8e5891a6d063437d6"
  },
  {
    "url": "assets/js/18.80bdc76e.js",
    "revision": "d83691cedb65905c18f148c0e72ebe93"
  },
  {
    "url": "assets/js/19.c3e3f9bc.js",
    "revision": "069cba49713547118e9d543032dc201b"
  },
  {
    "url": "assets/js/2.d57ee058.js",
    "revision": "48d51ef63a6f6648f3c571c7ef315e4b"
  },
  {
    "url": "assets/js/20.2cf3491f.js",
    "revision": "4b09dd735f2a13dda194990876126822"
  },
  {
    "url": "assets/js/21.fb50920f.js",
    "revision": "47cff5bdffa5fe53ee41d71f7dbbd6f9"
  },
  {
    "url": "assets/js/22.14ea6f8d.js",
    "revision": "3bb47fc72d46b79053ee4f36fb653fd6"
  },
  {
    "url": "assets/js/23.355c15a1.js",
    "revision": "6766404a079a56d266e111f8b0db38c4"
  },
  {
    "url": "assets/js/24.ac3ff3c7.js",
    "revision": "bd8b750c59aacb61255eaf3cee07cf47"
  },
  {
    "url": "assets/js/25.ba60a992.js",
    "revision": "8578ddcd526713c9fe51a5ee20b7b508"
  },
  {
    "url": "assets/js/26.ba61ed98.js",
    "revision": "9d913774eb7dab49822cb1218df13b15"
  },
  {
    "url": "assets/js/27.7390d7d9.js",
    "revision": "050bb78082a321f6f53968e353f55823"
  },
  {
    "url": "assets/js/28.b3b04323.js",
    "revision": "0411eeac60bb544d41f434adebc93a2b"
  },
  {
    "url": "assets/js/29.fa9389e7.js",
    "revision": "52c1a7d8a0e2d956c72536c506feb314"
  },
  {
    "url": "assets/js/3.1e645407.js",
    "revision": "f82e2bb6597952a964210aa4a57c63b6"
  },
  {
    "url": "assets/js/4.4c966718.js",
    "revision": "fd973af9fd732128b433df8cf303b955"
  },
  {
    "url": "assets/js/5.6fb23237.js",
    "revision": "1f52c6114df86e70b7d56e9cd2017b1e"
  },
  {
    "url": "assets/js/6.1303654b.js",
    "revision": "5a1b712acf1c9e67ae677c8484f7ca4c"
  },
  {
    "url": "assets/js/7.aa2fb779.js",
    "revision": "58409f50aa488b6d02596ebf1e3d7c2f"
  },
  {
    "url": "assets/js/8.0d6d03b9.js",
    "revision": "1d61f28a5323364f10c0eb98b79a9d9c"
  },
  {
    "url": "assets/js/9.0f88aeee.js",
    "revision": "4f61da5b98ef838b03815ed4096f2615"
  },
  {
    "url": "assets/js/app.2370ff06.js",
    "revision": "77474488638dc797b0414d4dd48735fd"
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
    "revision": "f29c45f8961c0d237754a17d43c1cea4"
  },
  {
    "url": "lessons/another-challenge.html",
    "revision": "78ac77d76f3f06bb130f6a185255f89d"
  },
  {
    "url": "lessons/comment.html",
    "revision": "01807e4876174fab8241604dd5411c63"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "112fb6354f13d3191853b3346b558ac6"
  },
  {
    "url": "lessons/functions.html",
    "revision": "b7d2f1021140dc9969bec33214e8ccfa"
  },
  {
    "url": "lessons/index.html",
    "revision": "328f929ef3cd2c5f06263dbb831c95c0"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "d358ab6555297a5e4c29d481f8c5005a"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "318201b16fda3f028077d13a06050610"
  },
  {
    "url": "lessons/modules.html",
    "revision": "5928298f54a5efb51b0ae914d9c9fd60"
  },
  {
    "url": "lessons/operator.html",
    "revision": "ec3281258fa00cf271f3d31568d8c1ce"
  },
  {
    "url": "lessons/script.html",
    "revision": "97ce571f4785713ee370f236db1ca80a"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "cb05d259ee53875c881c7aa3c1d4ea10"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "8837b6a7d2fa4be7ffe1f733fe99fd7f"
  },
  {
    "url": "lessons/setup.html",
    "revision": "449d4211d9b8e4aca1c4d2d84634dbc2"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "95dde2a81580aea2fea82a7db52d0d5b"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "a7d15a888ae38aa8adee547c6a2bd1fe"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "80ce63291d880c7806a1c53641cef017"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "755a9fb7ab7a6d6030ee69807f554245"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "856f7acf900a2148c8f3edf4ef9c9cde"
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
