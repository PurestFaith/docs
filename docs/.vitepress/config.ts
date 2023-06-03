import { defineConfig } from 'vitepress'

export default defineConfig({
  description: '这是我的新文档',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  ],
  lang: 'zh-CN',
  lastUpdated: true,
  markdown: {
    theme: 'vitesse-dark',
    lineNumbers: true,
  },
  title: 'PurestFaith 的文档',
  themeConfig: {
    logo: '/img/logo.png',
    siteTitle: 'PurestFaith 的文档',
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '文档简介',
        link: '/guide/',
      },
      {
        text: '个人简介',
        link: '/resume/',
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/PurestFaith',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present PurestFaith',
    },
    editLink: {
      pattern: 'https://github.com/tlyboy/docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
    lastUpdatedText: '上次更新',
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
  },
})
