import { fireEvent, render, screen, waitFor } from '@infrastructure/test-helpers/test-renderer'
import userEvent from '@testing-library/user-event'
import { initialState, useTodoStore } from '../TodoStore'
import TodoPage from './TodoPage'

describe('TodoPage', () => {
  beforeEach(() => useTodoStore.setState(initialState))

  test('deve exibir lista inicial de tarefas', () => {
    render(<TodoPage />)

    expect(screen.getByText('Lavar louças')).toBeVisible()
    expect(screen.getByText('Arrumar a sala')).toBeVisible()
    expect(screen.getByText('Limpar banheiro')).toBeVisible()

    expect(screen.getByTitle('Lavar louças está completa?')).toBeChecked()
    expect(screen.getByTitle('Arrumar a sala está completa?')).not.toBeChecked()
    expect(screen.getByTitle('Limpar banheiro está completa?')).not.toBeChecked()
  })

  test('deve adicionar tarefa na lista de tarefas após clicar no botão +', async () => {
    render(<TodoPage />)

    userEvent.type(screen.getByTitle('descrição'), 'Teste A')
    await screen.findByDisplayValue('Teste A')
    userEvent.click(screen.getByText('+'))

    expect(await screen.findByText('Teste A')).toBeVisible()
  })

  test('deve adicionar tarefa na lista de tarefas após apertar enter', async () => {
    render(<TodoPage />)

    userEvent.type(screen.getByTitle('descrição'), 'Teste A')
    await screen.findByDisplayValue('Teste A')
    fireEvent.submit(screen.getByTestId('todo-form'))

    expect(await screen.findByText('Teste A')).toBeVisible()
  })

  test('não deve adicionar tarefa na lista de tarefas com campo vazio', async () => {
    render(<TodoPage />)

    userEvent.click(screen.getByTitle('descrição'))
    userEvent.click(screen.getByText('+'))

    expect(await screen.findByText('Obrigatório preencher para adicionar tarefa')).toBeVisible()
  })

  test('deve alterar estado da tarefa para completa ao clicar em uma tarefa incompleta', async () => {
    render(<TodoPage />)

    const task = screen.getByTitle('Arrumar a sala está completa?')
    userEvent.click(task)

    await waitFor(() => expect(task).toBeChecked())
  })

  test('deve alterar estado da tarefa para incompleta ao clicar em uma tarefa completa', async () => {
    render(<TodoPage />)

    const task = screen.getByTitle('Lavar louças está completa?')
    userEvent.click(task)

    await waitFor(() => expect(task).not.toBeChecked())
  })
})
