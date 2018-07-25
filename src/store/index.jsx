import React, { Component, createContext } from 'react'

const { Provider, Consumer } = createContext()

export class StoreProvider extends Component {
  constructor() {
    super()
    this.state = {
      index: {
        loading: true,
        tip: '加载中'
      }
    }
  }

  updateStore = state => {
    this.setState({
      ...this.state,
      ...state
    })
  }

  render() {
    const data = this.state
    const updateStore = this.updateStore
    const context = { data, updateStore }
    return <Provider value={context}>{this.props.children}</Provider>
  }
}

export const SroreConsumer = Component => props => (
  <Consumer>
    {context => (
      <Component
        {...props}
        store={context}
      />
    )}
  </Consumer>
)
