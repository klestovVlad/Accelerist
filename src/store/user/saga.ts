import { signInQuery } from './axios';
import { UserAction } from './slice';
import { SignRequest } from './state';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

function* signIn(action: PayloadAction<SignRequest>) {
  const { data } = yield call(() =>
    signInQuery(action.payload).catch((e) => ({ data: { error: e } }))
  );
  if (Object.prototype.hasOwnProperty.call(data, 'error')) {
    yield put(UserAction.signError(data.error));
  } else {
    yield put(UserAction.signIn(data));
  }
}

export function* userWatcher() {
  yield takeLatest(UserAction.signInRequest.type, signIn);
}
