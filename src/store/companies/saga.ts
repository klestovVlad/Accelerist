import { CompaniesActionTypes } from './action-types';
import { favoritesListQuery, companiesQuery } from './axios';
import { FavoriteListAction } from './slice';
import { FavoritesRequest } from './state';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

export function* getFavoritesList({
  payload,
}: PayloadAction<FavoritesRequest>) {
  try {
    yield put(FavoriteListAction.setCompaniesLoading(true));
    const { data } = yield call(
      favoritesListQuery,
      payload.page,
      payload.limit
    );
    yield put(FavoriteListAction.setCompaniesData(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(FavoriteListAction.setCompaniesError(e.message));
    }
  } finally {
    yield put(FavoriteListAction.setCompaniesLoading(false));
  }
}

export function* getCompanies({ payload }: PayloadAction<FavoritesRequest>) {
  try {
    yield put(FavoriteListAction.setCompaniesLoading(true));
    const { data } = yield call(companiesQuery, payload.page, payload.limit);
    yield put(FavoriteListAction.setCompaniesData(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(FavoriteListAction.setCompaniesError(e.message));
    }
  } finally {
    yield put(FavoriteListAction.setCompaniesLoading(false));
  }
}

export function* favoriteListWatcher() {
  yield takeLatest(CompaniesActionTypes.GET_FAVORITES, getFavoritesList);
  yield takeLatest(CompaniesActionTypes.GET_COMPANIES, getCompanies);
}
