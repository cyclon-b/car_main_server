import { Module } from '@nestjs/common';
import { MailModule } from './mail/mail.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [MailModule, DatabaseModule],
  exports: [MailModule, DatabaseModule],
})
export class SharedModule {}
