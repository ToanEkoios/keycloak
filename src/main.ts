import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonLoggerService } from './common/logger/winston-logger.service';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  try {
    console.log(`start app init`);

    if (!process.env.KEYCLOAK_AUTH_SERVER_URL) {
      throw new Error('Keycloak authServerURL is required');
    }
    console.log(`env: ${process.env.KEYCLOAK_AUTH_SERVER_URL}`);

    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe());

    const logger = app.get(WinstonLoggerService);
    app.useLogger(logger);

    await app.listen(3000);
    console.log(`app run with port 3000`);
  } catch (error) {
    console.error('Error starting the application', error);
    process.exit(1); // Exit the process with an error code
  }
}
bootstrap();