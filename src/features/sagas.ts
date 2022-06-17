import { all } from 'redux-saga/effects'
import AuthSaga from './auth/AuthSaga'
import NodeSampleSaga from './node-sample/NodeSampleSaga'
import StarWarsSaga from './star-wars/StarWarsSaga'

export default function* () {
  yield all([
    AuthSaga(),
    NodeSampleSaga(),
    StarWarsSaga(),
  ])
}
