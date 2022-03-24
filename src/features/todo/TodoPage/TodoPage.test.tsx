import { fireEvent, waitFor } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '../../../infrastructure/test-helpers/test-renderer'
import TodoPage from './TodoPage'

describe('TodoPage', () => {
  test('deve exibir lista inicial de tarefas', () => {
    render(<TodoPage />)

    expect(screen.getByText('Lavar louças'))
    expect(screen.getByText('Arrumar a sala'))
    expect(screen.getByText('Limpar banheiro'))

    expect(screen.getByTitle('Lavar louças está completa?')).toBeChecked()
    expect(screen.getByTitle('Arrumar a sala está completa?')).not.toBeChecked()
    expect(screen.getByTitle('Limpar banheiro está completa?')).not.toBeChecked()
  })

  test('deve adicionar tarefa na lista de tarefas após clicar no botão +', async () => {
    render(<TodoPage />)

    await userEvent.type(screen.getByTitle('descrição'), 'Teste A')
    userEvent.click(screen.getByText('+'))

    await waitFor(() => expect(screen.getByText('Teste A')))
  })

  test('deve adicionar tarefa na lista de tarefas após apertar enter', async () => {
    render(<TodoPage />)

    await userEvent.type(screen.getByTitle('descrição'), 'Teste A')
    fireEvent.submit(screen.getByTestId('todo-form'))

    await waitFor(() => expect(screen.getByText('Teste A')))
  })

  test('não deve adicionar tarefa na lista de tarefas com campo vazio', async () => {
    render(<TodoPage />)

    await userEvent.click(screen.getByTitle('descrição'))
    userEvent.click(screen.getByText('+'))

    await waitFor(() => expect(screen.getByText('Obrigatório preencher para adicionar tarefa')))
  })

  test('deve alterar estado da tarefa para completa ao clicar em uma tarefa incompleta', async () => {
    render(<TodoPage />)

    const task = screen.getByTitle('Arrumar a sala está completa?')
    await userEvent.click(task)

    await waitFor(() => expect(task).toBeChecked())
  })

  test('deve alterar estado da tarefa para incompleta ao clicar em uma tarefa completa', async () => {
    render(<TodoPage />)

    const task = screen.getByTitle('Lavar louças está completa?')
    await userEvent.click(task)

    await waitFor(() => expect(task).not.toBeChecked())
  })
})
