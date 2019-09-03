<template>
  <div class="about">
    views/Demo.vue 演示import/export 语法
  </div>
</template>
<script>
// import * as obj from '../api/demo';
// import { a } from '../api/demo';
import x, { f } from '../api/demo';

console.log(x.c, f, 'demo');
export default {};
</script>
