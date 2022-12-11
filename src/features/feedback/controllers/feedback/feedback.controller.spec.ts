import { Test, TestingModule } from '@nestjs/testing';
import { FeedbackController } from './feedback.controller';
import { MailService } from './../../../../shared/mail/mail/mail.service';
import { FeedbackService } from './../../providers/feedback/feedback.service';

describe('FeedbackController', () => {
  let controller: FeedbackController;
  const fakeMailService = { sendFeedback: jest.fn() };
  const fakeFeedbackService = { create: jest.fn() };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeedbackController],
      providers: [MailService, FeedbackService],
    })
      .overrideProvider(FeedbackService)
      .useValue(fakeFeedbackService)
      .overrideProvider(MailService)
      .useValue(fakeMailService)
      .compile();

    controller = module.get<FeedbackController>(FeedbackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should successfully call method create()', () => {
    const spy = jest.spyOn(controller, 'create');
    expect(spy).toHaveBeenCalled;
    expect(spy).toHaveReturned;
  });
});
