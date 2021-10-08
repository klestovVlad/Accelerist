import { createSelector } from 'reselect';

import { RootState } from '../root-reducer';
import { initialState, ItemData } from './state';

const selectSavedList = (state: RootState) => state.savedListReducer;

const selectItems = createSelector(selectSavedList, (data) => data.items);

const selectMeta = createSelector(selectSavedList, (data) => data.meta);

const selectLoadState = createSelector(selectSavedList, (data) => data.isLoading);

export const getItemById = (id: string) =>
  createSelector(selectSavedList, (data) => {
    let itemList: ItemData = initialState.items[0];
    data.items.forEach((item) => {
      if (item.id === id) {
        itemList = item;
      }
    });
    return itemList;
  });

export const SavedListSelector = {
  selectItems,
  selectMeta,
  selectLoadState,
  getItemById,
};
