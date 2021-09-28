import { RootState } from '../root-reducer';
import { createSelector } from 'reselect';

const selectTeamData = (state: RootState) => state.lastLoginsSlice;

const selectData = createSelector(selectTeamData, (data) => data);

export const LastLoginsSelector = {
  selectData,
};
