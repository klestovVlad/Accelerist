import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState, LastLoginInfo } from './state';

const lastLoginsSlice = createSlice({
  name: 'FavoriteListSlice',
  initialState,
  reducers: {
    setLastLoginDataLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    setLastLoginData(state, { payload }: PayloadAction<LastLoginInfo[]>) {
      return { data: payload, isLoading: false, isError: false, errors: [] };
    },
    setLastLoginError(state, { payload }: PayloadAction<string>) {
      state.isError = true;
      state.errors.push(payload);
    },
  },
});

export default lastLoginsSlice.reducer;
export const LastLoginsAction = lastLoginsSlice.actions;
