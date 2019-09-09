/* eslint-disable import/prefer-default-export */
// api/listApi.js
import axios from './index';
/**
 * @param {*} page number 页数
 */
const getPage = page => axios.get(`/list?page=${page}`);
/**
 * @param {*} id number 商品id
 */
const getDetail = id => axios.get(`/detail/${id}`);
export { getPage, getDetail };
