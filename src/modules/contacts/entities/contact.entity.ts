import { randomUUID } from 'crypto';

export class Contact {
  id: string;
  name: string;
  email: string;
  telephone: string;
  date: string;
  userId: string;

  constructor() {
    this.id = randomUUID();
    this.date = new Date().toDateString();
  }
}
