<template>
    <main class="main">
        <TopBar />
        <CardBox />
        <Details />
        <GraphBox />
        <UsedStatus />
        <Footer />
    </main>
</template>


<script>
import TopBar from './main/TopBar.vue'
import CardBox from './main/CardBox.vue'
import Details from './main/Details.vue'
import GraphBox from './main/GraphBox.vue'
import UsedStatus from './main/UsedStatus.vue'
import Footer from './Footer.vue'

export default {
    components:{
        TopBar,
        CardBox,
        Details,
        GraphBox,
        UsedStatus,
        Footer
    },
    mounted(){
        // ========================= [ main ] =========================
        const toggleMain = document.querySelector('.topbar .toggle')
        const toggleHeader = document.querySelector('.header-nav .toggle')
        const headerNav = document.querySelector('.header .header-nav')
        const main = document.querySelector('.main')

        toggleMain.addEventListener('click', () => {
        headerNav.classList.toggle('active')
        main.classList.toggle('active')
        })

        toggleHeader.addEventListener('click', () => {
        headerNav.classList.toggle('active')
        main.classList.toggle('active')
        })
    }
}
</script>