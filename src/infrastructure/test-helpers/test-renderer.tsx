import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import * as React from 'react'
import { Provider } from 'react-redux'
import { Route, Router, Routes } from 'react-router-dom'
import Navigation from '../../components/Navigation'
import InitRedux from '../../init-redux'
import { QueryClient, QueryClientProvider } from 'react-query'

const customRender = (
  ui: React.ReactElement,
  {
    store = InitRedux(),
    location = '/',
    path = '/',
  } = {},
) => {
  const history = createMemoryHistory()
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } }
  })
  const wrapper = ({ children }) => (
    <div id='root'>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router
            location={location}
            navigator={history}
          >
            <Navigation />
            <Routes>
              <Route path={path} element={children} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </Provider>
    </div>
  )

  return {
    ...render(ui, { wrapper }),
    history,
    store,
  }
}

export * from '@testing-library/react'
export { customRender as render }
