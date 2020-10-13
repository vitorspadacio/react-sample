import { HomeState } from './home/HomeTypes'
import { TodoState } from './todo/TodoTypes'

export interface State {
  home: HomeState,
  todo: TodoState,
}
