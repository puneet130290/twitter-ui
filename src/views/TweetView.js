import React from 'react'
import moment from 'moment'
import { Avatar, Row, Col, Divider, PageHeader } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { HomeContainer, Title } from '../theme'
import { useGetTweet, useFindTweets } from '../hooks/dataSource'
import Loader from '../components/Loader'
import { MessageTwoTone } from '@ant-design/icons'

function CommentList(props) {
  const { tweetId } = props
  const { loading, error, data } = useFindTweets({ commentedOn: tweetId })

  if (loading) return <Loader />
  if (error) return <p>error...</p>

  const { tweets } = data

  return (
    <>
      {tweets.map(tweet => (
        <>
          <Row style={{ marginBottom: 8 }}>
            <Col span={2}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Col>
            <Col>
              <h3 style={{ margin: 0 }}>
                Puneet Saini{' '}
                <span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>
                  {`@puneet1302 . ${moment(tweet.createdAt).format('h:mm A')}`}
                </span>
              </h3>
              <p style={{ margin: 0 }}>{tweet.content}</p>
              <div>
                <span>
                  <MessageTwoTone /> {'2'}
                </span>
              </div>
            </Col>
          </Row>
        </>
      ))}
    </>
  )
}

function TweetView(props) {
  const { loading, error, data } = useGetTweet(props.match.params.id)

  if (loading) return <Loader />
  if (error) return <p>error...</p>

  const { tweet } = data

  return (
    <HomeContainer>
      <PageHeader
        className="site-page-header"
        onBack={() => props.history.goBack()}
        title="Tweet"
      />
      <Divider style={{ margin: 0, marginBottom: 16 }} />
      <Row style={{ marginBottom: 8 }}>
        <Col span={3}>
          <Avatar size={64} icon={<UserOutlined />} />
        </Col>
        <Col>
          <Title style={{ margin: 0 }}>Puneet Saini</Title>
          <p style={{ margin: 0, color: 'rgba(0, 0, 0, 0.45)' }}>
            @puneet1302
          </p>
        </Col>
      </Row>
      <h1 style={{ margin: 0 }}>{tweet.content}</h1>
      <p style={{ margin: 0, color: 'rgba(0, 0, 0, 0.45)' }}>
        {`${moment(tweet.createdAt).format('h:mm A')} . ${moment(
          tweet.createdAt
        ).format('MMM DD, YYYY')}`}
      </p>
      <div style={{ paddingTop: 8 }}>
        <span>
          <MessageTwoTone /> {'2'}
        </span>
      </div>
      <Divider dashed />
      <CommentList tweetId={props.match.params.id} />
    </HomeContainer>
  )
}

export default TweetView
