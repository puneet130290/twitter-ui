import React from 'react'
import styled, { css } from 'styled-components'
import { Card, Input, Button } from 'antd'

const primaryColor = '#1890ff'

export const LoginContainer = styled.div`
  height: 100%;
  position: relative;
`

export const LoginCard = styled(Card)`
  position: absolute;
  width: 640px;
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

export const TwButton = styled(Button)`
  border-radius: 8px;
  height: 40px;
`

export const TweetButton = styled(TwButton)`
  font-weight: bold;
`

export const HomeContainer = styled(Card)`
  width: 100%;
  border-radius: 24px;
  margin: 32px 0;
`

export const LoaderContainer = styled.div`
  width: 100%;
  text-align: center;
`
