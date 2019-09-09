// api/homeApi.js  存放首页的请求
import axios from '.';
// 轮播图请求
const getBaner = () => axios.get('/banner');
// 首页列表请求hl
// 2 getHl执行 axios.get 就执行了 拿到结果 这个结果就是getHl的结果
const getHl = () => axios.get('/hl');
// 首页所有请求放在一起  axios.all ===Promise.all
const getAll = () => axios.all([getBaner(), getHl()]);
export { getAll };
export default {};
