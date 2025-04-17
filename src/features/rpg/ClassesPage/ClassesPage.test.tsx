import { router } from '@features/routes'
import fetch from '@infrastructure/fetch'
import mockApi from '@infrastructure/test-helpers/mock-api'
import { render, screen } from '@infrastructure/test-helpers/test-renderer'
import userEvent from '@testing-library/user-event'
import ClassesPage from './ClassesPage'

const getClassesReturn = { results: [{ url: 'http://foo' }] }

const getClassReturn = {
  name: 'Test1',
  hit_die: '8',
  saving_throws: [{ name: 'DEX' }, { name: 'STR' }],
  subclasses: [{ name: 'TestA' }, { name: 'TestB' }],
  proficiencies: ['Foo', 'Bar'],
}

describe('ClassesPage', () => {
  test('deve exibir lista de classes', async () => {
    mockApi(fetch.get).mockResolvedValueOnce(getClassesReturn).mockResolvedValueOnce(getClassReturn)

    render(<ClassesPage />)

    expect(await screen.findByText('Test1')).toBeVisible()
    expect(screen.getByText('8')).toBeVisible()
    expect(screen.getByText('DEX, STR')).toBeVisible()
    expect(screen.getByText('TestA, TestB')).toBeVisible()
  })

  test('deve exibir mensagem de erro quando requisição retornar erro', async () => {
    mockApi(fetch.get).mockRejectedValue(new Error('Not Found'))

    render(<ClassesPage />)

    expect(await screen.findByText('Ocorreu um erro. Motivo: Not Found'))
  })

  test('deve navegar para rpg ao clicar no menu rpg', async () => {
    jest.spyOn(router, 'navigate')
    render(<ClassesPage />)

    await userEvent.click(screen.getByText('RPG'))

    expect(await screen.findByText('Ocorreu um erro. Motivo: Not Found'))
    expect(router.navigate).toHaveBeenCalledWith('/rpg')
  })
})
