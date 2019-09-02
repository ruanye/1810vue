<template>
  <!--  components/Nav.vue  -->
  <div id="nav">
    <router-link to="/">
      <i class="iconfont icon-icon-test"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-list"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/car">
      <i class="iconfont icon-gouwuchezhengpin"></i>
      <span>购物车</span>
    </router-link>
    <router-link to="/my">
      <i class="iconfont icon-wode"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
#nav {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 56px;
  display: flex;
  border-top: 1px solid #e3e3e3;
  justify-content: center;
  align-items: center;
  a {
    flex: 1;
    display: flex;
    flex-direction: column;
    color: #2c3e50;
    i {
      font-size: 26px;
    }
    // a.router-link-exact-active
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
