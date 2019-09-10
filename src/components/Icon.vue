<template>
  <!-- components/Icon.vue 图标组件 -->
  <div>
    <i :class="classes" :style="style"></i>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    size: {
      type: String || Number,
      default: 18,
    },
    color: {
      type: String,
      default: '#808695',
    },
  },
  computed: {
    classes() {
      return ['iconfont', `icon-${this.type}`];
    },
    style() {
      return {
        fontSize: `${this.size}px`,
        color: this.color,
      };
    },
  },
};
</script>

<style>
</style>
