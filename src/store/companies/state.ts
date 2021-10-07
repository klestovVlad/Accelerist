export const initialState: CompaniesData = {
  items: [
    {
      id: '',
      zoomInfoId: null,
      name: '',
      logo: null,
      ticker: null,
      parentCompany: null,
      phone: '',
      fax: '',
      website: '',
      city: '',
      street: '',
      state: '',
      zipCode: '',
      country: '',
      continent: null,
      productsBrandDescription: null,
      descriptionList: '',
      revenueRange: '',
      employeeRange: '',
      twitterHandle: null,
      socialMediaUrls: null,
      competitors: null,
      subUnitIndustries: null,
      primaryIndustry: [],
      industries: null,
      revenue: '',
      employeeCount: 0,
      annualContributions: null,
      cashContributions: null,
      inKindContributions: null,
      employeeContributions: null,
      parentId: '',
      parentName: null,
      type: null,
      sdgGoals: [],
      genders: null,
      income: null,
      age: null,
      ethnicity: null,
      nonprofit: null,
      purchase: null,
      affiliation: null,
      brands: null,
      interests: null,
      typesOfInvestment: null,
      errorLoadZoomInfo: null,
      charitablePartners: [],
      statusZoomInfo: '',
      loadZoomInfoDate: null,
      errorLoadZoomInfoDate: null,
      partnershipLink: null,
      employeeEngagementOpportunities: false,
      similarCompanies: [],
      favoriteCompanies: [
        {
          id: '',
          companyId: '',
          userId: '',
        },
      ],
      score: null,
      like: false,
      crsFocus: [],
    },
  ],
  meta: {
    totalItems: 0,
    itemCount: 0,
    itemsPerPage: '',
    totalPages: 0,
    currentPage: '',
  },
  isLoading: false,
  isError: false,
  errors: [],
};

export interface CompaniesDataItems {
  id: string;
  zoomInfoId: string | null;
  name: string;
  logo: string | null;
  ticker: string | null;
  parentCompany: string | null;
  phone: string;
  fax: string;
  website: string;
  city: string;
  street: string;
  state: string;
  zipCode: string;
  country: string;
  continent: string | null;
  productsBrandDescription: string | null;
  descriptionList: string;
  revenueRange: string;
  employeeRange: string;
  twitterHandle: string | null;
  socialMediaUrls: string | null;
  competitors: string | null;
  subUnitIndustries: string | null;
  primaryIndustry: string[];
  industries: string | null;
  revenue: string;
  employeeCount: number;
  annualContributions: string | null;
  cashContributions: string | null;
  inKindContributions: string | null;
  employeeContributions: string | null;
  parentId: string;
  parentName: string | null;
  type: string | null;
  sdgGoals: string[];
  genders: string | null;
  income: string | null;
  age: string | null;
  ethnicity: string | null;
  nonprofit: string | null;
  purchase: string | null;
  affiliation: string | null;
  brands: string | null;
  interests: string | null;
  typesOfInvestment: string | null;
  errorLoadZoomInfo: string | null;
  charitablePartners: string[];
  statusZoomInfo: string;
  loadZoomInfoDate: string | null;
  errorLoadZoomInfoDate: string | null;
  partnershipLink: string | null;
  employeeEngagementOpportunities: boolean;
  similarCompanies: string[];
  favoriteCompanies: [
    {
      id: string;
      companyId: string;
      userId: string;
    }
  ];
  score: string | null;
  like: boolean;
  crsFocus: string[];
}

export interface CompaniesData {
  items: CompaniesDataItems[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: string;
    totalPages: number;
    currentPage: string;
  };
  isLoading: boolean;
  isError: boolean;
  errors: string[];
}

export interface FilterRequest {
  page: number;
  limit: number;
  ethnicities?: string[];
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

export interface LikeCompanyRequest {
  id: string;
  like: boolean;
}
