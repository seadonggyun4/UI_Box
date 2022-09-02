<template>
<div class="swiperContainer">
    <!-- swiper -->
		<div class="mySwiper">
			<swiper class="swiper-wrapper" :slides-per-view="1"  @swiper="onSwiper" @slideChange="onSlideChange" :modules="modules" effect="fade" :loop="true"  :navigation="true">
				<swiper-slide class="swiper-slide" id="beach">
            <div class="content">
              <div class="content-header">
                <h3 class="content-title-top">Closca Bottle</h3>
                <h1 class="content-title">Beach</h1>
                <h2 class="content-subtitle">€ 39.90</h2>
              </div>
              <div class="content-main">
                <div class="content-main__title">In 20 years, there could be more plastic in our oceans than fish.</div>
                <div class="content-main__subtitle">Plastic pollution injures more than 100.000 marine animals every year.It takes around 450 years for one plastic bottle to decompose.</div>
                <div class="more-menu">
                  Shop Now
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="-5" y1="12" x2="19" y2="12" />
                    <line x1="15" y1="16" x2="19" y2="12" />
                    <line x1="15" y1="8" x2="19" y2="12" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="images">
              <div class="images-wrapper">
                <img class="images-bg" src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Beach_1920.jpg?v=1029210661698833530" alt=""/>
                <img class="images-bottle" src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/bottle_beach.png?v=11784267851598469514" />
              </div>
            </div>
				</swiper-slide>
				<swiper-slide class="swiper-slide" id="savanna">
            <div class="content">
              <div class="content-header">
                <h3 class="content-title-top">Closca Bottle</h3>
                <h1 class="content-title">Savanna</h1>
                <h2 class="content-subtitle">€ 39.90</h2>
              </div>
              <div class="content-main">
                <div class="content-main__title">The Earth’s area affected by desertification is approx 11 times India’s size.
                </div>
                <div class="content-main__subtitle">The Savannas act as a carbon sink, absorbing CO2 from the atmosphere and helping to maintain the balance of global temperatures.</div>
                <div class="more-menu">
                  Shop Now
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="-5" y1="12" x2="19" y2="12" />
                    <line x1="15" y1="16" x2="19" y2="12" />
                    <line x1="15" y1="8" x2="19" y2="12" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="images">
              <div class="images-wrapper">
                <img class="images-bg" src="https://images.unsplash.com/photo-1613109526778-27605f1f27d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt=""/>
                <img class="images-bottle" src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/savanna_OK.png?v=4783820813181844557" />
              </div>
            </div>
				</swiper-slide>
				<swiper-slide class="swiper-slide" id="glacier">
            <div class="content">
              <div class="content-header">
                <h3 class="content-title-top">Closca Bottle</h3>
                <h1 class="content-title">Glacier</h1>
                <h2 class="content-subtitle">€ 39.90</h2>
              </div>
              <div class="content-main">
                <div class="content-main__title">Glaciers contain 75% of the World's freshwater.
                </div>
                <div class="content-main__subtitle">The effects of melting ice glaciers are biodiversity loss, the rising of the sea level and the deficiency of freshwater, among others.</div>
                <div class="more-menu">
                  Shop Now
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="-5" y1="12" x2="19" y2="12" />
                    <line x1="15" y1="16" x2="19" y2="12" />
                    <line x1="15" y1="8" x2="19" y2="12" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="images">
              <div class="images-wrapper">
                <img class="images-bg" src="https://www.discover-the-world.com/app/uploads/2018/05/chile-patagonia-calving-glacier-is-1150x863-c-default.jpg" alt=""/>
                <img class="images-bottle" src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Glacier_OK.png?v=7185877315400411030" />
              </div>
            </div>
				</swiper-slide>
				<swiper-slide class="swiper-slide" id="coral">
            <div class="content">
              <div class="content-header">
                <h3 class="content-title-top">Closca Bottle</h3>
                <h1 class="content-title">Coral</h1>
                <h2 class="content-subtitle">€ 39.90</h2>
              </div>
              <div class="content-main">
                <div class="content-main__title">We will have lost 60% of our coral reefs by 2030.
                </div>
                <div class="content-main__subtitle">Coral reefs are essential to humans, as they protect the shorelines and are a source of
                  nutrients and habitat for thousands of marine species.</div>
                <div class="more-menu">
                  Shop Now
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="-5" y1="12" x2="19" y2="12" />
                    <line x1="15" y1="16" x2="19" y2="12" />
                    <line x1="15" y1="8" x2="19" y2="12" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="images">
              <div class="images-wrapper">
                <img class="images-bg" src="https://images.unsplash.com/photo-1546500840-ae38253aba9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8 &amp;ixlib=rb-1.2.1 &amp;auto=format &amp;fit=crop &amp;w=3260 &amp;q=80" alt=""/>
                <img class="images-bottle" src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Coral_OK.png?v=14596995446202437119" />   
              </div>
            </div>
				</swiper-slide>
			</swiper>
		</div>
