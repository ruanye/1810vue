<template>
  <!-- views/Car.vue -->
  <div class="home">
    <ul>
      <li class="car-list" v-for="item in carlist" :key="item.id">
        <input class="car-list-check" type="checkbox" />
        <div>
          <img :src="item.img" alt="" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'car',
  data() {
    return {
      carlist: [],
    };
  },
  created() {
    // 本地缓存拿出购物车列表
    this.carlist = localStorage.carlist ? JSON.parse(localStorage.carlist) : [];
  },
  components: {},
};
</script>
<style lang="less" scoped>
.car-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &-check {
  }
}
</style>
