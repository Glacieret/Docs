import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  title: "Glacieret",
  description: "个人笔记与技术博客",

  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/posts/Clausewitzz' },
      { text: '笔记', link: '/notes/' }
    ],

    // 侧边栏：全自动扫描，区分博客/笔记，红线已消除，子目录默认折叠收起
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

    // 本地全文搜索
    search: {
      provider: 'local'
    }
  }
})