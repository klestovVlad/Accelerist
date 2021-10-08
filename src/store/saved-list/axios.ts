import { ApiMap } from '../../api';

const { SavedListApi } = ApiMap;

export const savedListQuery = (
  page: number,
  limit: number,
  sort?: 'alphabet' | 'last-activity' | 'available',
) =>
  SavedListApi.savedListControllerProspects({
    page: page,
    limit: limit,
    sort: sort,
  });

export const getOneSavedListQuery = (id: string) =>
  SavedListApi.savedListControllerProspect({ id: id });

export const updateSavedListQuery = (
  id: string,
  name: string,
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
  SavedListApi.savedListControllerUpdateProspect({
    id: id,
    updateSavedListDto: {
      filters: {
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
      },
      prospectsAvailable: 100,
      name: name,
    },
  });

export const deleteSavedListQuery = (id: string) =>
  SavedListApi.savedListControllerDeleteProspect({ id: id });

export const createSavedListQuery = (
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
  SavedListApi.savedListControllerCreateProspect({
    createSavedListDto: {
      filters: {
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
      },
      prospectsAvailable: 100,
    },
  });
