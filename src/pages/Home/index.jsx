import React from 'react'
import TableData from '../../components/TableData'
import { URL_ARRAY } from '@/api/globApi'
const Home = () => {
    const url = URL_ARRAY["ACTION_DEVICE"]
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
            url={url}
            isAddBtn={false}
            columns={columns} />
    )
}
export default Home