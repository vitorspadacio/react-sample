import { combineReducers } from 'redux'
import HomeReducer from './home/HomeState'
import StarWarsReducer from './star-wars/StarWarsState'
import TodoReducer from './todo/TodoState'

export default combineReducers({
  home: HomeReducer,
  todo: TodoReducer,
  starWars: StarWarsReducer,
})
