import { AuthorizationApi } from './generated/api/authorization-api';
import { CompaniesApi } from './generated/api/companies-api';
import { SavedListApi } from './generated/api/saved-list-api';
// import { TeamApi } from './generated/api/team-api';
// import { UserApi } from './generated/api/user-api';
// eslint-disable-next-line import/no-cycle
import Api, { baseUrl } from './service';

export const ApiMap = {
  AuthorizationApi: new AuthorizationApi(undefined, baseUrl, Api.instance),
  SavedListApi: new SavedListApi(undefined, baseUrl, Api.instance),
  CompaniesApi: new CompaniesApi(undefined, baseUrl, Api.instance),
};
