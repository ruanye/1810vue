<template>
  <!-- components/VantList.vue -->
  <div class="container">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item.id">
        <van-card
          :price="item.price"
          desc="描述信息"
          :title="item.name"
          :thumb="item.img"
        />
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { getPage } from '../api/listApi';

export default {
  created() {
    this.getList();
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1,
      hasMore: true,
    };
  },
  methods: {
    async getList() {
      const { hasMore, pageData: list } = await getPage(this.page);
      this.hasMore = hasMore;
      this.list = [...this.list, ...list];
      this.finished = true;
    },
    onLoad() {
      // vant提供的滚动到底部的事件
      if (!this.hasMore) return;
      this.page = this.page + 1;
      this.getList();
      this.loading = false;
    },
  },
};
</script>

<style>
</style>
