<template>
    <!-- 가로 section -->
    <section class="about horizontal-scroll__section">
        <div class="horizontal-scroll__wrapper">
            <div class="horizontal-scroll__content">
                <div class="about__item">
                    <div class="image">
                        <img src="https://cdn.shopify.com/s/files/1/0689/1443/products/CloscaWaveSahara_bolso_1100x.jpg?v=1638455109"/>
                    </div>
                    <div class="content">
                        <div>
                            <h3>What attained our violin</h3>
                            <p>Been is in merely immune makes back peacefully.</p>
                        </div>
                    </div>
                </div>
                <div class="about__item">
                    <div class="image">
                        <img src="https://cdn.shopify.com/s/files/1/0689/1443/products/Closca_Bottle_Wave_Sahara_450ml_Close_a3f0e978-72ff-4b5c-878e-dd6cab7e2625_1100x.jpg?v=1638455109"/>
                    </div>
                    <div class="content">
                        <div>
                            <h3>Imitation believed nothing soft</h3>
                            <p>A this that not, most god, to in times and a no question.</p>
                        </div>
                    </div>
                </div>
                <div class="about__item">
                    <div class="image">
                        <img src="https://cdn.shopify.com/s/files/1/0689/1443/products/CloscaWaveAmazonia_mochila_1100x.jpg?v=1638455109"/>
                    </div>
                    <div class="content">
                        <div>
                            <h3>A the he didn't however white</h3>
                            <p>Nice structure when on to could hotel cannot as proposal, seven way.</p>
                        </div>
                    </div>
                </div>
                <div class="about__item">
                    <div class="image">
                        <img src="https://cdn.shopify.com/s/files/1/0689/1443/products/Closca_Bottle_Wave_Amazonia_450ml_Close_b215804b-865d-48be-b342-dd7dad7b1604_1100x.jpg?v=1638455109"/>
                    </div>
                    <div class="content">
                        <div>
                            <h3>Much of contracting</h3>
                            <p>A gets the can sitting however by turned it built it about and yes.</p>
                        </div>
                    </div>
                </div>
                <div class="about__item">
                    <div class="image">
                        <img src="https://cdn.shopify.com/s/files/1/0689/1443/products/CloscaHelmetLoopHimalaya_wave_8_1100x.jpg?v=1638455109"/>
                    </div>
                    <div class="content">
                        <div>
                            <h3>Completely derived</h3>
                            <p>Were no heavy was for little him the seem few be cleaning separated.</p>
                        </div>
                    </div>
                </div>
                <div class="about__item">
                    <div class="image">
                        <img src="https://cdn.shopify.com/s/files/1/0689/1443/products/Closca_Bottle_Wave_Himalaya_450ml_close_b5b06d8b-34bb-43b0-bbbf-4198b804196b_1100x.jpg?v=1638455109"/>
                    </div>
                    <div class="content">
                        <div>
                            <h3>What attained our violin</h3>
                            <p>Been is in merely immune makes back peacefully.</p>
                        </div>
                    </div>
                </div>
                <div class="about__item">
                    <div class="image">
                        <img src="https://cdn.shopify.com/s/files/1/0689/1443/products/CloscaWaveAbyss_loop_8_1100x.jpg?v=1638455109"/>
                    </div>
                    <div class="content">
                        <div>
                            <h3>Imitation believed nothing soft</h3>
                            <p>A this that not, most god, to in times and a no question.</p>
                        </div>
                    </div>
                </div>
                <div class="about__item">
                    <div class="image">
                        <img src="https://cdn.shopify.com/s/files/1/0689/1443/products/Closca_Bottle_Wave_ABYSS_450ml_Close_1100x.jpg?v=1638455109"/>
                    </div>
                    <div class="content">
                        <div>
                            <h3>A the he didn't however white</h3>
                            <p>Nice structure when on to could hotel cannot as proposal, seven way.</p>
                        </div>
                    </div>
                </div>
                <div class="about__item">
                    <div class="image">
                        <img src="https://cdn.shopify.com/s/files/1/0689/1443/products/wave_arizona_02_800x800_e6c9f29c-e252-4a7c-8106-96000a71717d_1100x.jpg?v=1638455109"/>
                    </div>
                    <div class="content">
                        <div>
                            <h3>Much of contracting</h3>
                            <p>A gets the can sitting however by turned it built it about and yes.</p>
                        </div>
                    </div>
                </div>
                <div class="about__item">
                    <div class="image">
                        <img src="https://cdn.shopify.com/s/files/1/0689/1443/products/Closca_Bottle_Wave_Arizona_450ml_Close_4a2823ce-ec02-4b6f-b5b8-4d0b542dd950_1100x.jpg?v=1638455109"/>
                    </div>
                    <div class="content">
                        <div>
                            <h3>Completely derived</h3>
                            <p>Were no heavy was for little him the seem few be cleaning separated.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
