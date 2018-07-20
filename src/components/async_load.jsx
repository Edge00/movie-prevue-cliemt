import React, { Component } from 'react'

export default (loadComponent, placeholder = '正在加载中') => {
  return class AsyncComponent extends Component {

    constructor() {
      super()
      this.state = {
        Child: null
      }
      this.unmount = false
    }

    async componentDidMount() {
      const { default: Child } = await loadComponent()
      if (this.unmount) return

      this.setState({
        Child
      })
    }

    componentWillUnmount() {
      this.unmount = true
    }

    render() {
      const { Child } = this.state
      return Child ? <Child {...this.props} /> : placeholder
    }
  }
}
