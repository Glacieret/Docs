<!-- .vitepress/theme/components/MeteorBg.vue -->
<template>
  <canvas ref="canvasRef" class="meteor-bg"></canvas>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const canvasRef = ref(null)
let animId = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  let w = (canvas.width = window.innerWidth)
  let h = (canvas.height = window.innerHeight)

  const handleResize = () => {
    w = canvas.width = window.innerWidth
    h = canvas.height = window.innerHeight
  }
  window.addEventListener('resize', handleResize)

  // 1. 初始化背景静态星点
  const stars = Array.from({ length: 80 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.5 + 0.5,
    alpha: Math.random(),
    speed: Math.random() * 0.02 + 0.005
  }))

  // 2. 初始化流星类
  class Meteor {
    constructor() {
      this.reset()
    }
    reset() {
      this.x = Math.random() * w + 200
      this.y = Math.random() * -100
      this.length = Math.random() * 80 + 40
      this.speed = Math.random() * 4 + 3
      this.alpha = 1
    }
    draw() {
      ctx.save()
      ctx.strokeStyle = `rgba(130, 160, 255, ${this.alpha})`
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(this.x, this.y)
      ctx.lineTo(this.x - this.length, this.y + this.length * 0.6)
      ctx.stroke()
      ctx.restore()
    }
    update() {
      this.x -= this.speed
      this.y += this.speed * 0.6
      if (this.x < -100 || this.y > h + 100) {
        this.reset()
      }
    }
  }

  const meteors = [new Meteor(), new Meteor(), new Meteor()]

  // 3. 动画主循环
  const render = () => {
    ctx.clearRect(0, 0, w, h)

    // 绘制微光星点
    stars.forEach(s => {
      s.alpha += s.speed
      if (s.alpha > 1 || s.alpha < 0) s.speed = -s.speed
      ctx.fillStyle = `rgba(150, 180, 255, ${Math.abs(s.alpha)})`
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fill()
    })

    // 绘制并更新流星
    meteors.forEach(m => {
      m.draw()
      m.update()
    })

    animId = requestAnimationFrame(render)
  }

  render()

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    cancelAnimationFrame(animId)
  })
})
</script>

<style scoped>
.meteor-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* 确保放在最底层，且不拦截任何鼠标交互 */
  z-index: -1;
  pointer-events: none;
}
</style>