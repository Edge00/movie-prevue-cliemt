import React, { Component, createContext } from 'react'
import { Menu, Spin } from 'antd'
import navRoutes from '../nav'
const MenuItem = Menu.Item

const getMenuContent = ({ path, name }) => (
  <a href={path ? path : '/'}>{name}</a>
)

export const { Provider, Consumer } = createContext(() => {})

export default class LayoutDefault extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      tip: '加载中~'
    }
    this.matchRouteNme = this.props.match
      ? navRoutes.find(e => e.name === this.props.match.params.type)
        ? navRoutes.find(e => e.name === this.props.match.params.type).name
        : '全部'
      : navRoutes[0].name
  }

  render() {
    const { loading, tip } = this.state
    return (
      <div className="flex-column">
        <Provider value={this.setLoading}>
          <Menu
            className="nav-menu"
            mode="horizontal"
            defaultSelectedKeys={['233']}>
            <MenuItem>
              <a href="/">豆瓣</a>
            </MenuItem>
            {navRoutes.map((item, index) => (
              <MenuItem key={item.name}>{getMenuContent({ ...item })}</MenuItem>
            ))}
          </Menu>
          <Spin
            spinning={loading}
            tip={tip}
            wrapperClassName="content-spin full">
            {this.props.children}
          </Spin>
        </Provider>
      </div>
    )
  }

  setLoading = (loading = false, tip = '加载中~') => {
    this.setState({
      loading,
      tip
    })
  }
}
