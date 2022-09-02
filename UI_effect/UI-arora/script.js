const lerp = (current, target, factor) =>
current * (1 - factor) + target * factor;

let mousePosition = { x: 0, y: 0 };
window.addEventListener("mousemove", e => {
  mousePosition.x = e.pageX;
  mousePosition.y = e.pageY;
});

const calculateDistance = (x1, y1, x2, y2) => {
  return Math.hypot(x1 - x2, y1 - y2);
};

class MagneticObject {
  constructor(domElement) {
    this.domElement = domElement;
    this.boundingClientRect = this.domElement.getBoundingClientRect();
    this.triggerArea = 200;
    this.interpolationFactor = 0.8;

    this.lerpingData = {
      x: { current: 0, target: 0 },
      y: { current: 0, target: 0 } };


    this.render();
    this.resize();
  }

  resize() {
    window.addEventListener("resize", () => {
      this.boundingClientRect = this.domElement.getBoundingClientRect();
    });
  }

  render() {
    const distanceFromMouseToCenter = calculateDistance(
    mousePosition.x,
    mousePosition.y,
    this.boundingClientRect.left + this.boundingClientRect.width / 2,
    this.boundingClientRect.top + this.boundingClientRect.height / 2);


    let targetHolder = { x: 0, y: 0 };

    if (distanceFromMouseToCenter < this.triggerArea) {
      this.domElement.classList.add("focus");
      targetHolder.x =
      (mousePosition.x - (
      this.boundingClientRect.left +
      this.boundingClientRect.width / 2)) *
      0.2;
      targetHolder.y =
      (mousePosition.y - (
      this.boundingClientRect.top +
      this.boundingClientRect.height / 2)) *
      0.2;
    } else {
      this.domElement.classList.remove("focus");
    }
    this.lerpingData["x"].target = targetHolder.x;
    this.lerpingData["y"].target = targetHolder.y;

    for (const item in this.lerpingData) {
      this.lerpingData[item].current = lerp(
      this.lerpingData[item].current,
      this.lerpingData[item].target,
      this.interpolationFactor);

    }

    this.domElement.style.transform = `translate(${this.lerpingData["x"].current}px, ${this.lerpingData["y"].current}px)`;

    window.requestAnimationFrame(() => this.render());
  }}


const button = document.querySelector("button");
new MagneticObject(button);

class WebGL {
  constructor(container = document.body) {
    this.container = container;

    this.setup();
    this.camera();
    this.addObjects();
    this.eventListeners();
    this.settings();
    this.animate();
    this.render();
  }

  settings() {
    this.settings = {
      blur: 0.2,
      speed: 0.3,
      noiseFreq: 0.3 };


    //const gui = new dat.GUI();
    //gui.add(this.settings, 'blur', 0.0, 0.49, 0.01);
    //gui.add(this.settings, 'speed', 0.0, 1.5, 0.1);
    //gui.add(this.settings, 'noiseFreq', 0.0, 10.0, 0.1);
  }

  setup() {
    this.clock = new THREE.Clock();
    this.mouse = new THREE.Vector2();
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({
      antialias: true });

    this.renderer.setSize(this.viewport.width, this.viewport.height);
    this.renderer.setPixelRatio = window.devicePixelRatio;
    this.renderer.setClearColor(0xffffff, 1);
    this.container.appendChild(this.renderer.domElement);
  }

  camera() {
    const FOV = 50;
    const NEAR = 1;
    const FAR = 10;
    const ASPECT_RATIO = this.viewport.aspectRatio;

    this.camera = new THREE.PerspectiveCamera(FOV, ASPECT_RATIO, NEAR, FAR);
    this.camera.position.set(0, 0, 10);
  }

  addObjects() {
    this.time = 0;
    this.geometry = new THREE.PlaneBufferGeometry(2, 2, 16, 16);
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { type: "f", value: 0 },
        u_resolution: { type: "v4", value: new THREE.Vector4() },
        u_aspect: { type: "f", value: this.aspectRatio },
        u_noiseFreq: { value: this.settings.blur },
        u_progress: { value: 0 },
        blur: { value: this.settings.blur },
        speed: { value: this.settings.speed } },

      transparent: true,
      wireframe: false,
      vertexShader: document.getElementById("vertex").textContent,
      fragmentShader: document.getElementById("fragment").textContent });


    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(0, 0, 0);
    this.scene.add(this.mesh);
  }

  animate() {
    const tl = gsap.timeline();

    if (window.innerWidth < 1200) {
      tl.to(this.material.uniforms.u_progress, {
        duration: 2,
        value: 1.0,
        ease: "power3.out" }).
      to(
      this.camera.position,
      {
        z: 3,
        duration: 2,
        ease: "power3.out" },

      0);

    } else {
      tl.to(this.material.uniforms.u_progress, {
        duration: 2,
        value: 1.0,
        ease: "power3.out" }).
      to(
      this.camera.position,
      {
        z: 2.5,
        duration: 2,
        ease: "power3.out" },

      0);

    }
  }

  render() {
    this.camera.lookAt(this.scene.position);
    this.renderer.render(this.scene, this.camera);

    this.material.uniforms.u_time.value = this.clock.getElapsedTime();
    this.material.uniforms.blur.value = this.settings.blur;
    this.material.uniforms.speed.value = this.settings.speed;
    this.material.uniforms.u_noiseFreq.value = this.settings.noiseFreq;

    requestAnimationFrame(() => {
      this.render();
    });
  }

  eventListeners() {
    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  onWindowResize() {
    this.camera.aspect = this.viewport.aspectRatio;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.viewport.width, this.viewport.height);
  }

  get viewport() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    const aspectRatio = width / height;

    this.aspectRatio = aspectRatio;

    return {
      width,
      height,
      aspectRatio };

  }}


new WebGL();