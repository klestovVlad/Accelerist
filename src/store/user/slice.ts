import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState, SignRequest, UserData } from './state';

const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    signInRequest(state, { payload }: PayloadAction<SignRequest>) {
      console.log(payload);
      state.isLoading = true;
    },
    signIn(state, { payload }: PayloadAction<UserData>) {
      return { ...payload, isLoading: false };
    },
    signError(state, { payload }: PayloadAction<any>) {
      state.isLoading = false;
      if (payload.toString().includes('status code 401')) {
        alert('The username or password that you have entered is invalid.');
      } else {
        alert('Unknown error');
      }
    },
    logout(state) {
      state.accessToken = '';
    },
  },
});

export default UserSlice.reducer;
export const UserAction = UserSlice.actions;
