import { router } from '@features/routes'
import processError from '@infrastructure/process-error'
import { toast } from 'react-toastify'
import { create } from 'zustand'
import { useAppStore } from '../store'
import BookApi from './BookApi'
import { Book } from './BookTypes'

const { addLoading, removeLoading } = useAppStore.getState()

export interface BookStore {
  books: Book[]
  fetch: () => void
  add: (book: Book) => void
  edit: (book: Book) => void
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

  add: async (book: Book) => {
    addLoading()

    try {
      await BookApi.add(book)
      get().fetch()
      toast.success('Livro criado com sucesso')
      router.navigate('/book')
    } catch (error) {
      toast.error(processError[error.code] || error.message)
    } finally {
      removeLoading()
    }
  },

  edit: async (book: Book) => {
    addLoading()

    try {
      await BookApi.update(book)
      get().fetch()
      toast.info('Livro atualizado com sucesso')
      router.navigate('/book')
    } catch (error) {
      toast.error(processError[error.code] || error.message)
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
      toast.error(processError[error.code] || error.message)
    } finally {
      removeLoading()
    }
  },

  clear: () => set(initialState),
}))
