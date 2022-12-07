import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { lastValueFrom } from 'rxjs';
import { CreateFeedbackDto } from './../../dto/create-feedback.dto';
import { FeedbackService } from './../../providers/feedback/feedback.service';
@ApiTags('feedback')
@Controller('feedback')
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) {}

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
    return lastValueFrom(this.feedbackService.create(createFeedback));
  }
}
