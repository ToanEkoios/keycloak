import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class KeycloakGuard extends AuthGuard('keycloak') implements CanActivate {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
}