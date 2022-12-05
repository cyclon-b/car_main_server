import { Module } from '@nestjs/common';
import { FeedbackController } from './controllers/feedback/feedback.controller';
import { FeedbackService } from './providers/feedback/feedback.service';

@Module({
  controllers: [FeedbackController],
  providers: [FeedbackService],
  exports: [FeedbackService],
})
export class FeedbackModule {}
