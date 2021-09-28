import { LastLoginsActionTypes } from './action-types';
import { createAction } from '@reduxjs/toolkit';

export const getLastLoginsAction = createAction(
  LastLoginsActionTypes.GET_LAST_LOGINS
);
