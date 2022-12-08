import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from 'process';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SWAGGER_CONFIG } from './utils/constants';
import helmet from 'helmet';
import {
  WinstonModule,
  utilities as nestWinstonModuleUtilities,
} from 'nest-winston';
import * as winston from 'winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.File({
          level: 'error',
          filename: '../logs/errors.log',
          maxsize: 100,
          zippedArchive: true,
        }),
        new winston.transports.Console({
          consoleWarnLevels: ['error', 'debug', 'warn', 'info'],
          format: winston.format.combine(
            nestWinstonModuleUtilities.format.nestLike('CarMainApp'),
          ),
        }),
      ],
    }),
  });
  app.use(helmet());

  if (!env?.IS_PRODUCTION) {
    const config = new DocumentBuilder()
      .setTitle(SWAGGER_CONFIG.title)
      .setDescription(SWAGGER_CONFIG.description)
      .setVersion(SWAGGER_CONFIG.version)
      .addTag(SWAGGER_CONFIG.tags)
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/swagger', app, document);
  }

  await app.listen(env?.APP_PORT || 3000);
}
bootstrap();
