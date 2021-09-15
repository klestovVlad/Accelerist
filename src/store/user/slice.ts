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
      console.log('signIn', payload);
      return { ...payload, loading: false };
    },
  },
});

export default UserSlice.reducer;
export const UserAction = UserSlice.actions;
