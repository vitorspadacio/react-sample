import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import reducers from './features/reducers'
import Sagas from './features/sagas'

const isProduction = process.env.PLATFORM === 'production'

export default () => {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [sagaMiddleware]
  const store = configureStore({
    devTools: !isProduction,
    middleware,
    reducer: reducers,
  })
  sagaMiddleware.run(Sagas)

  return store
}
