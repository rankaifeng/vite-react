/*
 * @Author: your name
 * @Date: 2022-01-21 09:44:31
 * @LastEditTime: 2022-04-25 15:37:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-vite\src\store\index.js
 */
import create from 'zustand'
const loadingStore = create((set, get) => ({
    loading: false,

    setLoading: val => set({ loading: val })
}))
export default loadingStore;

