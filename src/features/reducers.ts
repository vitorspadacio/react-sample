import { combineReducers } from 'redux'
import AuthReducer from './auth/AuthState'
import NodeSampleReducer from './node-sample/NodeSampleState'
import StarWarsReducer from './star-wars/StarWarsState'
import AppReducer from './state'

export default combineReducers({
  app: AppReducer,
  auth: AuthReducer,
  nodeSample: NodeSampleReducer,
  starWars: StarWarsReducer,
})
