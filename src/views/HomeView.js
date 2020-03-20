import React, { useState } from 'react'
import { HomeContainer, TweetButton, Title } from '../theme'
import Loader from '../components/Loader'
import {
  Button,
  Modal,
  Tabs,
  List,
  Avatar,
  Input,
  Row,
  Col,
  Divider,
} from 'antd'
import { useGetTweets, useGetUsers, useCreateTweet } from '../hooks/dataSource'
import moment from 'moment'
import {
  UserOutlined,
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
  const { routeTo } = props
  const [visible, setVisibility] = useState(false)
  const [tweet, setTweet] = useState(null)
  const { loading, error, data } = useGetTweets()

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
        // bodyStyle={{ height: '240px' }}
      >
        <Row style={{ marginBottom: 8 }}>
          <Col span={4}>
            <Avatar size={64} icon={<UserOutlined />} />
          </Col>
          <Col>
            <Title style={{ margin: 0 }}>Puneet Saini</Title>
            <p style={{ margin: 0, color: 'rgba(0, 0, 0, 0.45)' }}>
              @puneet1302
            </p>
          </Col>
        </Row>
        <h1 style={{ margin: 0 }}>{tweet && tweet.content}</h1>
        <p
          style={{ margin: 0, marginBottom: 16, color: 'rgba(0, 0, 0, 0.45)' }}
        >
          {`${moment(tweet && tweet.createdAt).format('h:mm A')} . ${moment(
            tweet && tweet.createdAt
          ).format('MMM DD, YYYY')}`}
        </p>
        {/* <p>{tweet && tweet.content}</p> */}
        <TweetArea
          commentedOn={tweet && tweet.id}
          toggleModal={() => setVisibility(false)}
        />
      </Modal>
      {tweets.map(tweet => (
        <div key={tweet.id}>
          <Row style={{ marginBottom: 8 }}>
            <Col span={2}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Col>
            <Col>
              <div
                className="tw-list-item"
                onClick={() => routeTo(`/tweet/${tweet.id}`)}
              >
                <h3 style={{ margin: 0 }}>
                  Puneet Saini{' '}
                  <span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>
                    {`@puneet1302 . ${moment(tweet.createdAt).format(
                      'h:mm A'
                    )}`}
                  </span>
                </h3>
                <p style={{ margin: 0 }}>{tweet.content}</p>
              </div>
              <div>
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setTweet(tweet)
                    setVisibility(true)
                  }}
                >
                  <MessageTwoTone /> {'2'}
                </span>
              </div>
            </Col>
          </Row>
          <Divider />
        </div>
      ))}
    </>
  )
}

function TweetArea(props) {
  const { commentedOn, toggleModal } = props
  const [tweet, setTweet] = useState('')
  const [saveTweet, { loading, error, data }] = useCreateTweet(() => {
    setTweet('')
    toggleModal()
  })
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
        <Button
          size="large"
          shape="round"
          disabled={!tweet}
          loading={loading}
          onClick={() =>
            saveTweet({
              userId: '5e74bf508f6867428974036a',
              content: tweet,
              commentedOn,
            })
          }
          type="primary"
        >
          Tweet
        </Button>
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
          <FeedWall routeTo={props.history.push} />
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
