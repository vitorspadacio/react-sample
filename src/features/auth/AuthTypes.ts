import { User } from 'firebase/auth'
import { createReducer, Reducer } from '../../infrastructure/redux-helpers/create-reducer'

export interface AuthState {
  user?: User
}

export const createStateReducer = <PT>(reducer: Reducer<AuthState, PT>) => createReducer<AuthState, PT>(reducer)
