export const initialState: TeamData = {
  id: '',
  ownerId: '',
  catalistId: null,
  organizationName: null,
  logoKey: null,
  numberConstituents: null,
  email: null,
  annualTotalContributions: null,
  aieldActivity: null,
  twitterLink: null,
  twitterHandle: null,
  linkedinLink: null,
  contactName: null,
  contactPhone: null,
  contactWebsite: null,
  goalAlignment: [],
  typesOfInvestment: null,
  address: null,
  state: null,
  city: null,
  zip: null,
  affinities: null,
  primaryMissionFocus: null,
  secondaryMissionFocus: null,
  employeeEngagementOpportunities: false,
  opportunities: null,
  impactStatements: null,
  income: null,
  age: null,
  brands: null,
  ethnicity: null,
  genders: null,
  purchase: null,
  nonprofit: null,
  interests: null,
  affiliation: null,
  searchCount: 0,
  pitchCount: 0,
  owner: {
    id: '',
    email: '',
    firstName: null,
    lastName: null,
    isAuthorized: false,
    imported: false,
    teamId: '',
    role: '',
    linkedinLink: null,
    isReceivingNotifications: false,
    avatarKey: null,
    loggedInAt: null,
    createdAt: null,
    updatedAt: null,
    deletedAt: null,
  },
  members: [
    {
      id: '',
      email: '',
      firstName: null,
      lastName: null,
      isAuthorized: false,
      imported: false,
      teamId: '',
      role: '',
      linkedinLink: null,
      isReceivingNotifications: false,
      avatarKey: null,
      loggedInAt: null,
      createdAt: null,
      updatedAt: null,
      deletedAt: null,
    },
  ],
  charitablePartners: [],
  isLoading: false,
  isError: false,
  errors: [],
};

export interface MemberInfo {
  id: string | null;
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
  loggedInAt: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  deletedAt: string | null;
}

export interface TeamData {
  id: string | null;
  ownerId: string | null;
  catalistId: string | null;
  organizationName: string | null;
  logoKey: string | null;
  numberConstituents: string | null;
  email: string | null;
  annualTotalContributions: string | null;
  aieldActivity: string | null;
  twitterLink: string | null;
  twitterHandle: string | null;
  linkedinLink: string | null;
  contactName: string | null;
  contactPhone: string | null;
  contactWebsite: string | null;
  goalAlignment: string[];
  typesOfInvestment: string | null;
  address: string | null;
  state: string | null;
  city: string | null;
  zip: string | null;
  affinities: string | null;
  primaryMissionFocus: string | null;
  secondaryMissionFocus: string | null;
  employeeEngagementOpportunities: boolean;
  opportunities: string | null;
  impactStatements: string | null;
  income: string | null;
  age: number | null;
  brands: string | null;
  ethnicity: string | null;
  genders: string | null;
  purchase: string | null;
  nonprofit: string | null;
  interests: string | null;
  affiliation: string | null;
  searchCount: number;
  pitchCount: number;
  owner: MemberInfo;
  members: MemberInfo[];
  charitablePartners: string[];
  isLoading: boolean;
  isError: boolean;
  errors: string[];
}
