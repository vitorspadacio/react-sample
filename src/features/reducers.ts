import { combineReducers } from 'redux'
import HomeReducer from './home/HomeState'
import NodeSampleReducer from './node-sample/NodeSampleState'
import StarWarsReducer from './star-wars/StarWarsState'
import AppReducer from './state'
import TodoReducer from './todo/TodoState'

export default combineReducers({
  app: AppReducer,
  home: HomeReducer,
  nodeSample: NodeSampleReducer,
  starWars: StarWarsReducer,
  todo: TodoReducer,
})
