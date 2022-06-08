import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { justForSideEffect, justForSideEffectWithPayload } from '../../infrastructure/redux-helpers/saga-actions'
import { NodeSampleState, User } from './NodeSampleTypes'

const initialState: NodeSampleState = {
  users: [],
  isLoading: false,
  errorMessage: '',
  showDeleteModal: false,
}

const getUsers = justForSideEffect()
const deleteUser = justForSideEffectWithPayload<{ id }>()
const updateUser = justForSideEffectWithPayload<User>()
const createUser = justForSideEffectWithPayload<User>()

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

const setShowDeleteModal = (state: NodeSampleState, action: PayloadAction<boolean>) => ({
  ...state,
  setShowDeleteModal: action.payload,
})

const slice = createSlice({
  name: 'nodesample',
  initialState,
  reducers: {
    getUsers,
    deleteUser,
    updateUser,
    createUser,
    setUsers,
    setError,
    removeError,
    isLoading,
    setShowDeleteModal,
  },
})

export default slice.reducer

export const { actions } = slice
