import { useSelector } from 'react-redux'
import Loading from '../../../components/Loading'
import { selectIsLoading, selectUsers } from '../NodeSampleSelectors'
import { User } from '../NodeSampleTypes'
import { Container, Info, ListItem } from './UsersList.styles'

export default () => {
  const users = useSelector(selectUsers)
  const isLoading = useSelector(selectIsLoading)

  const renderDetails = (user: User) => (
    <ListItem key={user.id}>
      <Info><small>ID</small> <span>{user.id}</span></Info>
      <Info><small>Nome</small> <span>{user.name}</span></Info>
      <Info><small>Idade</small> <span>{user.age} anos</span></Info>
    </ListItem>
  )

  return (
    <Container id='users-list'>
      {isLoading ? <Loading /> : ''}
      {users.map(renderDetails)}
    </Container>
  )
}
