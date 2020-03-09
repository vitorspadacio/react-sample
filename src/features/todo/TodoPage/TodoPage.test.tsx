import React from 'react'
import { render } from '../../test-utils'

import TodoPage from './TodoPage'

describe('TodoPage', () => {
  test('deve exibir lista inicial de tarefas', () => {
    const page = render(<TodoPage />)
    expect(page.getByText('Lavar louças'))
    expect(page.getByText('Arrumar a sala'))
    expect(page.getByText('Limpar banheiro'))
  })
})
