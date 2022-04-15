import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectErrorMessage } from '../NodeSampleSelectors'
import { actions } from '../NodeSampleState'
import UserDeleteModal from '../UserDeleteModal/UserDeleteModal'
import UsersList from '../UsersList'

export default () => {
  const dispatch = useDispatch()
  const errorMessage = useSelector(selectErrorMessage)
  const [idToDelete, setIdToDelete] = useState(0)

  useEffect(() => {
    dispatch(actions.getUsers())
    return () => { dispatch(actions.setUsers([])) }
  }, [dispatch])

  const handleDeleteClick = (id) => setIdToDelete(id)

  const handleConfirmClick = () => {
    dispatch(actions.deleteUser({ id: idToDelete }))
    setIdToDelete(0)
  }

  const handleCancelClick = () => setIdToDelete(0)

  return (
    <>
      <h1>NodeSample: Users</h1>
      <p>
        Usando API criada e hospedada do node-sample, o sample
        para desenvolvimento backend Node
      </p>
      { errorMessage
        ? (<span>Ocorreu um erro. Motivo: {errorMessage}</span>)
        : (<UsersList onDeleteClick={handleDeleteClick} />)}

      <UserDeleteModal
        idToDelete={idToDelete}
        onConfirmClick={handleConfirmClick}
        onCancelClick={handleCancelClick}
      />
    </>
  )
}
