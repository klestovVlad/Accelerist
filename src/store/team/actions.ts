import { TeamActionTypes } from './action-types';
import { createAction } from '@reduxjs/toolkit';

export const getTeamAction = createAction(TeamActionTypes.GET_TEAM);
