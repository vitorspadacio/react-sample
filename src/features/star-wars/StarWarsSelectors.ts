import { createSelector } from '@reduxjs/toolkit'
import { State } from '../types'
import { StarWarsState } from './StarWarsTypes'

const selectFeature = (state: State) => state.starWars

export const selectPlanets = createSelector(
  selectFeature,
  (state: StarWarsState) => state.planets,
)

export const selectErrorMessage = createSelector(
  selectFeature,
  (state: StarWarsState) => state.errorMessage,
)

export default selectFeature
