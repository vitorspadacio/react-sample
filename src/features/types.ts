import { HomeState } from './home/HomeTypes'
import { TodoState } from './todo/TodoTypes'
import { StarWarsState } from './star-wars/StarWarsTypes'

export interface State {
  home: HomeState,
  todo: TodoState,
  starWars: StarWarsState,
}
