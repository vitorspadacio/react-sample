import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Features from './features'
import InitEnv from './init-env'
import InitRedux from './init-redux'
import InitFirebase from './init-firebase'

const store = InitRedux()
InitEnv()
InitFirebase()

render(
  <Provider store={store}>
    <Features />
  </Provider>,
  document.getElementById('root'),
)
