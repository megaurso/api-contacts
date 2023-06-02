import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  IsArray,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User name',
    type: String,
    default: 'Bernardo Guimarães',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'User email',
    type: String,
    default: 'bernardo@gmail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'User password',
    type: String,
    default: '99887766',
  })
  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;

  @ApiProperty({
    description: 'Phone number',
    type: String,
    default: '62998745543',
  })
  @IsString()
  @IsNotEmpty()
  telephone: string;

  @ApiProperty({
    readOnly: true,
  })
  @IsArray()
  @IsOptional()
  contacts: string[];
}
