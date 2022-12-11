import { ApiProperty } from '@nestjs/swagger';

enum FeedbackTypeEnum {
  Bug = 'Bug',
  Question = 'Question',
  Feature = 'Feature',
}

export class CreateFeedbackDto {
  @ApiProperty({
    required: false,
  })
  email?: string;

  @ApiProperty()
  type: FeedbackTypeEnum;

  @ApiProperty()
  text: string;
}
