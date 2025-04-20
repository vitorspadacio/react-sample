import { router } from '@features/routes'
import { useBookStore } from '../BookStore'
import { Book } from '../BookTypes'
import {
  Actions,
  Button,
  Cell,
  Container,
  DeleteButton,
  Header,
  Row,
  Table,
} from './BookList.styles'

interface Props {
  hasUser: boolean
  onDeleteClick: Function
}

export default function ({ hasUser, onDeleteClick }: Props) {
  const { books } = useBookStore()

  const handleEditClick = (id: string) => router.navigate(`/book/edit/${id}`)

  const renderDetails = (book: Book) => (
    <Row key={book.id}>
      <Cell>{book.id}</Cell>
      <Cell>{book.name}</Cell>
      <Cell>{book.series}</Cell>
      <Cell>{book.edition}</Cell>
      <Cell>{book.link}</Cell>
      {hasUser && (
        <Cell className='actions'>
          <Actions>
            <Button onClick={() => handleEditClick(book.id)}>Editar</Button>
            <DeleteButton onClick={() => onDeleteClick(book.id)}>Deletar</DeleteButton>
          </Actions>
        </Cell>
      )}
    </Row>
  )

  return (
    <Container>
      <Table hasuser={hasUser.toString()}>
        <Header>ID</Header>
        <Header>Nome</Header>
        <Header>Série</Header>
        <Header>Volume</Header>
        <Header>Link</Header>
        {hasUser && <Header>Ações</Header>}

        {books.map(renderDetails)}
      </Table>
    </Container>
  )
}
