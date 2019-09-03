// app.js 后端
const express = require('express');
// 启动服务器
const app = express();
const banner = require('./banner.js');
// 轮播图接口
app.get('/banner', (req, res) => {
  res.json(banner);
});
// 监听端口号
app.listen(3000, () => {
  console.log('服务器启动成功');
});
