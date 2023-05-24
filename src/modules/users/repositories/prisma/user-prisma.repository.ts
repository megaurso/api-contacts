import { User } from './../../entities/user.entity';
import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users.repositories';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UsersPrismaRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateUserDto): Promise<User> {
    const user = new User();
    Object.assign(user, {
      ...data,
    });
    const newUser = await this.prisma.user.create({
      data: {
        date: user.date,
        email: user.email,
        id: user.id,
        name: user.name,
        password: user.password,
        telephone: user.telephone,
      },
    });

    return plainToInstance(User, newUser);
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      include: {
        contacts: true,
      },
    });

    return plainToInstance(User, users);
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return plainToInstance(User, user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    return plainToInstance(User, user);
  }

  async update(id: string, userData: UpdateUserDto): Promise<User> {
    return new User();
    // const user = await this.prisma.user.update({
    //   where: { id },
    //   data: data: {
    //     date: user.date,
    //     email: user.email,
    //     id: user.id,
    //     name: user.name,
    //     password: user.password,
    //     telephone: user.telephone,
    //   },
    // });
    // return plainToInstance(User, user);
  }

  async delete(id: string): Promise<User | void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }
}
