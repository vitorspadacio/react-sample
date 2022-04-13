import { createRoot } from 'react-dom/client'
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

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Reset />
    <GlobalStyle />
    <Features />
  </Provider>,
)
