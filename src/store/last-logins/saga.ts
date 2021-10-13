import { call, put, takeLatest } from 'redux-saga/effects';

import { LastLoginsActionTypes } from './action-types';
import { lastLoginsQuery } from './axios';
import { LastLoginsAction } from './slice';

export function* getLastLogin() {
  try {
    yield put(LastLoginsAction.setLastLoginDataLoading(true));
    const { data } = yield call(lastLoginsQuery);
    yield put(LastLoginsAction.setLastLoginData(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(LastLoginsAction.setLastLoginError(e.message));
    }
  } finally {
    yield put(LastLoginsAction.setLastLoginDataLoading(false));
  }
}

export function* LastLoginWatcher() {
  yield takeLatest(LastLoginsActionTypes.GET_LAST_LOGINS, getLastLogin);
}
