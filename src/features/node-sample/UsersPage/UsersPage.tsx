import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PlanetsList from '../UsersList/UsersList'
import { selectErrorMessage } from '../NodeSampleSelectors'
import { actions } from '../NodeSampleState'

export default () => {
  const dispatch = useDispatch()
  const errorMessage = useSelector(selectErrorMessage)

  useEffect(() => {
    dispatch(actions.getUsers())
    return () => { dispatch(actions.setUsers([])) }
  }, [dispatch])

  return (
    <>
      <h1>NodeSample: Users</h1>
      <p>
        Usando API criada e hospedada do node-sample, o sample
        para desenvolvimento backend Node
      </p>
      { errorMessage
        ? (<span>Ocorreu um erro. Motivo: {errorMessage}</span>)
        : (<PlanetsList />)}
    </>
  )
}
