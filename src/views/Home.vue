<template>
  <div class="home">
    <Slider :swiperSlides="imgs" />
  </div>
</template>
 <!-- Home.vue -->
<script>
import api from '../api';
import Slider from '@/components/Slider.vue';

export default {
  name: 'home',
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
