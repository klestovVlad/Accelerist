import { createSelector } from 'reselect'

import { RootState } from '../root-reducer'

const selectSavedList = (state: RootState) => state.savedListReducer

const selectItems = createSelector(selectSavedList, (data) => data.items)

const selectMeta = createSelector(selectSavedList, (data) => data.meta)

const selectLoadState = createSelector(
  selectSavedList,
  (data) => data.isLoading
)

export const SavedListSelector = { selectItems, selectMeta, selectLoadState }
