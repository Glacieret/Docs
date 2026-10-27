<template>
  <div class="shader-container" ref="containerRef">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvasRef = ref(null)
const containerRef = ref(null)
let animationId = null

// 这是包装好的 Star Nest 着色器代码
const fragmentShaderSource = `
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec4 iMouse;

#define iterations 17
#define formuparam 0.53
#define volsteps 20
#define stepsize 0.1
#define zoom   0.800
#define tile   0.850
#define speed  0.010 
#define brightness 0.0015
#define darkmatter 0.300
#define distfading 0.730
#define saturation 0.850

void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = fragCoord.xy / iResolution.xy - 0.5;
    uv.y *= iResolution.y / iResolution.x;
    vec3 dir = vec3(uv * zoom, 1.0);
    float time = iTime * speed + 0.25;

    float a1 = 0.5 + iMouse.x / iResolution.x * 2.0;
    float a2 = 0.8 + iMouse.y / iResolution.y * 2.0;
    mat2 rot1 = mat2(cos(a1), sin(a1), -sin(a1), cos(a1));
    mat2 rot2 = mat2(cos(a2), sin(a2), -sin(a2), cos(a2));
    dir.xz *= rot1;
    dir.xy *= rot2;
    vec3 from = vec3(1.0, 0.5, 0.5);
    from += vec3(time * 2.0, time, -2.0);
    from.xz *= rot1;
    from.xy *= rot2;
    
    float s = 0.1, fade = 1.0;
    vec3 v = vec3(0.0);
    for (int r = 0; r < volsteps; r++) {
        vec3 p = from + s * dir * 0.5;
        p = abs(vec3(tile) - mod(p, vec3(tile * 2.0))); 
        float pa = 0.0, a = 0.0;
        for (int i = 0; i < iterations; i++) { 
            p = abs(p) / dot(p, p) - formuparam; 
            a += abs(length(p) - pa); 
            pa = length(p);
        }
        float dm = max(0.0, darkmatter - a * a * 0.001); 
        a *= a * a; 
        if (r > 6) fade *= 1.0 - dm; 
        v += fade;
        v += vec3(s, s * s, s * s * s * s) * a * brightness * fade; 
        fade *= distfading; 
        s += stepsize;
    }
    v = mix(vec3(length(v)), v, saturation); 
    gl_FragColor = vec4(v * 0.01, 1.0);
}
`

const vertexShaderSource = `
attribute vec2 position;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}
`

onMounted(() => {
  const canvas = canvasRef.value
  const container = containerRef.value
  const gl = canvas.getContext('webgl')

  if (!gl) return

  // 监听鼠标事件 (Star Nest 支持鼠标改变视角)
  let mouseX = 0, mouseY = 0
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect()
    mouseX = e.clientX - rect.left
    mouseY = canvas.height - (e.clientY - rect.top)
  })

  const compileShader = (type, source) => {
    const shader = gl.createShader(type)
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    return shader
  }

  const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource)
  const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource)

  const program = gl.createProgram()
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  gl.useProgram(program)

  const positionBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1.0, -1.0,  1.0, -1.0, -1.0,  1.0,
    -1.0,  1.0,  1.0, -1.0,  1.0,  1.0
  ]), gl.STATIC_DRAW)

  const positionLocation = gl.getAttribLocation(program, 'position')
  gl.enableVertexAttribArray(positionLocation)
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

  const iTimeLoc = gl.getUniformLocation(program, 'iTime')
  const iResolutionLoc = gl.getUniformLocation(program, 'iResolution')
  const iMouseLoc = gl.getUniformLocation(program, 'iMouse')

  const startTime = Date.now()

  const render = () => {
    const width = container.clientWidth
    const height = 400
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width
      canvas.height = height
      gl.viewport(0, 0, width, height)
    }

    const iTime = (Date.now() - startTime) / 1000.0

    gl.uniform1f(iTimeLoc, iTime)
    gl.uniform2f(iResolutionLoc, canvas.width, canvas.height)
    gl.uniform4f(iMouseLoc, mouseX, mouseY, 0.0, 0.0)

    gl.drawArrays(gl.TRIANGLES, 0, 6)
    animationId = requestAnimationFrame(render)
  }

  render()
})

onBeforeUnmount(() => {
  if (animationId) cancelAnimationFrame(animationId)
})
</script>

<style scoped>
.shader-container {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #000;
}
canvas {
  display: block;
  width: 100%;
  height: 400px;
  cursor: crosshair; /* 给画布加上十字光标，提示用户可以鼠标交互 */
}
</style>