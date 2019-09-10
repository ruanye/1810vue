<template>
  <div class="home">
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div v-else>
      <!-- 不使用axiosall时的Home.vue -->
      <Slider :swiperSlides="imgs" />
    </div>
    <Icon type="wode" size="100" />
    <Button type="primary">这是我的按钮</Button>
    <div>
      <ul class="tablist">
        <li
          v-for="(item, index) in navlist"
          :key="index"
          @click="changeindex(index)"
          :class="{ active: index == activeIndex }"
        >
          {{ item }}
        </li>
      </ul>
      <ul class="tabcontent">
        <li v-for="(item, index) in navcontent" :key="index">
          <template v-if="index == activeIndex">
            {{ item }}
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>
 <!-- Home.vue -->
<script>
// 二. 把方法引入
import { getAll } from '../api/homeApi';
import Slider from '@/components/Slider.vue';
import Loading from '@/components/Loading.vue';
import Icon from '@/components/Icon.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'home',
  async created() {
    [this.imgs, this.list] = await getAll();

    this.loading = false;
  },
  data() {
    return {
      activeIndex: 0, // 默认被激活的样式
      msg: 'hello world',
      loading: true,
      imgs: [],
      list: [],
      list1: [],
      navlist: ['甲方', '乙方', '武老师'],
      navcontent: ['葛优', 'xxx', '不认识'],
    };
  },
  methods: {
    changeindex(index) {
      this.activeIndex = index;
    },
  },
  components: {
    Slider,
    Loading,
    Icon,
    Button,
  },
};
</script>
<style lang="less" scoped>
.tablist {
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    width: 200px;
    height: 60px;
    line-height: 60px;
    border: 1px solid #999;
    &.active {
      background: blue;
      color: white;
    }
  }
}
.tabcontent {
  font-size: 40px;
}
</style>
