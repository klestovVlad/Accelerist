import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState, SavedListData } from './state';

const SavedListSlice = createSlice({
  name: 'SavedListSlice',
  initialState,
  reducers: {
    savedListRequest(state) {
      state.isLoading = true;
    },
    getSavedList(state, { payload }: PayloadAction<SavedListData>) {
      return { ...payload, isLoading: false };
    },
  },
});

export default SavedListSlice.reducer;
export const SavedListAction = SavedListSlice.actions;
