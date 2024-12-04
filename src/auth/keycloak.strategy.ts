import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-keycloak-oauth2-oidc';
import { Injectable } from '@nestjs/common';

@Injectable()
export class KeycloakStrategy extends PassportStrategy(Strategy, 'keycloak') {
  constructor() {
    super({
      clientID: process.env.KEYCLOAK_CLIENT_ID,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
      realm: process.env.KEYCLOAK_REALM,
      authServerURL: process.env.KEYCLOAK_AUTH_SERVER_URL,
      callbackURL: process.env.KEYCLOAK_CALLBACK_URL,
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: Function) {
    done(null, profile);
  }
}