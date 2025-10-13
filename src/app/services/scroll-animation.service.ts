import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {
  private observer: IntersectionObserver | null = null;

  constructor() {
    this.initIntersectionObserver();
  }

  private initIntersectionObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  }

  observeElements(): void {
    if (this.observer) {
      const elements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
      elements.forEach((element) => {
        this.observer!.observe(element);
      });
      
      // Fallback: If no elements are found, try again after a short delay
      if (elements.length === 0) {
        setTimeout(() => {
          const retryElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
          retryElements.forEach((element) => {
            this.observer!.observe(element);
          });
        }, 500);
      }
    }
  }

  observeElement(element: Element): void {
    if (this.observer) {
      this.observer.observe(element);
    }
  }

  disconnect(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  forceShowAllElements(): void {
    const elements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
    elements.forEach((element) => {
      element.classList.add('animate');
    });
  }
}
