/*
 * @Author: your name
 * @Date: 2022-01-21 09:44:31
 * @LastEditTime: 2022-01-26 13:15:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-vite\src\store\index.js
 */
import create from 'zustand'
import { userLogin, addOrEditAjax, queryListAjax, deleteAjax } from '@/api/globApi';
import cache from '@/utils/cache'
import { message } from 'antd';
const useStore = create((set, get) => ({
    isToken: null,
    loading: false,
    editData: undefined,
    modalTitle: '',
    reloadData: undefined,
    userLogin: async data => {
        let res = await userLogin(data);
        set({ loading: false })
        cache.setVal("token", res.auth_token)
        window.location.href = '/sys/home';
    },
    setLoading: val => set({ loading: val }),


    getList: async (url, data) => {
        let res = await queryListAjax(url, data)
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
export default useStore;

