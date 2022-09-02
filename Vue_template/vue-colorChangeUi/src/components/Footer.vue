<template>
    <footer class="footer">
      <div class="waves" aria-hidden="true">
        <div class="wave wave1" ></div>
        <div class="wave wave2" ></div>
        <div class="wave wave3" ></div>
        <div class="wave wave4" ></div>
      </div>
      <p class="footer-tail">@2022 Seo Dong Gyun | All Rights Reserved</p>
  </footer>
</template>


<style lang="scss" scoped>
@import '../scss/main.scss';

.footer{
  @include column-flexbox;
  position: relative;
  padding: 20px 50px;
  width: 100%;
  min-height: 100px;
  background:#3586ff;


  &-tail{
    margin-top: 15px;
    margin-bottom: 10px;
    color: #fff;
    text-align: center;
    font-size: 1.1em;
  }

  .wave{
    position: absolute;
    top: -100px;
    left: 0;
    width: 100%;
    height: 100px;
    background: url(../assets/wave.png);
    background-size: 1000px 100px;
    /* background-repeat: no-repeat; */

    &.wave1{
      z-index: $wave1-z;
      opacity: 1;
      bottom: 0;
      animation: animateWave 4s linear infinite;
    }

    &.wave2{
      z-index: $wave2-z;
      opacity: 0.5;
      bottom: 10px;
      animation: animateWave_02 4s linear infinite;
    }

    &.wave3{
      z-index: $wave1-z;
      opacity: 0.2;
      bottom: 15px;
      animation: animateWave 3s linear infinite;
    }

    &.wave4{
      z-index: $wave2-z;
      opacity: 0.7;
      bottom: 20px;
      animation: animateWave_02 3s linear infinite;
    }

    /* 왼쪽 -> 오른쪽 으로 흐른다 */
    @keyframes animateWave
    {
      0%{
        background-position-x: 1000px;
      }
      100%{
        background-position-x: 0px;
      }
    }

    /* 오른쪽 -> 왼쪽 으로 흐른다 */
    @keyframes animateWave_02
    {
      0%{
        background-position-x: 0px;
      }
      100%{
        background-position-x: 1000px;
      }
    }

  }
}


</style>