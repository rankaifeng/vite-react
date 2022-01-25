import React, { useImperativeHandle, useState } from 'react'
import { useAntdTable } from 'ahooks'
import { Button, Form, Input, Table, Row, Col, Modal, message } from 'antd'
import UnitEdit from './editModal/UnitEdit'
const TableData = ({
    columns,//表头
    getTableList,//请求表格数据方法
    title,//新增 编辑弹窗标题
    tag,
    addData,
    delData
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


    const handleAddData = data => {
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
            <Form form={form}>
                <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item label="设备名" name="name_cont">
                            <Input placeholder="设备名称" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Button type="primary" onClick={submit}>搜索</Button>
                        <Button style={{ marginLeft: 16 }} onClick={reset}>重置 </Button>
                    </Col>
                </Row>
            </Form>
            <Button type="primary" onClick={handleAddData}>新建</Button>
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