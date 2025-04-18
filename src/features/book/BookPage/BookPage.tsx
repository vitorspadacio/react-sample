import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import BookList from '../BookList'
import { useBookStore } from '../BookStore'
import DeleteModal from '../DeleteModal'
import { CreateButton } from './BookPage.styles'

export default function () {
  const navigate = useNavigate()
  const { fetch, delete: deleteBook, clear } = useBookStore()
  const [idToDelete, setIdToDelete] = useState('')

  useEffect(() => {
    document.title = 'Livros • React Sample'
  }, [])

  useEffect(() => {
    fetch()
    return () => clear()
  }, [])

  const handleCreateClick = () => navigate('/book/create')

  const handleDeleteClick = (id: string) => setIdToDelete(id)

  const handleConfirmDeleteClick = () => {
    deleteBook(idToDelete)
    setIdToDelete('')
  }

  const handleCancelClick = () => setIdToDelete('')

  return (
    <>
      <h1>Livros</h1>
      <CreateButton onClick={handleCreateClick}>Criar</CreateButton>
      <BookList onDeleteClick={handleDeleteClick} />
      <DeleteModal
        idToDelete={idToDelete}
        onConfirmClick={handleConfirmDeleteClick}
        onCancelClick={handleCancelClick}
      />
    </>
  )
}
