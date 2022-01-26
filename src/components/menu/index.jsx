import { Menu, Breadcrumb } from "antd"
import { Link } from "react-router-dom"

const { SubMenu } = Menu
const MenuItem = Menu.Item

//获取侧边栏Item
export const getMenuItem = list => {
    return list.map((item, index) => {
        if (item.routes && item.routes.length > 0) {
            return (
                <SubMenu
                    key={item.path}
                    title={
                        <span>
                            <span>{item.title}</span>
                        </span>
                    }
                >
                    {getMenuItem(item.routes)}
                </SubMenu>
            )
        } else {
            return (
                <MenuItem key={item.path}>
                    <Link to={item.path}>
                        <span>{item.title}</span>
                    </Link>
                </MenuItem>
            )
        }
    })
}

//获取面包屑Item
export const getBreadItem = (list) => {
    const arr = [];
    function getItem(allList) {
        allList.forEach((item, index) => {

            if (item.routes && item.routes.length > 0) {
                arr.push(
                    <Breadcrumb.Item key={index}>
                        <Link to={item.redirect}>
                            {item.title}
                        </Link>
                    </Breadcrumb.Item>
                )
                getItem(item.routes)

            } else {
                arr.push(
                    <Breadcrumb.Item key={index}>
                        <Link to={item.path}>
                            {item.title}
                        </Link>
                    </Breadcrumb.Item>
                )
            }

        })
    }
    getItem(list)
    return arr
}

