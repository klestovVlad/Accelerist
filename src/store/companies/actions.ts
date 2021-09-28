import { CompaniesActionTypes } from './action-types';
import { FavoritesRequest } from './state';
import { createAction } from '@reduxjs/toolkit';

export const getFavoritesAction = createAction<FavoritesRequest>(
  CompaniesActionTypes.GET_FAVORITES
);
