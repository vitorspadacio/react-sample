import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Reducers from './features/reducers'
import Sagas from './features/sagas'

const isProduction = process.env.PLATAFORM === 'production'

export default () => {
  /* eslint-disable no-underscore-dangle */
  const devTools = isProduction ? '' : (window as any).__REDUX_DEVTOOLS_EXTENSION__
    && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  /* eslint-enable no-underscore-dangle */

  const sagaMiddleware = createSagaMiddleware()
  const tools = devTools || compose
  const store = applyMiddleware(sagaMiddleware)(createStore)(Reducers, tools)
  sagaMiddleware.run(Sagas)

  return store
}
