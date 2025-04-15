import { create } from 'zustand'
import { useAppStore } from '../store'
import RpgApi from './RpgApi'
import { RpgClass } from './RpgTypes'

const { addLoading, removeLoading } = useAppStore.getState()

export interface RpgStore {
  rpgClasses: RpgClass[]
  errorMessage: string
  fetch: () => void
  clear: () => void
}

export const initialState = {
  rpgClasses: [],
  errorMessage: '',
}

export const useRpgStore = create<RpgStore>((set => ({
  ...initialState,

  fetch: async() => {
    addLoading()
    const classes = await RpgApi.getClasses()
    set({ rpgClasses: classes })
    removeLoading()
  },

  clear: () => set(initialState),
})))
