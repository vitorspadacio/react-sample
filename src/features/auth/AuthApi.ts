// const provider = new GoogleAuthProvider()

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../../infrastructure/firebase'

const provider = new GoogleAuthProvider()

export default {
  signIn: (email: string, password: string) => signInWithEmailAndPassword(auth, email, password),

  googleSignIn: () => signInWithPopup(auth, provider),

  signOut: () => signOut(auth),

  register: async (displayName: string, email: string, password: string) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(user, { displayName })
    return user
  },
}
