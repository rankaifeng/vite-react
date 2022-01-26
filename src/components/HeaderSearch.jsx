import React from 'react';
import { Form, Button, Select, DatePicker, Input, Row, Col, TreeSelect, Tree, Cascader } from 'antd';
import { SearchOutlined, SyncOutlined } from '@ant-design/icons';
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TreeNode } = Tree;
const HeaderSearch = ({
  headerFrom,
  formSubmit,
  formClear,
  form
}) => {
  const onFinish = v => {
    if (v) {
      formSubmit(v);
    }
  }
  const loop = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <TreeNode
            key={item.id}
            value={item.id}
            title={item.name}>
            {loop(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode
        key={item.id}
        value={item.id}
        title={item.name} />;
    });
  }

  const initFormList = () => {
    const formItemList = [];
    // 页面上的表单
    if (headerFrom && headerFrom.length > 0) {
      headerFrom.forEach(item => {
        const {
          parameter,
          type,
          name,
          list,
          mode,
        } = item;
        if (type === 'SELECT') {
          const SELECT = (
            <Form.Item
              key={name || ""}
              name={parameter}>
              <Select
                mode={mode}
                style={{width:'160px'}}
                placeholder={name}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                } >
                {list.map((item, index) => {
                  return <Option
                    value={item.id} key={index}>{item.name}</Option>
                })}
              </Select>
            </Form.Item>
          )
          formItemList.push(SELECT);
        } else if (type === 'TIME') {
          const TIME = (
            <Form.Item
              key={name || ""}
              name="range">
              <RangePicker />
            </Form.Item>
          )
          formItemList.push(TIME);
        } else if (type === 'INPUT') {
          const INPUT = (
            <Col span={4} key={name || ""}>
              <Form.Item
                name={parameter}>
                <Input placeholder={name} />
              </Form.Item>
            </Col>
          );
          formItemList.push(INPUT);
        } else if (type === 'TREE') {
          const TREE = (
            <Form.Item
              key={name || ""}
              key={type}
              name={parameter}>
              <TreeSelect
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                style={{ width: '200px' }}
                placeholder="选择组织树"
                allowClear>
                {loop(list)}
              </TreeSelect>
            </Form.Item>
          )
          formItemList.push(TREE);
        }
      })
    }
    return formItemList;
  }

  return (
    <div className="layout_top">
      <div className="header-search">
        <Form
          form={form}
          onFinish={onFinish}
          layout="horizontal" >
          <Row gutter={24}>
            {initFormList()}
            <Col span={12}>
              <Button icon={<SearchOutlined />} type="primary" htmlType="submit">
                查 询
              </Button>
              <Button
                onClick={formClear}
                icon={<SyncOutlined />}
                type='danger'
                style={{ marginLeft: '5px' }}
                className={'btn'}>
                重置
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  )
}
export default HeaderSearch;