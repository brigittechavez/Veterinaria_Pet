import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SERVICES, Service } from '../../../data/services.data';
import { SectionHeadingComponent } from '../../../shared/section-heading/section-heading.component';
import { IconComponent } from '../../../shared/icon/icon.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SectionHeadingComponent,
    IconComponent,
    ButtonComponent,
    RevealDirective
  ],
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent {
  services = SERVICES;

  selectedServiceId = signal<string>(SERVICES[0].id);
  isTransitioning = signal<boolean>(false);

  selectedService = computed(() => {
    return this.services.find(s => s.id === this.selectedServiceId()) || this.services[0];
  });

  isEmergency = computed(() => {
    return this.selectedService().id === 'emergencias';
  });

  selectService(id: string): void {
    if (id === this.selectedServiceId()) return;
    this.isTransitioning.set(true);
    setTimeout(() => {
      this.selectedServiceId.set(id);
      this.isTransitioning.set(false);
    }, 150);
  }
}
