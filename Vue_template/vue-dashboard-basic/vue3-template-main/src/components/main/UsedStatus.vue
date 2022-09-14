<template>
    <!-- ========== [ used-status ] ========== -->
    <section class="used-status">
      <div class="usedBx host">
        <h2>호스트 사용현황</h2>
        <ul class="statusList">
          <li class="item">
            <div class="text-group">
              <div class="text-group-title">
                <h4>cpu사용현황</h4>
                <em>(vCPU : 3752 / CPU Core : 640)</em>
              </div>
              <p class="host">586%</p>
            </div>
            <div class="status-bg">
              <span class="host" style="width: 586%;"></span>
            </div>
          </li>
          <li class="item">
            <div class="text-group">
              <div class="text-group-title">
                <h4>Memory 가상화 율</h4>
                <em>(사용 : 6541GB / 전체 : 5117GB)</em>
              </div>
              <p class="host">128%</p>
            </div>
            <div class="status-bg">
              <span class="host" style="width: 128%;"></span>
            </div>
          </li>
          <li class="item">
            <div class="text-group">
              <div class="text-group-title">
                <h4>Storage 사용현황</h4>
                <em>(사용 : 1452GB / 전체 : 2230GB)</em>
              </div>
              <p class="host">65%</p>
            </div>
            <div class="status-bg">
              <span class="host" style="width: 65%;"></span>
            </div>
          </li>
        </ul>
      </div>
      <div class="usedBx vd">
        <h2>VD 사용현황</h2>
        <ul class="statusList">
          <li class="item">
            <div class="text-group">
              <div class="text-group-title">
                <h4>VD 가동률</h4>
                <em>(on VD : 524 / 전체 VD : 1014)</em>
              </div>
              <p class="vd">52%</p>
            </div>
            <div class="status-bg">
              <span class="vd" style="width: 52%;"></span>
            </div>
          </li>
          <li class="item">
            <div class="text-group">
              <div class="text-group-title">
                <h4>VD 접속률</h4>
                <em>(사용 : 53 / 전체 : 145)</em>
              </div>
              <p class="vd">37%</p>
            </div>
            <div class="status-bg">
              <span class="vd" style="width: 37%;"></span>
            </div>
          </li>
          <li class="item">
            <div class="text-group">
              <div class="text-group-title">
                <h4>VD 할당률</h4>
                <em>(사용 : 145 / 전체 : 1014)</em>
              </div>
              <p class="vd">14%</p>
            </div>
            <div class="status-bg">
              <span class="vd" style="width: 14%;"></span>
            </div>
          </li>
        </ul>
      </div>
    </section>
</template>

<script>
import ScrollMagic from 'scrollmagic'


export default {
  mounted(){
    // ========================= [ scroll Magic for used-status] =========================
    new ScrollMagic.Controller();// controller

    const usedBxes = document.querySelectorAll('.used-status .usedBx')

    usedBxes.forEach((usedBx) => {
      new ScrollMagic
        .Scene({
          triggerElement: usedBx, //보여짐 여부를 감시할 요소를 지정
          triggerHook: .8, //감시할 요소를 인지, 식별하는 지점을 명시 -> 뷰포트 최상단 0 ~ 뷰포트 최하단 1 로 환산한다. 
          reverse:false //한번만 실행
        })
        .setClassToggle(usedBx, 'active') // setClassToggle(적용될 식별자, 토글될 클래스 명)
        .addTo(new ScrollMagic.Controller());
    })
  }
}
</script>