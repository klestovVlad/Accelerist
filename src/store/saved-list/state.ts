export interface SavedListData {
  items: [
    {
      id: string;
      name: string;
      filters: {
        q: string;
        gender: string;
      };
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
  ];
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
      filters: {
        q: '',
        gender: '',
      },
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
