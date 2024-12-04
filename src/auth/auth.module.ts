import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { KeycloakStrategy } from './keycloak.strategy';

@Module({
  providers: [AuthService, KeycloakStrategy],
  exports: [AuthService],
})
export class AuthModule {}