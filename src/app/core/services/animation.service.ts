import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({ providedIn: 'root' })
export class AnimationService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
      // Espera a que el renderizado del cliente esté completo
      // Puedes quitar afterNextRender aquí si no es necesario
    }
  }

  initScrollAnimations() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.utils.toArray<HTMLElement>('[data-animate]').forEach(element => {
        const direction = element.dataset['direction'] || 'bottom';
        this.animateFrom(element, direction);
      });
    }
  }

  private animateFrom(element: HTMLElement, direction: string) {
    const x = direction === 'left' ? -100 : direction === 'right' ? 100 : 0;
    const y = direction === 'top' ? -100 : direction === 'bottom' ? 100 : 0;

    gsap.from(element, {
      x,
      y,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });
  }

  preloadHomeAnimations() {
    return new Promise<void>((resolve) => {
      if (isPlatformBrowser(this.platformId)) {
        gsap.to('.hero-section', {
          opacity: 1,
          duration: 0.5,
          onComplete: () => resolve()
        });
      } else {
        resolve();
      }
    });
  }
}
