<template>
    <section class="hero">
        <div class="hero__top">
            <div>
            <h1>Our goal is to create design.</h1>
            <p>
                From have searching their not business, officers. Question. Are
                like…. Periodic structure the evils what's present derive bit
                without.
            </p>
            </div>
            <div class="hero__background"></div>
        </div>
        <div class="hero__bottom">
            <img src="https://images.unsplash.com/photo-1522938974444-f12497b69347?ixlib=rb-1.2.1&auto=format&fit=crop&w=3397&q=80"/>
        </div>
        
    </section>
</template>

<script>
// import gsap from 'gsap'
// import ScrollMagic from 'scrollmagic'

export default {
    mounted(){
        // ============================================================  [ Title section animation ] ============================================================
        // gsap, scrollMagic 사용

        const heroTween = (background) => {
            const tl = this.gsap.timeline();

            tl.to(background, {
                height: "100%",
                ease: "power3.easeOut"
            });

            return tl;
        };

         new this.ScrollMagic.Controller();

         new this.ScrollMagic.Scene({
            triggerElement: ".hero",
            triggerHook: 0,
            duration: "40%"
        })
            .setTween(heroTween(".hero__background"))
            .addIndicators({ name: "1" });
        //.addTo(controller);
    }
}
</script>


<style lang="scss" scoped>
.hero {
  background-color: #fff;
}
.hero__background {
  position: absolute;
  z-index: 1;
  top: 0%;
  height: 0%;
  width: 100%;
  background: #090e18;
}
.hero__top {
  position: relative;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.hero__top h1 {
  color: #fff;
  font-size: 80px;
  line-height: 1.1;
  margin-bottom: 32px;
  max-width: 600px;
  z-index: 3;
  position: relative;
}
@media (max-width: 960px) {
  .hero__top h1 {
    font-size: 32px;
  }
}
.hero__top p {
  mix-blend-mode: difference;
  color: rgba(255, 255, 255, 0.6);
  max-width: 500px;
  margin: 0 auto;
  font-size: 18px;
  z-index: 3;
  position: relative;
}
.hero__bottom {
  height: 60vh;
}
.hero__bottom img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
</style>