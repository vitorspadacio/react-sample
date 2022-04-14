import { useDispatch, useSelector } from 'react-redux'
import { Link, To } from 'react-router-dom'
import Loading from '../../../components/Loading'
import { selectIsLoading, selectUsers } from '../NodeSampleSelectors'
import { User } from '../NodeSampleTypes'
import {
  ActionButton,
  Actions, Container, Info, ListItem,
} from './UsersList.styles'
import editIcon from '../../../assets/images/edit.svg'
import trashIcon from '../../../assets/images/trash.svg'
import { actions } from '../NodeSampleState'

export default () => {
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)
  const isLoading = useSelector(selectIsLoading)

  // TODO: Adicionar modal de confirmação
  const handleDeleteClick = (id) => dispatch(actions.deleteUser({ id }))

  const renderDetails = (user: User) => (
    <ListItem key={user.id}>
      <Info><small>ID</small> <span>{user.id}</span></Info>
      <Info><small>Nome</small> <span>{user.name}</span></Info>
      <Info><small>Idade</small> <span>{user.age} anos</span></Info>
      <Actions>
        <Link to='/node-sample/edit/:id'><img src={editIcon} alt='edit' /></Link>
        <ActionButton onClick={() => handleDeleteClick(user.id)}>
          <img src={trashIcon} alt='delete' />
        </ActionButton>
      </Actions>
    </ListItem>
  )

  return (
    <Container id='users-list'>
      {isLoading ? <Loading /> : ''}
      {users.map(renderDetails)}
    </Container>
  )
}
