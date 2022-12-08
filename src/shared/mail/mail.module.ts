import { MailerModule } from '@nestjs-modules/mailer';
import { Module, Logger } from '@nestjs/common';
import { MailService } from './mail/mail.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp-mail.outlook.com',
        port: 587,
        auth: {
          user: 'mkinitcpio.team@outlook.com',
          pass: 'Kin11001Mk?',
        },
      },

      defaults: {
        from: '"[FEEDBACK]" <mkinitcpio.team@outlook.com>',
      },
    }),
  ],
  providers: [MailService, Logger],
  exports: [MailService],
})
export class MailModule {}
// 'smtp://mkinitcpio.team@outlook.com:Kin11001Mk?@smtp.office365.com:587'
