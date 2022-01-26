/*
 * @Author: your name
 * @Date: 2022-01-19 15:42:13
 * @LastEditTime: 2022-01-26 14:06:55
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-vite\src\components\asyncComponent.jsx
 */
import React, { Component } from "react";
import { Spin } from "antd";

const asyncComponent = importComponent => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                component: null
            };
        }
        componentDidMount() {
            importComponent().then(cmp => {
                this.setState({ component: cmp.default });
            });
        }
        render() {
            const styleObj = {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                fontSize: "40px"
            };
            const C = this.state.component;
            return C ? (
                <C {...this.props} />
            ) : (
                <div style={styleObj}>
                    <Spin tip="加载中..." />
                </div>
            );
        }
    };
};

export default asyncComponent;
