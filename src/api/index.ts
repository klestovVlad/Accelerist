import { AuthorizationApi } from './generated/api/authorization-api';
import { ApiAuthorization, baseUrl } from './service';

// import { СompaniesApi } from './generated/api/companies-api';
// import { SavedListApi } from './generated/api/saved-list-api';
// import { TeamApi } from './generated/api/team-api';
// import { UserApi } from './generated/api/user-api';

export const ApiMap = {
  AuthorizationApi: new AuthorizationApi(undefined, baseUrl, ApiAuthorization.instance),
};
