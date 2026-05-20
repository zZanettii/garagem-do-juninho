import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WppService {
  readonly whatsappNumber = '5513991624968';

  openWhatsapp(name?: string) {
    let nameFormatted: string = '';
    let message: string = '';

    if (name && name.length > 2) {
      nameFormatted = name.charAt(0).toUpperCase() + name.slice(1);
      message = `Olá, meu nome é ${nameFormatted}, gostaria de agendar um serviço.`;
    } else {
      message = `Olá, gostaria de agendar um serviço.`;
    }

    const url = `https://wa.me/${this.whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
  }
}
