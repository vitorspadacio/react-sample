import { call, takeEvery, put } from 'redux-saga/effects'
import TodoApi from './TodoApi'
import { Actions, Types } from './TodoActions'
import { Task } from './TodoTypes'

function* insertTask(action) {
  yield put(Actions.isInserting())

  try {
    const response = yield call(TodoApi.getGuid)

    const task = {
      id: response.data,
      description: action.description,
      isComplete: false,
    } as Task

    yield put(Actions.insertTask(task))
    yield put(Actions.isNotInserting())
  } catch {
    console.log('Ocorreu um erro')
  }
}

export default function* () {
  yield takeEvery(Types.CreateTask, insertTask)
}
