import { get, post } from '../server/request'


export const userLogin = data => {
    return post('authenticate', {
        ...data,
        source: 'screen'
    })
}
