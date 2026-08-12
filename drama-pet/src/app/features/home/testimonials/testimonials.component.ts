import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TESTIMONIALS, Testimonial } from '../../../data/testimonials.data';
import { SectionHeadingComponent } from '../../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials = TESTIMONIALS;

  getAccentColor(index: number): string {
    const colors = ['#C7FF3D', '#FFB4C8', '#B4D4FF', '#FFD4B4', '#D4FFB4'];
    return colors[index % colors.length];
  }
}
