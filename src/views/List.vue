<template>
  <div class="container">
    <!-- views/List.vue -->
    <div class="list">
      {{ list }}
      这是列表
      <button
        :class="{ btn: hasMore, 'btn-default': !hasMore }"
        @click="loadmore"
      >
        {{ hasMore ? "点击加载更多" : "没有数据了" }}
      </button>
    </div>
  </div>
</template>

<script>
import { getPage } from '../api';

export default {
  name: 'list',
  created() {
    this.getPageApi();
  },
  data() {
    return {
      page: 1, // 默认请求第一页
      list: [],
      hasMore: true, // 默认有下一页，到底有没有下一页由我们请求回来的数据决定
    };
  },
  methods: {
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
      this.page = this.page + 1;
      this.getPageApi();
    },
  },
  components: {},
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
