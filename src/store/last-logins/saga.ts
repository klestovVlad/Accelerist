import { LastLoginsActionTypes } from './action-types';
import { lastLoginsQuery } from './axios';
import { LastLoginsAction } from './slice';
import { call, put, takeLatest } from 'redux-saga/effects';

export function* getLastLogin() {
  try {
    const { data } = yield call(lastLoginsQuery);
    yield put(LastLoginsAction.setLastLoginData(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(LastLoginsAction.setLastLoginError(e.message));
    }
  }
}

export function* LastLoginWatcher() {
  yield takeLatest(LastLoginsActionTypes.GET_LAST_LOGINS, getLastLogin);
}
