import { Component, Input, signal, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES, Service } from '../../../data/services.data';
import { IconComponent } from '../../../shared/icon/icon.component';

@Component({
  selector: 'app-service-step',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './service-step.component.html',
  styleUrls: ['./service-step.component.scss']
})
export class ServiceStepComponent {
  @Input() selectedServiceId: string = '';
  @Output() serviceSelected = new EventEmitter<Service>();

  services = SERVICES.filter(s => s.hasBooking);
  showEmergencyMessage = signal(false);

  selectService(service: Service): void {
    if (service.id === 'emergencias') {
      this.showEmergencyMessage.set(true);
      return;
    }
    this.serviceSelected.emit(service);
  }

  dismissEmergencyMessage(): void {
    this.showEmergencyMessage.set(false);
  }
}
