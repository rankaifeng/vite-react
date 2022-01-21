import create from 'zustand'
import { userLogin } from '../api/globApi';
import cache from '../utils/cache'
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

