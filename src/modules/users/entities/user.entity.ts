import { randomUUID } from 'crypto';

export class User {
  id: string;
  name: string;
  password: string;
  email: string;
  date: string;

  constructor() {
    this.id = randomUUID();
    this.date = new Date().toDateString();
  }
}
