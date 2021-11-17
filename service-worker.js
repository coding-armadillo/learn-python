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
    "revision": "312003980b7b540d0728fd9b8bd4a60b"
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
    "url": "assets/js/app.c58660df.js",
    "revision": "ff06190ec458747c3f6ebe77ad4e823c"
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
    "revision": "a0db8f0aa8a4d1f3a6b7293900a8d237"
  },
  {
    "url": "lessons/another-challenge.html",
    "revision": "f051c42797289184d441517c20fff520"
  },
  {
    "url": "lessons/classes-objects.html",
    "revision": "0327a9b3337a47ed663d92f672a6c200"
  },
  {
    "url": "lessons/coding-challenge.html",
    "revision": "d106c12aca2904bdbaf6206ee222427d"
  },
  {
    "url": "lessons/comment.html",
    "revision": "8dc1b4a1a7a791dc8fb3eae35139e72b"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "5a589518525800261fbfd20e0da0adb7"
  },
  {
    "url": "lessons/functions.html",
    "revision": "0cec31ae9e31f6c03d631a104019a86d"
  },
  {
    "url": "lessons/index.html",
    "revision": "eac4065630d75edba6c489bcba40c4bf"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "f323e14f221e67746710313abeae0424"
  },
  {
    "url": "lessons/make-executables.html",
    "revision": "44c32717a1c65e9fe2962ca4f499d29f"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "472ef53fe6e565447e05bc814846ca70"
  },
  {
    "url": "lessons/modules.html",
    "revision": "f84e025bef1c5ebf0dddacb4378e8e07"
  },
  {
    "url": "lessons/operator.html",
    "revision": "c5d60c11e1e6891d7e4778ad31657546"
  },
  {
    "url": "lessons/script.html",
    "revision": "8721c2e6af82fb9f1fdd3e83858a50f8"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "d6224d507cc69c004730aae05ab7f92e"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "617c1c1e2c6cc2e8f8dbf476890db614"
  },
  {
    "url": "lessons/setup.html",
    "revision": "ca6b2576d910f2cbf6c18e1a668d9ada"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "2120a942028663dd44fb7019418e16e1"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "6376eeccbf9c457019f5189324426f07"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "510366aa29319280a76ebfa73a289fec"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "c41008da9143ea0d85993ffd0ea42fef"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "cfc3a76f6a2e999fc2ff3cd095923748"
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
