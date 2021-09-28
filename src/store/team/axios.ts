import { ApiMap } from '../../api';

const { TeamApi } = ApiMap;

export const teamQuery = () => TeamApi.teamsControllerGetTeam();
