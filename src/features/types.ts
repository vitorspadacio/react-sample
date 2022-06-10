import { HomeState } from './home/HomeTypes'
import { NodeSampleState } from './node-sample/NodeSampleTypes'
import { StarWarsState } from './star-wars/StarWarsTypes'
import { TodoState } from './todo/TodoTypes'

export interface AppState {
  loadingStack: number,
}

export interface State {
  app: AppState,
  home: HomeState,
  nodeSample: NodeSampleState,
  starWars: StarWarsState,
  todo: TodoState,
}
