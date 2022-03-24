import { createFetchPromise, responseTypes } from '../../../infrastructure/test-helpers/test-mock-fetch'
import { render, screen, waitFor } from '../../../infrastructure/test-helpers/test-renderer'
import PlanetsPage from './PlanetsPage'

const fetchReturn = [
  {
    name: 'Test1',
    diameter: '12345',
    rotation_period: '24',
    population: '1000',
    climate: 'arid',
    terrain: 'desert',
  },
]

describe('PlanetsPage', () => {
  test('deve exibir lista de planetas', async () => {
    render(<PlanetsPage />, createFetchPromise(fetchReturn))

    await waitFor(() => expect(screen.queryByTestId('loading')).not.toBeInTheDocument())
    expect(screen.getByText('Test1'))
    expect(screen.getByText('12345 km'))
    expect(screen.getByText('24'))
    expect(screen.getByText('1000m'))
    expect(screen.getByText('arid'))
    expect(screen.getByText('desert'))
  })

  test('deve exibir loading durante requisição', async () => {
    render(<PlanetsPage />, createFetchPromise(fetchReturn))

    await waitFor(() => expect(screen.getByTestId('loading')))
  })

  test('deve exibir mensagem de error quando requisição retornar erro', async () => {
    render(<PlanetsPage />, createFetchPromise({}, responseTypes.notFound))

    await waitFor(() => expect(
      screen.getByText(`Ocorreu um erro. Motivo: ${responseTypes.notFound.statusText}`),
    ))
  })
})
