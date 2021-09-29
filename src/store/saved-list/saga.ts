
import { SavedListActionTypes } from './action-types';
import { savedListQuery } from './axios';
import { SavedListAction } from './slice';
import { SavedListRequest } from './state';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

export function* getSavedList({ payload }: PayloadAction<SavedListRequest>) {
  try {
    yield put(SavedListAction.setFavoritesLoading(true));
    const { data } = yield call(
      savedListQuery,
      payload.page,
      payload.limit,
      payload.sort
    );
    yield put(SavedListAction.getSavedList(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(SavedListAction.setSavedListError(e.message));
    }
  } finally {
    yield put(SavedListAction.setFavoritesLoading(false));
  }
}

export function* savedListWatcher() {
  yield takeLatest(SavedListActionTypes.GET_SAVED_LIST, getSavedList);
}
