import { createBrowserRouter } from 'react-router'
import { authRoutes } from './auth/AuthRoutes'
import { bookRoutes } from './book/BookRoutes'
import HomePage from './home/HomePage'
import { homeRoutes } from './home/HomeRoutes'
import { rpgRoutes } from './rpg/RpgRoutes'
import { todoRoutes } from './todo/TodoRoutes'

export const router = createBrowserRouter([
  authRoutes,
  bookRoutes,
  homeRoutes,
  rpgRoutes,
  todoRoutes,
  { path: '*', element: <HomePage /> },
])
