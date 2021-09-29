import { UserActionTypes } from './action-types';
import { signInQuery, signUpQuery } from './axios';
import { UserAction } from './slice';
import { SignRequest } from './state';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

export function* signIn({ payload }: PayloadAction<SignRequest>) {
  try {
    yield put(UserAction.setSignLoading(true));
    const { data } = yield call(signInQuery, payload);
    yield put(UserAction.signIn(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(UserAction.setSignError(e.message));
    }
  } finally {
    yield put(UserAction.setSignLoading(false));
  }
}

export function* signUp({ payload }: PayloadAction<SignRequest>) {
  try {
    yield put(UserAction.setSignLoading(true));
    const { data } = yield call(signUpQuery, payload);
    yield put(UserAction.signUp(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(UserAction.setSignError(e.message));
    }
  } finally {
    yield put(UserAction.setSignLoading(false));
  }
}

export function* userWatcher() {
  yield takeLatest(UserActionTypes.SIGN_IN, signIn);
  yield takeLatest(UserActionTypes.SIGN_UP, signUp);
}
