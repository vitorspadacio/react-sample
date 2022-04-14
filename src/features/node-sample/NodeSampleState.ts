import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { justForSideEffectWithPayload, justForSideEffect } from '../../infrastructure/saga-actions'
import { NodeSampleState, User } from './NodeSampleTypes'

const initialState: NodeSampleState = {
  users: [],
  isLoading: false,
  errorMessage: '',
}

const getUsers = justForSideEffect()
const deleteUser = justForSideEffectWithPayload<{ id }>()

const setUsers = (state: NodeSampleState, action: PayloadAction<User[]>) => ({
  ...state,
  users: action.payload,
})

const setError = (state: NodeSampleState, action: PayloadAction<{ message: string }>) => ({
  ...state,
  errorMessage: action.payload.message,
})

const removeError = (state: NodeSampleState) => ({
  ...state,
  errorMessage: '',
})

const isLoading = (state: NodeSampleState, action: PayloadAction<boolean>) => ({
  ...state,
  isLoading: action.payload,
})

const slice = createSlice({
  name: 'nodesample',
  initialState,
  reducers: {
    getUsers,
    deleteUser,
    setUsers,
    setError,
    removeError,
    isLoading,
  },
})

export default slice.reducer

export const { actions } = slice
