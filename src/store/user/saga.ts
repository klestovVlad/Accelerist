import { call, put, takeLatest } from 'redux-saga/effects';

// eslint-disable-next-line import/no-cycle
import { signInQuery } from './axios';
import { UserAction } from './slice';

function* signIn(action: any) {
  const { data } = yield call(() => signInQuery(action.payload).catch((e) => ({ data: { error: e } })));
  if (Object.prototype.hasOwnProperty.call(data, 'error')) {
    yield put(UserAction.signError(data.error));
  } else {
    yield put(UserAction.signIn(data));
  }
}

export function* userWatcher() {
  yield takeLatest(UserAction.signInRequest.type, signIn);
}
