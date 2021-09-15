import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState, SignRequest, UserData } from './state';

const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    signInRequest(state, { payload }: PayloadAction<SignRequest>) {
      console.log(payload);
      return state;
    },
    signIn(state, { payload }: PayloadAction<UserData>) {
      return { ...payload, loading: false };
    },
    logout(state) {
      state.accessToken = '';
    },
  },
});

export default UserSlice.reducer;
export const UserAction = UserSlice.actions;
