import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;
  @Input() revealDuration = 600;

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.el.nativeElement.style.opacity = '1';
      this.el.nativeElement.style.transform = 'none';
      return;
    }

    const style = this.el.nativeElement.style;
    style.opacity = '0';
    style.transform = 'translateY(20px)';
    style.transition = `opacity ${this.revealDuration}ms var(--ease-standard, cubic-bezier(0.4, 0, 0.2, 1)), transform ${this.revealDuration}ms var(--ease-standard, cubic-bezier(0.4, 0, 0.2, 1))`;
    style.transitionDelay = `${this.revealDelay}ms`;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            style.opacity = '1';
            style.transform = 'translateY(0)';
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
