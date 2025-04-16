import { PayloadAction } from '@reduxjs/toolkit'
import { call, takeEvery, put, all } from 'redux-saga/effects'
import { actions } from './NodeSampleState'
import NodeSampleApi from './NodeSampleApi'
import Navigator from '../../components/Navigation/Navigator'
import { User } from './NodeSampleTypes'

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

export function* deleteUser(action: PayloadAction<{ id: number }>) {
  yield put(actions.removeError())
  yield put(actions.isLoading(true))

  try {
    const { id } = action.payload
    yield call(NodeSampleApi.deleteUser, id)
    yield put(actions.setUsers([]))
    yield put(actions.getUsers())
  } catch (error) {
    yield put(actions.setError({ message: error.message }))
    yield put(actions.isLoading(false))
  }
}

export function* updateUser(action: PayloadAction<User>) {
  yield put(actions.removeError())
  yield put(actions.isLoading(true))

  try {
    const { payload: user } = action
    yield call(NodeSampleApi.updateUser, user)
    Navigator.navigate('/node-sample')
  } catch (error) {
    yield put(actions.setError({ message: error.message }))
    yield put(actions.isLoading(false))
  }
}

export function* createUser(action: PayloadAction<User>) {
  yield put(actions.removeError())
  yield put(actions.isLoading(true))

  try {
    const { payload: user } = action
    yield call(NodeSampleApi.createUser, user)
    Navigator.navigate('/node-sample')
  } catch (error) {
    yield put(actions.setError({ message: error.message }))
    yield put(actions.isLoading(false))
  }
}

export default function* () {
  yield all([
    yield takeEvery(actions.getUsers.type, getUsers),
    yield takeEvery(actions.deleteUser.type, deleteUser),
    yield takeEvery(actions.updateUser.type, updateUser),
    yield takeEvery(actions.createUser.type, createUser),
  ])
}
