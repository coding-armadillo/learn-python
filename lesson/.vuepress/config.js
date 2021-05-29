module.exports = {
  plugins: [
    "@vuepress/back-to-top",
    [
      "@mr-hope/copy-code",
      {
        selector: `div[class*="language-"] pre`,
      },
    ],
  ],
  evergreen: true,
  title: "Learn Python",
  theme: "@vuepress/theme-blog",
  themeConfig: {
    directories: [
      {
        id: "lesson",
        dirname: "_lessons",
        path: "/lesson/",
        itemPermalink: "/lesson/:slug",
      },
    ],
    summary: false,
    smoothScroll: true,
    nav: [
      {
        text: "Lessons",
        link: "/lesson/",
      },
      {
        text: "Tags",
        link: "/tag/",
      },
    ],
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/coding-armadillo/learn-python",
        },
        {
          type: "twitter",
          link: "https://twitter.com/CodingArmadillo",
        },
      ],
      copyright: [
        {
          text: "MIT Licensed | Copyright © 2021-present Coding Armadillo",
        },
      ],
    },
  },
};
