<template>
    <!-- =============================  [ header ] ============================= -->
    <header class="header">
        <div class="header-nav">

        <div class="header-title">
            <a href="#">
            <span class="icon"><LogoIonicIcon w="30px" h="30px" animate="rotate"/></span>
            <span class="title">Center Post</span>
            </a>
        </div>

        <div class="toggle sm-only">
            <AlertIcon name="menu-outline"/>
        </div>

        <ul>
            <li>
            <a href="#">
                <span class="icon"><MdPeopleIcon w="30px" h="30px"/></span>
                <span class="title">호스트관리</span>
            </a>
            </li>
            <li>
            <a href="#">
                <span class="icon"><MdLaptopIcon w="30px" h="30px"/></span>
                <span class="title">VD관리</span>
            </a>
            </li>
            <li>
            <a href="#">
                <span class="icon"><IosContactIcon w="30px" h="30px"/></span>
                <span class="title">사용자관리</span>
            </a>
            </li>
            <li>
            <a href="#">
                <span class="icon"><IosFingerPrintIcon w="30px" h="30px"/></span>
                <span class="title">운영관리</span>
            </a>
            </li>
            <li>
            <a href="#">
                <span class="icon"><IosCreateIcon w="30px" h="30px"/></span>
                <span class="title">정책관리</span>
            </a>
            </li>
            <li>
            <a href="#">
                <span class="icon"><IosClipboardIcon w="30px" h="30px"/></span>
                <span class="title">이력관리</span>
            </a>
            </li>
            <li class="clicked">
            <a href="#">
                <span class="icon"><IosCalendarIcon w="30px" h="30px"/></span>
                <span class="title">Dashboard</span>
            </a>
            </li>
        </ul>
        </div>
    </header>
</template>


<script>
import LogoIonicIcon from 'vue-ionicons/dist/logo-ionic.vue'
import MdPeopleIcon from 'vue-ionicons/dist/md-people.vue'
import MdLaptopIcon from 'vue-ionicons/dist/md-laptop.vue'
import IosContactIcon from 'vue-ionicons/dist/ios-contact.vue'
import IosFingerPrintIcon from 'vue-ionicons/dist/ios-finger-print.vue'
import IosCreateIcon from 'vue-ionicons/dist/ios-create.vue'
import IosClipboardIcon from 'vue-ionicons/dist/ios-clipboard.vue'
import IosCalendarIcon from 'vue-ionicons/dist/ios-calendar.vue'

export default {
    components:{
        LogoIonicIcon,
        MdPeopleIcon,
        MdLaptopIcon,
        IosContactIcon,
        IosFingerPrintIcon,
        IosCreateIcon,
        IosClipboardIcon,
        IosCalendarIcon
    },
    mounted(){
        // ========================= [ header ] =========================
        const lists = document.querySelectorAll('.header-nav li')

        function activeLink(){
        lists.forEach(list => {
            list.classList.remove('clicked');

            this.classList.add('clicked')
        })
        }

        lists.forEach(list => {
        list.addEventListener('click', activeLink)
        })
    }
}
</script>