import React from 'react'
import { useAntdTable } from 'ahooks'
import { deviceList } from '@/api/globApi'
import { Button, Form, Input, Table, Row, Col } from 'antd'
const Home = () => {
    const [form] = Form.useForm();
    const getTableData = ({ current, pageSize }, formData) => {
        let data = {
            page: current,
            per: pageSize,
        }
        Object.entries(formData).forEach(([key, value]) => {
            if (value) {
                data = {
                    ...data,
                    "q[name_cont]": value
                }
            }
        });
        return deviceList(data)
            .then(res => ({
                total: res.total,
                list: res.rows
            }))
    }

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
        },
    ];

    const { tableProps, search } = useAntdTable(getTableData, {
        form,
        current: 1,
        pageSize: 10
    });

    const { submit, reset } = search;
    return (
        <div>
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
            <Table
                rowKey={r => r.id}
                columns={columns}
                {...tableProps}
            />
        </div>

    )
}
export default Home