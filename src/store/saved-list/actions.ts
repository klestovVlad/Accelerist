import { SavedListActionTypes } from './action-types';
import { SavedListRequest } from './state';
import { createAction } from '@reduxjs/toolkit';

export const getSavedListAction = createAction<SavedListRequest>(
  SavedListActionTypes.GET_SAVED_LIST
);
