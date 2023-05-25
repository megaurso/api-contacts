import { Injectable } from '@nestjs/common';
import { ContactsRepository } from '../contacts.repository';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { UpdateContactDto } from '../../dto/update-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ContactsInMemoryRepository implements ContactsRepository {
  private database: Contact[] = [];
  create(data: CreateContactDto, userId: string): Contact | Promise<Contact> {
    const newContact = new Contact();
    Object.assign(newContact, {
      ...data,
      userId: userId,
    });

    this.database.push(newContact);

    return newContact;
  }
  findAll(): Contact[] | Promise<Contact[]> {
    return plainToInstance(Contact, this.database);
  }
  findOne(id: string): Contact | Promise<Contact> {
    const contact = this.database.find((contact) => contact.id === id);
    return contact;
  }
  findByEmail(email: string): Contact | Promise<Contact> {
    const user = this.database.find((user) => user.email === email);
    return plainToInstance(Contact, user);
  }
  update(id: string, data: UpdateContactDto): Contact | Promise<Contact> {
    const contactIndex = this.database.findIndex(
      (contact) => contact.id === id,
    );
    this.database[contactIndex] = {
      ...this.database[contactIndex],
      ...data,
    };
    return plainToInstance(Contact, this.database[contactIndex]);
  }
  async delete(id: string): Promise<void | Contact> {
    const contactIndex = this.database.findIndex(
      (contact) => (contact.id = id),
    );
    this.database.splice(contactIndex, 1);
  }
}
