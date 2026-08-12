import { Component, Input, signal, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pet, PetService } from '../services/pet.service';
import { IconComponent } from '../../../shared/icon/icon.component';

@Component({
  selector: 'app-pet-step',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './pet-step.component.html',
  styleUrls: ['./pet-step.component.scss']
})
export class PetStepComponent {
  @Input() selectedPetId: string = '';
  @Output() petSelected = new EventEmitter<Pet>();

  pets = signal<Pet[]>([]);
  showForm = signal(false);
  showDeleteConfirm = signal<string | null>(null);

  formNombre = signal('');
  formEspecie = signal<'perro' | 'gato'>('perro');
  formEdad = signal<number | null>(null);
  formSexo = signal<'macho' | 'hembra' | ''>('');
  formRaza = signal('');
  formPeso = signal<number | null>(null);

  editPetId = signal<string | null>(null);

  constructor(private petService: PetService) {
    this.loadPets();
  }

  loadPets(): void {
    this.pets.set(this.petService.getPets());
  }

  selectPet(pet: Pet): void {
    this.petSelected.emit(pet);
  }

  openForm(pet?: Pet): void {
    if (pet) {
      this.editPetId.set(pet.id);
      this.formNombre.set(pet.nombre);
      this.formEspecie.set(pet.especie);
      this.formEdad.set(pet.edad);
      this.formSexo.set(pet.sexo);
      this.formRaza.set(pet.raza);
      this.formPeso.set(pet.peso);
    } else {
      this.resetForm();
    }
    this.showForm.set(true);
  }

  closeForm(): void {
    this.showForm.set(false);
    this.resetForm();
  }

  resetForm(): void {
    this.editPetId.set(null);
    this.formNombre.set('');
    this.formEspecie.set('perro');
    this.formEdad.set(null);
    this.formSexo.set('');
    this.formRaza.set('');
    this.formPeso.set(null);
  }

  savePet(): void {
    if (!this.formNombre().trim()) return;

    const petData = {
      id: this.editPetId() || undefined,
      nombre: this.formNombre().trim(),
      especie: this.formEspecie(),
      edad: this.formEdad(),
      sexo: this.formSexo(),
      raza: this.formRaza().trim(),
      peso: this.formPeso()
    };

    const saved = this.petService.savePet(petData);
    this.loadPets();
    this.selectPet(saved);
    this.closeForm();
  }

  confirmDelete(id: string, event: Event): void {
    event.stopPropagation();
    this.showDeleteConfirm.set(id);
  }

  deletePet(id: string): void {
    this.petService.deletePet(id);
    this.loadPets();
    this.showDeleteConfirm.set(null);
  }

  cancelDelete(): void {
    this.showDeleteConfirm.set(null);
  }

  getSpeciesIcon(especie: string): string {
    return especie === 'perro' ? 'dog' : 'cat';
  }

  formatAge(edad: number | null): string {
    if (edad === null || edad === undefined) return 'Edad no especificada';
    return edad === 1 ? '1 anio' : `${edad} anios`;
  }
}
