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
    "revision": "975397f3a6690d8fc63d62fc63efd16e"
  },
  {
    "url": "assets/css/0.styles.56831745.css",
    "revision": "1ce6b9d49cd972cf97556468c9eb34c0"
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
    "url": "assets/js/10.18add3a3.js",
    "revision": "ee2eb880bc1da4b455a27bb59b5045c1"
  },
  {
    "url": "assets/js/11.9745c4cc.js",
    "revision": "aa934b33c5edea8becc49a9ce6636225"
  },
  {
    "url": "assets/js/12.e37269b6.js",
    "revision": "40b1c1e9de35a17643e0a2e93f80acc1"
  },
  {
    "url": "assets/js/13.340bbce9.js",
    "revision": "452302a90b4a4ac878932dc1b55af976"
  },
  {
    "url": "assets/js/14.a1deadca.js",
    "revision": "918606f27f985a6209e88713cb3ad2b3"
  },
  {
    "url": "assets/js/15.97da9856.js",
    "revision": "4ceeea6d64ea97764cb1319fb24890c5"
  },
  {
    "url": "assets/js/16.eb60e048.js",
    "revision": "70995d6b3a368af3455b5c4e74063fe4"
  },
  {
    "url": "assets/js/17.59f4c3cb.js",
    "revision": "a92af3b71dac9d9297458dbc22094cd1"
  },
  {
    "url": "assets/js/18.b9ca5ae9.js",
    "revision": "47ecc022eafcfb34d168b54d33e17852"
  },
  {
    "url": "assets/js/19.afb732b5.js",
    "revision": "df333ae5e0e232ebf2b89631898e8343"
  },
  {
    "url": "assets/js/2.5841a18f.js",
    "revision": "79ed7f2502a8546be22602e96bb282a5"
  },
  {
    "url": "assets/js/20.0766c2cd.js",
    "revision": "15f805f95eddfc9f47958afc99b8834c"
  },
  {
    "url": "assets/js/21.7c683a3d.js",
    "revision": "3c2b54176e8f2f26a30821a0a9ddee0d"
  },
  {
    "url": "assets/js/22.a1ba17fb.js",
    "revision": "56b185466bdc05c449080d2d4b4bc424"
  },
  {
    "url": "assets/js/23.345071b6.js",
    "revision": "60c0d4a5b5069b8bd947139ead43abdf"
  },
  {
    "url": "assets/js/24.b6d5227a.js",
    "revision": "6028e40375b5de1a0809035bca53d883"
  },
  {
    "url": "assets/js/25.de95ef68.js",
    "revision": "1c8f91590a9bdbd9695e1d41cd451f4a"
  },
  {
    "url": "assets/js/26.2ca8ac94.js",
    "revision": "ef887a5ed265bfe39d8a509d996fc992"
  },
  {
    "url": "assets/js/27.77d05e20.js",
    "revision": "4a4b2739c941386f37025430a1d95eeb"
  },
  {
    "url": "assets/js/28.26cba7cf.js",
    "revision": "e65c65d3da0cdf466dd5dcfc58b15edb"
  },
  {
    "url": "assets/js/29.88b8f5d4.js",
    "revision": "3aefdde3867b7e112c7dead2d47f6b76"
  },
  {
    "url": "assets/js/3.8f0d0b6a.js",
    "revision": "919d127a6a27074a9a43c91dd23b1e24"
  },
  {
    "url": "assets/js/30.ea6b3411.js",
    "revision": "e3c5daf3b95583be4114fc6d4ecc5289"
  },
  {
    "url": "assets/js/31.8305780d.js",
    "revision": "51591a033649fa6c8d23c33d1d5edae7"
  },
  {
    "url": "assets/js/4.ad93e7d0.js",
    "revision": "905990dd999c39d8ff388aab0f65109d"
  },
  {
    "url": "assets/js/5.02118af0.js",
    "revision": "26cb3cb28dd6374ede4fdc88bc619816"
  },
  {
    "url": "assets/js/6.251650b2.js",
    "revision": "70318b49692d242d20b855240129ec0a"
  },
  {
    "url": "assets/js/7.30cee585.js",
    "revision": "abdcf08181eea9293063fcec528f68c0"
  },
  {
    "url": "assets/js/8.e5b244d7.js",
    "revision": "338271bc8dba72f0121734de95be35c1"
  },
  {
    "url": "assets/js/9.0513a223.js",
    "revision": "59be79ffc5cf884db4fe4c6cef16178a"
  },
  {
    "url": "assets/js/app.19fd4e04.js",
    "revision": "9cb4865a3b08877c491ea97c063c397e"
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
    "revision": "cccb02920d9a9c908012118215974d2d"
  },
  {
    "url": "lessons/another-challenge.html",
    "revision": "c6b8dfd429eb9b79a1f0f63c24ef8ece"
  },
  {
    "url": "lessons/coding-challenge.html",
    "revision": "c13ae66e661c9c9d6e0d47de67f3967c"
  },
  {
    "url": "lessons/comment.html",
    "revision": "569f3b5eed114839877edd6dce252777"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "5a5313a5a0134695b20d79169ff751f5"
  },
  {
    "url": "lessons/functions.html",
    "revision": "8ab1de457ec3b904ae3c90185874abf7"
  },
  {
    "url": "lessons/index.html",
    "revision": "87b979717d79e1f80446358f259ab38f"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "08c9f54eaa7f895c413fa11808a72ec4"
  },
  {
    "url": "lessons/make-executables.html",
    "revision": "dc6a24ab10c4e081c4753396ab6c881e"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "60f72fddfcf10f15e6f7ef78b38400e9"
  },
  {
    "url": "lessons/modules.html",
    "revision": "6c4d3b438e45ff0ea1fe6d3de5468ed6"
  },
  {
    "url": "lessons/operator.html",
    "revision": "14ad38a7ace132f10533d7351ed6c5f1"
  },
  {
    "url": "lessons/script.html",
    "revision": "462579833bb2f8fcfd611f2fa0985c9c"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "ad7b054620ed7ce4ee2b448e5ab31d28"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "71239d2b1eb7cc9fa185ba48b24ab143"
  },
  {
    "url": "lessons/setup.html",
    "revision": "4ec770cd836787fd0d8d1dea77035595"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "5b38100ef4f6908587f5e4a5472f9d90"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "a53195b7b7cf2779d71f0edb3253b344"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "59738cd3e062d280d3e6d546f4ebe2f2"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "611ded10cd16cdbeb5e99dc665e070f7"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "3f8aff9ff3d0e5c1b9afefcdf63ddc9b"
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
