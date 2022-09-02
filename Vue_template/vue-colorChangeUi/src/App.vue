<template>
  <div class="wrap">
    <!-- ========== Header ========== -->
    <Header />
    <!-- ========== main ========== -->
    <main>
      <RouterView />
    </main>
    <!-- ========== footer ========== -->  
    <Footer />
    <!-- ========== Nav ========== --> 
    <Nav />
  </div> 
</template>


<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Nav from './components/Nav.vue'

export default {
  components:{
    Header,
    Footer,
    Nav
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
  body{
    overflow-x: hidden;
    font-family: $main-font;

    .wrap{
      height: 100%;
      width: 100%;

      main{
        margin-bottom: 30px;
      }
    }
  }
</style>