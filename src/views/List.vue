<template>
  <div>
    <my-tab>列表</my-tab>
    <div class="container" ref="sEle" @scroll="slmore">
      <!-- views/List.vue -->
      <div class="list">
        <ul>
          <router-link
            :to="{ path: `/detail/`, query: { id: item.id } }"
            v-for="item in list"
            :key="item.id"
            tag="li"
          >
            <img :src="item.img" />
            <p>{{ item.name }}</p>
            <button class="btn" @click.stop="addCar(item)">添加到购物车</button>
          </router-link>
        </ul>

        这是列表
        <button
          :class="{ btn: hasMore, 'btn-default': !hasMore }"
          @click="loadmore"
        >
          {{ hasMore ? "点击加载更多" : "没有数据了" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { getPage } from '../api/listApi';
import MyTab from '../components/MyTab.vue';

export default {
  name: 'list',
  created() {
    this.getPageApi();
  },
  components: {
    MyTab,
  },
  mounted() {},
  data() {
    return {
      page: 1, // 默认请求第一页
      list: [],
      hasMore: true, // 默认有下一页，到底有没有下一页由我们请求回来的数据决定
    };
  },
  methods: {
    // 添加到购物车
    addCar(single) {
      // 本地缓存应该有个购物车列表的数组
      let carlist = localStorage.carlist
        ? JSON.parse(localStorage.carlist)
        : [];
      // item 放入购物车 如果购物车里面此商品存在则数量加1
      // 判断商品是否已经在购物车里面
      // eslint-disable-next-line eqeqeq
      const good = carlist.find(item => item.id == single.id);

      // 如果商品在购物车里面不存在，则数量为1 否则在原来的数量上面加1 定义一个数据的属性叫做count
      if (!good) {
        // eslint-disable-next-line no-param-reassign
        single.count = 1;
        // 商品没在购物车里 放入购物车数组
        carlist = [...carlist, single];
      } else {
        good.count += 1;
      }
      // 把购物车列表重新存到缓存里面
      localStorage.carlist = JSON.stringify(carlist);
    },
    // 封装滚动里面的加载更多事件
    slfn(ele, fn) {
      const el = this.$refs[ele];
      const { scrollHeight, scrollTop, clientHeight } = el;
      if (clientHeight + scrollTop + 10 > scrollHeight) {
        fn.apply(this);
      }
    },
    // 滚动事件
    slmore() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.slfn('sEle', this.loadmore);
      }, 13);
      // 获取到滚动的元素
    },
    async getPageApi() {
      // 如果没有下一页，就不在发请求了
      if (!this.hasMore) return;
      const { hasMore, pageData: list } = await getPage(this.page);
      // 是否有下页面赋值给this
      this.hasMore = hasMore;
      // 每次把请求回来的数据和原来的数据合并
      this.list = [...this.list, ...list];
    },
    loadmore() {
      // 加载更多的方法
      this.page = this.page + 1;
      this.getPageApi();
    },
  },
};
</script>
<style lang="less" scoped>
.btn-default {
  width: 200px;
  height: 60px;
  background: #e3e3e3;
  color: #000;
  font-size: 26px;
  border: none;
  outline: none;
  appearance: none;
  border-radius: 10px;
}
.btn {
  width: 200px;
  height: 60px;
  background: #409eff;
  color: #fff;
  font-size: 26px;
  border: none;
  outline: none;
  appearance: none;
  border-radius: 10px;
}
.btn:hover {
  opacity: 0.8;
}
.list {
  margin-bottom: 60px;
}
</style>
