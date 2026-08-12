import {
  Component,
  signal,
  computed,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TESTIMONIALS, Testimonial } from '../../../data/testimonials.data';
import { SectionHeadingComponent } from '../../../shared/section-heading/section-heading.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, RevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit, OnDestroy, AfterViewInit {
  testimonials = TESTIMONIALS;
  activeIndex = signal(0);

  private touchStartX = 0;
  private touchEndX = 0;
  private keydownHandler?: (e: KeyboardEvent) => void;

  @ViewChild('carouselTrack') carouselTrack?: ElementRef<HTMLDivElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  maxIndex = computed(() => Math.max(0, this.testimonials.length - 1));

  getAccentColor(index: number): string {
    const colors = ['#C7FF3D', '#FFB4C8', '#B4D4FF', '#FFD4B4', '#D4FFB4'];
    return colors[index % colors.length];
  }

  prev(): void {
    this.activeIndex.update(i => (i === 0 ? this.maxIndex() : i - 1));
  }

  next(): void {
    this.activeIndex.update(i => (i === this.maxIndex() ? 0 : i + 1));
  }

  goTo(index: number): void {
    this.activeIndex.set(index);
  }

  isActive(index: number): boolean {
    return index === this.activeIndex();
  }

  ngOnInit(): void {
    this.keydownHandler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        this.prev();
      } else if (e.key === 'ArrowRight') {
        this.next();
      }
    };
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    document.addEventListener('keydown', this.keydownHandler!);
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.keydownHandler) {
      document.removeEventListener('keydown', this.keydownHandler);
    }
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchMove(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
  }

  onTouchEnd(): void {
    const diff = this.touchStartX - this.touchEndX;
    const threshold = 50;
    if (diff > threshold) {
      this.next();
    } else if (diff < -threshold) {
      this.prev();
    }
  }
}
