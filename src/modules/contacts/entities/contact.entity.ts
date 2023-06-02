import { randomUUID } from 'crypto';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export class Contact {
  id: string;
  name: string;
  email: string;
  telephone: string;
  date: string;
  userId: string;

  constructor() {
    this.id = randomUUID();
    const options = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      locale: ptBR,
    };
    this.date = format(new Date(), 'P', options);
  }
}
