// api/index.js
import axios from 'axios';
// 响应拦截器
// 公共请求地址
axios.defaults.baseURL = 'http://localhost:3000';
axios.interceptors.response.use(res => res.data, err => Promise.reject(err));

export default axios;
