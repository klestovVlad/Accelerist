import { createSelector } from 'reselect'

import { RootState } from '../root-reducer'

const selectUser = (state: RootState) => state.userReducer

const selectUserData = createSelector(selectUser, (data) => data.user)

const selectToken = createSelector(selectUser, (data) => data.accessToken)

const selectLoadState = createSelector(selectUser, (data) => data.isLoading)

export const UserSelector = { selectUserData, selectToken, selectLoadState }
