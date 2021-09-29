import { FavoriteListData, initialState } from './state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const favoriteListSlice = createSlice({
  name: 'FavoriteListSlice',
  initialState,
  reducers: {
    setFavoritesLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    setFavoritesData(state, { payload }: PayloadAction<FavoriteListData>) {
      return { ...payload, errors: [], isError: false };
    },
    setFavoritesError(state, { payload }: PayloadAction<string>) {
      state.errors.push(payload);
      state.isError = true;
    },
  },
});

export default favoriteListSlice.reducer;
export const FavoriteListAction = favoriteListSlice.actions;
