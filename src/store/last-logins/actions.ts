import { createAction } from '@reduxjs/toolkit';

import { LastLoginsActionTypes } from './action-types';

export const getLastLoginsAction = createAction(LastLoginsActionTypes.GET_LAST_LOGINS);
