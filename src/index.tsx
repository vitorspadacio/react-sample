import { createRoot } from 'react-dom/client'
import Reset from './assets/styles/reset'
import Features from './features'
import InitEnv from './init-env'
import GlobalStyle from './style'

InitEnv()

createRoot(document.getElementById('root')).render(
  <>
    <Reset />
    <GlobalStyle />
    <Features />
  </>,
)
