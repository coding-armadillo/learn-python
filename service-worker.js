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
    "revision": "a5a5a67ae9cebe534e9cbc2ddbe6fcd8"
  },
  {
    "url": "assets/css/0.styles.9cf0e6a3.css",
    "revision": "7e40155402f3e55ad5d34055329ac856"
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
    "url": "assets/js/10.1a9cbcf7.js",
    "revision": "17b1c0b47a0a4e59af90ca163637eb22"
  },
  {
    "url": "assets/js/11.e04e8cf4.js",
    "revision": "7c0ae8601d9f700eae8c1c91f49556eb"
  },
  {
    "url": "assets/js/12.7c46e41a.js",
    "revision": "5de80d28e15732233e2c4fd1628cebda"
  },
  {
    "url": "assets/js/13.b8edc029.js",
    "revision": "4d438d637c214a38e487f3cf8301a219"
  },
  {
    "url": "assets/js/14.9dcaec29.js",
    "revision": "e4d8869855f556cb8da0279cb3d46d4e"
  },
  {
    "url": "assets/js/15.34de98dd.js",
    "revision": "c6d722ca48a4097fe59dea737bd1351a"
  },
  {
    "url": "assets/js/16.26d0cc3c.js",
    "revision": "6733838ba14123160f3b999726d96fa1"
  },
  {
    "url": "assets/js/17.197e1d45.js",
    "revision": "8466dc222d773a1ac1537ce379ea06c0"
  },
  {
    "url": "assets/js/18.e7bceb57.js",
    "revision": "88b01a19a424fa4e92ef72c2e5f7a577"
  },
  {
    "url": "assets/js/19.85274575.js",
    "revision": "03c7a42056605f1fcc85536f1982aa3d"
  },
  {
    "url": "assets/js/2.c1897243.js",
    "revision": "73e07b7726862f9d3b34cc10ef474b29"
  },
  {
    "url": "assets/js/20.37e94e9c.js",
    "revision": "ac9e7923ce462b595c0266b6a585026e"
  },
  {
    "url": "assets/js/21.7adc6bf1.js",
    "revision": "cc033476cc5a79ea61f033f6374e4c52"
  },
  {
    "url": "assets/js/22.39ce4d54.js",
    "revision": "cc25f26748b34f21a335ea4894a98e56"
  },
  {
    "url": "assets/js/23.79f1242a.js",
    "revision": "2f821cf7edcfd3940785f3697bb35bd6"
  },
  {
    "url": "assets/js/24.7b3c4e73.js",
    "revision": "ee146d061f88ffdd98ea296ab9cff1a9"
  },
  {
    "url": "assets/js/25.02ecded5.js",
    "revision": "e197a1248a7c3483b62b79952cc064de"
  },
  {
    "url": "assets/js/26.71f4c9f5.js",
    "revision": "0d48cdaf3903b884cb42dc074ddf1f63"
  },
  {
    "url": "assets/js/27.53a4c2e1.js",
    "revision": "3cd45f51bbc1f508bb2484b81d9e3964"
  },
  {
    "url": "assets/js/28.8883db2d.js",
    "revision": "aacb6803260ba5d46654417ab245fc90"
  },
  {
    "url": "assets/js/29.0bb63eea.js",
    "revision": "061093846a36bcac729ea2bb1dce3c07"
  },
  {
    "url": "assets/js/3.bee10210.js",
    "revision": "304ed31790275cec527128a9dad5dadb"
  },
  {
    "url": "assets/js/30.db00068b.js",
    "revision": "da4e4d601f40f66f586377fbb769aa73"
  },
  {
    "url": "assets/js/31.c0bad81c.js",
    "revision": "485171757ce8a71c96a8098a4098e978"
  },
  {
    "url": "assets/js/32.5af6ed10.js",
    "revision": "5cc7d98514bcfdb88d6cd35a9677fca6"
  },
  {
    "url": "assets/js/33.c0091fe0.js",
    "revision": "6a1d1f088af3609d74ff4f18cfa70a3c"
  },
  {
    "url": "assets/js/34.a0a1cd6d.js",
    "revision": "b0b4d88a1d77a5d052e627b8c0fc1c33"
  },
  {
    "url": "assets/js/35.81368c61.js",
    "revision": "46b8cfb46940a0a6a9fae7c7a3f7447d"
  },
  {
    "url": "assets/js/4.8b99c02e.js",
    "revision": "7cd999f8ee0ab3f600cf4fa13fdb5275"
  },
  {
    "url": "assets/js/5.42e74fff.js",
    "revision": "1b4b904c0ce2f236381c31f431b432b2"
  },
  {
    "url": "assets/js/6.a7b215b9.js",
    "revision": "4c1d94c62da2753d7371093e68e7f0f3"
  },
  {
    "url": "assets/js/7.baccc264.js",
    "revision": "0ef50e3c1d2e881fe5a1428a583250bf"
  },
  {
    "url": "assets/js/8.f1bf43e4.js",
    "revision": "6a9a68e056a73a6f7cdd834d03163ec8"
  },
  {
    "url": "assets/js/9.777b3b9e.js",
    "revision": "790921dd7bfff067dcf72c1ccd9e1dad"
  },
  {
    "url": "assets/js/app.0c9cab06.js",
    "revision": "96cbd5a709048cdb75deba2f146bf5a0"
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
    "revision": "9bd4cd6d95aed4c83fa4a33e1bdd5b84"
  },
  {
    "url": "lessons/advent-of-code.html",
    "revision": "17a92f5e5eb43cfa151d903e9f87c596"
  },
  {
    "url": "lessons/another-challenge.html",
    "revision": "4ed63d96231b30574408b1737666f55b"
  },
  {
    "url": "lessons/classes-objects.html",
    "revision": "a9a7b61f166e4775613292af76eff021"
  },
  {
    "url": "lessons/coding-challenge.html",
    "revision": "c44fe78ad6c2e2e4195dac6a8dce5d51"
  },
  {
    "url": "lessons/comment.html",
    "revision": "e3d08b60d98d53b49be340d06432a9e7"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "5df6785742d053942f55e82f2fc6ed2a"
  },
  {
    "url": "lessons/functions.html",
    "revision": "cfda4abb8db2e886f0953197f807192d"
  },
  {
    "url": "lessons/index.html",
    "revision": "6a9bd6559a897e15235a704e5d3e4ce9"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "6900bd18bd5d0cbc7ddbdb22b6b03ee9"
  },
  {
    "url": "lessons/make-executables.html",
    "revision": "afaa9a3aac5dffc3a502c8b5067553b3"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "5cd2319f5b5b3ac772cd4844eecdebf4"
  },
  {
    "url": "lessons/modules.html",
    "revision": "27cca7a0d52db01d985cc112e8cccdcf"
  },
  {
    "url": "lessons/operator.html",
    "revision": "97b5fa5f494bb8a921172b2a2db35e92"
  },
  {
    "url": "lessons/project-euler.html",
    "revision": "9fa45a858e3f320caa562adbde118db5"
  },
  {
    "url": "lessons/script.html",
    "revision": "dcae5b83b82cad0b41c263278da9da9f"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "d80fe7805a5d613872721faef90741e1"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "42f24fdb1af52bb362e1bce913af5639"
  },
  {
    "url": "lessons/setup.html",
    "revision": "87e935294c01934114a13d77c14f0962"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "05e7acd9e10f148ce00eebceb57950c7"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "3b29e37f6e0acbacbd4d29a976f119ab"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "fa7ccf77d2a2b0b133f2799a3b9128e5"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "5f478ea6ccdb1a56a59f536a30685970"
  },
  {
    "url": "lessons/virtual-env.html",
    "revision": "1249d6dc4c79a9bb3acf496ef382ed52"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "46a8017c8bfdff87467bc21b338ff694"
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
