<template>
<div class="basis-10/12 border-4 border-black">
  <vueper-slides autoplay>
  <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content" />
</vueper-slides>
<!--<carousel-image></carousel-image>-->
</div>
</template>

<script>
// import CarouselImage from "@/components/CarouselImage";
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
  name: "TheCarousel",
  components: {
    // CarouselImage,
    VueperSlides,
    VueperSlide,
  },
  data: () => ({
  slides: [
    {
      title: 'Slide #1',
      content: 'Slide content.'
    },
    {
      title: 'Slide #2',
      content: 'Slide content.'
    }
  ]
})
}
</script>

<style scoped>

</style>