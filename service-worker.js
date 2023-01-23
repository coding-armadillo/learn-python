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
    "revision": "04fb4e4c550a7efd18c07635dfe92e98"
  },
  {
    "url": "assets/css/0.styles.b57d0352.css",
    "revision": "7b460f3a53004e765af9a13c204e4a13"
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
    "url": "assets/js/10.ebeab0fc.js",
    "revision": "17b1c0b47a0a4e59af90ca163637eb22"
  },
  {
    "url": "assets/js/11.dcd4a447.js",
    "revision": "7c0ae8601d9f700eae8c1c91f49556eb"
  },
  {
    "url": "assets/js/12.217f4f94.js",
    "revision": "5de80d28e15732233e2c4fd1628cebda"
  },
  {
    "url": "assets/js/13.e4572656.js",
    "revision": "4d438d637c214a38e487f3cf8301a219"
  },
  {
    "url": "assets/js/14.ebbab3a5.js",
    "revision": "e4d8869855f556cb8da0279cb3d46d4e"
  },
  {
    "url": "assets/js/15.be5920e2.js",
    "revision": "c6d722ca48a4097fe59dea737bd1351a"
  },
  {
    "url": "assets/js/16.d03f77b4.js",
    "revision": "6733838ba14123160f3b999726d96fa1"
  },
  {
    "url": "assets/js/17.b21a3b79.js",
    "revision": "8466dc222d773a1ac1537ce379ea06c0"
  },
  {
    "url": "assets/js/18.4f77a902.js",
    "revision": "88b01a19a424fa4e92ef72c2e5f7a577"
  },
  {
    "url": "assets/js/19.339d1008.js",
    "revision": "03c7a42056605f1fcc85536f1982aa3d"
  },
  {
    "url": "assets/js/2.1310877f.js",
    "revision": "73e07b7726862f9d3b34cc10ef474b29"
  },
  {
    "url": "assets/js/20.0e56b065.js",
    "revision": "ac9e7923ce462b595c0266b6a585026e"
  },
  {
    "url": "assets/js/21.9c3be3c1.js",
    "revision": "cc033476cc5a79ea61f033f6374e4c52"
  },
  {
    "url": "assets/js/22.a7ed08ab.js",
    "revision": "cc25f26748b34f21a335ea4894a98e56"
  },
  {
    "url": "assets/js/23.48c8d551.js",
    "revision": "2f821cf7edcfd3940785f3697bb35bd6"
  },
  {
    "url": "assets/js/24.5d115464.js",
    "revision": "ee146d061f88ffdd98ea296ab9cff1a9"
  },
  {
    "url": "assets/js/25.108afcbc.js",
    "revision": "e197a1248a7c3483b62b79952cc064de"
  },
  {
    "url": "assets/js/26.ffe50d09.js",
    "revision": "0d48cdaf3903b884cb42dc074ddf1f63"
  },
  {
    "url": "assets/js/27.c90aa5ac.js",
    "revision": "3cd45f51bbc1f508bb2484b81d9e3964"
  },
  {
    "url": "assets/js/28.52c51987.js",
    "revision": "aacb6803260ba5d46654417ab245fc90"
  },
  {
    "url": "assets/js/29.919e7032.js",
    "revision": "061093846a36bcac729ea2bb1dce3c07"
  },
  {
    "url": "assets/js/3.25cdf4ff.js",
    "revision": "304ed31790275cec527128a9dad5dadb"
  },
  {
    "url": "assets/js/30.317a8b4d.js",
    "revision": "da4e4d601f40f66f586377fbb769aa73"
  },
  {
    "url": "assets/js/31.72bbdcf6.js",
    "revision": "485171757ce8a71c96a8098a4098e978"
  },
  {
    "url": "assets/js/32.62daeb57.js",
    "revision": "5cc7d98514bcfdb88d6cd35a9677fca6"
  },
  {
    "url": "assets/js/33.515ef493.js",
    "revision": "6a1d1f088af3609d74ff4f18cfa70a3c"
  },
  {
    "url": "assets/js/34.f7a7b7bc.js",
    "revision": "b0b4d88a1d77a5d052e627b8c0fc1c33"
  },
  {
    "url": "assets/js/35.81368c61.js",
    "revision": "46b8cfb46940a0a6a9fae7c7a3f7447d"
  },
  {
    "url": "assets/js/4.344757de.js",
    "revision": "7cd999f8ee0ab3f600cf4fa13fdb5275"
  },
  {
    "url": "assets/js/5.045889a0.js",
    "revision": "1b4b904c0ce2f236381c31f431b432b2"
  },
  {
    "url": "assets/js/6.a7b215b9.js",
    "revision": "4c1d94c62da2753d7371093e68e7f0f3"
  },
  {
    "url": "assets/js/7.0dd7fb40.js",
    "revision": "0ef50e3c1d2e881fe5a1428a583250bf"
  },
  {
    "url": "assets/js/8.71e25b93.js",
    "revision": "6a9a68e056a73a6f7cdd834d03163ec8"
  },
  {
    "url": "assets/js/9.a67fd63f.js",
    "revision": "790921dd7bfff067dcf72c1ccd9e1dad"
  },
  {
    "url": "assets/js/app.064b10eb.js",
    "revision": "f9265d2a0ceb93a0cbaf1fda2e0e51b7"
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
    "revision": "226546bb6366b94cb242ee350ad3bb71"
  },
  {
    "url": "lessons/advent-of-code.html",
    "revision": "b84fb87ab74b0b79c1d4921920ec9290"
  },
  {
    "url": "lessons/another-challenge.html",
    "revision": "7cff790bae4000d730489a0761776cbe"
  },
  {
    "url": "lessons/classes-objects.html",
    "revision": "237c266fefd3abb97b5f09159acda2a9"
  },
  {
    "url": "lessons/coding-challenge.html",
    "revision": "146d92b9cbce0378b0c028565e14adce"
  },
  {
    "url": "lessons/comment.html",
    "revision": "16b2eacbd2010c40845f301d4960e98b"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "2f37ed7981d5f64bedaa95d040458d3e"
  },
  {
    "url": "lessons/functions.html",
    "revision": "5e76362720c2d3a175f9ba6bd0e4da15"
  },
  {
    "url": "lessons/index.html",
    "revision": "980b26f875b0bd86fae3dfe547d89e11"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "166e88504fd820f219d3c065a73b2dee"
  },
  {
    "url": "lessons/make-executables.html",
    "revision": "b57cd64a735961f82c7384a5ffe9d59e"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "2c461e3a5910485b546aa155b274378d"
  },
  {
    "url": "lessons/modules.html",
    "revision": "4de522e5cbf7a26596f20171f11b99b0"
  },
  {
    "url": "lessons/operator.html",
    "revision": "2be3718b3ae1a278aec9dae8265f6c3c"
  },
  {
    "url": "lessons/project-euler.html",
    "revision": "82f3164b05ac3ac11d00c00a1e4dec15"
  },
  {
    "url": "lessons/script.html",
    "revision": "8ae5efdd0aaf08d62d70892f2b36b82f"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "15192bb171ad5b902246169e7414fea2"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "df3b443862268c737dccb34e54aebd23"
  },
  {
    "url": "lessons/setup.html",
    "revision": "bc872f134de543cbd1b3e675bca5b032"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "044086d5d2d3441cab3d1bcfa38123b3"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "1e76b608e653f070c7e90e8144446a18"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "720288f488ea034d087e5d49aaa1c21c"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "7c1df00b186f97dea62b34d07534a683"
  },
  {
    "url": "lessons/virtual-env.html",
    "revision": "2bec84c1807195dbfdfc3d78398c20a7"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "5d80a0aff215176c4c3e68fbd72caa50"
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
