import { createSlice } from '@reduxjs/toolkit'
import { HomeState } from './HomeTypes'

const initialState: HomeState = {
  number: 0,
}

const slice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    increment: (state) => ({ number: state.number + 1 }),
    decrement: (state) => ({ number: state.number - 1 }),
  },
})

export default slice.reducer

export const { actions } = slice
