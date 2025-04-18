import { toast } from 'react-toastify'
import { create } from 'zustand'
import { useAppStore } from '../store'
import BookApi from './BookApi'
import { Book } from './BookTypes'

const { addLoading, removeLoading } = useAppStore.getState()

export interface BookStore {
  books: Book[]
  fetch: () => void
  delete: (id: string) => void
  clear: () => void
}

export const initialState = { books: [] }

export const useBookStore = create<BookStore>((set, get) => ({
  ...initialState,

  fetch: async () => {
    addLoading()

    try {
      const books = await BookApi.getBooks()
      set({ books })
    } catch (error) {
      toast.error(error.message)
    } finally {
      removeLoading()
    }
  },

  delete: async (id: string) => {
    addLoading()

    try {
      await BookApi.delete(id)
      get().fetch()
      toast.info('Livro removido com sucesso')
    } catch (error) {
      toast.error(error.message)
    } finally {
      removeLoading()
    }
  },

  clear: () => set(initialState),
}))
