import { call, put, takeLatest } from 'redux-saga/effects';

import { signInQuery } from './axios';
import { UserAction } from './slice';

function* signIn(action: any) {
  const { data } = yield call(() => signInQuery(action.payload));
  yield put(UserAction.signIn(data));
}

export function* userWatcher() {
  yield takeLatest(UserAction.signInRequest.type, signIn);
}
