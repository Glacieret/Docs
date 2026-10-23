// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import MeteorBg from './components/MeteorBg.vue'
// 你原本的样式文件

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 通过插槽，在主页 Hero 区域前渲染背景
      'home-hero-before': () => h(MeteorBg)
    })
  }
}