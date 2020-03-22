import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import './views/styles.css'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { TwitterContent } from './theme'

import routes, { publicRoutes } from './routes'

import { Layout, Menu, Breadcrumb } from 'antd'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const graphqlClient = new ApolloClient({
  uri: `${process.env.REACT_APP_BACKEND_SERVER}/graphql`,
})

function App() {
  const [user, setUser] = useState(null)
  return (
    <ApolloProvider client={graphqlClient}>
      <Layout>
        <TwitterContent>
          {!!localStorage.getItem('twUserId') ? routes() : publicRoutes()}
        </TwitterContent>
      </Layout>
    </ApolloProvider>
  )
}

export default App
