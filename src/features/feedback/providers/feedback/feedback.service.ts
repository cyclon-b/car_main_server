import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { FeedBackModel } from './../../models/feedback.model';
import { CreateFeedbackDto } from './../../dto/create-feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(
    @Inject('FEEDBACK_MODEL') private feedbackModel: Model<FeedBackModel>,
  ) {}

  public create(createFeedbackDto: CreateFeedbackDto): Promise<FeedBackModel> {
    const createdFeedback = new this.feedbackModel(createFeedbackDto);
    return createdFeedback.save();
  }
}
