import React, { useState } from 'react'
import { HomeContainer, TweetButton } from '../theme'
import Loader from '../components/Loader'
import { Modal, Tabs, List, Avatar, Input, Row, Col, Divider } from 'antd'
import { useGetTweets, useGetUsers, useCreateTweet } from '../hooks/dataSource'
import moment from 'moment'
import {
  AppleOutlined,
  AndroidOutlined,
  MessageTwoTone,
  LikeOutlined,
  StarOutlined,
} from '@ant-design/icons'

const { TabPane } = Tabs
const { TextArea } = Input

const IconText = ({ icon, text, onClick }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
)

function UserList(props) {
  const { loading, error, data } = useGetUsers()
  if (loading) return <Loader />
  if (error) return <p>error...</p>
  const { users } = data
  return (
    <List
      itemLayout="horizontal"
      dataSource={users}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={<a href="https://ant.design">{item.name}</a>}
            description={`@${item.handle}`}
          />
        </List.Item>
      )}
    />
  )
}

function FeedWall(props) {
  const [visible, setVisibility] = useState(false)
  const { loading, error, data } = useGetTweets()
  console.log({ visible })

  const handleOk = e => setVisibility(false)
  const handleCancel = e => setVisibility(false)

  if (loading) return <Loader />
  if (error) return <p>error...</p>

  const { tweets } = data
  return (
    <>
      <Modal
        title={null}
        footer={null}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={{ height: '240px' }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={tweets}
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={[
              <span onClick={() => setVisibility(true)}>
                <MessageTwoTone /> {'2'}
              </span>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a>Puneet Saini</a>}
              description={item.content}
            />
            {item.content}
          </List.Item>
        )}
      />
    </>
  )
}

function TweetArea(props) {
  const [tweet, setTweet] = useState('')
  const [saveTweet, { loading, error, data }] = useCreateTweet()
  return (
    <>
      <Row>
        <Col span="2">
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </Col>
        <Col>
          <TextArea
            value={tweet}
            placeholder="What's happening..."
            rows={4}
            style={{ borderRadius: 8 }}
            allowClear
            onChange={e => setTweet(e.target.value)}
          />
        </Col>
      </Row>
      <div style={{ textAlign: 'right', paddingTop: 8 }}>
        <TweetButton
          disabled={!tweet}
          loading={loading}
          onClick={() =>
            saveTweet({ userId: '5e74bf508f6867428974036a', content: tweet })
          }
          type="primary"
        >
          Tweet
        </TweetButton>
      </div>
    </>
  )
}

function HomeView(props) {
  return (
    <HomeContainer>
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <AppleOutlined />
              Home
            </span>
          }
          key="1"
        >
          <TweetArea />
          <Divider dashed />
          <FeedWall />
        </TabPane>
        <TabPane
          tab={
            <span>
              <AndroidOutlined />
              Users
            </span>
          }
          key="2"
        >
          <UserList />
        </TabPane>
      </Tabs>
    </HomeContainer>
  )
}

export default HomeView
