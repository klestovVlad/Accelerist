import { createAction } from '@reduxjs/toolkit';

import { CompaniesActionTypes } from './action-types';
import { FilterRequest, LikeCompanyRequest } from './state';

export const getFavoritesAction = createAction<FilterRequest>(
  CompaniesActionTypes.GET_FAVORITES,
);

export const getCompaniesAction = createAction<FilterRequest>(
  CompaniesActionTypes.GET_COMPANIES,
);

export const likeCompanyAction = createAction<LikeCompanyRequest>(
  CompaniesActionTypes.LIKE_COMPANY,
);

export const deleteFromFavoritesAction = createAction<string>(
  CompaniesActionTypes.DELETE_FROM_FAVORITES,
);
