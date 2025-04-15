import { AuthState } from './auth/AuthTypes'
import { HomeState } from './home/HomeTypes'
import { NodeSampleState } from './node-sample/NodeSampleTypes'
import { StarWarsState } from './rpg/RpgTypes'
import { TodoState } from './todo/TodoTypes'

export interface AppState {
  loadingStack: number,
}

export interface State {
  app: AppState,
  auth: AuthState,
  home: HomeState,
  nodeSample: NodeSampleState,
  starWars: StarWarsState,
  todo: TodoState,
}
