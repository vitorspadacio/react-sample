import userEvent from '@testing-library/user-event'
import { render, screen } from '../../../infrastructure/test-helpers/test-renderer'
import { actions } from '../HomeState'
import HomePage from './HomePage'

describe('HomePage', () => {
  test('deve exibir o texto Olá Mundo!', () => {
    render(<HomePage />)
    expect(screen.getByText('Olá Mundo!'))
  })

  test('deve exibir contador zerado ao entrar na página', () => {
    render(<HomePage />)
    expect(screen.getByText('Contador: 0'))
  })

  test('deve incrementar o contador ao clicar no botão Incrementar', () => {
    render(<HomePage />)

    const button = screen.getByText('Incrementar')
    userEvent.click(button)

    expect(screen.getByText('Contador: 1'))
  })

  test('deve incrementar o contador ao clicar no botão Incrementar', () => {
    render(<HomePage />)

    const button = screen.getByText('Incrementar')
    userEvent.click(button)

    expect(screen.getByText('Contador: 1'))
  })

  test('deve decrementar o contador ao clicar no botão Decrementar', () => {
    const { store } = render(<HomePage />)
    store.dispatch(actions.increment())

    const button = screen.getByText('Decrementar')
    userEvent.click(button)

    expect(screen.getByText('Contador: 0'))
  })
})
