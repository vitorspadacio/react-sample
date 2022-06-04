import mockApi from '../../../infrastructure/test-helpers/test-mock-api'
import { render, screen, waitFor } from '../../../infrastructure/test-helpers/test-renderer'
import StarWarsApi from '../StarWarsApi'
import PlanetsPage from './PlanetsPage'

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

    await waitFor(() => expect(screen.queryByTestId('loading')).not.toBeInTheDocument())
    expect(screen.getByText('Test1'))
    expect(screen.getByText('12345 km'))
    expect(screen.getByText('24'))
    expect(screen.getByText('1000m'))
    expect(screen.getByText('arid'))
    expect(screen.getByText('desert'))
  })

  test('deve exibir loading durante requisição', async () => {
    render(<PlanetsPage />)

    expect(await screen.findByTestId('loading'))
    expect(await screen.findByText('Test1'))
  })

  test('deve exibir mensagem de error quando requisição retornar erro', async () => {
    mockApi(StarWarsApi.getPlanets).mockRejectedValueOnce(new Error('Not Found'))
    render(<PlanetsPage />)

    expect(await screen
      .findByText('Ocorreu um erro. Motivo: Not Found'))
  })
})
