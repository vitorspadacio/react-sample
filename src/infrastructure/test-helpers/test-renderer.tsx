import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import * as React from 'react'
import { Provider } from 'react-redux'
import { Route, Router, Routes } from 'react-router-dom'
import InitRedux from '../../init-redux'

const customRender = (
  ui: React.ReactElement,
  {
    store = InitRedux(),
    location = '/',
    path = '/',
  } = {},
) => {
  const history = createMemoryHistory()
  const wrapper = ({ children }) => (
    <Provider store={store}>
      <Router
        location={location}
        navigator={history}
      >
        <Routes>
          <Route path={path} element={children} />
        </Routes>
      </Router>
    </Provider>
  )

  return {
    ...render(ui, { wrapper }),
    history,
    store,
  }
}

export * from '@testing-library/react'
export { customRender as render }
