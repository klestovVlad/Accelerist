import { initialState, SavedListData, ItemData } from './state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const savedListSlice = createSlice({
  name: 'SavedListSlice',
  initialState,
  reducers: {
    setFavoritesLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    getSavedList(state, { payload }: PayloadAction<SavedListData>) {
      return { ...payload, isLoading: false, errors: [], isError: false };
    },
    updateSavedList(state, { payload }: PayloadAction<ItemData>) {
      state.items.map((item, index) => {
        if (item.id === payload.id) {
          state.items[index] = payload;
        }
        return state;
      });
    },
    createSavedList(state, { payload }: PayloadAction<ItemData>) {
      state.items.push(payload);
      document.location.href = `/prospects/${payload.id}`;
    },
    deleteSavedList(state, { payload }: PayloadAction<string>) {
      let deleteIndex = -1;
      state.items.map((item, index) => {
        if (item.id === payload) {
          deleteIndex = index;
        }
        return state;
      });
      state.items.splice(deleteIndex, 1);
    },
    setSavedListError(state, { payload }: PayloadAction<string>) {
      state.errors.push(payload);
      state.isError = true;
    },
  },
});

export default savedListSlice.reducer;
export const SavedListAction = savedListSlice.actions;
