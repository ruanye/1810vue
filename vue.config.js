// 根目录 vue.config.js
// webpack 配置 跨域叫做webpack代理
console.log(1);
module.exports = {
  devServer: {
    proxy: 'http://localhost:3000',
  },
};
