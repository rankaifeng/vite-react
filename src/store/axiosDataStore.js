/*
 * @Author: your name
 * @Date: 2022-01-21 09:44:31
 * @LastEditTime: 2022-04-25 15:40:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-vite\src\store\index.js
 */
import create from 'zustand'
import { addOrEditAjax, queryListAjax, deleteAjax } from '@/api/globApi';
import { message } from 'antd';
import loadingStore from './loadingStore';
const axiosDataStore = create((set, get) => ({
    editData: undefined,
    modalTitle: '',
    reloadData: undefined,
    getList: async (url, data) => {
        const { setLoading } = loadingStore.getState();
        setLoading(true)
        let res = await queryListAjax(url, data)
        setLoading(false)
        return ({
            total: res.total,
            list: res.rows
        })
    },

    setEditData: val => {
        //说明是新增否则就是编辑
        set({
            modalTitle: JSON.stringify(val) === "{}" ? '新增' : '修改',
            editData: val
        })
    },

    submitData: async (url, data) => {
        let res = await addOrEditAjax(url, data, get().editData)
        message.success(res.message)
        set({ editData: undefined })
        get().reloadData();
    },

    setReloadData: func => {
        set({ reloadData: func })
    },

    deleteData: async (id, url) => {
        let res = await deleteAjax(id, url)
        message.success(res.message)
        get().reloadData();
    }
}))
export default axiosDataStore;

