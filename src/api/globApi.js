/*
 * @Author: your name
 * @Date: 2022-01-21 10:24:16
 * @LastEditTime: 2022-01-25 11:32:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-vite\src\api\globApi.js
 */
import { get, post, put, del } from '../server/request'


export const userLogin = data => {
    return post('authenticate', {
        ...data,
        source: 'screen'
    })
}


export const deviceList = data => {
    return get("devices", data)
}

//查询单位信息
export const maintenance = data => {
    return get("constructions", data)
}

//新增单位信息
export const maintenancePost = (data, editData) => {
    if (JSON.stringify(editData) === '{}') {
        return post("constructions", data)
    }
    return put(`constructions/${editData.id}`, data)
}
//删除单位信息
export const maintenanceDel = id => {
    return del(`constructions/${id}`)
}