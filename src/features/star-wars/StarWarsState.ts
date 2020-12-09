import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StarWarsState, Planet } from './StarWarsTypes'

const initialState: StarWarsState = {
  planets: [],
  isLoading: false,
}

const getPlanets = (state) => state

const setPlanets = (state: StarWarsState, action: PayloadAction<{ planets: Planet[] }>) => ({
  ...state,
  planets: action.payload.planets,
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
    isLoading,
  },
})

export default slice.reducer

export const { actions } = slice
