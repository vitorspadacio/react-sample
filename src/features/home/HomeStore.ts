import { create } from 'zustand'

export interface HomeStore {
  number: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

export const useHomeStore = create<HomeStore>((set) => ({
  number: 0,

  increment: () => set(({ number }) => ({ number: number + 1 })),
  decrement: () => set(({ number }) => ({ number: number - 1 })),
  reset: () => set(() => ({ number: 0 })),
}))
