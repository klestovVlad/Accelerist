import { CompaniesActionTypes } from './action-types';
import {
  favoritesListQuery,
  companiesQuery,
  likeCompanyQuery,
  dislikeCompanyQuery,
} from './axios';
import { CompaniesAction } from './slice';
import { FavoritesRequest, LikeCompanyRequest } from './state';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

export function* getFavoritesList({
  payload,
}: PayloadAction<FavoritesRequest>) {
  try {
    yield put(CompaniesAction.setCompaniesLoading(true));
    const { data } = yield call(
      favoritesListQuery,
      payload.page,
      payload.limit
    );
    yield put(CompaniesAction.setCompaniesData(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(CompaniesAction.setCompaniesError(e.message));
    }
  } finally {
    yield put(CompaniesAction.setCompaniesLoading(false));
  }
}

export function* getCompanies({ payload }: PayloadAction<FavoritesRequest>) {
  try {
    yield put(CompaniesAction.setCompaniesLoading(true));
    const { data } = yield call(companiesQuery, payload.page, payload.limit);
    yield put(CompaniesAction.setCompaniesData(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(CompaniesAction.setCompaniesError(e.message));
    }
  } finally {
    yield put(CompaniesAction.setCompaniesLoading(false));
  }
}

export function* likeCompany({ payload }: PayloadAction<LikeCompanyRequest>) {
  console.log(payload);
  try {
    if (payload.like) {
      yield call(dislikeCompanyQuery, payload.id);
    } else {
      yield call(likeCompanyQuery, payload.id);
    }
    yield put(CompaniesAction.setLikeCompany(payload.id));
  } catch (e) {
    if (e instanceof Error) {
      yield put(CompaniesAction.setCompaniesError(e.message));
    }
  }
}

export function* deleteFromFavorites({ payload }: PayloadAction<string>) {
  console.log(payload);
  try {
    yield put(CompaniesAction.setCompaniesLoading(true));
    const { data } = yield call(dislikeCompanyQuery, payload);
    console.log(data);
    yield put(CompaniesAction.deleteFromFavorites(payload));
  } catch (e) {
    if (e instanceof Error) {
      yield put(CompaniesAction.setCompaniesError(e.message));
    }
  } finally {
    yield put(CompaniesAction.setCompaniesLoading(false));
  }
}

export function* favoriteListWatcher() {
  yield takeLatest(CompaniesActionTypes.GET_FAVORITES, getFavoritesList);
  yield takeLatest(CompaniesActionTypes.GET_COMPANIES, getCompanies);
  yield takeLatest(CompaniesActionTypes.LIKE_COMPANY, likeCompany);
  yield takeLatest(
    CompaniesActionTypes.DELETE_FROM_FAVORITES,
    deleteFromFavorites
  );
}
