// api/index.js
import axios from 'axios';
// 响应拦截器
axios.interceptors.response.use(res => res.data, err => Promise.reject(err));
// 轮播图请求
const getBaner = () => axios.get('/banner');
export { getBaner };
export default {};
