<template>
  <div class="wrap">
    <!-- ========== Header ========== -->
    <Header />
    <!-- ========== ParallxWrap ========== -->
    <ParallxWrap>
        <!-- ========== main ========== -->
        <main>
          <RouterView />
        </main>
        <!-- ========== footer ========== -->  
        <Footer />
    </ParallxWrap>
    <!-- ========== Nav ========== --> 
    <Nav />
  </div> 
</template>


<script>
import Header from './components/Header.vue'
import ParallxWrap from './components/module/ParallxWrap.vue'
import Footer from './components/Footer.vue'
import Nav from './components/Nav.vue'

export default {
  components:{
    Header,
    ParallxWrap,
    Footer,
    Nav
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
  body{
    overflow-x: hidden;
  
    .wrap{
      height: 100vh;
      width: 100%;
      background-color: #fedcc8;
    }
  }
</style>