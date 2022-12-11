import * as mongoose from 'mongoose';

export const FeedBackSchema = new mongoose.Schema({
  email: {
    type: String,
    required: false,
  },
  type: String,
  text: String,
});
