import { database } from '@infrastructure/firebase'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from 'firebase/firestore/lite'
import { Book } from './BookTypes'

export default {
  getBooks: async (): Promise<Book[]> => {
    const snapshot = await getDocs(collection(database, 'books'))
    return snapshot.docs.map(
      (book) =>
        ({
          id: book.id,
          edition: book.data().edition,
          link: book.data().link,
          name: book.data().name,
          series: book.data().series,
        }) as Book,
    )
  },

  getBookById: async (id: string): Promise<Book> => {
    const book = await getDoc(doc(database, 'books', id))
    return {
      id: book.id,
      edition: book.data().edition,
      link: book.data().link,
      name: book.data().name,
      series: book.data().series,
    } as Book
  },

  add: (book: Book) => {
    return addDoc(collection(database, 'books'), book)
  },

  update: (book: Book) => {
    return setDoc(doc(database, 'books', book.id), book)
  },

  delete: async (id: string) => {
    const conferenciaRef = doc(database, 'books', id)
    await deleteDoc(conferenciaRef)
  },
}
