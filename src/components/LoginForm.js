import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { TwInput, Title, TwButton } from '../theme'
import { SIGNUP_VIEW } from '../resources/routeNames'

function LoginForm(props) {
  const { routeTo } = props

  const onFinish = values => {
    console.log('Received values of form: ', values)
  }

  return (
    <>
      <Title>Login</Title>
      <Form
        name="normal_login"
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
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            size="large"
            shape="round"
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>{' '}
          Or <a onClick={() => routeTo(SIGNUP_VIEW)}>register now!</a>
        </Form.Item>
      </Form>
    </>
  )
}

export default LoginForm
