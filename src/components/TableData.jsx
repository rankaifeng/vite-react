/*
 * @Author: your name
 * @Date: 2022-01-25 09:28:06
 * @LastEditTime: 2022-01-26 14:25:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-vite\src\components\TableData.jsx
 */
import React, { useEffect } from 'react'
import { useAntdTable } from 'ahooks'
import { Button, Form, Table, Modal, Empty } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import UnitEdit from './editModal/UnitEdit'
import HeaderSearch from './HeaderSearch'
import useStore from '../store'
import "@/style/table.less"
const TableData = ({
    columns,
    title,
    tag,
    url,
    headerFrom,
    isHeader,
    isAddBtn
}) => {
    const [form] = Form.useForm();
    const {
        editData,
        setEditData,
        modalTitle,
        submitData,
        getList,
        setReloadData
    } = useStore(state => ({ ...state }))
    //获取useAntdTable的表格参数
    const getTableData = ({ current, pageSize }, formData) => {
        let data = {
            page: current,
            per: pageSize,
        }
        if (formData)
            Object.entries(formData).forEach(([key, value]) => {
                if (value) {
                    data = {
                        ...data,
                        "q[name_cont]": value
                    }
                }
            });
        return getList(url, data)
    }
    const { tableProps, search } = useAntdTable(getTableData, {
        form,
        current: 1,
        pageSize: 10
    });
    const { submit, reset } = search;
    const { dataSource } = tableProps;
    useEffect(() => {
        if (reset) {
            setReloadData(reset)
        }
    }, [reset])
    const ReturnModalEmt = () => {
        if (tag === '单位') {
            return <UnitEdit submitAddForm={value => submitData(url, value)} editData={editData} />
        }else{
            return <div>nothing</div>
        }
    }
    return (
        <div style={{ background: 'white' }}>
            {isHeader &&
                <HeaderSearch
                    form={form}
                    headerFrom={headerFrom}
                    formSubmit={submit}
                    formClear={reset} />
            }
            {isAddBtn && <Button type="primary" icon={<PlusOutlined />} onClick={() => setEditData({})}>新建</Button>}
            {
                dataSource.length ?
                    <Table
                        rowClassName={(record, index) => {
                            let className = index % 2 ? 'shallow_gray' : 'deep_gray';
                            return className
                        }}
                        bordered
                        style={{ marginTop: '10px' }}
                        rowKey={r => r.id}
                        columns={columns}
                        {...tableProps} />
                    : <Empty
                        imageStyle={{ height: 60 }}
                        description={<span>暂无数据</span>}>
                        <Button type="primary" onClick={() => reset()}>重新加载</Button>
                    </Empty>
            }
            {editData &&
                <Modal
                    footer={null}
                    title={`${modalTitle}${title}`}
                    visible={true}
                    onCancel={() => setEditData(undefined)}
                    destroyOnClose>
                    <ReturnModalEmt />
                </Modal>}
        </div>

    )
}
export default TableData