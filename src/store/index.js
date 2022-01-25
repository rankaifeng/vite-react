/*
 * @Author: your name
 * @Date: 2022-01-21 09:44:31
 * @LastEditTime: 2022-01-25 11:07:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-vite\src\store\index.js
 */
import create from 'zustand'
import { userLogin } from '@/api/globApi';
import cache from '@/utils/cache'
const useStore = create(set => ({
    isToken: null,
    loading: false,
    userLogin: async data => {
        let res = await userLogin(data);
        set({ loading: false })
        cache.setVal("token", res.auth_token)
        window.location.href = '/sys/home';
    },
    setLoading: val => set({ loading: val }),
}))
export default useStore;

