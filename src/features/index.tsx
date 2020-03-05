import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.scss'

import HomePage from './home/HomePage'
import TodoPage from './todo/TodoPage'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/todo' component={TodoPage} />
    </Switch>
  </BrowserRouter>
)
