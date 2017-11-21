import { all } from 'redux-saga/effects';
import namecard from 'Features/Namecard/sagas';

export default function* rootSaga() {
  yield all([...namecard]);
}
