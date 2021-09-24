import { createSelector } from 'reselect';

import { RootState } from '../root-reducer';

const selectFavoriteList = (state: RootState) => state.favoriteListSlice;

const selectItems = createSelector(selectFavoriteList, (data) => data.items);

const selectMeta = createSelector(selectFavoriteList, (data) => data.meta);

const selectLoadState = createSelector(selectFavoriteList, (data) => data.isLoading);

export const FavoriteListSelector = { selectItems, selectMeta, selectLoadState };
