import { all } from 'redux-saga/effects'
import StarWarsSaga from './star-wars/StarWarsSaga'

export default function* () {
  yield all([
    StarWarsSaga(),
  ])
}
