import React from 'react'
import { Button, Avatar, Input, Row, Col } from 'antd'

const { TextArea } = Input

function TweetBox(props) {
  const { onSubmit, onTweetChange, value, loading } = props
  return (
    <>
      <Row>
        <Col span="2">
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </Col>
        <Col>
          <TextArea
            value={value}
            placeholder="What's happening..."
            rows={4}
            style={{ borderRadius: 8 }}
            allowClear
            onChange={e => onTweetChange(e.target.value)}
          />
        </Col>
      </Row>
      <div style={{ textAlign: 'right', paddingTop: 8 }}>
        <Button
          size="large"
          shape="round"
          disabled={!value}
          loading={loading}
          onClick={() => onSubmit()}
          type="primary"
        >
          Tweet
        </Button>
      </div>
    </>
  )
}

export default TweetBox
