import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState, LastLoginInfo } from './state';

const lastLoginsSlice = createSlice({
  name: 'FavoriteListSlice',
  initialState,
  reducers: {
    setLastLoginData(state, { payload }: PayloadAction<LastLoginInfo[]>) {
      return payload;
    },
    setLastLoginError(state, { payload }: PayloadAction<unknown>) {
      console.log(payload);
    },
  },
});

export default lastLoginsSlice.reducer;
export const LastLoginsAction = lastLoginsSlice.actions;
