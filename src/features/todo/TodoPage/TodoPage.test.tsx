import { fireEvent, waitFor } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { render } from '../../../infrastructure/test-helpers/test-renderer'
import TodoPage from './TodoPage'

describe('TodoPage', () => {
  test('deve exibir lista inicial de tarefas', () => {
    const { getByText, getByTitle } = render(<TodoPage />)

    expect(getByText('Lavar louças'))
    expect(getByText('Arrumar a sala'))
    expect(getByText('Limpar banheiro'))

    expect(getByTitle('Lavar louças está completa?')).toBeChecked()
    expect(getByTitle('Arrumar a sala está completa?')).not.toBeChecked()
    expect(getByTitle('Limpar banheiro está completa?')).not.toBeChecked()
  })

  test('deve adicionar tarefa na lista de tarefas após clicar no botão +', async () => {
    const { getByTitle, getByText } = render(<TodoPage />)

    await userEvent.type(getByTitle('descrição'), 'Teste A')
    userEvent.click(getByText('+'))

    await waitFor(() => expect(getByText('Teste A')))
  })

  test('deve adicionar tarefa na lista de tarefas após apertar enter', async () => {
    const { getByTitle, getByText, getByTestId } = render(<TodoPage />)

    await userEvent.type(getByTitle('descrição'), 'Teste A')
    fireEvent.submit(getByTestId('todo-form'))

    await waitFor(() => expect(getByText('Teste A')))
  })

  test('não deve adicionar tarefa na lista de tarefas com campo vazio', async () => {
    const { getByTitle, getByText } = render(<TodoPage />)

    await userEvent.click(getByTitle('descrição'))
    userEvent.click(getByText('+'))

    await waitFor(() => expect(getByText('Obrigatório preencher para adicionar tarefa')))
  })

  test('deve alterar estado da tarefa para completa ao clicar em uma tarefa incompleta', async () => {
    const { getByTitle } = render(<TodoPage />)

    const task = getByTitle('Arrumar a sala está completa?')
    await userEvent.click(task)

    await waitFor(() => expect(task).toBeChecked())
  })

  test('deve alterar estado da tarefa para incompleta ao clicar em uma tarefa completa', async () => {
    const { getByTitle } = render(<TodoPage />)

    const task = getByTitle('Lavar louças está completa?')
    await userEvent.click(task)

    await waitFor(() => expect(task).not.toBeChecked())
  })
})
