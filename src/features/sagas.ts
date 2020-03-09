
import { all } from 'redux-saga/effects'
import TodoSaga from './todo/TodoSaga'

export default function* () {
  yield all([TodoSaga()])
}
