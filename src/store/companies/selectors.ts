import { RootState } from '../root-reducer';
import { FavoriteListDataItems, initialState } from './state';
import { createSelector } from 'reselect';

const selectCompanies = (state: RootState) => state.favoriteListSlice;

const selectItems = createSelector(selectCompanies, (data) => data.items);

const selectMeta = createSelector(selectCompanies, (data) => data.meta);

const selectLoadState = createSelector(
  selectCompanies,
  (data) => data.isLoading
);

export const getCompanyById = (id: string) =>
  createSelector(selectCompanies, (data) => {
    let company: FavoriteListDataItems = initialState.items[0];
    data.items.forEach((item) => {
      console.log(item.id, id, item.id === id);
      if (item.id === id) {
        company = item;
      }
    });
    return company;
  });

export const CompaniesSelector = {
  selectItems,
  selectMeta,
  selectLoadState,
  getCompanyById,
};
