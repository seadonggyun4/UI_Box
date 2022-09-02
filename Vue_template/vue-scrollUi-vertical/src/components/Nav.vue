<template>
    <!-- nav-side -->
    <nav>
        <div class="nav-links">
            <a href="" class="link">Home</a>
            <a href="" class="link">Contact</a>
            <a href="" class="link">Profile</a>
            <a href="" class="link">About</a>
        </div>
    </nav>
</template>

<script>
export default {
    mounted(){
        var menuBtn = document.querySelector('.menu-btn');
        var nav = document.querySelector('nav');
        var lineOne = document.querySelector(' .menu-btn .line--1');
        var lineTwo = document.querySelector(' .menu-btn .line--2');
        var lineThree = document.querySelector(' .menu-btn .line--3');
        var link = document.querySelector('nav .nav-links');
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('nav-open');
            lineOne.classList.toggle('line-cross');
            lineTwo.classList.toggle('line-fade-out');
            lineThree.classList.toggle('line-cross');
            link.classList.toggle('fade-in');
        })
    }
}
</script>

<style lang="scss" scoped>
/* nav */
nav {
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    transform: translateX(-300px);
    height: 100%;
    width: 400px;
    transition: all 800ms cubic-bezier(.8, 0, .33, 1);
    border-radius: 0% 0% 100% 50%;
    z-index: 100;

    .nav-links{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform: translateX(-100px);
        opacity: 0;
        transition: all 900ms cubic-bezier(.9, 0, .33, 1);

        .link{
            margin: 20px 0;
            text-decoration: none;
            font-family: sans-serif;
            color: rgba(0,0,0,0.9);
            font-weight: 700;
            text-transform: uppercase;
            font-size: 1.2rem;
            transition: all 300ms cubic-bezier(.9, 0, .33, 1);
            
            &:hover{
                color: #fff;
            }
        }

        &.fade-in{
            opacity: 1;
            transform: translateX(0px);
        }
    }

    &.nav-open{
        transform: translateX(0px);
        border-radius: 0% 0% 0% 0%;
        background-color: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        border: 1px solid rgba(255, 255, 255, 0.18);
        box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
        -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
        border-radius: 12px;
        -webkit-border-radius: 12px;
        color: rgba(255, 255, 255, 0.75);
    }
}
</style>