/*
 * @Author: your name
 * @Date: 2022-01-21 10:13:04
 * @LastEditTime: 2022-01-25 10:09:25
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-vite\src\server\request.js
 */
import instance from './axios'
import config from '../../config'
const MODE = import.meta.env.MODE // 环境变量
const http = ({ url = '', method, params = {} }) => {
  return new Promise((resolve, reject) => {
    let base = config[MODE]
    instance({
      method,
      baseURL: base.apiBaseUrl,
      url,
      // `params` 是即将与请求一起发送的 URL 参数
      // `data` 是作为请求主体被发送的数据
      params: method === 'GET' ? params : null,
      data: method === 'POST' || method === 'PUT' || method === 'DELETE' ? params : null,
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

export const get = (url, params) => {
  return http({
    url,
    method: "GET",
    params
  })
}

export const post = (url, params) => {
  return http({
    url,
    method: "POST",
    params
  })
}

export const put = (url, params) => {
  return http({
    url,
    method: "PUT",
    params
  })
}

export const del = url => {
  return http({
    url,
    method: "DELETE",
  })
}


