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
    "revision": "0aaa6c97a2516fdebb5fc738547deae5"
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
    "url": "assets/js/15.afd60369.js",
    "revision": "567b6ac5e66536981fbd45c5e4896c55"
  },
  {
    "url": "assets/js/16.a8c7a834.js",
    "revision": "f65db4f03c3ab056b2bf64c869b5be55"
  },
  {
    "url": "assets/js/17.3b4f41bb.js",
    "revision": "8ccc80c0e663863145369c501deef41e"
  },
  {
    "url": "assets/js/18.7cbf0ee3.js",
    "revision": "daca3224c753a49636ec4cc9dbe66aec"
  },
  {
    "url": "assets/js/19.b1783cf8.js",
    "revision": "6e8d3443bb49f763fe4354f261842ea9"
  },
  {
    "url": "assets/js/2.1310877f.js",
    "revision": "73e07b7726862f9d3b34cc10ef474b29"
  },
  {
    "url": "assets/js/20.854cdc3b.js",
    "revision": "2ac6168c0a0d6434145ca1f1ea25521a"
  },
  {
    "url": "assets/js/21.0f61735b.js",
    "revision": "3b265ef5ac7b1af11b933395121fe11e"
  },
  {
    "url": "assets/js/22.9b5d0bfa.js",
    "revision": "d729008042588bcac53aa24a82a3a08f"
  },
  {
    "url": "assets/js/23.00cc17bb.js",
    "revision": "d87acba288daa8997f58ec2f0b2bdc0e"
  },
  {
    "url": "assets/js/24.788177bd.js",
    "revision": "223c2846cf8d2a4a77f6534bef2745bc"
  },
  {
    "url": "assets/js/25.201950ff.js",
    "revision": "704d7eb9e682c28ee53466951db55b67"
  },
  {
    "url": "assets/js/26.ad92841f.js",
    "revision": "94a32b4baa37d0055c679e7dcdc6fc92"
  },
  {
    "url": "assets/js/27.6a885872.js",
    "revision": "7a3100cf84f57c6922b595531fa0d1f9"
  },
  {
    "url": "assets/js/28.b26357f1.js",
    "revision": "0b8ab7063cfdeb8bd82fe451dcf7acec"
  },
  {
    "url": "assets/js/29.7fba8dd8.js",
    "revision": "9f3f0ca00fb56e18a1757d605f93a4a3"
  },
  {
    "url": "assets/js/3.e8c77c01.js",
    "revision": "c70f74a7f4b671fa8fabb12ccb0736f6"
  },
  {
    "url": "assets/js/30.7d4182b0.js",
    "revision": "fd49647473cf404f7df02505e16478c8"
  },
  {
    "url": "assets/js/31.ad99edbb.js",
    "revision": "49987ae3dd5533e4baa26191a22ba4ac"
  },
  {
    "url": "assets/js/32.a949b6c6.js",
    "revision": "e59bea76c919389ca866f1da329bf1e6"
  },
  {
    "url": "assets/js/33.31579105.js",
    "revision": "913db2f2f21c7d4aef3ffeb56f45305b"
  },
  {
    "url": "assets/js/34.c3478be5.js",
    "revision": "a9f1ada9b4b2a19c484ef76839a6d9cb"
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
    "url": "assets/js/9.2d782dd4.js",
    "revision": "a1074d271a92f89a668d11889c1788b6"
  },
  {
    "url": "assets/js/app.7c5cbad6.js",
    "revision": "c9045d4dccab3380d6a6c96555628be5"
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
    "revision": "13bb0b2ca8e7469f85267951a32facb5"
  },
  {
    "url": "lessons/advent-of-code.html",
    "revision": "5a5bc841fa9e69dde9a21c3ca87b19f4"
  },
  {
    "url": "lessons/another-challenge.html",
    "revision": "b7814ac2f013b17995b9ab3b47dde092"
  },
  {
    "url": "lessons/classes-objects.html",
    "revision": "bd4a30cdd9c1b94832b2046ee14f1135"
  },
  {
    "url": "lessons/coding-challenge.html",
    "revision": "8915f476cdd0aa3e80a65f225972407f"
  },
  {
    "url": "lessons/comment.html",
    "revision": "fa37cdd4d335f7e530e885345bcfbee7"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "175c7d9feaa613fbfa4812e5080a6ed3"
  },
  {
    "url": "lessons/functions.html",
    "revision": "0aea9ac21751dc5d4092f04412610e6b"
  },
  {
    "url": "lessons/index.html",
    "revision": "412a826ecb0fbf1698ce0137b2abdaa9"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "03b3e58d5f7739f67bde0c3f44788080"
  },
  {
    "url": "lessons/make-executables.html",
    "revision": "763978cc7c5938e57f2c300ee12dada1"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "f93c1977058aa1cab42abd609c135ad8"
  },
  {
    "url": "lessons/modules.html",
    "revision": "86a92d31f8a5ad0dc54377203975a633"
  },
  {
    "url": "lessons/operator.html",
    "revision": "f8d26e9270887b3ef928de76ae4c3667"
  },
  {
    "url": "lessons/project-euler.html",
    "revision": "f6767e6239c707055c6b7adfb02d787d"
  },
  {
    "url": "lessons/script.html",
    "revision": "ac1063d9ee099a3e4a29070b6eda9c3b"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "662721b16620d646f38ae4b26bcbb154"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "8e4be16b6aa0d4fd39ada9a57b15048a"
  },
  {
    "url": "lessons/setup.html",
    "revision": "9fd105c3aa5ade8d7a5b3bdb603ddbb1"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "688495391317dc2bfb27ad15f6eb424f"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "8a7b326ed5ddb3d9047de53efc8a11cd"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "59adbe5e36f116fdc50d467521b140b7"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "3b7a9fe46ba5631ce4fd0ab530bee54b"
  },
  {
    "url": "lessons/virtual-env.html",
    "revision": "a3f184649ccf6c3d2db40b4a93db99ec"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "1ba84e086389064606c6f0b8da462bad"
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
