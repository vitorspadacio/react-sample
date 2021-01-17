import { waitFor } from '@testing-library/react'
import { takeEvery } from 'redux-saga/effects'
import { createFetchPromise, responseTypes } from '../../infrastructure/test-helpers/test-mock-fetch'
import { runSagaTest } from '../../infrastructure/test-helpers/test-run-saga'
import StarWarsApi from './StarWarsApi'
import saga, { getPlanets } from './StarWarsSaga'
import { actions } from './StarWarsState'

// Testes de saga não precisam ser feitos quando os testes integrados com testing-library
// cobrir os diferentes cenários quais a saga será utilizado num contexto de
// funcionalidade/usuário, que recomendo como a melhor forma de testar. Contudo, há
// cenários diversos em aplicações quais testes de saga podem garantir implementações
// necessárias para funcionalidade da aplicação.

// Através do coverage do jest é possível ver se você está cobrindo reducers, sagas e selectors
// com seus testes integrados nas páginas.

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

describe('StarWarsSaga', () => {
  test.each([
    [actions.getPlanets.type, getPlanets],
  ])('deve chamar a saga correta quando receber determinada action', async (action, generator) => {
    const iterator = saga()
    const expectedYield = takeEvery(action, generator)

    const actualYield = iterator.next().value

    expect(actualYield).toEqual(expectedYield)
  })

  test('deve chamar saga getPlanets e salvar planetas num fluxo de sucesso', async () => {
    const { dispatches } = await runSagaTest(getPlanets, createFetchPromise(fetchReturn))
    const expectedSet = await StarWarsApi.getPlanets()

    await waitFor(() => {
      expect(dispatches).toContainEqual(actions.removeError())
      expect(dispatches).toContainEqual(actions.isLoading(true))
      expect(dispatches).toContainEqual(actions.setPlanets({ planets: expectedSet }))
      expect(dispatches).toContainEqual(actions.isLoading(false))
    })
  })

  test('deve chamar saga getPlanets e definir mensagme de erro', async () => {
    const responseType = responseTypes.notFound
    const { dispatches } = await runSagaTest(getPlanets, createFetchPromise({}, responseType))

    await waitFor(() => {
      expect(dispatches).toContainEqual(actions.removeError())
      expect(dispatches).toContainEqual(actions.isLoading(true))
      expect(dispatches).toContainEqual(actions.setError({ message: responseType.statusText }))
      expect(dispatches).toContainEqual(actions.isLoading(false))
    })
  })
})
