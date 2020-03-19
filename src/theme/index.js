import React from 'react'
import styled, { css } from 'styled-components'
import { Card, Input } from 'antd'

const primaryColor = '#1890ff'

export const LoginContainer = styled.div`
  height: 100%;
  position: relative;
`

export const LoginCard = styled(Card)`
  position: absolute;
  width: 640px;
  height: 320px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 24px;
`

export const TwInput = styled(Input)`
  border-radius: 8px;
  height: 40px;
`

export const Title = styled.h1`
  color: ${primaryColor};
`
