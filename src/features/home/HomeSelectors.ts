import { createSelector } from '@reduxjs/toolkit'
import { State } from '../types'
import { HomeState } from './HomeTypes'

const selectFeature = (state: State) => state.home

export const selectNumber = createSelector(
  selectFeature,
  (state: HomeState) => state.number,
)

export default selectFeature
