// ARCHIVO DE DATOS MOCK - Veterinarios de Drama Pet
// Estos son datos ficticios para desarrollo y pruebas.
// NO representan profesionales reales.

export interface Vet {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  funFact: string;
  photo: string;
}

export const VETS: Vet[] = [
  {
    id: 'vet-valeria-torres',
    name: 'Dra. Valeria Torres',
    specialty: 'Medicina preventiva y bienestar',
    experience: '8 anios de experiencia',
    funFact: 'Tiene 3 gatos adoptados que se llaman Nube, Trueno y Rayo. Dice que son sus mejores criticos.',
    photo: 'assets/images/vets/dra-valeria-torres.png'
  },
  {
    id: 'vet-mateo-rivas',
    name: 'Dr. Mateo Rivas',
    specialty: 'Medicina general',
    experience: '12 anios de experiencia',
    funFact: 'Fue campeon regional de natacion en la universidad. Afirma que nada mejor que un buen banho para relajarse.',
    photo: 'assets/images/vets/dr-mateo-rivas.png'
  },
  {
    id: 'vet-camila-leon',
    name: 'Dra. Camila Leon',
    specialty: 'Nutricion veterinaria',
    experience: '6 anios de experiencia',
    funFact: 'Estudio gastronomia antes de veterinaria. Puede preparar dietas caseras para mascotas con problemas digestivos.',
    photo: 'assets/images/vets/dra-camila-leon.png'
  }
];
