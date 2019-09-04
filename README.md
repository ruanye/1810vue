# 1810vue

src/assets 放静态资源
src/components 放组件(基础组件，公共组件)
src/views 页面级组件一个组件对应的是一个页面
src/main.js 主入口
src/api api 文件夹 放 ajax 请求

- api 目录
  - index.js

1810mock 后端接口

- 1810mock 目录
  - app.js
  - banner.js
  - goods.json
  - fsfile.js 读写文件用的 

## Views 目录(页面)

- views
  - Car.vue
  - Home.vue
  - List.vue
  - My.vue

# vue 知识点总结

1.  () => import('./views/About.vue') 路由懒加载
    import() 懒加载
2.  字体图标用法

- 远程引入 <link
    rel="stylesheet"
    href="http://at.alicdn.com/t/font_1381660_7t98nmha784.css"
  />
- 本地引入 import './assets/font.css';

3. 导航激活样式
   - router-link-exact-active 严格匹配
   - router-link-active / /list 可以配合 router-link 标签加 exact 属性进行严格匹配
4. Props with type Object/Array must use a factory function to return the default value.
   props 默认值是数组或者对象的使用函数 返回值的形式
5. export 和 import 目录 views/demo.vue api/demo.js

- export 导出的是一个定义 (接口)
- export 不能导出具体值 export default 可以导出具体值
- export 和 import

```js
export const a = 1;
export const b = 2;
//等价于
const a= 1
const b= 2
export {a,b}
// export 的引入方式1 作为整个对象引入
import * as obj from '/xx';
// export 的引入方式2 解构赋值的方式
import { a } from '/xx'
```

- export default 和 import

```js
export default 1;
// export default 导出的引入方式
import x from '/xx';
```

6. async 和 await 异步终极解决方案

- async 表示函数里面有异步，async 的返回值是 promise
- await 通常跟 promise await+ promise 当前 promise 执行的结果

## 插件使用

1. 轮播图插件使用
   - 下载 npm install vue-awesome-swiper --save
   - main.js 增加全局引入
   - 前端 请求数据 - > 前端拿到数据 -> 渲染页面
