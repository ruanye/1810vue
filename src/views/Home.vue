<template>
  <div class="home">
    <Slider :swiperSlides="imgs" />
  </div>
</template>
 <!-- Home.vue -->
<script>
import { getBaner } from '../api';
import Slider from '@/components/Slider.vue';

export default {
  name: 'home',
  async created() {
    this.imgs = await getBaner();
  },
  data() {
    return {
      imgs: [],
    };
  },
  components: {
    Slider,
  },
};
</script>
