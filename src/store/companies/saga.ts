import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeLatest } from 'redux-saga/effects'

// eslint-disable-next-line import/no-cycle
import { favoritesListQuery } from './axios'
import { FavoriteListAction } from './slice'
import { FavoritesRequest } from './state'

function* getFavoriteLis(action: PayloadAction<FavoritesRequest>) {
  const { data } = yield call(() =>
    favoritesListQuery(action.payload.limit).catch((e) => ({
      data: { error: e },
    }))
  )
  yield put(FavoriteListAction.getFavorites(data))
}

export function* favoriteListWatcher() {
  yield takeLatest(FavoriteListAction.favoritesRequest.type, getFavoriteLis)
}
