import create from 'zustand'
import { HomeStore } from './HomeTypes'

const useHomeStore = create<HomeStore>((set) => ({
  number: 0,
  increment: () => {
    set((state) => ({ number: state.number + 1 }))
  },
  decrement: () => {
    set((state) => ({ number: state.number - 1 }))
  },
  incrementBy: (quantity: number) => {
    set((state) => ({ number: state.number + quantity }))
  },
  reset: () => set({ number: 0 }),
}))

export default useHomeStore
