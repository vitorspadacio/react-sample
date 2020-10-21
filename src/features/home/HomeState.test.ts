import reducer, { actions } from './HomeState'

// Testes de reducer não precisam ser feitos quando os testes integrados com testing-library
// cobrir os diferentes cenários quais o reducer será utilizado num contexto de
// funcionalidade/usuário, que recomendo como a melhor forma de testar. Contudo, há
// cenários diversos em aplicações quais testes de reducer podem garantir implementações
// necessárias para funcionalidade da aplicação.

// Através do coverage do jest é possível ver se você está cobrindo reducers, sagas e selectors
// com seus testes integrados nas páginas.

describe('REDUCER: Home', () => {
  test('deve retornar estado inicial', () => {
    const expected = { number: 0 }
    const result = reducer(undefined, {} as any)
    expect(result).toEqual(expected)
  })

  test('deve retornar estado com incremento em 1', () => {
    const expected = { number: 1 }
    const result = reducer(undefined, actions.increment())
    expect(result).toEqual(expected)
  })

  test('deve retornar estado com decremento em 1', () => {
    const expected = { number: 1 }
    const result = reducer({ number: 2 }, actions.decrement())
    expect(result).toEqual(expected)
  })
})
