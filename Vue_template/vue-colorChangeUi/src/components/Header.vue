<template>
    <header class="header glassmorphism">  
        <!-- header-logo -->
        <img class="header-logo" src="https://cdn.shopify.com/s/files/1/0689/1443/files/CLOSCA-LOGO-WEB-BLACK_130x@2x.png?v=1559116993" />
        <!-- header-menu -->
        <ul class="header-menu-list sm-hidden" >
            <li class="header-menu-item"><a href="#">Mask</a></li> 
            <li class="header-menu-item"><a href="#">Helmet</a></li> 
            <li class="header-menu-item"><a href="#">Bottle</a></li> 
            <li class="header-menu-item"><a href="#">Accessories</a></li> 
        </ul>
        <!-- header-nav-button -->
        <div class="header-nav-button sm-only" @click="activeNav()">
            <div class="line line--1" aria-hidden="true"></div>
            <div class="line line--2" aria-hidden="true"></div>
            <div class="line line--3" aria-hidden="true"></div>
        </div> 
    </header>
</template>

<script>
export default {
    methods:{
        activeNav(){//버튼클릭시 네비게이션 활성화 메서드
            var nav = document.querySelector('.nav');
            var lineOne = document.querySelector(' .header-nav-button .line--1');
            var lineTwo = document.querySelector(' .header-nav-button .line--2');
            var lineThree = document.querySelector(' .header-nav-button .line--3');
            var link = document.querySelector('.nav .nav-list');

            nav.classList.toggle('nav-open');
            nav.classList.toggle('glassmorphism');
            lineOne.classList.toggle('line-cross');
            lineTwo.classList.toggle('line-fade-out');
            lineThree.classList.toggle('line-cross');
            link.classList.toggle('fade-in');
        }
    }
}
</script>


<style lang="scss" scoped>
@import '../scss/main.scss';

.header{
    @include flexbox;
    position: fixed;
    top: 0;
    left: 0;
    flex-shrink: 0;
    padding: 0 25px;
    height: 62px;
    width: 100%;
    white-space: nowrap;   
    font-weight: 600;
    font-size: 15px;
    z-index: $header-z;

    &-logo {
        width: 116px;
    }

    &-menu-list {
        @include flexbox;
        margin-left: auto;

        .header-menu-item{
            margin-left: 30px;

            &:first-child{
                margin-left: 0;
            }
        }
    }

    &-nav-button {
        @include pos-center-y;
        right: 8%;
        padding: 0;
        width: 30px;
        cursor: pointer;

        .line{
            margin: 5px 0;
            padding: 0;
            width: 30px;
            height: 2px;
            background: #fff;
            transition: all 700ms cubic-bezier(.9, 0, .33, 1);

            &.line--1{
                width: 30px;
                transform: rotate(0) translateY(0);

                &.line-cross{
                    width: 30px;
                    transform: rotate(45deg) translateY(10px);
                    background: #fff;
                }
            }

            &.line--2{
                width: 28px;
                transform: translateX(0);

                &.line-fade-out{
                    width: 28px;
                    transform: translate(30px);
                    opacity: 0;
                }
            }

            &.line--3{
                width: 20px;
                transform: rotate(0) translateY(0);

                &.line-cross{
                    width: 30px;
                    transform: rotate(-45deg) translateY(-10px);
                    background: #fff;
                }
            }
        }
    }
}
</style>