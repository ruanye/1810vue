// 读取goods.json 并修改
const fs = require('fs').promises;
const path = require('path');
// 读取文件绝对路径的方法
const rdir = file => path.resolve(__dirname, file);
function rfile(file) {
  return fs.readFile(rdir(file), 'utf8').then(data => JSON.parse(data));
}
function wfile(file, data) {
  if (!data) return;
  // eslint-disable-next-line consistent-return
  return fs.writeFile(rdir(file), JSON.stringify(data), 'utf8');
}
module.exports = {
  rfile,
  wfile,
};
