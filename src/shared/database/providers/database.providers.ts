import * as mongoose from 'mongoose';
import { env } from 'process';

export const databaseProviders = [
  {
    provide: 'MONGO_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(env?.MONGO_CONNECTION_STRING),
  },
];
