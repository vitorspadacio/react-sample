import { AuthStore } from './AuthStore'

export const selectDisplayName = (state: AuthStore) =>
  state.user?.providerData[0].displayName || 'User'

export const selectHasUser = (state: AuthStore) =>
  Boolean(state.user?.providerData[0].displayName) ?? false
