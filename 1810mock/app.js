// app.js 后端
const express = require('express');
// 引入跨域中间件 中间都是函数
const cors = require('cors');
// 启动服务器
const app = express();
const banner = require('./banner.js');
const { rfile } = require('./fsfile.js');
// 使用中间件进行跨域
app.use(cors());
// 轮播图后端接口
app.get('/banner', (req, res) => {
  res.json(banner);
});
// 首页商品列表后端接口
app.get('/hl', async (req, res) => {
  const result = await rfile('goods.json');
  res.json(result);
});
// 分页接口 http://localhost:3000/list?page=3
app.get('/list', async (req, res) => {
  const page = +req.query.page; // 拿到前端传过来的页数
  const list = await rfile('goods.json');
  const pageData = list.slice((page - 1) * 5, page * 5);
  // 给前端一个标志 表示有没有下一次
  const hasMore = !(page * 5 > list.length);
  res.json({
    hasMore,
    pageData,
  });
});
// 详情页接口localhost:3000/detail/1
app.get('/detail/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    good: `id为${id}的商品信息`,
  });
});
// 监听端口号
app.listen(3000, () => {
  console.log('服务器启动成功');
});