// import gsap from 'gsap'

export default {
    methods: {
        verticalScroll(){
                // ============================================================  [ Vertical Scroll animation ] ============================================================
                // gsap 사용

                const scrollSection = document.querySelector(".horizontal-scroll__section");
                const scrollContent = document.querySelector(".horizontal-scroll__content");

                // const scrollHeight = scrollSection.clientHeight;
                // const contentWidth = scrollContent.clientWidth;

                const scrolled = window.pageYOffset;
                const sectionOffset = Math.abs(scrollSection.offsetTop - scrolled);
                const notReachedBottom = parseInt(
                    Math.max(
                        0,
                        scrollSection.getBoundingClientRect().bottom - window.innerHeight
                    )
                );

                if (scrollSection.offsetTop <= scrolled && notReachedBottom) {
                    this.gsap.to(scrollContent, {
                        x: -sectionOffset
                    });
                }
        },
        changeColor(){
            // ============================================================  [ 색상변환 메서드 ] ============================================================
            const scrollSection = document.querySelector(".horizontal-scroll__section");
            const scrollContent = document.querySelector(".horizontal-scroll__content");
            const contentText = document.querySelectorAll(".content div p")

            contentText.forEach((p) => {
                
                const contentTransform = window.getComputedStyle(scrollContent).transform //transform 값 받아오기
                const XData = Number(contentTransform.match(/-\d*/)[0]) //transform값에서 X데이터만 추출
    
                if(XData < -4000){//초기화
                    scrollSection.style.background = "#fff"
                    scrollSection.style.color = "#000"
                    p.style.color = "rgba(0, 0, 0, 0.6)"
                } else if(XData < -3300){//fourt color
                    scrollSection.style.background = "#e3857a"
                    scrollSection.style.color = "#f1dba7"
                    p.style.color = "#f1dba7"
                } else if (XData < -2300){//tird color
                    scrollSection.style.background = "#536fae"
                    scrollSection.style.color = "#eacbd1"
                     p.style.color = "#eacbd1"
                } else if(XData < -1300){//second color
                    scrollSection.style.background = "#eacbd1"
                    scrollSection.style.color = "#536fae"
                     p.style.color = "#536fae"
                } else if(XData < -500){//first color
                    scrollSection.style.background = "#bcb8ad"
                    scrollSection.style.color = "#032f35"
                     p.style.color = "#032f35"
                } else if(XData >= -500){//초기화
                    scrollSection.style.background = "#fff"
                    scrollSection.style.color = "#000"
                    p.style.color = "rgba(0, 0, 0, 0.6)"
                }



            })
        }
    },
    mounted(){
        //window scroll 이벤트 트리거
        document.addEventListener("scroll", () => {
            this.verticalScroll()
            this.changeColor()
        }); 
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/main.scss';

.about {
  background-color: #fff;
  color:#000;
  transition: all .8s ease-in-out;

    .about__item {
        display: inline-block;
        width: 700px;
        padding: 0px 40px;
        display: flex;
        flex-direction: column;

        .image{
            height: 500px;
            width: 500px;
            border-radius: 15px;
            overflow: hidden;


            img{
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
        }


        .content{
            height: 50%;
            max-width: 500px;
            flex: 1;
            display: flex;
            align-items: center;

            h3{
                font-size: 32px;
                max-width: 250px;
                line-height: 1.2;
            }

            p{
                color: rgba(0, 0, 0, 0.6);
                max-width: 350px;
                margin-top: 8px;
                transition: color .5s ease-in-out;
            }
        }

        &:nth-child(odd) img{
            margin-bottom: 64px;
        }

        &:nth-child(even){
            flex-direction: column-reverse;
        }
    }
}

.horizontal-scroll__section {
  position: relative;
  height: 550vh; //이 크기 기준으로 가로스크롤 넓이가 결정된다.
    .horizontal-scroll__wrapper {
    position: sticky;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;

        .horizontal-scroll__content {
        display: flex;
        padding: 80px;
        height: 100vh;
        width: 350vh;
        will-change: transform;
        }
    }

}

</style>