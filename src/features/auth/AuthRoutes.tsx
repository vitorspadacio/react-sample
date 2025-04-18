import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'

export const authRoutes = {
  path: '/auth',
  children: [
    { path: 'login', element: <LoginPage /> },
    { path: 'register', element: <RegisterPage /> },
  ],
}
