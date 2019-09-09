<template>
  <!-- views/Detail.vue -->
  <div class="detail">这是详情页 {{ detail }}</div>
</template>

<script>
import { getDetail } from '../api/listApi';

export default {
  data() {
    return {
      detail: null,
    };
  },
  async created() {
    // 发送请求详情的请求
    this.detail = await getDetail(this.gid);
  },
  computed: {
    gid() {
      return this.$route.query.id;
    },
  },
};
</script>

<style>
.detail {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 2;
}
</style>
