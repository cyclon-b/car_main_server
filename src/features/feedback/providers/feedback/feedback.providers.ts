import { Connection } from 'mongoose';
import { FeedBackSchema } from './../../schemas/feedback.schema';

export const feedbackProviders = [
  {
    provide: 'FEEDBACK_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Feedback', FeedBackSchema),
    inject: ['MONGO_CONNECTION'],
  },
];
