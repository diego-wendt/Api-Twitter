import { IsString } from 'class-validator';

export class CreateTweetDto {
  @IsString()
  texto: string;
  @IsString()
  user: string;
  @IsString()
  data: string;
}
