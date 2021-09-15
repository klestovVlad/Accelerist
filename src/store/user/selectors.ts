import { createSelector } from 'reselect';

import { RootState } from '../root-reducer';

const selectUser = (state: RootState) => state.userReducer;

const selectUserData = createSelector(selectUser, (data) => data.user);

const selectToken = createSelector(selectUser, (data) => data.accessToken);

export const UserSelector = {selectUserData, selectToken}
