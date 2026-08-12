import { Component, Input, signal, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VETS, Vet } from '../../../data/vets.data';

@Component({
  selector: 'app-vet-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vet-step.component.html',
  styleUrls: ['./vet-step.component.scss']
})
export class VetStepComponent {
  @Input() selectedVetId: string = '';
  @Output() vetSelected = new EventEmitter<Vet | null>();

  vets = VETS;

  selectVet(vet: Vet): void {
    this.vetSelected.emit(vet);
  }

  skipVet(): void {
    this.vetSelected.emit(null);
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .filter(w => !['Dra.', 'Dr.'].includes(w))
      .map(w => w[0])
      .join('')
      .toUpperCase();
  }
}
