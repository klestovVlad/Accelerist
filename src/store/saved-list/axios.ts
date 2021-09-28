// eslint-disable-next-line import/no-cycle
import { ApiMap } from '../../api';

const { SavedListApi } = ApiMap;

export const savedListQuery = () =>
  SavedListApi.savedListControllerProspects({ page: 1, limit: 2 });
