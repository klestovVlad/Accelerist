export interface UserData {
  accessToken: string;
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    isAuthorized: boolean;
    imported: boolean;
    teamId: string;
    role: string;
    linkedinLink: boolean;
    isReceivingNotifications: boolean;
    avatarKey: string;
    loggedInAt: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
  };
  isLoading: boolean;
}

export const initialState: UserData = {
  accessToken: '',
  user: {
    id: 0,
    email: '',
    firstName: '',
    lastName: '',
    isAuthorized: false,
    imported: false,
    teamId: '',
    role: '',
    linkedinLink: false,
    isReceivingNotifications: false,
    avatarKey: '',
    loggedInAt: '',
    createdAt: '',
    updatedAt: '',
    deletedAt: '',
  },
  isLoading: false,
};

export interface SignRequest {
  email: string;
  password: string;
}
