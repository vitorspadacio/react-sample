import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import Reset from './assets/styles/reset'
import Features from './features'
import InitEnv from './init-env'
import InitRedux from './init-redux'
import GlobalStyle from './style'

const queryClient = new QueryClient()
const store = InitRedux()
InitEnv()

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Reset />
      <GlobalStyle />
      <Features />
    </QueryClientProvider>
  </Provider>,
)
