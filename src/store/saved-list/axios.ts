import { ApiMap } from '../../api';

const { SavedListApi } = ApiMap;

export const savedListQuery = (
  page: number,
  limit: number,
  sort?: 'alphabet' | 'last-activity' | 'available'
) =>
  SavedListApi.savedListControllerProspects({
    page: page,
    limit: limit,
    sort: sort,
  });
