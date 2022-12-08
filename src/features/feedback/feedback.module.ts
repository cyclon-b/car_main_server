import { Module } from '@nestjs/common';
import { FeedbackController } from './controllers/feedback/feedback.controller';
import { FeedbackService } from './providers/feedback/feedback.service';
import { feedbackProviders } from './providers/feedback/feedback.providers';
import { DatabaseModule } from './../../shared/database/database.module';
import { SharedModule } from './../../shared/shared.module';

@Module({
  imports: [DatabaseModule, SharedModule],
  controllers: [FeedbackController],
  providers: [FeedbackService, ...feedbackProviders],
  exports: [FeedbackService, ...feedbackProviders],
})
export class FeedbackModule {}
