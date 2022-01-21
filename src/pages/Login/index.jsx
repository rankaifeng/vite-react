import { Button } from "antd";
import React from "react"
import useStore from "@/store";
import { Redirect } from 'react-router-dom'
import cache from "@/utils/cache";

const UserLogin = () => {

    const { userLogin, loading, setLoading } = useStore(state => ({ ...state }))

    const handleLogin = () => {
        let data = { name: "admin", password: "123123", source: 'screen' };
        setLoading(!loading)
        setTimeout(() => {
            userLogin(data)
        }, 3000);
    }

    if (cache.getVal('token')) {
        return (
            <Redirect to="/sys/home" />
        )
    }
    return <Button
        style={{ margin: '10px' }}
        loading={loading}
        type="primary"
        onClick={handleLogin}>
        {loading ? "登陆中" : "登录"}
    </Button>
}
export default UserLogin;