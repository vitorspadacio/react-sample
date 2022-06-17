import { combineReducers } from 'redux'
import AuthReducer from './auth/AuthState'
import HomeReducer from './home/HomeState'
import NodeSampleReducer from './node-sample/NodeSampleState'
import StarWarsReducer from './star-wars/StarWarsState'
import AppReducer from './state'
import TodoReducer from './todo/TodoState'

export default combineReducers({
  app: AppReducer,
  auth: AuthReducer,
  home: HomeReducer,
  nodeSample: NodeSampleReducer,
  starWars: StarWarsReducer,
  todo: TodoReducer,
})
