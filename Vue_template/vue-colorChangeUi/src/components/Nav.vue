<template>
    <!-- nav -->
    <nav class="nav">
        <ul class="nav-list">
            <li class="nav-list-item"><a href="#">Mask</a></li> 
            <li class="nav-list-item"><a href="#">Helmet</a></li> 
            <li class="nav-list-item"><a href="#">Bottle</a></li> 
            <li class="nav-list-item"><a href="#">Accessories</a></li> 
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
@import '../scss/main.scss';

/* nav */
.nav {
    position: fixed;
    top: 0;
    left: 0;
    transform: translateX(-300px);
    height: 100%;
    width: 400px;
    border: 1px solid transparent;
    border-radius: 0% 0% 100% 50%;
    transition: all 1s cubic-bezier(.8, 0, .33, 1);
    overflow: hidden;
    z-index: $nav-z;

    .nav-list{
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

        .nav-list-item{
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
    }
}
</style>