import React from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'
import InitRedux from '../init-redux'

const customRender = (
  ui: React.ReactElement,
  store: Store = InitRedux(),
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) => {
  const wrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
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
