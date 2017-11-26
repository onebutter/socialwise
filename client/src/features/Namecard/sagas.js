import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUser } from './services';
import * as actions from './actions';

export function* loadNamecard(action) {
  try {
    const data = yield call(fetchUser, action.name);
    yield put(actions.loadNamecardSuccess(action.name, data));
  } catch (error) {
    yield put(actions.loadNamecardError(action.name, error));
  }
}

export function* watchNamecardLoadRequest() {
  yield takeLatest(actions.NAMECARD_LOAD_REQUEST, loadNamecard);
}

export default [watchNamecardLoadRequest()];
