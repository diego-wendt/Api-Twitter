import { IsEmail, IsString, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  user: string;

  @IsEmail()
  email: string;

  @IsUrl()
  photoUrl: string;
}
