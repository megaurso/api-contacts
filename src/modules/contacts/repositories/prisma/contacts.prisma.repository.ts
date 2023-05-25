import { Injectable } from '@nestjs/common/decorators';
import { ContactsRepository } from '../contacts.repository';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { UpdateContactDto } from '../../dto/update-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ContactsPrismaRepository implements ContactsRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateContactDto, userId: string): Promise<Contact> {
    const contacts = new Contact();
    Object.assign(contacts, {
      ...data,
    });

    const newContact = await this.prisma.contact.create({
      data: {
        date: contacts.date,
        email: contacts.email,
        id: contacts.id,
        name: contacts.name,
        telephone: contacts.telephone,
        userId,
      },
    });

    return newContact;
  }
  async findAll(): Promise<Contact[]> {
    const contacts = await this.prisma.contact.findMany();
    return contacts;
  }

  async findOne(id: string): Promise<Contact> {
    const contact = await this.prisma.contact.findUnique({
      where: { id },
    });

    return contact;
  }

  async findByEmail(email: string): Promise<Contact> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    return plainToInstance(Contact, user);
  }

  async update(id: string, data: UpdateContactDto): Promise<Contact> {
    const contact = await this.prisma.contact.update({
      where: { id },
      data: {
        email: data.email,
        name: data.name,
        telephone: data.telephone,
      },
    });
    return plainToInstance(Contact, contact);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.contact.delete({
      where: { id },
    });
  }
}
