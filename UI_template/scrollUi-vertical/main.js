// ============================================================  [ Vertical Scroll animation ] ============================================================
// gsap 사용

const scrollSection = document.querySelector(".horizontal-scroll__section");
const scrollContent = document.querySelector(".horizontal-scroll__content");

const scrollHeight = scrollSection.clientHeight;
const contentWidth = scrollContent.clientWidth;

document.addEventListener("scroll", (e) => {
    const scrolled = window.pageYOffset;
    const sectionOffset = Math.abs(scrollSection.offsetTop - scrolled);
    const notReachedBottom = parseInt(
        Math.max(
            0,
            scrollSection.getBoundingClientRect().bottom - window.innerHeight
        )
    );

    if (scrollSection.offsetTop <= scrolled && notReachedBottom) {
        gsap.to(scrollContent, {
            x: -sectionOffset
        });
    }
});




// ============================================================  [ Title section animation ] ============================================================
// gsap, scrollMagic 사용

const heroTween = (background) => {
    const tl = gsap.timeline();

    tl.to(background, {
        height: "100%",
        ease: "power3.easeOut"
    });

    return tl;
};

const controller = new ScrollMagic.Controller();

const heroScene = new ScrollMagic.Scene({
    triggerElement: ".hero",
    triggerHook: 0,
    duration: "40%"
})
    .setTween(heroTween(".hero__background"))
    .addIndicators({ name: "1" });
//.addTo(controller);