import React from 'react'
import { createFetchPromise, responseTypes } from '../../../infrastructure/test-helpers/test-mock-fetch'
import { render, waitFor } from '../../../infrastructure/test-helpers/test-renderer'
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
    const { getByText, queryByTestId } = render(<PlanetsPage />, createFetchPromise(fetchReturn))

    await waitFor(() => {
      expect(queryByTestId('loading')).not.toBeTruthy()
      expect(getByText('Test1'))
      expect(getByText('12345 km'))
      expect(getByText('24'))
      expect(getByText('1000m'))
      expect(getByText('arid'))
      expect(getByText('desert'))
    })
  })

  test('deve exibir loading durante requisição', async () => {
    const { getByTestId } = render(<PlanetsPage />, createFetchPromise(fetchReturn))

    await waitFor(() => expect(getByTestId('loading')))
  })

  test('deve exibir mensagem de error quando requisição retornar erro', async () => {
    const { getByText } = render(<PlanetsPage />, createFetchPromise({}, responseTypes.notFound))

    await waitFor(() => expect(
      getByText(`Ocorreu um erro. Motivo: ${responseTypes.notFound.statusText}`),
    ))
  })
})
