import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './index.scss'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={() => <h1>Hello World!</h1>} />
    </Switch>
  </BrowserRouter>
)
