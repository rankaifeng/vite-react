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
import { getIdentifytcode, getCaptchas, getVersion } from '../api/globApi';
import { message } from 'antd';
const userStore = create((set, get) => ({
    isCode: false,//是否需要获取验证码
    captchaKey: '',//验证码key值
    version: '',//版本号
    codeImgUrl: '',//验证码图片

    /**
     * 是否需要验证码
     */
    identifytcode: () => {
        getIdentifytcode().then(res => {
            const { config_value } = res;
            if (config_value === 'yes') {
                set({ isCode: true })
                get().captchas();
            }
        })
    },
    /**
     * 获取验证码
     */
    captchas: () => {
        getCaptchas().then(res => {
            const { captcha_key, url } = res;
            set({
                captchaKey: captcha_key,
                codeImgUrl: url
            })
        })
    },
    /**
     * 获取版本号
     */
    versionNumber: () => {
        getVersion().then(res => set({ version: res.version }))
    },
    /**
     * 用户登录
     * @param {*} data 
     */
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

