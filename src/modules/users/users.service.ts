import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repositories';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
  async create(createUserDto: CreateUserDto) {
    const findUser = await this.usersRepository.findByEmail(
      createUserDto.email,
    );
    if (findUser) {
      throw new ConflictException('User already exists!');
    }
    const user = await this.usersRepository.create(createUserDto);
    return user;
  }

  async findAll() {
    const users = await this.usersRepository.findall();
    return users;
  }

  async findOne(id: string) {
    const users = await this.usersRepository.findOne(id);
    if (!users) {
      throw new NotFoundException('User not found!');
    }
    return users;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const findUser = await this.usersRepository.findOne(id);
    if (!findUser) {
      throw new NotFoundException('User not found!');
    }
    const user = await this.usersRepository.update(id, updateUserDto);

    return user;
  }

  async remove(id: string) {
    const user = await this.usersRepository.delete(id);
    if (!user) {
      throw new NotFoundException('User not found!');
    }
    return;
  }
}
