import { get, post } from '../server/request'


export const userLogin = data => {
    return post({
        url: 'authenticate',
        params: {
            ...data,
            source: 'screen'
        }
    })
}
