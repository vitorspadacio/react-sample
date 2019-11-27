import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import InitRedux from './init-redux'
import InitEnv from './init-env'

import Features from './features'

const store = InitRedux()
InitEnv()

render(
  <Provider store={store}>
    <Features />
  </Provider>,
  document.getElementById('root'),
)
