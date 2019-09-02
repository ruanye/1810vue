<template>
  <div class="home">
    这是首页 Home.vue
    <Slider :banners="imgs" />
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue';

export default {
  name: 'home',
  data() {
    return {
      imgs: [
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/33174/31/13072/88452/5cf7cf55Ebc3e4750/5d8a875734269811.jpg!cr_1125x445_0_171!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/57280/7/9226/105524/5d69ccdfE072817be/01fb79e85d9fa8f2.jpg!cr_1125x445_0_171!q70.jpg.dpg',
      ],
    };
  },
  components: {
    Slider,
  },
};
</script>
