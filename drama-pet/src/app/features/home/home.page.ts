import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ServicesPreviewComponent } from './services-preview/services-preview.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PromoComponent } from './promo/promo.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CtaFinalComponent } from './cta-final/cta-final.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    ServicesPreviewComponent,
    HowItWorksComponent,
    PromoComponent,
    TestimonialsComponent,
    CtaFinalComponent
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePageComponent {}
