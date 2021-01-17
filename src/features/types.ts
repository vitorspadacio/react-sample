import { HomeState } from './home/HomeTypes'
import { StarWarsState } from './star-wars/StarWarsTypes'
import { TodoState } from './todo/TodoTypes'

export interface State {
  home: HomeState,
  todo: TodoState,
  starWars: StarWarsState,
}
