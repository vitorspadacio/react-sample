import { createSelector } from '@reduxjs/toolkit'
import { State } from '../types'
import { TodoState } from './TodoTypes'

const selectFeature = (state: State) => state.todo

export const selectTasks = createSelector(
  selectFeature,
  (state: TodoState) => state.tasks,
)

export default selectFeature
