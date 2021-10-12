import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CompaniesData, initialState } from './state';

const CompaniesSlice = createSlice({
  name: 'FavoriteListSlice',
  initialState,
  reducers: {
    setCompaniesLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    setCompaniesData(state, { payload }: PayloadAction<CompaniesData>) {
      return { ...payload, errors: [], isError: false };
    },
    getCompaniesExcel(state, { payload }: PayloadAction<CompaniesData>) {
      console.log('getCompaniesExcel', payload);
    },
    setLikeCompany(state, { payload }: PayloadAction<string>) {
      state.items.map((item) => {
        if (item.id === payload) {
          item.like = !item.like;
        }
        return state;
      });
    },
    deleteFromFavorites(state, { payload }: PayloadAction<string>) {
      let unlikeNum = -1;
      state.items.map((item, index) => {
        if (item.id === payload) {
          item.like = !item.like;
          unlikeNum = index;
          state.meta.totalItems -= 1;
        }
        return state;
      });
      state.items.splice(unlikeNum, 1);
    },
    setCompaniesError(state, { payload }: PayloadAction<string>) {
      state.errors.push(payload);
      state.isError = true;
    },
  },
});

export default CompaniesSlice.reducer;
export const CompaniesAction = CompaniesSlice.actions;
