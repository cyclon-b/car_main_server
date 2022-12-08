import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';
import { env } from 'process';
import { CreateFeedbackDto } from './../../../features/feedback/dto/create-feedback.dto';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private logger: Logger,
  ) {}

  public sendFeedback(params: CreateFeedbackDto): void {
    const { email, type, text } = params;
    this.mailerService
      .sendMail({
        to: `${env?.DEFAULT_EMAIL} || mkinitcpio.feedback@outlook.com`,
        from: 'mkinitcpio.team@outlook.com',
        subject: `[FEEDBACK FROM APP] You have a new ${type}`,
        html: `
        <p>${email} highlighted a new  ${type}</p>
        <p>${text}</p>
        `,
      })
      .then(() => {
        this.logger.log('Mail sent');
      })
      .catch((e) => {
        this.logger.error(`Mail not sent ${e}`);
      });
  }
}
