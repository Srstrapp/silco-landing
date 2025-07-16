import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhatsAppService {
  private phoneNumber = signal('');
  private defaultMessage = signal('');

  constructor(private http: HttpClient) {
    this.loadConfig();
  }

  private loadConfig(): void {
    this.http.get<any>('assets/config/config.json').pipe(
      tap(config => {
        this.phoneNumber.set(config.whatsapp.phoneNumber);
        this.defaultMessage.set(config.whatsapp.defaultMessage);
      }),
      catchError(error => {
        console.error('Error loading config:', error);
        return of(null);
      })
    ).subscribe();
  }

  updatePhoneNumber(newNumber: string): void {
    this.phoneNumber.set(newNumber);
  }

  updateDefaultMessage(newMessage: string): void {
    this.defaultMessage.set(newMessage);
  }

  sendMessage(customMessage?: string): void {
    if (!this.phoneNumber()) {
      console.error('Phone number not loaded');
      return;
    }

    const message = encodeURIComponent(customMessage || this.defaultMessage());
    const url = `https://wa.me/${this.phoneNumber()}?text=${message}`;
    window.open(url, '_blank');
  }
}