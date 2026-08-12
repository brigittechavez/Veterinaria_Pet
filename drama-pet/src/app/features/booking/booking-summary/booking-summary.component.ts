import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pet } from '../services/pet.service';
import { Service } from '../../../data/services.data';
import { Vet } from '../../../data/vets.data';

@Component({
  selector: 'app-booking-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.scss']
})
export class BookingSummaryComponent {
  @Input() pet: Pet | null = null;
  @Input() service: Service | null = null;
  @Input() vet: Vet | null = null;
  @Input() selectedDate: string = '';
  @Input() selectedTime: string = '';
  @Input() currentStep: number = 1;

  isCollapsed = signal(false);

  toggleCollapse(): void {
    this.isCollapsed.set(!this.isCollapsed());
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-').map(Number);
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dayNames = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    const date = new Date(year, month - 1, day);
    return `${dayNames[date.getDay()]} ${day} ${months[date.getMonth()]}`;
  }

  hasAnyData(): boolean {
    return !!(this.pet || this.service || this.selectedDate);
  }
}
