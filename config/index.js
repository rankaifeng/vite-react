/*
 * @Author: your name
 * @Date: 2022-01-19 13:40:18
 * @LastEditTime: 2022-01-25 11:19:42
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-vite\config\index.js
 */
export default {
  development: {
    cdn: './',
    apiBaseUrl: 'http://192.168.200.133:8088/'
  },
  release: {
    cdn: '//s.xxx.com/vite-react-app/release',
    apiBaseUrl: '//www.xxx.com/v1'
  }
}