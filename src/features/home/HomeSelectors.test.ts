import { selectNumber } from './HomeSelectors'

// Testes de selector não precisam ser feitos quando os testes integrados com testing-library
// cobrir os diferentes cenários quais o selector será utilizado num contexto de
// funcionalidade/usuário, que recomendo como a melhor forma de testar. Contudo, há
// cenários diversos em aplicações quais testes de selector podem garantir implementações
// necessárias para funcionalidade da aplicação.

// Através do coverage do jest é possível ver se você está cobrindo reducers, sagas e selectors
// com seus testes integrados nas páginas.

describe('SELECTOR: Home', () => {
  test('deve retornar number do estado', () => {
    const state = { home: { number: 4 } }
    const result = selectNumber(state as any)
    expect(result).toBe(4)
  })
})
