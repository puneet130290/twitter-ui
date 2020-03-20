import React from 'react'
import SignupForm from '../components/SignupForm'
import { Row, Col, Card } from 'antd'

import { LoginContainer, LoginCard } from '../theme'

function SignupView(props) {
  return (
    <LoginContainer>
      <LoginCard>
        <Row span={24}>
          <Col span={12}>
            <img
              style={{ height: '180px', marginTop: 32 }}
              src="/assets/img/signup.png"
              alt="image"
            />
          </Col>
          <Col span={12}>
            <SignupForm />
          </Col>
        </Row>
      </LoginCard>
    </LoginContainer>
  )
}

export default SignupView
