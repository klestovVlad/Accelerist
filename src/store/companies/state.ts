export const initialState: FavoriteListData = {
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

export interface FavoriteListDataItems {
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

export interface FavoriteListData {
  items: FavoriteListDataItems[];
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

export interface FavoritesRequest {
  page: number;
  limit: number;
}
