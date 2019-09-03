<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSlides" :key="slide.imgId">
      <img :src="slide.imgUrl" alt="" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  props: ['swiperSlides'],
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
      },
    };
  },
};
</script>
<style lang="less" scoped>
swiper-slide img {
  width: 100%;
  height: auto;
}
</style>
