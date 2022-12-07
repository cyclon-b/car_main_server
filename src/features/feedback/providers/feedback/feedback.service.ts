import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { FeedBackModel } from './../../models/feedback.model';
import { CreateFeedbackDto } from './../../dto/create-feedback.dto';
import { from, Observable } from 'rxjs';

@Injectable()
export class FeedbackService {
  constructor(
    @Inject('FEEDBACK_MODEL') private feedbackModel: Model<FeedBackModel>,
  ) {}

  create(createFeedbackDto: CreateFeedbackDto): Observable<FeedBackModel> {
    const createdFeedback = new this.feedbackModel(createFeedbackDto);
    return from(createdFeedback.save());
  }
}
