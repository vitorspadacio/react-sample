import { selectHasUser } from '@features/auth/AuthSelectors'
import { useAuthStore } from '@features/auth/AuthStore'
import { router } from '@features/routes'
import { useEffect, useState } from 'react'
import BookList from '../BookList'
import { useBookStore } from '../BookStore'
import DeleteModal from '../DeleteModal'
import { CreateButton } from './BookPage.styles'

export default function () {
  const hasUser = useAuthStore(selectHasUser)
  const { fetch, delete: deleteBook, clear } = useBookStore()
  const [idToDelete, setIdToDelete] = useState('')

  useEffect(() => {
    document.title = 'Livros • React Sample'
  }, [])

  useEffect(() => {
    fetch()
    return () => clear()
  }, [])

  const handleCreateClick = () => router.navigate('/book/add')

  const handleDeleteClick = (id: string) => setIdToDelete(id)

  const handleConfirmDeleteClick = () => {
    deleteBook(idToDelete)
    setIdToDelete('')
  }

  const handleCancelClick = () => setIdToDelete('')

  return (
    <>
      <h1>Lista de livros</h1>
      {hasUser && <CreateButton onClick={handleCreateClick}>Criar</CreateButton>}
      <BookList hasUser={hasUser} onDeleteClick={handleDeleteClick} />
      <DeleteModal
        idToDelete={idToDelete}
        onConfirmClick={handleConfirmDeleteClick}
        onCancelClick={handleCancelClick}
      />
    </>
  )
}
