import { CompaniesActionTypes } from './action-types';
import { FavoritesRequest, LikeCompanyRequest } from './state';
import { createAction } from '@reduxjs/toolkit';

export const getFavoritesAction = createAction<FavoritesRequest>(
  CompaniesActionTypes.GET_FAVORITES
);

export const getCompaniesAction = createAction<FavoritesRequest>(
  CompaniesActionTypes.GET_COMPANIES
);

export const likeCompanyAction = createAction<LikeCompanyRequest>(
  CompaniesActionTypes.LIKE_COMPANY
);

export const deleteFromFavoritesAction = createAction<string>(
  CompaniesActionTypes.DELETE_FROM_FAVORITES
);
