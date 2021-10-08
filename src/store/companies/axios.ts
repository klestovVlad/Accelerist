import { ApiMap } from '../../api';

const { CompaniesApi } = ApiMap;

export const favoritesListQuery = (page: number, limit: number) =>
  CompaniesApi.companiesControllerGetFavorites({ page: page, limit: limit });

export const companiesQuery = (
  page: number,
  limit: number,
  income?:
    | (
        | '$100K - $124K'
        | '$125K or More'
        | '$20K - $29K'
        | '$30K - $39K'
        | '$40K - $49K'
        | '$50K - $74K'
        | '$75K - $99K'
        | 'Less than $20K'
      )[],
  ageRanges?: (
    | '18-20'
    | '21-25'
    | '26-30'
    | '31-35'
    | '36-40'
    | '41-45'
    | '46-50'
    | '51-55'
    | '56-60'
    | '61-65'
    | '66-70'
    | '71-75'
    | '75 +'
  )[],
  gender?: 'male' | 'female' | 'both',
  q?: string,
  industry?: string[],
  deleteIds?: string[],
  csrFocusIds?: string[],
  affinities?: string[],
  location?: string[],
  totalAnnualContributors?: string,
  revenueMin?: number,
  revenueMax?: number,
) =>
  CompaniesApi.companiesControllerGetCompanies({
    page: page,
    limit: limit,
    income: income,
    ageRanges: ageRanges,
    gender: gender,
    q: q,
    industry: industry,
    deleteIds: deleteIds,
    csrFocusIds: csrFocusIds,
    affinities: affinities,
    location: location,
    totalAnnualContributors: totalAnnualContributors,
    revenueMax: revenueMax,
    revenueMin: revenueMin,
  });

export const likeCompanyQuery = (id: string) =>
  CompaniesApi.companiesControllerLike({ id: id });

export const dislikeCompanyQuery = (id: string) =>
  CompaniesApi.companiesControllerDislike({ id: id });
