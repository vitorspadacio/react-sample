import userEvent from '@testing-library/user-event'
import { render, screen } from '../../../infrastructure/test-helpers/test-renderer'
import HomePage from './HomePage'
import useHomeStore from '../useHomeStore'

describe('HomePage', () => {
  const initialState = useHomeStore.getState()

  afterEach(() => {
    useHomeStore.setState(initialState, true)
  })

  test('deve exibir o texto Olá Mundo!', () => {
    render(<HomePage />)
    expect(screen.getAllByText('Olá Mundo!')).toHaveLength(3)
    expect(screen.getAllByText('Olá Mundo!')[0]).toBeVisible()
    expect(screen.getAllByText('Olá Mundo!')[1]).toBeVisible()
    expect(screen.getAllByText('Olá Mundo!')[2]).toBeVisible()
  })

  test('deve exibir contador zerado ao entrar na página', () => {
    render(<HomePage />)
    expect(screen.getByText('Contador: 0')).toBeVisible()
  })

  test('deve incrementar o contador ao clicar no botão Incrementar', async () => {
    render(<HomePage />)

    const button = screen.getByText('Incrementar')
    userEvent.click(button)

    expect(await screen.findByText('Contador: 1')).toBeVisible()
  })

  test('deve incrementar o contador ao clicar no botão Incrementar', async () => {
    render(<HomePage />)

    const button = screen.getByText('Incrementar')
    userEvent.click(button)

    expect(await screen.findByText('Contador: 1')).toBeVisible()
  })

  test('deve decrementar o contador ao clicar no botão Decrementar', async () => {
    render(<HomePage />)

    userEvent.click(screen.getByText('Decrementar'))

    expect(await screen.findByText('Contador: -1')).toBeVisible()
  })

  test('deve limpar o contador ao clicar no botão Limpar', async () => {
    render(<HomePage />)

    userEvent.click(screen.getByText('Decrementar'))
    await screen.findByText('Contador: -1')
    userEvent.click(screen.getByText('Limpar'))

    expect(await screen.findByText('Contador: 0')).toBeVisible()
  })
})
