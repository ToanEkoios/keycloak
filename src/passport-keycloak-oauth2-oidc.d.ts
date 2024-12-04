
declare module 'passport-keycloak-oauth2-oidc' {
  import { Strategy as PassportStrategy } from 'passport';
  import { Request } from 'express';

  interface StrategyOptions {
    clientID: string;
    clientSecret: string;
    realm: string;
    authServerURL: string;
    callbackURL: string;
  }

  class Strategy extends PassportStrategy {
    constructor(options: StrategyOptions, verify: (accessToken: string, refreshToken: string, profile: any, done: Function) => void);
  }

  export { Strategy };
}