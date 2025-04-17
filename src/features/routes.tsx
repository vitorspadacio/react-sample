import { createBrowserRouter } from 'react-router'
import LoginPage from './auth/LoginPage'
import RegisterPage from './auth/RegisterPage'
import HomePage from './home/HomePage'
import ClassesPage from './rpg/ClassesPage'
import TodoPage from './todo/TodoPage'

export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/todo', element: <TodoPage /> },
  { path: '/rpg', element: <ClassesPage /> },
  {
    path: '/auth',
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
    ],
  },
  { path: '*', element: <HomePage /> },
])
