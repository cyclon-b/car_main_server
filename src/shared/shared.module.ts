import { Logger, Module } from '@nestjs/common';
import { MailModule } from './mail/mail.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [MailModule, DatabaseModule],
  providers: [Logger],
  exports: [MailModule, DatabaseModule, Logger],
})
export class SharedModule {}
