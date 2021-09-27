import { call, put, takeLatest } from 'redux-saga/effects'

// eslint-disable-next-line import/no-cycle
import { favoritesListQuery } from './axios'
import { FavoriteListAction } from './slice'

function* getFavoriteLis() {
  const { data } = yield call(() =>
    favoritesListQuery().catch((e) => ({ data: { error: e } }))
  )
  yield put(FavoriteListAction.getFavorites(data))
}

export function* favoriteListWatcher() {
  yield takeLatest(FavoriteListAction.favoritesRequest.type, getFavoriteLis)
}
