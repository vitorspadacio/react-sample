import userEvent from '@testing-library/user-event'
import userBuilder from '../../../infrastructure/builders/user.builder'
import mockApi from '../../../infrastructure/test-helpers/mock-api'
import {
  fireEvent, render, screen, waitFor,
} from '../../../infrastructure/test-helpers/test-renderer'
import NodeSampleApi from '../NodeSampleApi'
import UserDetailPage from './UserDetailPage'

jest.mock('../NodeSampleApi')

const getUserById = { data: { ...userBuilder().create() } }

describe('UserDetailPage', () => {
  beforeEach(() => {
    mockApi(NodeSampleApi.getUserById).mockResolvedValue(getUserById)
    mockApi(NodeSampleApi.createUser).mockResolvedValue({})
  })

  describe('edição', () => {
    const { id, name, age } = getUserById.data
    const path = {
      path: '/node-sample/edit/:id',
      location: `/node-sample/edit/${id}`,
    }

    test.skip('deve carregar usuário ao entrar pela edição', async () => {
      render(<UserDetailPage />, { ...path })

      await waitFor(() => expect(screen.queryByTestId('loading')).not.toBeInTheDocument())
      const idInput = await screen.findByDisplayValue(id)
      expect(idInput).toBeVisible()
      expect(idInput).toBeDisabled()
      expect(screen.getByText('Edição do usuário')).toBeVisible()
      expect(screen.getByDisplayValue(name)).toBeVisible()
      expect(screen.getByDisplayValue(age)).toBeVisible()
      expect(screen.getByText('Salvar')).toBeEnabled()
    })

    test('deve exibir errors de validação nos campos da edição', async () => {
      render(<UserDetailPage />, { ...path })

      await screen.findByDisplayValue(id)
      userEvent.clear(screen.getByDisplayValue(name))
      userEvent.clear(screen.getByDisplayValue(age))

      expect(await screen.findByText('Campo obrigatório')).toBeVisible()
      expect(screen.getByText('Campo obrigatório')).toBeVisible()
      expect(screen.getByText('Salvar')).toBeDisabled()
    })

    test('deve voltar quando clicar em botão Voltar', async () => {
      const { history } = render(<UserDetailPage />, { ...path })
      jest.spyOn(history, 'push')

      await screen.findByDisplayValue(id)
      userEvent.click(screen.getByText('Voltar'))

      await waitFor(() => expect(history.push).toHaveBeenCalledWith({
        hash: '',
        pathname: '/node-sample',
        search: '',
      }, undefined, {}))
    })
  })

  describe('criar', () => {
    const { name, age } = getUserById.data
    const path = {
      path: '/node-sample/create',
      location: '/node-sample/create',
    }

    test('deve carregar tela de criação quando entrar', async () => {
      render(<UserDetailPage />, { ...path })
      expect(await screen.findByText('Criação do usuário')).toBeVisible()
      expect(screen.getByText('Criar')).toBeDisabled()
    })

    test('deve enviar dados para criação corretamente', async () => {
      const { history } = render(<UserDetailPage />, { ...path })
      jest.spyOn(history, 'push')

      await userEvent.type(screen.getByAltText('nome'), name)
      await userEvent.type(screen.getByAltText('idade'), age.toString())
      fireEvent.blur(screen.getByAltText('idade'))

      await waitFor(() => expect(screen.getByText('Criar')).toBeEnabled())
      userEvent.click(screen.getByText('Criar'))

      await waitFor(() => expect(NodeSampleApi.createUser).toHaveBeenCalled())
      await waitFor(() => expect(history.push).toHaveBeenCalledWith({
        hash: '',
        pathname: '/node-sample',
        search: '',
      }, undefined, {}))
    })

    test('deve exibir errors de validação nos campos da edição', async () => {
      render(<UserDetailPage />, { ...path })

      userEvent.clear(screen.getByAltText('nome'))
      userEvent.clear(screen.getByAltText('idade'))

      expect(await screen.findByText('Campo obrigatório')).toBeVisible()
      expect(screen.getByText('Campo obrigatório')).toBeVisible()
    })

    test('deve voltar quando clicar em botão Voltar', async () => {
      const { history } = render(<UserDetailPage />, { ...path })
      jest.spyOn(history, 'push')

      userEvent.click(screen.getByText('Voltar'))

      await waitFor(() => expect(history.push).toHaveBeenCalledWith({
        hash: '',
        pathname: '/node-sample',
        search: '',
      }, undefined, {}))
    })
  })
})
