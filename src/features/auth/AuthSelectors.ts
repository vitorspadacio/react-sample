import { AuthStore } from './AuthStore'

export const selectDisplayName = (state: AuthStore) =>
  state.user?.providerData[0].displayName || 'User'
