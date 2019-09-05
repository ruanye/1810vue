// api/index.js
import axios from 'axios';
// 响应拦截器
// 公共请求地址
axios.defaults.baseURL = 'http://localhost:3000';
axios.interceptors.response.use(res => res.data, err => Promise.reject(err));
// 轮播图请求
const getBaner = () => axios.get('/banner');
// 首页列表请求hl
// 2 getHl执行 axios.get 就执行了 拿到结果 这个结果就是getHl的结果
const getHl = () => axios.get('/hl');
// 首页所有请求放在一起  axios.all ===Promise.all
const getAll = () => axios.all([getBaner(), getHl()]);
// 分页请求
const getPage = page => axios.get(`/list?page=${page}`);

export { getAll, getPage };
export default {};
