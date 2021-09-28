import { LastLoginInfo, initialState } from './state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
