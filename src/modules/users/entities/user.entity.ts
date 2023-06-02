import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export class User {
  id: string;
  name: string;
  @Exclude()
  password: string;
  email: string;
  telephone: string;
  date: string;
  contacts?: string[];

  constructor() {
    this.id = randomUUID();
    const options = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      locale: ptBR,
    };
    this.date = format(new Date(), 'P', options);
    this.contacts = [];
  }
}
