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
- cors 跨域 nginx webpack

7. ref 的用法

- 写在元素上是获取的原生 dom 元素
- 写在组件上获取的是组件的实例
- this.\$refs.你命的名字
  判断元素滚动到底部

```js
scorllHeight < scrollTop + clientHeiht + 10;
```

## 跨域的方式

1. webpack 代理 vue.config.js

```js
module.exports = {
  devServer: {
    proxy: 'http://localhost:3000'
  }
};
```

2. cors 跨域 跨域资源共享(后端配置)
   // post get put delete
   Restful 风格的接口
   post 新增
   put 修改
   get 获取
   delete 删除
3. ngix 反向代理
4. window.name localtion.hash postmessage websocket node 中间层 jsonp docment.domain(只是二级域名) qq.com vip.qq.com

## express 的跨域中间件

npm i cors

## 插件使用

1. 轮播图插件使用
   - 下载 npm install vue-awesome-swiper --save
   - main.js 增加全局引入
   - 前端 请求数据 - > 前端拿到数据 -> 渲染页面

## 分页效果

20 1 页 1-5 2 页 6-10 3 页 11-15 4 页 16-20
localhost:3000/list?page=1

1.  上课之前讲下课程内容
2.  切换的时候注意
3.

```js
async await
     await + promise
 promise.then(data)
 data = await promise
```

表格

| 值     | 类型   | 说明         | 创建人/修改人 | 修改时间 |
| ------ | ------ | ------------ | ------------- | -------- |
| code   | number | 200 成功     | ry/ry         | 2019/9/9 |
| banner | array  | 图片数组集合 | ry/ry         | 2019/9/9 |
