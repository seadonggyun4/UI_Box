<template>
    <!-- ========== [ details ] ========== -->
    <section class="details">

      <!-- order details list -->
      <div class="detailTable">
        <div class="detailTable-header">
          <h2>호스트</h2>
          <div class="btn-wrap">
            <a href=".primary" class="btn primary">정상</a>
            <a href=".warning" class="btn warning">경고</a>
            <a href=".error" class="btn error">장애</a>
            <a href="*" class="btn on">View All</a>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <td>이름</td>
              <td>그룹</td>
              <td>VD</td>
              <td>상태안내</td>
            </tr>
          </thead>
          <tbody>
            <tr class="primary">
              <td>ELHOST01</td>
              <td>미지정</td>
              <td>154</td>
              <td><span class="status primary">정상</span></td>
            </tr>
            <tr class="primary">
              <td>ELHOST02</td>
              <td>미지정</td>
              <td>99</td>
              <td><span class="status primary">정상</span></td>
            </tr>
            <tr class="warning">
              <td>ELHOST03</td>
              <td>미지정</td>
              <td>100</td>
              <td><span class="status warning">경고</span></td>
            </tr>
            <tr class="error">
              <td>ELHOST04</td>
              <td>미지정</td>
              <td>43</td>
              <td><span class="status error">장애</span></td>
            </tr>
            <tr class="warning">
              <td>ELHOST05</td>
              <td>미지정</td>
              <td>8</td>
              <td><span class="status warning">경고</span></td>
            </tr>
            <tr class="primary">
              <td>ELHOST06</td>
              <td>미지정</td>
              <td>118</td>
              <td><span class="status primary">정상</span></td>
            </tr>
            <tr class="primary">
              <td>ELHOST07</td>
              <td>미지정</td>
              <td>156</td>
              <td><span class="status primary">정상</span></td>
            </tr>
            <tr class="warning">
              <td>ELHOST08</td>
              <td>미지정</td>
              <td>116</td>
              <td><span class="status warning">경고</span></td>
            </tr>
            <tr class="primary">
              <td>ELHOST09</td>
              <td>미지정</td>
              <td>113</td>
              <td><span class="status primary">정상</span></td>
            </tr>
            <tr class="error">
              <td>ELHOST10</td>
              <td>미지정</td>
              <td>107</td>
              <td><span class="status error">장애</span></td>
            </tr>
            <tr class="error">
              <td>ELHOST11</td>
              <td>미지정</td>
              <td>107</td>
              <td><span class="status error">장애</span></td>
            </tr>
            <tr class="warning">
              <td>ELHOST12</td>
              <td>미지정</td>
              <td>116</td>
              <td><span class="status warning">경고</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
</template>


<script>
import Isotope from 'isotope-layout'

export default {
  mounted(){
    // ========================= [ filter table] =========================

    window.addEventListener('load', () => {
        // isotope 라이브러리 사용
        const grid =  new Isotope("tbody", {
          itemSelector: 'tbody tr', // 적용할 아이템
          columnWidth: 100, // 아티클 요소 넓이 값
          transitionDuration: "0.5s" // 전환되는 속도
      }) //grid로 반환

      const btns = document.querySelectorAll('.detailTable .detailTable-header .btn-wrap .btn')

      btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();

          // 함수 중복실행 방지
          const isOn = e.currentTarget.classList.contains('on')
          if(isOn === false){
              activation(e)
          }
        })




          function activation(event){

            //버튼 활성화
            btns.forEach( (btn) => {
                btn.classList.remove('on')
            })
            event.currentTarget.classList.add('on')

            console.log(event.currentTarget)

            // 탐색을 위한 값 a_href 탐색
            const btn_a = event.currentTarget
            const a_href = btn_a.getAttribute('href')

            


            //grid값에 arrange매서드 사용 -> filter에 들어와있는 값을 통해 해당 클래스를 탐색
            grid.arrange({filter: a_href}) 
        }

      })


    })
  }
}
</script>