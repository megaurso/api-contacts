import { Injectable } from '@nestjs/common';
import { ContactsRepository } from '../contacts.repository';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { UpdateContactDto } from '../../dto/update-contact.dto';
import { Contact } from '../../entities/contact.entity';

@Injectable()
export class ContactsInMemoryRepository implements ContactsRepository {
  private database: Contact[] = [];
  create(data: CreateContactDto): Contact | Promise<Contact> {
    throw new Error('Method not implemented.');
  }
  findall(): Promise<object | Contact[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Contact | Promise<Contact> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: UpdateContactDto): Contact | Promise<Contact> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): void | Promise<Contact> {
    throw new Error('Method not implemented.');
  }
}
