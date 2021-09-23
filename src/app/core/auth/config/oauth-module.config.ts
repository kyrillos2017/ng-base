import { RecoursesServerConfig } from 'src/app/config/servers.config';
import { OAuthModuleConfig } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';


export const authModuleConfig: OAuthModuleConfig = {
  resourceServer: {
    allowedUrls: [environment.apiUrl],
    sendAccessToken: true,
  }
};
