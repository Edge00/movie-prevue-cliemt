import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'

import 'antd/dist/antd.css'
import './assets/common.sass'

export default () => (
  <Switch>
    {routes.map(({ name, path, component }) => (
      <Route path={path} exact component={component} key={name} />
    ))}
  </Switch>
)
