<template>
  <!-- views/Detail.vue -->
  <div class="detail">
    <my-tab :showArrow="true"
      >详情页
      <span slot="right">...</span>
    </my-tab>
    这是详情页 {{ detail }}
  </div>
</template>

<script>
import { getDetail } from '../api/listApi';
import MyTab from '@/components/MyTab.vue';

export default {
  name: 'detail',
  data() {
    return {
      detail: null,
    };
  },
  components: {
    MyTab,
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
