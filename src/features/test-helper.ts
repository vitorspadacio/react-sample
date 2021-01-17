import { runSaga } from "redux-saga";

const apis = {
  starwars: 'http://foo.com',
}

export const mockFetch = (fetchMock: Promise<any> = Promise.resolve()) => {
  (window as any).apis = apis
  const fetch = jest.fn(() => fetchMock);
  (window as any).fetch = fetch
  return fetch
}

export const createFetchPromise = (expectedResult: any): Promise<any> => Promise.resolve({
  json: () => Promise.resolve({ results: expectedResult })
})

// Tudo contido daqui para baixo pode ser removido se não houver intenção de realizar
// testes em sagas. E é o recomendado sempre testar o uso da saga num contexto de
// usuário/funcionalidade que sua implementação. Ver mais sobre no arquivo de teste
// de saga usado para exemplificar o cenário opcional.
// (src/features/star-wars/StarWarsSaga.test.ts)

const runContextSaga = async (saga) => {
  const dispatches = []
  await runSaga({
    dispatch: (action) => dispatches.push(action),
    getState: () => ({}),
  }, saga)
  return dispatches
}

export const runSagaTest = async (saga, fetchPromise?) => {
  if (fetchPromise) mockFetch(fetchPromise)
  else mockFetch()
  return await runContextSaga(saga)
}

