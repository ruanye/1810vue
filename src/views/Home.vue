<template>
  <div class="home">
    <Slider :swiperSlides="imgs" />
    {{ this.list }}
  </div>
</template>
 <!-- Home.vue -->
<script>
// 二. 把方法引入
import { getBaner, getHl, getList } from '../api';
import Slider from '@/components/Slider.vue';

export default {
  name: 'home',
  async created() {
    this.imgs = await getBaner();
    this.list = await getHl(); // 1 getHl方法调用 ->api/index.js //3 getHl 执行就把结果给了this.list
    // 三. 调用方法发送请求
    this.list1 = await getList();
  },
  data() {
    return {
      imgs: [],
      list: [],
      list1: [],
    };
  },
  components: {
    Slider,
  },
};
</script>
