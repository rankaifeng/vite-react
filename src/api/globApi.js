/*
 * @Author: your name
 * @Date: 2022-01-21 10:24:16
 * @LastEditTime: 2022-01-26 13:34:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-vite\src\api\globApi.js
 */
import { get, post, put, del } from '../server/request'

export const URL_ARRAY = {
    "ACTION_DEVICE": 'devices',//设备接口
    "ACTION_CONSTRUCTION": 'constructions'//单位接口
}
/**
 * 用户登录
 * @param {*} data 
 * @returns 
 */
export const userLogin = data => {
    return post('authenticate', {
        ...data,
        source: 'screen'
    })
}
/**
 * 是否需要验证码
 * @returns 
 */
export const getIdentifytcode = () => get("systemconfigs/get_identifytcode")
/**
 * 获取验证码
 * @returns 
 */
export const getCaptchas = () => get("captchas");
/**
 * 获取版本号
 * @returns 
 */
export const getVersion = () => get("systemconfigs/get_version")
/**
 * 新增 编辑
 * @param {*} url 路径 
 * @param {*} data 参数
 * @param {*} editData 编辑单行数据
 * @returns 
 */
export const addOrEditAjax = (url, data, editData) => {
    if (JSON.stringify(editData) === '{}') {
        return post(url, data)
    }
    return put(`${url}/${editData.id}`, data)
}
/**
 * 查询
 * @param {*} url 
 * @param {*} data 
 * @returns 
 */
export const queryListAjax = (url, data) => {
    return get(url, data)
}
/**
 * 删除
 * @param {*} id 
 * @param {*} url 
 * @returns 
 */
export const deleteAjax = (id, url) => {
    return del(`${url}/${id}`)
}