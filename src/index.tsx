import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Reset from './assets/styles/reset'
import Features from './features'
import InitEnv from './init-env'
import InitFirebase from './init-firebase'
import InitRedux from './init-redux'
import GlobalStyle from './style'

const store = InitRedux()
InitEnv()
InitFirebase()

render(
  <Provider store={store}>
    <Reset />
    <GlobalStyle />
    <Features />
  </Provider>,
  document.getElementById('root'),
)
