import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Badge, Icon } from 'antd'
import moment from 'moment'

import 'moment/locale/zh-cn'
moment.locale('zh-cn')

const site = 'http://pbahvan6q.bkt.clouddn.com'

const { Meta } = Card

class Content extends Component {
  render() {
    return <div style={{ padding: 10 }}>{this._renderContent()}</div>
  }
  _renderContent = () => {
    const { movies } = this.props
    return (
      <div style={{ padding: 30 }}>
        <Row>
          {movies.map((item, index) => {
            console.log(item)
            return (
              <Col
                key={index}
                xl={{ span: 6 }}
                lg={{ span: 8 }}
                dm={{ span: 12 }}
                sm={{ span: 24 }}
                style={{ marginBottom: 8 }}
              >
                <Card
                  bordered={false}
                  hoverable
                  style={{ width: '100%' }}
                  actions={[
                    <Badge>
                      <Icon
                        style={{ marginRight: '2px' }}
                        type="clock-circle"
                      />
                      {moment(item.meta.createdAt).fromNow(true)}前更新
                    </Badge>,
                    <Badge>
                      <Icon styl={{ marginRight: '2px' }} type="star" />
                      {item.rete}分
                    </Badge>
                  ]}
                  cover={
                    <img
                      src={
                        site + '/' +
                        item.posterKey +
                        '?imageMongr2/thumbnail/x1680/crop/1080x1600'
                      }
                    />
                  }
                >
                  <Meta
                    style={{ height: '202px', overflow: 'hidden' }}
                    title={<Link to={`/detail/${item._id}`}>{item.title}</Link>}
                    description={
                      <Link to={`/detail/${item._id}`}>{item.summary}</Link>
                    }
                  />
                </Card>
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }
}

export default Content
