import React from "react"
import useStore from "../../store";
import { userLogin } from '../../api/globApi'


const UserLogin = () => {

    // const userLogin = useStore(state => state.userLogin)

    const handleLogin = () => {
        let data = { name: "admin", password: "123123" };
        userLogin(data)
            .then(res => {
                console.log(res);
            })
        // userLogin(data)
    }

    return <div onClick={handleLogin}>login</div>
}
export default UserLogin;