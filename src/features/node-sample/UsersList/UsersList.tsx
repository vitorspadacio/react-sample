import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import editIcon from '../../../assets/images/edit.svg'
import trashIcon from '../../../assets/images/trash.svg'
import Loading from '../../../components/Loading'
import { selectIsLoading, selectUsers } from '../NodeSampleSelectors'
import { User } from '../NodeSampleTypes'
import { ActionButton, Actions, Container, Info, ListItem } from './UsersList.styles'

interface Props {
  onDeleteClick: Function
}

export default function ({ onDeleteClick }: Props) {
  const users = useSelector(selectUsers)
  const isLoading = useSelector(selectIsLoading)

  const renderDetails = (user: User) => (
    <ListItem key={user.id}>
      <Info>
        <small>ID</small> <span>{user.id}</span>
      </Info>
      <Info>
        <small>Nome</small> <span>{user.name}</span>
      </Info>
      <Info>
        <small>Idade</small> <span>{user.age} anos</span>
      </Info>
      <Actions>
        <Link to={`/node-sample/edit/${user.id}`}>
          <img src={editIcon} alt='edit' />
        </Link>
        <ActionButton onClick={() => onDeleteClick(user.id)} data-testid={`delete-${user.id}`}>
          <img src={trashIcon} alt='delete' />
        </ActionButton>
      </Actions>
    </ListItem>
  )

  return <Container id='users-list'>{users.map(renderDetails)}</Container>
}
