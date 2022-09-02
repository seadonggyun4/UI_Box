const TAU = Zdog.TAU;
const BLACK = "#3D3D3D";
const YELLOW = "#F2EA00";
const WHITE = "#FEFEFE";

let ctx = document.querySelector("canvas");
ctx.width = 800;
ctx.height = 600;

// Z-DOG STUFF
//-------------------------------------------------/

let scene = new Zdog.Illustration({
  element: ".scene",
  dragRotate: false
});

// BEE
let BEE = new Zdog.Anchor({
  addTo: scene
});

// HEAD
let head = new Zdog.Shape({
  addTo: BEE,
  stroke: 80,
  color: BLACK
});

// EYES
let eyeGroup = new Zdog.Group({
  addTo: head,
  translate: { x: -35, z: 20 },
  rotate: { y: TAU / 8 }
});
let pupil = new Zdog.Ellipse({
  addTo: eyeGroup,
  diameter: 35,
  fill: true,
  color: WHITE
});
let iris = new Zdog.Ellipse({
  addTo: pupil,
  diameter: 20,
  fill: true,
  color: BLACK
});
eyeGroup.copyGraph({
  translate: { x: 35, z: 20 },
  rotate: { y: -TAU / 8 }
});

// ANTLERS
let antlerAnchor = new Zdog.Anchor({
  addTo: head,
  translate: { y: -40 }
});
let leftAntler = new Zdog.Shape({
  addTo: antlerAnchor,
  path: [
    { y: 0, x: -10, z: 0 },
    { y: -30, x: -18, z: -12 }
  ],
  stroke: 10,
  color: BLACK
});
let rightAntler = new Zdog.Shape({
  addTo: antlerAnchor,
  path: [
    { y: 0, x: 10, z: 0 },
    { y: -30, x: 18, z: -12 }
  ],
  stroke: 10,
  color: BLACK
});

// BODY
let bodyAnchor = new Zdog.Anchor({
  addTo: BEE,
  translate: { z: -30 }
});
let partOne = new Zdog.Shape({
  addTo: bodyAnchor,
  stroke: 90,
  color: YELLOW
});
let partTwo = partOne.copy({
  stroke: 100,
  color: BLACK,
  translate: { z: -20 }
});
let partThree = partTwo.copy({
  stroke: 110,
  color: YELLOW,
  translate: { z: -40 }
});
let partFour = partTwo.copy({
  stroke: 100,
  color: BLACK,
  translate: { z: -50 }
});
let partFive = partOne.copy({
  stroke: 80,
  color: YELLOW,
  translate: { z: -65 }
});
let stinger = new Zdog.Cone({
  addTo: bodyAnchor,
  diameter: 50,
  length: 30,
  color: BLACK,
  translate: { z: -70 },
  rotate: { x: TAU / 2 }
});

// WINGS
let rightWingAnchor = new Zdog.Anchor({
  addTo: bodyAnchor,
  translate: { z: -40, y: -30 }
});
let leftWingAnchor = rightWingAnchor.copy();
let rightWing = new Zdog.Ellipse({
  addTo: rightWingAnchor,
  width: 50,
  height: 100,
  color: WHITE,
  fill: true,
  rotate: { x: TAU / 6, z: -TAU / 4 },
  translate: { x: 70 }
});
let leftWing = rightWing.copy({
  addTo: leftWingAnchor,
  rotate: { x: TAU / 6, z: -TAU / 4 },
  translate: { x: 70 }
});

let n = 0;

function render() {
  rightWingAnchor.rotate.z = (TAU / 8) * Math.sin(n / 2);
  leftWingAnchor.rotate.z = TAU / 2 - (TAU / 8) * Math.sin(n / 2);
  antlerAnchor.rotate.x = (TAU / 32) * Math.sin(n / 12);
  BEE.translate.y = TAU / 2 - (TAU / 2) * Math.sin(n / 16);

  scene.rotate.y = TAU / 16;

  scene.updateRenderGraph();
  n++;
  requestAnimationFrame(render);
}

render();

// GSAP STUFF
//-------------------------------------------------/

let xPos = 0;

const BANK_LEFT = document.getElementById("bankLeft");
const BANK_RIGHT = document.getElementById("bankRight");
const ROLL_RIGHT = document.getElementById("rollRight");
const ROLL_LEFT = document.getElementById("rollLeft");

BANK_LEFT.addEventListener("click", (e) => {
  gsap.to(BEE.translate, 1.5, {
    x: xPos - 150,
    onUpdate: () => (xPos = BEE.translate.x)
  });
  gsap.fromTo(BEE.rotate, 1.5, { z: -0.5 }, { z: 0 });
});

BANK_RIGHT.addEventListener("click", () => {
  gsap.to(BEE.translate, 1.5, {
    x: xPos + 150,
    onUpdate: () => (xPos = BEE.translate.x)
  });
  gsap.fromTo(BEE.rotate, 1.5, { z: 0.5 }, { z: 0 });
});

ROLL_RIGHT.addEventListener("click", () => {
  gsap.fromTo(
    BEE.translate,
    1.5,
    {
      x: xPos,
      y: -40
    },
    {
      x: xPos + 150,
      y: 0,
      onUpdate: () => (xPos = BEE.translate.x)
    }
  );
  gsap.fromTo(BEE.rotate, 1.5, { z: -TAU }, { z: 0 });
});

ROLL_LEFT.addEventListener("click", () => {
  gsap.fromTo(
    BEE.translate,
    1.5,
    {
      x: xPos,
      y: 40
    },
    {
      x: xPos - 150,
      y: 0,
      onUpdate: () => {
        xPos = BEE.translate.x;
      }
    }
  );
  gsap.fromTo(BEE.rotate, 1.5, { z: TAU }, { z: 0 });
});

let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});