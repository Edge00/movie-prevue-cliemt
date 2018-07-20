import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
import registerServiceWorker from './registerServiceWorker'

const rootElement = document.querySelector('#root')

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
)

registerServiceWorker()
