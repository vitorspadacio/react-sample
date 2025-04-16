import { createSelector } from '@reduxjs/toolkit'
import { State } from '../types'
import { AuthState } from './AuthTypes'

const selectFeature = (state: State) => state.auth

export const selectUser = createSelector(selectFeature, (state: AuthState) => state.user)

export const selectDisplayName = createSelector(
  selectFeature,
  (state: AuthState) => state.user?.providerData[0].displayName || 'User',
)
