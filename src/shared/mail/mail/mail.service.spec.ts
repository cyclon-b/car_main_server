import { MailerService } from '@nestjs-modules/mailer';
import { Logger } from '@nestjs/common/services';
import { Test, TestingModule } from '@nestjs/testing';
import { MailService } from './mail.service';

describe('MailService', () => {
  let service: MailService;
  const fakeMailerService = { sendMail: jest.fn() };
  const fakeLogger = { log: jest.fn(), error: jest.fn() };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailService, MailerService, Logger],
    })
      .overrideProvider(MailerService)
      .useValue(fakeMailerService)
      .overrideProvider(Logger)
      .useValue(fakeLogger)
      .compile();

    service = module.get<MailService>(MailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should successfully call sendFeedback() method', () => {
    const spy = jest.spyOn(service, 'sendFeedback');
    expect(spy).toHaveBeenCalled;
    expect(spy).toHaveReturned;
  });
});
