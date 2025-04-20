import { router } from '@features/routes'
import bookBuilder from '@infrastructure/builders/book.builder'
import { mockLoggedUser } from '@infrastructure/test-helpers/mock-login'
import { render, screen } from '@infrastructure/test-helpers/test-renderer'
import userEvent from '@testing-library/user-event'
import { deleteDoc, getDocs } from 'firebase/firestore/lite'
import BookPage from './BookPage'

const booksReturn = { docs: [bookBuilder().create()] }

describe('BookPage', () => {
  beforeEach(() => {
    ;(getDocs as jest.Mock).mockResolvedValue(booksReturn)
    ;(deleteDoc as jest.Mock).mockResolvedValue({})
  })

  test('deve exibir lista de livros', async () => {
    const expected = {
      id: booksReturn.docs[0].id,
      name: booksReturn.docs[0].data().name,
    }

    render(<BookPage />)

    expect(await screen.findByText(expected.id)).toBeVisible()
    expect(screen.getByText(expected.name)).toBeVisible()

    expect(screen.getByText('ID')).toBeVisible()
    expect(screen.getByText('Nome')).toBeVisible()
    expect(screen.getByText('Série')).toBeVisible()
    expect(screen.getByText('Volume')).toBeVisible()
    expect(screen.getByText('Link')).toBeVisible()
  })

  test('deve esconder botão de criar, deletar e edição sem login', async () => {
    const expected = { id: booksReturn.docs[0].id }

    render(<BookPage />)

    await screen.findByText(expected.id)
    expect(screen.queryByText('Ações')).not.toBeInTheDocument()
    expect(screen.queryByText('Criar')).not.toBeInTheDocument()
    expect(screen.queryByText('Editar')).not.toBeInTheDocument()
    expect(screen.queryByText('Deletar')).not.toBeInTheDocument()
  })

  test('deve exibir botão de criar, deletar e edição quando tiver login', async () => {
    const expected = { id: booksReturn.docs[0].id }
    mockLoggedUser()

    render(<BookPage />)

    await screen.findByText(expected.id)
    expect(screen.queryByText('Ações')).toBeInTheDocument()
    expect(screen.queryByText('Criar')).toBeInTheDocument()
    expect(screen.queryByText('Editar')).toBeInTheDocument()
    expect(screen.queryByText('Deletar')).toBeInTheDocument()
  })

  test('deve navegar para tela de edição ao clicar no botão', async () => {
    const expected = { id: booksReturn.docs[0].id }
    mockLoggedUser()
    jest.spyOn(router, 'navigate')

    render(<BookPage />)

    await screen.findByText(expected.id)
    await userEvent.click(screen.getByText('Editar'))

    expect(router.navigate).toHaveBeenCalledWith(`/book/edit/${expected.id}`)
  })

  test('deve exibir modal para deletar livro da lista', async () => {
    const expected = { id: booksReturn.docs[0].id }
    mockLoggedUser()

    render(<BookPage />)

    await screen.findByText(expected.id)
    await userEvent.click(screen.getByText('Deletar'))

    expect(screen.getByText('Deseja deletar o livro?')).toBeInTheDocument()
    expect(screen.getByText('Confirmar')).toBeInTheDocument()
    expect(screen.getByText('Cancelar')).toBeInTheDocument()
  })

  test('deve confirmar deleção do livro e exibir toast informativo', async () => {
    const expected = { id: booksReturn.docs[0].id }
    mockLoggedUser()

    render(<BookPage />)

    await screen.findByText(expected.id)
    await userEvent.click(screen.getByText('Deletar'))
    await userEvent.click(screen.getByText('Confirmar'))

    expect(await screen.findByText('Livro removido com sucesso')).toBeVisible()
  })

  test('deve cancelar modal de deletaçào e fechar', async () => {
    const expected = { id: booksReturn.docs[0].id }
    mockLoggedUser()

    render(<BookPage />)

    await screen.findByText(expected.id)
    await userEvent.click(screen.getByText('Deletar'))
    await userEvent.click(screen.getByText('Cancelar'))

    expect(screen.queryByText('Deseja deletar o livro?')).not.toBeInTheDocument()
  })

  test('deve navegar para tela de criar ao clicar no botão', async () => {
    const expected = { id: booksReturn.docs[0].id }
    mockLoggedUser()
    jest.spyOn(router, 'navigate')

    render(<BookPage />)

    await screen.findByText(expected.id)
    await userEvent.click(screen.getByText('Criar'))

    expect(router.navigate).toHaveBeenCalledWith('/book/add')
  })

  test('deve exibir mensagem de erro quando não conseguir deletar', async () => {
    ;(deleteDoc as jest.Mock).mockRejectedValue({ message: 'Error' })
    mockLoggedUser()

    render(<BookPage />)

    await userEvent.click(await screen.findByText('Deletar'))
    await userEvent.click(screen.getByText('Confirmar'))

    expect(await screen.findByText('Error')).toBeVisible()
  })

  test('deve navegar para menu da tela de livros ao clicar nele', async () => {
    render(<BookPage />)
    jest.spyOn(router, 'navigate')

    await userEvent.click(await screen.findByText('Livros'))

    expect(router.navigate).toHaveBeenCalledWith('/book')
  })
})
