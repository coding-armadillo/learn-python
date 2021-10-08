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
    "revision": "3de6210f68d86e8efae25f8553e9fd2b"
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
    "url": "assets/js/13.13412d14.js",
    "revision": "049e65ef5289e7f0369d7c1a12d6ab55"
  },
  {
    "url": "assets/js/14.4f30a87f.js",
    "revision": "d81b94061a7a2bd857c6f1f80b025fc3"
  },
  {
    "url": "assets/js/15.b5b2d1ae.js",
    "revision": "d8f0d05506ca085980a81a63a1b4102d"
  },
  {
    "url": "assets/js/16.c057a384.js",
    "revision": "25f8f18837cfb630a3b11b7da7459204"
  },
  {
    "url": "assets/js/17.62d7e6b8.js",
    "revision": "ee4add24a5b9d7b14bfce04a0436d8d9"
  },
  {
    "url": "assets/js/18.7c506e77.js",
    "revision": "6d3893920a64634c5739cb8152593c31"
  },
  {
    "url": "assets/js/19.302ecfea.js",
    "revision": "c8c51a95f6e9dfdf808162829471c19a"
  },
  {
    "url": "assets/js/2.d57ee058.js",
    "revision": "48d51ef63a6f6648f3c571c7ef315e4b"
  },
  {
    "url": "assets/js/20.998ffb2f.js",
    "revision": "c324e7d24750e4be2c59bebad484fb4f"
  },
  {
    "url": "assets/js/21.c66cb7b5.js",
    "revision": "3f2a45984fc8657849eae509116d28ff"
  },
  {
    "url": "assets/js/22.33297e22.js",
    "revision": "0608857db5f2e08ce559fca413932ebe"
  },
  {
    "url": "assets/js/23.b24a1984.js",
    "revision": "b0fb53071b462efaac38ba9c655846c8"
  },
  {
    "url": "assets/js/24.38f925ca.js",
    "revision": "7d8c43fb47c6d3665c9a069817353cf2"
  },
  {
    "url": "assets/js/25.b34da416.js",
    "revision": "1887b4cccbc9ee6ab98d880eea37e556"
  },
  {
    "url": "assets/js/26.f5f6e2ca.js",
    "revision": "d8059bb44dc18cdad6254ad1a69efbd7"
  },
  {
    "url": "assets/js/27.6b4a3d5a.js",
    "revision": "f969ee44ddb2931ccc6cfd5707012e6b"
  },
  {
    "url": "assets/js/28.58a7b162.js",
    "revision": "ab2d27882fe398a8243f3b46e914472e"
  },
  {
    "url": "assets/js/3.b5e641e9.js",
    "revision": "83b2545ed3484cad11a7b4c916517ef4"
  },
  {
    "url": "assets/js/4.23467a40.js",
    "revision": "0a039dc448f0200f9927831642cbaef0"
  },
  {
    "url": "assets/js/5.6fb23237.js",
    "revision": "1f52c6114df86e70b7d56e9cd2017b1e"
  },
  {
    "url": "assets/js/6.dcd050e8.js",
    "revision": "6e21934cf521a28c44ee10f2532d5004"
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
    "url": "assets/js/app.11fc182e.js",
    "revision": "306c6f043cd8dc9939d62af7dd33c19a"
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
    "revision": "8344e8fc18cce1ced2553b9b56c661bc"
  },
  {
    "url": "lessons/comment.html",
    "revision": "f72e15b2da05baf3b130f9cc4177b4f0"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "4a192251debca2cca2efd40cfe9425cc"
  },
  {
    "url": "lessons/functions.html",
    "revision": "d6006ed27d8157f5f723085328306140"
  },
  {
    "url": "lessons/index.html",
    "revision": "d5a1329f506ef01d7f564d1932b4e4fd"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "9fffaac3b6ed18fa8964abc1dfd3c954"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "5c2e1d327f0e3b0ec890cadb5b367c5a"
  },
  {
    "url": "lessons/modules.html",
    "revision": "afac8c6fa61cc1397075704a9bc782ec"
  },
  {
    "url": "lessons/operator.html",
    "revision": "59ed7e5893fe8aa6f6494f19ee39bc14"
  },
  {
    "url": "lessons/script.html",
    "revision": "78a5a2ed2941c0d0c36de76594ae4edf"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "9ce2147860ce1995ce44ad648a8ee5dc"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "64fc23a9fac8d3d05631dbda666e6d2c"
  },
  {
    "url": "lessons/setup.html",
    "revision": "4e2c895bc4cff284577e58a252a2a807"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "f9f60c284b692bafb12c3e5b211ce455"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "740edac54a1153f52206701dfc5d2e01"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "36ba352fbd38c5d45b5de962df36c8dc"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "877dc6f5a4788c11d1ea80bb66ce0d96"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "e61c801fae1e6716d4fa3abc792ee97d"
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
