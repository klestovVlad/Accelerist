import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FavoriteListData, initialState, FavoritesRequest } from './state'

const favoriteListSlice = createSlice({
  name: 'FavoriteListSlice',
  initialState,
  reducers: {
    favoritesRequest(state, props: PayloadAction<FavoritesRequest>) {
      state.isLoading = true
    },
    getFavorites(state, { payload }: PayloadAction<FavoriteListData>) {
      return { ...payload, isLoading: false }
    },
  },
})

export default favoriteListSlice.reducer
export const FavoriteListAction = favoriteListSlice.actions
