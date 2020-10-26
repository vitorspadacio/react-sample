// import { call, takeEvery, put } from 'redux-saga/effects'
// import { PayloadAction } from '@reduxjs/toolkit'
// import { actions } from './TodoState'
// import TodoApi from './TodoApi'

// function* insertTask(action: PayloadAction<string>) {
//   yield put(actions.showLoading(true))

//   try {
//     const response = yield call(TodoApi.getGuid)

//     const payload = { id: response.data, description: action.payload }
//     yield put(actions.taskInserted(payload))
//     yield put(actions.showLoading(false))
//   } catch {
//     console.log('Ocorreu um erro')
//   }
// }

// export default function* () {
// yield takeEvery(actions.taskAdded.type, insertTask)
// }
