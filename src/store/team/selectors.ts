import { RootState } from '../root-reducer';
import { createSelector } from 'reselect';

const selectTeamData = (state: RootState) => state.teamSlice;

const selectData = createSelector(selectTeamData, (data) => data);

const selectOwner = createSelector(selectTeamData, (data) => data.owner);

const selectMembers = createSelector(selectTeamData, (data) => data.members);

export const TeamSelector = {
  selectData,
  selectOwner,
  selectMembers,
};
