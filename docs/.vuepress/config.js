module.exports = {
  base: "/blogs/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "walle.png",
      },
    ],
  ],
  title: "OMG运维管理",
  description: "达那蛋",
  theme: "@vuepress/theme-default",
  themeConfig: {
    sidebar: "auto",
    smoothScroll: true,
    nextLinks: true,
    prevLinks: true,
    contributorsText: "贡献者",
    lastUpdatedText: "上次更新",
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "碎念",
        link: "/daily/",
      },
      {
        text: "基础",
        link: "/basic/",
      },
      {
        text: "容器",
        link: "/container/",
      },
      {
        text: "监控",
        link: "/book/",
      },
    ],
  },
};
