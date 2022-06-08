import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { justForSideEffect } from '../../infrastructure/redux-helpers/saga-actions'
import { Planet, StarWarsState } from './StarWarsTypes'

const initialState: StarWarsState = {
  planets: [],
  isLoading: false,
  errorMessage: '',
}

const getPlanets = justForSideEffect()

const setPlanets = (state: StarWarsState, action: PayloadAction<{ planets: Planet[] }>) => ({
  ...state,
  planets: action.payload.planets,
})

const setError = (state: StarWarsState, action: PayloadAction<{ message: string }>) => ({
  ...state,
  errorMessage: action.payload.message,
})

const removeError = (state: StarWarsState) => ({
  ...state,
  errorMessage: '',
})

const isLoading = (state: StarWarsState, action: PayloadAction<boolean>) => ({
  ...state,
  isLoading: action.payload,
})

const slice = createSlice({
  name: 'starwars',
  initialState,
  reducers: {
    getPlanets,
    setPlanets,
    setError,
    removeError,
    isLoading,
  },
})

export default slice.reducer

export const { actions } = slice
