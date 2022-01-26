/*
 * @Author: your name
 * @Date: 2022-01-19 15:19:39
 * @LastEditTime: 2022-01-26 13:37:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-vite\src\pages\OrderList\index.jsx
 */
import React from 'react'
import { Button } from 'antd'
import TableData from '../../components/TableData'
import useStore from '../../store'
import { URL_ARRAY } from '@/api/globApi'
const OrderList = () => {
    const url = URL_ARRAY["ACTION_CONSTRUCTION"];
    const { setEditData, deleteData } = useStore(state => ({ ...state }))
    const columns = [
        {
            title: '名称',
            dataIndex: "name",
        },
        {
            title: '联系人',
            dataIndex: 'contactperson',
        }, {
            title: "操作",
            render: r => {
                return <div>
                    <Button
                        onClick={() => {
                            setEditData(r)
                        }}>编辑</Button>
                    <Button
                        onClick={() => {
                            deleteData(r.id, url)
                        }}>删除</Button>
                </div>
            }
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
        columns: columns,//表头
        tag: "单位",//区分编辑新建的弹窗
        title: "单位信息",//弹窗头部信息
        headerFrom: headerFrom,//表格头部的搜索数据
        isHeader: true,//是否需要表头搜索
        isAddBtn: true,//是否需要新建按钮
        url
    }
    return (
        <TableData {...tableProp} />
    )
}
export default OrderList