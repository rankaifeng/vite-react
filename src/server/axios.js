import { message } from 'antd';
import axios from 'axios'

const instance = axios.create({
  timeout: 30000,
})

// instance.defaults.headers['Access-Control-Allow-Origin'] = "*"

/** 添加请求拦截器 **/
instance.interceptors.request.use(config => {
  const { headers } = config;
  headers['Access-Control-Allow-Origin'] = "*"
  headers['Authorization'] = '';
  headers['Content-Type'] = 'application/json; charset=utf-8';
  return config;
}, error => {
  return Promise.reject(error);
})

/** 添加响应拦截器 **/
let httpCode = {
  400: '请求参数错误',
  401: '权限不足, 请重新登录',
  403: '服务器拒绝本次访问',
  404: '请求资源未找到',
  500: '内部服务器错误',
  501: '服务器不支持该请求中使用的方法',
  502: '网关错误',
  504: '网关超时'
}
instance.interceptors.response.use(response => {
  const { statusText, status } = response;
  if (statusText === 'OK') {
    if (status === 200) {
      return Promise.resolve(response.data);
    }
    let tips = httpCode[data.code];
    message.error(tips);
    return Promise.reject(data.message);
  } else {
    message.error('响应超时!');
    return Promise.reject(response.data.message);
  }
}, error => {
  if (error.response) {
    if (error.response.status === 401) {
      message.error(error.response.data.error.user_authentication[0]);
      return;
    }
    let tips = error.response.status in httpCode ? httpCode[error.response.status]
      : error.response.data.message;
    message.error(tips);
    return Promise.reject(error);
  } else {
    message.error('连接服务器失败');
    return Promise.reject('连接服务器失败');
  }
})
export default instance