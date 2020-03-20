import React from 'react'
import logo from './logo.svg'
import './App.css'
import './views/styles.css'

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
      <Content
        style={{
          height: '100vh',
          maxWidth: '720px',
          minWidth: '720px',
          margin: '0 auto',
        }}
      >
        {routes()}
      </Content>
    </Layout>
  )
}

export default App
