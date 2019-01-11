/**
 * 根据axios提供的实例方法进行二次封装并暴露出去
 * axios实例方法自行查看其API
 * 注：传递参数方面需要同后台协调
 * 根据参数的不同对params进行处理即可
 * */
import axios from 'axios';
const urlPrefix = "/api";

export const GET = (url,params) => {
  return axios.get(`${urlPrefix}${url}`,{params: params}).then(res=>{
    return res.data;
  });
};
export const POST = (url,params) => {
  return axios.post(`${urlPrefix}${url}`,params).then(res=>{
    return res.data;
  });
};
export const DELETE = (url,params) => {
  return axios.delete(`${urlPrefix}${url}`,{params:params}).then(res=>{
    return res.data;
  });
};
export const PUT = (url,params) => {
  return axios.put(`${urlPrefix}${url}`,params).then(res=>{
    return res.data;
  });
};
export const PATCH = (url,params) => {
  return axios.patch(`${urlPrefix}${url}`,params).then(res=>{
    return res.data;
  });
};
