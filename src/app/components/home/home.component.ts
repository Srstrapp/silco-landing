import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { WhatsAppService } from '@app/core/services/whatsapp.service';
import { isPlatformBrowser } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ButtonModule, CardModule]
})
export class HomeComponent implements AfterViewInit {
  constructor(
    private router: Router,
    private whatsappService: WhatsAppService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupParticleEffects();
      this.animateParagraph();
    }
  }

  private setupParticleEffects() {
    const container = document.querySelector('.particles-container') as HTMLElement;
    if (!container) return;

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle absolute rounded-full bg-cyan-400/20';
      particle.style.width = `${Math.random() * 4 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      container.appendChild(particle);
    }
  }

  private animateParagraph() {
    const paragraph = document.querySelector('.hero-section p') as HTMLElement;
    if (!paragraph) return;

    // Guardar el texto original
    const originalText = paragraph.textContent || '';
    paragraph.textContent = '';

    // Efecto de escritura
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < originalText.length) {
        paragraph.textContent += originalText.charAt(i);
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 50);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  contactWhatsApp() {
    this.whatsappService.sendMessage();
  }
}