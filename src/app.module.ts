import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FeedbackModule } from './features/feedback/feedback.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        // Comment all unnecessary strings
        // Uncomment this string for your production env
        // 'env/.env.production',
        // Uncomment this string for start docker with swagger
        // 'env/.env.development',
        // Uncomment this string for local development with external mongo without docker
        // 'env/.env.development.local',
      ],
      isGlobal: true,
      expandVariables: true,
    }),
    SharedModule,
    FeedbackModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
