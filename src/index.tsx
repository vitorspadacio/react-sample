import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Features from './features'
import InitEnv from './init-env'
import InitRedux from './init-redux'

const store = InitRedux()
InitEnv()

render(
  <Provider store={store}>
    <Features />
  </Provider>,
  document.getElementById('root'),
)
