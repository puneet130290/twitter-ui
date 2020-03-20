import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { TwInput, Title, TwButton, Register } from '../theme'

function Signup(props) {
  const onFinish = values => {
    console.log('Received values of form: ', values)
  }

  return (
    <>
      <Title>Login</Title>
      <Form
        name="Signup"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <TwInput
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <TwInput
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <TwInput
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="rePassword"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <TwInput
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Re-Enter Password"
          />
        </Form.Item>

        <Form.Item>
          <TwButton
            style={{ marginRight: 8 }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Register
          </TwButton>
        </Form.Item>
      </Form>
    </>
  )
}

export default Signup
