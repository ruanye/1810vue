// app.js 后端
const express = require('express');
// 启动服务器
const app = express();
const banner = require('./banner.js');
const { rfile } = require('./fsfile.js');
// 轮播图后端接口
app.get('/banner', (req, res) => {
  res.json(banner);
});
// 首页商品列表后端接口
app.get('/hl', async (req, res) => {
  const result = await rfile('goods.json');
  res.json(result);
});
// localhost:3000/a
app.get('/abc', (req, res) => {
  res.json('卖面包');
});
app.get('/b', (req, res) => {
  res.json('卖水果');
});
// 监听端口号
app.listen(3000, () => {
  console.log('服务器启动成功');
});
