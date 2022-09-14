<template>
    <!-- ========== [ topbar ] ========== -->
    <section class="topbar">
      <!-- toggle-btn -->
      <div class="toggle">
        <MdListIcon w="40px" h="40px"/>
      </div>
     
      <!-- user -->
      <div class="user">
        <img src="../../img/user.jpg" alt="user image"/>
      </div>
    </section>
</template>


<script>
import MdListIcon from 'vue-ionicons/dist/md-list.vue'

export default {
  components: {
    MdListIcon
  }  
}
</script>