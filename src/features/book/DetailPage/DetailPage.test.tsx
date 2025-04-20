import { router } from '@features/routes'
import bookBuilder from '@infrastructure/builders/book.builder'
import { render, screen } from '@infrastructure/test-helpers/test-renderer'
import userEvent from '@testing-library/user-event'
import { addDoc, getDoc, setDoc } from 'firebase/firestore/lite'
import { useLocation } from 'react-router'
import DetailPage from './DetailPage'

const bookReturn = bookBuilder().create()

describe('DetailPage', () => {
  beforeAll(() => {
    ;(addDoc as jest.Mock).mockResolvedValue({})
    ;(getDoc as jest.Mock).mockResolvedValue(bookReturn)
    ;(setDoc as jest.Mock).mockResolvedValue({})
    ;(useLocation as jest.Mock).mockReturnValue({ pathname: '/book/add' })
  })

  test('deve exibir tela de cadastro com nomes corretos', async () => {
    render(<DetailPage />)

    expect(screen.getByText('Criar livro')).toBeVisible()
    expect(screen.getByText('ID')).toBeVisible()
    expect(screen.getByTitle('id')).toBeDisabled()
    expect(screen.getByText('Nome')).toBeVisible()
    expect(screen.getByText('Link')).toBeVisible()
    expect(screen.getByText('Série')).toBeVisible()
    expect(screen.getByText('Volume')).toBeVisible()
  })

  test('deve navegar para tela anterior ao clicar em voltar', async () => {
    render(<DetailPage />)
    jest.spyOn(router, 'navigate')

    await userEvent.click(screen.getByText('Voltar'))

    expect(router.navigate).toHaveBeenCalledWith(-1)
  })

  test('deve exibir mensagens de erro ao tentar cadastrar com campos vazios', async () => {
    render(<DetailPage />)

    userEvent.click(screen.getByText('Criar'))

    expect(await screen.findByText('Nome é obrigatório')).toBeVisible()
    expect(screen.getByText('Link é obrigatório')).toBeVisible()
    expect(screen.getByText('Série é obrigatória')).toBeVisible()
    expect(screen.getByText('Volume é obrigatório')).toBeVisible()
  })

  test('deve cadastrar livro quando tudo for preenchido corretamente', async () => {
    render(<DetailPage />)
    jest.spyOn(router, 'navigate')

    await userEvent.type(screen.getByTitle('name'), bookReturn.data().name)
    await userEvent.type(screen.getByTitle('link'), bookReturn.data().link)
    await userEvent.type(screen.getByTitle('series'), bookReturn.data().series)
    await userEvent.type(screen.getByTitle('edition'), bookReturn.data().edition.toString())
    await userEvent.click(screen.getByText('Criar'))

    expect(await screen.findByText('Livro criado com sucesso')).toBeVisible()
    expect(router.navigate).toHaveBeenCalledWith('/book')
  })

  test('deve exibir dados de edição quando receber rota diferente', async () => {
    ;(useLocation as jest.Mock).mockReturnValueOnce({ pathname: '/book/edit/' })

    render(<DetailPage />)

    expect(screen.getByText('Editar livro')).toBeVisible()
    expect(screen.getByText('Salvar')).toBeVisible()
    expect(await screen.findByDisplayValue(bookReturn.id)).toBeDisabled()
    expect(screen.getByDisplayValue(bookReturn.data().edition)).toBeVisible()
    expect(screen.getByDisplayValue(bookReturn.data().name)).toBeVisible()
    expect(screen.getByDisplayValue(bookReturn.data().link)).toBeVisible()
    expect(screen.getByDisplayValue(bookReturn.data().series)).toBeVisible()
  })

  test('deve editar corretamente com todos itens atualizados', async () => {
    ;(useLocation as jest.Mock).mockReturnValueOnce({ pathname: '/book/edit/' })
    jest.spyOn(router, 'navigate')
    const expected = {
      id: bookReturn.id,
      ...bookReturn.data(),
      name: bookReturn.data().name + '+Bar',
    }

    render(<DetailPage />)

    await userEvent.type(await screen.findByDisplayValue(bookReturn.data().name), '+Bar')
    await userEvent.click(screen.getByText('Salvar'))

    expect(await screen.findByText('Livro atualizado com sucesso')).toBeVisible()
    expect(router.navigate).toHaveBeenCalledWith('/book')
    expect(setDoc).toHaveBeenCalledWith(undefined, expected)
  })

  test('deve impedir edição quando algo estiver inválido', async () => {
    ;(useLocation as jest.Mock).mockReturnValueOnce({ pathname: '/book/edit/' })

    render(<DetailPage />)

    await userEvent.clear(await screen.findByDisplayValue(bookReturn.data().name))
    await userEvent.clear(await screen.findByDisplayValue(bookReturn.data().link))
    await userEvent.click(screen.getByText('Salvar'))

    expect(await screen.findByText('Link é obrigatório')).toBeVisible()
    expect(screen.getByText('Nome é obrigatório')).toBeVisible()
  })

  test('deve exibir mensagem de erro quando não conseguir editar', async () => {
    ;(useLocation as jest.Mock).mockReturnValueOnce({ pathname: '/book/edit/' })
    ;(setDoc as jest.Mock).mockRejectedValue({ message: 'Error' })

    render(<DetailPage />)

    await userEvent.click(screen.getByText('Salvar'))

    expect(await screen.findByText('Error')).toBeVisible()
  })

  test('deve exibir mensagem de erro quando não conseguir criar', async () => {
    ;(addDoc as jest.Mock).mockRejectedValue({ message: 'Error' })

    render(<DetailPage />)

    await userEvent.type(screen.getByTitle('name'), bookReturn.data().name)
    await userEvent.type(screen.getByTitle('link'), bookReturn.data().link)
    await userEvent.type(screen.getByTitle('series'), bookReturn.data().series)
    await userEvent.type(screen.getByTitle('edition'), bookReturn.data().edition.toString())
    await userEvent.click(screen.getByText('Criar'))

    expect(await screen.findByText('Error')).toBeVisible()
  })
})
