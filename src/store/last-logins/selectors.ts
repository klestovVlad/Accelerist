import { createSelector } from 'reselect';

import { RootState } from '../root-reducer';

const selectTeamData = (state: RootState) => state.lastLoginsSlice;

const selectData = createSelector(selectTeamData, (data) => data.data);

export const LastLoginsSelector = {
  selectData,
};
