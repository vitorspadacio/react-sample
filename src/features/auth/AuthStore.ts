import { router } from '@features/routes'
import { useAppStore } from '@features/store'
import processError from '@infrastructure/process-error'
import { User } from 'firebase/auth'
import { toast } from 'react-toastify'
import { create } from 'zustand'
import AuthApi from './AuthApi'
import { RegisterForm } from './RegisterPage/Register.schemas'

const { addLoading, removeLoading } = useAppStore.getState()

export interface AuthStore {
  user?: User
  logIn: (email: string, password: string) => void
  googleLogIn: () => void
  register: (form: RegisterForm) => void
  logOut: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: undefined,

  logIn: async (email, password) => {
    addLoading()

    try {
      const { user } = await AuthApi.signIn(email, password)
      set({ user })
      toast.success('Entrou com sucesso')
      router.navigate('/')
    } catch (error) {
      toast.error(processError[error.code] || error.code)
    } finally {
      removeLoading()
    }
  },

  googleLogIn: async () => {
    addLoading()

    try {
      const { user } = await AuthApi.googleSignIn()
      set({ user })
      toast.success('Entrou com sucesso')
      router.navigate('/')
    } catch (error) {
      toast.error(processError[error.code] || error.code)
    } finally {
      removeLoading()
    }
  },

  register: async (form) => {
    addLoading()
    const { displayName, email, password } = form

    try {
      await AuthApi.register(displayName, email, password)
      toast.success('Cadastro feito com sucesso!')
      router.navigate('/auth/login')
    } catch (error) {
      toast.error(processError[error.code] || error.code)
    } finally {
      removeLoading()
    }
  },

  logOut: async () => {
    addLoading()

    try {
      await AuthApi.signOut()
      set({ user: undefined })
      router.navigate('/')
    } catch (error) {
      toast.error(processError[error.code] || error.code)
    } finally {
      removeLoading()
    }
  },
}))
