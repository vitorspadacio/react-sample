import { createSelector } from '@reduxjs/toolkit'
import { State } from '../types'
import { NodeSampleState } from './NodeSampleTypes'

const selectFeature = (state: State) => state.nodeSample

export const selectUsers = createSelector(
  selectFeature,
  (state: NodeSampleState) => state.users,
)

export const selectErrorMessage = createSelector(
  selectFeature,
  (state: NodeSampleState) => state.errorMessage,
)

export const selectIsLoading = createSelector(
  selectFeature,
  (state: NodeSampleState) => state.isLoading,
)

export default selectFeature
