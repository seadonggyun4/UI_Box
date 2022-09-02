VanillaTilt.init(document.querySelectorAll(".box"), {
  max: 25, //최대 휘어짐
  speed: 400, // 값이 낮을수록 더 빠르게 변한다.
});

// [Tilt.js 옵션]
// maxTilt:        20,
// perspective:    1000,   // 값이 낮을수록 원근감이 증가한다.
// scale:          1,      // 배율, 1 = 100%, 2 = 200%
// speed:          300,    // 값이 낮을수록 더 빠르게 변한다.
// disableAxis:    null,   // 해당 축을 비활성화한다. 'null', 'x', 'y'
// reset:          true,   // 마우스가 벗어나도 틸트를 유지한다.
// glare:          false,  // 글레어효과를 사용한다.
// maxGlare:       1       // 글레어효과 강도 0-1
