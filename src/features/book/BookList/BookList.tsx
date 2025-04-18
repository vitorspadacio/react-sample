import { useBookStore } from '../BookStore'
import { Book } from '../BookTypes'
import { Actions, Button, Cell, Container, DeleteButton, Header, Table } from './BookList.styles'

interface Props {
  onDeleteClick: Function
}

export default function ({ onDeleteClick }: Props) {
  const { books } = useBookStore()

  const renderDetails = (book: Book) => (
    <>
      <Cell>{book.id}</Cell>
      <Cell>{book.name}</Cell>
      <Cell>{book.series}</Cell>
      <Cell>{book.edition}</Cell>
      <Cell className='actions'>
        <Actions>
          <Button>Editar</Button>
          <DeleteButton onClick={() => onDeleteClick(book.id)}>Deletar</DeleteButton>
        </Actions>
      </Cell>
    </>
  )

  return (
    <Container>
      <Table>
        <Header>ID</Header>
        <Header>Nome</Header>
        <Header>Série</Header>
        <Header>Volume</Header>
        <Header>Ações</Header>

        {books.map(renderDetails)}
      </Table>
    </Container>
  )
}
