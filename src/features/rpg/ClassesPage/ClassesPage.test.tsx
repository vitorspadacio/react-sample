import mockApi from '../../../infrastructure/test-helpers/mock-api'
import { render, screen } from '../../../infrastructure/test-helpers/test-renderer'
import RpgApi from '../RpgApi'
import { RpgClass } from '../RpgTypes'
import ClassesPage from './ClassesPage'

jest.mock('../RpgApi')

const getClassesReturn = [
  {
    name: 'Test1',
    hitDie: 8,
    savingThrows: ['DEX',  'STR'],
    subclasses: ['TestA',  'TestB'],
  } as RpgClass,
]

describe('PlanetsPage', () => {
  beforeEach(() => {
    mockApi(RpgApi.getClasses).mockResolvedValue(getClassesReturn)
  })

  test('deve exibir lista de classes', async () => {
    render(<ClassesPage />)

    expect(await screen.findByText('Test1')).toBeVisible()
    expect(screen.getByText('8')).toBeVisible()
    expect(screen.getByText('DEX, STR')).toBeVisible()
    expect(screen.getByText('TestA, TestB')).toBeVisible()
  })

  test('deve exibir mensagem de error quando requisição retornar erro', async () => {
    mockApi(RpgApi.getClasses).mockRejectedValueOnce(new Error('Not Found'))
    render(<ClassesPage />)

    expect(await screen
      .findByText('Ocorreu um erro. Motivo: Not Found'))
  })
})
