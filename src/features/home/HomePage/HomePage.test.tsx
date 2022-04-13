import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '../../../infrastructure/test-helpers/test-renderer'
import { actions } from '../HomeState'
import HomePage from './HomePage'

describe('HomePage', () => {
  test('deve exibir o texto Olá Mundo!', () => {
    render(<HomePage />)
    expect(screen.getByText('Olá Mundo!')).toBeVisible()
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
})
