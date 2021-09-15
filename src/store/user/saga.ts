import { call, takeLatest } from 'redux-saga/effects';

import { signInQuery } from './axios';
import { UserAction } from './slice';

function* signIn(action: any) {
  console.log('hi!');
  const { data } = yield call(() => signInQuery(action.payload));
  console.log(data);
}

export function* userWatcher() {
  yield takeLatest(UserAction.signInRequest.type, signIn);
}
