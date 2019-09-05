<template>
  <div class="home">
    <!-- 不使用axiosall时的Home.vue -->
    <Slider :swiperSlides="imgs" />
    {{ this.list }}
  </div>
</template>
 <!-- Home.vue -->
<script>
// 二. 把方法引入
import { getBaner, getHl } from '../api';
import Slider from '@/components/Slider.vue';

export default {
  name: 'home',
  async created() {
    this.imgs = await getBaner();
    // 三. 调用方法发送请求
    this.list = await getHl(); // 1 getHl方法调用 ->api/index.js //3 getHl 执行就把结果给了this.list
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
