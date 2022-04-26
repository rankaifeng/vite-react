/*
 * @Author: your name
 * @Date: 2022-01-21 09:44:31
 * @LastEditTime: 2022-04-25 16:20:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-vite\src\store\index.js
 */
import create from 'zustand'
import { userLogin } from '@/api/globApi';
import cache from '@/utils/cache'
import loadingStore from './loadingStore';
import { message } from 'antd';
const userStore = create((set, get) => ({
    isToken: null,
    userLogin: data => {
        const { setLoading } = loadingStore.getState();
        setLoading(true)
        userLogin(data)
            .then(res => {
                setLoading(false)
                cache.setVal("token", res.auth_token)
                window.location.href = '/sys/home';
            }).catch(e => {
                message.error("登录失败");
                setLoading(false);
            })
    },
}))
export default userStore;

