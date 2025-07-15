import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { WhatsAppService } from '@app/core/services/whatsapp.service';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CardModule, ButtonModule]
})
export class HomeComponent implements AfterViewInit {
  constructor(
    private router: Router,
    private whatsappService: WhatsAppService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initAnimations();
    }
  }

  private initAnimations() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);

      // Animación para elementos con atributo data-animate
      gsap.utils.toArray('[data-animate]').forEach((element: any) => {
        gsap.from(element, {
          opacity: 0,
          y: element.dataset.direction === 'bottom' ? 50 : -50,
          duration: 0.8,
          delay: parseFloat(element.dataset.delay) || 0,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
          }
        });
      });
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  contactWhatsApp() {
    this.whatsappService.sendMessage('Me interesan sus servicios');
  }
}
