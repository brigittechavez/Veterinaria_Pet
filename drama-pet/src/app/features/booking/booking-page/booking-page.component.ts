import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Pet, PetService } from '../services/pet.service';
import { Service, SERVICES } from '../../../data/services.data';
import { Vet } from '../../../data/vets.data';
import { PetStepComponent } from '../pet-step/pet-step.component';
import { ServiceStepComponent } from '../service-step/service-step.component';
import { QuestionsStepComponent } from '../questions-step/questions-step.component';
import { VetStepComponent } from '../vet-step/vet-step.component';
import { DateStepComponent } from '../date-step/date-step.component';
import { ReviewStepComponent } from '../review-step/review-step.component';
import { BookingSummaryComponent } from '../booking-summary/booking-summary.component';
import { BookingSuccessComponent } from '../booking-success/booking-success.component';

@Component({
  selector: 'app-booking-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PetStepComponent,
    ServiceStepComponent,
    QuestionsStepComponent,
    VetStepComponent,
    DateStepComponent,
    ReviewStepComponent,
    BookingSummaryComponent,
    BookingSuccessComponent
  ],
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent {
  currentStep = signal(1);
  completedSteps = signal<Set<number>>(new Set());
  isBookingConfirmed = signal(false);

  selectedPet = signal<Pet | null>(null);
  selectedService = signal<Service | null>(null);
  questionsAnswers = signal<Record<string, string>>({});
  selectedVet = signal<Vet | null>(null);
  selectedDate = signal('');
  selectedTime = signal('');
  ownerData = signal<{ nombre: string; email: string; telefono: string }>({ nombre: '', email: '', telefono: '' });

  stepTitles = [
    'Mascota',
    'Servicio',
    'Preguntas',
    'Veterinario',
    'Fecha',
    'Resumen'
  ];

  maxStep = computed(() => {
    let max = 1;
    this.completedSteps().forEach(step => {
      if (step > max) max = step;
    });
    return Math.max(max, this.currentStep());
  });

  canGoNext = computed(() => {
    const step = this.currentStep();
    switch (step) {
      case 1: return this.selectedPet() !== null;
      case 2: return this.selectedService() !== null;
      case 3: return true;
      case 4: return true;
      case 5: return this.selectedDate() !== '' && this.selectedTime() !== '';
      case 6: return false;
      default: return false;
    }
  });

  constructor(private petService: PetService) {}

  goToStep(step: number): void {
    if (step <= this.maxStep() + 1 && step >= 1) {
      this.currentStep.set(step);
    }
  }

  nextStep(): void {
    const current = this.currentStep();
    const completed = new Set(this.completedSteps());
    completed.add(current);
    this.completedSteps.set(completed);

    if (current < 6) {
      this.currentStep.set(current + 1);
    }
  }

  prevStep(): void {
    const current = this.currentStep();
    if (current > 1) {
      this.currentStep.set(current - 1);
    }
  }

  onPetSelected(pet: Pet): void {
    this.selectedPet.set(pet);
  }

  onServiceSelected(service: Service): void {
    this.selectedService.set(service);
    this.questionsAnswers.set({});
  }

  onQuestionsChanged(answers: Record<string, string>): void {
    this.questionsAnswers.set({ ...answers });
  }

  onVetSelected(vet: Vet | null): void {
    this.selectedVet.set(vet);
  }

  onDateSelected(date: string): void {
    this.selectedDate.set(date);
  }

  onTimeSelected(time: string): void {
    this.selectedTime.set(time);
  }

  onOwnerDataChanged(data: { nombre: string; email: string; telefono: string }): void {
    this.ownerData.set(data);
  }

  onConfirmBooking(data: { nombre: string; email: string; telefono: string }): void {
    this.ownerData.set(data);
    this.isBookingConfirmed.set(true);
  }

  getStepLabel(step: number): string {
    return this.stepTitles[step - 1] || '';
  }

  isStepCompleted(step: number): boolean {
    return this.completedSteps().has(step);
  }

  isStepActive(step: number): boolean {
    return this.currentStep() === step;
  }
}
