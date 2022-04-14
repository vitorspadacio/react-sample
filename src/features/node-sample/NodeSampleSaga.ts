import { call, takeEvery, put } from 'redux-saga/effects'
import { actions } from './NodeSampleState'
import NodeSampleApi from './NodeSampleApi'

export function* getUsers() {
  yield put(actions.removeError())
  yield put(actions.isLoading(true))

  try {
    const { data: users } = yield call(NodeSampleApi.getUsers)
    yield put(actions.setUsers(users))
  } catch (error) {
    yield put(actions.setError({ message: error.message }))
  } finally {
    yield put(actions.isLoading(false))
  }
}

export default function* () {
  yield takeEvery(actions.getUsers.type, getUsers)
}
