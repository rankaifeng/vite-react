/*
 * @Author: your name
 * @Date: 2022-01-21 10:24:16
 * @LastEditTime: 2022-01-24 13:40:41
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-vite\src\api\globApi.js
 */
import { get, post } from '../server/request'


export const userLogin = data => {
    return post('authenticate', {
        ...data,
        source: 'screen'
    })
}


export const deviceList = data => {
    return get("devices", data)
}
