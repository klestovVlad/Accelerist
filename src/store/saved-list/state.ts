export interface Filters {
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
      )[];
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
  )[];
  gender?: 'male' | 'female' | 'both';
  q?: string;
  industry?: string[];
  deleteIds?: string[];
  csrFocusIds?: string[];
  affinities?: string[];
  location?: string[];
  totalAnnualContributors?: string;
  revenueMin?: number;
  revenueMax?: number;
}
export interface ItemData {
  id: string;
  name: string;
  filters: Filters;
  prospectsAvailable: number;
  createdAt: string;
  updatedAt: string;
  lastAuthor: {
    id: string;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    isAuthorized: boolean;
    imported: boolean;
    teamId: string | null;
    role: string | null;
    linkedinLink: string | null;
    isReceivingNotifications: boolean;
    avatarKey: string | null;
    loggedInAt: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  };
}

export interface SavedListData {
  items: ItemData[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: string;
    totalPages: number;
    currentPage: string;
  };
  isLoading: boolean;
  errors: string[];
  isError: boolean;
}

export const initialState: SavedListData = {
  items: [
    {
      id: '',
      name: '',
      filters: {},
      prospectsAvailable: 0,
      createdAt: '',
      updatedAt: '',
      lastAuthor: {
        id: '',
        email: '',
        firstName: null,
        lastName: null,
        isAuthorized: false,
        imported: false,
        teamId: '',
        role: '',
        linkedinLink: null,
        isReceivingNotifications: true,
        avatarKey: null,
        loggedInAt: '',
        createdAt: '',
        updatedAt: '',
        deletedAt: null,
      },
    },
  ],
  meta: {
    totalItems: 0,
    itemCount: 0,
    itemsPerPage: '0',
    totalPages: 0,
    currentPage: '0',
  },
  isLoading: true,
  errors: [],
  isError: false,
};

export interface SavedListRequest {
  page: number;
  limit: number;
  sort?: 'alphabet' | 'last-activity' | 'available';
}

export interface UpdateSavedList {
  id: string;
  name: string;
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
      )[];
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
  )[];
  gender?: 'male' | 'female' | 'both';
  q?: string;
  industry?: string[];
  deleteIds?: string[];
  csrFocusIds?: string[];
  affinities?: string[];
  location?: string[];
  totalAnnualContributors?: string;
  revenueMin?: number;
  revenueMax?: number;
}
