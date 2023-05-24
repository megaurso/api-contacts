import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contacts.repository';
import { UsersRepository } from '../users/repositories/users.repositories';

@Injectable()
export class ContactsService {
  constructor(private contactRepository: ContactsRepository) {}
  async create(createContactDto: CreateContactDto) {
    const { email } = createContactDto;

    const existingContact = await this.contactRepository.findOne(email);
    if (existingContact) {
      throw new ConflictException('Email already exists!');
    }
    const contact = await this.contactRepository.create(createContactDto);
    return contact;
  }

  async findAll() {
    const contact = await this.contactRepository.findAll();
    return contact;
  }

  async findOne(id: string) {
    const contact = await this.contactRepository.findOne(id);
    if (!contact) {
      throw new NotFoundException('User not found!');
    }
    return contact;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const findUser = await this.contactRepository.findOne(id);
    if (!findUser) {
      throw new NotFoundException('User not found!');
    }
    const user = await this.contactRepository.update(id, updateContactDto);

    return user;
  }

  async remove(id: string) {
    const contact = await this.contactRepository.findOne(id);
    if (!contact) {
      throw new NotFoundException('Contact not found!');
    }
    await this.contactRepository.delete(id);
    return;
  }
}
