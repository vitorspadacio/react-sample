import userEvent from '@testing-library/user-event'
import userBuilder from '../../../infrastructure/builders/user.builder'
import mockApi from '../../../infrastructure/test-helpers/test-mock-api'
import { render, screen } from '../../../infrastructure/test-helpers/test-renderer'
import NodeSampleApi from '../NodeSampleApi'
import UserDetailPage from './UserDetailPage'

jest.mock('../NodeSampleApi')

const getUserById = { data: { ...userBuilder().create() } }

describe('UserDetailPage', () => {
  beforeEach(() => {
    mockApi(NodeSampleApi.getUserById).mockResolvedValue(getUserById)
  })

  describe('edição', () => {
    test('deve carregar usuário ao entrar pela edição', async () => {
      const { id, name, age } = getUserById.data
      render(<UserDetailPage />, {
        path: '/node-sample/edit/:id',
        location: `/node-sample/edit/${id}`,
      })

      const idInput = await screen.findByDisplayValue(id)
      expect(idInput).toBeVisible()
      expect(idInput).toBeDisabled()
      expect(screen.getByDisplayValue(name)).toBeVisible()
      expect(screen.getByDisplayValue(age)).toBeVisible()
      expect(screen.getByText('Salvar')).toBeEnabled()
    })

    test('deve exibir errors de validação nos campos da edição', async () => {
      const { id, name, age } = getUserById.data
      render(<UserDetailPage />, {
        path: '/node-sample/edit/:id',
        location: `/node-sample/edit/${id}`,
      })

      await screen.findByDisplayValue(id)
      userEvent.type(screen.getByDisplayValue(name), '')
      userEvent.type(screen.getByDisplayValue(age), '')

      expect(await screen.findByText('Campo obrigatório')).toBeVisible()
      expect(await screen.findByText('Campo obrigatório')).toBeVisible()
    })
  })
})
