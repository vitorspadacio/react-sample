import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.scss'

import HomePage from './home/HomePage'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={HomePage} />
    </Switch>
  </BrowserRouter>
)
