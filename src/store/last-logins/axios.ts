import { ApiMap } from '../../api';

const { TeamApi } = ApiMap;

export const lastLoginsQuery = () => TeamApi.teamsControllerGetLastLogins();
