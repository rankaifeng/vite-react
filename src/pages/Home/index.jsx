import React from 'react'
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
    const headerFrom = [
        {
            name: "设备名称",
            parameter: "name",
            type: "INPUT",
        },
    ]

    return (
        <TableData
            headerFrom={headerFrom}
            isHeader={true}
            isAddBtn={true}
            getTableList={deviceList}
            columns={columns} />
    )
}
export default Home