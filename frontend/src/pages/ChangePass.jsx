import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios"
const ChangePass = () => {

    let param = useParams()
    let navigate = useNavigate()

    const onFinish =async (values) => {
        console.log(param.token)
        let data = await axios.post(
            "http://localhost:8000/api/v1/auth/changepass",
            {
              token: param.token,
              password:values.password
            }
          );
      
          console.log(data);
          navigate("/login")
    
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
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
      label="New Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    

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

export default ChangePass