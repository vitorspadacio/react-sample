import { useAuthStore } from '@features/auth/AuthStore'
import { User } from 'firebase/auth'

export const mockLoggedUser = () =>
  useAuthStore.setState({
    user: {
      emailVerified: true,
      isAnonymous: false,
      metadata: {},
      refreshToken: '',
      tenantId: '',
      providerData: [
        {
          displayName: 'Foo',
          email: '',
          phoneNumber: '',
          photoURL: '',
          providerId: '',
          uid: '',
        },
      ],
    } as User,
  })
