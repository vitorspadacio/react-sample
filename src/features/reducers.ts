import { combineReducers } from 'redux'
import HomeReducer from './home/HomeState'
import NodeSampleReducer from './node-sample/NodeSampleState'
import StarWarsReducer from './star-wars/StarWarsState'
import TodoReducer from './todo/TodoState'

export default combineReducers({
  home: HomeReducer,
  nodeSample: NodeSampleReducer,
  starWars: StarWarsReducer,
  todo: TodoReducer,
})
