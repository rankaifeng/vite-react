import React, { useState } from 'react'
import { useAntdTable } from 'ahooks'
import { Button, Form, Table, Modal, message } from 'antd'
import UnitEdit from './editModal/UnitEdit'
import HeaderSearch from './HeaderSearch'
const TableData = ({
    columns,//表头
    getTableList,//请求表格数据方法
    title,//新增 编辑弹窗标题
    tag, //区分编辑新建的弹窗
    addData,//新建
    delData,//删除
    headerFrom,//表头搜索数据源
    isHeader,//是否需要表头搜索
    isAddBtn//是否需要新建按钮
}) => {
    const [form] = Form.useForm();
    const [editData, setEditData] = useState(undefined)
    const [modalTitle, setModalTitle] = useState("")
    const [newColumns, _] = useState(() => {
        columns.push({
            title: "操作",
            render: r => {
                return <div>
                    <Button
                        onClick={() => {
                            setEditData(r)
                        }}>编辑</Button>
                    <Button
                        onClick={() => {
                            delData(r.id).then(res => {
                                message.success(res.message)
                                reset();
                            })
                        }}>删除</Button>
                </div>
            }
        })

        return columns

    })
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
        return getTableList(data).then(res => {
            return ({
                total: res.total,
                list: res.rows
            })
        })
    }
    const { tableProps, search } = useAntdTable(getTableData, {
        form,
        current: 1,
        pageSize: 10
    });
    const { submit, reset } = search;


    const handleAddData = () => {
        setModalTitle("新增");
        setEditData({});
    }

    const submitAddForm = value => {
        addData(value, editData)
            .then(res => {
                message.success(res.message)
                setEditData(undefined)
                reset();
            })
    }
    const ReturnModalEmt = () => {
        if (tag === '单位') {
            return <UnitEdit submitAddForm={submitAddForm} editData={editData} />
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
            {isAddBtn && <Button type="primary" onClick={handleAddData}>新建</Button>}
            <Table
                rowKey={r => r.id}
                columns={newColumns}
                {...tableProps} />

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