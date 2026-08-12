import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pet } from '../services/pet.service';
import { Service } from '../../../data/services.data';
import { Vet } from '../../../data/vets.data';

@Component({
  selector: 'app-review-step',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './review-step.component.html',
  styleUrls: ['./review-step.component.scss']
})
export class ReviewStepComponent {
  @Input() pet: Pet | null = null;
  @Input() service: Service | null = null;
  @Input() vet: Vet | null = null;
  @Input() selectedDate: string = '';
  @Input() selectedTime: string = '';
  @Input() ownerData: { nombre: string; email: string; telefono: string } = { nombre: '', email: '', telefono: '' };
  @Output() confirmBooking = new EventEmitter<{ nombre: string; email: string; telefono: string }>();
  @Output() ownerDataChanged = new EventEmitter<{ nombre: string; email: string; telefono: string }>();

  ownerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.ownerForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]]
    });
  }

  get nombre() {
    return this.ownerForm.get('nombre');
  }

  get email() {
    return this.ownerForm.get('email');
  }

  get telefono() {
    return this.ownerForm.get('telefono');
  }

  onFormChange(): void {
    this.ownerDataChanged.emit(this.ownerForm.value);
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-').map(Number);
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const date = new Date(year, month - 1, day);
    const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return `${dayNames[date.getDay()]} ${day} de ${months[date.getMonth()]} ${year}`;
  }

  onConfirm(): void {
    if (this.ownerForm.valid) {
      this.confirmBooking.emit(this.ownerForm.value);
    } else {
      this.ownerForm.markAllAsTouched();
    }
  }
}
