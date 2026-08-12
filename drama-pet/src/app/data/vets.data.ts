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
    experience: '8 a\u00f1os de experiencia',
    funFact: 'Tiene 3 gatos adoptados que se llaman Nube, Trueno y Rayo. Dice que son sus mejores cr\u00edticos.',
    photo: 'assets/images/vets/dra-valeria-torres.png'
  },
  {
    id: 'vet-mateo-rivas',
    name: 'Dr. Mateo Rivas',
    specialty: 'Medicina general',
    experience: '12 a\u00f1os de experiencia',
    funFact: 'Fue campe\u00f3n regional de nataci\u00f3n en la universidad. Afirma que nada mejor que un buen ba\u00f1o para relajarse.',
    photo: 'assets/images/vets/dr-mateo-rivas.png'
  },
  {
    id: 'vet-camila-leon',
    name: 'Dra. Camila Le\u00f3n',
    specialty: 'Nutrici\u00f3n veterinaria',
    experience: '6 a\u00f1os de experiencia',
    funFact: 'Estudi\u00f3 gastronom\u00eda antes de veterinaria. Puede preparar dietas caseras para mascotas con problemas digestivos.',
    photo: 'assets/images/vets/dra-camila-leon.png'
  }
];
