// const provider = new GoogleAuthProvider()

import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { auth } from '../../infrastructure/firebase'

const provider = new GoogleAuthProvider()

export default {
  signIn: (email: string, password: string) => ({ email, password }),
  // signInWithEmailAndPassword(auth, email, password),

  googleSignIn: () => signInWithRedirect(auth, provider),

  signOut: () => ({}), // signOut(auth),

  register: async (displayName: string, email: string, password: string) => ({
    displayName, email, password,
  })
  // const { user } = await createUserWithEmailAndPassword(auth, email, password)
  // await updateProfile(user, { displayName })
  // return user
  ,
}
