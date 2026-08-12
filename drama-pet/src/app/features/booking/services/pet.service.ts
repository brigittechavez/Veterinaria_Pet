import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface Pet {
  id: string;
  nombre: string;
  especie: 'perro' | 'gato';
  edad: number | null;
  sexo: 'macho' | 'hembra' | '';
  raza: string;
  peso: number | null;
}

const STORAGE_KEY = 'drama_pet_pets';

@Injectable({ providedIn: 'root' })
export class PetService {
  private platformId: Object;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.platformId = platformId;
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  getPets(): Pet[] {
    if (!this.isBrowser()) {
      return [];
    }
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  getPetById(id: string): Pet | undefined {
    return this.getPets().find(p => p.id === id);
  }

  savePet(pet: Omit<Pet, 'id'> & { id?: string }): Pet {
    const pets = this.getPets();
    const newPet: Pet = {
      ...pet,
      id: pet.id || this.generateId()
    };

    const existingIndex = pets.findIndex(p => p.id === newPet.id);
    if (existingIndex >= 0) {
      pets[existingIndex] = newPet;
    } else {
      pets.push(newPet);
    }

    if (this.isBrowser()) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(pets));
      } catch {}
    }

    return newPet;
  }

  deletePet(id: string): void {
    const pets = this.getPets().filter(p => p.id !== id);
    if (this.isBrowser()) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(pets));
      } catch {}
    }
  }

  private generateId(): string {
    return 'pet_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 9);
  }
}
