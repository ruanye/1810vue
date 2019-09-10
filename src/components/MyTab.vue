<template>
  <!-- components/MyTab.vue 公共头部 -->
  <div class="tabnav">
    <i v-if="showArrow" @click="goBack" class="iconfont icon-fanhui"></i>
    <slot></slot>
    <span class="right">
      <slot name="right"></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    showArrow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    goBack() {
      // 返回上一页
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang='less'>
.tabnav {
  width: 100%;
  height: 56px;
  line-height: 56px;
  background-color: #ffffff;
  border-bottom: 1px solid #e3e3e3;
  clear: both;
  i {
    float: left;
    margin-left: 18px;
    font-weight: 700;
  }
}
.right {
  float: right;
  margin-right: 18px;
}
</style>
