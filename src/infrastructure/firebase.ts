import { connectAuthEmulator, getAuth } from 'firebase/auth'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore/lite'
import { connectStorageEmulator, getStorage } from 'firebase/storage'
import InitFirebase from '../init-firebase'

const firebase = InitFirebase()

export const auth = getAuth(firebase || undefined)
export const database = getFirestore(firebase || undefined)
export const storage = getStorage(firebase || undefined)

if (process.env.PLATAFORM === 'local') {
  connectAuthEmulator(auth, 'localhost')
  connectFirestoreEmulator(database, 'localhost', 8088)
  connectStorageEmulator(storage, 'localhost', 9199)
}
