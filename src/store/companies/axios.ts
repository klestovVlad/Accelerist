// eslint-disable-next-line import/no-cycle
import { ApiMap } from '../../api';

const { CompaniesApi } = ApiMap;

export const favoritesListQuery = (page: number, limit: number) =>
  CompaniesApi.companiesControllerGetFavorites({ page: page, limit: limit });

export const companiesQuery = (page: number, limit: number) =>
  CompaniesApi.companiesControllerGetCompanies({ page: page, limit: limit });

export const likeCompanyQuery = (id: string) =>
  CompaniesApi.companiesControllerLike({ id: id });

export const dislikeCompanyQuery = (id: string) =>
  CompaniesApi.companiesControllerDislike({ id: id });
