import React from 'react'
import { render, fireEvent } from '../../test-utils'

import HomePage from './HomePage'

describe('HomePage', () => {
  test('deve exibir o texto Hello World!', () => {
    const page = render(<HomePage />)
    expect(page.getByText('Hello World!'))
  })

  test('deve exibir texto vindo do redux', () => {
    const page = render(<HomePage />)
    expect(page.getByText('Texto no redux'))
  })

  test('deve alterar texto vindo do redux quando clicar no botão', () => {
    const page = render(<HomePage />)
    fireEvent.click(page.getByText('Muda texto'))
    expect(page.getByText('Não é mais o texto inicial no redux'))
  })
})
