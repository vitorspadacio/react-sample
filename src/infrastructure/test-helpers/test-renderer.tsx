import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import * as React from 'react';
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { Store } from 'redux'
import InitRedux from '../../init-redux'
import { mockFetch } from './test-mock-fetch'

const customRender = (
  ui: React.ReactElement,
  fetchMock: Promise<any> = Promise.resolve(),
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
  );

  const fetch = mockFetch(fetchMock)

  return {
    ...render(ui, { wrapper }),
    fetch,
    history,
    store,
  }
}

export * from '@testing-library/react'
export { customRender as render }

