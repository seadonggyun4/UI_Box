<template>
    <header class="header">  
        <!-- button -->
        <div class="menu-btn">
                <div class="line line--1"></div>
                <div class="line line--2"></div>
                <div class="line line--3"></div>
        </div>  
    </header>
</template>


<style lang="scss" scoped>
    .header{
       .menu-btn {
            position: fixed;
            top: 3%;
            right: 3%;
            padding: 0;
            width: 30px;
            cursor: pointer;
            z-index: 2;

            .line{
                padding: 0;
                width: 30px;
                background: #fff;
                height: 2px;
                margin: 5px 0;
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