import AsyncComponent from '../components/asyncComponent'
const OrderList = AsyncComponent(() => import('../pages/OrderList'))
const Home = AsyncComponent(() => import('../pages/Home'))
const Login = AsyncComponent(() => import('../pages/Login'))
const NotFound = AsyncComponent(() => import('../pages/NotFound'))
const MenuLayout = AsyncComponent(() => import('../layouts/MenuLayout'))
const BasicLayout = AsyncComponent(() => import('../layouts/BasicLayout'))
const ThirdLevelComponent = AsyncComponent(() => import('../pages/ThirdLevelComponent'))
const ReturnGoods = AsyncComponent(() => import('../pages/ReturnGoods'))
const routes = [
    {
        path: '/login',
        component: Login,
        title: '用户路由',
    },
    {
        path: '/sys',
        component: BasicLayout,
        title: '系统路由',
        redirect: '/sys/home',
        routes: [
            {
                path: '/sys/home',
                title: '首页',
                component: Home,
            },
            {
                path: '/sys/order',
                component: MenuLayout,
                pathName: 'order-manage',
                redirect: '/sys/order/list',
                title: '订单管理',
                routes: [
                    {
                        path: '/sys/order/list',
                        pathName: 'order-list',
                        component: OrderList,
                        title: '订单列表',
                        icon: 'table'
                    },
                    {
                        path: '/sys/order/product',
                        pathName: 'product-manage',
                        component: ThirdLevelComponent,
                        title: '生产管理',
                        icon: 'user',
                    },
                    {
                        path: '/sys/order/returnGoods',
                        pathName: 'return-goods',
                        component: ReturnGoods,
                        title: '退货管理',
                        icon: 'eye'
                    }
                ]
            },
        ],
    },
    {
        path: '*',
        component: NotFound,
    }
]

export default routes