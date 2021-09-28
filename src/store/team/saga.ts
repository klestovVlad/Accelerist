import { TeamActionTypes } from './action-types';
import { teamQuery } from './axios';
import { TeamAction } from './slice';
import { call, put, takeLatest } from 'redux-saga/effects';

export function* getTeam() {
  try {
    yield put(TeamAction.setTeamLoading(true));
    const { data } = yield call(teamQuery);
    yield put(TeamAction.setTeamData(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(TeamAction.setTeamError(e.message));
    }
  } finally {
    yield put(TeamAction.setTeamLoading(false));
  }
}

export function* teamDataWatcher() {
  yield takeLatest(TeamActionTypes.GET_TEAM, getTeam);
}
