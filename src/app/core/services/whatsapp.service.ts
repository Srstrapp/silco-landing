import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsAppService {
  private phoneNumber = signal('+5491112345678');
  private defaultMessage = signal('Hola, estoy interesado en sus servicios');

  updatePhoneNumber(newNumber: string): void {
    this.phoneNumber.set(newNumber);
  }

  updateDefaultMessage(newMessage: string): void {
    this.defaultMessage.set(newMessage);
  }

  sendMessage(customMessage?: string): void {
    const message = encodeURIComponent(customMessage || this.defaultMessage());
    const url = `https://wa.me/${this.phoneNumber()}?text=${message}`;
    window.open(url, '_blank');
  }
}