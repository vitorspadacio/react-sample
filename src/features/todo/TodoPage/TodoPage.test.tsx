import React from 'react'
import { wait } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { render } from '../../test-utils'

import TodoPage from './TodoPage'

describe('TodoPage', () => {
  test('deve exibir lista inicial de tarefas', () => {
    const page = render(<TodoPage />)
    expect(page.getByText('Lavar louças'))
    expect(page.getByText('Arrumar a sala'))
    expect(page.getByText('Limpar banheiro'))
  })

  test('deve adicionar tarefa na lista de tarefas', async () => {
    const { getByTitle, getByText } = render(<TodoPage />)
    await userEvent.type(getByTitle('descrição'), 'Teste A')
    userEvent.click(getByText('Criar tarefa'))
    await wait(() => expect(getByText('Teste A')))
  })

  test('deve ter a primeira tarefa marcada como completa e a segunda não', async () => {
    const { getByTitle } = render(<TodoPage />)
    const checkbox1 = getByTitle('Lavar louças está completa?')
    const checkbox2 = getByTitle('Arrumar a sala está completa?')
    await wait(() => expect(checkbox1).toBeChecked())
    await wait(() => expect(checkbox2).not.toBeChecked())
  })

  test('deve alterar tarefa para completo', async () => {
    const { getByTitle } = render(<TodoPage />)
    const checkbox = getByTitle('Lavar louças está completa?')
    userEvent.click(checkbox)
    await wait(() => expect(checkbox).not.toBeChecked())
  })
})
