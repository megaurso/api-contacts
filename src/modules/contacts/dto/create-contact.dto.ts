import { IsEmail, IsNotEmpty, IsString, minLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
  @ApiProperty({
    description: 'Contact name',
    type: String,
    default: 'Rogerio Silva',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Contact email',
    type: String,
    default: 'rogerio@hotmail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Phone number',
    type: String,
    default: '81997872341',
  })
  @IsString()
  @IsNotEmpty()
  telephone: string;
}
