import { Layout } from 'antd';
import { renderRoutes } from 'react-router-config';
const { Content } = Layout;

const MenuLayout = ({ route }) => {
  return (
    <Layout className="_bg">
      <Content>{renderRoutes(route.routes)}</Content>
    </Layout>
  );
};
export default MenuLayout;
