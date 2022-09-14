<template>
    <!-- ========== [ cardBox ] ========== -->
    <section class="cardbox">
      <div class="card host">
        <div class="card-title">
          <h2>호스트 현황</h2> 
        </div>
        <ul class="status-list">
          <li class="status">
            <div class="imgBx" aria-hidden="true">
              <img src="../../img/host1.png" alt="host1"/>
            </div>
            <div class="textBx">
              <span>정상</span>
              <strong class="text-primary">10</strong>
            </div>
          </li>
          <li class="status">
            <div class="imgBx" aria-hidden="true">
              <img src="../../img/host2.png" alt="host1"/>
            </div>
            <div class="textBx">
              <span>경고</span>
              <strong class="text-warning">10</strong>
            </div>
          </li>
          <li class="status">
            <div class="imgBx" aria-hidden="true">
              <img src="../../img/host3.png" alt="host1"/>
            </div>
            <div class="textBx">
              <span>장애</span>
              <strong class="text-error">10</strong>
            </div>
          </li>
        </ul>
        
      </div>
      <div class="card vd">
        <div class="card-title">
          <h2>VD 현황</h2> 
        </div>
        <ul class="status-list">
          <li class="status">
            <div class="imgBx" aria-hidden="true">
              <img src="../../img/vd1.png" alt="host1"/>
            </div>
            <div class="textBx">
              <span>정상</span>
              <strong class="text-primary">10</strong>
            </div>
          </li>
          <li class="status">
            <div class="imgBx" aria-hidden="true">
              <img src="../../img/vd2.png" alt="host1"/>
            </div>
            <div class="textBx">
              <span>경고</span>
              <strong class="text-warning">10</strong>
            </div>
          </li>
          <li class="status">
            <div class="imgBx" aria-hidden="true">
              <img src="../../img/vd3.png" alt="host1"/>
            </div>
            <div class="textBx">
              <span>장애</span>
              <strong class="text-error">10</strong>
            </div>
          </li>
        </ul>
        
      </div>
      <div class="card blue">
        <div class="card-title">
          <h2>사용자 현황</h2>
        </div>
        <div class="card-content">
          <div class="iconBx">
            <IosGlobeIcon w="100px" h="100px"/>
          </div>
          <div>
            <div class="numbers">49/145</div>
            <div class="cardName">접속자/총사용자</div>
          </div>
        </div>
        
      </div>
      <div class="card blue">
        <div class="card-title">
          <h2>신청 현황</h2>
        </div>
        <div class="card-content">
          <div class="iconBx">
            <IosFolderOpenIcon w="100px" h="100px"/>
          </div>
          <div>
            <div class="numbers">0</div>
            <div class="cardName">총 신청 현황</div>
          </div>
        </div>
      </div>
    </section>
</template>



<script>
import IosGlobeIcon from 'vue-ionicons/dist/ios-globe.vue'
import IosFolderOpenIcon from 'vue-ionicons/dist/ios-folder-open.vue'

export default {
    components: {
        IosGlobeIcon,
        IosFolderOpenIcon
    }    
}
</script>