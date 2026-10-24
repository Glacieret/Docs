import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  head: [
  ['link', { rel: 'icon', sizes: '180x180', href: '/Anon.png' }],],
  title: "Glacieret",
  description: "个人笔记与技术博客",

  // ⭐️ 核心加这一段：开启单次回车自动换行
  markdown: {
    lineNumbers: true, // 可选：代码块显示行号
    config: (md) => {
      md.set({ breaks: true }) // 敲一次回车直接换行
    }
  },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/posts/Clausewitzz' },
      { text: '笔记', link: '/notes/' }
    ],

    sidebar: generateSidebar([
      {
        documentRootPath: '/docs',
        scanStartPath: 'posts',
        resolvePath: '/posts/',
        useTitleFromFileHeading: true,
        collapsed: true
      },
      {
        documentRootPath: '/docs',
        scanStartPath: 'notes',
        resolvePath: '/notes/',
        useTitleFromFileHeading: true,
        collapsed: true
      }
    ]),

    search: {
      provider: 'local'
    }
  }
})