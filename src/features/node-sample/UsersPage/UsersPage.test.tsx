import userEvent from '@testing-library/user-event'
import userBuilder from '../../../infrastructure/builders/user.builder'
import mockApi from '../../../infrastructure/test-helpers/test-mock-api'
import { render, screen, waitFor } from '../../../infrastructure/test-helpers/test-renderer'
import NodeSampleApi from '../NodeSampleApi'
import UsersPage from './UsersPage'

jest.mock('../NodeSampleApi')

const getUsersReturn = {
  data: [
    { ...userBuilder().create() },
    { ...userBuilder().create() },
    { ...userBuilder().create() },
  ],
}

describe('UsersPage', () => {
  beforeAll(() => jest.useFakeTimers())
  afterAll(() => jest.useRealTimers())

  beforeEach(() => {
    mockApi(NodeSampleApi.getUsers).mockResolvedValue(getUsersReturn)
  })

  test('deve exibir lista usuários', async () => {
    render(<UsersPage />)

    const [user1, user2, user3] = getUsersReturn.data
    await waitFor(() => expect(screen.queryByTestId('loading')).not.toBeInTheDocument())
    expect(screen.getByText(user1.id))
    expect(screen.getByText(user1.name))
    expect(screen.getByText(`${user1.age} anos`))

    expect(screen.getByText(user2.id))
    expect(screen.getByText(user2.name))
    expect(screen.getByText(`${user2.age} anos`))

    expect(screen.getByText(user3.id))
    expect(screen.getByText(user3.name))
    expect(screen.getByText(`${user3.age} anos`))
  })

  test('deve exibir permitir cancelar processo de exclusão pelo botão Cancelar', async () => {
    render(<UsersPage />)
    const modalTitle = 'Deseja deletar o usuário?'

    const [{ id }] = getUsersReturn.data
    await screen.findByText(id)
    userEvent.click(screen.getByTestId(`delete-${id}`))
    await screen.findByText(modalTitle)
    userEvent.click(screen.getByText('Cancelar'))

    await waitFor(() => expect(screen.queryByText(modalTitle)).not.toBeInTheDocument())
  })

  test('deve navegar para tela de criar usuário ao clicar em Criar', async () => {
    const { history } = render(<UsersPage />)

    userEvent.click(screen.getByText('Criar'))

    await waitFor(() => expect(history.location.pathname).toBe('/node-sample/create'))
  })

  test('deve navegar para tela de edição com id do usuário ao clicar no botão para editar', async () => {
    const { history } = render(<UsersPage />)

    const [{ id }] = getUsersReturn.data
    await screen.findByText(id)
    userEvent.click(screen.getAllByAltText('edit')[0])

    await waitFor(() => expect(history.location.pathname).toBe(`/node-sample/edit/${id}`))
  })
})
