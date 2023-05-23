import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class User {
  id: string;
  name: string;
  @Exclude()
  password: string;
  email: string;
  telephone: string;
  date: string;

  constructor() {
    this.id = randomUUID();
    this.date = new Date().toDateString();
  }
}
