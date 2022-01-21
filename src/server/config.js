/**
 * 服务器根路径
 */
export const BASE_URL = process.env.NODE_ENV === 'development' ?
    'http://192.168.100.134:3005/' : localStorage.getItem("httpUrl");
/**
 * 超时时间
 */
export const TIMEOUT = 30000;