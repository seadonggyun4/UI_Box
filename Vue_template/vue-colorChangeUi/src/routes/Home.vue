<template>
    <SliderShowcase />
    <TitleSection />
    <VerticalScroll />
</template>


<script>
import SliderShowcase from '@/components/home/SliderShowcase.vue'
import TitleSection from '@/components/home/TitleSection.vue'
import VerticalScroll from '@/components/home/VerticalScroll.vue'

export default {
    components: {
        SliderShowcase,
        TitleSection,
        VerticalScroll
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/main.scss';
</style>