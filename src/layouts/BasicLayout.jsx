import { renderRoutes } from 'react-router-config';
import React from "react";
import { getMenuItem, getBreadItem } from '../components/menu'
import { filterRoutes } from '@/utils/index'
import { Layout, Menu, Breadcrumb } from 'antd'
import { recursionRouterTwo } from '../utils/recursion-router'
import routes from "../router/index";
const { Header, Content, Sider } = Layout

const BasicLayout = (props) => {
  const meunList = routes[1].routes;
  const path = props.location.pathname
  const defaultOpenKeys = filterRoutes(path)
  const breadList = recursionRouterTwo(defaultOpenKeys, meunList)
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" defaultOpenKeys={defaultOpenKeys} selectedKeys={[path]} mode="inline">
          {
            getMenuItem(meunList)
          }
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          222
          {/* <img src={avatar} alt=""/> */}
          {/* <span className="logoutIcon" onClick={this.logOut}> */}
          {/* <Icon type="poweroff" /> */}
          {/* </span> */}
          {/* <span className="loginUser">{name}</span> */}
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {
              getBreadItem(breadList)
            }
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <Content style={{ height: 'calc(100vh - 60px)' }}>
              {renderRoutes(props.route.routes)}
            </Content>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
