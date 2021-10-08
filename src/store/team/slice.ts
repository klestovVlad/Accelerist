import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState, TeamData } from './state';

const teamSlice = createSlice({
  name: 'FavoriteListSlice',
  initialState,
  reducers: {
    setTeamLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    setTeamData(state, { payload }: PayloadAction<TeamData>) {
      return payload;
    },
    setTeamError(state, { payload }: PayloadAction<unknown>) {
      console.log(payload);
    },
  },
});

export default teamSlice.reducer;
export const TeamAction = teamSlice.actions;
