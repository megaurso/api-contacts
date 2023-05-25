import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
export class LoginDto {
  @ApiProperty({
    description: 'User email',
    type: String,
    default: 'email@email.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User password',
    type: String,
    default: '********',
  })
  @IsString()
  password: string;
}
