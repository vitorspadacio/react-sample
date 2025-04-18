import { database } from '@infrastructure/firebase'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore/lite'
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

  delete: async (id: string) => {
    const conferenciaRef = doc(database, 'books', id)
    await deleteDoc(conferenciaRef)
  },

  // add: ({
  //   id, titulo, data, logo, temCartela,
  // }: Conferencia) => {
  //   const conferenciaToAdd = {
  //     id,
  //     titulo,
  //     data,
  //     logo,
  //   }

  //   if (temCartela) (conferenciaToAdd as any).cartela = `/cartelas/${id}`

  //   return setDoc(doc(database, 'conferencias', id), conferenciaToAdd)
  // },

  // addToArmario: async (id: string) => {
  //   const db = getDatabase()
  //   const armarioRef = doc(db, 'armario', id)
  //   const ingredienteRef = doc(db, 'ingredientes', id)
  //   await setDoc(armarioRef, {
  //     quantidade: 0,
  //     ingrediente: ingredienteRef,
  //   })
  //   return id
  // },
  // updateQuantidade: async (id: string, quantidade: number) => {
  //   const db = getDatabase()
  //   const armarioRef = doc(db, 'armario', id)
  //   await updateDoc(armarioRef, { quantidade })
  // },
}
