import React, { Component } from 'react'
import { Menu } from 'antd'
import Content from './Content'
import Layout from '../../layouts/default'

import { request } from '../../lib'
import { Consumer } from "../../layouts/default"
const MenuItem = Menu.Item

export default class Home extends Component {

  constructor (props) {
    super(props)
    this.state = {
      years: [...(new Array(8).keys())].map(item => 2017 + item),
      type: this.props.match.params.type || '',
      year: this.props.match.params.year || '',
      movies: []
    }
  }

  componentDidMount () {
    this._getAllMovies()
  }

  _getAllMovies = () => {
    const { type, year } = this.state
    request(this.setLoading)({
      methods: 'get',
      url: `/api/v0/movies?type=${type}&year=${year}`
    }).then(res => {
      this.setState({
        movies: res
      })
    })
  }

  render () {
    const { years, movies } = this.state
    console.log(this.props)
    return (
      <Layout {...this.props}>
        <Consumer>
          {setLoading => {
            this.setLoading = setLoading
            return (
              <div className="flex-rot full">
                <Menu>
                  {
                    years.map(item => (
                      <MenuItem key={item}>
                        <a href={`/ysar/${item}`}>{item}年上映</a>
                      </MenuItem>
                    ))
                  }
                </Menu>
                <div className="flex-1 scroll-y align-self-start">
                  <Content movies={movies}/>
                </div>
              </div>
            )
          }}
        </Consumer>
      </Layout>
    )
  }

}


