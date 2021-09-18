import { RecoursesServerConfig } from './../app/config/servers.config';
export const environment = {
  production: true,
  apiUrl: RecoursesServerConfig.PRODUCTION_APIs_URL,
  version: 'Allam-0.0.1',
  disableLogs: true
};
