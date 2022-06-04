import { all } from 'redux-saga/effects'
import StarWarsSaga from './star-wars/StarWarsSaga'
import NodeSampleSaga from './node-sample/NodeSampleSaga'

export default function* () {
  yield all([
    StarWarsSaga(),
    NodeSampleSaga(),
  ])
}
