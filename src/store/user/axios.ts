import { ApiMap } from '../../api';

const { AuthorizationApi } = ApiMap;

type AuthenticationData = {
  email: string;
  password: string;
};

export const signInQuery = (UserData: AuthenticationData) =>
  AuthorizationApi.authControllerSignIn({ signInDto: UserData });

export const signUpQuery = (UserData: AuthenticationData) =>
  AuthorizationApi.authControllerSignUp({ signUpDto: UserData });
