import { combineReducers } from 'redux'
import HomeReducer from './home/HomeState'
import TodoReducer from './todo/TodoState'

export default combineReducers({
  home: HomeReducer,
  todo: TodoReducer,
})
