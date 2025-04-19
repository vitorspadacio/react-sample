import BookPage from './BookPage'
import DetailPage from './DetailPage/DetailPage'

export const bookRoutes = {
  path: '/book',
  children: [
    { path: '', element: <BookPage /> },
    { path: 'add', element: <DetailPage /> },
    { path: 'edit/:id', element: <DetailPage /> },
  ],
}
