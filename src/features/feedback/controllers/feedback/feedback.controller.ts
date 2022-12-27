import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateFeedbackDto } from './../../dto/create-feedback.dto';
import { FeedbackService } from './../../providers/feedback/feedback.service';
import { MailService } from './../../../../shared/mail/mail/mail.service';

@ApiTags('feedback')
@Controller('api/feedback')
export class FeedbackController {
  constructor(
    private feedbackService: FeedbackService,
    private mail: MailService,
  ) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The feedback has been successfully created.',
  })
  @ApiResponse({
    status: 500,
    description: 'Something went wrong, try it later',
  })
  public create(@Body() createFeedback: CreateFeedbackDto) {
    return this.mail.sendFeedback(createFeedback).then(() => {
      return this.feedbackService.create(createFeedback);
    });
  }
}
