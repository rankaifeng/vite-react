/*
 * @Author: your name
 * @Date: 2022-01-19 15:19:39
 * @LastEditTime: 2022-01-26 10:33:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-vite\src\pages\OrderList\index.jsx
 */
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
    const headerFrom = [
        {
            name: "单位名称",
            parameter: "name",
            type: "INPUT",
        },
    ]
    const tableProp = {
        getTableList: maintenance,//查询列表所有数据
        columns: columns,//表头
        tag: "单位",//区分编辑新建的弹窗
        addData: maintenancePost,//新增数据
        title: "单位信息",//弹窗头部信息
        delData: maintenanceDel,//删除数据
        headerFrom: headerFrom,//表格头部的搜索数据
        isHeader: true,//是否需要表头搜索
        isAddBtn: true,//是否需要新建按钮
    }
    return (
        <TableData {...tableProp} />
    )
}
export default OrderList