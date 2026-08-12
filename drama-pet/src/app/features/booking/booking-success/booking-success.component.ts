import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Pet } from '../services/pet.service';
import { Service } from '../../../data/services.data';
import { Vet } from '../../../data/vets.data';

@Component({
  selector: 'app-booking-success',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './booking-success.component.html',
  styleUrls: ['./booking-success.component.scss']
})
export class BookingSuccessComponent {
  @Input() pet: Pet | null = null;
  @Input() service: Service | null = null;
  @Input() vet: Vet | null = null;
  @Input() selectedDate: string = '';
  @Input() selectedTime: string = '';

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-').map(Number);
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const date = new Date(year, month - 1, day);
    return `${dayNames[date.getDay()]} ${day} de ${months[date.getMonth()]} ${year}`;
  }
}
