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
      return payload;
    },
    setFavoritesError(state, { payload }: PayloadAction<unknown>) {
      console.log(payload);
    },
  },
});

export default favoriteListSlice.reducer;
export const FavoriteListAction = favoriteListSlice.actions;
