import { call, put, takeLatest } from 'redux-saga/effects'

// eslint-disable-next-line import/no-cycle
import { savedListQuery } from './axios'
import { SavedListAction } from './slice'

function* getSavedList() {
  const { data } = yield call(() => savedListQuery().catch((e) => ({ data: { error: e } })))
  yield put(SavedListAction.getSavedList(data))
}

export function* savedListWatcher() {
  yield takeLatest(SavedListAction.savedListRequest.type, getSavedList)
}
