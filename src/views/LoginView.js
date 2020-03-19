import React from 'react'
import LoginForm from '../components/LoginForm'
import { Row, Col, Card } from 'antd'

import { LoginContainer, LoginCard } from '../theme'

function LoginView(props) {
  return (
    <LoginContainer>
      <LoginCard>
        <Row span={24}>
          <Col span={12}>
            <img
              style={{ height: '200px', marginTop: 32 }}
              src="/assets/img/login.png"
              alt="image"
            />
          </Col>
          <Col span={12}>
            <LoginForm />
          </Col>
        </Row>
      </LoginCard>
    </LoginContainer>
  )
}

export default LoginView
