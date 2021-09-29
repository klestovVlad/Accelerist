import { CompaniesActionTypes } from './action-types';
import { favoritesListQuery } from './axios';
import { FavoriteListAction } from './slice';
import { FavoritesRequest } from './state';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

export function* getFavoritesList({
  payload,
}: PayloadAction<FavoritesRequest>) {
  try {
    yield put(FavoriteListAction.setFavoritesLoading(true));
    const { data } = yield call(
      favoritesListQuery,
      payload.page,
      payload.limit
    );
    yield put(FavoriteListAction.setFavoritesData(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(FavoriteListAction.setFavoritesError(e.message));
    }
  } finally {
    yield put(FavoriteListAction.setFavoritesLoading(false));
  }
}

export function* favoriteListWatcher() {
  yield takeLatest(CompaniesActionTypes.GET_FAVORITES, getFavoritesList);
}
