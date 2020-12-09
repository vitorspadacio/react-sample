import { combineReducers } from 'redux'
import HomeReducer from './home/HomeState'
import TodoReducer from './todo/TodoState'
import StarWarsReducer from './star-wars/StarWarsState'

export default combineReducers({
  home: HomeReducer,
  todo: TodoReducer,
  starWars: StarWarsReducer,
})
