import userEvent from '@testing-library/user-event'
import React from 'react'
import { render } from '../../../infrastructure/test-helpers/test-renderer'
import { actions } from '../HomeState'
import HomePage from './HomePage'

describe('HomePage', () => {
  test('deve exibir o texto Olá Mundo!', () => {
    const page = render(<HomePage />)
    expect(page.getByText('Olá Mundo!'))
  })

  test('deve exibir contador zerado ao entrar na página', () => {
    const page = render(<HomePage />)
    expect(page.getByText('Contador: 0'))
  })

  test('deve incrementar o contador ao clicar no botão Incrementar', () => {
    const page = render(<HomePage />)

    const button = page.getByText('Incrementar')
    userEvent.click(button)

    expect(page.getByText('Contador: 1'))
  })

  test('deve incrementar o contador ao clicar no botão Incrementar', () => {
    const page = render(<HomePage />)

    const button = page.getByText('Incrementar')
    userEvent.click(button)

    expect(page.getByText('Contador: 1'))
  })

  test('deve decrementar o contador ao clicar no botão Decrementar', () => {
    const page = render(<HomePage />)
    page.store.dispatch(actions.increment())

    const button = page.getByText('Decrementar')
    userEvent.click(button)

    expect(page.getByText('Contador: 0'))
  })
})
