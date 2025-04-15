import mockApi from '../../../infrastructure/test-helpers/mock-api'
import { render, screen } from '../../../infrastructure/test-helpers/test-renderer'
import StarWarsApi from '../RpgApi'
import PlanetsPage from './ClassesPage'

jest.mock('../StarWarsApi')

const getPlanetsReturn = [
  {
    name: 'Test1',
    diameter: '12345',
    rotationPeriod: '24',
    population: '1000',
    climate: 'arid',
    terrain: 'desert',
  },
]

describe('PlanetsPage', () => {
  beforeEach(() => {
    mockApi(StarWarsApi.getPlanets).mockResolvedValue(getPlanetsReturn)
  })

  test('deve exibir lista de planetas', async () => {
    render(<PlanetsPage />)

    expect(await screen.findByText('Test1')).toBeVisible()
    expect(screen.getByText('12345 km')).toBeVisible()
    expect(screen.getByText('24')).toBeVisible()
    expect(screen.getByText('1000m')).toBeVisible()
    expect(screen.getByText('arid')).toBeVisible()
    expect(screen.getByText('desert')).toBeVisible()
  })

  test('deve exibir mensagem de error quando requisição retornar erro', async () => {
    mockApi(StarWarsApi.getPlanets).mockRejectedValueOnce(new Error('Not Found'))
    render(<PlanetsPage />)

    expect(await screen
      .findByText('Ocorreu um erro. Motivo: Not Found'))
  })
})
