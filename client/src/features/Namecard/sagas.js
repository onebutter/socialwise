import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUser } from './services';
import * as actions from './actions';

export function* loadNamecard(action) {
  try {
    const data = yield call(fetchUser, action.username);
    yield put(actions.loadNamecardSuccess(action.username, data));
  } catch (error) {
    yield put(actions.loadNamecardError(action.username, error));
  }
}

export function* watchNamecardLoadRequest() {
  yield takeLatest(actions.NAMECARD_LOAD_REQUEST, loadNamecard);
}

export default [watchNamecardLoadRequest()];
