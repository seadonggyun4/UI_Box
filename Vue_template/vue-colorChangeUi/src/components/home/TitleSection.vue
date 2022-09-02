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
            <div class="product-img">
              <img src="https://cdn.shopify.com/s/files/1/0689/1443/products/CBF-caos-450_black4_729014ce-4a6f-4514-a96a-ace4aa3d79ca_1100x.jpg?v=1646639804" alt="product-img"/>
            </div>
            <div class="text-content">
              <h3>Hero Bottle</h3>
              <p>
                This Bottle is sooooo Nice to drink water <br/>
                and it will make you fill happy!!
              </p>
            </div>
        </div>
        
    </section>
</template>

<script>
// import gsap from 'gsap'
// import ScrollMagic from 'scrollmagic'

export default {
    mounted(){
        // ============================================================  [ Title section animation ] ============================================================
        // scrollMagic 사용
        const heroBackground = document.querySelector('.hero__background')

        new this.ScrollMagic
          .Scene({
            triggerElement: heroBackground,
            triggerHook: .8,
            // duration: "40%"
          })
          .setClassToggle(heroBackground, 'active') // setClassToggle(적용될 식별자, 토글될 클래스 명)
          .addTo(new this.ScrollMagic.Controller());


        // scrollMagic 사용
        const productImage = document.querySelector('.product-img')   

        new this.ScrollMagic
          .Scene({
            triggerElement: productImage,
            triggerHook: .8,
            // duration: "40%"
          })
          .setClassToggle(productImage, 'active') // setClassToggle(적용될 식별자, 토글될 클래스 명)
          .addTo(new this.ScrollMagic.Controller());

        const textContentH3 = document.querySelector('.text-content h3')
        const textContentP = document.querySelector('.text-content p')


        new this.ScrollMagic
          .Scene({
            triggerElement: textContentH3,
            triggerHook: .8,
            // duration: "40%"
          })
          .setClassToggle(textContentH3, 'active') // setClassToggle(적용될 식별자, 토글될 클래스 명)
          .addTo(new this.ScrollMagic.Controller());


        new this.ScrollMagic
          .Scene({
            triggerElement: textContentP,
            triggerHook: .8,
            // duration: "40%"
          })
          .setClassToggle(textContentP, 'active') // setClassToggle(적용될 식별자, 토글될 클래스 명)
          .addTo(new this.ScrollMagic.Controller());
    }
}
</script>


<style lang="scss" scoped>
@import '../../scss/main.scss';

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
  transition: height 1s ease-in-out;

  &.active{
    height: 100%;
  }
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
  position: relative;
  height: 60vh;
  background: url(https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Beach_1920.jpg?v=1029210661698833530);
  background-repeat: no-repeat;
  background-size: cover;
}

.product-img{
  position: absolute;
  top: 50%;
  width: 300px;
  height: 300px;
  background: #000;
  border-radius: 15px;
  overflow: hidden;
  transform: translate3d(0,-50%,0);
  opacity: 0;
  transition: all .8s ease-in-out;

  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &.active{
    transform: translate3d(500px,-50%,0);
    opacity: 1;
  }
}

.text-content{
  position: absolute;
  top: 50%;
  right: 10%;
  color: #fff;

  h3{
    margin-bottom: 15px;
    font-size: 50px;
    font-family: $italic-font;
    transform: translate3d(0,-100%,0);
    opacity: 0;
    transition: all .8s ease-in-out;

    &.active{
      transform: translate3d(-400px,-100%,0);
      opacity: 1;
    }
  }

  p{
    font-size: 20px;
    transform: translate3d(0,-100%,0);
    opacity: 0;
    transition: all .8s ease-in-out;

    &.active{
      transform: translate3d(-400px,-100%,0);
      opacity: 1;
    }
  }

}
</style>