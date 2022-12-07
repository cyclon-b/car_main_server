import * as mongoose from 'mongoose';
import { env } from 'process';

export const databaseProviders = [
  {
    provide: 'MONGO_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://car_admin:111@mongo:27017/car_main'),
  },
];
