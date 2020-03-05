
import { combineReducers } from 'redux'
import HomeReducer from './home/HomeReducers'
import TodoReducer from './todo/TodoReducer'

export default combineReducers({
  home: HomeReducer,
  todo: TodoReducer,
})
