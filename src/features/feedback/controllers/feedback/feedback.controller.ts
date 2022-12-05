import { Body, Controller, Post } from '@nestjs/common';
import { CreateFeedbackDto } from './../../dto/create-feedback.dto';

@Controller('feedback')
export class FeedbackController {
  @Post()
  public create(@Body() createFeedback: CreateFeedbackDto) {
    return createFeedback;
  }
}
