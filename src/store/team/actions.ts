import { createAction } from '@reduxjs/toolkit';

import { TeamActionTypes } from './action-types';

export const getTeamAction = createAction(TeamActionTypes.GET_TEAM);
