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
    "revision": "5b1decc4edc27e6fbda88e851bfe6b7b"
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
    "url": "assets/js/14.54b8213a.js",
    "revision": "0e13d2a3dc450fce9f9c4c2c609e1fef"
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
    "url": "assets/js/19.7e27bdbe.js",
    "revision": "67e2aa0db7a54d1cb4cc2a6c7766e835"
  },
  {
    "url": "assets/js/2.d57ee058.js",
    "revision": "48d51ef63a6f6648f3c571c7ef315e4b"
  },
  {
    "url": "assets/js/20.31fd914e.js",
    "revision": "3cf8ee9be48009bdccacee206c073850"
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
    "url": "assets/js/25.5ff264ec.js",
    "revision": "fa56e9cbe36af4222cfaa0a6953f4970"
  },
  {
    "url": "assets/js/26.f14dceec.js",
    "revision": "3338dca97606e8033809b07437ed3c95"
  },
  {
    "url": "assets/js/27.36a6596d.js",
    "revision": "0bf0322c7c583184188da39675d9496e"
  },
  {
    "url": "assets/js/28.41cfd84b.js",
    "revision": "c9f64546aefe4e54a67761717c6db543"
  },
  {
    "url": "assets/js/29.fa9389e7.js",
    "revision": "52c1a7d8a0e2d956c72536c506feb314"
  },
  {
    "url": "assets/js/3.1a3ebee3.js",
    "revision": "b891a6ed3c0f54e2465a0668364d4e6c"
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
    "url": "assets/js/9.92b65bca.js",
    "revision": "33449866461afd7a2ed74e68734e32b9"
  },
  {
    "url": "assets/js/app.03bf7488.js",
    "revision": "2e4f5f76441fc97cf8e03d2dbfedfde7"
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
    "revision": "2b7f41a85bbfc21f7c8202dedb0ce0a5"
  },
  {
    "url": "lessons/another-challenge.html",
    "revision": "d7308e1486bf61765ff88c9724ef1900"
  },
  {
    "url": "lessons/comment.html",
    "revision": "03ef4c914187aafe37c272c10680467c"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "829b59a6d97b75ec9fcdbfe27642cc74"
  },
  {
    "url": "lessons/functions.html",
    "revision": "a27bf5e71541f2c0a3c361930fefd7d5"
  },
  {
    "url": "lessons/index.html",
    "revision": "79e43a58957f3ac1f5f5bac3fe4320e6"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "bf36be49351e512ffabc157e1abfa09f"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "1150308ad2b97091d485f0b3c9733b40"
  },
  {
    "url": "lessons/modules.html",
    "revision": "5b05ee315c8b425da99753161fc99c8a"
  },
  {
    "url": "lessons/operator.html",
    "revision": "ff58b79745089928ab0d0f5ba9cda374"
  },
  {
    "url": "lessons/script.html",
    "revision": "d3d6f8ca396b32eaa7e125deba53387c"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "454ce01513c780da6ed8a3a619e8204d"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "b6aba216adab597bbea10170ef3ba445"
  },
  {
    "url": "lessons/setup.html",
    "revision": "8649ac4fbc68a6a3bc7d8a2616a38102"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "f9e374d1f972a467086eea53fac33323"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "4f58ae67bf62cd18d989d31bb0750ee2"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "41705ec272405397c4d383db41e8e10a"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "ca2eeb36da3d661bf241fc0a15105c5f"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "e5e500ac23ab146596d770809c65da78"
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
