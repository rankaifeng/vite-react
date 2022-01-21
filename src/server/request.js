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

export const get = url => {
  return http({
    url,
    method: "GET"
  })
}

export const post = (url, params) => {
  return http({
    url,
    method: "POST",
    params
  })
}

