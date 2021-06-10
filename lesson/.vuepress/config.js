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
  base: process.env.BASE_URL || "/",
  title: "Learn Python",
  theme: "@vuepress/theme-default",
  evergreen: true,
  themeConfig: {
    repo: "coding-armadillo/learn-python",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    docsDir: "lesson",
    docsBranch: "main",
    logo:
      "https://raw.githubusercontent.com/coding-armadillo/coding-armadillo-logo/main/coding-armadillo-web.png",
    sidebar: "auto",
    searchPlaceholder: "Search...",
    smoothScroll: true,
    lastUpdated: "Last Updated",
    nav: [
      {
        text: "Lessons",
        link: "/lessons/",
      },
      {
        text: "Tags",
        link: "/tags/",
      },
    ],
  },
};
