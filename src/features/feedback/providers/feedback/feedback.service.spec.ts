import { Test, TestingModule } from '@nestjs/testing';
import { FeedbackService } from './feedback.service';
import { Observable } from 'rxjs';

describe('FeedbackService', () => {
  let service: FeedbackService;
  const fakeFeedbackModel = {
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FeedbackService,
        {
          provide: 'FEEDBACK_MODEL',
          useFactory: () => fakeFeedbackModel,
        },
      ],
    }).compile();

    service = module.get<FeedbackService>(FeedbackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call method create()', () => {
    const spy = jest.spyOn(service, 'create');
    expect(spy).toHaveBeenCalled;
    expect(spy).toHaveReturned;
  });
});
