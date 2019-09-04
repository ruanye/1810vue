// api/index.js
import axios from 'axios';
// 响应拦截器
axios.interceptors.response.use(res => res.data, err => Promise.reject(err));
// 轮播图请求
const getBaner = () => axios.get('/banner');
// 首页列表请求hl
// 2 getHl执行 axios.get 就执行了 拿到结果 这个结果就是getHl的结果
const getHl = () => axios.get('/hl');
// 一 定义请求并没有调用
function getList() {
  return axios.get('/hl');
}
export { getBaner, getHl, getList };
export default {};
