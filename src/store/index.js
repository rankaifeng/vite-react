import create from 'zustand'
import { userLogin } from '../api/globApi';
const useStore = create(set => ({
    isToken: null,
    userLogin: async data => {
        let res = await userLogin(data);
        console.log(res);
    }
}))


export default useStore;

