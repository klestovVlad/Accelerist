export interface LastLoginInfo {
  id: string | null;
  userId: string | null;
  loggedInAt: string | null;
  user: {
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
    deletedAt: null;
  };
}
export interface LastLoginInfoData {
  data: LastLoginInfo[];
  isLoading: boolean;
  isError: boolean;
  errors: string[];
}

export const initialState: LastLoginInfoData = {
  data: [
    {
      id: '',
      userId: '',
      loggedInAt: '',
      user: {
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
    },
  ],
  isError: false,
  isLoading: false,
  errors: [],
};
