import React, { Component } from 'react'
import { Menu } from 'antd'
import Content from './Content'
import Layout from '../../layouts'

import { request } from '../../lib'

const MenuItem = Menu.Item

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      years: [...new Array(8).keys()].map(item => 2017 + item),
      type: this.props.match.params.type || '',
      year: this.props.match.params.year || '',
      movies: []
    }
  }

  componentDidMount() {
    this._getAllMovies()
  }

  _getAllMovies = () => {
    const { type, year } = this.state
    request({
      methods: 'get',
      url: `/api/v0/movies?type=${type}&year=${year}`
    }).then(res => {
      this.setState({
        movies: res.movies
      })
    })
  }

  render() {
    const { years, movies } = this.state
    return (
      <Layout>
        <div className="flex-row full">
          <Menu>
            {years.map(item => (
              <MenuItem key={item}>
                <a href={`/ysar/${item}`}>{item}年上映</a>
              </MenuItem>
            ))}
          </Menu>
          <div className="flex-1 scroll-y align-self-start">
            <Content movies={movies} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Home
