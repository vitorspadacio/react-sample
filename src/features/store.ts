import { create } from 'zustand'

export interface AppStore {
  loadingStack: number
  addLoading: () => void
  removeLoading: () => void
}

export const initialState = {
  loadingStack: 0,
}

export const useAppStore = create<AppStore>((set) => ({
  ...initialState,

  addLoading: () => set(({ loadingStack }) => ({ loadingStack: loadingStack + 1 })),
  removeLoading: () => set(({ loadingStack }) => ({ loadingStack: loadingStack - 1 })),
}))
