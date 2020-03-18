import React from 'react'
import logo from './logo.svg'
import './App.css'

import routes from './routes'

import { Layout, Menu, Breadcrumb } from 'antd'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

function App() {
  return (
    <Layout>
      <Content>{routes()}</Content>
    </Layout>
  )
}

export default App
