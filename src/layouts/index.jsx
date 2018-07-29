import React, { Component } from 'react'
import { Menu, Spin } from 'antd'
import navRoutes from '../nav'
const MenuItem = Menu.Item

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      tip: '加载中...'
    }
    this.matchRouteName = this._getMatchRouteName()
  }

  render() {
    const { loading, tip } = this.state
    return (
        <div className="flex-column">
          <Menu
            className="nav-menu"
            mode="horizontal"
            defaultSelectedKeys={['233']}
          >
            <MenuItem>
              <a href="/">豆瓣</a>
            </MenuItem>
            {navRoutes.map((item, index) => (
              <MenuItem key={item.name}>
                {this._getMenuContent({ ...item })}
              </MenuItem>
            ))}
          </Menu>
          <Spin
            spinning={loading}
            tip={tip}
            wrapperClassName="content-spin full"
          >
            {this.props.children}
          </Spin>
        </div>
    )
  }

  setLoading = (loading = false, tip = '加载中~') => {
    this.props.store.updateStore({
      index: {
        loading,
        tip
      }
    })
  }

  _getMatchRouteName = () => {
    return this.props.match
      ? navRoutes.find(e => e.name === this.props.match.params.type)
        ? navRoutes.find(e => e.name === this.props.match.params.type).name
        : '全部'
      : navRoutes[0].name
  }

  _getMenuContent = ({ path, name }) => <a href={path ? path : '/'}>{name}</a>
}

export default Layout
