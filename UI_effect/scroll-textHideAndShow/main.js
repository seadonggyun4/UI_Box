//[Gsap ScrollTrigger]
//Gsap ScrollTrigger 사용 , ScrollMagic 과 사용방법 유사

const reveal = gsap.utils.toArray('.reveal')
reveal.forEach((text,i) => {
  ScrollTrigger.create({
    trigger:text, // 스크롤 감시개체
    toggleClass: 'active', //토글 클래스
    statr: "top 90%",//시작지점
    end: "top 20%",// 끝지점
    markers: true //마커표시
  })
});