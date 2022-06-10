import { createSlice } from '@reduxjs/toolkit'
import { AppState } from './types'

const initialState: AppState = {
  loadingStack: 0,
}

const addLoadingStack = (state: AppState) => ({
  ...state, loadingStack: state.loadingStack + 1,
})

const removeLoadingStack = (state: AppState) => ({
  ...state, loadingStack: state.loadingStack - 1,
})

const clearLoadingStack = (state: AppState) => ({
  ...state, loadingStack: initialState.loadingStack,
})

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addLoadingStack,
    removeLoadingStack,
    clearLoadingStack,
  },
})

export default slice.reducer

export const { actions } = slice
