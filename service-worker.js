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
    "revision": "31115e1a5d27abb68c19f86a0990c27c"
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
    "url": "assets/js/2.5841a18f.js",
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
    "url": "assets/js/4.36f4d332.js",
    "revision": "6f7baf63f5317675cd8df9d7489c9310"
  },
  {
    "url": "assets/js/5.02118af0.js",
    "revision": "26cb3cb28dd6374ede4fdc88bc619816"
  },
  {
    "url": "assets/js/6.0cc7b23e.js",
    "revision": "76df63db17ae2365d1188aa8a5fd883d"
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
    "url": "assets/js/9.68dea4de.js",
    "revision": "cb85579c21d2cede36ba4e8fb4ce1673"
  },
  {
    "url": "assets/js/app.0e8b1a79.js",
    "revision": "9f9f19c67af9f31254bae889c95f63a5"
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
    "revision": "98d223adad9954dcd942fe94b1d2a080"
  },
  {
    "url": "lessons/another-challenge.html",
    "revision": "e3a5a4f41e20eb78d9d431773a6f1417"
  },
  {
    "url": "lessons/classes-objects.html",
    "revision": "566407cb7134638251a02db84ea8388c"
  },
  {
    "url": "lessons/coding-challenge.html",
    "revision": "29857aca7eae706b643561475a312304"
  },
  {
    "url": "lessons/comment.html",
    "revision": "5c82177541fe1aecfc43302c4eec6d77"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "8894f0a56f5cc9e5d12a51dfe7d8906e"
  },
  {
    "url": "lessons/functions.html",
    "revision": "303e0e3da0a6125074d6d97d99dfe832"
  },
  {
    "url": "lessons/index.html",
    "revision": "bef4fa2483fbe9e7b59ef06556f14cf3"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "75f901c654f93210226100a8aa1fa032"
  },
  {
    "url": "lessons/make-executables.html",
    "revision": "52316fcf2f4d15719dd0a9cda6c49ec5"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "ebfd215706342c4851f539262bb59e79"
  },
  {
    "url": "lessons/modules.html",
    "revision": "9b65331a4e8a1a55d9d76126c4ca3d7c"
  },
  {
    "url": "lessons/operator.html",
    "revision": "33c655fe9f4dd4785b3916c8cada9344"
  },
  {
    "url": "lessons/script.html",
    "revision": "45ad1c88b895ea6deccd9d15e7f44b30"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "a6b6925c2ba1594c923dc13d01c0039c"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "e26f92f51f5579133424642adabf1941"
  },
  {
    "url": "lessons/setup.html",
    "revision": "f9715b2beeef750f84b1acbf5c90a930"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "a1b8b6f41fa50dd504ab6c990e88b84a"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "97cf2b02b5a9b1b4b424466c3532ce89"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "9e720acbfecd30162690dd305ab364a3"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "fe362552558447df2eef8b8934115c6b"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "908b95661e064b67645e0760e1434ef3"
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
