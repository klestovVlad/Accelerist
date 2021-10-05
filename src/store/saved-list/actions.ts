import { SavedListActionTypes } from './action-types';
import { SavedListRequest, UpdateSavedList } from './state';
import { createAction } from '@reduxjs/toolkit';

export const getSavedListAction = createAction<SavedListRequest>(
  SavedListActionTypes.GET_SAVED_LIST
);

export const getOneSavedListAction = createAction<string>(
  SavedListActionTypes.GET_ONE_SAVED_LIST
);

export const updateSavedList = createAction<UpdateSavedList>(
  SavedListActionTypes.UPDATE_SAVED_LIST
);

export const deleteSavedList = createAction<string>(
  SavedListActionTypes.DELETE_SAVED_LIST
);
