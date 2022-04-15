import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import userBuilder from '../../../infrastructure/builders/user.builder'
import mockApi from '../../../infrastructure/test-helpers/test-mock-api'
import { createFetchPromise, responseTypes } from '../../../infrastructure/test-helpers/test-mock-fetch'
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

  test('deve exibir loading durante requisição', async () => {
    render(<UsersPage />)

    const [user] = getUsersReturn.data
    expect(await screen.findByTestId('loading'))
    expect(await screen.findByText(user.name))
  })

  test('deve exibir permitir cancelar processo de exclusão pelo botão Cancelar', async () => {
    render(<UsersPage />)
    const modalTitle = 'Deseja deletar o usuário?'

    const [user] = getUsersReturn.data
    await screen.findByText(user.id)
    userEvent.click(screen.getByTestId(`delete-${user.id}`))
    await screen.findByText(modalTitle)
    userEvent.click(screen.getByText('Cancelar'))

    await waitFor(() => expect(screen.queryByText(modalTitle)).not.toBeInTheDocument())
    jest.useRealTimers()
  })
})
