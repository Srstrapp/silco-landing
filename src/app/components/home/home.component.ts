import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { WhatsAppService } from '@app/core/services/whatsapp.service';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

// Registro global de plugins GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.createParticleEffects();
      this.setupAnimations();
      this.animateTitle();
      this.animateIcons();
      this.initButtonEffects();
    }
  }

  private createParticleEffects() {
    const particleContainer = document.querySelector('.particles-container');
    if (!particleContainer) return;

    // Crear partículas dinámicas
    for (let i = 0; i < 60; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle absolute rounded-full bg-cyan-400/50';
      particle.style.width = `${Math.random() * 6 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particleContainer.appendChild(particle);

      // Animación GSAP para cada partícula
      gsap.to(particle, {
        x: `${(Math.random() - 0.5) * 100}px`,
        y: `${(Math.random() - 0.5) * 100}px`,
        duration: Math.random() * 10 + 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Efecto de parpadeo
      gsap.to(particle, {
        opacity: Math.random() * 0.5 + 0.3,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }

    // Efecto de conexiones entre partículas
    this.createParticleConnections();
  }

  private createParticleConnections() {
    const particles = document.querySelectorAll('.particle');
    const container = document.querySelector('.particles-container');

    particles.forEach((p1, i) => {
      particles.forEach((p2, j) => {
        if (i < j && Math.random() > 0.7) {
          const line = document.createElement('div');
          line.className = 'particle-connection absolute bg-cyan-400/20';
          container?.appendChild(line);

          // Actualizar posición de la línea continuamente
          gsap.ticker.add(() => {
            const rect1 = p1.getBoundingClientRect();
            const rect2 = p2.getBoundingClientRect();

            const length = Math.sqrt(
              Math.pow(rect2.left - rect1.left, 2) +
              Math.pow(rect2.top - rect1.top, 2)
            );

            const angle = Math.atan2(
              rect2.top - rect1.top,
              rect2.left - rect1.left
            ) * 180 / Math.PI;

            gsap.set(line, {
              width: `${length}px`,
              height: '1px',
              left: rect1.left + rect1.width / 2,
              top: rect1.top + rect1.height / 2,
              rotation: angle,
              transformOrigin: '0 0'
            });
          });
        }
      });
    });
  }

  private setupAnimations() {
    // Configuración inicial
    gsap.set('[data-animate], .service-card', { opacity: 0, y: 30 });

    // Animación Hero Section
    const tl = gsap.timeline();
    tl.from(".hero-section h1", {
      duration: 1.2,
      opacity: 0,
      y: 50,
      ease: "power3.out"
    })
      .from(".hero-section p", {
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: "back.out(1.5)"
      }, "-=0.4")
      .from(".hero-section button", {
        duration: 0.6,
        opacity: 0,
        y: 20,
        stagger: 0.15,
        ease: "elastic.out(1, 0.5)"
      }, "-=0.3");

    // Animación Servicios
    gsap.utils.toArray<HTMLElement>('.service-card').forEach((card, i) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });
  }

  private initButtonEffects() {
    gsap.utils.toArray<HTMLElement>('.creative-btn, .barberia-btn').forEach((btn) => {
      // Efecto al hacer scroll
      ScrollTrigger.create({
        trigger: btn,
        start: "top 80%",
        onEnter: () => this.animateButton(btn),
        onEnterBack: () => this.animateButton(btn)
      });

      // Efecto hover
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
          y: -8,
          rotateX: 10,
          duration: 0.5,
          ease: "power2.out"
        });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          y: 0,
          rotateX: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.5)"
        });
      });
    });
  }

  private animateButton(btn: HTMLElement) {
    gsap.from(btn, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.5)"
    });

    gsap.to(btn, {
      'box-shadow': '0 15px 30px rgba(0, 180, 216, 0.4)',
      duration: 1.5,
      scrollTrigger: {
        trigger: btn,
        start: "top 80%",
        scrub: true
      }
    });
  }

  private animateIcons() {
    gsap.to(".icon-container", {
      y: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  private animateTitle() {
    const title = document.querySelector('.hero-section h1');
    if (title) {
      const text = title.textContent || '';
      title.innerHTML = text.split('').map(char =>
        `<span class="inline-block" style="display: inline-block;">${char}</span>`
      ).join('');

      gsap.to(title.querySelectorAll('span'), {
        y: -10,
        duration: 1,
        stagger: 0.03,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  contactWhatsApp() {
    const btn = document.querySelector('.whatsapp-btn');
    gsap.to(btn, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut",
      onComplete: () => {
        this.whatsappService.sendMessage('Me interesan sus servicios');
      }
    });
  }
}