</div>
</template>

<script>
// Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination, EffectFade} from 'swiper';

// Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = () => {

      };
      const onSlideChange = (sld) => {
        //슬라이드 바뀔때 data-sld 속성 생성
        document.body.setAttribute('data-sld', sld.realIndex);
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, EffectFade,],
      };
    },
}
</script>


<style lang="scss">
@import '../../scss/main.scss';


.swiperContainer {
  @include column-flexbox;
  // padding: 0 30px;
  height: 100vh;
  width: 100%;
  background-color: $beach;
  overflow: hidden;
  position: relative;
  scroll-behavior: smooth;
  transition: background-color 1s ease-in-out;

  .mySwiper {
    @include flexbox;
    position: relative;
    // flex-grow: 1;
    width: 50%;

    /* ============== [ swiper-slide]  ==============*/
    .swiper-slide{
      @include flexbox;
      position: relative;
      padding: 42px 0 30px;
      flex-grow: 1;


      .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: 320px;
        max-height: 500px;  /* 추가 */

        .content-header{
            .content-title-top {
              text-transform: uppercase;
              font-size: 14px;
              letter-spacing: 4px;
              font-weight: 600;
              transition-delay: 0.2s;
            }
            .content-title {
              font-family: $italic-font;
              font-size: 100px;
              font-weight: 400;
              margin-top: 10px;
              line-height: 1em;
              transition-delay: 0.3s;
            }
            .content-subtitle {
              font-family: $italic-font;
              font-weight: 400;
              font-size: 32px;
              margin-top: 14px;
              margin-bottom: 60px;
              transition-delay: 0.4s;
            }
        }

        .content-main{
            &__title {
              font-size: 26px;
              font-family: $italic-font;
              font-style: italic;
              margin-bottom: 14px;
              transition-delay: 0.2s;
            }
            &__subtitle {
              font-size: 14px;
              line-height: 1.5;
              margin-bottom: 24px;
              letter-spacing: -0.01em;
              transition-delay: 0.3s;
            }
            .more-menu {
              font-size: 13px;
              font-weight: 500;
              display: flex;
              align-items: images;
              transition-delay: 0.4s;
            }

            .more-menu svg {
              width: 28px;
              height: 18px;
              margin-left: 10px;
            }
        }
        
      }

      .images {
        display: flex;
        margin-left: 120px;
        position: relative;
        flex-shrink: 0;

         .images-bg {
          width: 320px;
          height: 450px;
          object-fit: cover;
          border-radius: 160px;
        }

         .images-bottle {
          position: absolute;
          top: 25%;
          left: 0;
          transform: scale(1.6);
          max-width: 100%;
        }
      }

    }

    /* ============== [ swiper-button]  ==============*/
    .swiper-button-prev,
    .swiper-button-next{
      width: 50px;
      height: 50px;
      color: #000;
      // border: 1px solid #000;
      border-radius: 50%;
      transition: all .3s ease-in-out ;

      &::after{
        font-size: 30px;
        // transition: all .3s ease-in-out ;
      }

      &:hover{
        background: rgba($color: #000000, $alpha: .7);
        color: #fff;
      }
    }

    .swiper-button-prev{
      left: -150px;
    }
  }
}



/* ========================================================== [ swiper-slide 효과 정의 부분 ]  ==========================================================*/
.swiper {
  overflow: inherit;

  //active가 아닐때
  .swiper-slide {
    opacity: 0 !important;
    transition: 0.4s;

    .content-header > *,
    .content-main > * {
      transform: translateY(-30px);
      opacity: 0;
      transition-duration: 0.8s;
    }

    .images-bg{
      transition-duration: 0.6s;
      opacity: 0;
      object-position: 60%;
    }

    .images-bottle{
      transition-duration: 0.8s;
      transform: scale(1.2);
      opacity: 0;
    }
  }

  //active일 때
  .swiper-slide-active {
    opacity: 1 !important;

    .content-header > *,
    .content-main > * {
      transform: none;
      opacity: 1;
    }

    .images-bg{
      opacity: 1;
      transform: none;
      object-position: 50%;
    }

    .images-bottle{
      opacity: 1;
      transform: scale(1.6);
    }

  }
}

/* ============ [ swiper-colorchange ]  ============ */
[data-sld="1"] .container{
  background-color: $savanna;
}

[data-sld="2"] .container{
  background-color: $glacier;
}

[data-sld="3"] .container{
  background-color: $coral;
}
</style>