import React from 'react'
import { HomeContainer } from '../theme'
import { Tabs, List, Avatar } from 'antd'
import {
  AppleOutlined,
  AndroidOutlined,
  MessageOutlined,
  LikeOutlined,
  StarOutlined,
} from '@ant-design/icons'

const { TabPane } = Tabs

const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
)

const listData = []
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  })
}

function FeedWall(props) {
  return (
    <List
      itemLayout="vertical"
      size="large"
      // pagination={{
      //   onChange: page => {
      //     console.log(page)
      //   },
      //   pageSize: 3,
      // }}
      dataSource={listData}
      // footer={
      //   <div>
      //     <b>ant design</b> footer part
      //   </div>
      // }
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[
            <IconText
              icon={StarOutlined}
              text="156"
              key="list-vertical-star-o"
            />,
            <IconText
              icon={LikeOutlined}
              text="156"
              key="list-vertical-like-o"
            />,
            <IconText
              icon={MessageOutlined}
              text="2"
              key="list-vertical-message"
            />,
          ]}
          // extra={
          //   <img
          //     width={272}
          //     alt="logo"
          //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          //   />
          // }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
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
          Tab 2
        </TabPane>
      </Tabs>
    </HomeContainer>
  )
}

export default HomeView
