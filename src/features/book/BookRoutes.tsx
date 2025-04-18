import BookPage from './BookPage'

export const bookRoutes = {
  path: '/book',
  children: [{ path: '', element: <BookPage /> }],
}
