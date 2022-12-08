import * as mongoose from 'mongoose';
import { env } from 'process';

export const databaseProviders = [
  {
    provide: 'MONGO_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(`mongodb://localhost:27017/car_main`),
  },
];
// `mongodb://${env?.MONGO_USER}:${env?.MONGO_PASSWORD}@mongo:27017/${env?.MONGO_DB_NAME}`,
