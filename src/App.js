import React from 'react'
import logo from './logo.svg'
import './App.css'
import './views/styles.css'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import routes from './routes'

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
  // request: operation => {
  //   let token
  //   firebase.auth().onAuthStateChanged(async user => {
  //     if (user) {
  //       token = await firebase.auth().currentUser.getIdToken()
  //       localStorage.setItem('accessToken', token)
  //     } else {
  //       token = ''
  //     }
  //   })
  //   operation.setContext({
  //     headers: {
  //       authorization: `Bearer ${token}`,
  //     },
  //   })
  // },
})

function App() {
  return (
    <ApolloProvider client={graphqlClient}>
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
    </ApolloProvider>
  )
}

export default App
