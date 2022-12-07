import { Module } from '@nestjs/common';
import { FeedbackController } from './controllers/feedback/feedback.controller';
import { FeedbackService } from './providers/feedback/feedback.service';
import { feedbackProviders } from './providers/feedback/feedback.providers';
import { DatabaseModule } from './../../shared/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FeedbackController],
  providers: [FeedbackService, ...feedbackProviders],
  exports: [FeedbackService, ...feedbackProviders],
})
export class FeedbackModule {}
