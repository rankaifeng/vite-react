import React from 'react'
import TableData from '../../components/TableData'
import { maintenance, maintenancePost, maintenanceDel } from '../../api/globApi'
const OrderList = () => {
    const columns = [
        {
            title: '名称',
            dataIndex: "name",
        },
        {
            title: '联系人',
            dataIndex: 'contactperson',
        }
    ];
    const tableProp = {
        getTableList: maintenance,
        columns: columns,
        tag: "单位",
        addData: maintenancePost,
        title: "单位信息",
        delData: maintenanceDel
    }
    return (
        <TableData {...tableProp} />
    )
}
export default OrderList