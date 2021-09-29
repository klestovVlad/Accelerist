import { initialState, UserData } from './state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    setSignLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    signIn(state, { payload }: PayloadAction<UserData>) {
      return { ...payload, isLoading: false, errors: [], isError: false };
    },
    signUp(state, { payload }: PayloadAction<UserData>) {
      return { ...payload, isLoading: false, errors: [], isError: false };
    },
    setSignError(state, { payload }: PayloadAction<string>) {
      state.errors.push(payload);
      state.isError = true;
    },
    logout(state) {
      state.accessToken = '';
    },
  },
});

export default UserSlice.reducer;
export const UserAction = UserSlice.actions;
