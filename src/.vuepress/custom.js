/**
 * @file: custom config
 */

let mainConfig = {
  vssueConfig: {
    owner: "briteming",
    repo: "ibwga",
    clientId: "Ov23liq0VjxWPMAVb8Ig",
    clientSecret: "d9ca3c22bf57be1920a5cf47c4baa7c960981d36"
  },

  repoConfig: {
    owner: "briteming",
    repo: "ibwga",
    pushBranch: "source",
    email: "briteming@gmail.com",
    filterUsers: ['briteming']
  },

  title: "brite's Blog",
  description: "在这里了解我的一切，对编程的热爱永不停歇。",
  customDomain: "",
  base: "/ibwga/",

  slogan: {
    main: "有逻辑的灵魂，",
    sub: "造就有温度的编码。"
  },

  themeConfig: {
    nav: [
      {
        name: "首页",
        link: "/ibwga"
      },
      {
        name: "Github",
        link: "https://github.com/Yidadaa"
      },
      {
        name: "CV",
        link: "/ibwga/cv.html"
      }
    ],
    headTitle: ["暮春早夏的月亮", "原是情人的月亮，不比秋冬是诗人的月亮"],
    friendLinks: [
      {
        name: "watercow",
        link: "https://github.com/watercow/watercow.github.io/issues"
      },
      {
        name: "ycjgg",
        link: "https://ycjgg.github.io"
      }
    ],
    extraFooters: [
      {
        title: "ABOUT",
        text: "@ 蜀 ICP 备 19000509 号 - 1",
        link: "https://beian.miit.gov.cn/"
      }
    ],
    pageCount: true
  },

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://avatars2.githubusercontent.com/u/16968934?s=460&v=4"
      }
    ]
  ]
}

module.exports = mainConfig
