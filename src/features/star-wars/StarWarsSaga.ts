import { call, takeEvery, put } from 'redux-saga/effects'
import { actions } from './StarWarsState'
import StarWarsApi from './StarWarsApi'

function* getPlanets() {
  yield put(actions.isLoading(true))

  try {
    const planets = yield call(StarWarsApi.getPlanets)
    yield put(actions.setPlanets({ planets }))
  } catch (e) {
    console.log('Deu erro', e)
  } finally {
    yield put(actions.isLoading(false))
  }
}

export default function* () {
  yield takeEvery(actions.getPlanets.type, getPlanets)
}
