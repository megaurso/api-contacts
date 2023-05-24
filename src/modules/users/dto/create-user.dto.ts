import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import { IsString, IsNotEmpty, IsEmail, MinLength, IsArray, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  telephone: string;

  @IsArray()
  @IsOptional()
  contacts: string[];
}
