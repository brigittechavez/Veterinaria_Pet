import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  private mouseMoveHandler?: (e: MouseEvent) => void;
  private rafId?: number;
  private isReducedMotion = false;

  constructor(
    private el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (this.isReducedMotion) return;

    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    const hero = this.el.nativeElement;
    const visual = hero.querySelector('.hero__visual') as HTMLElement | null;
    const circle = hero.querySelector('.hero__circle') as HTMLElement | null;
    if (!visual || !circle) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    this.mouseMoveHandler = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      targetX = (e.clientX - centerX) / rect.width;
      targetY = (e.clientY - centerY) / rect.height;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      const petTranslateX = currentX * 12;
      const petTranslateY = currentY * 8;
      const circleTranslateX = -currentX * 6;
      const circleTranslateY = -currentY * 4;

      visual.style.transform = `translate(${petTranslateX}px, ${petTranslateY}px)`;
      circle.style.transform = `translate(${circleTranslateX}px, ${circleTranslateY}px)`;

      this.rafId = requestAnimationFrame(animate);
    };

    hero.addEventListener('mousemove', this.mouseMoveHandler);
    this.rafId = requestAnimationFrame(animate);
  }

  ngOnDestroy(): void {
    if (this.mouseMoveHandler) {
      this.el.nativeElement.removeEventListener('mousemove', this.mouseMoveHandler);
    }
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }
}
