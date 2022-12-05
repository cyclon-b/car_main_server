import { Module } from '@nestjs/common';
import { FeedbackModule } from './features/feedback/feedback.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [SharedModule, FeedbackModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
