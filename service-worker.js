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
    "revision": "af1ed5edb8aedf72e55d4e49a482a02e"
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
    "url": "assets/js/13.9b1e4df9.js",
    "revision": "5d1969eebc3b5956d1471478393ac2e8"
  },
  {
    "url": "assets/js/14.a1deadca.js",
    "revision": "918606f27f985a6209e88713cb3ad2b3"
  },
  {
    "url": "assets/js/15.7ad24fb6.js",
    "revision": "6f67f9cd8d205dd0095c023a847c83ae"
  },
  {
    "url": "assets/js/16.c455ad5e.js",
    "revision": "f7dfe4c3769fb368766865e4fd5bed83"
  },
  {
    "url": "assets/js/17.0aed84ba.js",
    "revision": "6842f70d2ac47448560da75c1ba69b0f"
  },
  {
    "url": "assets/js/18.7ba412e1.js",
    "revision": "b77707467aba4ff54e43baa05b081b0c"
  },
  {
    "url": "assets/js/19.62b0c7d5.js",
    "revision": "de127c5fac4d0adb5d913b205067bb9b"
  },
  {
    "url": "assets/js/2.8f21abc3.js",
    "revision": "79ed7f2502a8546be22602e96bb282a5"
  },
  {
    "url": "assets/js/20.2811bc03.js",
    "revision": "3fd429b7c82545abbec26d453dddcbe6"
  },
  {
    "url": "assets/js/21.96e7d53c.js",
    "revision": "a783317053412916009c16476882eff6"
  },
  {
    "url": "assets/js/22.2deac14a.js",
    "revision": "a3a0667cc7bacecff5795e07bf8c4a45"
  },
  {
    "url": "assets/js/23.2f666057.js",
    "revision": "79f935c3a8b1f79c9c776f9debc8e5c4"
  },
  {
    "url": "assets/js/24.58a4804d.js",
    "revision": "7b67707369d99512714bf4f3dbbaebae"
  },
  {
    "url": "assets/js/25.c0806177.js",
    "revision": "dd314446bdb4b1f4a18d5ad8b7219d1e"
  },
  {
    "url": "assets/js/26.b9ffae4d.js",
    "revision": "a0769990971a344d07d6422aa5b175e2"
  },
  {
    "url": "assets/js/27.f73c3aba.js",
    "revision": "368f2987c47ac1bde1c247439feb5b8c"
  },
  {
    "url": "assets/js/28.9853eb0b.js",
    "revision": "17d422cccc10211eed69017a30a406b9"
  },
  {
    "url": "assets/js/29.11295748.js",
    "revision": "6c13a0549a684b263cd67b7720e97450"
  },
  {
    "url": "assets/js/3.add36436.js",
    "revision": "1f9ca2b1aa6e5c1e58b09c5e1737cec0"
  },
  {
    "url": "assets/js/30.3d44f594.js",
    "revision": "86db5e4383e4250c9e7233501ed2922b"
  },
  {
    "url": "assets/js/31.6f967c89.js",
    "revision": "a0423ff78f7da6fd5392349294d97f7a"
  },
  {
    "url": "assets/js/32.0ef1c68f.js",
    "revision": "c05c90834965d3f8c0167000cb54ba18"
  },
  {
    "url": "assets/js/4.3fbbb536.js",
    "revision": "6f7baf63f5317675cd8df9d7489c9310"
  },
  {
    "url": "assets/js/5.da9de97f.js",
    "revision": "26cb3cb28dd6374ede4fdc88bc619816"
  },
  {
    "url": "assets/js/6.9f24a3bc.js",
    "revision": "76df63db17ae2365d1188aa8a5fd883d"
  },
  {
    "url": "assets/js/7.247fd765.js",
    "revision": "abdcf08181eea9293063fcec528f68c0"
  },
  {
    "url": "assets/js/8.e723193c.js",
    "revision": "338271bc8dba72f0121734de95be35c1"
  },
  {
    "url": "assets/js/9.68dea4de.js",
    "revision": "cb85579c21d2cede36ba4e8fb4ce1673"
  },
  {
    "url": "assets/js/app.e5fbb3bd.js",
    "revision": "21c1482c5cc3b261fe60074d320c9b1b"
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
    "revision": "784998d1daf3648718a28f59a304e5a5"
  },
  {
    "url": "lessons/another-challenge.html",
    "revision": "7657fa950bc329c980d010a08e4f5b8f"
  },
  {
    "url": "lessons/classes-objects.html",
    "revision": "fb140037b8daa7594a0fdbfa5f5f37b8"
  },
  {
    "url": "lessons/coding-challenge.html",
    "revision": "0d257be6a2636fc8df080de72b1dd7ae"
  },
  {
    "url": "lessons/comment.html",
    "revision": "1ba51af2b5c34bdf77a21b7dd188f772"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "158675a2dcdcd8eddaca2f0b55cd624f"
  },
  {
    "url": "lessons/functions.html",
    "revision": "7a9140aefb7e2b5fdb896c45862b3898"
  },
  {
    "url": "lessons/index.html",
    "revision": "4b7449b91c8021adbee1e6f7e964fc82"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "1f07d72d2f04b1a66984f37e17e533a3"
  },
  {
    "url": "lessons/make-executables.html",
    "revision": "547e6d3903b9b7a9bbd0f8dc7faa7b4a"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "3d75408416ee556aa740611b56ba462e"
  },
  {
    "url": "lessons/modules.html",
    "revision": "ac7e7b6e89f5b6a2d707895c4bb7e252"
  },
  {
    "url": "lessons/operator.html",
    "revision": "02d55ffc68f5c3ffde6b869744648329"
  },
  {
    "url": "lessons/script.html",
    "revision": "471f8d5f28a5bda52de7f9ef8c85fead"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "b7b4387f6a07cdd25e3cc9e497bc95f8"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "e96f25c69ba6071eebb9a81a72f1f1e9"
  },
  {
    "url": "lessons/setup.html",
    "revision": "82edf285f8fe202341b21fcd1ad12d21"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "5b9d84b1e5e102c226de5f6d72354159"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "23dee6eca3f03ced72f2aa59c4a79f40"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "c4adbe642e7f4e72382350782d27f9d4"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "4303e9b3cbd5bf4f7aa82ae97b737a56"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "b3a85ab774ac88f58b77ce2a33c22c3b"
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
