import { Button } from 'antd'
import React, { useRef } from 'react'
import TableData from '../../components/TableData'
import { deviceList } from '../../api/globApi'
const Home = () => {

    const columns = [
        {
            title: '设备名',
            dataIndex: "name",
        },
        {
            title: '组织名称',
            dataIndex: 'organization_name',
        },
        {
            title: '项目名',
            dataIndex: 'projectcase_name',
        },
        {
            title: '设备类型',
            dataIndex: 'devicetype_name',
        }
    ];


    return (
        <TableData
            getTableList={deviceList}
            columns={columns} />
    )
}
export default Home