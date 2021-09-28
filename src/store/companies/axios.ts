// eslint-disable-next-line import/no-cycle
import { ApiMap } from '../../api';

const { CompaniesApi } = ApiMap;

export const favoritesListQuery = (limit: number) =>
  CompaniesApi.companiesControllerGetFavorites({ page: 1, limit: limit });
