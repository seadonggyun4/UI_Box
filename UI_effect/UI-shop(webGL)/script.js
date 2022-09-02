import {Curtains, Plane} from 'https://cdn.jsdelivr.net/npm/curtainsjs@7.1.0/src/index.mjs';


class WebglHover {
  constructor(set) {
    this.canvas = set.canvas
    this.webGLCurtain = new Curtains({
      container: this.canvas,
      watchScroll: false,
      pixelRatio: Math.min(1.5, window.devicePixelRatio)
    })
    this.planeElement = set.planeElement
    this.mouse = {
      x: 0,
      y: 0
    }
    this.params = {
      vertexShader: document.getElementById("vs").textContent,
      fragmentShader: document.getElementById("fs").textContent,
      widthSegments: 40,
      heightSegments: 40, // 40*40*6 = 9600 vertices
      uniforms: {
        time: {
          name: "uTime",
          type: "1f",
          value: 0
        },
        mousepos: {
          name: "uMouse",
          type: "2f",
          value: [0, 0]
        },
        resolution: {
          name: "uReso",
          type: "2f",
          value: [innerWidth, innerHeight]
        },
        progress: {
          name: "uProgress",
          type: "1f",
          value: 0
        }
      }
    }
    this.initPlane()
  }

  initPlane() {
    this.plane = new Plane(this.webGLCurtain, this.planeElement, this.params)

    if (this.plane) {
      this.plane.onReady(() => {
        this.update()
        this.initEvent()
      })
    }
  }

  update() {
    this.plane.onRender(() => {
      this.plane.uniforms.time.value += 0.01

      this.plane.uniforms.resolution.value = [innerWidth, innerHeight]
    })
  }

  initEvent() {
    this.planeElement.addEventListener("mouseenter", () => {
      gsap.to(this.plane.uniforms.progress, .8, {
        value: 1
      })
    })

    this.planeElement.addEventListener("mouseout", () => {
      gsap.to(this.plane.uniforms.progress, .8, {
        value: 0
      })
    })
  }
}

document.querySelectorAll('.slide').forEach(slide => {
  const canvas = slide.querySelector('.canvas')
  const planeElement = slide.querySelector('.plane')
  new WebglHover({
    canvas,
    planeElement
  })
})