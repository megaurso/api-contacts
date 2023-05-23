import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repositories';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.usersRepository.create(createUserDto);
    return user;
  }

  async findAll() {
    const users = await this.usersRepository.findall();
    return users;
  }

  async findOne(id: string) {
    const users = await this.usersRepository.findOne(id);
    return users;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const users = await this.usersRepository.update(id, updateUserDto);
    return users;
  }

  async remove(id: string) {
    await this.usersRepository.delete(id);
    return;
  }
}
