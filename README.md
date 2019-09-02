# 1810vue

src/assets 放静态资源
src/components 放组件(基础组件，公共组件)
src/views 页面级组件一个组件对应的是一个页面
src/main.js 主入口

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

## 插件使用

1. 轮播图插件使用
   - 下载 npm install vue-awesome-swiper --save
   -
