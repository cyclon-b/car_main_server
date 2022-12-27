import { MailerModule } from '@nestjs-modules/mailer';
import { Module, Logger } from '@nestjs/common';
import { MailService } from './mail/mail.service';
import { env } from 'process';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: env?.DEFAULT_SMTP_SERVER,
          port: env?.DEFAULT_SMTP_PORT,
          auth: {
            user: env?.DEFAULT_SMTP_EMAIL,
            pass: env?.SMTP_PASSWORD,
          },
        },
        defaults: {
          from: `"[FEEDBACK]" ${env?.DEFAULT_SMTP_EMAIL}`,
        },
      }),
    }),
  ],
  providers: [MailService, Logger],
  exports: [MailService],
})
export class MailModule {}
