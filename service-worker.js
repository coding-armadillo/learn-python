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
    "revision": "0aabebbc48f9a96b59dd351b31b20757"
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
    "url": "assets/js/13.3478879d.js",
    "revision": "763b6697434ef40d18fb4035370e4123"
  },
  {
    "url": "assets/js/14.a1deadca.js",
    "revision": "918606f27f985a6209e88713cb3ad2b3"
  },
  {
    "url": "assets/js/15.073b23a7.js",
    "revision": "ca31250660d12d28d23358cd0a54e718"
  },
  {
    "url": "assets/js/16.ed86c94a.js",
    "revision": "03dbc3adb47a2e03ce83d31c2d87bcef"
  },
  {
    "url": "assets/js/17.b3ff78e4.js",
    "revision": "e9935a3823300e59823749fbb9dfed9d"
  },
  {
    "url": "assets/js/18.a30370c9.js",
    "revision": "d5db807a73fb96573e2c3f08e12c1ef8"
  },
  {
    "url": "assets/js/19.5a82b2c1.js",
    "revision": "0f519ae8be85178f7206fe1397406d10"
  },
  {
    "url": "assets/js/2.5841a18f.js",
    "revision": "79ed7f2502a8546be22602e96bb282a5"
  },
  {
    "url": "assets/js/20.b12715d6.js",
    "revision": "07a86ab0782e9a89badf5abf27d1cf5d"
  },
  {
    "url": "assets/js/21.8495d9da.js",
    "revision": "a5539eaa9dfd4b5240c66f1faca17bb7"
  },
  {
    "url": "assets/js/22.9949de9e.js",
    "revision": "4e3924ffb1e9b5b83e7d323a133a5c48"
  },
  {
    "url": "assets/js/23.a6efe7b9.js",
    "revision": "71eed2234afb8b5b203450ec0cd36dd8"
  },
  {
    "url": "assets/js/24.2962e95f.js",
    "revision": "169a102ddd16ab54e0875107b31dff56"
  },
  {
    "url": "assets/js/25.3ba5a0b3.js",
    "revision": "1601c377adbdf680a12b11759fa8b730"
  },
  {
    "url": "assets/js/26.7481418a.js",
    "revision": "15f3392a0a30fa5c160166fdd32717a5"
  },
  {
    "url": "assets/js/27.4d4762bf.js",
    "revision": "347049f5f4c15b88abd34226e36abda2"
  },
  {
    "url": "assets/js/28.b91e39c2.js",
    "revision": "e20569395bb0160453f3287e933ce016"
  },
  {
    "url": "assets/js/29.2c3aa0be.js",
    "revision": "9c77d28e38607a3c23a65a23d706664a"
  },
  {
    "url": "assets/js/3.d0f28511.js",
    "revision": "920f7ae32b328815c8ed1e64f2358c4a"
  },
  {
    "url": "assets/js/30.3d0463ef.js",
    "revision": "ed6d22d649ae54f9b7d34f8e08854abc"
  },
  {
    "url": "assets/js/4.876848fe.js",
    "revision": "2a46437d8d0f060dd4b04ab3ca68802f"
  },
  {
    "url": "assets/js/5.02118af0.js",
    "revision": "26cb3cb28dd6374ede4fdc88bc619816"
  },
  {
    "url": "assets/js/6.5bb435ec.js",
    "revision": "4925aa656989e94c583c9de5b8505f1e"
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
    "url": "assets/js/9.ba1d2c8c.js",
    "revision": "348dd0845c206880563c19e21b299d96"
  },
  {
    "url": "assets/js/app.0a06aa63.js",
    "revision": "b87f49f920e45b9849c7ac9fe70ba9b4"
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
    "revision": "034724b4a583497ded1d639f31d6e05e"
  },
  {
    "url": "lessons/another-challenge.html",
    "revision": "d23a6fe7e720c9fa8314997b37ea35a9"
  },
  {
    "url": "lessons/comment.html",
    "revision": "dea94bcd7a0c64cb08065e175fc3f00e"
  },
  {
    "url": "lessons/control-flow.html",
    "revision": "7110b6d8c268df264c95dad1a5116dde"
  },
  {
    "url": "lessons/functions.html",
    "revision": "f26af8871d142dcc201f5e45b6c27440"
  },
  {
    "url": "lessons/index.html",
    "revision": "8fac3c7c2800faf099e59eb93998a71d"
  },
  {
    "url": "lessons/introduction.html",
    "revision": "174f89cf957f3d20ee07dacde4aca87f"
  },
  {
    "url": "lessons/make-executables.html",
    "revision": "77ab4647892f983a1b877b274b4fb34e"
  },
  {
    "url": "lessons/mapping-data-type.html",
    "revision": "226b39dcff5534a901b65027f167dc6d"
  },
  {
    "url": "lessons/modules.html",
    "revision": "14abf6f5d0138a09ee35f069c8c48cd7"
  },
  {
    "url": "lessons/operator.html",
    "revision": "b9500f2d559b0c84e436eb120c16e8d6"
  },
  {
    "url": "lessons/script.html",
    "revision": "42c080df84b8e3778c6442372ef05315"
  },
  {
    "url": "lessons/sequence-data-type.html",
    "revision": "28230d1578601b9f9afdcceeab9d3ed0"
  },
  {
    "url": "lessons/set-data-type.html",
    "revision": "3edd66a7ced07550480b6d0476411f01"
  },
  {
    "url": "lessons/setup.html",
    "revision": "591b14bfa843d2b6490b65f9864b017e"
  },
  {
    "url": "lessons/tiny-challenge.html",
    "revision": "eba569242d474ce95f53d33adc3784d2"
  },
  {
    "url": "lessons/turtle.html",
    "revision": "0f443d99f28ccce360b82180348327a0"
  },
  {
    "url": "lessons/variable-and-data-types.html",
    "revision": "5b31f6baa93573a79b7db73f2de9ebcb"
  },
  {
    "url": "lessons/version-control.html",
    "revision": "b8bc809fcc1c95e912d136f1320966d6"
  },
  {
    "url": "logo.png",
    "revision": "719918815e43ecffe5545c96c8e208aa"
  },
  {
    "url": "tags.html",
    "revision": "286311ba30a7d10cfeceabe097bddf56"
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
