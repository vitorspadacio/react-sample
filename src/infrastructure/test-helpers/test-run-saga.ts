import { runSaga } from "redux-saga"
import { mockFetch } from "./test-mock-fetch"

// Tudo contido daqui para baixo pode ser removido se não houver intenção de realizar
// testes em sagas. E é o recomendado sempre testar o uso da saga num contexto de
// usuário/funcionalidade que sua implementação. Ver mais sobre no arquivo de teste
// de saga usado para exemplificar o cenário opcional.
// (src/features/star-wars/StarWarsSaga.test.ts)

const runContextSaga = async (saga) => {
  const dispatches = []
  const task = await runSaga({
    dispatch: (action) => dispatches.push(action),
    getState: () => ({}),
  }, saga)
  return { dispatches, task }
}

export const runSagaTest = async (saga, fetchPromise?) => {
  if (fetchPromise) mockFetch(fetchPromise)
  else mockFetch()
  return await runContextSaga(saga)
}
