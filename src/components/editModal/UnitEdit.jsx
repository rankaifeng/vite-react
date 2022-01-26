/*
 * @Author: your name
 * @Date: 2022-01-25 13:48:13
 * @LastEditTime: 2022-01-26 10:46:24
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-vite\src\components\editModal\UnitEdit.jsx
 */
import { Form, Button, Input } from 'antd';
const UnitEdit = ({
    submitAddForm,
    editData,
}) => {
    const submitForm = value => {
        submitAddForm(value)
    }
    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 15 }
    };
    const formTailLayout = {
        wrapperCol: { offset: 8 }
    };
    return <Form onFinish={submitForm}>
        <Form.Item
            label="名称"
            initialValue={editData?.name}
            {...formItemLayout}
            name="name"
            rules={[{ required: true, message: "名称不能为空哦" }]}>
            <Input placeholder="请输入名称" />
        </Form.Item>
        <Form.Item label="联系人"
            {...formItemLayout}
            initialValue={editData?.contactperson}
            name="contactperson"
            rules={[{ required: true, message: "联系人不能为空哦" }]}>
            <Input placeholder="请输入联系人" />
        </Form.Item>
        <Form.Item label="电话"
            {...formItemLayout}
            initialValue={editData?.phone}
            name="phone"
            rules={[{ required: true, message: "电话不能为空哦" }]}>
            <Input type="number" placeholder="请输入电话" />
        </Form.Item>
        <Form.Item {...formTailLayout}>
            <Button type="primary" htmlType="submit" style={{ width: '130px' }}>
                提交
            </Button>
        </Form.Item>
    </Form>
}
export default UnitEdit;
