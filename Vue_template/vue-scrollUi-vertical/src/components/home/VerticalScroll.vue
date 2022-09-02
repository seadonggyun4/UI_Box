<template>
    <!-- 가로 section -->
    <section class="about horizontal-scroll__section">
        <div class="horizontal-scroll__wrapper">
            <div class="horizontal-scroll__content">
                <div class="about__item">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/person1.jpg"/>
                    <div class="content">
                        <div>
                            <h3>What attained our violin</h3>
                            <p>Been is in merely immune makes back peacefully.</p>
                        </div>
                    </div>
                </div>
                <div class="about__item">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/person3.jpg"/>
                    <div class="content">
                        <div>
                            <h3>Imitation believed nothing soft</h3>
                            <p>A this that not, most god, to in times and a no question.</p>
                        </div>
                    </div>
                </div>
                <div class="about__item">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/person2.jpg"/>
                    <div class="content">
                        <div>
                            <h3>A the he didn't however white</h3>
                            <p>Nice structure when on to could hotel cannot as proposal, seven way.</p>
                        </div>
                    </div>
                </div>
                <div class="about__item">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/person4.jpg"/>
                    <div class="content">
                        <div>
                            <h3>Much of contracting</h3>
                            <p>A gets the can sitting however by turned it built it about and yes.</p>
                        </div>
                    </div>
                </div>
                <div class="about__item">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/person1.jpg"/>
                    <div class="content">
                        <div>
                            <h3>Completely derived</h3>
                            <p>Were no heavy was for little him the seem few be cleaning separated.</p>
                        </div>
                    </div>
                </div>
                <div class="about__item">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/person1.jpg"/>
                    <div class="content">
                        <div>
                            <h3>What attained our violin</h3>
                            <p>Been is in merely immune makes back peacefully.</p>
                        </div>
                    </div>
                </div>
                <div class="about__item">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/person3.jpg"/>
                    <div class="content">
                        <div>
                            <h3>Imitation believed nothing soft</h3>
                            <p>A this that not, most god, to in times and a no question.</p>
                        </div>
                    </div>
                </div>
                <div class="about__item">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/person2.jpg"/>
                    <div class="content">
                        <div>
                            <h3>A the he didn't however white</h3>
                            <p>Nice structure when on to could hotel cannot as proposal, seven way.</p>
                        </div>
                    </div>
                </div>
                <div class="about__item">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/person4.jpg"/>
                    <div class="content">
                        <div>
                            <h3>Much of contracting</h3>
                            <p>A gets the can sitting however by turned it built it about and yes.</p>
                        </div>
                    </div>
                </div>
                <div class="about__item">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2479807/person1.jpg"/>
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

            const contentTransform = window.getComputedStyle(scrollContent).transform //transform 값 받아오기
            const XData = Number(contentTransform.match(/-\d*/)[0]) //transform값에서 X데이터만 추출

            if(XData < -4000){//초기화
                scrollSection.style.backgroundColor = "#fff"
                scrollSection.style.color = "#000"
            } else if(XData < -3300){//fourt color
                scrollSection.style.backgroundColor = "#e3857a"
                scrollSection.style.color = "#f1dba7"
            } else if (XData < -2300){//tird color
                scrollSection.style.backgroundColor = "#536fae"
                scrollSection.style.color = "#eacbd1"
            } else if(XData < -1300){//second color
                scrollSection.style.backgroundColor = "#eacbd1"
                scrollSection.style.color = "#536fae"
            } else if(XData < -500){//first color
                scrollSection.style.backgroundColor = "#bcb8ad"
                scrollSection.style.color = "#032f35"
            } else if(XData >= -500){//초기화
                scrollSection.style.backgroundColor = "#fff"
                scrollSection.style.color = "#000"
            }
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

        img{
            object-fit: cover;
            height: 500px;
            width: 500px;
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