import React, { useState } from 'react'
import { Button, Checkbox, Form, Input,Select } from 'antd';


const AddDiscount = () => {

    let [discounttype,setDiscountType]= useState("Fixed")

    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };


      let handleChange = (e)=>{
        setDiscountType(e)
      }

  return (
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Cupon"
      name="cupon"
      rules={[
        {
          required: true,
          message: 'Please input your cupon!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Percentage"
      name="percentage"
      rules={[
        {
          required: true,
          message: 'Please input your percentage!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Rang"
      name="rang"
      rules={[
        {
          required: true,
          message: 'Please input your rang!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Select
      defaultValue="Fixed"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'Fixed',
          label: 'fixed',
        },
        {
          value: 'Percent',
          label: 'percent',
        },
        {
          value: 'Delivery Charge',
          label: 'deliverycharge',
        },
      ]}
    />


    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default AddDiscount