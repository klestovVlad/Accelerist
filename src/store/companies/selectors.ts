import { createSelector } from 'reselect';

import { RootState } from '../root-reducer';
import { CompaniesDataItems, initialState } from './state';

const selectCompanies = (state: RootState) => state.favoriteListSlice;

const selectItems = createSelector(selectCompanies, (data) => data.items);

const selectMeta = createSelector(selectCompanies, (data) => data.meta);

const selectLoadState = createSelector(selectCompanies, (data) => data.isLoading);

export const getCompanyById = (id: string) =>
  createSelector(selectCompanies, (data) => {
    let company: CompaniesDataItems = initialState.items[0];
    data.items.forEach((item) => {
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
