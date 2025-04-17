import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
import { getStorage } from 'firebase/storage'
import InitFirebase from '../init-firebase'

const firebase = InitFirebase()
export const auth = getAuth(firebase)
export const database = getFirestore(firebase)
export const storage = getStorage(firebase)

// if (import.meta.env.DEV) {
//   console.info('Conectando aos emuladores')
//   connectAuthEmulator(auth, 'http://localhost:9099')
//   connectFirestoreEmulator(database, 'localhost', 8088)
//   connectStorageEmulator(storage, 'localhost', 9199)
// }
