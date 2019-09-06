<template>
  <div id="app">
    <!-- 3 用标签的形式使用 -->
    <Nav />
    <router-view />
  </div>
</template>
<script>
// 1引入组件
import Nav from './components/Nav.vue';

export default {
  components: {
    // 2注册组件
    Nav,
  },
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 60px;
  overflow-y: scroll;
  z-index: -1;
}
</style>
