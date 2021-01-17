import { takeEvery } from 'redux-saga/effects'
import { createFetchPromise, runSagaTest } from '../test-helper'
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
  test('deve chamar a saga getPlanets quando receber action getPlanets', async () => {
    const iterator = saga()
    const expectedYield = takeEvery(actions.getPlanets.type, getPlanets)

    const actualYield = iterator.next().value

    expect(actualYield).toEqual(expectedYield)
  })

  test('deve chamar saga getPlanets e salvar planetas num fluxo de sucesso', async () => {
    const dispatcheds = await runSagaTest(getPlanets, createFetchPromise(fetchReturn))
    const expectedSet = await StarWarsApi.getPlanets()

    expect(dispatcheds).toContainEqual(actions.setPlanets({ planets: expectedSet }))
  })
})
