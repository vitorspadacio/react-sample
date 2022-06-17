import { createSlice } from '@reduxjs/toolkit'
import { User } from 'firebase/auth'
import { justForSideEffect, justForSideEffectWithPayload } from '../../infrastructure/redux-helpers/saga-actions'
import { AuthState, createStateReducer } from './AuthTypes'
import { LoginForm } from './LoginPage/Login.schemas'
import { RegisterForm } from './RegisterPage/Register.schemas'

const initialState: AuthState = {
  user: undefined,
}

const logIn = justForSideEffectWithPayload<LoginForm>()
const googleLogIn = justForSideEffect()
const register = justForSideEffectWithPayload<RegisterForm>()
const logOut = justForSideEffect()

const setUser = createStateReducer<User>((state, action) => ({
  ...state, user: action.payload,
}))

const slice = createSlice({
  name: 'armario',
  initialState,
  reducers: {
    logIn,
    googleLogIn,
    register,
    logOut,
    setUser,
  },
})

export default slice.reducer

export const { actions } = slice
