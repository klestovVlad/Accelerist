import { CompaniesActionTypes } from './action-types';
import {
  favoritesListQuery,
  companiesQuery,
  likeCompanyQuery,
  dislikeCompanyQuery,
} from './axios';
import { CompaniesAction } from './slice';
import { FilterRequest, LikeCompanyRequest } from './state';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

export function* getFavoritesList({ payload }: PayloadAction<FilterRequest>) {
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

export function* getCompanies({ payload }: PayloadAction<FilterRequest>) {
  try {
    yield put(CompaniesAction.setCompaniesLoading(true));
    const { data } = yield call(
      companiesQuery,
      payload.page,
      payload.limit,
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
      payload.revenueMax
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

export function* likeCompany({ payload }: PayloadAction<LikeCompanyRequest>) {
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
  try {
    yield put(CompaniesAction.setCompaniesLoading(true));
    yield call(dislikeCompanyQuery, payload);
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
