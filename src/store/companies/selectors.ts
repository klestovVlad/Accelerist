import { RootState } from '../root-reducer';
import { FavoriteListDataItems, initialState } from './state';
import { createSelector } from 'reselect';

const selectFavoriteList = (state: RootState) => state.favoriteListSlice;

const selectItems = createSelector(selectFavoriteList, (data) => data.items);

const selectMeta = createSelector(selectFavoriteList, (data) => data.meta);

const selectLoadState = createSelector(
  selectFavoriteList,
  (data) => data.isLoading
);

export const getCompanyById = (id: string) =>
  createSelector(selectFavoriteList, (data) => {
    let company: FavoriteListDataItems = initialState.items[0];
    data.items.forEach((item) => {
      console.log(item.id, id, item.id === id);
      if (item.id === id) {
        company = item;
      }
    });
    return company;
  });

export const FavoriteListSelector = {
  selectItems,
  selectMeta,
  selectLoadState,
  getCompanyById,
};
