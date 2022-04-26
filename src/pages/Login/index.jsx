/*
 * @Author: your name
 * @Date: 2022-04-25 09:58:03
 * @LastEditTime: 2022-04-25 15:48:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \todo-tse:\react-demo\vite-react\src\pages\Login\index.jsx
 */
import { Button, Form, Input } from "antd";
import React, { useState } from "react"
import userStore from "../../store/userStore";
import loadingStore from "../../store/loadingStore";
import { Redirect } from 'react-router-dom'
import cache from "@/utils/cache";
import { UserOutlined, LockOutlined, KeyOutlined } from '@ant-design/icons';
import './index.less'
const UserLogin = () => {

    const { userLogin } = userStore.getState();
    const { loading } = loadingStore.getState();
    const [isCode, setCode] = useState(true)
    const handleLogin = values => {
        userLogin({ ...values, source: 'screen' })
    }
    if (cache.getVal('token')) {
        return (
            <Redirect to="/sys/home" />
        )
    }
    return (
        <div className="wrapper-login">
            <header className="login-header">资产管理应用综合平台</header>
            <div className="login-main">
                <div className="bg-left" />
                <div className="bg-right">
                    <div className="login-title">用户登录</div>
                    <div className={`${isCode ? 'login-s' : 'login-n'} login-cont`}>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={handleLogin}>
                            <Form.Item
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入用户名!',
                                    }]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入密码!',
                                    }]}>
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="密码" />
                            </Form.Item>

                            {isCode &&
                                <div className="login-code">
                                    <Form.Item name="code">
                                        <Input
                                            size="large"
                                            prefix={<KeyOutlined className="site-form-item-icon" />}
                                            style={{ width: '200px', color: 'black' }}
                                            placeholder="请输入校验码" />
                                    </Form.Item>
                                    <div className="code-img">222</div>
                                </div>
                            }

                            <Form.Item>
                                <Button
                                    loading={loading}
                                    size="large"
                                    block
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button">
                                    {loading ? '登陆中......' : '登录'}
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserLogin;