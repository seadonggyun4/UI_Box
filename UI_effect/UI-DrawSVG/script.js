(function () {
	const isAnimationOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

	if(isAnimationOk) {
		setupAnimations();
	}

	function setupAnimations() {

		gsap.registerPlugin(MotionPathPlugin);

		gsap.from(".stroke__wide", {
			drawSVG: "0%",
			delay: 1,
			scrollTrigger: {
				trigger: "main",
				start: "-10% top",
				end: "bottom+=30% bottom",
				scrub: 1
			}
		});

		gsap.from(".stroke__mask", {
			drawSVG: "0%",
			scrollTrigger: {
				trigger: "#page",
				start: "-7% top",
				end: "bottom+=20% bottom",
				scrub: 1
			}
		});

		gsap.from(".stroke__narrow", {
			"--dashOffset": 2000,
			scrollTrigger: {
				trigger: "main",
				start: "-10% top",
				end: "bottom+=30% bottom",
				scrub: 2
			}
		});

		gsap.set(".stroke__blob", {transformOrigin: "50% 100%"});
		gsap.from(".stroke__blob", {
			scale: 0.85,
			y: 3000,
			x: -500,
			rotate: 10,
			delay: 1,
			scrollTrigger: {
				trigger: "main",
				start: "center top",
				end: "bottom top",
				toggleActions: "restart pause resume reset",
				scrub: 1
			}
		});

		let figures = gsap.utils.toArray(".gallery__image");
		figures.forEach((el) => {
			gsap.from(el, {
				opacity: 0,
				duration: 2,
				scrollTrigger: {
					trigger: el,
					start: "top bottom",
					end: "bottom top",
					toggleActions: "resume pause resume pause"
				}
			});
		});

		let images = gsap.utils.toArray(".gallery__image img");
		images.forEach((el) => {
			gsap.from(el, {
				opacity: 0,
				scale: 1.5,
				duration: 2,
				scrollTrigger: {
					trigger: el,
					start: "top bottom",
					end: "bottom top",
					toggleActions: "resume pause resume pause"
				}
			});
		});

		let headers = gsap.utils.toArray(".header");
		headers.forEach((el) => {
			gsap.from(el, {
				opacity: 0,
				yPercent: 5,
				duration: 2,
				scrollTrigger: {
					trigger: el,
					start: "top bottom",
					end: "bottom top",
					toggleActions: "resume pause resume pause"
				}
			});
		});
	}
}());