import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { SavedListActionTypes } from './action-types';
import {
  createSavedListQuery,
  deleteSavedListQuery,
  savedListQuery,
  updateSavedListQuery,
} from './axios';
import { SavedListAction } from './slice';
import { CreateSavedList, SavedListRequest, UpdateSavedList } from './state';

export function* getSavedList({ payload }: PayloadAction<SavedListRequest>) {
  try {
    yield put(SavedListAction.setFavoritesLoading(true));
    const { data } = yield call(
      savedListQuery,
      payload.page,
      payload.limit,
      payload.sort,
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

export function* updateSavedList({ payload }: PayloadAction<UpdateSavedList>) {
  try {
    yield put(SavedListAction.setFavoritesLoading(true));
    const { data } = yield call(
      updateSavedListQuery,
      payload.id,
      payload.name,
      payload.income,
      payload.ageRanges,
      payload.gender,
      payload.q,
      payload.industry,
      payload.deleteIds,
      payload.csrFocusIds,
      payload.affinities,
      payload.location,
      payload.totalAnnualContributors,
      payload.revenueMin,
      payload.revenueMax,
    );
    yield put(SavedListAction.updateSavedList(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(SavedListAction.setSavedListError(e.message));
    }
  } finally {
    yield put(SavedListAction.setFavoritesLoading(false));
  }
}

export function* deleteSavedList({ payload }: PayloadAction<string>) {
  try {
    yield put(SavedListAction.setFavoritesLoading(true));
    yield call(deleteSavedListQuery, payload);
    yield put(SavedListAction.deleteSavedList(payload));
  } catch (e) {
    if (e instanceof Error) {
      yield put(SavedListAction.setSavedListError(e.message));
    }
  } finally {
    yield put(SavedListAction.setFavoritesLoading(false));
  }
}

export function* createSavedList({ payload }: PayloadAction<CreateSavedList>) {
  try {
    yield put(SavedListAction.setFavoritesLoading(true));
    const { data } = yield call(
      createSavedListQuery,
      payload.income,
      payload.ageRanges,
      payload.gender,
      payload.q,
      payload.industry,
      payload.deleteIds,
      payload.csrFocusIds,
      payload.affinities,
      payload.location,
      payload.totalAnnualContributors,
      payload.revenueMin,
      payload.revenueMax,
    );
    yield put(SavedListAction.createSavedList(data));
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
  yield takeLatest(SavedListActionTypes.UPDATE_SAVED_LIST, updateSavedList);
  yield takeLatest(SavedListActionTypes.DELETE_SAVED_LIST, deleteSavedList);
  yield takeLatest(SavedListActionTypes.CREATE_SAVED_LIST, createSavedList);
}
