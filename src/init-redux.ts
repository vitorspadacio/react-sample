import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import reducers from './features/reducers'
import Sagas from './features/sagas'

export default () => {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [sagaMiddleware]
  const store = configureStore({
    devTools: import.meta.env.DEV,
    middleware,
    reducer: reducers,
  })
  sagaMiddleware.run(Sagas)

  return store
}
