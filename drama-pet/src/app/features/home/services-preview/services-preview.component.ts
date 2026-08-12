import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SERVICES, Service } from '../../../data/services.data';
import { SectionHeadingComponent } from '../../../shared/section-heading/section-heading.component';
import { IconComponent } from '../../../shared/icon/icon.component';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-services-preview',
  standalone: true,
  imports: [CommonModule, RouterModule, SectionHeadingComponent, IconComponent, ButtonComponent],
  templateUrl: './services-preview.component.html',
  styleUrls: ['./services-preview.component.scss']
})
export class ServicesPreviewComponent {
  services = SERVICES;
  selectedServiceId = signal<string>(SERVICES[0].id);

  selectedService = computed(() => {
    return this.services.find(s => s.id === this.selectedServiceId()) || this.services[0];
  });

  selectService(id: string): void {
    this.selectedServiceId.set(id);
  }
}
