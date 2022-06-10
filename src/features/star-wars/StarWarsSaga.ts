import { call, takeEvery, put } from 'redux-saga/effects'
import { actions as appActions } from '../state'
import { actions } from './StarWarsState'
import StarWarsApi from './StarWarsApi'

export function* getPlanets() {
  yield put(actions.removeError())
  yield put(appActions.addLoadingStack())

  try {
    const planets = yield call(StarWarsApi.getPlanets)
    yield put(actions.setPlanets({ planets }))
  } catch (error) {
    yield put(actions.setError({ message: error.message }))
  } finally {
    yield put(appActions.removeLoadingStack())
  }
}

export default function* () {
  yield takeEvery(actions.getPlanets.type, getPlanets)
}
