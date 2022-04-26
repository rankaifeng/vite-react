import React from 'react'
import TableData from '../../components/TableData'
import { URL_ARRAY } from '@/api/globApi'
import MapView from './MapView'
const Home = () => {
    localStorage.setItem("wurl", "http://192.168.100.120:8686/map");
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
        <MapView />
    )
}
export default Home